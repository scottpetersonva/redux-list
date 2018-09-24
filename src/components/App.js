import React from 'react'
import AddSearch from '../containers/AddSearch'
import VisibleSearchList from '../containers/VisibleSearchList'
import ApiResults from '../ApiResults/ApiResults'


const App = () => (
  <div>
    <AddSearch />
    <VisibleSearchList />
    <ApiResults />
  </div>
)

export default App
