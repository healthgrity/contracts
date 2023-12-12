// SPDX-License-Identifier: GPL-2.0-or-later
pragma solidity ^0.8.18;

import "@openzeppelin/contracts/token/ERC20/IERC20.sol";
import "@openzeppelin/contracts/token/ERC20/extensions/ERC20Burnable.sol";
import "@openzeppelin/contracts/utils/math/SafeMath.sol";

contract HealthgrityPricingV1 {
    address public constant HLTG_TOKEN = 0x0F62E6aA75029c2ce13F9bAE6CD659003db79c36;
    address public constant DAO_TREASURY = 0xE51345DDde84ee651121d8eee47bbd53D6ed636a;

    constructor() {}

    function splitAndBurn(uint256 hltgAmount) external {
        require(hltgAmount > 0, "Amount must be greater than 0");

        IERC20(HLTG_TOKEN).transferFrom(msg.sender, address(this), hltgAmount);

        uint256 hltgToBurn = SafeMath.div(hltgAmount, 2);
        uint256 hltgToDao = SafeMath.sub(hltgAmount, hltgToBurn);

        // Transfer of HLTG tokens to the DAO treasury
        IERC20(HLTG_TOKEN).transfer(DAO_TREASURY, uint(hltgToDao));

        // Burn half the HLTG tokens
        ERC20Burnable(HLTG_TOKEN).burn(hltgToBurn);
    }
}
