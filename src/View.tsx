import React, { FunctionComponent } from "react";

export interface ViewProps {
    style?: object
    className: string;
}

const View: FunctionComponent<ViewProps> = (props) => (
    <div {...props} />
)

export default View;