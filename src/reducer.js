import {loop, Cmd} from 'redux-loop';
import * as appActions from './app.actions';
import axios from 'axios'

export const initialState = {
    counter: 0,
    buttons: [],
    bet: 1,
    draw: 1,
    comments: []
};

function fetchUser(){
    return axios.get('https://jsonplaceholder.typicode.com/comments').then(res => {return res.data.slice(0,10).sort((a, b) => {
       return b.id - a.id
    })});
}

export const reducer = function (state = initialState, action) {
    switch (action.type) {
        case "MANAGENUMBERS":
            return {...state, buttons: action.payload};
        case "MANAGECOUNTERS":
            return {...state, counter: action.payload};
        case "MANAGEBET":
            return {...state, bet: action.payload};
        case "MANAGEDRAW":
            return {...state, draw: action.payload};
        case "GETCOMMENTS":
            return loop(
            {...state},
            Cmd.run(fetchUser, {
                successActionCreator: appActions.commentsFetchSuccessfulAction,
                args: [action.payload]
            })
        );
        case "GETCOMMENTSSUCCESSFUL":
            return {...state, comments: action.payload};
        default:
            return state;
    }
};