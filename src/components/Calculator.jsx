import { useState } from 'react'

function Calculator() {
    const [num1, setNum1] = useState(0)
    const [num2, setNum2] = useState(0)
    const [result, setResult] = useState(0)

    const handleAddition = () => {
        setResult(parseInt(num1) + parseInt(num2))
    };

    const handleSubtraction = () => {
        setResult(parseInt(num1) - parseInt(num2))
    };

    const handleMultiplication = () => {
        setResult(parseInt(num1) * parseInt(num2))
    };

    const handleDivision = () => {
        if (parseInt(num2) === 0) {
            return;
        }
        setResult(parseInt(num1) / parseInt(num2))
    };

    return (
        <div className='cont-Calulator'>
            <h2>Calculadora</h2>
            <input 
                type="number" 
                value={num1} 
                onChange={(e) => setNum1(Number(e.target.value))} 
                placeholder="Número 1"
            />

            <input 
            type="number" 
            value={num2} 
            onChange={(e) => setNum2(Number(e.target.value))} placeholder="Número 2"
            />

            <button onClick={handleAddition}>Sumar</button>
            <button onClick={handleSubtraction}>Restar</button>
            <button onClick={handleMultiplication}>Multiplicar</button>
            <button onClick={handleDivision}>Dividir</button>

            <p className='result'>Resultado: {result}</p>
            </div>
    )
} 
export default Calculator;