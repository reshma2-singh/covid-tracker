import React,{useState,useEffect} from 'react';

import './App.css';
import {FormControl,Select} from "@material-ui/core"
import  { MenuItem } from '@material-ui/core'; 
import InfoBox from "./InfoBox"

import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Table from "./Table"

import "leaflet/dist/leaflet.css";
import Map from "./Map"

import numeral from "numeral"

import { sortData, prettyPrintStat } from "./util";



function App() {
  const [mapZoom, setMapZoom] = useState(3);
  const[countries,setCountries] = useState([])
  const [country,setCountry] = useState("worldwide");
  const[countryInfo,setCountryInfo] = useState({})
  const[tableData,setTableData] = useState([])
  const [casesType, setCasesType] = useState("cases");
  const [mapCountries,setMapCountries] = useState([]);
  const [mapCenter, setMapCenter] = useState({ lat: 34.80746, lng: -40.4796 });
  
  useEffect(() =>{
    const getCountriesData = async ()=>{
      const response = await fetch("https://disease.sh/v3/covid-19/countries")
      const data = await response.json();
      return data;
    };
      getCountriesData().then((data)=>{
        const countries = data.map((country)=>(
          {
            name:country.country,
            value:country.countryInfo.iso2
          }
        ))
        const sortedData = sortData(data);
      setTableData(sortedData);
        setCountries(countries);
        setMapCountries(data);
      })
    

    
    
    });
    const onCountryChange = async(event) =>{
      const countryCode = event.target.value;
      setCountry(countryCode)
      const url = countryCode ==='worldwide'?'https://disease.sh/v3/covid-19/all':`https://disease.sh/v3/covid-19/countries/${countryCode}`
      await fetch(url)
      .then(response =>response.json())
      .then(data=>{
        setCountry(countryCode)
        setCountryInfo(data)
        setMapCenter([data.countryInfo.lat,data.countryInfo.long])
        setMapZoom(4);
      })

    }
  return (
    
      
      <div className="app">
      <div className="app__left">
      <div className="app__header">
        <h1>COVID-19 TRACKER</h1>
        <FormControl className="app__dropdown">
          <Select variant="outlined"
           onChange={onCountryChange}
            value={country} >
            
            <MenuItem value="worldwide">worldwide</MenuItem>
            {countries.map((country)=>(
             <MenuItem value={country.value}>{country.name}</MenuItem> 
            ))}
          </Select>
        </FormControl>
      </div>
      <div className="app__stats">
      <InfoBox
            onClick={(e) => setCasesType("cases")}
            title="Coronavirus Cases"
            isRed
            active={casesType === "cases"}
            cases={prettyPrintStat(countryInfo.todayCases)}
            total={numeral(countryInfo.cases).format("0.0a")}
          />
        <InfoBox
            onClick={(e) => setCasesType("recovered")}
            title="Recovered"
            active={casesType === "recovered"}
            cases={prettyPrintStat(countryInfo.todayRecovered)}
            total={numeral(countryInfo.recovered).format("0.0a")}
          />
          <InfoBox
            onClick={(e) => setCasesType("deaths")}
            title="Deaths"
            isRed
            active={casesType === "deaths"}
            cases={prettyPrintStat(countryInfo.todayDeaths)}
            total={numeral(countryInfo.deaths).format("0.0a")}
          />
      </div>
      <Map
       countries={mapCountries}
       casesType={casesType}
       center={mapCenter}
       zoom={mapZoom}
      />
      </div>
      <Card className="app__right">
        <CardContent>
          <Table countries={tableData} />
          
        </CardContent>
      
      </Card>
     
        
    </div>
  );
}

export default App;
