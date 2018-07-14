import { connect } from 'vue-redux-connect'
import SetFilter from 'Common/SetFilter.vue'

const filterMapState = (state) => ({ filter: state.filter })
const filterMapDispatch = (dispatch) => ({ 
  setFilter: function(f){
    dispatch({ 
      type: 'setFilter',
      payload: f
    })
  }
 })
export default connect(filterMapState, filterMapDispatch)(SetFilter)