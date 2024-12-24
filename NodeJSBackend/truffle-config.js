module.exports = {
  networks: {
    development: {
      host: "127.0.0.1",
      port: 8545,
      network_id: "*", // Match any network id
      gas: 5500000
    }
  },
  compilers: {
    solc: {
      version: "0.8.0"
    }
  }
};