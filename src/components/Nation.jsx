import { useState } from "react"
import { useEffect } from "react"
import Spinner from "../UI/Spinner";
import { useNation } from "../context/Context";

function Nation() {
  const [country, setCountery]=useState();
  const {nations,loading}=useNation();
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
  return (
    <div className="md:w-1/6 md:h-full md:overflow-y-scroll md:p-4 md:bg-stone-700 hidden md:block">
      {
        nations.map((country,index)=>{
          return(
            <div key={index}>
              <h1>{country.name.common}</h1>
              <img src={country.flags.png} alt="" className="size-16" />
             
            </div>
          )
        })
      }
      
    </div>
  )
}

export default Nation;
