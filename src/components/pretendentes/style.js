import styled from "styled-components";

export const Main = styled.main`
  min-width: 100%;
  flex-grow: 1;
  border: 1px solid black;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`

export const Characteristics = styled.div`
  height: 80%;
`

export const Buttons = styled.div`
  border-top: 1px solid black;
  height: 20%;
  display: flex;
  justify-content: space-evenly;
  align-items: center ;
`

export const Image = styled.img`
  width: 100%;
  max-height: 320px;
`

export const Name = styled.h2`
  margin: 4px;
`

export const Description = styled.p`
  margin: 8px 0 0 4px;
  padding: 0 0 4px 0;
  color: #343a40;
`