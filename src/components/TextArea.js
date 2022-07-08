import React from 'react'
import './TextArea.css'
import CodeMirror from '@uiw/react-codemirror';
import { javascript } from '@codemirror/lang-javascript';

export default function TextArea(props) {
    return (
        <React.Fragment>
            {/* <div class="text-area">
                <textarea name={props.name}
                readonly={props.read} 
                class='text-box' 
                placeholder={props.placeholder}
                onChange={props.updateState}
                value={props.value}
                spellCheck="false"
                >
                    {props.textDisplay}
                </textarea>
            </div> */}

            <CodeMirror
                class="text-area text-box"
                name={props.name}
                value={props.value}
                theme="dark"
                minHeight="100%"
                editable={props.editable}
                // maxHeight="100%"
                minWidth="100%"
                // maxWidth="100%"
                onChange={props.updateState}
                placeholder={props.placeholder}
                extensions={[javascript({ jsx: true })]}
            />
            
        </React.Fragment>
    )
}