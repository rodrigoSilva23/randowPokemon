
import {StyledPokemonWrapper} from './styles';
import {Name} from '../name';
import AppContext from '../../appContexts/Context';
import { useContext } from 'react';
import { Type} from '../type/index'
import getColor from "../../utils/selectColorType";


import {Sprite} from '../sprite/index'


export function PokemonWrapper() {
   const { 
     name,
    sprite,
    primaryType,
    secondaryType,
    isvisible,
    
  } = useContext(AppContext)
   //passando o nome das cores dinam
    const colorPrimary =  getColor()[0][`${primaryType}`]
    const colorSecondary = getColor()[0][`${secondaryType}`]     
     
       
        
       
    return (
      isvisible &&
      
        <StyledPokemonWrapper>
         <Name color={colorPrimary} fontSize="25px" fontWeight="boldbolder">
           {name}
          </Name> 
          
          { sprite=== null? 
             <div className="PokemonError"> 
              <span>pokemon não encontrado!!</span>
              <Sprite width="150px" height="150px" animation="pulse" src="./pokemonErro.png" alt="pokemon não encontrado"/>
            </div>
          :
          <Sprite width="200px" height="200px" animation="pulse" src={sprite} alt={name}/>
          }
          

          <div className="containerTypes">
            <Type background={colorPrimary}>
              {primaryType}
            </Type>
            
            <Type background={colorSecondary}display={secondaryType ==="notSecondaryType" ? "none" : "" }>
                {secondaryType}
              
            </Type>
          
          </div>
        </StyledPokemonWrapper>
        
        
      
    ) 
  }

  