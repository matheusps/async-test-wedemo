import React from 'react'
import 'raw.css'

import AsyncCounter from './components/AsyncCounter'
import DataFetcher from './components/DataFetcher'
import { Image, Container, Main } from './styles'


function App() {
  return (
    <Main>
      <Container>
        <h1>Async Counter</h1>
        <AsyncCounter />
      </Container>

      <Container>
        <h1>Simple DataFetcher</h1>
        <DataFetcher extractor="message" url="https://dog.ceo/api/breeds/image/random" />
      </Container>

      <Container>
        <h1>Custom DataFetcher</h1>
        <DataFetcher url="https://dog.ceo/api/breeds/image/random">
          {({ data }) => (
            <Image src={data.message} alt="random dog" />
          )}
        </DataFetcher>
      </Container>
    </Main>
  );
}

export default App;
