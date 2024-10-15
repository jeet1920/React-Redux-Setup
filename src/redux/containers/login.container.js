// Login container.js
import LoginPage from '../../views/login/login';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { logInAction } from '../actions';

function mapStateToProps(state) {
    console.log("container state", state);
    return state;
}


const mapDispatchToProps = (dispatch) => ({
    logInHandler: (user) => dispatch(logInAction.logIn_request(user)),
});

export default compose(
    connect(mapStateToProps, mapDispatchToProps)
)(LoginPage);



