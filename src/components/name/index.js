import  styled from "styled-components";




export const Name = styled.p`
    padding: ${props => props.padding === undefined ? "10px" : props.padding};
    font-size:${props => props.fontSize === undefined ? "14px" : props.fontSize};
    color:${props => props.color === undefined ? "black" : props.color};
    font-weight: ${props=> props.fontWight};
    text-align: center;
    text-transform: uppercase;

`;


