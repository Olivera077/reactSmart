import React from "react"; //importujemo react
import Header from "./components/Header";
import Content from "./components/Content";


export class App extends React.Component { //kreiranje komponenta prvo export da bi bilo import APP je naziv komponente i fajla, extends React.component-nasledjivanje metoda render
    render() { //omogucava prikaz sadrzaja na stranici
        console.log("App", this.props);

        return ( //vracanje necega

            <>
                <h1>Hello from the other side</h1>
                <p>Hello again</p>
                <Header hederProp="heder sa druge strane"></Header>
                <hr />
                <Header
                    number={this.props.number}// levi je naziv koji se vezuje za nasu komponentu a desni je parent naziv number
                    hederProp="prikazi drugi sadrzaj"></Header>
                <hr />
                <Content contentProp={22365}></Content >
            </>
        );
    }
}

// primer gore 1. cas REACT 31.03

import React from "react"; //importujemo react
import Header from "./components/Header";
import Content from "./components/Content";


export class App extends React.Component {

    constructor() {
        super();

        this.state = {
            header: "Header from the state",
            content: "Content from state"
        }
    }
    render() {
        console.log("App", this.state);

        return ( //vracanje necega

            <>
                <Header hederProp={this.state.header}></Header>
                <Content content={this.state.content}></Content>
            </>
        )
    }
}

// ovo je primer sa 2. casa REACTA 02.04
import React from "react"; //importujemo react
import Header from "./components/Header";
import Content from "./components/Content";


export class App extends React.Component {

    constructor() {
        super();

        this.state = { //ovo je metoda prosledjivanja niza objekata(stringova) i cesto se koristi
            data: [
                { id: 1, name: "FOO", age: 20 },
                { id: 2, name: "BAR", age: 30 },
                { id: 3, name: "BUZZ", age: 40 },
                { id: 4, name: "FizBuzz", age: 50 }
            ]
        } //u JS se islo sa for petljom ovde se koristi MAP petlja ali MAP metoda se koristi kada je samo niz objekata string
    }
    render() {


        return ( //vracanje necega

            <table>
                <tbody>
                    {this.state.data.map((naziv, i) => {
                        console.log(naziv, i);
                        return (
                            <tr key={naziv.id}>
                                <td>Id: {naziv.id}</td>
                                <td>Name: {naziv.name}</td>
                                <td>Age: {naziv.age}</td>
                            </tr>
                        );

                    })}
                </tbody>
            </table>
        );
    }
}


// ovo je treci primer 2. casa Reacta

import React from "react"; //importujemo react
import Header from "./components/Header";
import Content from "./components/ComponentsStudenti";


export default class App extends React.Component {

    constructor() {
        super();

        this.state = {
            students: [
                { firstName: "John", lastName: "Deer", year: 2000, mark: 9 },
                { firstName: "Peter", lastName: "Peeterson", year: 2003, mark: 8 },
                { firstName: "Hannah", lastName: "Holly", year: 2005, mark: 9.5 }
            ]
        }
    }


    render() {
        return (
            <>
                <ComponentsStudenti studentsProp={this.state.students}></ComponentsStudenti>
            </>



        );
    }
}

//primer rstudenti 2. cas

import React from "react"; //importujemo react



export class App extends React.Component {
    render() {
        console.log(this.props);




        return (
            <>
                <h1>Title: {this.props.title}</h1>
                <h2>Tekst: {this.props.text}</h2>
            </>



        );
    }
}

App.defaultProps = {
    title: "Default app title",
    text: "Default app text"
}

//primer 2. cas



//neki primer 
export class App extends React.Component {

    constructor() {
        super();

        this.state = {
            students: [
                { firstName: "John", lastName: "Deer", year: 2000, mark: 9 },
                { firstName: "Peter", lastName: "Peeterson", year: 2003, mark: 8 },
                { firstName: "Hannah", lastName: "Holly", year: 2005, mark: 9.5 }
            ]
        }
    }
}

