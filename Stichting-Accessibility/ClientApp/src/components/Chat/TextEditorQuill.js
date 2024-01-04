import React, {useState} from "react";
import ReactQuill from "react-quill";

const TextEditorQuill = props => {
    const [value, setValue] = useState(props.value);

    return (
        <ReactQuill
            onChange={setValue}
            onBlur={() => props.onChange(value)}
        />
    );
}
export default ReactQuill;