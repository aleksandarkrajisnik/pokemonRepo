import { createContext, useState, useEffect } from "react";
import axios from "axios";

export const DataContext = createContext();

const DataProvider = ({children}) =>{

    let[pokemon,setPokemon] = useState();
    
    const getData =  () => {
       // const res = await fetch(`https://pokeapi.co/api/v2/pokemon`);
       // const data = await res.json();
       // setPokemon(data.results);
        axios.get(`https://pokeapi.co/api/v2/pokemon`)
        .then(res=>{
            setPokemon(res.data.results);
            
        })
        
       
    }

    useEffect(()=>{
        getData();
    },[])

    
    return <DataContext.Provider value={{pokemon, setPokemon}}>
        {children}
    </DataContext.Provider>
}

export default DataProvider;