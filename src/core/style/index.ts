import React = require( "react" );

export interface StyleSheet
{
    [key: string]: React.CSSProperties;
}

export const colors =
    {
        accent: "rgb(106,152,175)",
        background: "rgb(38,38,38)",
        danger: "rgb(191, 64, 64)",
        dim: "rgb(80,80,80)",
        evenLessDim: "rgb(130,130,130)",
        lessDim: "rgb(100,100,100)",
        text: "rgb(204,204,204)",
        warning: "rgb(255, 130, 0)"
    };

export const fill =
    {
        flex: "auto"
    } as React.CSSProperties;

export const row =
    {
        alignItems: "center",
        flexDirection: "row"
    } as React.CSSProperties;

export const text =
    {
        link:
        {
            cursor: "pointer",
            ":hover":
            {
                textDecoration: "underline"
            } as React.CSSProperties,
        },
        medium:
        {
            fontSize: "1.1rem"
        },
        small:
        {
            fontSize: "0.8rem"
        },
        title:
        {
            fontSize: "1.33rem"
        }
    } as StyleSheet;

export const gutter =
    {
        double: 20,
        full: 10,
        half: 5
    };