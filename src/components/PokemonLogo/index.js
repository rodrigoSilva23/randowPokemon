import  styled from "styled-components";

export const PokemonLogo = styled.img`
width: ${props => props.width};
margin: ${props => props.margin};

@media(max-width: 1024px) {
    margin-bottom:5px;
  }

`;

export default PokemonLogo;