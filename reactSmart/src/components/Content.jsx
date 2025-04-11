import React from "react";

export default class Content extends React.Component {
    render() {
        return (
            <div>
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Neque voluptatum obcaecati provident temporibus culpa fuga veritatis ut eos deleniti, autem voluptate ratione repellat officiis numquam placeat asperiores molestias reiciendis ad.</p>
                <p>{this.props.contentProp}</p>
                
            </div>
        )
    }
}