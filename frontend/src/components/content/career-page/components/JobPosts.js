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

    const tags = new Set([loc, type, sponsorship])
    const constraintsArray = Array.from(constraints)
    console.log(constraints)
    console.log(tags)
    if (!constraintsArray.every(element => tags.has(element))){
        return null
    }

    timestamp = new Date(timestamp).toDateString();
    var dateDetails;
    if (!end) {
        dateDetails = "Start Date: " + start;
    } else {
        console.log(start)
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
    const handleCheck = (e) => {
        
        const val = e.target.value
        const newConstraints = new Set(constraints)
        if (newConstraints.has(val)) {
            newConstraints.delete(val)
        } else {
            newConstraints.add(val)
        }
        setConstraints(newConstraints)
        console.log(newConstraints)
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
                <input type="checkbox" className="filter-box" name="remote" value="Remote" onChange={handleCheck}/> Remote
            </label>
        </div>

        <div className="filter-group">
            <h2 className="filter-name">Sponsorship</h2>
            <label>
                <input type="checkbox" className="filter-box" name="remote" value="Can Sponsor" onChange={handleCheck}/> Can sponsor international students
            </label>
        </div>
        </div>

    )
}

export default function JobPosts() {
    const [jobPostings, setJobPostings] = useState([]);
    const [constraints, setConstraints] = useState(new Set());

    useEffect(() => {
        const jobDB = ref(db);
    
        const handleSnapshot = (snapshot) => {
          var data = snapshot.val();
          data = data.filter(elements => (elements !== null));
          console.log(data)
          setJobPostings(data);
        };
    
        const unsubscribe = onValue(jobDB, handleSnapshot);
    
        return () => {
          unsubscribe();
        };
      }, []);

    return (<div className='posting-page'>
            {FilterGroups(constraints, setConstraints)}
            <div className='job-postings'>{jobPostings.map((row) => JobPosting(row, constraints))}</div>
        </div>)
}

