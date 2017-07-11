import React = require( "react" );

import Anchor from "core/anchor";
import { Types } from "../index";

import { StyleSheet } from "core/style";

import sprite = require( "core/sprites/preview-buttons.png" );
import moreSprite = require( "core/sprites/more-preview-buttons.png" );

interface IProps
{
    isOpen: boolean;
    onClick: React.MouseEventHandler<HTMLAnchorElement>;
    style: React.CSSProperties;
    type: Types;
}

const ImagePreviewButton: React.SFC<IProps> =
    ( {
        isOpen,
        style,
        type,
        ...rest
    } ) =>
        (
            !!type
                ? (
                    <Anchor
                        style={ {
                            ...style,
                            ...( isOpen ? styles.open : styles[type] )
                        } }
                        {...rest}
                    /> )
                : null
        );

const base =
    {
        height: 23,
        width: 23,
        ":hover":
        {
            textDecoration: "none"
        } as React.CSSProperties
    } as React.CSSProperties;

const styles =
    {
        embed:
        {
            ...base,
            backgroundImage: `url(${ moreSprite })`,
            backgroundPosition: "0px -399px",
            ":hover":
            {
                backgroundPosition: "0px -370px"
            } as React.CSSProperties
        },
        image:
        {
            ...base,
            backgroundImage: `url(${ sprite })`,
            backgroundPosition: "0px 0px",
            ":hover":
            {
                backgroundPosition: "0px -24px"
            } as React.CSSProperties
        },
        open:
        {
            ...base,
            backgroundImage: `url(${ sprite })`,
            backgroundPosition: "0px -216px",
            ":hover":
            {
                backgroundPosition: "0px -240px"
            } as React.CSSProperties
        },
        text:
        {
            ...base,
            backgroundImage: `url(${ moreSprite })`,
            backgroundPosition: "0px -457px",
            ":hover":
            {
                backgroundPosition: "0px -428px"
            } as React.CSSProperties
        },
        video:
        {
            ...base,
            backgroundImage: `url(${ sprite })`,
            backgroundPosition: "0px -96px",
            ":hover":
            {
                backgroundPosition: "0px -120px"
            } as React.CSSProperties
        }
    } as StyleSheet;

export default ImagePreviewButton;