import React from "react"; //importujemo react



export class App extends React.Component {
    constructor() {
        super(); //nasledjuje constructor od react componenete. super metoda+

        this.state = {
            data: "Initial value primer sta pise",
            dataArray: ["item..."]
        }
    }

    updateState = (tekst) => {
        console.log("updateState", tekst);
        //kopirati niz u lokalnu promenjlljivu
        var myArray = this.state.dataArray;
        console.log("before", myArray);
        //dodajemo element u niz(na kraj))
        myArray.push("novi item.....");
        console.log("after", myArray);




        this.setState({
            data: tekst,
            dataArray: myArray //na svaki klik da se dodaje novi element niza
        });

    } //ovo je za custom meteda za pristup kljucnoj reci

    render() {
        console.log("render", this.state);

        return (
            <>

                <input type="button" value="Update state" onClick={() => this.updateState("tekst iz rendera")} />
                <h2>State string: {this.state.data}</h2>
                <h3>State array</h3>
                <ul>
                    {this.state.dataArray.map((item, i) => {
                        console.log(item);

                        return (<li key={i}>{item}</li>);
                    })}
                </ul>
            </>



        );
    }
}
//ovo => znaci da ce prekinuti infinite loop i da ce petlja da se pokrece samo na dugme

//primer studenti
import React, { Component } from "react";
import Students from "./components/Students";
export class App extends React.Component {

    constructor() {
        super();

        this.state = {
            students: [
                { firstName: "John", lastName: "Deer", year: 2000, mark: 9 },
                { firstName: "Peter", lastName: "Peeterson", year: 2003, mark: 8 },
                { firstName: "Hannah", lastName: "Holly", year: 2005, mark: 9.5 }
            ]
        };
    }

    render() {
        return (
            <Students studentsProp={this.state.students}></Students> //ovo sa this je slanje 
        )
    }
}

import React from "react";

export class Students extends React.Component {
    render() {
        console.log(this.props.studentsProp);

        return (
            <table>
                <tbody>
                    {this.props.studentsProp.map((student, i) => {
                        return (
                            <tr key={i}>
                                <td>{student.firstName}</td>
                                <td>{student.lastName}</td>
                                <td>{student.year}</td>
                                <td>{student.mark}</td>
                            </tr>
                        );
                    })}
                </tbody>
            </table>
        );
    };
}

//primer 3. April
import React from "react";

export class App extends React.Component {
    render() {
        console.log(this.props);

        return (
            <>
                <h1>Title: {this.props.title}</h1>
                <h2>text:{this.props.text}</h2>
            </>
        )
    }
}

App.defaultProps = {
    title: "Default app title",
    text: "Default app text"
}

//2. april 
import React from "react";

export class App extends React.Component {
    constructor() {
        super();
        this.state = {
            data: "Initial value",
            dataArray: ["item..."]
        };
    }
    updateState = (text) => { //na naziv state-a kad imammo nasu metodu dole u onClick
        console.log("updateState", text);
        //1. korak kopirati niz u lokalnu promenjljivu
        let myArray = this.state.dataArray;
        console.log("before", myArray);
        //dodajemo element u niz na kraj 2. korak
        myArray.push("novi item");
        console.log("after", myArray);




        this.setState({
            data: text,
            //  "New state value" //updape state-a na stranici-asinhrona operacija bice izvrsena ali ne znam kad
            dataArray: myArray
        });

    }
    render() {
        console.log("render", this.state);

        return (
            <>
                <input type="button" value="Update state"
                    onClick={() => this.updateState("tekst iz rendera")} />
                <h2>State string: {this.state.data} </h2>
                <h3>State array:</h3>


                <ul>
                    {this.state.dataArray.map((item, i) => {

                        return (<li key={i}>{item}</li>)
                    })}


                </ul>
            </>
        )
    }
}
// ()=> se stavlja da se dogadjaj ne izvrsi automatski


//04.04 April

import React from "react";
import PropTypes from "prop-types"; //zastarela metoda

