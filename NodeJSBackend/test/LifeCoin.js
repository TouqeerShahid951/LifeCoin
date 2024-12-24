const LifeCoin = artifacts.require("LifeCoin");

contract("LifeCoin", accounts => {
  const [deployer, recipient, anotherAccount] = accounts;

  it("should have correct total supply after deployment", async () => {
    const instance = await LifeCoin.deployed();
    const totalSupply = await instance.totalSupply();
    assert.equal(totalSupply.toString(), "1000000", "Total supply should be 1,000,000");
  });

  it("should transfer tokens correctly", async () => {
    const instance = await LifeCoin.deployed();
    await instance.transfer(recipient, 1000, { from: deployer });
    const balance = await instance.balanceOf(recipient);
    assert.equal(balance.toString(), "1000", "Recipient should have 1,000 LifeCoins");
  });

  // Add more test cases as needed
});
