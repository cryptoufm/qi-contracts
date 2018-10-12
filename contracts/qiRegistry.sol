pragma solidity ^0.4.17;

import "./Qi.sol";
import  "./Collection.sol";

contract qiRegistry {


    modifier onlyCollectionOwner(
        address collectionAddr) {
          
        Collection c = Collection(collectionAddr);
        require(msg.sender == c.getOwner(), "Not the collection owner.");
        _;
    }

    modifier onlyQiOwner(
      address collectionAddr,
      address qiAddress) {

        Collection c = Collection(collectionAddr);
        Qi q = Qi(qiAddress);
        require(msg.sender == c.getOwner(), "Not the collection owner.");
        require(c.getOwner() == q.getOwner(), "Not the Qi owner.");
        _;
    }

  // Mapping between profile and Q'i's it created
    mapping (address => address[]) public issuers;

  // Mapping between profile and Q'i's it owns
    mapping (address => address[]) public receivers;

    event CreatedQi (address qiAddress);
  /*
    Create a new Qi and register the owner as a Qi Issuer
  */
    function createQi(
        address collectionAddr,
        string title,
        string info)
        public
        //onlyCollectionOwner (collectionAddr)
        returns (address){

        Qi qi = new Qi(collectionAddr, title, info);
        // Maps the Qi address to the Qi creator
        issuers[collectionAddr].push(qi);
        emit CreatedQi(qi);
        return qi;
    }

    function issueQi(
        address qiAddress,
        address receiverAddress,
        address collectionAddr)
        public
        //onlyQiOwner (collectionAddr, qiAddress)
        {
        // Maps Qi address to the receiver's Q'i' list
        // Sets the date in which the Q'i' was emmited
        receivers[receiverAddress].push(qiAddress);
        Qi q = Qi(qiAddress);
        q.newIssueDate(receiverAddress);
    }

    function getIssuerQis(
        address issuerAddress)
        public
        view
        returns (address[]) {
        return issuers[issuerAddress];
    }

    function getReceiverQis(
        address receiverAddress)
        public
        view
        returns (address[]) {
        return receivers[receiverAddress];
    }

}
