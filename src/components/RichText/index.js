import React from "react";
import { documentToReactComponents } from '@contentful/rich-text-react-renderer'

const RichText = ({ raw, references }) => {
    console.log(props);
    return (
        <div>
            <p>{documentToReactComponents(JSON.parse(raw))}</p>
        </div>
    )
}

export default RichText