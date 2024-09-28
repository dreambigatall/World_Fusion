import { useState } from "react"
//import { useEffect } from "react"
//import Spinner from "../UI/Spinner";
import { useNation } from "../context/Context";

//function Nation() {
  //const [country, setCountery]=useState();
  //const {nations,loading}=useNation();
//   useEffect(function(){
//     async function fetchData(){
//       const response = await fetch("https://restcountries.com/v3.1/all")
//       const data = await response.json()
//       console.log(data)
//       const sortedCountries = data.sort((a, b) => a.name.common.localeCompare(b.name.common));

//       setCountery(sortedCountries);
//     }
//     fetchData();
//   },[])
  //if(!loading) return <Spinner/>
//   return (
//     <div className="w-1/4 h-full overflow-y-scroll md:p-4 md:bg-gray-700 hidden md:block">
//       {
//         nations.map((country,index)=>{
//           return(
//             <div key={index} className="flex items-center gap-2 py-2 px-2 border-b-2 border-stone-500">
//               <img src={country.flags.svg} alt="" className=" size-max w-16 " />
//               <h1 className="text-gray-300 ">{country.name.common}</h1>

             
//             </div>
//           )
//         })
//       }
      
//     </div>
//   )
// }

function Nation({ onCountrySelect }) {
  const { nations } = useNation();

  return (
    <div className="w-1/4 h-full overflow-y-scroll md:p-4 md:bg-gray-700  md:block relative">
      {nations.map((country, index) => (
        <div
          key={index}
          className="flex items-center gap-2 py-2 px-2 border-b-2 border-stone-500 cursor-pointer"
          onClick={() => onCountrySelect(country.latlng)}  // Pass the coordinates to the Map component
        >
          <img src={country.flags.svg} alt="" className="size-max w-16" />
          <h1 className="text-gray-300">{country.name.common}</h1>
        </div>
      ))}
    </div>
  );
}

export default Nation;



