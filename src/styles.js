import styled from '@emotion/styled'

export const Image = styled.img`
  border-radius: 1rem;
  width: 20rem;
  height: 20rem;
  background-image: url(${props => props.src});
`

export const Main = styled.div`
  display: flex;
  flex-direction: column;
`

export const Container = styled.div`
  margin: 1.5rem 1rem;
`