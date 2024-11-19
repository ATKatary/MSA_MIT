import React, {useState, useEffect} from 'react';

import db from '../utils/referrals-base'
import { onValue, ref } from 'firebase/database'
import { AgGridReact } from 'ag-grid-react';
import { Button } from 'reactstrap';

import "ag-grid-community/styles/ag-grid.css";
import "ag-grid-community/styles/ag-theme-quartz.css";


export default function ReferralListings() {
    const [rowData, setRowData] = useState([]);
    const [selectedRow, setSelectedRow] = useState(null);
    const colDefs =  [
        {headerName: "Name", field: 'Name', flex: 1, filter: true, floatingFilter: true},
        {headerName: 'Company Name', field: 'Company Name', flex: 1, filter: true, floatingFilter: true}
    ]

    useEffect(() => { //prevents infinite loop of refreshes and firebase fetches
        const referralDB = ref(db);
    
        const handleSnapshot = (snapshot) => {
          var data = snapshot.val();
          data = data.filter(elements => (elements !== null));
          setRowData(data);
        };
    
        const unsubscribe = onValue(referralDB, handleSnapshot);
    
        return () => {
          unsubscribe();
        };
      }, []);

      const handleRowSelected = (event) => {
        setSelectedRow(event.api.getSelectedRows()[0]);
      };
    
      const closeOverlay = () => {
        setSelectedRow(null);
      };
    
    return (<>
        <div className="more-info-screen" //screen that appears when row of table is clicked
        style={{ 
          visibility: selectedRow ? "visible" : "hidden", 
          zIndex: 1000, position: "fixed" }}>
          {selectedRow && (
            <>
              <h1>{selectedRow["Company Name"]} - {selectedRow["Name"]}</h1>
              {Object.entries(selectedRow).map(([key, value]) => { //populating screen with more information about the referral posting
                if (value !== null && key === "Email") { 
                    return <p key={key}><strong>{key}:</strong> {<a href={"mailto:" + value}> {value} </a> }</p>;
                }else if (value !== null && !["Name", "Company Name", "Timestamp"].includes(key)) {
                    return <p key={key}><strong>{key}:</strong> {value}</p>;
                }
                return null;
                })}
              <Button className='return-button' onClick={closeOverlay}>Close</Button>
            </>
          )}
        </div>
        <div className='ag-theme-quartz' style={{ height: 500, zIndex: 1, width: "80%", paddingTop: "1vh"}}>
          <AgGridReact rowData={rowData} columnDefs={colDefs} rowSelection='single' onRowClicked={handleRowSelected}/>
        </div>
      </>
      
        )

}