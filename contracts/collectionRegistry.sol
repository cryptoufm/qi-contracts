pragma solidity ^0.4.17;

import './Collection.sol';

contract collectionRegistry {

  // Mapping between wallets and collections
  mapping (address => address[]) public collections;

  function createCollection(string title, string alias) public {
    Collection collection = new Collection(title, alias);
    // Maps the Collection address to the creator
    collections[msg.sender].push(collection);
  }

  function getCollectionsByAddr(address walletAddr) public view returns (address[]) {
    return collections[walletAddr];
  }

}
