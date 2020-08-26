import React from 'react'

const Counter = (props) => {
    return (
        <div>
            <button onClick={props.onIncrementAsync}>
                Increment after 1 sec
            </button>
            {' '}
            <button onClick={props.onIncrement}>
                Increment
            </button>
            {' '}
            <button onClick={props.onDecrement}>
                Decrement
            </button>
            <hr />
            <div>
                Clicked: {props.value} times
            </div>
        </div>
    )
}

export default Counter