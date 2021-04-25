import React,{useState} from 'react'
import {MapContainer,TileLayer,Marker,Popup} from "react-leaflet"
import { showDataOnMap } from "./util";


function Map({center,casesType,zoom,countries}) {
    const [lat,setLat] = useState(0);
    const[lng,setLng] = useState(0);
    return (
        <div>
            <MapContainer className="map" center={center} zoom={zoom}>
            <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        />
        
        {showDataOnMap(countries, casesType)}
                

            </MapContainer>
            
        </div>
    )
}

export default Map
