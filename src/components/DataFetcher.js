import React, { useState, Fragment } from 'react'
import get from 'lodash.get'
import axios from 'axios'

function DataFetcher ({ url, extractor, children }){
  const [data, setData] = useState()

  const fetchData = async () => {
    const response = await axios.get(url)
    setData(extractor ? get(response.data, extractor, '') : response.data)
  }

  return (
    <Fragment>
      <button onClick={fetchData} data-testid="fetch-data">
        Load Data
      </button>
      {data ? (
        children ? children({ data }) : <div data-testid="data">{data}</div>
      ) : (
        <h1 data-testid="empty">Empty State</h1>
      )}
    </Fragment>
  )
}

export default DataFetcher
