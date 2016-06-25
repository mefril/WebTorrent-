import React, {Component} from 'react';
import SingleFileInfo from './SingleFileInfo'
import FileDescription from './FileDescription'
import UploadFileButton from './UploadFileButton'

export default class extends Component {
    render() {

        let {currentFile} = this.props;

        return (
            <div className="addFilePanel">
                <UploadFileButton uploadFile={this.props.uploadFile}/>
                <SingleFileInfo currentFile={currentFile}/>
                <FileDescription currentFile={this.props.currentFile}
                                 uploadFile={this.props.uploadFile}
                                 updateDescription={this.props.updateDescription}
                                 updateName={this.props.updateName}/>
                <div className="button addFileButton">Add File</div>
            </div>
        )
    }
}