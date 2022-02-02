import React from 'react';
import { ImHeart } from 'react-icons/im';
import { IoCloseSharp } from 'react-icons/io5';
import { 
  Main, 
  Characteristics, 
  Buttons, 
  Image, 
  Name, 
  Description 
} from './style';

function Crush(props) {
  const { isMatch, profile } = props;

  const characters = () => {
    if(profile === []){
      return <p> CARREGANDO... </p>
    } else {
      return (
        <Characteristics>
          <Image src={profile.photo} alt={'foto de perfil'}/>
          <Name>{profile.name}</Name>
          <Description>{profile.bio}</Description>
        </Characteristics>
      )
    }
  }

  return (
    <Main>
      {characters()}
      <Buttons>
        <ImHeart onClick={() => isMatch(true, profile)} cursor={'pointer'} fontSize={'1.5rem'} color={'red'}/>
        <IoCloseSharp onClick={() => isMatch(false, profile)} cursor={'pointer'} fontSize={'1.9rem'}/>
      </Buttons>
    </Main>
  )
}

export default Crush;