var Collection = artifacts.require("./Collection.sol");
//var Collection = artifacts.require("./Collection.sol")

var collectionAddr = "0x43422873aa6d609834e79b55f4e923524d94648f";
var collectionRegistryAddr = "0x1f226a2cc9870e20d865841533255ac2fc9a3df2";
var qiAddr = "0xa447649f06ff30d15b82086dfe5f7498c64893c7";
var qiRegistryAddr = "0x8ee7323f16241a150a5db9597d73233fbafec0eb";
var collectionlist = ['juanro','academic'];


contract('Collection', async (accounts) => {

    it("should be 2", async () => {
        let instance = await Collection.deployed();
        let collectionsarray = await instance.getCollectionInfo();
        //console.log(typeof collectionsarray);
        console.log(collectionsarray);
        console.log(Object.keys(collectionsarray).length);
        assert.equal(Object.keys(collectionsarray).length,(Object.keys(collectionlist)).length);
    });


    it("should be same", async () => {
        let instance = await Collection.deployed();
        let collectionsarray = await instance.getCollectionInfo();
        //console.log(typeof collectionsarray);
        console.log(collectionsarray);
        console.log(collectionlist);
        expect(collectionsarray).to.deep.equal(collectionlist);
    });

});