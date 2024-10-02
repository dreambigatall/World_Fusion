/* eslint-disable react/prop-types */

import { MapContainer, TileLayer, Marker, Popup, useMap,GeoJSON } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import { useEffect} from 'react';
import { useNation } from '../context/Context';
import L from 'leaflet';

export default function Map({ selectedCountryCoords }) {
  const position = [9.145, 40.4897]; // Default center position for the map (Ethiopia)
  
  const { nations,geoJson } = useNation();
  const countryStyle = {
    fillColor: '#3388ff',   // Light blue fill
    weight: 2,              // Border weight
    opacity: 1,             // Border opacity
    color: 'blue',          // Border color
    fillOpacity: 0.3,       // Fill opacity for transparency
  };


  const createIcon = (flagUrl) => {
    return L.divIcon({
      className: '', // No default class
      html: `<div class="w-5 h-5 rounded-full overflow-hidden border-2 border-gray-300">
               <img src="${flagUrl}" alt="flag" class="w-full h-full object-cover " />
             </div>`,
      iconSize: [40, 40], // Size of the icon
    });
  };

  // Custom component to handle map flyTo
  function FlyToLocation({ coords }) {
    const map = useMap(); // Get the map instance

    useEffect(() => {
      if (coords) {
        map.flyTo(coords, 6); // Fly to the selected country's coordinates with zoom level 6
      }
    }, [coords, map]);

    //alert(nations.name.common)

    return null;
  }

  return (
    <div className="w-full h-full relative">
      
      <MapContainer
        center={position}
        zoom={8}
        minZoom={2}
        scrollWheelZoom={true}
        className="w-full h-full"
        


      >
        <TileLayer
          url="https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png"
          attribution='&copy; <a href="https://www.carto.com/attributions">CARTO</a>'
        />

        {/* Fly to the selected country when coords change */}
        {selectedCountryCoords && <FlyToLocation coords={selectedCountryCoords} /> }

        {geoJson && (
          <GeoJSON data={geoJson} style={countryStyle} />
        )}


        {/* Display markers for each country */}
        {nations.map((country, index) => (

          <Marker
            position={country.latlng}
            key={index}
            icon={createIcon(country.flags.svg)}
           
          >
            
            <Popup>
              <div className="p-2 text-left">
                {/* Flag and Coat of Arms */}
                <div className="flex items-center mb-2">
                  <img
                    src={country.flags.svg}
                    alt={`${country.name.common} flag`}
                    className="w-8 h-auto mr-2 border-stone-700 border-2"
                  />
                  {country.coatOfArms.svg && (
                    <img
                      src={country.coatOfArms.svg}
                      alt={`${country.name.common} coat of arms`}
                      className="w-8 h-8"
                    />
                  )}
                </div>

                {/* Country Details */}
                <div>
                  <p className="text-lg font-semibold mb-1">{country.name.common}</p>
                  <p className="text-sm">
                    <span className="font-semibold">Capital: </span>
                    <span className="font-bold">{country.capital}</span>
                  </p>
                  <p className="text-sm">
                    <span className="font-semibold">Independent: </span>
                    {country.independent === true ? "Yes" : "No"}
                  </p>
                  <p className="text-sm">
                    <span className="font-semibold">Region: </span>
                    {country.continents}
                  </p>
                  <p className="text-sm">
                    <span className="font-semibold">Subregion: </span>
                    {country.subregion}
                  </p>
                  <p className="text-sm">
                    <span className="font-semibold">Area: </span>
                    {country.area.toLocaleString()} square km
                  </p>
                  <p className="text-sm">
                    <span className="font-semibold">Population: </span>
                    {country.population.toLocaleString()} people
                  </p>

                  {/* Wikipedia Link */}
                  <p className="text-sm mt-2">
                    <a
                      href={`https://en.wikipedia.org/wiki/${country.name.common.replace(
                        /\s/g,
                        "_"
                      )}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-600 hover:underline"
                    >
                      Wikipedia
                    </a>
                  </p>
                </div>
              </div>
              
            </Popup>
            <Popup>
              <div className="p-2 text-left">
                {/* Flag and Coat of Arms */}
                <div className="flex items-center mb-2">
                  <img
                    src={country.flags.svg}
                    alt={`${country.name.common} flag`}
                    className="w-8 h-auto mr-2 border-stone-700 border-2"
                  />
                  {country.coatOfArms.svg && (
                    <img
                      src={country.coatOfArms.svg}
                      alt={`${country.name.common} coat of arms`}
                      className="w-8 h-8"
                    />
                  )}
                </div>

                {/* Country Details */}
                <div>
                  <p className="text-lg font-semibold mb-1">{country.name.common}</p>
                  <p className="text-sm">
                    <span className="font-semibold">Capital: </span>
                    <span className="font-bold">{country.capital}</span>
                  </p>
                  <p className="text-sm">
                    <span className="font-semibold">Independent: </span>
                    {country.independent === true ? "Yes" : "No"}
                  </p>
                  <p className="text-sm">
                    <span className="font-semibold">Region: </span>
                    {country.continents}
                  </p>
                  <p className="text-sm">
                    <span className="font-semibold">Subregion: </span>
                    {country.subregion}
                  </p>
                  <p className="text-sm">
                    <span className="font-semibold">Area: </span>
                    {country.area.toLocaleString()} square km
                  </p>
                  <p className="text-sm">
                    <span className="font-semibold">Population: </span>
                    {country.population.toLocaleString()} people
                  </p>

                  {/* Wikipedia Link */}
                  <p className="text-sm mt-2">
                    <a
                      href={`https://en.wikipedia.org/wiki/${country.name.common.replace(
                        /\s/g,
                        "_"
                      )}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-600 hover:underline"
                    >
                      Wikipedia
                    </a>
                  </p>
                </div>
              </div>
              
            </Popup>

          </Marker>
                    
))}
        
      </MapContainer>
    </div>
  );
}


    
  