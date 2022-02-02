import styled from "styled-components";

export const List = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    max-height: 70vh;
    min-height: 70vh;
    border: 1px solid black;
    overflow-y: scroll;
`

export const CardProfile = styled.div`
    border: 1px solid black;
    display: flex;
    align-items: center;
    width: 80%;
    margin: 4px 0;
    padding: 4px;
`

export const Image = styled.img`
    width: 40px;
    height: 40px;
    border-radius: 100%;
`