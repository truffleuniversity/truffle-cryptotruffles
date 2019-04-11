pragma solidity ^0.5.2;

import '../node_modules/openzeppelin-solidity/contracts/token/ERC721/ERC721.sol';
import '../node_modules/openzeppelin-solidity/contracts/ownership/Ownable.sol';

contract CryptoTruffles is ERC721, Ownable {
  string public name = "CryptoTruffle";
  string public symbol = "TRF";
  
  constructor() public {
  }
}
