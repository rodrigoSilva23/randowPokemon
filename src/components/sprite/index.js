import  styled from "styled-components";

export const Sprite = styled.img`
width: ${props => props.width};
height: ${props => props.height};
animation: ${props => props.animation} 1.5s 1.5s infinite;
object-fit: contain;
@keyframes pulse {
    0% {
        transform: scale(1) ;
    }
    50% {
        transform: scale(1.015);
    }
    100% {
        transform: scale(1);
    }
   
   
}
`;

