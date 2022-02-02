import axios from 'axios';
import React, { useState, useEffect } from 'react';

import ListOfMatchs from './components/matches/Matchoflist';
import Crush from './components/pretendentes/Crush';
import { GiOppositeHearts } from "react-icons/gi";
import { BsPersonLinesFill } from 'react-icons/bs';
import { Geral, Hearder } from './style'

const App = () => {
  const [screen, setScreen] = useState('decisao');
  const [profile, setProfile] = useState({});

  useEffect (() => {
    getPerson()
  }, []);

  const getPerson = () => {
    axios.get('https://us-central1-missao-newton.cloudfunctions.net/astroMatch/alan/person')
    .then((res) => setProfile(res.data.profile))
    .catch((err) => new Error(err))
  };

  const isMatch = (condicao, perfil) => {
    const body = {
      'id':`${perfil.id}`,
      'choice': condicao
    };

    const headers = {
      headers: {
        'Content-Type': 'application/json'
      }
    };
    
    const url = `https://us-central1-missao-newton.cloudfunctions.net/astroMatch/alan/choose-person`

    axios.post(url, body, headers)
    .then((res) => getPerson())
    .catch((err) => new Error(err))
  };

  const tela = () => {
    switch (screen) {
      case 'lista':
        return <ListOfMatchs />
      default:
        return <Crush profile={profile} isMatch={isMatch}/>
    }
  };

  const mudaTela = (e) => {
      setScreen(e)
  };

  return (
    <Geral>
      <Hearder>
        <BsPersonLinesFill onClick={() => mudaTela('decisao')} cursor={'pointer'} fontSize={'1.5rem'}/>
        <h1>AstroMatch</h1>
        <GiOppositeHearts onClick={() => mudaTela('lista')} cursor={'pointer'} fontSize={'1.5rem'}/>
      </Hearder>
      {tela()}
    </Geral>
  )
};

export default App;