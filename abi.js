export const nft_abi = [{"inputs":[],"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":true,"internalType":"address","name":"approved","type":"address"},{"indexed":true,"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"Approval","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":true,"internalType":"address","name":"operator","type":"address"},{"indexed":false,"internalType":"bool","name":"approved","type":"bool"}],"name":"ApprovalForAll","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"previousOwner","type":"address"},{"indexed":true,"internalType":"address","name":"newOwner","type":"address"}],"name":"OwnershipTransferred","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"from","type":"address"},{"indexed":true,"internalType":"address","name":"to","type":"address"},{"indexed":true,"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"Transfer","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"from","type":"address"},{"indexed":false,"internalType":"address","name":"to","type":"address"},{"indexed":false,"internalType":"uint256","name":"id","type":"uint256"}],"name":"burned","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"uint256","name":"max","type":"uint256"}],"name":"maxPerTXChanged","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"uint256","name":"max","type":"uint256"}],"name":"maxPerWalletChanged","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"minter","type":"address"},{"indexed":false,"internalType":"uint256","name":"amount","type":"uint256"}],"name":"minted","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"uint256","name":"state","type":"uint256"}],"name":"saleStateChanged","type":"event"},{"inputs":[{"internalType":"address","name":"_adm","type":"address"}],"name":"addAdmin","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_recipient","type":"address"},{"internalType":"uint256","name":"_amount","type":"uint256"}],"name":"adminMint","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"adminMints","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"approve","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"owner","type":"address"}],"name":"balanceOf","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"burn","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"getApproved","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"_recipient","type":"address"},{"internalType":"bytes32[]","name":"_merkleProof","type":"bytes32[]"}],"name":"isAllowListed","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"owner","type":"address"},{"internalType":"address","name":"operator","type":"address"}],"name":"isApprovedForAll","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"maxPerTX","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"maxPerWallet","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"maxSupply","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"merkleRoot","outputs":[{"internalType":"bytes32","name":"","type":"bytes32"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"_amount","type":"uint256"},{"internalType":"bytes32[]","name":"_merkleProof","type":"bytes32[]"}],"name":"mint","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"name","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"nextOwnerToExplicitlySet","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"numOfMints","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"owner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"_recipient","type":"address"},{"internalType":"uint256","name":"_amount","type":"uint256"}],"name":"ownerMint","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"ownerOf","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"renounceOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_adm","type":"address"}],"name":"revokeAdmin","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"safeTransferFrom","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"},{"internalType":"bytes","name":"_data","type":"bytes"}],"name":"safeTransferFrom","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"operator","type":"address"},{"internalType":"bool","name":"approved","type":"bool"}],"name":"setApprovalForAll","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_maxPerTX","type":"uint256"}],"name":"setMaxPerTX","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_maxPerWallet","type":"uint256"}],"name":"setMaxPerWallet","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"bytes32","name":"root","type":"bytes32"}],"name":"setRoot","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_state","type":"uint256"}],"name":"setState","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"string","name":"_URI","type":"string"}],"name":"setURI","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"state","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"bytes4","name":"interfaceId","type":"bytes4"}],"name":"supportsInterface","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"symbol","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"index","type":"uint256"}],"name":"tokenByIndex","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"owner","type":"address"},{"internalType":"uint256","name":"index","type":"uint256"}],"name":"tokenOfOwnerByIndex","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"tokenURI","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"totalSupply","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"transferFrom","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"withdraw","outputs":[],"stateMutability":"nonpayable","type":"function"}];
export const token_abi = [{"constant":true,"inputs":[],"name":"name","outputs":[{"name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"spender","type":"address"},{"name":"value","type":"uint256"}],"name":"approve","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"totalSupply","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"sender","type":"address"},{"name":"recipient","type":"address"},{"name":"amount","type":"uint256"}],"name":"transferFrom","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"decimals","outputs":[{"name":"","type":"uint8"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"spender","type":"address"},{"name":"addedValue","type":"uint256"}],"name":"increaseAllowance","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"value","type":"uint256"}],"name":"burn","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"name":"account","type":"address"}],"name":"balanceOf","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"symbol","outputs":[{"name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"spender","type":"address"},{"name":"subtractedValue","type":"uint256"}],"name":"decreaseAllowance","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"recipient","type":"address"},{"name":"amount","type":"uint256"}],"name":"transfer","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"name":"owner","type":"address"},{"name":"spender","type":"address"}],"name":"allowance","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"inputs":[{"name":"name","type":"string"},{"name":"symbol","type":"string"},{"name":"decimals","type":"uint8"},{"name":"totalSupply","type":"uint256"},{"name":"feeReceiver","type":"address"},{"name":"tokenOwnerAddress","type":"address"}],"payable":true,"stateMutability":"payable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"name":"from","type":"address"},{"indexed":true,"name":"to","type":"address"},{"indexed":false,"name":"value","type":"uint256"}],"name":"Transfer","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"owner","type":"address"},{"indexed":true,"name":"spender","type":"address"},{"indexed":false,"name":"value","type":"uint256"}],"name":"Approval","type":"event"}]
export const selector_abi = [{"inputs":[{"internalType":"string","name":"_func","type":"string"}],"name":"getSelector","outputs":[{"internalType":"bytes4","name":"","type":"bytes4"}],"stateMutability":"pure","type":"function"}]
export const relayer_abi = [
    {
      "inputs": [],
      "stateMutability": "nonpayable",
      "type": "constructor"
    },
    {
      "inputs": [],
      "name": "_TYPEHASH",
      "outputs": [
        {
          "internalType": "bytes32",
          "name": "",
          "type": "bytes32"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "components": [
            {
              "internalType": "address",
              "name": "from",
              "type": "address"
            },
            {
              "internalType": "address",
              "name": "to",
              "type": "address"
            },
            {
              "internalType": "uint256",
              "name": "value",
              "type": "uint256"
            },
            {
              "internalType": "uint256",
              "name": "gas",
              "type": "uint256"
            },
            {
              "internalType": "uint256",
              "name": "nonce",
              "type": "uint256"
            },
            {
              "internalType": "bytes",
              "name": "data",
              "type": "bytes"
            }
          ],
          "internalType": "struct MinimalForwarder.ForwardRequest",
          "name": "req",
          "type": "tuple"
        },
        {
          "internalType": "bytes",
          "name": "signature",
          "type": "bytes"
        }
      ],
      "name": "execute",
      "outputs": [
        {
          "internalType": "bool",
          "name": "",
          "type": "bool"
        },
        {
          "internalType": "bytes",
          "name": "",
          "type": "bytes"
        }
      ],
      "stateMutability": "payable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "from",
          "type": "address"
        }
      ],
      "name": "getNonce",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "from",
          "type": "address"
        },
        {
          "internalType": "bytes",
          "name": "_signature",
          "type": "bytes"
        }
      ],
      "name": "isMessageValid",
      "outputs": [
        {
          "internalType": "address",
          "name": "",
          "type": "address"
        },
        {
          "internalType": "bool",
          "name": "",
          "type": "bool"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "components": [
            {
              "internalType": "address",
              "name": "from",
              "type": "address"
            },
            {
              "internalType": "address",
              "name": "to",
              "type": "address"
            },
            {
              "internalType": "uint256",
              "name": "value",
              "type": "uint256"
            },
            {
              "internalType": "uint256",
              "name": "gas",
              "type": "uint256"
            },
            {
              "internalType": "uint256",
              "name": "nonce",
              "type": "uint256"
            },
            {
              "internalType": "bytes",
              "name": "data",
              "type": "bytes"
            }
          ],
          "internalType": "struct MinimalForwarder.ForwardRequest",
          "name": "req",
          "type": "tuple"
        },
        {
          "internalType": "bytes",
          "name": "signature",
          "type": "bytes"
        }
      ],
      "name": "verify",
      "outputs": [
        {
          "internalType": "bool",
          "name": "",
          "type": "bool"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "stateMutability": "payable",
      "type": "receive"
    }
  ];

