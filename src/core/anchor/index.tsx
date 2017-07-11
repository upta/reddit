import React = require( "react" );
import Radium = require( "radium" );

import { text } from "core/style";

interface IProps extends React.HTMLProps<HTMLAnchorElement>
{
}

const Anchor: React.SFC<IProps> =
    ( {
        children,
        style,
        ...rest
    } ) =>
        (
            <a
                style={ {
                    ...text.link,
                    ...style
                } }
                {...rest}
            >
                { children }
            </a>
        );

export default Radium( Anchor );