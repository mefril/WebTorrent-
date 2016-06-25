import React, {Component} from 'react'
import WebTorrentContainer from './WebTorrentContainer'
import Reducer from './reducers/CombinedReducer'
import {createStore} from 'redux'
import {Provider} from 'react-redux'

require('styles/common.scss');
require('styles/addFilesPanel.scss');
require('bootstrap-loader'); //Disable it in dev mode after first run to improve performance


const store = createStore(Reducer);

export default class BooksApp extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="container">
                <div className="header">
                    <div className="title">
                        <h1>
                            <label>Web</label>
                            <label>T</label>
                            <span>orrent</span>
                        </h1>
                    </div>
                </div>
                <Provider store={store}>
                    <WebTorrentContainer/>
                </Provider>
            </div>
        );
    }
}
