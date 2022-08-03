import React from 'react'
import { useContext } from 'react'
import { TransactionContext } from '../context/TransactionContext'

const Main = () => {
  const { connectWallet, sendTransaction, handleChange } = useContext(TransactionContext);
  
  const handleSubmit = () => {
    sendTransaction();
  }
  return (
    <div className='mainContainer'>

    <div className='cryptContainer'>
      <h1 className='title'>Crypt Card</h1>
      <button type='button'>
        <p className="buttonText" onClick={connectWallet}>connect wallet</p>
      </button>
    </div>
    <div className='inputContainer'>
    <input type='text' placeholder='address' name="addressTo" onChange={handleChange} />
      <input type='number' placeholder='amount' name="amount" step="0.0001" onChange={handleChange} />
    <button type='button' onClick={handleSubmit}>send</button>
    </div>
    </div>
  )
}

export default Main