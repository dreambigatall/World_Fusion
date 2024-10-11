import { createContext, useEffect, useState, useContext ,useReducer} from "react";

const nationsContext = createContext();
const geojsonUrl = 'https://r2.datahub.io/clvyjaryy0000la0cxieg4o8o/master/raw/data/countries.geojson';

const initalState = {
    nations: [],
    loading: false,
    geoJson: null,
};
function reducer(state,action){
    switch(action.type){
        case "country/loading":
            return {...state, loading: true}
        case "contry/dataReceived":
            return {...state, nations: action.payload, loading: false}
        case "country/dataFailed":
            return {...state, loading: false}
        default:
            throw new Error("Unknown action")
    }

}

export default function Context({children}) {
    //const [nations, setNations] = useState([]); // Fixed typo here: setNationes -> setNations
    //const [loading, setLoading] = useState(false);
    const [geoJson, setGeoJson] = useState(null);
    const [state, dispatch] = useReducer(reducer, initalState);
    const {nations,loading} = state;

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
            dispatch({type: "country/loading"});
            try {

                //setLoading(true);
                const res = await fetch("https://restcountries.com/v3.1/all");
                if (!res.ok) {
                    //setLoading(false);
                    dispatch({type: "country/dataFailed"});
                    throw new Error("Something went wrong");
                }
                const data = await res.json();
                //setNations(data); // Fixed typo here as well: setNationes -> setNations
                dispatch({type: "contry/dataReceived", payload: data});
            } catch (err) {
                console.log(err);
                //setLoading(false);
                dispatch({type: "country/dataFailed"});
            } finally {
               // setLoading(false);
               dispatch({type: "country/dataFailed"});
            }
        }
        fetchingData(); // Fixed typo here as well
    }, []);

    
// Function to handle sorting

    console.log(nations);

    return (
        <nationsContext.Provider value={{nations, loading, geoJson, }}>
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
