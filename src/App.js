import React, { useState } from 'react';
import './App.css';
import { MenuItem, FormControl, Select } from "@material-ui/core";

function App() {
  const [countries, setCountries] = useState([
    'USA', 'INDIA', 'PAKISTAN'
  ]);

  return (
    <div className="app">
      <div className="app__header">
      <h1>Covid-19 Tracker</h1>
        <FormControl className="app__dropdown">
          <Select
            variant="outlined"
            value="abc"
            >

            {
              countries.map(country => (
                <MenuItem value={country}> {country} </MenuItem>
              ))
            }
            
            {/* <MenuItem value="worldwide">Worldwide</MenuItem>
            <MenuItem value="worldwide">Option 1</MenuItem>
            <MenuItem value="worldwide">Option 2</MenuItem>
            <MenuItem value="worldwide">Option 3</MenuItem> */}

          </Select>
        </FormControl>
      </div>
    </div>
  );
}

export default App;
