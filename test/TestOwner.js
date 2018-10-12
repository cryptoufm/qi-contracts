var Collection = artifacts.require("./Collection.sol");


contract('Collection', async (accounts) => {

    it("should be 2", async () => {
        let instance = await Collection.deployed();
        let collectionsarray = await instance.getOwner();
        
        console.log(collectionsarray);
    })
})