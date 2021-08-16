import Counter from "./Counter";
import "../styles/CounterGroup.css";

function CounterGroup (props) {

    function generateCounterList(){
        return new Array(props.counterSize).fill(Date.now())
    }

    const counterList = generateCounterList();

    return (
        <div>
            {counterList.map((item, index) =>
            <Counter key={item + index}></Counter>
            )}
            <span id="currentSizeText"> SIZE: {props.counterSize}</span>
        </div>
    );
}

export default CounterGroup;