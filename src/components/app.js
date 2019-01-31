import React from "react";

import {Provider} from 'react-redux';

import Posts from "./posts";
import PostForm from "./postForm";
import  store from "./../store";


export default class App extends React.Component {
    render(){
        return (
            <Provider store={store}>
                <div>
                    <PostForm/><hr/>
                    <Posts/>
                </div>
            </Provider>
        )
    }

}