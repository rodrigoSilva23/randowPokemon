import  styled from 'styled-components';

export const StyledPokemonWrapper = styled.div`
width: 400px;
height: 330px;
background: white;
margin-top: 20px;
border-radius: 10px;
box-shadow: 1px 1px 2px rgba(0, 0, 0, 0.2);
display: flex;
flex-direction: column;
align-items: center;

.containerTypes{
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-right: 3px;
}
.PokemonError{
    display: flex;
    align-items: center;
    flex-direction: column;
}
@media (max-width: 468px) {
    
    width: 300px;
    height: 300px;
}

`
;

export default StyledPokemonWrapper;