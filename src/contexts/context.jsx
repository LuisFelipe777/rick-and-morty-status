import axios from "axios";
import React, { createContext, useEffect, useState } from "react";

const AppContext = createContext();
const url = "https://rickandmortyapi.com/api/character";

function AppProvider({ children }) {
    const [characters, setCharacters] = useState([]);
    const [loading, setLoading] = useState([false]);
    const [SearchCharacter, setSearchCharacter] = useState("");

    async function getCharacters(url) {
        setLoading(true);
        try {
            const { data } = await axios(url);
            data.results ? setCharacters(data.results) : setMeals([]);
        } catch (error) {
            console.log(error);
        }
        setLoading(false);
    }
    useEffect(
        () => {
            getCharacters(url)
        }, []
    );
    useEffect(() => {
        if (!SearchCharacter) {
            getCharacters(url);
        }
        getCharacters(`${url}?name=${SearchCharacter}`)
    }, [SearchCharacter])
    return <AppContext.Provider value={{ characters, loading, setSearchCharacter }}>
        {children}
    </AppContext.Provider>
}

export { AppProvider, AppContext }