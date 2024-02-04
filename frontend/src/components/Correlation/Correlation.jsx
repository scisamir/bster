import './Correlation.css'
import { useState } from 'react'

function Correlation() {
    const [correlationTableData, setCorrelationTableData] = useState({});
    const [correlationTDNumber, setCorrelationTDNumber] = useState(0);

    const handleSubmit = (e) => {
        e.preventDefault();
        setCorrelationTableData({
            ...correlationTableData,
            [correlationTDNumber]: [e.target[0].value, e.target[1].value]
        });
        setCorrelationTDNumber(() => correlationTDNumber + 1);

        console.log(correlationTDNumber, correlationTableData)
        console.log(Object.entries(correlationTableData));
    }

    return (
        <section id="correlation">
            <h1>Correlation</h1>
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
                                <td>{value[0] ** 2}</td>
                                <td>{value[1] ** 2}</td>
                                <td>{value[0] * value[1]}</td>
                            </tr>
                        ))}
                    </tbody>
                )}
            </table>

            <form onSubmit={handleSubmit}>
                <label htmlFor="correlaton_x">x: </label>
                <input type="number" name="correlaton_x" id="correlaton_x" />
                <label htmlFor="correlaton_y">y: </label>
                <input type="number" name="correlaton_y" id="correlaton_y" />
                <button type="submit">Add</button>
            </form>
        </section>
    )
}

export default Correlation