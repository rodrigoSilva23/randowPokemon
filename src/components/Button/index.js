import  styled from "styled-components";

export const Button = styled.button`
width: ${props => props.width};
height: ${props => props.height};
border-color: ${props => props.borderColor};
padding: 10px;
border-radius: 20px;
background: ${props => props.colorTheme};
box-shadow: 1px 1px 2px rgba(0, 0, 0, 0.6);
display: ${props => props.display};

&:hover {
    transition: transform  2s;
   
    animation: ${props => props.animation} 1s forwards infinite ;;
   
    opacity: .8;
    
    
}
&:active {
    opacity: 1;
    padding: 11px;
}
@keyframes pulse {
    0% {
        transform: scale(1) ;
    }
    50% {
        transform: scale(1.04);
    }
    100% {
        transform: scale(1);
    }
   
   
}
`;

export default Button;