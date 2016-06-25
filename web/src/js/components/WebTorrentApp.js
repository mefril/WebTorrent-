import React, {Component} from 'react'
import WebTorrentContainer from './WebTorrentContainer'

require('styles/common.less');
require('bootstrap-loader'); //Disable it in dev mode after first run to improve performance

export default class BooksApp extends Component {
    constructor(props){
        super(props);
    }

    goToAllBooks=()=>{
        browserHistory.push('/books');
    }
    goToAllAuthors=()=>{
        browserHistory.push('/authors');
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
                <WebTorrentContainer/>
            </div>
        );
    }
}
