import React from 'react'


const Search = ({ onClick, text }) => (
  
  <li
    onClick={onClick}
  >
    {text}
  </li>
)



export default Search
