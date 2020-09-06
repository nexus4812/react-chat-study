import React from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';


export default class  ChatInput extends React.Component {
    constructor(prop) {
        super(prop);
        this.state = {message : ''};
    }

    onChangeHandler(e) {
        this.setState({message: e.target.value});
    }

    onClickHandler() {
        if(this.hasMessage()) {
            this.sendMessage();
        }
        this.clear();
    }

    hasMessage() {
        return !!this.state.message;
    }

    clear() {
        this.setState({message: ''});
    }

    sendMessage() {
        this.props.sendMessage(this.props.currentRoomId, this.state.message)
    }

    render() {
        return (
            <div>
                <TextField value={this.state.message} required id="standard-full-width" placeholder="テキストを入力" onChange={this.onChangeHandler.bind(this)}/>
                <Button variant="contained" color="primary" onClick={() => {this.onClickHandler()}}>送信する</Button>
            </div>
        )
    }
}
