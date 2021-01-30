import FilterPage from './filter_page';
import { connect } from 'react-redux';
import { fetchSomeDogs, fetchAllDogs } from '../../actions/dog_actions';


const mapStateToProps = (state, ownProps) => {

    return { 
        dogs: state.dogs.message,
        allDogs: state.allDogs.message,
        history: ownProps.history
    }
}

const mapDispatchToProps = (dispatch) => ({
    fetchSomeDogs: dogs => dispatch(fetchSomeDogs(dogs)),
    fetchAllDogs: allDogs => dispatch(fetchAllDogs(allDogs))

})

export default connect(mapStateToProps, mapDispatchToProps)(FilterPage);