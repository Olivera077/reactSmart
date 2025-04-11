import React from "react";

export default class ComponentsStudents extends React.Component {
    render() {
        console.log(this.props.studentsProp);
        return (
            <table>
                <tbody>
                    {this.props.studnetsProp.map((student, i) => {
                        return (
                            <tr key={i}>
                                <td>{student.firstName}</td>
                                <td>{student.lastName}</td>
                                <td>{student.year}</td>
                                <td>{student.mark}</td>
                            </tr>
                        )
                    })}
                </tbody>
            </table>
        )


    }
}