export const deploy_nft_abi = [
  {
    "inputs": [
      {
        "internalType": "string",
        "name": "_name",
        "type": "string"
      },
      {
        "internalType": "string",
        "name": "_symbol",
        "type": "string"
      },
      {
        "internalType": "uint256",
        "name": "_maxSupply",
        "type": "uint256"
      },
      {
        "internalType": "uint256",
        "name": "_price",
        "type": "uint256"
      },
      {
        "internalType": "uint256",
        "name": "_alPrice",
        "type": "uint256"
      },
      {
        "internalType": "string",
        "name": "_uri",
        "type": "string"
      }
    ],
    "stateMutability": "nonpayable",
    "type": "constructor"
  },
  {
    "inputs": [],
    "name": "ApprovalCallerNotOwnerNorApproved",
    "type": "error"
  },
  {
    "inputs": [],
    "name": "ApprovalQueryForNonexistentToken",
    "type": "error"
  },
  {
    "inputs": [],
    "name": "BalanceQueryForZeroAddress",
    "type": "error"
  },
  {
    "inputs": [],
    "name": "MintERC2309QuantityExceedsLimit",
    "type": "error"
  },
  {
    "inputs": [],
    "name": "MintToZeroAddress",
    "type": "error"
  },
  {
    "inputs": [],
    "name": "MintZeroQuantity",
    "type": "error"
  },
  {
    "inputs": [],
    "name": "OwnerQueryForNonexistentToken",
    "type": "error"
  },
  {
    "inputs": [],
    "name": "OwnershipNotInitializedForExtraData",
    "type": "error"
  },
  {
    "inputs": [],
    "name": "TransferCallerNotOwnerNorApproved",
    "type": "error"
  },
  {
    "inputs": [],
    "name": "TransferFromIncorrectOwner",
    "type": "error"
  },
  {
    "inputs": [],
    "name": "TransferToNonERC721ReceiverImplementer",
    "type": "error"
  },
  {
    "inputs": [],
    "name": "TransferToZeroAddress",
    "type": "error"
  },
  {
    "inputs": [],
    "name": "URIQueryForNonexistentToken",
    "type": "error"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": true,
        "internalType": "address",
        "name": "owner",
        "type": "address"
      },
      {
        "indexed": true,
        "internalType": "address",
        "name": "approved",
        "type": "address"
      },
      {
        "indexed": true,
        "internalType": "uint256",
        "name": "tokenId",
        "type": "uint256"
      }
    ],
    "name": "Approval",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": true,
        "internalType": "address",
        "name": "owner",
        "type": "address"
      },
      {
        "indexed": true,
        "internalType": "address",
        "name": "operator",
        "type": "address"
      },
      {
        "indexed": false,
        "internalType": "bool",
        "name": "approved",
        "type": "bool"
      }
    ],
    "name": "ApprovalForAll",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": true,
        "internalType": "uint256",
        "name": "fromTokenId",
        "type": "uint256"
      },
      {
        "indexed": false,
        "internalType": "uint256",
        "name": "toTokenId",
        "type": "uint256"
      },
      {
        "indexed": true,
        "internalType": "address",
        "name": "from",
        "type": "address"
      },
      {
        "indexed": true,
        "internalType": "address",
        "name": "to",
        "type": "address"
      }
    ],
    "name": "ConsecutiveTransfer",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": true,
        "internalType": "address",
        "name": "previousOwner",
        "type": "address"
      },
      {
        "indexed": true,
        "internalType": "address",
        "name": "newOwner",
        "type": "address"
      }
    ],
    "name": "OwnershipTransferred",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": true,
        "internalType": "address",
        "name": "from",
        "type": "address"
      },
      {
        "indexed": true,
        "internalType": "address",
        "name": "to",
        "type": "address"
      },
      {
        "indexed": true,
        "internalType": "uint256",
        "name": "tokenId",
        "type": "uint256"
      }
    ],
    "name": "Transfer",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "address",
        "name": "minter",
        "type": "address"
      },
      {
        "indexed": false,
        "internalType": "uint256",
        "name": "price",
        "type": "uint256"
      },
      {
        "indexed": false,
        "internalType": "address",
        "name": "recipient",
        "type": "address"
      },
      {
        "indexed": false,
        "internalType": "uint256",
        "name": "amount",
        "type": "uint256"
      }
    ],
    "name": "minted",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "uint256",
        "name": "_state",
        "type": "uint256"
      }
    ],
    "name": "stateChanged",
    "type": "event"
  },
  {
    "inputs": [],
    "name": "URI",
    "outputs": [
      {
        "internalType": "string",
        "name": "",
        "type": "string"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "alPrice",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "alRoot",
    "outputs": [
      {
        "internalType": "bytes32",
        "name": "",
        "type": "bytes32"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "to",
        "type": "address"
      },
      {
        "internalType": "uint256",
        "name": "tokenId",
        "type": "uint256"
      }
    ],
    "name": "approve",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "owner",
        "type": "address"
      }
    ],
    "name": "balanceOf",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "tokenId",
        "type": "uint256"
      }
    ],
    "name": "getApproved",
    "outputs": [
      {
        "internalType": "address",
        "name": "",
        "type": "address"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "",
        "type": "address"
      }
    ],
    "name": "isAdmin",
    "outputs": [
      {
        "internalType": "bool",
        "name": "",
        "type": "bool"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "_recipient",
        "type": "address"
      },
      {
        "internalType": "bytes32[]",
        "name": "_merkleProof",
        "type": "bytes32[]"
      }
    ],
    "name": "isAllowListed",
    "outputs": [
      {
        "internalType": "bool",
        "name": "",
        "type": "bool"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "owner",
        "type": "address"
      },
      {
        "internalType": "address",
        "name": "operator",
        "type": "address"
      }
    ],
    "name": "isApprovedForAll",
    "outputs": [
      {
        "internalType": "bool",
        "name": "",
        "type": "bool"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "maxSupply",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "amount",
        "type": "uint256"
      },
      {
        "internalType": "bytes32[]",
        "name": "_merkleProof",
        "type": "bytes32[]"
      }
    ],
    "name": "mint",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "name",
    "outputs": [
      {
        "internalType": "string",
        "name": "",
        "type": "string"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "owner",
    "outputs": [
      {
        "internalType": "address",
        "name": "",
        "type": "address"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "amount",
        "type": "uint256"
      },
      {
        "internalType": "address",
        "name": "_recipient",
        "type": "address"
      }
    ],
    "name": "ownerMint",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "tokenId",
        "type": "uint256"
      }
    ],
    "name": "ownerOf",
    "outputs": [
      {
        "internalType": "address",
        "name": "",
        "type": "address"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "price",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "renounceOwnership",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "from",
        "type": "address"
      },
      {
        "internalType": "address",
        "name": "to",
        "type": "address"
      },
      {
        "internalType": "uint256",
        "name": "tokenId",
        "type": "uint256"
      }
    ],
    "name": "safeTransferFrom",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "from",
        "type": "address"
      },
      {
        "internalType": "address",
        "name": "to",
        "type": "address"
      },
      {
        "internalType": "uint256",
        "name": "tokenId",
        "type": "uint256"
      },
      {
        "internalType": "bytes",
        "name": "_data",
        "type": "bytes"
      }
    ],
    "name": "safeTransferFrom",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "_alPrice",
        "type": "uint256"
      }
    ],
    "name": "setALPrice",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "bytes32",
        "name": "root",
        "type": "bytes32"
      }
    ],
    "name": "setALRoot",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "_admin",
        "type": "address"
      },
      {
        "internalType": "bool",
        "name": "_isAdmin",
        "type": "bool"
      }
    ],
    "name": "setAdmin",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "operator",
        "type": "address"
      },
      {
        "internalType": "bool",
        "name": "approved",
        "type": "bool"
      }
    ],
    "name": "setApprovalForAll",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "_price",
        "type": "uint256"
      }
    ],
    "name": "setPrice",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "_state",
        "type": "uint256"
      }
    ],
    "name": "setState",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "string",
        "name": "_uri",
        "type": "string"
      }
    ],
    "name": "setURI",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "state",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "bytes4",
        "name": "interfaceId",
        "type": "bytes4"
      }
    ],
    "name": "supportsInterface",
    "outputs": [
      {
        "internalType": "bool",
        "name": "",
        "type": "bool"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "symbol",
    "outputs": [
      {
        "internalType": "string",
        "name": "",
        "type": "string"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "tokenId",
        "type": "uint256"
      }
    ],
    "name": "tokenURI",
    "outputs": [
      {
        "internalType": "string",
        "name": "",
        "type": "string"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "totalSupply",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "from",
        "type": "address"
      },
      {
        "internalType": "address",
        "name": "to",
        "type": "address"
      },
      {
        "internalType": "uint256",
        "name": "tokenId",
        "type": "uint256"
      }
    ],
    "name": "transferFrom",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "newOwner",
        "type": "address"
      }
    ],
    "name": "transferOwnership",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "amount",
        "type": "uint256"
      },
      {
        "internalType": "address payable",
        "name": "recipient",
        "type": "address"
      }
    ],
    "name": "withdraw",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  }
]

