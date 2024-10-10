import styled from "styled-components";

const Container = styled.div`
    width: 12em;
    height: min-content;
    border: 2px solid var(--secundaria);
    border-radius: 5px;
`;

const Titulo = styled.h3`
    text-decoration: underline;
`

const Texto = styled.p`
    padding: 0 .10em;
    color: black;
`

export {Container, Titulo, Texto}
