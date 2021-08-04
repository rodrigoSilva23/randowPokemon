import  styled from 'styled-components';

export const StatusPokemons = styled.div`
width: 400px;
height: 330px;
background: white;
margin-top: 20px;
border-radius: 10px;
box-shadow: 1px 1px 2px rgba(0, 0, 0, 0.2);
display: flex;
flex-direction: column;
align-items: center;
margin-left: 10px;

div{
    display: flex;
    margin: 10px 0;
    
}
div span{
    text-transform: uppercase;
    margin:0 10px;
}
div:nth-child(4){
    display: flex;
    align-items: center;
    flex-direction: column;
}

@media (max-width: 468px) {
    
    width: 300px;
    height: 330px;

    div{
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 10px 0;
    
}
}

`
;

export default StatusPokemons;