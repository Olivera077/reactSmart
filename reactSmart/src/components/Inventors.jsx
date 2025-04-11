import React from "react";

export default class Inventors extends React.Component {


    render() {

        return (
            < table className="custom-table">
                <thead>

                    <tr>
                        <td>ime: </td>
                        <td>prezime: </td>
                        <td>god: </td>
                        <td>Auto: </td>
                        <td>Kuca</td>
                        <td>Jedrenje</td>
                        <td>Proputovanje</td>
                        <td>Firma/Biz</td>
                        <td>Parfumery</td>
                        <td>Seanse</td>
                        <td>Online $ streams </td>
                        <td>Fit 28/38 size boody </td>
                        <td>Uspeh licni </td>

                    </tr>



                </thead>
                <tbody>
                    {this.props.inventorsProp.map((inventors, i) => {
                        return (
                            <tr>
                                <td>{inventors.first}</td>
                                <td>{inventors.last}</td>
                                <td>{inventors.year}</td>
                                <td>{inventors.boughtCar}</td>
                                <td>{inventors.boughtHouse}</td>
                                <td>{inventors.sailed}</td>
                                <td>{inventors.roudTrip}</td>
                                <td>{inventors.hadCompany}</td>
                                <td>{inventors.perfumer}</td>
                                <td>{inventors.qhhtPro}</td>
                                <td>{inventors.onlineIncome}</td>
                                <td>{inventors.fitBody}</td>
                                <td>{inventors.success}</td>

                            </tr>
                        )

                    })}

                </tbody>
            </table >
        );
    };
}


