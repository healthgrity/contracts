// SPDX-License-Identifier: MIT
pragma solidity ^0.8.9;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";
import "@openzeppelin/contracts/token/ERC20/extensions/ERC20Burnable.sol";

contract Healthgrity is ERC20, ERC20Burnable {
    constructor() ERC20("Healthgrity", "HLTG") {
        _mint(msg.sender, 100000000 * 10 ** decimals());
    }
}
