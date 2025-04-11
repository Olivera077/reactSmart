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