export class App extends React.Component {

    render() {
        console.log(this.props);
        //ovo P bool se ne prikazuje jer ne treba na stranici da pise true/false vec se koristi operator. <p>Bool:{checkCondition(data)}
        //terari operator   USLOV ? true : false - ako ima potreba da se uradi true ili false za oba uslova. DOLE u PRIMERU p Bool
        //uslov && <customComponent> > null --ovo samo da se izvrsi true 

        return (
            <>
                <p>String: {this.props.propString}</p>
                <p>Number: {this.props.propNumber}</p>
                <p>Bool:{this.props.propBool ? "da" : "nemaaa"}</p>
                <p>Array: {this.props.propArray}</p>
                <p>Object1:{this.props.propObject.objectName1}</p>
                <p>Object2:{this.props.propObject.objectName2}</p>
                <p>Object3:{this.props.propObject.objectName3 ? "da" : " nooou"}</p>
                <p>FUnc:{this.props.propFunction(100)}</p>
            </>
        )
    }
}

App.propTypes = {
    propString: PropTypes.string
} // ovo je zastarela metoda

App.defaultProps = { //definisanje default Props-a, moze da se radi i bez ovog ali je dobro znati
    propString: "String text",
    propNumber: 10,
    propBool: true,
    propArray: [1, 2, 3, 4],
    propObject: {
        objectName1: "Object text",
        objectName2: 20,
        objectName3: false,
    },
    propFunction: function (e) { return e }

}


//IVOTNI CIKLUS KOMPONENTE

import { number } from "prop-types";
import React from "react";
import Increment from "./components/Increment";

export class App extends React.Component { // NA KLIK DUGMETA SE POVECAVA ZA 1. PRVO SE IZVRSAVA METODA CONSTRUCTOR PA ONDA METODA RENDER.  STA JE ZIVOTNI CIKLUS KOMPONENTE-LIFECYCLE COMPONENT? tO JE REDOSLED STA SE PO KOM REDOSLEDU UCITAVA UNUTAR KPOOMPONENETE
    constructor() {
        console.log("Metoda konstruktor-App");


        super();

        this.state = {
            number: 0
        }
    }

    componentDidMount() {
        //poziva se nakon 1. rendera (ajax pozive) ne poziva se na dugme
        console.log("Metoda  componentDidMount-App ");

    }



    //arrow funkcija kada kreiramo nase metode stavljamo => od constrictora i reacta onda ne treba
    addNumber = () => {
        console.log("Metoda addNumber - App");
        this.setState({
            number: this.state.number + 1
        })




    }


    render() {

        console.log("Metoda render-App");


        return (
            <>
                <input type="button" value="Increment" onClick={this.addNumber} />
                {/* <h3>Number: {this.state.number}</h3> */}
                <Increment propNumber={this.state.number}></Increment>
            </>
        )
    }
}

//CTRL +K + C KOMENTARI ++ increment posebna komponenta


// 7 APRIL ZADATAK MAIN+STYLES ROAD MAD PROGRESS LIFE

import React from "react";
import Inventors from "./components/Inventors";

export class App extends React.Component {
    constructor() {
        super();

        this.state = {
            inventors: [
                { first: "Olivera", last: "Santa", year: 1987, floureshed: 2027 },
                { first: "Olivera", last: "Santa", year: 1987, boughtCar: 2025 },
                { first: "Olivera", last: "Santa", year: 1987, boughtHouse: 2027 },
                { first: "Olivera", last: "Santa", year: 1987, sailed: 2027 },
                { first: "Olivera", last: "Santa", year: 1987, roudTrip: 2025 },
                { first: "Olivera", last: "Santa", year: 1987, hadCompany: 2026 },
                { first: "Olivera", last: "Santa", year: 1987, perfumer: 2026 },
                { first: "Olivera", last: "Santa", year: 1987, qhhtPro: 2026 },
                { first: "Olivera", last: "Santa", year: 1987, onlineIncome: 2025 },
                { first: "Olivera", last: "Santa", year: 1987, fitBody: 2025 },
                { first: "Olivera", last: "Santa", year: 1987, success: 2026 },

            ],
            isActive: false

        };
    }

