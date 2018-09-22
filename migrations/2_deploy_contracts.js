var Collections = artifacts.require("./Collection.sol");
var CollectionsRegistry = artifacts.require("./collectionRegistry.sol");
var Migrations = artifacts.require("./Migrations.sol");
var Qi = artifacts.require("./Qi.sol");
var qiRegister = artifacts.require("qiRegistry");
var CollectionRegistry = artifacts.require("qiRegistry");


//Colletions
var title = "academic";
var alias = "juanro";

//QI
var _title = "distincion academica";
var _other = "{\"text\":\"json\"}";


module.exports = function(deployer) {
  deployer.deploy(Collections,title,alias);
  deployer.deploy(CollectionsRegistry);
  deployer.deploy(Migrations);
  deployer.deploy(Qi,_title,_other);
  deployer.deploy(qiRegister);
};

