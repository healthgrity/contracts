// SPDX-License-Identifier: GPL-2.0-or-later
pragma solidity ^0.8.20;

import "@openzeppelin/contracts/token/ERC20/IERC20.sol";
import "@uniswap/v3-core/contracts/interfaces/IUniswapV3Pool.sol";
import "contracts/healthgrity-token.sol";

contract HealthgrityPricing {
    address public maticToken; // MATIC token address
    address public hltgToken; // HLTG token address
    address public uniswapPool; // Uniswap V3 Pool address
    address public daoTresury; // Healthgrity DAO tresury address

    constructor(address _maticToken, address _hltgToken, address _uniswapPool, address _daoTresury) {
        maticToken = _maticToken;
        hltgToken = _hltgToken;
        uniswapPool = _uniswapPool;
        daoTresury = _daoTresury;
    }

    function swapAndSplit(uint256 maticAmount) external {
        require(maticAmount > 0, "Amount must be greater than 0");

        // Transfer the user's MATICs to this contract
        IERC20(maticToken).transferFrom(msg.sender, address(this), maticAmount);

        // Call the swap function with the appropriate parameters
        IUniswapV3Pool pool = IUniswapV3Pool(uniswapPool);
        bool zeroForOne = true; // Swap from MATIC to HLTG (token0 to token1)
        int256 amountSpecified = int256(maticAmount); // Amount specified as exact entry
        uint160 sqrtPriceLimitX96 = 0; // No price limit
        bytes memory data; // No additional data

        // Call the swap function with the appropriate parameters
        (int256 amount0, int256 amount1) = pool.swap(
            address(this),
            zeroForOne,
            amountSpecified,
            sqrtPriceLimitX96,
            data
        );

        // Check that the swap was successful (optional check)
        require(amount0 > 0 && amount1 > 0, "Swap failed");

        // Divide the amount of HLTG received by two
        uint256 totalHltgReceived = uint256(amount1);
        uint256 htlgToBurn = totalHltgReceived / 2;
        uint256 htlgToSend = totalHltgReceived - htlgToBurn;

        // Burn half the HLTG tokens
        ERC20Burnable(hltgToken).burn(htlgToBurn);

        // Transfer of HLTG tokens to the DAO treasury
        IERC20(hltgToken).transfer(daoTresury, uint(htlgToSend));
    }
}
