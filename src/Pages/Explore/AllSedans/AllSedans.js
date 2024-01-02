import {  Button, Grid } from '@mui/material';
import React, { useEffect, useState } from 'react';
import SedanCard from '../SedanCard/SedanCard';
import SedanFilter from '../SedanFilter/SedanFilter';

const AllSedans = () => {
    const [sedans, setSedans] = useState([]);
    const [queryParams, setQueryParams] = useState("");
    const [clearAll,setClearAll]=useState(false)
    useEffect(() => {

        fetch(`http://localhost:5000/sedans?${queryParams}`)
            .then(response => response.json())
            .then(data => setSedans(data))
            .catch(error => console.error('Error fetching filtered sedans:', error));
            
    }, [queryParams])
    const handleQuerySetting = () => {
        setQueryParams("");
        setClearAll(true);
    }
    return (

        sedans?.length === 0 ?
        <div style={{ display: "flex", flexWrap: "wrap", marginLeft: "20px", marginTop: "50px" }}>
        <div style={{ flex: "1", marginRight: "20px" ,marginTop:"50px"}}>
            <h5>Sorry no product is available!</h5>
            <Button variant="contained"  onClick={handleQuerySetting}>Clear All Filters</Button>
        </div>
        <div style={{ }}>
            <SedanFilter setQueryParams={setQueryParams} clearAll={clearAll} setClearAll={setClearAll}/>
        </div>
    </div>
            :
            <div style={{ display: "flex", flexWrap: "wrap", marginLeft: "20px", marginTop: "50px" }}>
                <div style={{ flex: "1", marginRight: "20px" }}>
                    <Grid container spacing={2}>
                        {sedans.map((sedan) => (
                            <SedanCard key={sedan._id} sedan={sedan}></SedanCard>
                        ))}
                    </Grid>
                </div>
                <div style={{ flex: "0 0 300px" }}>
                    <SedanFilter setQueryParams={setQueryParams} clearAll={clearAll} setClearAll={setClearAll}/>
                </div>
            </div>



    );
};

export default AllSedans;