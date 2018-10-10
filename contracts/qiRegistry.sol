pragma solidity ^0.4.17;

import "./Qi.sol";
import  "./Collection.sol";

contract qiRegistry {


    modifier onlyCollectionOwner(
        address collectionAddr) {
          
        Collection c = Collection(collectionAddr);
        require(msg.sender == c.getOwner());
        _;
    }

    modifier onlyQiOwner(
      address collectionAddr,
      address qiAddress) {

        Collection c = Collection(collectionAddr);
        Qi q = Qi(qiAddress);
        require(msg.sender == c.getOwner());
        require(c.getOwner() == q.getOwner());
        _;
    }

  // Mapping between profile and Q'i's it created
    mapping (address => address[]) public issuers;

  // Mapping between profile and Q'i's it owns
    mapping (address => address[]) public receivers;

  /*
    Create a new Qi and register the owner as a Qi Issuer
  */
    function createQi(
        address collectionAddr,
        string title,
        string info)
        onlyCollectionOwner (collectionAddr)
        public
        returns (address){

        Qi qi = new Qi(collectionAddr, title, info);
        // Maps the Qi address to the Qi creator
        issuers[collectionAddr].push(qi);
        return qi;
    }

    function issueQi(
        address qiAddress,
        address receiverAddress,
        address collectionAddr)
        onlyQiOwner (collectionAddr, qiAddress)
        public {
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
