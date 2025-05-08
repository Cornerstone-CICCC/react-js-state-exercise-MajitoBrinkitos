import { useState } from "react";

function LottoNumbers () {
    const [lotto, setLotto] = useState([]);

    const randomNumbers = () => {
        const newNumbers = Array.from({ length: 7 }, () => Math.floor(Math.random() * 50) + 1)
        setLotto(newNumbers)
    }

    return (
        <div>
            <h2>Lotto Numbers: {lotto.join(", ")}</h2>
            <button onClick={randomNumbers}>Generate Lotto Numbers</button>
        </div>

    );

}


export default LottoNumbers