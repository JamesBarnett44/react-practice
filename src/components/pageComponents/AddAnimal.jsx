import { useState, useEffect } from "react";

const AddAnimal = () => {

    const [name, setName] = useState("");
    const [population, setPopulation] = useState(0);

    const [finalName, setFinalName] = useState("");
    const [finalPopulation, setFinalPopulation] = useState(0);

    useEffect(() => {
        console.log(finalName);
        console.log(finalPopulation);
        document.querySelector('#display').textContent = `Name: ${finalName} Estimated Population: ${finalPopulation}`;
    }, [finalName], [finalPopulation]);

    const submitForm = () => {
        setFinalName(name);
        setFinalPopulation(population);

        setName("");
        setPopulation(0);
    }

    return (
        <div>
            <h3 id="display">Default Text</h3>
            <form>
                <label>Species Name: </label>
                <input type="text" value={name} onChange={(event) => setName(event.target.value)} />
                <label>Estimated Popualtion: </label>
                <input type="number" value={population} onChange={(event) => setPopulation(event.target.value)} />
                <button type="button" onClick={submitForm}> Submit </button>
            </form>
        </div>
    );
}

export default AddAnimal;