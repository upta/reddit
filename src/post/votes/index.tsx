import React = require( "react" );

import { colors, text } from "core/style";

interface IProps
{
    count: number;
}

const Votes: React.SFC<IProps> =
    ( { count } ) => (
        <div
            style={ {
                alignItems: "center",
                width: "5em"
            } }
        >
            <i
                style={ styles.arrow }
                className="fa fa-arrow-up"
            />
            <span style={ styles.text }>{ displayVotes( count ) }</span>
            <i
                style={ styles.arrow }
                className="fa fa-arrow-down"
            />
        </div>
    );

const displayVotes = ( votes: number ): string => votes < 10000
    ? `${ votes }`
    : `${ Math.round( votes / 100 ) / 10 }k`;

const styles =
    {
        arrow:
        {
            color: colors.dim,
            cursor: "pointer",
            paddingBottom: 2,
            paddingTop: 2,
        } as React.CSSProperties,
        text:
        {
            ...text.medium,
            color: colors.lessDim,
            fontWeight: "bold"
        } as React.CSSProperties
    };

export default Votes;