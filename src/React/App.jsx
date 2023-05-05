import { useState } from "react";
import './App.css';

export function App() {

    const [counter, setCounter] = useState(0);

    const addVal = () => {
        setCounter(counter + 1);
    }

    const subtractVal = () => {
        setCounter(counter <= 0 ? 0: counter - 1);
    }

    const resetCount = () => {
        setCounter(counter * 0);
    }

    return (
        <div className="app">
            <h3><span className="click-c">C</span>lick <span className="click-c">C</span>ounter</h3>
            <h4>Find out how many clicks you can get</h4>
            <p>Clicks: {counter}</p>
            <section className="click-calc">
                <button onClick={subtractVal}>Subtract 1</button>
                <button onClick={addVal}>Add 1</button>
                <button onClick={resetCount}>Reset Count</button>
            </section>
        </div>
    )
  }