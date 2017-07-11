import React = require( "react" );
import moment = require( "moment" );

const listeners: ( () => void )[] = [];

setInterval(
    () =>
    {
        listeners.forEach( a => a() );
    },
    30 * 1000 );

interface IProps
{
    style?: React.CSSProperties;
    value: number;
}

export default class extends React.Component<IProps, { display: string }>
{
    constructor()
    {
        super();

        this.state =
            {
                display: ""
            };

        listeners.push( this.update );
    }

    componentDidMount()
    {
        this.update();
    }

    componentWillUnmount()
    {
        listeners.splice( listeners.indexOf( this.update ), 1 );
    }

    render()
    {
        return (
            <span style={ this.props.style }>{ this.state.display }</span>
        );
    }

    private displayValue = () =>
    {
        return moment( this.props.value, "X" ).fromNow();
    }

    private update = (): void =>
    {
        this.setState(
            {
                display: this.displayValue()
            } );
    }
}