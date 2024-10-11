/* eslint-disable react/prop-types */
import { useNation } from "../context/Context";





 function Nation({ onCountrySelect }) {
   const { nations } = useNation();
   //sort functionality
   const sortedNations = [...nations].sort((a, b) => 
    a.name.common.localeCompare(b.name.common)
  );

  
   return (
     <>
    
     <div className=" h-full overflow-y-scroll md:p-4 bg-gray-700  md:block relative hideen">
     
       {sortedNations.map((country, index) => (
         <div
           key={index}
           className="flex items-center gap-2 py-2 px-2 border-b-2 border-stone-500 cursor-pointer"
           onClick={() => onCountrySelect(country.latlng)}   //Pass the coordinates to the Map component
         >
           <img src={country.flags.svg} alt="" className="size-max w-16" />
           <h1 className="text-gray-300">{country.name.common}</h1>
         </div>
       ))}
     </div>
     </>
   );
 }

 export default Nation;



 