import React from 'react'
import AlertNotif from './AlertNotif'
import TextArea from './TextArea'
import './TextAreaContainer.css'
import { alertPop } from '../scripts/script'

export class TextAreaContainer extends React.Component {

    state = {
        userInput: "",
        userInputFormatted: "",
        errorMessage: "",
        testing: ""
    }

    componentDidMount() {
        alertPop()
    }

    updateState = (val, viewUpdate) => {
        this.setState({
            userInput: val
        })
    }

    formatJSON = () => {
        try {
            let formattedJSON = JSON.stringify(JSON.parse(this.state.userInput), null, 4)
            this.setState({
                userInputFormatted: formattedJSON
            })
        } catch (e) {
            let errorMessage = e.toString()
            this.setState({
                errorMessage
            })
        }
    }

    renderPopup = (msg) => {
        return (
            <AlertNotif message={msg} />
        )
    }

    render() {
        return (
            <React.Fragment>
                {this.renderPopup(this.state.errorMessage)}
                {this.renderPopup(this.state.userInput)}
                <div id="main-container">
                    <TextArea 
                    name="userInput" 
                    textDisplay={this.state.userInput} 
                    updateState={this.updateState} 
                    placeholder="Paste your JSON over here!"/>
                    <div>
                        <button onClick={this.formatJSON}>Beautify</button>
                        <p></p>
                        <button onClick={this.formatJSON}>Check</button>
                    </div>
                    <TextArea 
                    name="userOutput" 
                    value={this.state.userInputFormatted} 
                    placeholder="Formatted JSON will be displayed here!"
                    editable={false} />    
                </div>
            </React.Fragment>


            
        )


    }
}