export const nft_bytecode = "0x60806040523480156200001157600080fd5b5060405162004308380380620043088339818101604052810190620000379190620003d8565b858581600290816200004a919062000712565b5080600390816200005c919062000712565b506200006d6200013760201b60201c565b600081905550505062000095620000896200013c60201b60201c565b6200014460201b60201c565b6001600a8190555083600b8190555082600e8190555081600f819055508060089081620000c3919062000712565b506001600c6000620000da6200013c60201b60201c565b73ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060006101000a81548160ff021916908315150217905550505050505050620007f9565b600090565b600033905090565b6000600960009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16905081600960006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055508173ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff167f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e060405160405180910390a35050565b6000604051905090565b600080fd5b600080fd5b600080fd5b600080fd5b6000601f19601f8301169050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b620002738262000228565b810181811067ffffffffffffffff8211171562000295576200029462000239565b5b80604052505050565b6000620002aa6200020a565b9050620002b8828262000268565b919050565b600067ffffffffffffffff821115620002db57620002da62000239565b5b620002e68262000228565b9050602081019050919050565b60005b8381101562000313578082015181840152602081019050620002f6565b60008484015250505050565b6000620003366200033084620002bd565b6200029e565b90508281526020810184848401111562000355576200035462000223565b5b62000362848285620002f3565b509392505050565b600082601f8301126200038257620003816200021e565b5b8151620003948482602086016200031f565b91505092915050565b6000819050919050565b620003b2816200039d565b8114620003be57600080fd5b50565b600081519050620003d281620003a7565b92915050565b60008060008060008060c08789031215620003f857620003f762000214565b5b600087015167ffffffffffffffff81111562000419576200041862000219565b5b6200042789828a016200036a565b965050602087015167ffffffffffffffff8111156200044b576200044a62000219565b5b6200045989828a016200036a565b95505060406200046c89828a01620003c1565b94505060606200047f89828a01620003c1565b93505060806200049289828a01620003c1565b92505060a087015167ffffffffffffffff811115620004b657620004b562000219565b5b620004c489828a016200036a565b9150509295509295509295565b600081519050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b600060028204905060018216806200052457607f821691505b6020821081036200053a5762000539620004dc565b5b50919050565b60008190508160005260206000209050919050565b60006020601f8301049050919050565b600082821b905092915050565b600060088302620005a47fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff8262000565565b620005b0868362000565565b95508019841693508086168417925050509392505050565b6000819050919050565b6000620005f3620005ed620005e7846200039d565b620005c8565b6200039d565b9050919050565b6000819050919050565b6200060f83620005d2565b620006276200061e82620005fa565b84845462000572565b825550505050565b600090565b6200063e6200062f565b6200064b81848462000604565b505050565b5b8181101562000673576200066760008262000634565b60018101905062000651565b5050565b601f821115620006c2576200068c8162000540565b620006978462000555565b81016020851015620006a7578190505b620006bf620006b68562000555565b83018262000650565b50505b505050565b600082821c905092915050565b6000620006e760001984600802620006c7565b1980831691505092915050565b6000620007028383620006d4565b9150826002028217905092915050565b6200071d82620004d1565b67ffffffffffffffff81111562000739576200073862000239565b5b6200074582546200050b565b6200075282828562000677565b600060209050601f8311600181146200078a576000841562000775578287015190505b620007818582620006f4565b865550620007f1565b601f1984166200079a8662000540565b60005b82811015620007c4578489015182556001820191506020850194506020810190506200079d565b86831015620007e45784890151620007e0601f891682620006d4565b8355505b6001600288020188555050505b505050505050565b613aff80620008096000396000f3fe6080604052600436106101f85760003560e01c8063715018a61161010d578063b88d4fde116100a0578063c87b56dd1161006f578063c87b56dd146106d9578063d52c57e014610716578063d5abeb011461073f578063e985e9c51461076a578063f2fde38b146107a7576101f8565b8063b88d4fde1461064d578063ba41b0c614610669578063c19d93fb14610685578063c2218fdd146106b0576101f8565b806395d89b41116100dc57806395d89b41146105a5578063a035b1fe146105d0578063a22cb465146105fb578063a9e966b714610624576101f8565b8063715018a61461050f5780638da5cb5b1461052657806391b7f5ed1461055157806394a81c701461057a576101f8565b806318160ddd1161019057806342842e0e1161015f57806342842e0e146104135780634b0bddd21461042f5780636352211e14610458578063677621691461049557806370a08231146104d2576101f8565b806318160ddd146103645780631b8926a91461038f57806323b872dd146103ba57806324d7806c146103d6576101f8565b8063081812fc116101cc578063081812fc146102b7578063095ea7b3146102f45780630e03ebe9146103105780631141d7de14610339576101f8565b8062f714ce146101fd57806301ffc9a71461022657806302fe53051461026357806306fdde031461028c575b600080fd5b34801561020957600080fd5b50610224600480360381019061021f919061267b565b6107d0565b005b34801561023257600080fd5b5061024d60048036038101906102489190612713565b610889565b60405161025a919061275b565b60405180910390f35b34801561026f57600080fd5b5061028a600480360381019061028591906128bc565b61091b565b005b34801561029857600080fd5b506102a1610a05565b6040516102ae9190612984565b60405180910390f35b3480156102c357600080fd5b506102de60048036038101906102d991906129a6565b610a97565b6040516102eb91906129f4565b60405180910390f35b61030e60048036038101906103099190612a3b565b610b16565b005b34801561031c57600080fd5b50610337600480360381019061033291906129a6565b610c5a565b005b34801561034557600080fd5b5061034e610d3b565b60405161035b9190612984565b60405180910390f35b34801561037057600080fd5b50610379610dc9565b6040516103869190612a8a565b60405180910390f35b34801561039b57600080fd5b506103a4610de0565b6040516103b19190612a8a565b60405180910390f35b6103d460048036038101906103cf9190612aa5565b610de6565b005b3480156103e257600080fd5b506103fd60048036038101906103f89190612af8565b611108565b60405161040a919061275b565b60405180910390f35b61042d60048036038101906104289190612aa5565b611128565b005b34801561043b57600080fd5b5061045660048036038101906104519190612b51565b611148565b005b34801561046457600080fd5b5061047f600480360381019061047a91906129a6565b6111ab565b60405161048c91906129f4565b60405180910390f35b3480156104a157600080fd5b506104bc60048036038101906104b79190612bf1565b6111bd565b6040516104c9919061275b565b60405180910390f35b3480156104de57600080fd5b506104f960048036038101906104f49190612af8565b611247565b6040516105069190612a8a565b60405180910390f35b34801561051b57600080fd5b506105246112ff565b005b34801561053257600080fd5b5061053b611313565b60405161054891906129f4565b60405180910390f35b34801561055d57600080fd5b50610578600480360381019061057391906129a6565b61133d565b005b34801561058657600080fd5b5061058f61141e565b60405161059c9190612c6a565b60405180910390f35b3480156105b157600080fd5b506105ba611424565b6040516105c79190612984565b60405180910390f35b3480156105dc57600080fd5b506105e56114b6565b6040516105f29190612a8a565b60405180910390f35b34801561060757600080fd5b50610622600480360381019061061d9190612b51565b6114bc565b005b34801561063057600080fd5b5061064b600480360381019061064691906129a6565b6115c7565b005b61066760048036038101906106629190612d26565b611725565b005b610683600480360381019061067e9190612da9565b611798565b005b34801561069157600080fd5b5061069a6119cd565b6040516106a79190612a8a565b60405180910390f35b3480156106bc57600080fd5b506106d760048036038101906106d29190612e35565b6119d3565b005b3480156106e557600080fd5b5061070060048036038101906106fb91906129a6565b611ab4565b60405161070d9190612984565b60405180910390f35b34801561072257600080fd5b5061073d60048036038101906107389190612e62565b611b52565b005b34801561074b57600080fd5b50610754611c04565b6040516107619190612a8a565b60405180910390f35b34801561077657600080fd5b50610791600480360381019061078c9190612ea2565b611c0a565b60405161079e919061275b565b60405180910390f35b3480156107b357600080fd5b506107ce60048036038101906107c99190612af8565b611c9e565b005b6107d8611d21565b60008173ffffffffffffffffffffffffffffffffffffffff16836040516107fe90612f13565b60006040518083038185875af1925050503d806000811461083b576040519150601f19603f3d011682016040523d82523d6000602084013e610840565b606091505b5050905080610884576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161087b90612f74565b60405180910390fd5b505050565b60006301ffc9a760e01b827bffffffffffffffffffffffffffffffffffffffffffffffffffffffff191614806108e457506380ac58cd60e01b827bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916145b806109145750635b5e139f60e01b827bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916145b9050919050565b600c6000610927611d9f565b73ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060009054906101000a900460ff16806109b3575061097d611313565b73ffffffffffffffffffffffffffffffffffffffff1661099b611d9f565b73ffffffffffffffffffffffffffffffffffffffff16145b6109f2576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016109e990613006565b60405180910390fd5b8060089081610a019190613232565b5050565b606060028054610a1490613055565b80601f0160208091040260200160405190810160405280929190818152602001828054610a4090613055565b8015610a8d5780601f10610a6257610100808354040283529160200191610a8d565b820191906000526020600020905b815481529060010190602001808311610a7057829003601f168201915b5050505050905090565b6000610aa282611da7565b610ad8576040517fcf4700e400000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6006600083815260200190815260200160002060000160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff169050919050565b6000610b21826111ab565b90508073ffffffffffffffffffffffffffffffffffffffff16610b42611e06565b73ffffffffffffffffffffffffffffffffffffffff1614610ba557610b6e81610b69611e06565b611c0a565b610ba4576040517fcfb3b94200000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b5b826006600084815260200190815260200160002060000160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550818373ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff167f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b92560405160405180910390a4505050565b600c6000610c66611d9f565b73ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060009054906101000a900460ff1680610cf25750610cbc611313565b73ffffffffffffffffffffffffffffffffffffffff16610cda611d9f565b73ffffffffffffffffffffffffffffffffffffffff16145b610d31576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610d2890613006565b60405180910390fd5b80600f8190555050565b60088054610d4890613055565b80601f0160208091040260200160405190810160405280929190818152602001828054610d7490613055565b8015610dc15780601f10610d9657610100808354040283529160200191610dc1565b820191906000526020600020905b815481529060010190602001808311610da457829003601f168201915b505050505081565b6000610dd3611e0e565b6001546000540303905090565b600f5481565b6000610df182611e13565b90508373ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff1614610e58576040517fa114810000000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b600080610e6484611edf565b91509150610e7a8187610e75611e06565b611f06565b610ec657610e8f86610e8a611e06565b611c0a565b610ec5576040517f59c896be00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b5b600073ffffffffffffffffffffffffffffffffffffffff168573ffffffffffffffffffffffffffffffffffffffff1603610f2c576040517fea553b3400000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b610f398686866001611f4a565b8015610f4457600082555b600560008773ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600081546001900391905081905550600560008673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600081546001019190508190555061101285610fee888887611f50565b7c020000000000000000000000000000000000000000000000000000000017611f78565b600460008681526020019081526020016000208190555060007c02000000000000000000000000000000000000000000000000000000008416036110985760006001850190506000600460008381526020019081526020016000205403611096576000548114611095578360046000838152602001908152602001600020819055505b5b505b838573ffffffffffffffffffffffffffffffffffffffff168773ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef60405160405180910390a46111008686866001611fa3565b505050505050565b600c6020528060005260406000206000915054906101000a900460ff1681565b61114383838360405180602001604052806000815250611725565b505050565b611150611d21565b80600c60008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060006101000a81548160ff0219169083151502179055505050565b60006111b682611e13565b9050919050565b600080846040516020016111d1919061334c565b6040516020818303038152906040528051906020012090506000611239858580806020026020016040519081016040528093929190818152602001838360200280828437600081840152601f19601f82011690508083019250505050505050600d5484611fa9565b905080925050509392505050565b60008073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff16036112ae576040517f8f4eb60400000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b67ffffffffffffffff600560008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002054169050919050565b611307611d21565b6113116000611fc0565b565b6000600960009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16905090565b600c6000611349611d9f565b73ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060009054906101000a900460ff16806113d5575061139f611313565b73ffffffffffffffffffffffffffffffffffffffff166113bd611d9f565b73ffffffffffffffffffffffffffffffffffffffff16145b611414576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161140b90613006565b60405180910390fd5b80600e8190555050565b600d5481565b60606003805461143390613055565b80601f016020809104026020016040519081016040528092919081815260200182805461145f90613055565b80156114ac5780601f10611481576101008083540402835291602001916114ac565b820191906000526020600020905b81548152906001019060200180831161148f57829003601f168201915b5050505050905090565b600e5481565b80600760006114c9611e06565b73ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060006101000a81548160ff0219169083151502179055508173ffffffffffffffffffffffffffffffffffffffff16611576611e06565b73ffffffffffffffffffffffffffffffffffffffff167f17307eab39ab6107e8899845ad3d59bd9653f200f220920489ca2b5937696c31836040516115bb919061275b565b60405180910390a35050565b600c60006115d3611d9f565b73ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060009054906101000a900460ff168061165f5750611629611313565b73ffffffffffffffffffffffffffffffffffffffff16611647611d9f565b73ffffffffffffffffffffffffffffffffffffffff16145b61169e576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161169590613006565b60405180910390fd5b60028111156116e2576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016116d9906133d9565b60405180910390fd5b806010819055507f8fd8f487a1d703cca2ded1250c8e7c8c1ae6f0b6cdc81883a282e0863a6d728360105460405161171a9190612a8a565b60405180910390a150565b611730848484610de6565b60008373ffffffffffffffffffffffffffffffffffffffff163b146117925761175b84848484612086565b611791576040517fd1a57ed600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b5b50505050565b6002600a54036117dd576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016117d490613445565b60405180910390fd5b6002600a8190555060006010541161182a576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401611821906134b1565b60405180910390fd5b600b5483611836610dc9565b6118409190613500565b1115611881576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161187890613580565b60405180910390fd5b6000600e5490506001601054036118ed576118a461189d611d9f565b84846111bd565b6118e3576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016118da906135ec565b60405180910390fd5b600f549050611916565b60026010540361191557611909611902611d9f565b84846111bd565b1561191457600f5490505b5b5b8381611922919061360c565b3414611963576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161195a906136c0565b60405180910390fd5b61197461196e611d9f565b856121d6565b7f58303c2ecff4b8a524f2f8ca478d8683b492b3419026f7199667453c2f15412a61199d611d9f565b346119a6611d9f565b876040516119b794939291906136e0565b60405180910390a1506001600a81905550505050565b60105481565b600c60006119df611d9f565b73ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060009054906101000a900460ff1680611a6b5750611a35611313565b73ffffffffffffffffffffffffffffffffffffffff16611a53611d9f565b73ffffffffffffffffffffffffffffffffffffffff16145b611aaa576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401611aa190613006565b60405180910390fd5b80600d8190555050565b6060611abf82611da7565b611af5576040517fa14c4b5000000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6000611aff6121f4565b90506000815103611b1f5760405180602001604052806000815250611b4a565b80611b2984612286565b604051602001611b3a929190613761565b6040516020818303038152906040525b915050919050565b611b5a611d21565b600b5482611b66610dc9565b611b709190613500565b1115611bb1576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401611ba8906137d1565b60405180910390fd5b611bbb81836121d6565b7f58303c2ecff4b8a524f2f8ca478d8683b492b3419026f7199667453c2f15412a611be4611d9f565b60008385604051611bf8949392919061382c565b60405180910390a15050565b600b5481565b6000600760008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060009054906101000a900460ff16905092915050565b611ca6611d21565b600073ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff1603611d15576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401611d0c906138e3565b60405180910390fd5b611d1e81611fc0565b50565b611d29611d9f565b73ffffffffffffffffffffffffffffffffffffffff16611d47611313565b73ffffffffffffffffffffffffffffffffffffffff1614611d9d576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401611d949061394f565b60405180910390fd5b565b600033905090565b600081611db2611e0e565b11158015611dc1575060005482105b8015611dff575060007c0100000000000000000000000000000000000000000000000000000000600460008581526020019081526020016000205416145b9050919050565b600033905090565b600090565b60008082905080611e22611e0e565b11611ea857600054811015611ea75760006004600083815260200190815260200160002054905060007c0100000000000000000000000000000000000000000000000000000000821603611ea5575b60008103611e9b576004600083600190039350838152602001908152602001600020549050611e71565b8092505050611eda565b505b5b6040517fdf2d9b4200000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b919050565b60008060006006600085815260200190815260200160002090508092508254915050915091565b600073ffffffffffffffffffffffffffffffffffffffff8316925073ffffffffffffffffffffffffffffffffffffffff821691508382148383141790509392505050565b50505050565b60008060e883901c905060e8611f678686846122d6565b62ffffff16901b9150509392505050565b600073ffffffffffffffffffffffffffffffffffffffff83169250814260a01b178317905092915050565b50505050565b600082611fb685846122df565b1490509392505050565b6000600960009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16905081600960006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055508173ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff167f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e060405160405180910390a35050565b60008373ffffffffffffffffffffffffffffffffffffffff1663150b7a026120ac611e06565b8786866040518563ffffffff1660e01b81526004016120ce94939291906139c4565b6020604051808303816000875af192505050801561210a57506040513d601f19601f820116820180604052508101906121079190613a25565b60015b612183573d806000811461213a576040519150601f19603f3d011682016040523d82523d6000602084013e61213f565b606091505b50600081510361217b576040517fd1a57ed600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b805181602001fd5b63150b7a0260e01b7bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916817bffffffffffffffffffffffffffffffffffffffffffffffffffffffff191614915050949350505050565b6121f0828260405180602001604052806000815250612354565b5050565b60606008805461220390613055565b80601f016020809104026020016040519081016040528092919081815260200182805461222f90613055565b801561227c5780601f106122515761010080835404028352916020019161227c565b820191906000526020600020905b81548152906001019060200180831161225f57829003601f168201915b5050505050905090565b606060a060405101806040526020810391506000825281835b6001156122c157600184039350600a81066030018453600a810490508061229f575b50828103602084039350808452505050919050565b60009392505050565b60008082905060005b845181101561234957600085828151811061230657612305613a52565b5b602002602001015190508083116123285761232183826123f1565b9250612335565b61233281846123f1565b92505b50808061234190613a81565b9150506122e8565b508091505092915050565b61235e8383612408565b60008373ffffffffffffffffffffffffffffffffffffffff163b146123ec57600080549050600083820390505b61239e6000868380600101945086612086565b6123d4576040517fd1a57ed600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b81811061238b5781600054146123e957600080fd5b50505b505050565b600082600052816020526040600020905092915050565b60008054905060008203612448576040517fb562e8dd00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6124556000848385611f4a565b600160406001901b178202600560008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600082825401925050819055506124cc836124bd6000866000611f50565b6124c6856125c3565b17611f78565b6004600083815260200190815260200160002081905550600080838301905073ffffffffffffffffffffffffffffffffffffffff85169150828260007fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef600080a4600183015b81811461256d57808360007fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef600080a4600181019050612532565b50600082036125a8576040517f2e07630000000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b8060008190555050506125be6000848385611fa3565b505050565b60006001821460e11b9050919050565b6000604051905090565b600080fd5b600080fd5b6000819050919050565b6125fa816125e7565b811461260557600080fd5b50565b600081359050612617816125f1565b92915050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b60006126488261261d565b9050919050565b6126588161263d565b811461266357600080fd5b50565b6000813590506126758161264f565b92915050565b60008060408385031215612692576126916125dd565b5b60006126a085828601612608565b92505060206126b185828601612666565b9150509250929050565b60007fffffffff0000000000000000000000000000000000000000000000000000000082169050919050565b6126f0816126bb565b81146126fb57600080fd5b50565b60008135905061270d816126e7565b92915050565b600060208284031215612729576127286125dd565b5b6000612737848285016126fe565b91505092915050565b60008115159050919050565b61275581612740565b82525050565b6000602082019050612770600083018461274c565b92915050565b600080fd5b600080fd5b6000601f19601f8301169050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b6127c982612780565b810181811067ffffffffffffffff821117156127e8576127e7612791565b5b80604052505050565b60006127fb6125d3565b905061280782826127c0565b919050565b600067ffffffffffffffff82111561282757612826612791565b5b61283082612780565b9050602081019050919050565b82818337600083830152505050565b600061285f61285a8461280c565b6127f1565b90508281526020810184848401111561287b5761287a61277b565b5b61288684828561283d565b509392505050565b600082601f8301126128a3576128a2612776565b5b81356128b384826020860161284c565b91505092915050565b6000602082840312156128d2576128d16125dd565b5b600082013567ffffffffffffffff8111156128f0576128ef6125e2565b5b6128fc8482850161288e565b91505092915050565b600081519050919050565b600082825260208201905092915050565b60005b8381101561293f578082015181840152602081019050612924565b60008484015250505050565b600061295682612905565b6129608185612910565b9350612970818560208601612921565b61297981612780565b840191505092915050565b6000602082019050818103600083015261299e818461294b565b905092915050565b6000602082840312156129bc576129bb6125dd565b5b60006129ca84828501612608565b91505092915050565b60006129de8261261d565b9050919050565b6129ee816129d3565b82525050565b6000602082019050612a0960008301846129e5565b92915050565b612a18816129d3565b8114612a2357600080fd5b50565b600081359050612a3581612a0f565b92915050565b60008060408385031215612a5257612a516125dd565b5b6000612a6085828601612a26565b9250506020612a7185828601612608565b9150509250929050565b612a84816125e7565b82525050565b6000602082019050612a9f6000830184612a7b565b92915050565b600080600060608486031215612abe57612abd6125dd565b5b6000612acc86828701612a26565b9350506020612add86828701612a26565b9250506040612aee86828701612608565b9150509250925092565b600060208284031215612b0e57612b0d6125dd565b5b6000612b1c84828501612a26565b91505092915050565b612b2e81612740565b8114612b3957600080fd5b50565b600081359050612b4b81612b25565b92915050565b60008060408385031215612b6857612b676125dd565b5b6000612b7685828601612a26565b9250506020612b8785828601612b3c565b9150509250929050565b600080fd5b600080fd5b60008083601f840112612bb157612bb0612776565b5b8235905067ffffffffffffffff811115612bce57612bcd612b91565b5b602083019150836020820283011115612bea57612be9612b96565b5b9250929050565b600080600060408486031215612c0a57612c096125dd565b5b6000612c1886828701612a26565b935050602084013567ffffffffffffffff811115612c3957612c386125e2565b5b612c4586828701612b9b565b92509250509250925092565b6000819050919050565b612c6481612c51565b82525050565b6000602082019050612c7f6000830184612c5b565b92915050565b600067ffffffffffffffff821115612ca057612c9f612791565b5b612ca982612780565b9050602081019050919050565b6000612cc9612cc484612c85565b6127f1565b905082815260208101848484011115612ce557612ce461277b565b5b612cf084828561283d565b509392505050565b600082601f830112612d0d57612d0c612776565b5b8135612d1d848260208601612cb6565b91505092915050565b60008060008060808587031215612d4057612d3f6125dd565b5b6000612d4e87828801612a26565b9450506020612d5f87828801612a26565b9350506040612d7087828801612608565b925050606085013567ffffffffffffffff811115612d9157612d906125e2565b5b612d9d87828801612cf8565b91505092959194509250565b600080600060408486031215612dc257612dc16125dd565b5b6000612dd086828701612608565b935050602084013567ffffffffffffffff811115612df157612df06125e2565b5b612dfd86828701612b9b565b92509250509250925092565b612e1281612c51565b8114612e1d57600080fd5b50565b600081359050612e2f81612e09565b92915050565b600060208284031215612e4b57612e4a6125dd565b5b6000612e5984828501612e20565b91505092915050565b60008060408385031215612e7957612e786125dd565b5b6000612e8785828601612608565b9250506020612e9885828601612a26565b9150509250929050565b60008060408385031215612eb957612eb86125dd565b5b6000612ec785828601612a26565b9250506020612ed885828601612a26565b9150509250929050565b600081905092915050565b50565b6000612efd600083612ee2565b9150612f0882612eed565b600082019050919050565b6000612f1e82612ef0565b9150819050919050565b7f5472616e73666572206661696c00000000000000000000000000000000000000600082015250565b6000612f5e600d83612910565b9150612f6982612f28565b602082019050919050565b60006020820190508181036000830152612f8d81612f51565b9050919050565b7f4f6e6c7941646d696e3a2073656e646572206973206e6f742061646d696e206f60008201527f72206f776e657200000000000000000000000000000000000000000000000000602082015250565b6000612ff0602783612910565b9150612ffb82612f94565b604082019050919050565b6000602082019050818103600083015261301f81612fe3565b9050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b6000600282049050600182168061306d57607f821691505b6020821081036130805761307f613026565b5b50919050565b60008190508160005260206000209050919050565b60006020601f8301049050919050565b600082821b905092915050565b6000600883026130e87fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff826130ab565b6130f286836130ab565b95508019841693508086168417925050509392505050565b6000819050919050565b600061312f61312a613125846125e7565b61310a565b6125e7565b9050919050565b6000819050919050565b61314983613114565b61315d61315582613136565b8484546130b8565b825550505050565b600090565b613172613165565b61317d818484613140565b505050565b5b818110156131a15761319660008261316a565b600181019050613183565b5050565b601f8211156131e6576131b781613086565b6131c08461309b565b810160208510156131cf578190505b6131e36131db8561309b565b830182613182565b50505b505050565b600082821c905092915050565b6000613209600019846008026131eb565b1980831691505092915050565b600061322283836131f8565b9150826002028217905092915050565b61323b82612905565b67ffffffffffffffff81111561325457613253612791565b5b61325e8254613055565b6132698282856131a5565b600060209050601f83116001811461329c576000841561328a578287015190505b6132948582613216565b8655506132fc565b601f1984166132aa86613086565b60005b828110156132d2578489015182556001820191506020850194506020810190506132ad565b868310156132ef57848901516132eb601f8916826131f8565b8355505b6001600288020188555050505b505050505050565b60008160601b9050919050565b600061331c82613304565b9050919050565b600061332e82613311565b9050919050565b613346613341826129d3565b613323565b82525050565b60006133588284613335565b60148201915081905092915050565b7f53746174652063616e206f6e6c792062652066726f6d203020746f20322c206960008201527f6e636c7573697665000000000000000000000000000000000000000000000000602082015250565b60006133c3602883612910565b91506133ce82613367565b604082019050919050565b600060208201905081810360008301526133f2816133b6565b9050919050565b7f5265656e7472616e637947756172643a207265656e7472616e742063616c6c00600082015250565b600061342f601f83612910565b915061343a826133f9565b602082019050919050565b6000602082019050818103600083015261345e81613422565b9050919050565b7f53616c6520697320636c6f736564000000000000000000000000000000000000600082015250565b600061349b600e83612910565b91506134a682613465565b602082019050919050565b600060208201905081810360008301526134ca8161348e565b9050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b600061350b826125e7565b9150613516836125e7565b925082820190508082111561352e5761352d6134d1565b5b92915050565b7f4e46543a2065786365656473206d617820737570706c79000000000000000000600082015250565b600061356a601783612910565b915061357582613534565b602082019050919050565b600060208201905081810360008301526135998161355d565b9050919050565b7f4e46543a20416c6c6f77206c697374206f6e6c79000000000000000000000000600082015250565b60006135d6601483612910565b91506135e1826135a0565b602082019050919050565b60006020820190508181036000830152613605816135c9565b9050919050565b6000613617826125e7565b9150613622836125e7565b9250828202613630816125e7565b91508282048414831517613647576136466134d1565b5b5092915050565b7f4e46543a20696e636f727265637420616d6f756e74206f66204554482073656e60008201527f7400000000000000000000000000000000000000000000000000000000000000602082015250565b60006136aa602183612910565b91506136b58261364e565b604082019050919050565b600060208201905081810360008301526136d98161369d565b9050919050565b60006080820190506136f560008301876129e5565b6137026020830186612a7b565b61370f60408301856129e5565b61371c6060830184612a7b565b95945050505050565b600081905092915050565b600061373b82612905565b6137458185613725565b9350613755818560208601612921565b80840191505092915050565b600061376d8285613730565b91506137798284613730565b91508190509392505050565b7f65786365656473206d617820737570706c790000000000000000000000000000600082015250565b60006137bb601283612910565b91506137c682613785565b602082019050919050565b600060208201905081810360008301526137ea816137ae565b9050919050565b6000819050919050565b600061381661381161380c846137f1565b61310a565b6125e7565b9050919050565b613826816137fb565b82525050565b600060808201905061384160008301876129e5565b61384e602083018661381d565b61385b60408301856129e5565b6138686060830184612a7b565b95945050505050565b7f4f776e61626c653a206e6577206f776e657220697320746865207a65726f206160008201527f6464726573730000000000000000000000000000000000000000000000000000602082015250565b60006138cd602683612910565b91506138d882613871565b604082019050919050565b600060208201905081810360008301526138fc816138c0565b9050919050565b7f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e6572600082015250565b6000613939602083612910565b915061394482613903565b602082019050919050565b600060208201905081810360008301526139688161392c565b9050919050565b600081519050919050565b600082825260208201905092915050565b60006139968261396f565b6139a0818561397a565b93506139b0818560208601612921565b6139b981612780565b840191505092915050565b60006080820190506139d960008301876129e5565b6139e660208301866129e5565b6139f36040830185612a7b565b8181036060830152613a05818461398b565b905095945050505050565b600081519050613a1f816126e7565b92915050565b600060208284031215613a3b57613a3a6125dd565b5b6000613a4984828501613a10565b91505092915050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b6000613a8c826125e7565b91507fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff8203613abe57613abd6134d1565b5b60018201905091905056fea26469706673582212201ed9259919984c3d568584e9bdda088619de2e0247be0889fdcd7611044571f864736f6c63430008110033"