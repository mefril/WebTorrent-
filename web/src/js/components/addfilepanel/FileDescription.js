import React, {Component} from 'react';

export default class extends Component {

    onNameChange = (evt)=> {
        let value = evt.target.value;
        this.props.updateName(value);
    };

    onDescriptionChange = (evt)=> {
        let value = evt.target.value;
        this.props.updateDescription(value);
    };

    render() {
        let {currentFile} = this.props;

        return (
            <div className="fileDescriptionContainer">
                <label>File Name</label>
                <div>
                    <input value={currentFile.name} onChange={this.onNameChange}/>
                </div>
                <label>File Description</label>
                <div>
                    <textarea value={currentFile.description} onChange={this.onDescriptionChange}/>
                </div>
            </div>
        )
    }
}