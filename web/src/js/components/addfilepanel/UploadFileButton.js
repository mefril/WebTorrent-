import React, {Component} from 'react';

export default class extends Component {
    constructor(props) {
        super(props);
        this.state = {isDragOver: false}
    }

    handleFileSelect(evt) {
        evt.stopPropagation();
        evt.preventDefault();
        this.setState({isDragOver: false});
        var files = evt.target.files || evt.dataTransfer.files;
        this.props.uploadFile(files);
    }

    handleDragOver(evt) {
        evt.stopPropagation();
        evt.preventDefault();
        this.setState({isDragOver: true});
        evt.dataTransfer.dropEffect = 'move';
    }

    handleDragLeave(event) {
        event.stopPropagation();
        event.preventDefault();
        this.setState({isDragOver: false});
    }

    render() {
        return (
            <div className="uploadFileButton" >
                <label htmlFor="fileUpload"
                       onDragLeave={this.handleDragLeave.bind(this)}
                       onDragOver={this.handleDragOver.bind(this)}
                       onDrop={this.handleFileSelect.bind(this)}
                >
                    Drop or tap to add file(s)
                </label>
                <input id="fileUpload"
                       type="file"
                       accept="*"
                       onChange={this.handleFileSelect.bind(this)}
                       multiple={false}
                />
            </div>
        )
    }
}