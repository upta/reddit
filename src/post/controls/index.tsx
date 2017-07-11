import React = require( "react" );

import
{
    colors,
    row,
    text
} from "core/style";

interface IProps
{
    comments: number;
    style: React.CSSProperties;
}

const Controls: React.SFC<IProps> =
    ( {
        comments,
        style
    } ) =>
        (
            <div
                style={ {
                    ...style,
                    ...text.small,
                    ...row,
                    color: colors.evenLessDim,
                    fontWeight: "bold"
                } }
            >
                <a style={ text.link }>{ comments } comments</a>
            </div>
        );

export default Controls;