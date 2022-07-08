import React from 'react'
import TextArea from './TextArea'
import './TextAreaContainer.css'

export class TextAreaContainer extends React.Component {

    state = {
        userInput: "",
        userInputFormatted: ""
    }

    // updateState = (evt) => {
    //     this.setState({
    //         [evt.target.name]: evt.target.value
    //     })
    //     console.log(this.state.userInput)
    // }

    updateState2 = (val, viewUpdate) => {
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
            console.log(e.toString())
            // console.log(typeof(e))
            // console.log(e)
        }
    }

    render() {
        return (
            <React.Fragment>
                <div id="main-container">
                    <TextArea 
                    name="userInput" 
                    textDisplay={this.state.userInput} 
                    updateState={this.updateState2} 
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