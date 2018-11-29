
# Ethereum_Truffle_Ether_Transfer_DAPP

This is a TODO Coin Transfer DAPP ( Decentralized app), that would be a starter point to develop a DAPP with Smarter Contract and using web3.js to connect the web UI to the Blockchain. It helps to transfer the coin from the OWNER of the contract to any other account in the blockchain.

![](https://github.com/panbhatt/EThereum_Truffle_Ether_Transfer_DAPP/blob/master/Capture.JPG)


## Installation

1. Install Truffle globally.
    ```javascript
    npm install -g truffle
    ```

2. Clone the Repo and execute.
    ```javascript
    npm install
    ```

3. Run the development console.
    ```javascript
    truffle develop
    ```

4. Compile and migrate the smart contracts. Note inside the development console we don't preface commands with `truffle`.
    ```javascript
    compile
    migrate
    ```

5. Run the webpack server for front-end hot reloading (outside the development console). Smart contract changes must be manually recompiled and migrated.
    ```javascript
    // Serves the front-end on http://localhost:8080
    npm run dev
	```    	
   **Please note all the address being print on the screen. The first one is the owner through which the contract is being deployed.**  
 
6. Truffle can run tests written in Solidity or JavaScript against your smart contracts. Note the command varies slightly if you're in or outside of the development console.
  ```javascript
  // If inside the development console.
  test

  // If outside the development console..
  truffle test
  ```

## Components Used.

* __Truffle__
* __Solidity__
* __Web3js__
* __GANACHE__
 
 



