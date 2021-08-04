import {StatusPokemons} from './styles';
import {Name} from '../name';
import {Sprite} from '../sprite';
import AppContext from '../../appContexts/Context';
import { useContext } from 'react';

import getColor from "../../utils/selectColorType";





export function StatusPokemon() {
   const { 
     name,
    primaryType,
    isvisible,
    weight,
    height,
    baseExperience,
    move,
    spriteBack
    
    
  } = useContext(AppContext)
   //passando o nome das cores dinam
    const colorPrimary =  getColor()[0][`${primaryType}`]
   
     
      
      
       
    return (
      isvisible &&
      
        <StatusPokemons>
         <Name color={colorPrimary} fontSize="25px" fontWeight="boldbolder">
           <span>{name}</span> to skills
          </Name> 
          <div>
              <span>heigth:  <b>{height} cm</b></span>
              <span>wieight: <b>{weight} kg</b></span>
          </div>
          <div>
              <span>base experience: <b>{ baseExperience}</b></span>
              <span>move: <b>{move}</b></span>
          </div>
          {spriteBack === null ?"Imagem não encontrada"
          :
          <Sprite width="170px" height="170px" animation="pulse" src={spriteBack} alt={name}/>
          }
        
        </StatusPokemons>
        
        
      
    ) 
  }

  