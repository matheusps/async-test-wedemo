import React from 'react'
import { cleanup, render, fireEvent, waitForElement } from '@testing-library/react'
import DataFetcher from '../DataFetcher'
import axios from 'axios'

afterEach(() => {
  cleanup()
  jest.resetAllMocks()
})

jest.mock('axios')

it('should display empty state', () => {
  const { getByTestId } = render(<DataFetcher />)
  expect(getByTestId('empty')).toHaveTextContent('Empty State')
})

it('should display data', async () => {
  const url = '/hello'
  const { getByTestId } = render(<DataFetcher url={url} />)

  axios.get.mockResolvedValueOnce({
    data: 'hello world'
  })

  fireEvent.click(getByTestId('fetch-data'))
  const data = await waitForElement(() => getByTestId('data'))

  expect(axios.get).toHaveBeenCalledTimes(1)
  expect(axios.get).toHaveBeenCalledWith(url)
  expect(data).toHaveTextContent('hello world')
})


it('should display nested data', async () => {
  const url = '/hello'
  const { getByTestId } = render(<DataFetcher extractor="resolved.message" url={url} />)

  axios.get.mockResolvedValueOnce({
    data: { resolved: { message: 'hello world nested' } }
  })

  fireEvent.click(getByTestId('fetch-data'))
  const data = await waitForElement(() => getByTestId('data'))

  expect(data).toHaveTextContent('hello world nested')
})

it('should display data on custom render', async () => {
  const url = '/hello'
  const { getByTestId } = render(<DataFetcher extractor="resolved.message" url={url}>
    {({ data }) => <div data-testid="custom">{data}</div>}
  </DataFetcher>)

  axios.get.mockResolvedValueOnce({
    data: { resolved: { message: 'hello world nested' } }
  })

  fireEvent.click(getByTestId('fetch-data'))
  const data = await waitForElement(() => getByTestId('custom'))

  expect(data).toHaveTextContent('hello world nested')
})