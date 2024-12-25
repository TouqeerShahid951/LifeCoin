// web3.js
import Web3 from "web3";
import LifeCoin from "./build/contracts/LifeCoin.json";

const web3 = new Web3(Web3.givenProvider || "http://localhost:7545");
const networkId = await web3.eth.net.getId();
const deployedNetwork = LifeCoin.networks[networkId];
const instance = new web3.eth.Contract(
  LifeCoin.abi,
  deployedNetwork && deployedNetwork.address
);

export default getContract;
