import React = require( "react" );

import
{
    colors,
    row,
    text
} from "core/style";

import Anchor from "core/anchor";
import Time from "./time";

interface IProps
{
    author: string;
    created_utc: number;
    subreddit: string;
    style?: React.CSSProperties;
}

const SubmissionDetails: React.SFC<IProps> =
    ( {
        author,
        created_utc,
        subreddit,
        style
    } ) =>
        (
            <div
                style={ {
                    ...style,
                    ...text.small,
                    ...row,
                    color: colors.lessDim
                } }
            >
                <span>submitted</span>
                &nbsp;
                <Time
                    value={ created_utc }
                />
                &nbsp;
                <span>by</span>
                &nbsp;
                <Anchor style={ linkStyle }>{ author }</Anchor>
                &nbsp;
                <span>to</span>
                &nbsp;
                <Anchor style={ linkStyle }>r/{ subreddit }</Anchor>
            </div>
        );

const linkStyle: React.CSSProperties =
    {
        color: colors.accent
    };

export default SubmissionDetails;