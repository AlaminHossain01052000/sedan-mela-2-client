import { Button } from '@mui/material';
import React, { useState, useEffect } from 'react';
import './SedanFilter.css'
const SedanFilter = ({ setQueryParams,clearAll,setClearAll }) => {
  const [filters, setFilters] = useState({
    engine: [],
    gear: [],
    gearType: [],
    fuelType: [],
    minPrice: '',
    maxPrice: '',
  });

  const [engineOptions, setEngineOptions] = useState([]);
  const [gearOptions, setGearOptions] = useState([]);
  const [gearTypeOptions, setGearTypeOptions] = useState([]);
  const [fuelTypeOptions, setFuelTypeOptions] = useState([]);
  useEffect(()=>{
    if(clearAll){
      setFilters({
        engine: [],
    gear: [],
    gearType: [],
    fuelType: [],
    minPrice: '',
    maxPrice: '',
      })
      setClearAll(false)
    }
  },[clearAll,setClearAll])
  useEffect(() => {
    // Fetch unique engine options
    fetch('http://localhost:5000/sedans/engines')
      .then(response => response.json())
      .then(data => setEngineOptions(data))
      .catch(error => console.error('Error fetching engine options:', error));

    // Fetch unique gear options
    fetch('http://localhost:5000/sedans/gears')
      .then(response => response.json())
      .then(data => setGearOptions(data))
      .catch(error => console.error('Error fetching gear options:', error));

    // Fetch unique gearType options
    fetch('http://localhost:5000/sedans/gearTypes')
      .then(response => response.json())
      .then(data => setGearTypeOptions(data))
      .catch(error => console.error('Error fetching gearType options:', error));

    // Fetch unique fuelType options
    fetch('http://localhost:5000/sedans/fuelTypes')
      .then(response => response.json())
      .then(data => setFuelTypeOptions(data))
      .catch(error => console.error('Error fetching fuelType options:', error));
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFilters((prevFilters) => ({ ...prevFilters, [name]: value }));
  };

  const handleMultiSelectChange = (e) => {
    const { name, options } = e.target;
    const selectedOptions = Array.from(options).filter(option => option.selected).map(option => option.value);
    setFilters((prevFilters) => ({ ...prevFilters, [name]: selectedOptions }));
  };

  const clearFilter = (filterName) => {
    setFilters((prevFilters) => ({ ...prevFilters, [filterName]: [] }));
  };

  const applyFilters = () => {
    // Use fetch to send a GET request with the filters to the server
    const queryParams = new URLSearchParams(filters).toString();
  
    setQueryParams(queryParams)
   
  };
  // applyFilters()

  return (
    <div className="container mt-3">
      <h2>Filter</h2>

      {/* Engine */}
      <div className="mb-3">
        <label className="form-label font-roboto">Engine:</label>
        <select className='form-select font-roboto' 
          multiple
          name="engine"
          value={filters.engine}
          onChange={handleMultiSelectChange}
        >
          {engineOptions.map(engine => (
            <option className='font-roboto' key={engine} value={engine} >{engine}</option>
          ))}
        </select>
        {filters.engine.length > 0 &&
          <Button
            variant="outlined"
            style={{margin:"10px"}}
            onClick={() => clearFilter('engine')}
          >
            Clear
          </Button>
        }
      </div>

      {/* Gear */}
      <div className="mb-3">
        <label className="form-label font-roboto">Gear:</label>
        <select className='form-select font-roboto' 
          multiple
          name="gear"
          value={filters.gear}
          onChange={handleMultiSelectChange}
        >
          {gearOptions.map(gear => (
            <option className='font-roboto' key={gear} value={gear}>{gear}</option>
          ))}
        </select>
        {filters.gear.length > 0 &&
          <Button
          variant="outlined"
          style={{margin:"10px"}}
            onClick={() => clearFilter('gear')}
          >
            Clear
          </Button>
        }
      </div>

      {/* Gear Type */}
      <div className="mb-3">
        <label className="form-label font-roboto">Gear Type:</label>
        <select className='form-select font-roboto' 
          multiple
          name="gearType"
          value={filters.gearType}
          onChange={handleMultiSelectChange}
        >
          {gearTypeOptions.map(gearType => (
            <option className='font-roboto' key={gearType} value={gearType}>{gearType}</option>
          ))}
        </select>
        {filters.gearType.length > 0 &&
          <Button
          variant="outlined"
          style={{margin:"10px"}}
            onClick={() => clearFilter('gearType')}
          >
            Clear
          </Button>
        }
      </div>

      {/* Fuel Type */}
      <div className="mb-3">
        <label className="form-label font-roboto">Fuel Type:</label>
        <select className='form-select font-roboto' 
          multiple
          name="fuelType"
          value={filters.fuelType}
          onChange={handleMultiSelectChange}
        >
          {fuelTypeOptions.map(fuelType => (
            <option className='font-roboto' key={fuelType} value={fuelType}>{fuelType}</option>
          ))}
        </select>
        {filters.fuelType.length > 0 &&
          <Button
          variant="outlined"
          style={{margin:"10px"}}
            onClick={() => clearFilter('fuelType')}
          >
            Clear
          </Button>
        }
      </div>

      {/* Price Range */}
      <div style={{display:"flex",flexDirection:'column',marginTop:"20px"}}>
        <label className="form-label font-roboto">Price Range:</label>
        <input
          type="number"
          className="form-control"
          name="minPrice"
          placeholder="Min"
          value={filters.minPrice}
          onChange={handleInputChange}
          style={{borderRadius:"10px",padding:"10px",borderWidth:"3px",borderColor:"blue",marginBottom:"20px",marginTop:"10px"}}
        />
        <input
          type="number"
          className="form-control"
          name="maxPrice"
          placeholder="Max"
          value={filters.maxPrice}
          onChange={handleInputChange}
          style={{borderRadius:"10px",padding:"10px",borderWidth:"3px",borderColor:"blue"}}
          
        />
      </div>
      <Button variant="contained" onClick={applyFilters}
      style={{marginTop:"20px"}}
      >Apply</Button>

    
    </div>
  );
};

export default SedanFilter;