    toggleCssClass = () => {
        this.setState({
            isActive: !this.state.isActive // radi obrnutu logiku sa dugmetom dole
        })
    };

    render() {
        return (
            //NACIN DODAVANJA INLINE STILOVA KADA JE MANJI BROJ IZMENA AKO IMA BISE ONDA IDE CSS STYLE
            <>
                <h2 className="title">THE ROAD</h2>
                <h3 style={{
                    color: "purple",
                    border: "1px solid blue",
                    backroundcolor: "green",
                    padding: 15
                }}>Put.......PUT.........put.........pUt.....PUTANJA............the FLOW........</h3>

                <div className={`main-heading ${this.state.isActive ? "active" : ""}`}>PRATITI I GLEDATI</div>
                <br />
                <input type="button" value="Toggle class" onClick={this.toggleCssClass} />
                <br />
                <br />

                <Inventors inventorsProp={this.state.inventors}></Inventors>
            </>
        )
    }
}

// 08 APRIL PRIKAZ PODATAKA SA SERVERA 

import React from "react";
import Loader from "./components/Loader";
import './styles.css';

export class App extends React.Component {
    state = {
        posts: [],
        isLoading: true


    }

    componentDidMount() {
        //this.newJSFeatures();
        //this.promiseFeature();

        this.getPosts(); //koristi se get metoda da dohvati posts tj. state podatke sa json servera

    }

    getPosts = async () => {
        const url = "https://jsonplaceholder.typicode.com/posts";
        const response = await fetch(url);
        const data = await response.json();


        console.log(data);
        this.setState({
            posts: data,
            isLoading: false //ovde treba da zaustavi Loading vrtuljak
        });

    }

    newJSFeatures = () => {
        var firstName = "Ana";
        firstName = 10  //"Lana";

        // console.log(firstName);

        //let i const ES6

        let lastName = "Anic";
        lastName = "Kikic";
        // console.log(lastName);

        // var number = 1
        // console.log(number); //var = 1 let=1,

        if (true) {
            var number = 10;
            // console.log(number); //var=10 let=10

        }
        // console.log(number); //var=10   menjanje vrednosti promenjljive i to je bug   let=1

        //CONST
        const name = "ollivera"
        // name = "KiKII" ovo je error
        // console.log(name);


    }

    promiseFeature = async () => {
        //promise ima 2 rezurlata=
        //  1. je uspesno zavrsen COMPLETED (RESOLVE)
        //2. je neuspesno zavrsen= FAILED *(REJECT)

        //Promise ima 3 stanja

        //1. PENDING=> kad se asinhrona radnje je jos u toku
        //2. FULLFIL=> kad je asinhrona radnja uspesno zavrsena
        //3. REJECT=> doslo do greske asinhrone radnje tokom ucitavanja

        //OVO DOLE JE NACIN NA KOJI SE 1 PROMIS PESKE KREIRA

        let p = new Promise((resolve, reject) => {
            setTimeout(() => {
                const sum = 1 + 1;
                if (sum === 2) {
                    resolve("Uspesno reseno")
                } else {
                    reject("Zao nam je greska")
                }
            }, 2000)
        })

        console.log(p);
        //DA SE PROMISE RESIO MORA DOCI DO 2. I 3. STANJE KROZ "then". Ovo je nacin da se razresi

        //1. nacin: razresenja then/catch
        p.then(msg => {
            console.log(msg);

        }).catch(error => {
            console.log(error); //kad bi gore bilo 4+1=2 onda se aktivira catch 

        })

        // 2. nacin: Async/Await 
        try {
            const response = await p; //obavezuje da sacekamo dok ne dodju podaci sa servera. AWAIT ide u paru sa Async
            console.log(response);

        } catch (error) {
            console.error(error);

        }
    }

