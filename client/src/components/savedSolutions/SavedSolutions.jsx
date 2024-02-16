import { useNavigate } from 'react-router-dom';
import './savedSolutions.css'

function SavedSolutions({ savedSolutions, setSavedSolutions }) {
    const navigate = useNavigate();

    const handleViewSaved = (path, current) => {
        navigate(`/${path}`);
        setSavedSolutions((prevState) => ({
            ...prevState,
            inView: { ...current, disable_input: true }
        }))

        console.log("value2", current);
    }

    return (
        <section id="saved_solutions">
            <h2>Your Saved Calculations</h2>
            <div>
                {savedSolutions ?
                    Object.entries(savedSolutions).map(([key, value]) => (
                        Array.isArray(value) && value.map((value2, key2) => (
                            <div key={`${key}_${value2.id}`} className="saved_box">
                                <h3>{key}</h3>
                                <span>{value2.date}</span>
                                <p key={key2}>Answer: {value2.correlationSolution.correlationR}</p>
                                <button onClick={() => handleViewSaved(key, value2)}>View</button>
                            </div>
                        ))
                    )) : (<p>No Saved Solutions</p>)
                }
            </div>
        </section>
    )
}

export default SavedSolutions