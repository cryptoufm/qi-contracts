var collectionQi = artifacts.require("./qiRegistry.sol");
var collectionRegistry = artifacts.require("./collectionRegistry.sol");

var collectionAddr = "0xc282df7d0e9f25d94fbc4c8820cf6d6132e54bf7";
//var collectionRegistryAddr = "0xb13dcb0ea6eec0b9fdee6c66f716e59ca602f84e7681cdb304de02ae96388868";
//var qiAddr = "0xa447649f06ff30d15b82086dfe5f7498c64893c7";

//var qiRegistryAddr = "0x8a8b375b29b2ddd8d845a2d1b3a80b018162dc67dab60986333f471a2e1a8223";
//var wallet =  "0xBd032F08e6CCcF634bB96b4f61D6e8E466387FA8"

var title = "Sports";
var info = "Nadar domingos";


contract('Collection', async (accounts) => {
    let collection;
    before (async () => {
            let collRegistry = await collectionRegistry.deployed();
            let receit = await collRegistry.create("Demo","alias");
            collection = receit.logs[0].args.collectionAddress
            console.log(collection);
        })
    
    it("should Create Qi", async () => {
        
        let instance = await collectionQi.deployed();
        let collectionsarray1 = await instance.createQi(collectionAddr,title,info);
        console.log(collectionsarray1);
        //crAdrr = collectionQi.address
        //console.log(crAdrr);
        //return crAdrr;
    })
});
