import { connect } from 'react-redux'
import SearchList from '../components/SearchList'
import { VisibilityFilters } from '../actions'

const getVisibleSearchTerms = (searchTerms, filter) => {
  switch (filter) {
    case VisibilityFilters.SHOW_ALL:
      return searchTerms
    default:
      throw new Error('Unknown filter: ' + filter)
  }
}

const mapStateToProps = state => ({
  searchTerms: getVisibleSearchTerms(state.searchTerms, state.visibilityFilter)
})

export default connect(
  mapStateToProps,
)(SearchList)
