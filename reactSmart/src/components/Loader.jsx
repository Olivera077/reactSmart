import React from "react";
import { CircleLoader } from "react-spinners";

export default class Loader extends React.Component {
    render() {
        return (
            <div className="loader-container">
                <CircleLoader color="blue" size={120}></CircleLoader>
            </div>
        )
    }
}
//moze se instalirati bilo koji loader 