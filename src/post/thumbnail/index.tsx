import React = require( "react" );

const sprite = require( "core/sprites/thumbnails.png" );

interface IProps
{
    path: string;
}

const Thumbnail: React.SFC<IProps> =
    ( { path } ) => (
        path.startsWith( "http" )
            ? (
                <img
                    style={ { width: 70 } }
                    src={ path }
                />
            )
            : (
                <div
                    style={ styles[path] }
                />
            )
    );

const base =
    {
        backgroundImage: `url( ${ sprite } )`,
        backgroundRepeat: "no-repeat",
        height: 50,
        width: 70
    } as React.CSSProperties;

const styles =
    {
        account:
        {
            ...base,
            backgroundPosition: "0px -1211px"
        } as React.CSSProperties,
        default:
        {
            ...base,
            backgroundPosition: "0px -1099px"
        } as React.CSSProperties,
        image:
        {
            ...base,
            backgroundPosition: "0px -1043px"
        } as React.CSSProperties,
        self:
        {
            ...base,
            backgroundPosition: "0px -1267px"
        } as React.CSSProperties,
        spoiler:
        {
            ...base,
            backgroundPosition: "0px -1211px"
        } as React.CSSProperties,
        nsfw:
        {
            ...base,
            backgroundPosition: "0px -1155px"
        } as React.CSSProperties,
    };

export default Thumbnail;