import {Person} from "./Person";


/**
 * Komponenta může dostat nějaké data, ty předáváme stejne, jako kdyby byly HTML atributy
 * @param props {object} Objekt s předanými daty
 * @returns {JSX.Element}
 */
export function People(props) {
    const coolPeopleAsPersons = props.peopleList.map(person =>
        <Person name={person.name} age={person.age}/>
    );

    // Můžeme vykreslit pole jsx elementů
    return <>{coolPeopleAsPersons}</>
}