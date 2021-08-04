import  styled from "styled-components";




export const Type = styled.div`
border-radius: 5px;
text-align: center;
width:90px;
color: white;
padding: 5px 5px;
margin: 0 5px;
display: ${props => props.display} !important;
background: ${props => props.background};
`