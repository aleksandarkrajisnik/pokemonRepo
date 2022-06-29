
import React, { useContext, useEffect, useRef, useState } from 'react';
import { DataContext } from '../dataContext';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { getPokemon } from '../actions/dataActions';

const Home = () => {

    const dispatch = useDispatch();
    const pokemonData = useSelector(state => state.pokemonData);
    const { pokemon, setPokemon } = useContext(DataContext);
    const [editPokemon, setEditPokemon] = useState(false);
    const inputRef = useRef();

    useEffect(()=>{
       dispatch(getPokemon());
    },[]);

    const addPokemon = () =>{
        let tempArray = [...pokemon];
        tempArray.unshift({name:inputRef.current.value})
        setPokemon(tempArray);
        inputRef.current.value = '';
    }

  return (
    <div className='home-container'>
        <h1>Home</h1>
        <h2>Welcome to the Pokemon online library</h2>
        <div className='add'>
        <input ref={inputRef} type="text" placeholder='add pokemon here' />
        <button onClick={addPokemon}>Add</button>
        </div>
      
    
        {
            pokemon?.map((item,i) => {
                return(
                    <div className='pokemon' key={i}>
                            <Link to={`/${item.name}`}>{item.name}</Link>
                        <div className='buttondiv'>
                        <button onClick={() =>{
                            console.log(item.name)
                            let tempArray = [...pokemon];
                            tempArray = tempArray.filter(item2 => item2.name !== item.name)
                            setPokemon(tempArray);
                        }}>Remove</button>

                        
                        </div>
                    </div>
                )
            })
        }
        
      
    </div>
  )
}

export default Home