import db from '../utils/jobs-base'
import { onValue, ref } from 'firebase/database'
import React, {useState, useEffect} from 'react';

import './styles.css';

const JobPosting = (row, constraints) => {
    
    var [timestamp, title, company, description, reqs, loc, type, contact, start, end, sponsorship] = [
        row["Timestamp"], 
        row["Job Title"], 
        row["Company Name"],
        row["Job Description"],
        row["Job Requirements"],
        row["Location"],
        row["Job Type"],
        row["Email to Contact"],
        row["Start Date"],
        row["End Date"],
        row["Sponsorship"]
    ];

    const tags = new Set([loc, type, sponsorship]);
    const constraintsArray = Array.from(constraints.values());
    console.log(constraintsArray);
    let isFiltered = true;

    if (!constraintsArray.every((
        constraintsByGroup => constraintsByGroup.size === 0 || Array.from(constraintsByGroup).some(
            (element) => tags.has(element)
        )
    ))){
        return null
    }

    timestamp = new Date(timestamp).toDateString();
    var dateDetails;
    if (!end) {
        dateDetails = "Start Date: " + start;
    } else {
        dateDetails = "Start Date: " + start + "\n End Date: " + end;
    }

    return (<div className="job-posting" 
    title={title}
    type={type} 
    company={company}
    location={loc}
    description={description}
    requirements={reqs}>
    <div className="job-title-type">
    <div className="job-title">{title}</div>
    <div className="job-type">{type}</div>
    </div>
    <div className="company-name">{company}</div>
    <div className="job-location">{loc}</div>
    <div className="job-description">{description}</div>
    <div className="job-reqs">Requirements:  {getRequirementsList(reqs.split(". "))}</div>
    <div className="sponsorship">{sponsorship}</div>
    <div className="contact">Please reach out to <a href={"mailto:" + contact}> {contact} </a> for more details</div>
    <div className="date-details">Posted on {timestamp}</div>
    <div className="date-details">{dateDetails}</div>
    </div>)
}

function getRequirementsList(reqs) {
    return (<ul>
        {reqs.map((req) => <li> {req} </li>)}
    </ul>)
}

const FilterGroups = (constraints, setConstraints) => {
    const handleCheck = (e) => { // filtering logic
        
        const filterName = e.target.value;
        const filterGroupName = e.target.name;
        const newConstraints = new Map(constraints)
        if (newConstraints.has(filterGroupName) && newConstraints.get(filterGroupName).has(filterName)) {
            newConstraints.get(filterGroupName).delete(filterName);
        } else {
            if (!newConstraints.has(filterGroupName))
            {
                newConstraints.set(filterGroupName, new Set())
            }
            const constraintsForGroup = newConstraints.get(filterGroupName);
            constraintsForGroup.add(filterName)
        }
        setConstraints(newConstraints)
    };
    return (
        <div className="filter-groups">
        <div className="filter-group">
            <h2 className="filter-name">Job Type</h2>
            <label>
                <input type="checkbox" className="filter-box" name="jobType" value="Internship" onChange={handleCheck}/> Internship
            </label>
            <label>
                <input type="checkbox" className="filter-box" name="jobType" value="Full-Time" onChange={handleCheck}/> Full Time
            </label>
            <label>
                <input type="checkbox" className="filter-box" name="jobType" value="Part-Time" onChange={handleCheck}/> Part Time
            </label>
        </div>

        <div className="filter-group">
            <h2 className="filter-name">Location</h2>
            <label>
                <input type="checkbox" className="filter-box" name="location" value="Remote" onChange={handleCheck}/> Remote
            </label>
        </div>

        <div className="filter-group">
            <h2 className="filter-name">Sponsorship</h2>
            <label>
                <input type="checkbox" className="filter-box" name="sponsorship" value="Can Sponsor" onChange={handleCheck}/> Can sponsor international students
            </label>
        </div>
        </div>

    )
}

export default function JobPosts() {
    const [jobPostings, setJobPostings] = useState([]);
    const [constraints, setConstraints] = useState(new Map()); //constrains displayed job postings. maps from filter type to a set of the filters under that type

    useEffect(() => { //prevents infinite loop of refreshes and firebase fetches. also caches fetched postings for session
        const cachedPostings = sessionStorage.getItem("jobPostings");

        if (cachedPostings){
            setJobPostings(JSON.parse(cachedPostings));
            return () => {};
        } else {
            const jobDB = ref(db);
    
            const handleSnapshot = (snapshot) => {
              var data = snapshot.val();
              data = data.filter(elements => (elements !== null));
              setJobPostings(data);

              sessionStorage.setItem('jobPostings', JSON.stringify(data));
            };
            const unsubscribe = onValue(jobDB, handleSnapshot);
    
            return () => {
              unsubscribe();
            };
        }
      }, []);

    return (<div className='posting-page'>
            {FilterGroups(constraints, setConstraints)}
            <div className='job-postings'>{jobPostings.map((row) => JobPosting(row, constraints))}</div>
        </div>)
}

