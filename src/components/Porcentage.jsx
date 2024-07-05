import React from 'react'
const porcent = [5, 10, 15, 25, 50]
export const Porcentage = ({ values, handleValues }) => {
  return (
    <ul>
      {porcent.map(tp =>
        <li id="percentage-5" key={tp}>
          <button type="button" onClick={handleValues} name='tip' className={`percentage-button ${values.tip === tp && 'active'}`} value={tp}>{tp}%</button>
        </li>)}

      <li><input type="number" name='tip' onChange={handleValues} placeholder="Custom" value={values.tip === 0 ? '' : (porcent.includes(values.tip) ? 0 : values.tip)} id="custom-percentage-button" className="percentage-button" /></li>

    </ul>
  )
}
