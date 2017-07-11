import React = require( "react" );

import
{
    colors,
    fill,
    gutter,
    row
} from "core/style";

import { dummy } from "core/data";

import Post from "post";

interface IProps
{

}

const App: React.SFC<IProps> =
    ( { } ) => (
        <div style={ styles }>
            { dummy.data.children.map(( a, i ) => (
                <div
                    key={ a.data.id }
                    style={ {
                        ...row,
                        marginTop: i === 0 ? 0 : gutter.full
                    } }
                >
                    <Post
                        key={ a.data.id }
                        data={ a.data }
                        rowNumber={ i + 1 }
                    />
                </div>
            ) ) }
        </div>
    );

const styles: React.CSSProperties =
    {
        ...fill,
        backgroundColor: colors.background,
        color: colors.text,
        overflow: "auto"
    };

export default App;