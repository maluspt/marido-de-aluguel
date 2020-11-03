import React, { TextareaHTMLAttributes } from 'react';
import './styles.css';

interface TextareaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
    label: string;
    name: string;
}

const Textarea: React.FC<TextareaProps> = (props, ...rest) => {
    return (
        <div className="textarea-block">
            <label htmlFor={props.name}>{props.label}</label>
            <textarea id={props.name} {...rest} />
        </div>
    );
}

export default Textarea;