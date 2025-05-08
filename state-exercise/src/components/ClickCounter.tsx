import { useState } from "react";

function ClickCounter () {
    const [contador, setContador] = useState(0);

    const countingByOne = () => {
        setContador(contador + 1);
    }
    return (
        <div>
            <button onClick={countingByOne}>
                Counter {contador}
            </button>
        </div>
    );
}

export default ClickCounter