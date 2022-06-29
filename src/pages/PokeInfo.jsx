import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const PokeInfo = () => {

  const [pokeInfo, setPokeInfo] = useState();
  const params = useParams();

   const getInfo = async () =>{
        const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${params.name}`);
        const data = await res.json();
        setPokeInfo(data);
   }

    useEffect(()=>{
      getInfo();
    }, [])

  return (
    <div className="pokeInfo-container">
        <img src={pokeInfo?.sprites.front_default} alt="" />
        <h1>{pokeInfo?.name}</h1>
        <h2>{pokeInfo?.stats[0]?.stat.name}: {pokeInfo?.stats[0]?.base_stat}</h2>
        <h2>{pokeInfo?.stats[1]?.stat.name}: {pokeInfo?.stats[1]?.base_stat}</h2>
        <h2>{pokeInfo?.stats[2]?.stat.name}: {pokeInfo?.stats[2]?.base_stat}</h2>
        <h2>{pokeInfo?.stats[3]?.stat.name}: {pokeInfo?.stats[3]?.base_stat}</h2>
    </div>
  )
}

export default PokeInfo