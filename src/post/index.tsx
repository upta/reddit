import React = require( "react" );

import { Post as RedditPost } from "core/data";
import
{
    fill,
    gutter,
    row
} from "core/style";

import Controls from "./controls";
import RowNumber from "./row-number";
import TagLine from "./tag-line";
import Title from "./title";
import Thumbnail from "./thumbnail";
import
{
    Button as PreviewButton,
    Display as PreviewDisplay,
    Types as PreviewTypes
} from "./preview";
import Votes from "./votes";

interface IProps
{
    data: RedditPost;
    rowNumber: number;
    style?: React.CSSProperties;
}

class Post extends React.Component<IProps, { isPreviewOpen: boolean }>
{
    constructor()
    {
        super();

        this.state = {
            isPreviewOpen: false
        };
    }

    render()
    {
        const {
            data,
            rowNumber,
            style
        } = this.props;

        const {
            author,
            created_utc,
            domain,
            link_flair_text,
            num_comments,
            over_18,
            score,
            spoiler,
            subreddit,
            thumbnail,
            title
        } = data;

        const previewType = this.previewType( data );

        return (
            <div
                style={ {
                    ...style,
                    ...fill,
                    ...row,
                    alignItems: "flex-start"
                } }
            >
                <div style={ row }>
                    <RowNumber value={ rowNumber } />
                    <Votes count={ score } />
                    <Thumbnail path={ thumbnail } />
                </div>
                <div
                    style={ {
                        ...fill,
                        alignItems: "flex-start",
                        marginLeft: gutter.full
                    } }
                >
                    <Title
                        domain={ domain }
                        flair={ link_flair_text }
                        isNsfw={ over_18 }
                        isSpoiler={ spoiler }
                        title={ title }
                    />
                    <div
                        style={ {
                            ...row,
                            marginTop: 1
                        } }
                    >
                        <PreviewButton
                            isOpen={ this.state.isPreviewOpen }
                            onClick={ this.handlePreviewClick }
                            type={ previewType }
                            style={ { marginRight: gutter.half } }
                        />
                        <div>
                            <TagLine
                                author={ author }
                                created_utc={ created_utc }
                                subreddit={ subreddit }
                            />
                            <Controls
                                comments={ num_comments }
                                style={ { marginTop: 1 } }
                            />
                        </div>
                    </div>
                    {
                        this.state.isPreviewOpen &&
                        (
                            <PreviewDisplay
                                data={ this.previewData( previewType, data ) }
                                style={ { marginTop: gutter.full } }
                                type={ previewType }
                            />
                        )
                    }
                </div>
            </div>
        );
    }

    private handlePreviewClick = () =>
    {
        this.setState( {
            isPreviewOpen: !this.state.isPreviewOpen
        } );
    }

    private previewData( type: PreviewTypes, post: RedditPost ): string
    {
        if ( type === "embed" )
        {
            return post.media_embed.content || "";
        }
        else if ( type === "image" || type === "video" )
        {
            return post.url;
        }
        else if ( type === "text" )
        {
            return post.selftext_html || post.selftext || "";
        }

        return "";
    }

    private previewType( post: RedditPost ): PreviewTypes
    {
        const {
            preview,
            media_embed,
            is_self,
            selftext,
            selftext_html
        } = post;

        if ( is_self && ( selftext || selftext_html ) )
        {
            return "text";
        }
        else if ( media_embed && media_embed.content )        
        {
            return "embed";
        }
        else if ( preview && preview.enabled && preview.images.length )
        {
            return preview.images[0].variants.mp4 ? "video" : "image";
        }
        else
        {
            return undefined;
        }
    }
}

export default Post;