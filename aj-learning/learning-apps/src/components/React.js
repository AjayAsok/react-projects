import React from 'react';
import { CardComp } from "./Card";
export const ReactComp = () => {
    const data = {
        head: "head",
        body: "body",
        exampleCode: "code"
    }
    return (
        <div style={{ background: "red" }}>
            <div>This is a sample</div>
            <CardComp data={data} />
        </div>
    );
}
