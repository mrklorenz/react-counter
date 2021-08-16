import CounterSizeGenerator from "./CounterSizeGenerator";
import CounterGroup from "./CounterGroup";
import { useState } from "react";

function MultipleCounter() {

    const [counterSize, setCounterSize] = useState(0);

    function updateCounterSize(counterSize){
        setCounterSize(counterSize);
    }

    return(
        <div>
            <CounterSizeGenerator onUpdateCounterSize={updateCounterSize}></CounterSizeGenerator>
            <CounterGroup counterSize={counterSize}></CounterGroup>
        </div>
    );
}

export default MultipleCounter;