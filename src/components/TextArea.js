import React from 'react'
import './TextArea.css'

export default function TextArea(props) {
    return (
        <React.Fragment>
            <div class="text-area">
                <textarea name={props.name} 
                readonly={props.read} 
                class='text-box' 
                placeholder={props.placeholder}
                onChange={props.updateState}
                >
                    {props.textDisplay}
                </textarea>
            </div>
            
        </React.Fragment>
    )
}