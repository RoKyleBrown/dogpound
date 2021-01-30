import DogsIndex from './dogs_index';
import { connect } from 'react-redux';
import { fetchSomeDogs } from '../../actions/dog_actions';


const mapStateToProps = (state, ownProps) => {
    
    return {
        dogs: state.dogs.message,
        history: ownProps.history 
    }
}

const mapDispatchToProps = (dispatch) => ({
    fetchSomeDogs: dogs => dispatch(fetchSomeDogs(dogs))
})

export default connect (mapStateToProps, mapDispatchToProps)(DogsIndex);