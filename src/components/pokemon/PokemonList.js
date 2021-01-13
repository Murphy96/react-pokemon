import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { Nav } from 'react-bootstrap'
import NavBar from '../layout/NavBar'
import {  NavLink,Link, Redirect , useParams} from 'react-router-dom';
import {history} from '../../store/configure_store'

const PokemonList = ({ pokemons, LoadPokemon }) => { 
    const { id } = useParams(); 
    const limit = 8;

    
    //const [redirect, setRedirect]= useState(false)
    useEffect(() => {
        LoadPokemon(id, limit);
    }, [id]);
    const linkPoke = (pokeKey)=>{
        history.push(`/pokemon/${pokeKey}`)
    }
    const After = ()=>{
        if(id >= 880){
          history.push(`/poke-List/${1}`)
        }
        else{
          history.push(`/poke-List/${new Number (id) +8}`)
        }
    }
    const Before = ()=>{
        if(id <= 8 ){
            history.push(`/poke-List/${880}`)           
        }
        else{
            history.push(`/poke-List/${new Number (id) -8}`)
        }        
    }
   //if (redirect)return <Redirect to={`/pokemon/${redirect.pokeIndex}`}/>
    
   const [search, setSearch] = useState("");

    const Sprite = styled.img`
        width: 5em;
        height: 5em;
        margin: 15px;
    `;
    const Card = styled.div`
    opacity: 0.95;
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
    transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);
    &:hover {
        box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22);
    }
    -moz-user-select: none;
    -website-user-select: none;
    -ms-user-select: none;
    user-select: none;
    -o-user-select: none;
    `;
   

    const filteredItems = pokemons.pokemones.filter((pokemon) => {
        return pokemon.name.toLowerCase().includes(search.toLowerCase());
      });

    const rows =[];
    filteredItems.forEach((data)=>{
        console.log(data.Index)
        rows.push(
            <div className='col-md-3 col-sn-6 mb-5' onClick ={ ()=>{console.log("cli")
            linkPoke(data.pokeIndex)  } }>
                <Card className='card'>
                    <h5 className='card-header'>{data.pokeIndex}</h5>
                        <Sprite src={data.imageUrl} />
                    <div className="card-body mx-auto">
                        <h6 className="card-title">  {data.name} </h6>
                    </div>
                   
                </Card>
            </div>
        )
    });

    
    return (
        <>
          <div className="App">
                <div className="d-flex align-items-stretch" style={{ width: "10000px" }}>
                    <NavBar />
                </div>
            <br></br>
            <br></br>
            <input type="text" placeholder="Search" onChange={(e) => setSearch(e.target.value)}/> {search}
            <div className="container">
                <div className="row">
                    <div className="col">
                         <div className="row">{rows}</div>
                    </div>
                </div>
            </div>  
            <button type="button" class="btn btn-danger" onClick ={ ()=>{console.log("cli")
            Before()  } } > 
                <div className="sidebar-list-item">
                        <i className="o-table-content-1 mr-3 text-gray"></i>
                        Before
                </div>
            </button>  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <button type="button" class="btn btn-danger" onClick ={ ()=>{console.log("cli")
            After()  } } > 
                <div className="sidebar-list-item">
                        <i className="o-table-content-1 mr-3 text-gray"></i>
                        After
                </div>
            </button>
             </div>   
        </>
    );
}
export default PokemonList;
