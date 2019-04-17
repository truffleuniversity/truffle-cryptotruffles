pragma solidity ^0.5.2;

import '../node_modules/openzeppelin-solidity/contracts/token/ERC721/ERC721.sol';
import '../node_modules/openzeppelin-solidity/contracts/ownership/Ownable.sol';

contract CryptoTruffles is ERC721, Ownable {
  string public name = "CryptoTruffle";
  string public symbol = "TRF";

  // Array to store the truffles
  Truffle[] truffles;
  uint[] truffleIds;

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
    truffleIds.push(_truffleId);
  }

  /**
  * @dev Returns the identifiers of the minted Truffles
  * @return  array of uints
  */
  function getTruffleIds() public view returns (uint[] memory) {
    return truffleIds;
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

  /// 👍 https://github.com/cryptocopycats/awesome-cryptokitties
  /// @notice Returns a list of all Truffle IDs assigned to an address.
  /// @param _owner The owner whose Truffles we are interested in.
  /// @dev This method MUST NEVER be called by smart contract code. First, it's fairly
  ///  expensive (it walks the entire Truffle array looking for cats belonging to owner),
  ///  but it also returns a dynamic array, which is only supported for web3 calls, and
  ///  not contract-to-contract calls.
  function tokensOfOwner(address _owner) external view returns(uint256[] memory ownerTokens) {
      uint256 tokenCount = balanceOf(_owner);

      if (tokenCount == 0) {
          // Return an empty array
          return new uint256[](0);
      } else {
          uint256[] memory result = new uint256[](tokenCount);
          uint256 totalTruffles = truffles.length;
          uint256 resultIndex = 0;

          // We count on the fact that all cats have IDs starting at 1 and increasing
          // sequentially up to the totalCat count.
          uint256 truffleId;

          for (truffleId = 0; truffleId < totalTruffles; truffleId++) {
              if (ownerOf(truffleId) == _owner) {
                  result[resultIndex] = truffleId;
                  resultIndex++;
              }
          }

          return result;
      }
  }
}
