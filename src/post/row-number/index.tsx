import React = require( "react" );

import { colors, text } from "core/style";

interface IProps
{
    value: number;
}

const RowNumber: React.SFC<IProps> =
    ( { value } ) => (
        <div
            style={ {
                ...text.title,
                color: colors.dim,
                textAlign: "center",
                width: "2.2em"
            } }
        >
            { value }
        </div>
    );

export default RowNumber;