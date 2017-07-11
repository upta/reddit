import React = require( "react" );
import { AllHtmlEntities } from "html-entities";

const entities = new AllHtmlEntities();

import
{
    colors,
    gutter,
    StyleSheet
} from "core/style";
import { Types } from "../index";

require( "./index.css" );

interface IProps extends React.HTMLProps<HTMLDivElement>
{
    data: string;
    type: Types;
}

const getHtml = ( data: string ) =>
{
    return {
        __html: entities.decode( data )
    };
};

const Display: React.SFC<IProps> =
    ( {
        children,
        data,
        type,
        ...rest
    } ) =>
        (
            <div {...rest}>
                {
                    ( type === "embed" || type === "text" ) &&
                    (
                        <div
                            className="PreviewDisplay__embed"
                            dangerouslySetInnerHTML={ getHtml( data ) }
                            style={ styles[type] }
                        />
                    )
                }
                {
                    ( type === "image" || ( type === "video" && data.endsWith( ".gif" ) ) ) &&
                    (
                        <a
                            href={ data }
                            target="_blank"
                        >
                            <img
                                style={ {
                                    paddingRight: gutter.double,
                                    maxWidth: 800,
                                    width: "100%"
                                } }
                                src={ data }
                            />
                        </a> )
                }
                {
                    ( type === "video" && !data.endsWith( ".gif" ) ) &&
                    (
                        <a
                            href={ data }
                            target="_blank"
                        >
                            <video muted loop autoPlay>
                                <source src={ data.replace( ".gifv", ".mp4" ) } type="video/mp4" />
                            </video>
                        </a>
                    )
                }
            </div>
        );

const styles =
    {
        text:
        {
            backgroundColor: colors.dim,
            borderColor: colors.lessDim,
            borderRadius: 4,
            borderStyle: "solid",
            borderWidth: 1,
            padding: gutter.full,
            marginRight: gutter.full,
            marginTop: gutter.half
        }
    } as StyleSheet;

export default Display;