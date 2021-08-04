import { useState } from 'react';
import AppContext from './Context';

import apiPokemons from '../pokemon/api'


const AppProvider = ({children}) =>{
    const [ name, setName] = useState("");
    const [ sprite, setSprite] = useState("");
    const [ spriteBack, setSpriteBack] = useState("");
    const [ baseExperience, setBaseExperience] = useState("");
    const [ primaryType, setPrimaryType] = useState("");
    const [ secondaryType, setSecondaryType] = useState("");
    const [isvisible, setIsvisible] = useState(false);
    const [ weight, setWeight] = useState("");
    const [ height, setHeight] = useState("");
    const [ move, setMove] = useState("");
    
    
    
   // Função responsavel por pegar os dados do pokemon que vem da API ja aleatorizados
    const  getPokemon = () => apiPokemons().then(response =>{
      
      const pokemon = response.data;
     setName(pokemon.name);
     setSpriteBack(pokemon.sprites.back_default);
     setSprite(pokemon.sprites.front_default);
     setBaseExperience(pokemon.base_experience);
     setPrimaryType(pokemon.types[0].type.name);
     setWeight(pokemon.weight);
     setHeight(pokemon.height);
     setMove(pokemon.moves[0].move.name);
     pokemon.types.length > 1 ? setSecondaryType(pokemon.types[1].type.name) : setSecondaryType("notSecondaryType");
    
     
    })
   

     function executeSearch(){
      getPokemon();
      setIsvisible(true);
     
     }

        return(
            <AppContext.Provider value={{
                name,
                sprite,
                primaryType,
                secondaryType,
                isvisible,
                executeSearch,
                weight,
                height,
                baseExperience,
                move,
                spriteBack
               
                
            }}>
                {children}
            </AppContext.Provider>
        );

     

}
;
export default AppProvider;