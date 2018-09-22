var collectionQi = artifacts.require("./qiRegistry.sol");

var collectionAddr = "0x43422873aa6d609834e79b55f4e923524d94648f";
var collectionRegistryAddr = "0x1f226a2cc9870e20d865841533255ac2fc9a3df2";
var qiAddr = "0xa447649f06ff30d15b82086dfe5f7498c64893c7";
var qiRegistryAddr = "0x8ee7323f16241a150a5db9597d73233fbafec0eb";
var wallet =  "0xB8eCbF5a6788040a9b1973aF29862B109FBa767B"


contract('Collection', async (accounts) => {

    it("should register issuers", async () => {
        let instance = await collectionQi.deployed();
        let collectionsarray1 = await instance.registerIssuers(qiAddr,collectionAddr);
        console.log(collectionsarray1);
    });

    it("should get issuers", async () => {
        let instance = await collectionQi.deployed();
        let collectionsarray2 = await instance.getIssuerQis(collectionAddr);
        console.log(collectionsarray2);
    });
});
