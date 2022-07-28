import React from 'react'

const Main = () => {
  return (
    <div className='mainContainer'>

    <div className='cryptContainer'>
      <h1 className='title'>Crypt Card</h1>
      <button type='button'>
        <p className="buttonText">connect wallet</p>
      </button>
    </div>
    <div className='inputContainer'>
    <input type='text' placeholder='address' name="addressTo" />
      <input type='number' placeholder='address' name="amount" step="0.0001" />
    <button type='button'>send</button>
    </div>
    </div>
  )
}

export default Main