import React from 'react'
import { cleanup, render, fireEvent, waitForElement } from '@testing-library/react'

import AsyncCounter from '../AsyncCounter'

afterEach(cleanup)

it('should update counter after 0.5s', async () => {
  const { getByTestId, getByText } = render(<AsyncCounter />)
  fireEvent.click(getByTestId('btn-up'))
  const counter = await waitForElement(() => getByText('1'))
  expect(counter).toHaveTextContent('1')
})
