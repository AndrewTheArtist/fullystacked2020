import React, { useState } from 'react'
import ReactDOM from 'react-dom'

  const Button = ({ onClick, click }) => <button onClick={onClick} >{click}</button>

  const Buttons = ({ setGood, good, setNeutral, neutral, setBad, bad }) => {
    return (
        <div>
            <Button click="good" onClick={() => setGood(good + 1)} />
            <Button click="neutral" onClick={() => setNeutral(neutral + 1)} />
            <Button click="bad" onClick={() => setBad(bad + 1)} />
        </div>
    )
}

const Statistic = ({ click, votes }) => <tr><td>{click}:</td><td>{votes}</td></tr>

const Statistics = ({ good, neutral, bad }) => { 
    return (
        <div>    
            <Statistic click="good" votes={good} />
            <Statistic click="neutral" votes={neutral} />
            <Statistic click="bad" votes={bad} />         
        </div>
    )
}

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  return (
      
    <div>   
        <h1>give feedback</h1>
        <Buttons good={good} setGood={setGood} neutral={neutral} setNeutral={setNeutral} bad={bad} setBad={setBad} />
        <h1>statistics</h1>
        <Statistics good={good} neutral={neutral} bad={bad}/>
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))