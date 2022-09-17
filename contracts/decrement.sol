// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.9;

import "./proxiable.sol";

contract Decrement is Proxiable {
    address public owner;
    uint public count;

    modifier onlyOwner(){
        require(msg.sender == owner, "YOu are not the owner");
        _;
    }

   function constructorOne() public {
        require(owner == address(0), "Already Initialed");
        owner = msg.sender;
    }

    function increment() public {
        count++;
    }

    function decrement() public {
        count--;
    }
    function updatecode(address newAddress) onlyOwner public {
        updateCodeAddress(newAddress);
    }

    function encode() external pure returns(bytes memory) {
        return abi.encodeWithSignature("constructorOne()");
    } 

}

