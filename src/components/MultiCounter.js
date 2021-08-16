import CounterSizeGenerator from "./CounterSizeGenerator";
import CounterGroup from "./CounterGroup";
import { useState } from "react";
import "../styles/MultiCounter.css";

function MultipleCounter() {

    const [counterSize, setCounterSize] = useState(0);

    function updateCounterSize(counterSize){
        setCounterSize(counterSize);
    }

    return(
        <div className="MultiCounter">
            <CounterSizeGenerator onUpdateCounterSize={updateCounterSize}></CounterSizeGenerator>
            <CounterGroup counterSize={counterSize}></CounterGroup>
        </div>
    );
}

export default MultipleCounter;