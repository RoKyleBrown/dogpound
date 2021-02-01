import DogsIndex from './dogs_index';
import { connect } from 'react-redux';
import { fetchSomeDogs, fetchAllDogs } from '../../actions/dog_actions';


const mapStateToProps = (state, ownProps) => {
    
    return {
        dogs: state.dogs.message,
        history: ownProps.history,
        allDogs: state.dogs.message 
    }
}

const mapDispatchToProps = (dispatch) => ({
    fetchSomeDogs: dogs => dispatch(fetchSomeDogs(dogs)),
    fetchAllDogs: allDogs => dispatch(fetchAllDogs(allDogs))
})

export default connect (mapStateToProps, mapDispatchToProps)(DogsIndex);