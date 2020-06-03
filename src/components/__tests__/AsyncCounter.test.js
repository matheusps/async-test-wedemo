import React from 'react'
import { cleanup } from '@testing-library/react'

import AsyncCounter from '../AsyncCounter'

afterEach(cleanup)

it('should ...', () => {
  expect(<AsyncCounter />).toBeTruthy()
})
