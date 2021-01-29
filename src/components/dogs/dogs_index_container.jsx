import DogsIndex from './dogs_index';
import { connect } from 'react-redux';
import { fetchTenDogs } from '../../actions/dog_actions';


const mapStateToProps = (state) => {
    
    return {dogs: state.dogs.message}
}

const mapDispatchToProps = (dispatch) => ({
    fetchTenDogs: dogs => dispatch(fetchTenDogs(dogs))
})

export default connect (mapStateToProps, mapDispatchToProps)(DogsIndex);