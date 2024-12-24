// web3.js
import Web3 from 'web3';

let web3;
if (window.ethereum) {
  web3 = new Web3(window.ethereum);
  try {
    window.ethereum.enable(); // Request permission to access accounts
  } catch (error) {
    console.error("User denied account access");
  }
} else if (window.web3) {
  web3 = new Web3(window.web3.currentProvider);
} else {
  console.log("No Ethereum browser detected. You should consider trying MetaMask!");
}

const getContract = async () => {
  const networkId = await web3.eth.net.getId();
  const deployedNetwork = LifeCoin.networks[networkId];
  const instance = new web3.eth.Contract(
    LifeCoin.abi,
    deployedNetwork && deployedNetwork.address,
  );
  return instance;
};

export default getContract;
