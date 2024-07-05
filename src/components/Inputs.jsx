import React from 'react'


export const Inputs = ({ children, values, handleValues }) => {

    return (

        <div className="data-wrapper">

            <h1>Bill</h1><label htmlFor="input-bill">
                <input className="input-bill" name='bill' onChange={handleValues} id="input-bill" type="number" value={values.bill}
                    min="0" /></label>
            <h2>Select Tip %</h2>
            {children}
            <h2>Number of People<span className={`span ${(values.people < 1 || isNaN(values.people)) && 'act'}`} id="span">can't be zero</span></h2><label htmlFor="input-people">
                <input id="input-people" onChange={handleValues} name='people' className={`input-people ${(values.people < 1 || isNaN(values.people)) && 'input-invalid'}`} type="number"
                    value={values.people} min="1" /></label>
        </div>
    )
}
