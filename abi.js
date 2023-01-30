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
    "inputs": [
      {
        "internalType": "uint256",
        "name": "_percentage",
        "type": "uint256"
      },
      {
        "internalType": "address payable",
        "name": "_wallet",
        "type": "address"
      }
    ],
    "name": "addToPaySplits",
    "outputs": [],
    "stateMutability": "nonpayable",
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
        "name": "indexToChange",
        "type": "uint256"
      },
      {
        "internalType": "uint256",
        "name": "_percentage",
        "type": "uint256"
      },
      {
        "internalType": "address payable",
        "name": "_wallet",
        "type": "address"
      }
    ],
    "name": "changePaySplits",
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
    "inputs": [
      {
        "internalType": "uint256",
        "name": "index",
        "type": "uint256"
      }
    ],
    "name": "removeFromPaySplits",
    "outputs": [],
    "stateMutability": "nonpayable",
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
    "name": "splitWithdraw",
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
        "name": "",
        "type": "uint256"
      }
    ],
    "name": "wallets",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "percentage",
        "type": "uint256"
      },
      {
        "internalType": "address",
        "name": "wallet",
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
];

export const nft_bytecode = "0x60806040523480156200001157600080fd5b5060405162004985380380620049858339818101604052810190620000379190620004ab565b848481600290816200004a9190620007b2565b5080600390816200005c9190620007b2565b506200006d620000e460201b60201c565b60008190555050506200009562000089620000e960201b60201c565b620000f160201b60201c565b6001600a8190555082600b8190555081600e8190555080600f81905550620000d973652de12310c5df76844211e5ab0fe708f615068c6001620001b760201b60201c565b50505050506200091c565b600090565b600033905090565b6000600960009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16905081600960006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055508173ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff167f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e060405160405180910390a35050565b620001c76200022260201b60201c565b80600c60008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060006101000a81548160ff0219169083151502179055505050565b62000232620000e960201b60201c565b73ffffffffffffffffffffffffffffffffffffffff1662000258620002b360201b60201c565b73ffffffffffffffffffffffffffffffffffffffff1614620002b1576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401620002a890620008fa565b60405180910390fd5b565b6000600960009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16905090565b6000604051905090565b600080fd5b600080fd5b600080fd5b600080fd5b6000601f19601f8301169050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b6200034682620002fb565b810181811067ffffffffffffffff821117156200036857620003676200030c565b5b80604052505050565b60006200037d620002dd565b90506200038b82826200033b565b919050565b600067ffffffffffffffff821115620003ae57620003ad6200030c565b5b620003b982620002fb565b9050602081019050919050565b60005b83811015620003e6578082015181840152602081019050620003c9565b60008484015250505050565b600062000409620004038462000390565b62000371565b905082815260208101848484011115620004285762000427620002f6565b5b62000435848285620003c6565b509392505050565b600082601f830112620004555762000454620002f1565b5b815162000467848260208601620003f2565b91505092915050565b6000819050919050565b620004858162000470565b81146200049157600080fd5b50565b600081519050620004a5816200047a565b92915050565b600080600080600060a08688031215620004ca57620004c9620002e7565b5b600086015167ffffffffffffffff811115620004eb57620004ea620002ec565b5b620004f9888289016200043d565b955050602086015167ffffffffffffffff8111156200051d576200051c620002ec565b5b6200052b888289016200043d565b94505060406200053e8882890162000494565b9350506060620005518882890162000494565b9250506080620005648882890162000494565b9150509295509295909350565b600081519050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b60006002820490506001821680620005c457607f821691505b602082108103620005da57620005d96200057c565b5b50919050565b60008190508160005260206000209050919050565b60006020601f8301049050919050565b600082821b905092915050565b600060088302620006447fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff8262000605565b62000650868362000605565b95508019841693508086168417925050509392505050565b6000819050919050565b6000620006936200068d620006878462000470565b62000668565b62000470565b9050919050565b6000819050919050565b620006af8362000672565b620006c7620006be826200069a565b84845462000612565b825550505050565b600090565b620006de620006cf565b620006eb818484620006a4565b505050565b5b81811015620007135762000707600082620006d4565b600181019050620006f1565b5050565b601f82111562000762576200072c81620005e0565b6200073784620005f5565b8101602085101562000747578190505b6200075f6200075685620005f5565b830182620006f0565b50505b505050565b600082821c905092915050565b6000620007876000198460080262000767565b1980831691505092915050565b6000620007a2838362000774565b9150826002028217905092915050565b620007bd8262000571565b67ffffffffffffffff811115620007d957620007d86200030c565b5b620007e58254620005ab565b620007f282828562000717565b600060209050601f8311600181146200082a576000841562000815578287015190505b62000821858262000794565b86555062000891565b601f1984166200083a86620005e0565b60005b8281101562000864578489015182556001820191506020850194506020810190506200083d565b8683101562000884578489015162000880601f89168262000774565b8355505b6001600288020188555050505b505050505050565b600082825260208201905092915050565b7f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e6572600082015250565b6000620008e260208362000899565b9150620008ef82620008aa565b602082019050919050565b600060208201905081810360008301526200091581620008d3565b9050919050565b614059806200092c6000396000f3fe6080604052600436106102245760003560e01c80638da5cb5b11610123578063b88d4fde116100ab578063d52c57e01161006f578063d52c57e0146107d4578063d5abeb01146107fd578063e985e9c514610828578063f2fde38b14610865578063f93300f01461088e57610224565b8063b88d4fde1461070b578063ba41b0c614610727578063c19d93fb14610743578063c2218fdd1461076e578063c87b56dd1461079757610224565b8063a192cf4a116100f2578063a192cf4a1461063c578063a22cb46514610665578063a9e966b71461068e578063af573db2146106b7578063b71051e2146106ce57610224565b80638da5cb5b1461059057806394a81c70146105bb57806395d89b41146105e6578063a035b1fe1461061157610224565b80631d1e715b116101b15780636352211e116101755780636352211e1461048457806367762169146104c157806370a08231146104fe578063715018a61461053b5780637ad71f721461055257610224565b80631d1e715b146103bd57806323b872dd146103e657806324d7806c1461040257806342842e0e1461043f5780634b0bddd21461045b57610224565b8063081812fc116101f8578063081812fc146102e3578063095ea7b3146103205780631141d7de1461033c57806318160ddd146103675780631b8926a91461039257610224565b8062f714ce1461022957806301ffc9a71461025257806302fe53051461028f57806306fdde03146102b8575b600080fd5b34801561023557600080fd5b50610250600480360381019061024b919061297e565b6108b7565b005b34801561025e57600080fd5b5061027960048036038101906102749190612a16565b610970565b6040516102869190612a5e565b60405180910390f35b34801561029b57600080fd5b506102b660048036038101906102b19190612bbf565b610a02565b005b3480156102c457600080fd5b506102cd610a1d565b6040516102da9190612c87565b60405180910390f35b3480156102ef57600080fd5b5061030a60048036038101906103059190612ca9565b610aaf565b6040516103179190612cf7565b60405180910390f35b61033a60048036038101906103359190612d3e565b610b2e565b005b34801561034857600080fd5b50610351610c72565b60405161035e9190612c87565b60405180910390f35b34801561037357600080fd5b5061037c610d00565b6040516103899190612d8d565b60405180910390f35b34801561039e57600080fd5b506103a7610d17565b6040516103b49190612d8d565b60405180910390f35b3480156103c957600080fd5b506103e460048036038101906103df9190612da8565b610d1d565b005b61040060048036038101906103fb9190612dfb565b610db8565b005b34801561040e57600080fd5b5061042960048036038101906104249190612e4e565b6110da565b6040516104369190612a5e565b60405180910390f35b61045960048036038101906104549190612dfb565b6110fa565b005b34801561046757600080fd5b50610482600480360381019061047d9190612ea7565b61111a565b005b34801561049057600080fd5b506104ab60048036038101906104a69190612ca9565b61117d565b6040516104b89190612cf7565b60405180910390f35b3480156104cd57600080fd5b506104e860048036038101906104e39190612f47565b61118f565b6040516104f59190612a5e565b60405180910390f35b34801561050a57600080fd5b5061052560048036038101906105209190612e4e565b611219565b6040516105329190612d8d565b60405180910390f35b34801561054757600080fd5b506105506112d1565b005b34801561055e57600080fd5b5061057960048036038101906105749190612ca9565b6112e5565b604051610587929190612fa7565b60405180910390f35b34801561059c57600080fd5b506105a5611339565b6040516105b29190612cf7565b60405180910390f35b3480156105c757600080fd5b506105d0611363565b6040516105dd9190612fe9565b60405180910390f35b3480156105f257600080fd5b506105fb611369565b6040516106089190612c87565b60405180910390f35b34801561061d57600080fd5b506106266113fb565b6040516106339190612d8d565b60405180910390f35b34801561064857600080fd5b50610663600480360381019061065e919061297e565b611401565b005b34801561067157600080fd5b5061068c60048036038101906106879190612ea7565b6114b6565b005b34801561069a57600080fd5b506106b560048036038101906106b09190612ca9565b6115c1565b005b3480156106c357600080fd5b506106cc6116db565b005b3480156106da57600080fd5b506106f560048036038101906106f09190613004565b6118d2565b6040516107029190612d8d565b60405180910390f35b610725600480360381019061072091906130e5565b61193e565b005b610741600480360381019061073c9190613168565b6119b1565b005b34801561074f57600080fd5b50610758611be6565b6040516107659190612d8d565b60405180910390f35b34801561077a57600080fd5b50610795600480360381019061079091906131f4565b611bec565b005b3480156107a357600080fd5b506107be60048036038101906107b99190612ca9565b611c89565b6040516107cb9190612c87565b60405180910390f35b3480156107e057600080fd5b506107fb60048036038101906107f69190613221565b611d27565b005b34801561080957600080fd5b50610812611dd9565b60405161081f9190612d8d565b60405180910390f35b34801561083457600080fd5b5061084f600480360381019061084a9190613261565b611ddf565b60405161085c9190612a5e565b60405180910390f35b34801561087157600080fd5b5061088c60048036038101906108879190612e4e565b611e73565b005b34801561089a57600080fd5b506108b560048036038101906108b09190612ca9565b611ef6565b005b6108bf612024565b60008173ffffffffffffffffffffffffffffffffffffffff16836040516108e5906132d2565b60006040518083038185875af1925050503d8060008114610922576040519150601f19603f3d011682016040523d82523d6000602084013e610927565b606091505b505090508061096b576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161096290613333565b60405180910390fd5b505050565b60006301ffc9a760e01b827bffffffffffffffffffffffffffffffffffffffffffffffffffffffff191614806109cb57506380ac58cd60e01b827bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916145b806109fb5750635b5e139f60e01b827bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916145b9050919050565b610a0a612024565b8060089081610a19919061355f565b5050565b606060028054610a2c90613382565b80601f0160208091040260200160405190810160405280929190818152602001828054610a5890613382565b8015610aa55780601f10610a7a57610100808354040283529160200191610aa5565b820191906000526020600020905b815481529060010190602001808311610a8857829003601f168201915b5050505050905090565b6000610aba826120a2565b610af0576040517fcf4700e400000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6006600083815260200190815260200160002060000160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff169050919050565b6000610b398261117d565b90508073ffffffffffffffffffffffffffffffffffffffff16610b5a612101565b73ffffffffffffffffffffffffffffffffffffffff1614610bbd57610b8681610b81612101565b611ddf565b610bbc576040517fcfb3b94200000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b5b826006600084815260200190815260200160002060000160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550818373ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff167f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b92560405160405180910390a4505050565b60088054610c7f90613382565b80601f0160208091040260200160405190810160405280929190818152602001828054610cab90613382565b8015610cf85780601f10610ccd57610100808354040283529160200191610cf8565b820191906000526020600020905b815481529060010190602001808311610cdb57829003601f168201915b505050505081565b6000610d0a612109565b6001546000540303905090565b600f5481565b610d25612024565b8160118481548110610d3a57610d39613631565b5b9060005260206000209060020201600001819055508060118481548110610d6457610d63613631565b5b906000526020600020906002020160010160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550505050565b6000610dc38261210e565b90508373ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff1614610e2a576040517fa114810000000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b600080610e36846121da565b91509150610e4c8187610e47612101565b612201565b610e9857610e6186610e5c612101565b611ddf565b610e97576040517f59c896be00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b5b600073ffffffffffffffffffffffffffffffffffffffff168573ffffffffffffffffffffffffffffffffffffffff1603610efe576040517fea553b3400000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b610f0b8686866001612245565b8015610f1657600082555b600560008773ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600081546001900391905081905550600560008673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206000815460010191905081905550610fe485610fc088888761224b565b7c020000000000000000000000000000000000000000000000000000000017612273565b600460008681526020019081526020016000208190555060007c020000000000000000000000000000000000000000000000000000000084160361106a5760006001850190506000600460008381526020019081526020016000205403611068576000548114611067578360046000838152602001908152602001600020819055505b5b505b838573ffffffffffffffffffffffffffffffffffffffff168773ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef60405160405180910390a46110d2868686600161229e565b505050505050565b600c6020528060005260406000206000915054906101000a900460ff1681565b6111158383836040518060200160405280600081525061193e565b505050565b611122612024565b80600c60008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060006101000a81548160ff0219169083151502179055505050565b60006111888261210e565b9050919050565b600080846040516020016111a391906136a8565b604051602081830303815290604052805190602001209050600061120b858580806020026020016040519081016040528093929190818152602001838360200280828437600081840152601f19601f82011690508083019250505050505050600d54846122a4565b905080925050509392505050565b60008073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff1603611280576040517f8f4eb60400000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b67ffffffffffffffff600560008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002054169050919050565b6112d9612024565b6112e360006122bb565b565b601181815481106112f557600080fd5b90600052602060002090600202016000915090508060000154908060010160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16905082565b6000600960009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16905090565b600d5481565b60606003805461137890613382565b80601f01602080910402602001604051908101604052809291908181526020018280546113a490613382565b80156113f15780601f106113c6576101008083540402835291602001916113f1565b820191906000526020600020905b8154815290600101906020018083116113d457829003601f168201915b5050505050905090565b600e5481565b611409612024565b601160405180604001604052808481526020018373ffffffffffffffffffffffffffffffffffffffff1681525090806001815401808255809150506001900390600052602060002090600202016000909190919091506000820151816000015560208201518160010160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555050505050565b80600760006114c3612101565b73ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060006101000a81548160ff0219169083151502179055508173ffffffffffffffffffffffffffffffffffffffff16611570612101565b73ffffffffffffffffffffffffffffffffffffffff167f17307eab39ab6107e8899845ad3d59bd9653f200f220920489ca2b5937696c31836040516115b59190612a5e565b60405180910390a35050565b600c60006115cd612381565b73ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060009054906101000a900460ff16611654576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161164b9061370f565b60405180910390fd5b6006811115611698576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161168f906137a1565b60405180910390fd5b806010819055507f8fd8f487a1d703cca2ded1250c8e7c8c1ae6f0b6cdc81883a282e0863a6d72836010546040516116d09190612d8d565b60405180910390a150565b6116e3612024565b6002600a5403611728576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161171f9061380d565b60405180910390fd5b6002600a81905550600060118054905011611778576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161176f9061389f565b60405180910390fd5b600047905060005b6011805490508110156118c65760006117be83601184815481106117a7576117a6613631565b5b9060005260206000209060020201600001546118d2565b90506000601183815481106117d6576117d5613631565b5b906000526020600020906002020160010160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168260405161182b906132d2565b60006040518083038185875af1925050503d8060008114611868576040519150601f19603f3d011682016040523d82523d6000602084013e61186d565b606091505b50509050806118b1576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016118a890613333565b60405180910390fd5b505080806118be906138ee565b915050611780565b50506001600a81905550565b60006064831015611918576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161190f90613982565b60405180910390fd5b600060648461192791906139d1565b905082816119359190613a02565b91505092915050565b611949848484610db8565b60008373ffffffffffffffffffffffffffffffffffffffff163b146119ab5761197484848484612389565b6119aa576040517fd1a57ed600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b5b50505050565b6002600a54036119f6576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016119ed9061380d565b60405180910390fd5b6002600a81905550600060105411611a43576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401611a3a90613a90565b60405180910390fd5b600b5483611a4f610d00565b611a599190613ab0565b1115611a9a576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401611a9190613b30565b60405180910390fd5b6000600e549050600160105403611b0657611abd611ab6612381565b848461118f565b611afc576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401611af390613b9c565b60405180910390fd5b600f549050611b2f565b600260105403611b2e57611b22611b1b612381565b848461118f565b15611b2d57600f5490505b5b5b8381611b3b9190613a02565b3414611b7c576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401611b7390613c2e565b60405180910390fd5b611b8d611b87612381565b856124d9565b7f58303c2ecff4b8a524f2f8ca478d8683b492b3419026f7199667453c2f15412a611bb6612381565b34611bbf612381565b87604051611bd09493929190613c4e565b60405180910390a1506001600a81905550505050565b60105481565b600c6000611bf8612381565b73ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060009054906101000a900460ff16611c7f576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401611c769061370f565b60405180910390fd5b80600d8190555050565b6060611c94826120a2565b611cca576040517fa14c4b5000000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6000611cd46124f7565b90506000815103611cf45760405180602001604052806000815250611d1f565b80611cfe84612589565b604051602001611d0f929190613ccf565b6040516020818303038152906040525b915050919050565b611d2f612024565b600b5482611d3b610d00565b611d459190613ab0565b1115611d86576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401611d7d90613d3f565b60405180910390fd5b611d9081836124d9565b7f58303c2ecff4b8a524f2f8ca478d8683b492b3419026f7199667453c2f15412a611db9612381565b60008385604051611dcd9493929190613d9a565b60405180910390a15050565b600b5481565b6000600760008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060009054906101000a900460ff16905092915050565b611e7b612024565b600073ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff1603611eea576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401611ee190613e51565b60405180910390fd5b611ef3816122bb565b50565b611efe612024565b60116001601180549050611f129190613e71565b81548110611f2357611f22613631565b5b906000526020600020906002020160118281548110611f4557611f44613631565b5b9060005260206000209060020201600082015481600001556001820160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff168160010160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055509050506011805480611fd957611fd8613ea5565b5b60019003818190600052602060002090600202016000808201600090556001820160006101000a81549073ffffffffffffffffffffffffffffffffffffffff02191690555050905550565b61202c612381565b73ffffffffffffffffffffffffffffffffffffffff1661204a611339565b73ffffffffffffffffffffffffffffffffffffffff16146120a0576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161209790613f20565b60405180910390fd5b565b6000816120ad612109565b111580156120bc575060005482105b80156120fa575060007c0100000000000000000000000000000000000000000000000000000000600460008581526020019081526020016000205416145b9050919050565b600033905090565b600090565b6000808290508061211d612109565b116121a3576000548110156121a25760006004600083815260200190815260200160002054905060007c01000000000000000000000000000000000000000000000000000000008216036121a0575b6000810361219657600460008360019003935083815260200190815260200160002054905061216c565b80925050506121d5565b505b5b6040517fdf2d9b4200000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b919050565b60008060006006600085815260200190815260200160002090508092508254915050915091565b600073ffffffffffffffffffffffffffffffffffffffff8316925073ffffffffffffffffffffffffffffffffffffffff821691508382148383141790509392505050565b50505050565b60008060e883901c905060e86122628686846125d9565b62ffffff16901b9150509392505050565b600073ffffffffffffffffffffffffffffffffffffffff83169250814260a01b178317905092915050565b50505050565b6000826122b185846125e2565b1490509392505050565b6000600960009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16905081600960006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055508173ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff167f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e060405160405180910390a35050565b600033905090565b60008373ffffffffffffffffffffffffffffffffffffffff1663150b7a026123af612101565b8786866040518563ffffffff1660e01b81526004016123d19493929190613f95565b6020604051808303816000875af192505050801561240d57506040513d601f19601f8201168201806040525081019061240a9190613ff6565b60015b612486573d806000811461243d576040519150601f19603f3d011682016040523d82523d6000602084013e612442565b606091505b50600081510361247e576040517fd1a57ed600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b805181602001fd5b63150b7a0260e01b7bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916817bffffffffffffffffffffffffffffffffffffffffffffffffffffffff191614915050949350505050565b6124f3828260405180602001604052806000815250612657565b5050565b60606008805461250690613382565b80601f016020809104026020016040519081016040528092919081815260200182805461253290613382565b801561257f5780601f106125545761010080835404028352916020019161257f565b820191906000526020600020905b81548152906001019060200180831161256257829003601f168201915b5050505050905090565b606060a060405101806040526020810391506000825281835b6001156125c457600184039350600a81066030018453600a81049050806125a2575b50828103602084039350808452505050919050565b60009392505050565b60008082905060005b845181101561264c57600085828151811061260957612608613631565b5b6020026020010151905080831161262b5761262483826126f4565b9250612638565b61263581846126f4565b92505b508080612644906138ee565b9150506125eb565b508091505092915050565b612661838361270b565b60008373ffffffffffffffffffffffffffffffffffffffff163b146126ef57600080549050600083820390505b6126a16000868380600101945086612389565b6126d7576040517fd1a57ed600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b81811061268e5781600054146126ec57600080fd5b50505b505050565b600082600052816020526040600020905092915050565b6000805490506000820361274b576040517fb562e8dd00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6127586000848385612245565b600160406001901b178202600560008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600082825401925050819055506127cf836127c0600086600061224b565b6127c9856128c6565b17612273565b6004600083815260200190815260200160002081905550600080838301905073ffffffffffffffffffffffffffffffffffffffff85169150828260007fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef600080a4600183015b81811461287057808360007fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef600080a4600181019050612835565b50600082036128ab576040517f2e07630000000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b8060008190555050506128c1600084838561229e565b505050565b60006001821460e11b9050919050565b6000604051905090565b600080fd5b600080fd5b6000819050919050565b6128fd816128ea565b811461290857600080fd5b50565b60008135905061291a816128f4565b92915050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b600061294b82612920565b9050919050565b61295b81612940565b811461296657600080fd5b50565b60008135905061297881612952565b92915050565b60008060408385031215612995576129946128e0565b5b60006129a38582860161290b565b92505060206129b485828601612969565b9150509250929050565b60007fffffffff0000000000000000000000000000000000000000000000000000000082169050919050565b6129f3816129be565b81146129fe57600080fd5b50565b600081359050612a10816129ea565b92915050565b600060208284031215612a2c57612a2b6128e0565b5b6000612a3a84828501612a01565b91505092915050565b60008115159050919050565b612a5881612a43565b82525050565b6000602082019050612a736000830184612a4f565b92915050565b600080fd5b600080fd5b6000601f19601f8301169050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b612acc82612a83565b810181811067ffffffffffffffff82111715612aeb57612aea612a94565b5b80604052505050565b6000612afe6128d6565b9050612b0a8282612ac3565b919050565b600067ffffffffffffffff821115612b2a57612b29612a94565b5b612b3382612a83565b9050602081019050919050565b82818337600083830152505050565b6000612b62612b5d84612b0f565b612af4565b905082815260208101848484011115612b7e57612b7d612a7e565b5b612b89848285612b40565b509392505050565b600082601f830112612ba657612ba5612a79565b5b8135612bb6848260208601612b4f565b91505092915050565b600060208284031215612bd557612bd46128e0565b5b600082013567ffffffffffffffff811115612bf357612bf26128e5565b5b612bff84828501612b91565b91505092915050565b600081519050919050565b600082825260208201905092915050565b60005b83811015612c42578082015181840152602081019050612c27565b60008484015250505050565b6000612c5982612c08565b612c638185612c13565b9350612c73818560208601612c24565b612c7c81612a83565b840191505092915050565b60006020820190508181036000830152612ca18184612c4e565b905092915050565b600060208284031215612cbf57612cbe6128e0565b5b6000612ccd8482850161290b565b91505092915050565b6000612ce182612920565b9050919050565b612cf181612cd6565b82525050565b6000602082019050612d0c6000830184612ce8565b92915050565b612d1b81612cd6565b8114612d2657600080fd5b50565b600081359050612d3881612d12565b92915050565b60008060408385031215612d5557612d546128e0565b5b6000612d6385828601612d29565b9250506020612d748582860161290b565b9150509250929050565b612d87816128ea565b82525050565b6000602082019050612da26000830184612d7e565b92915050565b600080600060608486031215612dc157612dc06128e0565b5b6000612dcf8682870161290b565b9350506020612de08682870161290b565b9250506040612df186828701612969565b9150509250925092565b600080600060608486031215612e1457612e136128e0565b5b6000612e2286828701612d29565b9350506020612e3386828701612d29565b9250506040612e448682870161290b565b9150509250925092565b600060208284031215612e6457612e636128e0565b5b6000612e7284828501612d29565b91505092915050565b612e8481612a43565b8114612e8f57600080fd5b50565b600081359050612ea181612e7b565b92915050565b60008060408385031215612ebe57612ebd6128e0565b5b6000612ecc85828601612d29565b9250506020612edd85828601612e92565b9150509250929050565b600080fd5b600080fd5b60008083601f840112612f0757612f06612a79565b5b8235905067ffffffffffffffff811115612f2457612f23612ee7565b5b602083019150836020820283011115612f4057612f3f612eec565b5b9250929050565b600080600060408486031215612f6057612f5f6128e0565b5b6000612f6e86828701612d29565b935050602084013567ffffffffffffffff811115612f8f57612f8e6128e5565b5b612f9b86828701612ef1565b92509250509250925092565b6000604082019050612fbc6000830185612d7e565b612fc96020830184612ce8565b9392505050565b6000819050919050565b612fe381612fd0565b82525050565b6000602082019050612ffe6000830184612fda565b92915050565b6000806040838503121561301b5761301a6128e0565b5b60006130298582860161290b565b925050602061303a8582860161290b565b9150509250929050565b600067ffffffffffffffff82111561305f5761305e612a94565b5b61306882612a83565b9050602081019050919050565b600061308861308384613044565b612af4565b9050828152602081018484840111156130a4576130a3612a7e565b5b6130af848285612b40565b509392505050565b600082601f8301126130cc576130cb612a79565b5b81356130dc848260208601613075565b91505092915050565b600080600080608085870312156130ff576130fe6128e0565b5b600061310d87828801612d29565b945050602061311e87828801612d29565b935050604061312f8782880161290b565b925050606085013567ffffffffffffffff8111156131505761314f6128e5565b5b61315c878288016130b7565b91505092959194509250565b600080600060408486031215613181576131806128e0565b5b600061318f8682870161290b565b935050602084013567ffffffffffffffff8111156131b0576131af6128e5565b5b6131bc86828701612ef1565b92509250509250925092565b6131d181612fd0565b81146131dc57600080fd5b50565b6000813590506131ee816131c8565b92915050565b60006020828403121561320a576132096128e0565b5b6000613218848285016131df565b91505092915050565b60008060408385031215613238576132376128e0565b5b60006132468582860161290b565b925050602061325785828601612d29565b9150509250929050565b60008060408385031215613278576132776128e0565b5b600061328685828601612d29565b925050602061329785828601612d29565b9150509250929050565b600081905092915050565b50565b60006132bc6000836132a1565b91506132c7826132ac565b600082019050919050565b60006132dd826132af565b9150819050919050565b7f5472616e73666572206661696c00000000000000000000000000000000000000600082015250565b600061331d600d83612c13565b9150613328826132e7565b602082019050919050565b6000602082019050818103600083015261334c81613310565b9050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b6000600282049050600182168061339a57607f821691505b6020821081036133ad576133ac613353565b5b50919050565b60008190508160005260206000209050919050565b60006020601f8301049050919050565b600082821b905092915050565b6000600883026134157fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff826133d8565b61341f86836133d8565b95508019841693508086168417925050509392505050565b6000819050919050565b600061345c613457613452846128ea565b613437565b6128ea565b9050919050565b6000819050919050565b61347683613441565b61348a61348282613463565b8484546133e5565b825550505050565b600090565b61349f613492565b6134aa81848461346d565b505050565b5b818110156134ce576134c3600082613497565b6001810190506134b0565b5050565b601f821115613513576134e4816133b3565b6134ed846133c8565b810160208510156134fc578190505b613510613508856133c8565b8301826134af565b50505b505050565b600082821c905092915050565b600061353660001984600802613518565b1980831691505092915050565b600061354f8383613525565b9150826002028217905092915050565b61356882612c08565b67ffffffffffffffff81111561358157613580612a94565b5b61358b8254613382565b6135968282856134d2565b600060209050601f8311600181146135c957600084156135b7578287015190505b6135c18582613543565b865550613629565b601f1984166135d7866133b3565b60005b828110156135ff578489015182556001820191506020850194506020810190506135da565b8683101561361c5784890151613618601f891682613525565b8355505b6001600288020188555050505b505050505050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b60008160601b9050919050565b600061367882613660565b9050919050565b600061368a8261366d565b9050919050565b6136a261369d82612cd6565b61367f565b82525050565b60006136b48284613691565b60148201915081905092915050565b7f4f6e6c7941646d696e3a2073656e646572206973206e6f742061646d696e0000600082015250565b60006136f9601e83612c13565b9150613704826136c3565b602082019050919050565b60006020820190508181036000830152613728816136ec565b9050919050565b7f53746174652063616e206f6e6c792062652066726f6d203020746f20362c206960008201527f6e636c7573697665000000000000000000000000000000000000000000000000602082015250565b600061378b602883612c13565b91506137968261372f565b604082019050919050565b600060208201905081810360008301526137ba8161377e565b9050919050565b7f5265656e7472616e637947756172643a207265656e7472616e742063616c6c00600082015250565b60006137f7601f83612c13565b9150613802826137c1565b602082019050919050565b60006020820190508181036000830152613826816137ea565b9050919050565b7f4e46543a206e6f2077616c6c65747320696e697469616c697a656420666f722060008201527f7061796d656e7400000000000000000000000000000000000000000000000000602082015250565b6000613889602783612c13565b91506138948261382d565b604082019050919050565b600060208201905081810360008301526138b88161387c565b9050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b60006138f9826128ea565b91507fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff820361392b5761392a6138bf565b5b600182019050919050565b7f56616c7565206d757374206265203e3d20313030000000000000000000000000600082015250565b600061396c601483612c13565b915061397782613936565b602082019050919050565b6000602082019050818103600083015261399b8161395f565b9050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601260045260246000fd5b60006139dc826128ea565b91506139e7836128ea565b9250826139f7576139f66139a2565b5b828204905092915050565b6000613a0d826128ea565b9150613a18836128ea565b9250828202613a26816128ea565b91508282048414831517613a3d57613a3c6138bf565b5b5092915050565b7f53616c6520697320636c6f736564000000000000000000000000000000000000600082015250565b6000613a7a600e83612c13565b9150613a8582613a44565b602082019050919050565b60006020820190508181036000830152613aa981613a6d565b9050919050565b6000613abb826128ea565b9150613ac6836128ea565b9250828201905080821115613ade57613add6138bf565b5b92915050565b7f4e46543a2065786365656473206d617820737570706c79000000000000000000600082015250565b6000613b1a601783612c13565b9150613b2582613ae4565b602082019050919050565b60006020820190508181036000830152613b4981613b0d565b9050919050565b7f4e46543a20416c6c6f77206c697374206f6e6c79000000000000000000000000600082015250565b6000613b86601483612c13565b9150613b9182613b50565b602082019050919050565b60006020820190508181036000830152613bb581613b79565b9050919050565b7f4e46543a20696e636f727265637420616d6f756e74206f66204554482073656e60008201527f7400000000000000000000000000000000000000000000000000000000000000602082015250565b6000613c18602183612c13565b9150613c2382613bbc565b604082019050919050565b60006020820190508181036000830152613c4781613c0b565b9050919050565b6000608082019050613c636000830187612ce8565b613c706020830186612d7e565b613c7d6040830185612ce8565b613c8a6060830184612d7e565b95945050505050565b600081905092915050565b6000613ca982612c08565b613cb38185613c93565b9350613cc3818560208601612c24565b80840191505092915050565b6000613cdb8285613c9e565b9150613ce78284613c9e565b91508190509392505050565b7f65786365656473206d617820737570706c790000000000000000000000000000600082015250565b6000613d29601283612c13565b9150613d3482613cf3565b602082019050919050565b60006020820190508181036000830152613d5881613d1c565b9050919050565b6000819050919050565b6000613d84613d7f613d7a84613d5f565b613437565b6128ea565b9050919050565b613d9481613d69565b82525050565b6000608082019050613daf6000830187612ce8565b613dbc6020830186613d8b565b613dc96040830185612ce8565b613dd66060830184612d7e565b95945050505050565b7f4f776e61626c653a206e6577206f776e657220697320746865207a65726f206160008201527f6464726573730000000000000000000000000000000000000000000000000000602082015250565b6000613e3b602683612c13565b9150613e4682613ddf565b604082019050919050565b60006020820190508181036000830152613e6a81613e2e565b9050919050565b6000613e7c826128ea565b9150613e87836128ea565b9250828203905081811115613e9f57613e9e6138bf565b5b92915050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052603160045260246000fd5b7f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e6572600082015250565b6000613f0a602083612c13565b9150613f1582613ed4565b602082019050919050565b60006020820190508181036000830152613f3981613efd565b9050919050565b600081519050919050565b600082825260208201905092915050565b6000613f6782613f40565b613f718185613f4b565b9350613f81818560208601612c24565b613f8a81612a83565b840191505092915050565b6000608082019050613faa6000830187612ce8565b613fb76020830186612ce8565b613fc46040830185612d7e565b8181036060830152613fd68184613f5c565b905095945050505050565b600081519050613ff0816129ea565b92915050565b60006020828403121561400c5761400b6128e0565b5b600061401a84828501613fe1565b9150509291505056fea26469706673582212209ec6f240a197aba44a719ba7fbd2d038bb00bde5183cf1f77b7b24b2fdb6c12d64736f6c63430008110033"