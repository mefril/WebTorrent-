import React,{Component} from 'react'
import AddFilePanel from './addfilepanel/AddFilesPanel'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import * as Actions from './actions/AddFileActions'
let actions;

@connect(state => ({currentFile: state.newFile}))
export default class extends Component{
    render(){
        let {dispatch} = this.props;
        actions = bindActionCreators(Actions, dispatch);
        return(
            <div className="sectionContainer">
                <AddFilePanel currentFile={this.props.currentFile}
                              uploadFile={actions.uploadFile}
                              updateDescription={actions.updateDescription}
                              updateName={actions.updateName}
                />
                </div>
        )
    }
}