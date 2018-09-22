var Qi = artifacts.require("./Qi.sol");
var Collection = artifacts.require("./Collection.sol")

var collectionAddr = "0x43422873aa6d609834e79b55f4e923524d94648f";
var collectionRegistryAddr = "0x1f226a2cc9870e20d865841533255ac2fc9a3df2";
var qiAddr = "0xa447649f06ff30d15b82086dfe5f7498c64893c7";
var qiRegistryAddr = "0x8ee7323f16241a150a5db9597d73233fbafec0eb";

contract('Qi', async (accounts) => {

    it("should add a Collection", async () => {
        let instance = await Qi.deployed();
        let collectionsarray = await instance.getOwner();
        console.log(collectionsarray);
        //await instance.addCollection(collectionAddr);
        //console.log(Object.keys(await instance.getCollections()).length);
        //assert.isAbove(Object.keys(await instance.getCollections()).length, Object.keys(collectionsarray).length)
    })

});