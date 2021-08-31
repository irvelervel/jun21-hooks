import { useEffect, useState } from 'react'

// useEffect is a hook in charge of mimicking the class lifecycle methods in a functional component
// you can use it to replace componentDidMount, componentDidUpdate and componentWillUnmount

// REACT HOOKS RULES!
// 1) USE REACT HOOKS JUST IN REACT FUNCTIONAL COMPONENTS
// 2) USE REACT HOOKS ALWAYS AT THE TOP LEVEL (do not nest them, do not put them after the return)

const FunctionalWithLifecycle = () => {

    const [city, setCity] = useState('Venice')
    const [counter, setCounter] = useState(0)

    // COMPONENTDIDMOUNT
    useEffect(() => {
        // this callback if for putting your logic in
        setCity('Milan')
        console.log('this is like componentDidMount')
    }, [
        // I'm not listening to ANYTHING for re-launching this function
    ])

    // COMPONENTDIDUPDATE (GENERIC, this captures every change in state and props)
    useEffect(() => {
        // now let's try to create a componentDidUpdate
        console.log('this is like componentDidUpdate', city)
        // because this is a pure componentDidUpdate replacemenent, this effect is going to be
        // re-invoked EVERY time there's a change in the props or in the state variable of this component
        // setCity('Wien')
        // DON'T PUT a setter function unconditionally in a useEffect without the second argument
        // it's going to crash/provide unwanted behavior
    })
    // we're not putting ANYTHING as the second argument

    // COMPONENTDIDUPDATE (triggered just then counter changes)
    useEffect(() => {
        console.log('The counter just increased!')
    }, [counter])

    // COMPONENTDIDUPDATE (triggered just when city changes)
    useEffect(() => {
        console.log('The city just changed!')
    }, [city])

    // COMPONENTWILLUNMOUNT
    // you can use useEffect also for replacing componentWillUnmount
    useEffect(() => {
        return () => {
            // now you can write here your componentWillUnmount logic!
            console.log('bye bye!')
        }
    }, [])

    const changeCity = () => {
        let arrayOfCities = ['NY', 'Berlin', 'Naples', 'Barcelona', 'Tirana']
        let randomNumber = Math.floor(Math.random() * 5)
        setCity(arrayOfCities[randomNumber])
    }

    return (
        <div>
            <h1>LIFECYCLE IN A FUNCTIONAL COMPONENT</h1>
            <p style={{ textAlign: 'center' }}>{city}</p>
            <div style={{ display: 'flex', justifyContent: 'center' }}>
                <button onClick={changeCity}>CHANGE CITY</button>
            </div>
            <p style={{ textAlign: 'center' }}>{counter}</p>
            <div style={{ display: 'flex', justifyContent: 'center' }}>
                <button onClick={() => setCounter(counter + 1)}>INCREASE COUNTER</button>
            </div>
        </div>
    )
}

export default FunctionalWithLifecycle