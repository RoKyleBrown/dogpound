import DogsIndex from './dogs_index';
import { connect } from 'react-redux';
import { fetchDogs } from '../../actions/dog_actions';


const mapStateToProps = (state) => {
   
    return {dogs: state.dogs.message}
}

const mapDispatchToProps = (dispatch) => ({
    fetchDogs: dogs => dispatch(fetchDogs(dogs))
})

export default connect (mapStateToProps, mapDispatchToProps)(DogsIndex);