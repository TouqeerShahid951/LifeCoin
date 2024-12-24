// SendLifeCoin.js
import React, { useState } from 'react';
import getContract from './web3';
import "./css/lifecoin.css"

const SendLifeCoin = () => {
  const [recipient, setRecipient] = useState('');
  const [message, setMessage] = useState('');
  const [status, setStatus] = useState('');

  const handleSend = async () => {
    try {
      const contract = await getContract();
      const accounts = await web3.eth.getAccounts();
      await contract.methods.transfer(recipient, web3.utils.toWei('1', 'ether')).send({ from: accounts[0] });
      setStatus('LifeCoin sent successfully!');
    } catch (error) {
      setStatus('Error sending LifeCoin: ' + error.message);
    }
  };

  return (
    <center>
      <div className='life'>
        <h2 className='h2'>Send LifeCoin</h2>
        <input
          type="text"
          placeholder="Recipient Address"
          value={recipient}
          onChange={e => setRecipient(e.target.value)}
        />
        <textarea
          placeholder="Message"
          value={message}
          onChange={e => setMessage(e.target.value)}
        />
        <button onClick={handleSend}>Send LifeCoin</button>
        {status && <p>{status}</p>}
      </div>
    </center>
  );
};

export default SendLifeCoin;
