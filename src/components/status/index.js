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
   
     
      
        console.log( spriteBack)
       
    return (
      isvisible &&
      
        <StatusPokemons>
         <Name color={colorPrimary} fontSize="25px" fontWeight="boldbolder">
           <p>{name}</p> to skills
          </Name> 
          <div>
              <p>heigth:  <b>{height} cm</b></p>
              <p>wieight: <b>{weight} kg</b></p>
          </div>
          <div>
              <p>base experience: <b>{ baseExperience}</b></p>
              <p>move: <b>{move}</b></p>
          </div>
          {spriteBack === null ?"Imagem não encontrada"
          :
          <Sprite width="170px" height="170px" animation="pulse" src={spriteBack} alt={name}/>
          }
        
        </StatusPokemons>
        
        
      
    ) 
  }

  