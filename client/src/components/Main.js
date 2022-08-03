import React from 'react'
import { useContext } from 'react'
import { TransactionContext } from '../context/TransactionContext'

const Main = () => {
  const { connectWallet, sendTransaction, handleChange, inputFormData } = useContext(TransactionContext);
  
  const handleSubmit = () => {
    const { addressTo, amount } = inputFormData;
    console.log(inputFormData.addressTo);
    if(addressTo == "" || amount ==  ""){
      return;
    }else{
      sendTransaction();
    }
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
    <input type='text' placeholder='address' name="addressTo" onChange={(e) => handleChange(e, "addressTo")} />
      <input type='number' placeholder='amount' name="amount" step="0.0001" onChange={(e) => handleChange(e, "amount")} />
    <button type='button' onClick={handleSubmit}>send</button>
    </div>
    </div>
  )
}

export default Main