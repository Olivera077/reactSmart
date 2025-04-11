import React from "react";

export default class Header extends React.Component {
    render() {
        console.log(this.props.hederProp);

        return (
            <div>
                <h1>Header nova komponenta</h1>
                <p>Header value vrednost: {this.props.hederProp}</p>
                <h2>{this.props.number}</h2>
            </div>
        )
    }
}