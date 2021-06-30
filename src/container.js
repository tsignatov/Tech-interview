
import { connect } from 'react-redux';
import  {App}  from './App';
import * as appActions from './app.actions'

const mapStateToProps = state => {
    return state;
};
const mapDispatchToProps = dispatch => {
    return {
        manageNumbers: (payload) => dispatch(appActions.manageNumbers(payload)),
        manageCounter: (payload) => dispatch(appActions.manageCounter(payload)),
        manageBet: (payload) => dispatch(appActions.manageBet(payload)),
        manageDraw: (payload) => dispatch(appActions.manageDraw(payload)),
        commentsFetchSuccessfulAction: (payload) => dispatch(appActions.commentsFetchSuccessfulAction(payload)),
        getComments: () => dispatch(appActions.getComments())
    }
};
export const Container = connect(mapStateToProps, mapDispatchToProps)(App);