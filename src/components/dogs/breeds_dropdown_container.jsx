import BreedsDropdown from './breeds_dropdown';
import { connect } from 'react-redux';
import { fetchAllDogs } from '../../actions/dog_actions';


const mapStateToProps = (state, ownProps) => {
    
    return { 
        allDogs: state.allDogs.message,
        history: ownProps.history
    }
}

const mapDispatchToProps = (dispatch) => ({
    fetchAllDogs: allDogs => dispatch(fetchAllDogs(allDogs))
})

export default connect(mapStateToProps, mapDispatchToProps)(BreedsDropdown);