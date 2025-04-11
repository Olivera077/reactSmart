import React from "react";

export default class Increment extends React.Component {
    constructor() {

        super();
        console.log("Metoda constructor-Increment");


    }

    componentDidMount() {
        console.log("Metoda componentdidMount - Increment");

    }

    componentWillUnmount() {
        //Poziva se prilikom napustanja komponente(reset za input formu kada korisnik napusta komponentu da se resetuju podaci)
    }

    componentDidUpdate() {
        //POZIVA SE NAKON RENDERA ALI KADA SE PROMENI STATE
        console.log("Metoda componentDidUpdate- Increment");

    }


    render() {
        console.log("Metoda render-Increment");

        return (
            <h3>Number: {this.props.propNumber}</h3>
        )



    }
}