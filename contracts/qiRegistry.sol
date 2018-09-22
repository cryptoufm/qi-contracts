pragma solidity ^0.4.17;

import './Qi.sol';
import  './Collection.sol';

contract qiRegistry {

  // Mapping between profile and Q'i's it created
  mapping (address => address[]) public issuers;

  // Mapping between profile and Q'i's it owns
  mapping (address => address[]) public receivers;

  function validate(address qiAddress, address collectionAddress) private view returns (bool){
    // Function for accessing Qi contract and verifying owner
    Qi q = Qi(qiAddress);
    Collection c = Collection(collectionAddress);
		require(msg.sender == c.getOwner());
    require(c.getOwner() == q.getOwner());
    return true;
  }

  function registerIssuers(address qiAddress, address collectionAddr) public {

    require(validate(qiAddress, collectionAddr));
    // Maps the Qi address to the Qi creator
    issuers[collectionAddr].push(qiAddress);
  }

  function registerReceiver(address qiAddress, address receiverAddress, address collectionAddr) public {

    require(validate(qiAddress, collectionAddr));
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
