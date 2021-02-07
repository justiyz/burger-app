import React, {useEffect} from "react";
import classes from './Cockpit.css'

const cockpit = (props) => {
    useEffect(() => {
        console.log('[Cockpit.js] useEffect')
        setTimeout(() =>{
            alert('Saved to cloud!')
        }, 1000)
    }, [props.persons])

    const assignedClasses = []
    let btnClass = ''
    if (props.showPersons){
       btnClass = classes.Red
    }

    if (props.persons.length <= 2){
        assignedClasses.push(classes.red)
    }
    if (props.persons.length <= 1){
        assignedClasses.push(classes.bold)
    }

    return (
        <div className={classes.Cockpit}>
            <h1>{props.title}</h1>
            <p className={assignedClasses.join(' ')}>This is working</p>

            <button
                className={btnClass}
                onClick={props.clicked} >submit
            </button>
        </div>
    )
}

export default cockpit