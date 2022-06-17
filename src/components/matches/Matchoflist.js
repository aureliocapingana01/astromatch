 import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { AiOutlineClear } from 'react-icons/ai';
import { List, CardProfile, Image } from './style';

function ListOfMatchs() {

    const [lista, setLista] = useState([])

    useEffect (() => {
       getMatches()
    }, [])

    const getMatches = () => {
        const url = `https://us-central1-missao-newton.cloudfunctions.net/astroMatch/alan/matches`
    
        axios.get(url)
        .then((res) => setLista(res.data.matches))
        .catch((err) => new Error(err))
      }

    const reset = () => {
        const url = `https://us-central1-missao-newton.cloudfunctions.net/astroMatch/alan/clear`
        const headers = {
            headers: {
                'Content-Type': 'application/json'
            }
        }

        axios.put(url, headers)
        .then((res) => getMatches())
        .catch((err) => new Error(err))
    }

    return (
        <List>
            <h1>Lista de Crush's</h1>

            {lista.map((perfil, i) => {
                return (
                <CardProfile>
                    <Image src={perfil.photo} alt={'Match'}/> 
                    <p key={i}>{perfil.name}</p>
                </CardProfile>
                )
            })}

            <AiOutlineClear onClick={reset} cursor={"pointer"} fontSize={'2rem'}/>
        </List>
    );
}

export default ListOfMatchs;