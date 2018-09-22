var Collection = artifacts.require("./Qi.sol");

var collectionAddr = "0x43422873aa6d609834e79b55f4e923524d94648f";
var collectionRegistryAddr = "0x1f226a2cc9870e20d865841533255ac2fc9a3df2";
var qiAddr = "0xa447649f06ff30d15b82086dfe5f7498c64893c7";
var qiRegistryAddr = "0x8ee7323f16241a150a5db9597d73233fbafec0eb";
var collectionlist = ['juanro','academic'];
var wallet = "0xb8ecbf5a6788040a9b1973af29862b109fba767b";

contract('Collection', async (accounts) => {

    it("should be equal tan collectionAddr", async () => {
        let instance = await Collection.deployed();
        let collectionsarray = await instance.getOwner();
        //console.log(typeof collectionsarray);
        console.log(collectionsarray);
        console.log(collectionAddr);
        assert.equal((collectionsarray),(collectionAddr));
    });
});