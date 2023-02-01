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
    "inputs": [
      {
        "internalType": "uint256",
        "name": "value",
        "type": "uint256"
      },
      {
        "internalType": "uint256",
        "name": "percentage",
        "type": "uint256"
      }
    ],
    "name": "percentageOf",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "stateMutability": "pure",
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

export const nft_bytecode = "0x60806040523480156200001157600080fd5b5060405162004631380380620046318339818101604052810190620000379190620004be565b858581600290816200004a9190620007f8565b5080600390816200005c9190620007f8565b506200006d620000f760201b60201c565b60008190555050506200009562000089620000fc60201b60201c565b6200010460201b60201c565b6001600a8190555083600b8190555082600e8190555081600f819055508060089081620000c39190620007f8565b50620000eb73652de12310c5df76844211e5ab0fe708f615068c6001620001ca60201b60201c565b50505050505062000962565b600090565b600033905090565b6000600960009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16905081600960006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055508173ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff167f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e060405160405180910390a35050565b620001da6200023560201b60201c565b80600c60008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060006101000a81548160ff0219169083151502179055505050565b62000245620000fc60201b60201c565b73ffffffffffffffffffffffffffffffffffffffff166200026b620002c660201b60201c565b73ffffffffffffffffffffffffffffffffffffffff1614620002c4576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401620002bb9062000940565b60405180910390fd5b565b6000600960009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16905090565b6000604051905090565b600080fd5b600080fd5b600080fd5b600080fd5b6000601f19601f8301169050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b62000359826200030e565b810181811067ffffffffffffffff821117156200037b576200037a6200031f565b5b80604052505050565b600062000390620002f0565b90506200039e82826200034e565b919050565b600067ffffffffffffffff821115620003c157620003c06200031f565b5b620003cc826200030e565b9050602081019050919050565b60005b83811015620003f9578082015181840152602081019050620003dc565b60008484015250505050565b60006200041c6200041684620003a3565b62000384565b9050828152602081018484840111156200043b576200043a62000309565b5b62000448848285620003d9565b509392505050565b600082601f83011262000468576200046762000304565b5b81516200047a84826020860162000405565b91505092915050565b6000819050919050565b620004988162000483565b8114620004a457600080fd5b50565b600081519050620004b8816200048d565b92915050565b60008060008060008060c08789031215620004de57620004dd620002fa565b5b600087015167ffffffffffffffff811115620004ff57620004fe620002ff565b5b6200050d89828a0162000450565b965050602087015167ffffffffffffffff811115620005315762000530620002ff565b5b6200053f89828a0162000450565b95505060406200055289828a01620004a7565b94505060606200056589828a01620004a7565b93505060806200057889828a01620004a7565b92505060a087015167ffffffffffffffff8111156200059c576200059b620002ff565b5b620005aa89828a0162000450565b9150509295509295509295565b600081519050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b600060028204905060018216806200060a57607f821691505b60208210810362000620576200061f620005c2565b5b50919050565b60008190508160005260206000209050919050565b60006020601f8301049050919050565b600082821b905092915050565b6000600883026200068a7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff826200064b565b6200069686836200064b565b95508019841693508086168417925050509392505050565b6000819050919050565b6000620006d9620006d3620006cd8462000483565b620006ae565b62000483565b9050919050565b6000819050919050565b620006f583620006b8565b6200070d6200070482620006e0565b84845462000658565b825550505050565b600090565b6200072462000715565b62000731818484620006ea565b505050565b5b8181101562000759576200074d6000826200071a565b60018101905062000737565b5050565b601f821115620007a857620007728162000626565b6200077d846200063b565b810160208510156200078d578190505b620007a56200079c856200063b565b83018262000736565b50505b505050565b600082821c905092915050565b6000620007cd60001984600802620007ad565b1980831691505092915050565b6000620007e88383620007ba565b9150826002028217905092915050565b6200080382620005b7565b67ffffffffffffffff8111156200081f576200081e6200031f565b5b6200082b8254620005f1565b620008388282856200075d565b600060209050601f8311600181146200087057600084156200085b578287015190505b620008678582620007da565b865550620008d7565b601f198416620008808662000626565b60005b82811015620008aa5784890151825560018201915060208501945060208101905062000883565b86831015620008ca5784890151620008c6601f891682620007ba565b8355505b6001600288020188555050505b505050505050565b600082825260208201905092915050565b7f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e6572600082015250565b600062000928602083620008df565b91506200093582620008f0565b602082019050919050565b600060208201905081810360008301526200095b8162000919565b9050919050565b613cbf80620009726000396000f3fe6080604052600436106102035760003560e01c8063715018a611610118578063b88d4fde116100a0578063c87b56dd1161006f578063c87b56dd14610721578063d52c57e01461075e578063d5abeb0114610787578063e985e9c5146107b2578063f2fde38b146107ef57610203565b8063b88d4fde14610695578063ba41b0c6146106b1578063c19d93fb146106cd578063c2218fdd146106f857610203565b806395d89b41116100e757806395d89b41146105b0578063a035b1fe146105db578063a22cb46514610606578063a9e966b71461062f578063b71051e21461065857610203565b8063715018a61461051a5780638da5cb5b1461053157806391b7f5ed1461055c57806394a81c701461058557610203565b806318160ddd1161019b57806342842e0e1161016a57806342842e0e1461041e5780634b0bddd21461043a5780636352211e1461046357806367762169146104a057806370a08231146104dd57610203565b806318160ddd1461036f5780631b8926a91461039a57806323b872dd146103c557806324d7806c146103e157610203565b8063081812fc116101d7578063081812fc146102c2578063095ea7b3146102ff5780630e03ebe91461031b5780631141d7de1461034457610203565b8062f714ce1461020857806301ffc9a71461023157806302fe53051461026e57806306fdde0314610297575b600080fd5b34801561021457600080fd5b5061022f600480360381019061022a919061272f565b610818565b005b34801561023d57600080fd5b50610258600480360381019061025391906127c7565b6108d1565b604051610265919061280f565b60405180910390f35b34801561027a57600080fd5b5061029560048036038101906102909190612970565b610963565b005b3480156102a357600080fd5b506102ac610a4d565b6040516102b99190612a38565b60405180910390f35b3480156102ce57600080fd5b506102e960048036038101906102e49190612a5a565b610adf565b6040516102f69190612aa8565b60405180910390f35b61031960048036038101906103149190612aef565b610b5e565b005b34801561032757600080fd5b50610342600480360381019061033d9190612a5a565b610ca2565b005b34801561035057600080fd5b50610359610d83565b6040516103669190612a38565b60405180910390f35b34801561037b57600080fd5b50610384610e11565b6040516103919190612b3e565b60405180910390f35b3480156103a657600080fd5b506103af610e28565b6040516103bc9190612b3e565b60405180910390f35b6103df60048036038101906103da9190612b59565b610e2e565b005b3480156103ed57600080fd5b5061040860048036038101906104039190612bac565b611150565b604051610415919061280f565b60405180910390f35b61043860048036038101906104339190612b59565b611170565b005b34801561044657600080fd5b50610461600480360381019061045c9190612c05565b611190565b005b34801561046f57600080fd5b5061048a60048036038101906104859190612a5a565b6111f3565b6040516104979190612aa8565b60405180910390f35b3480156104ac57600080fd5b506104c760048036038101906104c29190612ca5565b611205565b6040516104d4919061280f565b60405180910390f35b3480156104e957600080fd5b5061050460048036038101906104ff9190612bac565b61128f565b6040516105119190612b3e565b60405180910390f35b34801561052657600080fd5b5061052f611347565b005b34801561053d57600080fd5b5061054661135b565b6040516105539190612aa8565b60405180910390f35b34801561056857600080fd5b50610583600480360381019061057e9190612a5a565b611385565b005b34801561059157600080fd5b5061059a611466565b6040516105a79190612d1e565b60405180910390f35b3480156105bc57600080fd5b506105c561146c565b6040516105d29190612a38565b60405180910390f35b3480156105e757600080fd5b506105f06114fe565b6040516105fd9190612b3e565b60405180910390f35b34801561061257600080fd5b5061062d60048036038101906106289190612c05565b611504565b005b34801561063b57600080fd5b5061065660048036038101906106519190612a5a565b61160f565b005b34801561066457600080fd5b5061067f600480360381019061067a9190612d39565b61176d565b60405161068c9190612b3e565b60405180910390f35b6106af60048036038101906106aa9190612e1a565b6117d9565b005b6106cb60048036038101906106c69190612e9d565b61184c565b005b3480156106d957600080fd5b506106e2611a81565b6040516106ef9190612b3e565b60405180910390f35b34801561070457600080fd5b5061071f600480360381019061071a9190612f29565b611a87565b005b34801561072d57600080fd5b5061074860048036038101906107439190612a5a565b611b68565b6040516107559190612a38565b60405180910390f35b34801561076a57600080fd5b5061078560048036038101906107809190612f56565b611c06565b005b34801561079357600080fd5b5061079c611cb8565b6040516107a99190612b3e565b60405180910390f35b3480156107be57600080fd5b506107d960048036038101906107d49190612f96565b611cbe565b6040516107e6919061280f565b60405180910390f35b3480156107fb57600080fd5b5061081660048036038101906108119190612bac565b611d52565b005b610820611dd5565b60008173ffffffffffffffffffffffffffffffffffffffff168360405161084690613007565b60006040518083038185875af1925050503d8060008114610883576040519150601f19603f3d011682016040523d82523d6000602084013e610888565b606091505b50509050806108cc576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016108c390613068565b60405180910390fd5b505050565b60006301ffc9a760e01b827bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916148061092c57506380ac58cd60e01b827bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916145b8061095c5750635b5e139f60e01b827bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916145b9050919050565b600c600061096f611e53565b73ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060009054906101000a900460ff16806109fb57506109c561135b565b73ffffffffffffffffffffffffffffffffffffffff166109e3611e53565b73ffffffffffffffffffffffffffffffffffffffff16145b610a3a576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610a31906130fa565b60405180910390fd5b8060089081610a499190613326565b5050565b606060028054610a5c90613149565b80601f0160208091040260200160405190810160405280929190818152602001828054610a8890613149565b8015610ad55780601f10610aaa57610100808354040283529160200191610ad5565b820191906000526020600020905b815481529060010190602001808311610ab857829003601f168201915b5050505050905090565b6000610aea82611e5b565b610b20576040517fcf4700e400000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6006600083815260200190815260200160002060000160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff169050919050565b6000610b69826111f3565b90508073ffffffffffffffffffffffffffffffffffffffff16610b8a611eba565b73ffffffffffffffffffffffffffffffffffffffff1614610bed57610bb681610bb1611eba565b611cbe565b610bec576040517fcfb3b94200000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b5b826006600084815260200190815260200160002060000160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550818373ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff167f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b92560405160405180910390a4505050565b600c6000610cae611e53565b73ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060009054906101000a900460ff1680610d3a5750610d0461135b565b73ffffffffffffffffffffffffffffffffffffffff16610d22611e53565b73ffffffffffffffffffffffffffffffffffffffff16145b610d79576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610d70906130fa565b60405180910390fd5b80600f8190555050565b60088054610d9090613149565b80601f0160208091040260200160405190810160405280929190818152602001828054610dbc90613149565b8015610e095780601f10610dde57610100808354040283529160200191610e09565b820191906000526020600020905b815481529060010190602001808311610dec57829003601f168201915b505050505081565b6000610e1b611ec2565b6001546000540303905090565b600f5481565b6000610e3982611ec7565b90508373ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff1614610ea0576040517fa114810000000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b600080610eac84611f93565b91509150610ec28187610ebd611eba565b611fba565b610f0e57610ed786610ed2611eba565b611cbe565b610f0d576040517f59c896be00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b5b600073ffffffffffffffffffffffffffffffffffffffff168573ffffffffffffffffffffffffffffffffffffffff1603610f74576040517fea553b3400000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b610f818686866001611ffe565b8015610f8c57600082555b600560008773ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600081546001900391905081905550600560008673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600081546001019190508190555061105a85611036888887612004565b7c02000000000000000000000000000000000000000000000000000000001761202c565b600460008681526020019081526020016000208190555060007c02000000000000000000000000000000000000000000000000000000008416036110e057600060018501905060006004600083815260200190815260200160002054036110de5760005481146110dd578360046000838152602001908152602001600020819055505b5b505b838573ffffffffffffffffffffffffffffffffffffffff168773ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef60405160405180910390a46111488686866001612057565b505050505050565b600c6020528060005260406000206000915054906101000a900460ff1681565b61118b838383604051806020016040528060008152506117d9565b505050565b611198611dd5565b80600c60008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060006101000a81548160ff0219169083151502179055505050565b60006111fe82611ec7565b9050919050565b600080846040516020016112199190613440565b6040516020818303038152906040528051906020012090506000611281858580806020026020016040519081016040528093929190818152602001838360200280828437600081840152601f19601f82011690508083019250505050505050600d548461205d565b905080925050509392505050565b60008073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff16036112f6576040517f8f4eb60400000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b67ffffffffffffffff600560008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002054169050919050565b61134f611dd5565b6113596000612074565b565b6000600960009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16905090565b600c6000611391611e53565b73ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060009054906101000a900460ff168061141d57506113e761135b565b73ffffffffffffffffffffffffffffffffffffffff16611405611e53565b73ffffffffffffffffffffffffffffffffffffffff16145b61145c576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401611453906130fa565b60405180910390fd5b80600e8190555050565b600d5481565b60606003805461147b90613149565b80601f01602080910402602001604051908101604052809291908181526020018280546114a790613149565b80156114f45780601f106114c9576101008083540402835291602001916114f4565b820191906000526020600020905b8154815290600101906020018083116114d757829003601f168201915b5050505050905090565b600e5481565b8060076000611511611eba565b73ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060006101000a81548160ff0219169083151502179055508173ffffffffffffffffffffffffffffffffffffffff166115be611eba565b73ffffffffffffffffffffffffffffffffffffffff167f17307eab39ab6107e8899845ad3d59bd9653f200f220920489ca2b5937696c3183604051611603919061280f565b60405180910390a35050565b600c600061161b611e53565b73ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060009054906101000a900460ff16806116a7575061167161135b565b73ffffffffffffffffffffffffffffffffffffffff1661168f611e53565b73ffffffffffffffffffffffffffffffffffffffff16145b6116e6576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016116dd906130fa565b60405180910390fd5b600281111561172a576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401611721906134cd565b60405180910390fd5b806010819055507f8fd8f487a1d703cca2ded1250c8e7c8c1ae6f0b6cdc81883a282e0863a6d72836010546040516117629190612b3e565b60405180910390a150565b600060648310156117b3576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016117aa90613539565b60405180910390fd5b60006064846117c291906135b7565b905082816117d091906135e8565b91505092915050565b6117e4848484610e2e565b60008373ffffffffffffffffffffffffffffffffffffffff163b146118465761180f8484848461213a565b611845576040517fd1a57ed600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b5b50505050565b6002600a5403611891576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161188890613676565b60405180910390fd5b6002600a819055506000601054116118de576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016118d5906136e2565b60405180910390fd5b600b54836118ea610e11565b6118f49190613702565b1115611935576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161192c90613782565b60405180910390fd5b6000600e5490506001601054036119a157611958611951611e53565b8484611205565b611997576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161198e906137ee565b60405180910390fd5b600f5490506119ca565b6002601054036119c9576119bd6119b6611e53565b8484611205565b156119c857600f5490505b5b5b83816119d691906135e8565b3414611a17576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401611a0e90613880565b60405180910390fd5b611a28611a22611e53565b8561228a565b7f58303c2ecff4b8a524f2f8ca478d8683b492b3419026f7199667453c2f15412a611a51611e53565b34611a5a611e53565b87604051611a6b94939291906138a0565b60405180910390a1506001600a81905550505050565b60105481565b600c6000611a93611e53565b73ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060009054906101000a900460ff1680611b1f5750611ae961135b565b73ffffffffffffffffffffffffffffffffffffffff16611b07611e53565b73ffffffffffffffffffffffffffffffffffffffff16145b611b5e576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401611b55906130fa565b60405180910390fd5b80600d8190555050565b6060611b7382611e5b565b611ba9576040517fa14c4b5000000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6000611bb36122a8565b90506000815103611bd35760405180602001604052806000815250611bfe565b80611bdd8461233a565b604051602001611bee929190613921565b6040516020818303038152906040525b915050919050565b611c0e611dd5565b600b5482611c1a610e11565b611c249190613702565b1115611c65576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401611c5c90613991565b60405180910390fd5b611c6f818361228a565b7f58303c2ecff4b8a524f2f8ca478d8683b492b3419026f7199667453c2f15412a611c98611e53565b60008385604051611cac94939291906139ec565b60405180910390a15050565b600b5481565b6000600760008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060009054906101000a900460ff16905092915050565b611d5a611dd5565b600073ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff1603611dc9576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401611dc090613aa3565b60405180910390fd5b611dd281612074565b50565b611ddd611e53565b73ffffffffffffffffffffffffffffffffffffffff16611dfb61135b565b73ffffffffffffffffffffffffffffffffffffffff1614611e51576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401611e4890613b0f565b60405180910390fd5b565b600033905090565b600081611e66611ec2565b11158015611e75575060005482105b8015611eb3575060007c0100000000000000000000000000000000000000000000000000000000600460008581526020019081526020016000205416145b9050919050565b600033905090565b600090565b60008082905080611ed6611ec2565b11611f5c57600054811015611f5b5760006004600083815260200190815260200160002054905060007c0100000000000000000000000000000000000000000000000000000000821603611f59575b60008103611f4f576004600083600190039350838152602001908152602001600020549050611f25565b8092505050611f8e565b505b5b6040517fdf2d9b4200000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b919050565b60008060006006600085815260200190815260200160002090508092508254915050915091565b600073ffffffffffffffffffffffffffffffffffffffff8316925073ffffffffffffffffffffffffffffffffffffffff821691508382148383141790509392505050565b50505050565b60008060e883901c905060e861201b86868461238a565b62ffffff16901b9150509392505050565b600073ffffffffffffffffffffffffffffffffffffffff83169250814260a01b178317905092915050565b50505050565b60008261206a8584612393565b1490509392505050565b6000600960009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16905081600960006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055508173ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff167f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e060405160405180910390a35050565b60008373ffffffffffffffffffffffffffffffffffffffff1663150b7a02612160611eba565b8786866040518563ffffffff1660e01b81526004016121829493929190613b84565b6020604051808303816000875af19250505080156121be57506040513d601f19601f820116820180604052508101906121bb9190613be5565b60015b612237573d80600081146121ee576040519150601f19603f3d011682016040523d82523d6000602084013e6121f3565b606091505b50600081510361222f576040517fd1a57ed600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b805181602001fd5b63150b7a0260e01b7bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916817bffffffffffffffffffffffffffffffffffffffffffffffffffffffff191614915050949350505050565b6122a4828260405180602001604052806000815250612408565b5050565b6060600880546122b790613149565b80601f01602080910402602001604051908101604052809291908181526020018280546122e390613149565b80156123305780601f1061230557610100808354040283529160200191612330565b820191906000526020600020905b81548152906001019060200180831161231357829003601f168201915b5050505050905090565b606060a060405101806040526020810391506000825281835b60011561237557600184039350600a81066030018453600a8104905080612353575b50828103602084039350808452505050919050565b60009392505050565b60008082905060005b84518110156123fd5760008582815181106123ba576123b9613c12565b5b602002602001015190508083116123dc576123d583826124a5565b92506123e9565b6123e681846124a5565b92505b5080806123f590613c41565b91505061239c565b508091505092915050565b61241283836124bc565b60008373ffffffffffffffffffffffffffffffffffffffff163b146124a057600080549050600083820390505b612452600086838060010194508661213a565b612488576040517fd1a57ed600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b81811061243f57816000541461249d57600080fd5b50505b505050565b600082600052816020526040600020905092915050565b600080549050600082036124fc576040517fb562e8dd00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6125096000848385611ffe565b600160406001901b178202600560008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008282540192505081905550612580836125716000866000612004565b61257a85612677565b1761202c565b6004600083815260200190815260200160002081905550600080838301905073ffffffffffffffffffffffffffffffffffffffff85169150828260007fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef600080a4600183015b81811461262157808360007fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef600080a46001810190506125e6565b506000820361265c576040517f2e07630000000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b8060008190555050506126726000848385612057565b505050565b60006001821460e11b9050919050565b6000604051905090565b600080fd5b600080fd5b6000819050919050565b6126ae8161269b565b81146126b957600080fd5b50565b6000813590506126cb816126a5565b92915050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b60006126fc826126d1565b9050919050565b61270c816126f1565b811461271757600080fd5b50565b60008135905061272981612703565b92915050565b6000806040838503121561274657612745612691565b5b6000612754858286016126bc565b92505060206127658582860161271a565b9150509250929050565b60007fffffffff0000000000000000000000000000000000000000000000000000000082169050919050565b6127a48161276f565b81146127af57600080fd5b50565b6000813590506127c18161279b565b92915050565b6000602082840312156127dd576127dc612691565b5b60006127eb848285016127b2565b91505092915050565b60008115159050919050565b612809816127f4565b82525050565b60006020820190506128246000830184612800565b92915050565b600080fd5b600080fd5b6000601f19601f8301169050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b61287d82612834565b810181811067ffffffffffffffff8211171561289c5761289b612845565b5b80604052505050565b60006128af612687565b90506128bb8282612874565b919050565b600067ffffffffffffffff8211156128db576128da612845565b5b6128e482612834565b9050602081019050919050565b82818337600083830152505050565b600061291361290e846128c0565b6128a5565b90508281526020810184848401111561292f5761292e61282f565b5b61293a8482856128f1565b509392505050565b600082601f8301126129575761295661282a565b5b8135612967848260208601612900565b91505092915050565b60006020828403121561298657612985612691565b5b600082013567ffffffffffffffff8111156129a4576129a3612696565b5b6129b084828501612942565b91505092915050565b600081519050919050565b600082825260208201905092915050565b60005b838110156129f35780820151818401526020810190506129d8565b60008484015250505050565b6000612a0a826129b9565b612a1481856129c4565b9350612a248185602086016129d5565b612a2d81612834565b840191505092915050565b60006020820190508181036000830152612a5281846129ff565b905092915050565b600060208284031215612a7057612a6f612691565b5b6000612a7e848285016126bc565b91505092915050565b6000612a92826126d1565b9050919050565b612aa281612a87565b82525050565b6000602082019050612abd6000830184612a99565b92915050565b612acc81612a87565b8114612ad757600080fd5b50565b600081359050612ae981612ac3565b92915050565b60008060408385031215612b0657612b05612691565b5b6000612b1485828601612ada565b9250506020612b25858286016126bc565b9150509250929050565b612b388161269b565b82525050565b6000602082019050612b536000830184612b2f565b92915050565b600080600060608486031215612b7257612b71612691565b5b6000612b8086828701612ada565b9350506020612b9186828701612ada565b9250506040612ba2868287016126bc565b9150509250925092565b600060208284031215612bc257612bc1612691565b5b6000612bd084828501612ada565b91505092915050565b612be2816127f4565b8114612bed57600080fd5b50565b600081359050612bff81612bd9565b92915050565b60008060408385031215612c1c57612c1b612691565b5b6000612c2a85828601612ada565b9250506020612c3b85828601612bf0565b9150509250929050565b600080fd5b600080fd5b60008083601f840112612c6557612c6461282a565b5b8235905067ffffffffffffffff811115612c8257612c81612c45565b5b602083019150836020820283011115612c9e57612c9d612c4a565b5b9250929050565b600080600060408486031215612cbe57612cbd612691565b5b6000612ccc86828701612ada565b935050602084013567ffffffffffffffff811115612ced57612cec612696565b5b612cf986828701612c4f565b92509250509250925092565b6000819050919050565b612d1881612d05565b82525050565b6000602082019050612d336000830184612d0f565b92915050565b60008060408385031215612d5057612d4f612691565b5b6000612d5e858286016126bc565b9250506020612d6f858286016126bc565b9150509250929050565b600067ffffffffffffffff821115612d9457612d93612845565b5b612d9d82612834565b9050602081019050919050565b6000612dbd612db884612d79565b6128a5565b905082815260208101848484011115612dd957612dd861282f565b5b612de48482856128f1565b509392505050565b600082601f830112612e0157612e0061282a565b5b8135612e11848260208601612daa565b91505092915050565b60008060008060808587031215612e3457612e33612691565b5b6000612e4287828801612ada565b9450506020612e5387828801612ada565b9350506040612e64878288016126bc565b925050606085013567ffffffffffffffff811115612e8557612e84612696565b5b612e9187828801612dec565b91505092959194509250565b600080600060408486031215612eb657612eb5612691565b5b6000612ec4868287016126bc565b935050602084013567ffffffffffffffff811115612ee557612ee4612696565b5b612ef186828701612c4f565b92509250509250925092565b612f0681612d05565b8114612f1157600080fd5b50565b600081359050612f2381612efd565b92915050565b600060208284031215612f3f57612f3e612691565b5b6000612f4d84828501612f14565b91505092915050565b60008060408385031215612f6d57612f6c612691565b5b6000612f7b858286016126bc565b9250506020612f8c85828601612ada565b9150509250929050565b60008060408385031215612fad57612fac612691565b5b6000612fbb85828601612ada565b9250506020612fcc85828601612ada565b9150509250929050565b600081905092915050565b50565b6000612ff1600083612fd6565b9150612ffc82612fe1565b600082019050919050565b600061301282612fe4565b9150819050919050565b7f5472616e73666572206661696c00000000000000000000000000000000000000600082015250565b6000613052600d836129c4565b915061305d8261301c565b602082019050919050565b6000602082019050818103600083015261308181613045565b9050919050565b7f4f6e6c7941646d696e3a2073656e646572206973206e6f742061646d696e206f60008201527f72206f776e657200000000000000000000000000000000000000000000000000602082015250565b60006130e46027836129c4565b91506130ef82613088565b604082019050919050565b60006020820190508181036000830152613113816130d7565b9050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b6000600282049050600182168061316157607f821691505b6020821081036131745761317361311a565b5b50919050565b60008190508160005260206000209050919050565b60006020601f8301049050919050565b600082821b905092915050565b6000600883026131dc7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff8261319f565b6131e6868361319f565b95508019841693508086168417925050509392505050565b6000819050919050565b600061322361321e6132198461269b565b6131fe565b61269b565b9050919050565b6000819050919050565b61323d83613208565b6132516132498261322a565b8484546131ac565b825550505050565b600090565b613266613259565b613271818484613234565b505050565b5b818110156132955761328a60008261325e565b600181019050613277565b5050565b601f8211156132da576132ab8161317a565b6132b48461318f565b810160208510156132c3578190505b6132d76132cf8561318f565b830182613276565b50505b505050565b600082821c905092915050565b60006132fd600019846008026132df565b1980831691505092915050565b600061331683836132ec565b9150826002028217905092915050565b61332f826129b9565b67ffffffffffffffff81111561334857613347612845565b5b6133528254613149565b61335d828285613299565b600060209050601f831160018114613390576000841561337e578287015190505b613388858261330a565b8655506133f0565b601f19841661339e8661317a565b60005b828110156133c6578489015182556001820191506020850194506020810190506133a1565b868310156133e357848901516133df601f8916826132ec565b8355505b6001600288020188555050505b505050505050565b60008160601b9050919050565b6000613410826133f8565b9050919050565b600061342282613405565b9050919050565b61343a61343582612a87565b613417565b82525050565b600061344c8284613429565b60148201915081905092915050565b7f53746174652063616e206f6e6c792062652066726f6d203020746f20322c206960008201527f6e636c7573697665000000000000000000000000000000000000000000000000602082015250565b60006134b76028836129c4565b91506134c28261345b565b604082019050919050565b600060208201905081810360008301526134e6816134aa565b9050919050565b7f56616c7565206d757374206265203e3d20313030000000000000000000000000600082015250565b60006135236014836129c4565b915061352e826134ed565b602082019050919050565b6000602082019050818103600083015261355281613516565b9050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601260045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b60006135c28261269b565b91506135cd8361269b565b9250826135dd576135dc613559565b5b828204905092915050565b60006135f38261269b565b91506135fe8361269b565b925082820261360c8161269b565b9150828204841483151761362357613622613588565b5b5092915050565b7f5265656e7472616e637947756172643a207265656e7472616e742063616c6c00600082015250565b6000613660601f836129c4565b915061366b8261362a565b602082019050919050565b6000602082019050818103600083015261368f81613653565b9050919050565b7f53616c6520697320636c6f736564000000000000000000000000000000000000600082015250565b60006136cc600e836129c4565b91506136d782613696565b602082019050919050565b600060208201905081810360008301526136fb816136bf565b9050919050565b600061370d8261269b565b91506137188361269b565b92508282019050808211156137305761372f613588565b5b92915050565b7f4e46543a2065786365656473206d617820737570706c79000000000000000000600082015250565b600061376c6017836129c4565b915061377782613736565b602082019050919050565b6000602082019050818103600083015261379b8161375f565b9050919050565b7f4e46543a20416c6c6f77206c697374206f6e6c79000000000000000000000000600082015250565b60006137d86014836129c4565b91506137e3826137a2565b602082019050919050565b60006020820190508181036000830152613807816137cb565b9050919050565b7f4e46543a20696e636f727265637420616d6f756e74206f66204554482073656e60008201527f7400000000000000000000000000000000000000000000000000000000000000602082015250565b600061386a6021836129c4565b91506138758261380e565b604082019050919050565b600060208201905081810360008301526138998161385d565b9050919050565b60006080820190506138b56000830187612a99565b6138c26020830186612b2f565b6138cf6040830185612a99565b6138dc6060830184612b2f565b95945050505050565b600081905092915050565b60006138fb826129b9565b61390581856138e5565b93506139158185602086016129d5565b80840191505092915050565b600061392d82856138f0565b915061393982846138f0565b91508190509392505050565b7f65786365656473206d617820737570706c790000000000000000000000000000600082015250565b600061397b6012836129c4565b915061398682613945565b602082019050919050565b600060208201905081810360008301526139aa8161396e565b9050919050565b6000819050919050565b60006139d66139d16139cc846139b1565b6131fe565b61269b565b9050919050565b6139e6816139bb565b82525050565b6000608082019050613a016000830187612a99565b613a0e60208301866139dd565b613a1b6040830185612a99565b613a286060830184612b2f565b95945050505050565b7f4f776e61626c653a206e6577206f776e657220697320746865207a65726f206160008201527f6464726573730000000000000000000000000000000000000000000000000000602082015250565b6000613a8d6026836129c4565b9150613a9882613a31565b604082019050919050565b60006020820190508181036000830152613abc81613a80565b9050919050565b7f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e6572600082015250565b6000613af96020836129c4565b9150613b0482613ac3565b602082019050919050565b60006020820190508181036000830152613b2881613aec565b9050919050565b600081519050919050565b600082825260208201905092915050565b6000613b5682613b2f565b613b608185613b3a565b9350613b708185602086016129d5565b613b7981612834565b840191505092915050565b6000608082019050613b996000830187612a99565b613ba66020830186612a99565b613bb36040830185612b2f565b8181036060830152613bc58184613b4b565b905095945050505050565b600081519050613bdf8161279b565b92915050565b600060208284031215613bfb57613bfa612691565b5b6000613c0984828501613bd0565b91505092915050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b6000613c4c8261269b565b91507fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff8203613c7e57613c7d613588565b5b60018201905091905056fea2646970667358221220de63a50fa649ef64d221d1fab7086e4ded93fc1bd4eddd57190bcb0175107c6764736f6c63430008110033"