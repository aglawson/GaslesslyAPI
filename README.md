# Node API
This API is hosted on Google App Engine.

## Endpoints
### nft_balance
- inputs: 
  - contract: address of NFT contract 
  - wallet: address of wallet
- outputs_address:
  - json object containing inputs, data (int)

- example input
> https://api.link.app/nft_balance?contract=0x2a459947f0ac25ec28c197f09c2d88058a83f3bb&wallet=0xE4508bE47D201847eAb75819740900f662657FAD
- example output
> {"inputs":{"wallet":"0xE4508bE47D201847eAb75819740900f662657FAD","contract":"0x2a459947f0ac25ec28c197f09c2d88058a83f3bb"},"output":{"balance":3},"success":true}


### token_balance
- inputs: 
  - contract: address of NFT contract 
  - wallet: address of wallet
- outputs:
  - json object containing inputs, data (float)
- example input
> https://api.link.app/token_balance?contract=0x414BdFc701AeF58bE8AfDB1e38884d79B810C7D9&wallet=0xE4508bE47D201847eAb75819740900f662657FAD
- example output
> {"inputs":{"wallet":"0xE4508bE47D201847eAb75819740900f662657FAD","contract":"0x414BdFc701AeF58bE8AfDB1e38884d79B810C7D9"},"output":{"data":2959.02477},"success":true}

### goerli_relay
- Description:
  - Sends a transaction to a relay contract which relays the transaction to the destination smart contract. Useful for meta transactions.
- inputs:
  - reqStruct: json object containing tx data (from, to, value, gas, nonce, data)
  - signature: hash resulting from user signing the data in reqStruct
- outputs:
  - transaction hash if successful

### get_selector
- Description:
  - Returns the selector hash for a given function and parameters. Useful for relay transactions.
- inputs:
  - string of function name and parameter types (ex. transferFrom(address,address,uint256) )
- outputs:
  - hash representing the function and parameter types
  
### get_encoded_params
 - Description: 
   - Returns the hash of the transaction parameters. Useful for relay transactions.
 - inputs:
    - array of types, comma separated (ex. uint256,address,bool )
    - array of values, comma separated (ex. 0,0xE4508bE47D201847eAb75819740900f662657FAD,false )
 - outputs:
    - hash of the input data
   
### get_relay_nonce
 - Description:
    - Returns the nonce for the tx sender from the relay contract. Ensures transactions are handled sequentially.
 - inputs:
    - wallet address of user
 - outputs:
    - nonce (int)
