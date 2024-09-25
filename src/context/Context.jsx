import { createContext, useEffect, useState, useContext } from "react";

const nationsContext = createContext();

export default function Context({children}) {
    const [nations, setNations] = useState([]); // Fixed typo here: setNationes -> setNations
    const [loading, setLoading] = useState(false);

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
        <nationsContext.Provider value={{nations, loading}}>
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
