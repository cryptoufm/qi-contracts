var collectionRegistry = artifacts.require("./collectionRegistry.sol");

var collectionAddr = "0x43422873aa6d609834e79b55f4e923524d94648f";
var collectionRegistryAddr = "0x1f226a2cc9870e20d865841533255ac2fc9a3df2";
var qiAddr = "0xa447649f06ff30d15b82086dfe5f7498c64893c7";
var qiRegistryAddr = "0x8ee7323f16241a150a5db9597d73233fbafec0eb";
var wallet =  "0xB8eCbF5a6788040a9b1973aF29862B109FBa767B"
var title = "music"
var alias = "joan"

contract('Collection', async (accounts) => {

    it("should register", async () => {
        let instance = await collectionRegistry.deployed();
        let collectionsarray1 = await instance.createCollection(title,alias);
        console.log(collectionsarray1);
    });

    it("should return...", async () => {
        let instance = await collectionRegistry.deployed();
        let collectionsarray1 = await instance.getCollectionsByAddr(wallet);
        console.log(collectionsarray1);
    });
});
