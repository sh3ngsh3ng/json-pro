import React from 'react'
import './TextArea.css'

export default function TextArea(props) {
    return (
        <React.Fragment>
            <div class="text-area">
                <textarea readonly={props.read} class='text-box'>hello</textarea>
            </div>
            
        </React.Fragment>
    )
}