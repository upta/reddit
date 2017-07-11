import React = require( "react" );

import
{
    colors,
    fill,
    gutter,
    text
} from "core/style";

import Flair from "./flair";

interface IProps
{
    domain: string | null;
    flair: string | null;
    isNsfw: boolean;
    isSpoiler: boolean;
    title: string;
}

const Title: React.SFC<IProps> =
    ( {
        domain,
        flair,
        isNsfw,
        isSpoiler,
        title
    } ) =>
        (
            <div style={ styles.container }>
                <span style={ textStyle }>{ title }</span>
                {
                    !!flair &&
                    <Flair
                        type="tag"
                        style={ textStyle }
                    >
                        { flair }
                    </Flair>
                }
                {
                    isNsfw &&
                    <Flair
                        type="nsfw"
                        style={ textStyle }
                    />
                }
                {
                    isSpoiler &&
                    <Flair
                        type="spoiler"
                        style={ textStyle }
                    />
                }
                <span style={ styles.domain }>({ domain })</span>
            </div>
        );

const textStyle =
    {
        display: "inline",
        marginRight: gutter.full,
        verticalAlign: "middle"
    } as React.CSSProperties;

const styles =
    {
        container:
        {
            ...text.title,
            ...fill,
            display: "block"
        } as React.CSSProperties,
        domain:
        {
            ...text.small,
            ...textStyle,
            color: colors.lessDim,
            marginRight: 0
        } as React.CSSProperties
    };

export default Title;