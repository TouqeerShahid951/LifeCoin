const LifeCoin = artifacts.require("LifeCoin");

contract("LifeCoin", accounts => {
    it("should have correct total supply after deployment", async () => {
        const instance = await LifeCoin.deployed();
        const totalSupply = await instance.totalSupply();

        // Adjust total supply to account for decimals
        const expectedSupply = web3.utils.toWei('1000000', 'ether');
        assert.equal(totalSupply.toString(), expectedSupply, "Total supply should be 1,000,000");
    });

    it("should transfer tokens correctly", async () => {
        const instance = await LifeCoin.deployed();
        const recipient = accounts[1];
        const amount = web3.utils.toWei('1000', 'ether');

        // Perform transfer
        await instance.transfer(recipient, amount, { from: accounts[0] });

        const balance = await instance.balanceOf(recipient);
        assert.equal(balance.toString(), amount, "Recipient should have 1000 LifeCoins");
    });
});
