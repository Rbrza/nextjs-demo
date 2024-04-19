import {People} from "./People";

const people = [
    {name: "John", age: 25},
    {name: "Richard", age: 134},
    {name: "Radek", age: 250},
    {name: "Martina", age: 2},
    {name: "Tereza", age: 10},
]

const someData = "Hello, World";

/**
 * page.js reprezentuje jednu stránku aplikace
 * @returns {JSX.Element}
 */
export default function Home() {
    return <div>
        {/* Vypisujeme pomocí {} */}
        <h1>{someData}</h1>
        {/* Komponenty využíváme jako HTML elementy a data ji můžeme před jako kdyby to byly HTML atributy */}
        <People peopleList={people}/>
    </div>
}
