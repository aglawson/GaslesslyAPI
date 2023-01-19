# Node API
This API is hosted on Google App Engine.

## Endpoints
### nft_balance
- inputs: 
  - contract_address: address of NFT contract 
  - wallet: address of wallet
- outputs_address:
  - json object containing inputs, data (int)

- example input
> https://api.link.app/nft_balance?contract_address=0x2a459947f0ac25ec28c197f09c2d88058a83f3bb&wallet_address=0xE4508bE47D201847eAb75819740900f662657FAD
- example output
> {"inputs":{"wallet":"0xE4508bE47D201847eAb75819740900f662657FAD","contract":"0x2a459947f0ac25ec28c197f09c2d88058a83f3bb"},"output":{"balance":3},"success":true}


### nft_balance
- inputs: 
  - contract_address: address of NFT contract 
  - wallet_address: address of wallet
- outputs:
  - json object containing inputs, data (float)
- example input
> https://api.link.app/token_balance?contract_address=0x414BdFc701AeF58bE8AfDB1e38884d79B810C7D9&wallet_address=0xE4508bE47D201847eAb75819740900f662657FAD
- example output
> {"inputs":{"wallet":"0xE4508bE47D201847eAb75819740900f662657FAD","contract":"0x414BdFc701AeF58bE8AfDB1e38884d79B810C7D9"},"output":{"data":2959.02477},"success":true}
