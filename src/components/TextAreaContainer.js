import React from 'react'
import TextArea from './TextArea'
import './TextAreaContainer.css'

export class TextAreaContainer extends React.Component {

    state = {
        userInput: "",
        userInputFormatted: ""
    }

    updateState = (evt) => {
        this.setState({
            [evt.target.name]: evt.target.value
        })
    }

    formatJSON = () => {
        this.setState({
            userInputFormatted: JSON.stringify(JSON.parse(this.state.userInput), null, 4)
        })
        console.log(this.state.userInputFormatted)
    }

    render() {
        return (
            <React.Fragment>
                <div id="main-container">
                    <TextArea 
                    name="userInput" 
                    textDisplay={this.state.userInput} 
                    updateState={this.updateState} 
                    placeholder="Paste your JSON over here!"/>
                    <div>
                        <button onClick={this.formatJSON}>1</button>
                        <p></p>
                        <button>2</button>
                    </div>
                    <TextArea 
                    name="userOutput" 
                    value={this.state.userInputFormatted} 
                    placeholder="Formatted JSON will be displayed here!"
                    read='true' />    
                </div>
            </React.Fragment>


            
        )


    }
}