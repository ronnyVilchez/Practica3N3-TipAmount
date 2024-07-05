
import { useEffect, useState } from 'react'
import './App.css'
import { Inputs } from './components/Inputs'
import { Porcentage } from './components/Porcentage'
import { Results } from './components/Results'

const objValues = {
  bill: 0,
  people: 1,
  tip: 0
}

const objTotals = {
  totalTip: 0,
  total: 0
}



function App() {

  const [values, setValues] = useState(objValues)
  const [totals, setTotals] = useState(objTotals)

  const reset = () => {
    setValues(objValues)
    setTotals(objTotals)
  }

  const calculator = () => {
    const { tip, bill, people } = values

    if (tip != 0 && bill != 0 && people > 0) {

      const totalTip = ((bill * (tip / 100)) / people).toFixed(2)
      const total = ((bill / people) + parseFloat(totalTip)).toFixed(2)

      setTotals({ totalTip, total })

    }
  }

  useEffect(() => {
    calculator()
  }, [values])

  const handleValues = (e) => {
    setValues({ ...values, [e.target.name]: parseFloat(e.target.value) })


  }
  return (
    <>
<header><img src="./images/logo.svg" alt=""/></header>
    <div className="general-wrapper">
      <Inputs
        values={values}
        handleValues={handleValues}
      >
        <Porcentage
          values={values}
          handleValues={handleValues}
        />
      </Inputs>
      <Results
        totals={totals}
        reset={reset}
        values={values}
      />
    </div>
    </>
  )
}

export default App
