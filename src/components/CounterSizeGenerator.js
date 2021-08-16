import { useState } from "react";
import "../styles/CounterSizeGenerator.css"

function CounterSizeGenerator(props) {
    const [size, setSize] = useState(0);

    function handleChangeSize(event) {
        setSize(parseInt(event.target.value));
        props.onUpdateCounterSize(parseInt(event.target.value));
    }

    return(
        <div>
            <span>Size: </span>
            <input id="numberInput" type="number" min="0" value={size} onChange={handleChangeSize}></input>
        </div>
    );    
}

export default CounterSizeGenerator;