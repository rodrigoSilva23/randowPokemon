import styled from 'styled-components'

export  const Container = styled.div`
width: 100%;
height: 100%;
min-height: 100vh;
background:${props=>props.theme};


display: flex;
flex-direction: column;
align-items: center;
justify-content: center;

.container{
    display: flex;
    margin-right: 5px;
}
@media (max-width: 768px) {
    .container{
    display: flex;
    flex-direction: column;

    }
}
`;

export default Container;