import React = require( "react" );

import
{
    colors,
    text,
    StyleSheet
} from "core/style";

interface IProps
{
    type: "tag" | "nsfw" | "spoiler";
    style?: React.CSSProperties;
}

const Flair: React.SFC<IProps> =
    ( {
        children,
        style,
        type
    } ) => (
            <span
                style={ {
                    ...style,
                    ...text.small,
                    ...styles[type]
                } }
            >
                { type === "tag" ? children : type }
            </span>
        );

const base =
    {
        borderRadius: 3,
        borderStyle: "solid",
        borderWidth: 1,
        display: "inline-block",
        padding: "1px 2px"
    } as React.CSSProperties;

const styles =
    {
        nsfw:
        {
            ...base,
            borderColor: colors.danger,
            color: colors.danger,
            textTransform: "uppercase"
        },
        spoiler:
        {
            ...base,
            borderColor: colors.warning,
            color: colors.warning,
            textTransform: "uppercase"
        },
        tag:
        {
            ...base,
            backgroundColor: colors.dim,
            borderColor: colors.lessDim
        }
    } as StyleSheet;

export default Flair;