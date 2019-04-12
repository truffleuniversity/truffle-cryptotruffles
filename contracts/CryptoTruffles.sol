pragma solidity ^0.5.2;

import '../node_modules/openzeppelin-solidity/contracts/token/ERC721/ERC721.sol';
import '../node_modules/openzeppelin-solidity/contracts/ownership/Ownable.sol';

contract CryptoTruffles is ERC721, Ownable {
  string public name = "CryptoTruffle";
  string public symbol = "TRF";

  // Array to store the truffles
  Truffle[] truffles;

  constructor() public {
  }

  // Enum with the different emotions of the truffle
  enum Emotion { HAPPY, LAUGHING, WINKING, COOL }

  // Struct containing the details of the truffle
  struct Truffle {
    string title;
    string color;
    Emotion emotion;
  }

  /**
  * @dev Mints a fresh new Truffle
  * @param _title string with the title / name of the truffle
  * @param _color string (hex / css color name) of the truffle
  * @param _emotion uint256 indidcating the emotion of the truffle
  */
  function mint(string memory _title, string memory _color, uint _emotion) public onlyOwner {
    require(uint(Emotion.COOL) >= _emotion);

    Truffle memory _truffle = Truffle({ title: _title, color: _color, emotion: Emotion(_emotion) });
    uint _truffleId = truffles.push(_truffle) - 1;

    _mint(msg.sender, _truffleId);
  }

  /**
  * @dev Gets the details of the requested Truffle
  * @param _truffleId uint256 ID of the truffle
  * @return  title (name), color and emotion of the truffle
  */
  function getTruffle(uint _truffleId) public view returns (string memory title, string memory color, Emotion emotion) {
    Truffle memory _truffle = truffles[_truffleId];

    title = _truffle.title;
    color = _truffle.color;
    emotion = _truffle.emotion;
  }
}
