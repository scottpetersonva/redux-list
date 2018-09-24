import React from 'react'
import Search from './Search'



const SearchList = ({ searchTerms, toggleSearch }) => (
  
  <ul>
    {searchTerms.map(search =>
      <Search
        key={search.id}
        {...search}
        onClick={() => toggleSearch(search.id)}
      />
    )}
  </ul>
)

export default SearchList
