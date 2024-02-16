import './Correlation.css'
import { useEffect, useId, useState } from 'react'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Correlation({ savedSolutions, setSavedSolutions }) {
    const newId = useId();

    const [correlationTableData, setCorrelationTableData] = useState({});
    const [correlationTDNumber, setCorrelationTDNumber] = useState(0);
    const [correlationSolution, setCorrelationSolution] = useState({});
    const [correlationId, setCorrelationId] = useState(newId);
    const [correlationDate, setCorrelationDate] = useState(null);

    useEffect(() => {
        if (savedSolutions.inView) {
            setCorrelationId(savedSolutions.inView.id);
            setCorrelationTableData(savedSolutions.inView.correlationTable);
            setCorrelationSolution(savedSolutions.inView.correlationSolution);
            setCorrelationDate(savedSolutions.inView.correlationDate);
        }
    }, [savedSolutions])

    const handleAdd = (e) => {
        console.log(e);

        if (e.target.parentElement.parentElement[0].value && e.target.parentElement.parentElement[1].value) {
            setCorrelationTableData({
                ...correlationTableData,
                [correlationTDNumber]: [
                    e.target.parentElement.parentElement[0].value,
                    e.target.parentElement.parentElement[1].value,
                    Number((e.target.parentElement.parentElement[0].value ** 2).toFixed(2)),
                    Number((e.target.parentElement.parentElement[1].value ** 2).toFixed(2)),
                    Number((e.target.parentElement.parentElement[0].value * e.target.parentElement.parentElement[1].value).toFixed(2)),
                ]
            });
            setCorrelationTDNumber(() => correlationTDNumber + 1);

            e.target.parentElement.parentElement[0].value = "";
            e.target.parentElement.parentElement[1].value = "";
        }
    }

    const correlationMapper = (num) => {
        let result = 0;
        Object.entries(correlationTableData).map(([key, value]) => {
            result += Number(value[num]);
        });
        return result;
    }

    // Correlation solving logic
    const solveCorrelationX = () => {
        const summationX = correlationMapper(0);
        const summationXSquared = correlationMapper(2);
        const correlatonN = Number(Object.entries(correlationTableData).length);
        const correlationSxx = summationXSquared - ((summationX ** 2) / correlatonN);

        return correlationSxx;
    }
    const solveCorrelationY = () => {
        const summationY = correlationMapper(1);
        const summationYSquared = correlationMapper(3);
        const correlatonN = Number(Object.entries(correlationTableData).length);
        const correlationSyy = summationYSquared - ((summationY ** 2) / correlatonN);

        return correlationSyy;
    }
    const solveCorrelationXY = () => {
        const summationXY = correlationMapper(4);
        const summationX = correlationMapper(0);
        const summationY = correlationMapper(1);
        const correlatonN = Number(Object.entries(correlationTableData).length);
        const correlationSxy = summationXY - ((summationX * summationY) / correlatonN);

        return correlationSxy;
    }
    const solveCorrelationR = () => {
        const correlationSxx = solveCorrelationX();
        const correlationSyy = solveCorrelationY();
        const correlationSxy = solveCorrelationXY();
        const correlationR = correlationSxy / (Math.sqrt(correlationSxx * correlationSyy));

        setCorrelationSolution({
            correlationSxx: Number(correlationSxx.toFixed(3)),
            correlationSyy: Number(correlationSyy.toFixed(3)),
            correlationSxy: Number(correlationSxy.toFixed(3)),
            correlationR: Number(correlationR.toFixed(4)),
        });
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        solveCorrelationR();

        console.log("!!!Special logging!!!:", correlationSolution);
    }

    const handleSaveSolution = () => {
        const newDate = new Date();

        const newSolution = {
            id: correlationId,
            correlationTable: correlationTableData,
            correlationSolution: correlationSolution,
            date: `${newDate.getHours()}:${newDate.getMinutes()}:${newDate.getSeconds()}; ${newDate.getDate()}/${newDate.getMonth() + 1}/${newDate.getFullYear()}`
        }

        let idExists = false;
        if (savedSolutions.correlation) {
            for (let i = 0; i < savedSolutions.correlation.length; i++) {
                if (savedSolutions.correlation[i].id == correlationId)
                    idExists = true;
            }
        }

        if (!idExists) {
            setSavedSolutions((prevState) => ({
                ...prevState,
                correlation: prevState.correlation ? [...prevState.correlation, newSolution] : [newSolution],
                inView: { ...newSolution, disable_input: true }
            }));

            toast("Solution successfully saved!");
        }

        console.log("newSolution daate:", newSolution.date);
        console.log("The saved solutions", savedSolutions);
    }

    const handleClearCorrelation = () => {
        setCorrelationId(newId);
        setCorrelationTDNumber(0);
        setCorrelationTableData({});
        setCorrelationSolution({});
        if (savedSolutions.inView)
            savedSolutions.inView = {};
    }

    return (
        <section id="correlation">
            <ToastContainer />
            <h2>Correlation</h2>
            <h5>Solving correlation questions have never been easier!</h5>
            <div id="correlation_main">
                <div id="correlation_solution">
                    <table id="correlation_table">
                        <thead>
                            <tr>
                                <th>x</th>
                                <th>y</th>
                                <th>x<sup>2</sup></th>
                                <th>y<sup>2</sup></th>
                                <th>x * y</th>
                            </tr>
                        </thead>
                        {correlationTableData && (
                            <tbody>
                                {Object.entries(correlationTableData).map(([key, value]) => (
                                    <tr key={key}>
                                        <td>{value[0]}</td>
                                        <td>{value[1]}</td>
                                        <td>{value[2]}</td>
                                        <td>{value[3]}</td>
                                        <td>{value[4]}</td>
                                    </tr>
                                ))}
                            </tbody>
                        )}
                    </table>

                    <div className="correlation_answers"><span style={{ fontWeight: 600 }}>Sxx</span> = &#8721;x<sup>2</sup> - (&#8721;x)<sup>2</sup> / n = {correlationSolution && correlationSolution.correlationSxx ? correlationSolution.correlationSxx : ""}</div>
                    <div className="correlation_answers"><span style={{ fontWeight: 600 }}>Syy</span> = &#8721;y<sup>2</sup> - (&#8721;y)<sup>2</sup> / n = {correlationSolution && correlationSolution.correlationSyy ? correlationSolution.correlationSyy : ""}</div>
                    <div className="correlation_answers"><span style={{ fontWeight: 600 }}>Sxy</span> = &#8721;xy - (&#8721;x) (&#8721;y) / n = {correlationSolution && correlationSolution.correlationSxy ? correlationSolution.correlationSxy : ""}</div>
                    <div className="correlation_answers"><span style={{ fontWeight: 600 }}>r</span> = Sxy / (&#8730; Sxx * Sxy) = {correlationSolution && correlationSolution.correlationR ? correlationSolution.correlationR : ""}</div>

                    <button disabled={correlationSolution && !correlationSolution.correlationR || (savedSolutions.inView && savedSolutions.inView.disable_input)} onClick={handleSaveSolution}>Save Solution</button>
                </div>

                <form onSubmit={handleSubmit}>
                    <div>Please input the values of x and y</div>
                    <label htmlFor="correlaton_x">x: <input disabled={savedSolutions.inView && savedSolutions.inView.disable_input} type="number" step={0.01} name="correlaton_x" id="correlaton_x" /></label>
                    <label htmlFor="correlaton_y">y: <input disabled={savedSolutions.inView && savedSolutions.inView.disable_input} type="number" step={0.01} name="correlaton_y" id="correlaton_y" /></label>
                    <div>
                        <button onClick={handleAdd}>Add</button>
                        <button onClick={handleAdd}>Submit</button>
                    </div>
                    <div id='clear_correlation' onClick={handleClearCorrelation}>Clear Solution</div>
                </form>
            </div>
        </section>
    )
}

export default Correlation