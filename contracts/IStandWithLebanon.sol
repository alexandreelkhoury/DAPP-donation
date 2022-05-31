// SPDX-License-Identifier: MIT
pragma solidity 0.8.13;

import "@openzeppelin/contracts/token/ERC1155/ERC1155.sol";
import "@openzeppelin/contracts/access/Ownable.sol";
import "@openzeppelin/contracts/token/ERC1155/extensions/ERC1155Supply.sol";

contract IStandWithLebanon is ERC1155, Ownable, ERC1155Supply {

    uint public constant NFT1 = 1;
    uint public constant NFT2 = 2;
    uint public constant NFT3 = 3;
    uint public totaldonations;
    uint public goal = 100 ether;
    address public ownerr;


    event newDonation(address indexed _from,uint256 time, uint _value);

    constructor() ERC1155("https://gateway.pinata.cloud/ipfs/QmaUEuj3UqJHigPZS33YfcCmMF722yqkqi56AshRYjawh4/{id}.json") {
        ownerr = msg.sender;
    }

    function getOwner() public virtual returns (address) {
        return ownerr;
    }

    function setURI(string memory newuri) public onlyOwner {
        _setURI(newuri);
    }

    function mint() public payable {
        require(msg.value >= 0.01 ether, "Please enter an amount greater than 0.01 ether !");
        require(totaldonations+msg.value<goal, "Goal reached !");
        totaldonations+=msg.value;
        if (msg.value>= 0.01 ether){
            _mint(msg.sender, NFT1, 1, "");
        }
        if (msg.value >= 0.05 ether){
            _mint(msg.sender, NFT2, 1, ""); 
        }
        if (msg.value >= 0.1 ether ){
            _mint(msg.sender, NFT3, 1, ""); 
        }
        emit newDonation(msg.sender, block.timestamp, msg.value);
    }

    function withdraw() public onlyOwner {
        (bool success, ) = ownerr.call{value: address(this).balance}("");
        require(success, "Failed to send to owner");
    }

    function mintBatch(address to, uint256[] memory ids, uint256[] memory amounts, bytes memory data)
        public
        onlyOwner
    {
        _mintBatch(to, ids, amounts, data);
    }

    // The following functions are overrides required by Solidity.

    function _beforeTokenTransfer(address operator, address from, address to, uint256[] memory ids, uint256[] memory amounts, bytes memory data)
        internal
        override(ERC1155, ERC1155Supply)
    {
        super._beforeTokenTransfer(operator, from, to, ids, amounts, data);
    }
}

