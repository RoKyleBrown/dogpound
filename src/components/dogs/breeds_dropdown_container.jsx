import BreedsDropdown from './breeds_dropdown';
import { connect } from 'react-redux';
import { fetchAllDogs } from '../../actions/dog_actions';


const mapStateToProps = (state) => {
    debugger;
    return { 
        allDogs: state.allDogs.message 
    }
}

const mapDispatchToProps = (dispatch) => ({
    fetchAllDogs: allDogs => dispatch(fetchAllDogs(allDogs))
})

export default connect(mapStateToProps, mapDispatchToProps)(BreedsDropdown);