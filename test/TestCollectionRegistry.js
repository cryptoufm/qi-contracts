var collectionRegistry = artifacts.require("./collectionRegistry.sol");

var collectionAddr = "0x310a9cba0656b8b1334049dd139dddfb378670dd44e7b631b3872118fa1f9827";
var collectionRegistryAddr = "0xC9F96EE7AD07A50f715410814f402D616163a7A0";
//var qiAddr = "0xa447649f06ff30d15b82086dfe5f7498c64893c7";
//var qiRegistryAddr = "0x8ee7323f16241a150a5db9597d73233fbafec0eb";

var wallet =  "0xBd032F08e6CCcF634bB96b4f61D6e8E466387FA8"
var title = "Demo"
var alias = "QA"

contract('Collection', async (accounts) => {

    it("should register", async () => {
        let instance = await collectionRegistry.deployed();
        let collectionsarray1 = await instance.create(title,alias);
        console.log(collectionsarray1);
    });

    it("should return...", async () => {
        let instance = await collectionRegistry.deployed();
        let collectionsarray1 = await instance.getCollectionsByAddr(wallet);
        console.log(collectionsarray1);
    });
});
