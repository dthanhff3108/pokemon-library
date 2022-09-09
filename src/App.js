
import './App.css';
import { Routes , Route} from 'react-router-dom'
import axios from 'axios';

import { useEffect, useState } from 'react';
import Home from './page/Home/Home'
import PokemonDetail from './page/DetailPokemon/PokemonDetail'
import { useSelector, useDispatch } from 'react-redux'

import { updateList, pushItem} from './redux/slice/pokemonListSlice'

function App() {
  const dispatch = useDispatch()
  const pokemonListRedux = useSelector((state)=>state.pokemonList.pokemonList)

  useEffect(()=>{
      const getPokemonList = async (url)=>{
        return await axios.get(url)
            .then(res=>{
                return res.data.results
            })
            .then(listPokemon => listPokemon.map(async item => 
                await axios.get(`https://pokeapi.co/api/v2/pokemon/${item.name}`)
                .then(res=> {
                    let newItem = {
                        name : item.name,
                        info : res.data
                    };
                    dispatch(pushItem(newItem))
                })     
            ),
            )
            .then(()=>dispatch(updateList(pokemonListRedux)))
      }
      getPokemonList(`https://pokeapi.co/api/v2/pokemon?limit=20&offset=0`)
  },[])

  return (
    <div className="App">
        <Routes>
          <Route path ="/" element = {<Home/>}></Route>
          <Route path ="/:name" element = {<PokemonDetail/>}></Route>
        </Routes>
    </div>
  );
}

export default App;
