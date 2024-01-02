import React, { useState, useEffect } from 'react';

const SedanFilter = ({ setSedans }) => {
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

  const applyFilters = () => {
    // Use fetch to send a GET request with the filters to the server
    const queryParams = new URLSearchParams(filters).toString();
    fetch(`http://localhost:5000/sedans?${queryParams}`)
      .then(response => response.json())
      .then(data => setSedans(data))
      .catch(error => console.error('Error fetching filtered sedans:', error));
  };

  return (
    <div>
      <h2>Filter Sedans</h2>
      <div>
        <label>Engine:</label>
        <select multiple name="engine" value={filters.engine} onChange={handleMultiSelectChange}>
          {engineOptions.map(engine => (
            <option key={engine} value={engine}>{engine}</option>
          ))}
        </select>
      </div>
      <div>
        <label>Gear:</label>
        <select multiple name="gear" value={filters.gear} onChange={handleMultiSelectChange}>
          {gearOptions.map(gear => (
            <option key={gear} value={gear}>{gear}</option>
          ))}
        </select>
      </div>
      <div>
        <label>Gear Type:</label>
        <select multiple name="gearType" value={filters.gearType} onChange={handleMultiSelectChange}>
          {gearTypeOptions.map(gearType => (
            <option key={gearType} value={gearType}>{gearType}</option>
          ))}
        </select>
      </div>
      <div>
        <label>Fuel Type:</label>
        <select multiple name="fuelType" value={filters.fuelType} onChange={handleMultiSelectChange}>
          {fuelTypeOptions.map(fuelType => (
            <option key={fuelType} value={fuelType}>{fuelType}</option>
          ))}
        </select>
      </div>
      <div>
        <label>Price Range:</label>
        <input type="number" name="minPrice" placeholder="Min" value={filters.minPrice} onChange={handleInputChange} />
        <input type="number" name="maxPrice" placeholder="Max" value={filters.maxPrice} onChange={handleInputChange} />
      </div>
      <button onClick={applyFilters}>Apply Filters</button>
      
    </div>
  );
};

export default SedanFilter;
