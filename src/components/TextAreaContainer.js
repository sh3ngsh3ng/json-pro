import React from 'react'
import TextArea from './TextArea'
import './TextAreaContainer.css'

export class TextAreaContainer extends React.Component {
    render() {
        return (
            <React.Fragment>
                <div id="main-container">
                    <TextArea />
                    <div>
                        <button>1</button>
                        <p></p>
                        <button>2</button>
                    </div>
                    <TextArea />    
                </div>
            </React.Fragment>


            
        )


    }
}