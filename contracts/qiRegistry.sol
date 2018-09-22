pragma solidity ^0.4.17;

import './Qi.sol';
import  './Collection.sol';

contract qiRegistry {

  // Mapping between profile and Q'i's it created
  mapping (address => address[]) public issuers;

  // Mapping between profile and Q'i's it owns
  mapping (address => address[]) public receivers;

  function validateQiIssuer(address qiAddress, address collectionAddress) private view returns (bool){
    // Function for accessing Qi contract and verifying owner
    Qi q = Qi(qiAddress);
    Collection c = Collection(collectionAddress);
		require(msg.sender == c.getOwner());
    require(c.getOwner() == q.getOwner());
    return true;
  }

  function validateCollection(address collectionAddress) private view returns (bool){
    // Function for accessing Collection contract and verifying owner
    Collection c = Collection(collectionAddress);
		require(msg.sender == c.getOwner());
    return true;
  }

  /*
    Create a new Qi and register the owner as a Qi Issuer
  */
  function createQi(address collectionAddr, string title, string info) public {
    require(validateCollection(collectionAddr));
    Qi qi = new Qi(collectionAddr, title, info);
    // Maps the Qi address to the Qi creator
    issuers[collectionAddr].push(qi);
  }

  function issueQi(address qiAddress, address receiverAddress, address collectionAddr) public {

    require(validateQiIssuer(qiAddress, collectionAddr));
    // Maps Qi address to the receiver's Q'i' list
    // Sets the date in which the Q'i' was emmited
    receivers[receiverAddress].push(qiAddress);
    Qi q = Qi(qiAddress);
    q.newIssueDate(receiverAddress);
  }

  function getIssuerQis(address issuerAddress) public view returns (address[]){
    return issuers[issuerAddress];
  }

  function getReceiverQis(address receiverAddress) public view returns (address[]) {
    return receivers[receiverAddress];
  }

}
