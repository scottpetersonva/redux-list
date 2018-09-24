import React from 'react'
import AddSearch from '../containers/AddSearch'
// import Search from '../components/Search'


// console.log(AddSearch.props.input.value)

class ApiResults extends React.Component {

    state = {
        headlines: [],
        searchTerms : [],
        error: undefined,
      }
    
      getNews = async (e) => {
     
        e.preventDefault()
        const search = AddSearch.searchTermArray[0]
        const apiCall = await fetch('http://hn.algolia.com/api/v1/search?query=' + search);
        const data = await apiCall.json()
        let results = data.hits
    
        const mapThrough = results
        .map(function (a) {
          return a.title
          
        });

        console.log("returned headlines: " + AddSearch.input.value)
        // console.log("search terms: " + this.state.searchTerms)
    
        this.setState({
          headlines: mapThrough,
          searchTerms: search,
          error: "",
          
        })
         
        console.log("search terms: " + this.state.searchTerms)
    
        
      }
    

      render() {
    
        return (
          // <Provider store={store}>
            <div>
            
              {this.state.headlines}
                
            </div>
          // </Provider>
        )
      }

}


export default ApiResults