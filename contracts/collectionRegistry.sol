pragma solidity ^0.4.17;

import "./Collection.sol";

contract collectionRegistry {

  // Mapping between wallets and collections
    mapping (address => address[]) public collections;

    event CreatedCollection (address collectionAddress);

    function create(
        string title,
        string alias)
        public
        returns (address){
        Collection collection = new Collection(title, alias);
        // Maps the Collection address to the creator
        collections[msg.sender].push(collection);
        emit CreatedCollection(collection);
        return collection;
    }

    function getCollectionsByAddr(
        address walletAddr)
        public
        view
        returns (address[]) {
          
        return collections[walletAddr];
    }

}