    render() {
        console.log("State", this.state.posts);

        if (this.state.isLoading) {
            return (<Loader />);
        }

        return (
            <>
                <Loader></Loader>
                {this.state.posts.map((post) => {
                    console.log(post);
                    return (
                        <div key={post.id}>
                            <h3>{post.title}</h3>
                            <p>{post.body}</p>
                        </div>
                    )


                })}
            </>
        );
    }

}


//07 APRIL 07



//FUNKCIONALNE KOMPONENTE 

import Content from "./components/Content";
import Header from "./components/Header";

//1. nacin (Function)

export default function App(props) {
    return (
        <div>
            <h1>Hello from th eother side</h1>
            <h3>props title:{props.title}</h3>
            <Header headerProp="Hi from the block"></Header>
            <Content></Content>
        </div>
    )
}

//2. nacin

// const App = () => {
//     return (
//         <div>
//             <h1>Hello from th eother side</h1>
//         </div>
//     )

// }
// export default App;



//09 APRIL 

import { useState } from "react";

export default function App() {
    //Reach hook- useState
    //ide prvo naziv STATE-a a druga je setter metoda kojom se updatuje state

    const [text, setText] = useState("initial value"); //ova metoda pripa pocetnu vrednost
    const [isLoading, setIsLoading] = useState(true)

    const handleUpdateText = () => {
        console.log("handle update text");
        setText("Novi text")

    };


    return (
        <>
            <input type="button" value="Update TEXT" onClick={handleUpdateText} />
            <h2>Text value: {text}</h2>
        </>
    );
}

import { useState } from "react";


export function App() {
    const [number, setNumber] = useState(0);

    const handleAddNumber = (num) => {
        console.log("handleAddNumber", number, num);
        setNumber(number + num);

    };


    return (
        <>
            <input type="button" value="Increment 5" onClick={() => handleAddNumber(5)} />
            <input type="button" value="Increment 10" onClick={() => handleAddNumber(10)} />
            <h3>Number value:{number}</h3>
        </>
    );
}


import { useState } from "react";

//SVAKI PARAMETAR MORA DA IMA ATRIBUT & EVENT= value i event(on Change, onClick...)
export function App() {
    const [inputValueA, setInputValueA] = useState("");
    const [inputValueB, setInputValueB] = useState("")



    const handleInputValueA = (e) => {
        console.log(e.target.value);
        setInputValueA(e.target.value)

    }

    const handleInputValueB = (event) => {
        setInputValueB(event.target.value);
    };

    return (
        <>
            <input type="text" value={inputValueA} onChange={handleInputValueA} />
            <h3>Text value: {inputValueA}</h3>
            {/* <input type="text" value={inputValueB} onChange={handleInputValueB} /> */}
            <input type="text" value={inputValueB} onChange={(event) => setInputValueB(event.target.value)} />
            <h3>Text value: {inputValueB}</h3>
        </>
    )

};


//PRAVLJENJE DUGMADI 

import { useState } from "react";
import Button from "./components/Button";

//SVAKI PARAMETAR MORA DA IMA ATRIBUT & EVENT= value i event(on Change, onClick...)
export default function App() {
    const [number, setNumber] = useState(0)



    return (
        <>
            <Button
                value="Add"
                handleClick={() => setNumber(number + 1)} />
            <Button
                value="Subtract"
                disabled={number === 0}
                handleClick={() => setNumber(number - 1)} />
            <Button
                value="Reset"
                disabled={number === 0}
                handleClick={() => setNumber(0)} />

            {/* <input
                type="button"
                value="Add"
                className="btn"
                onClick={() => setNumber(number + 1)} />
            <input
                type="button"
                value="Subtract"
                className="btn"
                disabled={number === 0}
                onClick={() => setNumber(number - 1)} />
            <input
                type="button"
                value="Reset"
                className="btn"
                disabled={number === 0}
                onClick={() => setNumber(0)} />
            <h3>Number:{number}</h3> */}
        </>
    )

};


