import { Container } from "./styles"
import { PokemonLogo } from "../../components/PokemonLogo/index"
import {StatusPokemon} from "../../components/status/index"
import {Button} from "../../components/Button/index"
import {PokemonWrapper} from "../../components/PokemonWrapper/index"
import { Name } from "../../components/name"
import AppContext from '../../appContexts/Context';
import { useContext } from 'react';
import getColor from "../../utils/selectColorType";

export function AppContainer() {
  const {executeSearch, isvisible,primaryType,secondaryType}=useContext(AppContext);
  const colorPrimary =  getColor()[0][`${primaryType}`]
  const colorSecondary = getColor()[0][`${secondaryType}`]   
  

  function gradientColor(){
    if(secondaryType ==="notSecondaryType"){
      
      return  colorPrimary
   }else{
      return `linear-gradient(to bottom, ${colorPrimary} 0% , ${colorSecondary} 100%)`

   }
  }
   
  

  return (
    <Container theme={gradientColor()}>
      <PokemonLogo margin="50px 0 40px " src="./logo.png" alt="Logo Pokemon" />
      <Button
        onClick={executeSearch}
        animation="pulse"
        colorTheme={colorPrimary}
        borderColor={colorSecondary}
      >
        pegue um Pokémon aleatório
      </Button>
      {!isvisible ? <Name> Clique no botão para ganhar!!</Name> : null}
      <div className="container">
        <PokemonWrapper />
        <StatusPokemon/>

      </div>
    </Container>
  );
}