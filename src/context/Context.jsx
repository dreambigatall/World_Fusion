import { createContext, useEffect, useState, useContext } from "react";

const nationsContext = createContext();
const geojsonUrl = 'https://r2.datahub.io/clvyjaryy0000la0cxieg4o8o/master/raw/data/countries.geojson';


export default function Context({children}) {
    const [nations, setNations] = useState([]); // Fixed typo here: setNationes -> setNations
    const [loading, setLoading] = useState(false);
    const [geoJson, setGeoJson] = useState(null);

    useEffect(function(){
        async function fethingGeojson(){
            const res= await fetch(geojsonUrl);
            const data = await res.json();
            setGeoJson(data);
        }
        fethingGeojson();
    },[])
    //console.log(geoJson);

    useEffect(function() {
        async function fetchingData() { // Typo in function name fixed here as well
            try {
                setLoading(true);
                const res = await fetch("https://restcountries.com/v3.1/all");
                if (!res.ok) {
                    setLoading(false);
                    throw new Error("Something went wrong");
                }
                const data = await res.json();
                setNations(data); // Fixed typo here as well: setNationes -> setNations
            } catch (err) {
                console.log(err);
                setLoading(false);
            } finally {
                setLoading(false);
            }
        }
        fetchingData(); // Fixed typo here as well
    }, []);

    console.log(nations);

    return (
        <nationsContext.Provider value={{nations, loading, geoJson}}>
            {children}
        </nationsContext.Provider>
    );
}

function useNation() {
    const context = useContext(nationsContext);
    if (context === undefined) throw new Error("Context was used outside of the provider");
    return context;
}

export { useNation };
