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

export const nft_bytecode = "0x60806040523480156200001157600080fd5b50604051620048fa380380620048fa8339818101604052810190620000379190620004ab565b848481600290816200004a9190620007b2565b5080600390816200005c9190620007b2565b506200006d620000e460201b60201c565b60008190555050506200009562000089620000e960201b60201c565b620000f160201b60201c565b6001600a8190555082600b8190555081600e8190555080600f81905550620000d973652de12310c5df76844211e5ab0fe708f615068c6001620001b760201b60201c565b50505050506200091c565b600090565b600033905090565b6000600960009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16905081600960006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055508173ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff167f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e060405160405180910390a35050565b620001c76200022260201b60201c565b80600c60008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060006101000a81548160ff0219169083151502179055505050565b62000232620000e960201b60201c565b73ffffffffffffffffffffffffffffffffffffffff1662000258620002b360201b60201c565b73ffffffffffffffffffffffffffffffffffffffff1614620002b1576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401620002a890620008fa565b60405180910390fd5b565b6000600960009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16905090565b6000604051905090565b600080fd5b600080fd5b600080fd5b600080fd5b6000601f19601f8301169050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b6200034682620002fb565b810181811067ffffffffffffffff821117156200036857620003676200030c565b5b80604052505050565b60006200037d620002dd565b90506200038b82826200033b565b919050565b600067ffffffffffffffff821115620003ae57620003ad6200030c565b5b620003b982620002fb565b9050602081019050919050565b60005b83811015620003e6578082015181840152602081019050620003c9565b60008484015250505050565b600062000409620004038462000390565b62000371565b905082815260208101848484011115620004285762000427620002f6565b5b62000435848285620003c6565b509392505050565b600082601f830112620004555762000454620002f1565b5b815162000467848260208601620003f2565b91505092915050565b6000819050919050565b620004858162000470565b81146200049157600080fd5b50565b600081519050620004a5816200047a565b92915050565b600080600080600060a08688031215620004ca57620004c9620002e7565b5b600086015167ffffffffffffffff811115620004eb57620004ea620002ec565b5b620004f9888289016200043d565b955050602086015167ffffffffffffffff8111156200051d576200051c620002ec565b5b6200052b888289016200043d565b94505060406200053e8882890162000494565b9350506060620005518882890162000494565b9250506080620005648882890162000494565b9150509295509295909350565b600081519050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b60006002820490506001821680620005c457607f821691505b602082108103620005da57620005d96200057c565b5b50919050565b60008190508160005260206000209050919050565b60006020601f8301049050919050565b600082821b905092915050565b600060088302620006447fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff8262000605565b62000650868362000605565b95508019841693508086168417925050509392505050565b6000819050919050565b6000620006936200068d620006878462000470565b62000668565b62000470565b9050919050565b6000819050919050565b620006af8362000672565b620006c7620006be826200069a565b84845462000612565b825550505050565b600090565b620006de620006cf565b620006eb818484620006a4565b505050565b5b81811015620007135762000707600082620006d4565b600181019050620006f1565b5050565b601f82111562000762576200072c81620005e0565b6200073784620005f5565b8101602085101562000747578190505b6200075f6200075685620005f5565b830182620006f0565b50505b505050565b600082821c905092915050565b6000620007876000198460080262000767565b1980831691505092915050565b6000620007a2838362000774565b9150826002028217905092915050565b620007bd8262000571565b67ffffffffffffffff811115620007d957620007d86200030c565b5b620007e58254620005ab565b620007f282828562000717565b600060209050601f8311600181146200082a576000841562000815578287015190505b62000821858262000794565b86555062000891565b601f1984166200083a86620005e0565b60005b8281101562000864578489015182556001820191506020850194506020810190506200083d565b8683101562000884578489015162000880601f89168262000774565b8355505b6001600288020188555050505b505050505050565b600082825260208201905092915050565b7f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e6572600082015250565b6000620008e260208362000899565b9150620008ef82620008aa565b602082019050919050565b600060208201905081810360008301526200091581620008d3565b9050919050565b613fce806200092c6000396000f3fe6080604052600436106102245760003560e01c80638da5cb5b11610123578063b88d4fde116100ab578063d52c57e01161006f578063d52c57e0146107d4578063d5abeb01146107fd578063e985e9c514610828578063f2fde38b14610865578063f93300f01461088e57610224565b8063b88d4fde1461070b578063ba41b0c614610727578063c19d93fb14610743578063c2218fdd1461076e578063c87b56dd1461079757610224565b8063a192cf4a116100f2578063a192cf4a1461063c578063a22cb46514610665578063a9e966b71461068e578063af573db2146106b7578063b71051e2146106ce57610224565b80638da5cb5b1461059057806394a81c70146105bb57806395d89b41146105e6578063a035b1fe1461061157610224565b80631d1e715b116101b15780636352211e116101755780636352211e1461048457806367762169146104c157806370a08231146104fe578063715018a61461053b5780637ad71f721461055257610224565b80631d1e715b146103bd57806323b872dd146103e657806324d7806c1461040257806342842e0e1461043f5780634b0bddd21461045b57610224565b8063081812fc116101f8578063081812fc146102e3578063095ea7b3146103205780631141d7de1461033c57806318160ddd146103675780631b8926a91461039257610224565b8062f714ce1461022957806301ffc9a71461025257806302fe53051461028f57806306fdde03146102b8575b600080fd5b34801561023557600080fd5b50610250600480360381019061024b91906128f3565b6108b7565b005b34801561025e57600080fd5b506102796004803603810190610274919061298b565b610970565b60405161028691906129d3565b60405180910390f35b34801561029b57600080fd5b506102b660048036038101906102b19190612b34565b610a02565b005b3480156102c457600080fd5b506102cd610a1d565b6040516102da9190612bfc565b60405180910390f35b3480156102ef57600080fd5b5061030a60048036038101906103059190612c1e565b610aaf565b6040516103179190612c6c565b60405180910390f35b61033a60048036038101906103359190612cb3565b610b2e565b005b34801561034857600080fd5b50610351610c72565b60405161035e9190612bfc565b60405180910390f35b34801561037357600080fd5b5061037c610d00565b6040516103899190612d02565b60405180910390f35b34801561039e57600080fd5b506103a7610d17565b6040516103b49190612d02565b60405180910390f35b3480156103c957600080fd5b506103e460048036038101906103df9190612d1d565b610d1d565b005b61040060048036038101906103fb9190612d70565b610db8565b005b34801561040e57600080fd5b5061042960048036038101906104249190612dc3565b6110da565b60405161043691906129d3565b60405180910390f35b61045960048036038101906104549190612d70565b6110fa565b005b34801561046757600080fd5b50610482600480360381019061047d9190612e1c565b61111a565b005b34801561049057600080fd5b506104ab60048036038101906104a69190612c1e565b61117d565b6040516104b89190612c6c565b60405180910390f35b3480156104cd57600080fd5b506104e860048036038101906104e39190612ebc565b61118f565b6040516104f591906129d3565b60405180910390f35b34801561050a57600080fd5b5061052560048036038101906105209190612dc3565b611219565b6040516105329190612d02565b60405180910390f35b34801561054757600080fd5b506105506112d1565b005b34801561055e57600080fd5b5061057960048036038101906105749190612c1e565b6112e5565b604051610587929190612f1c565b60405180910390f35b34801561059c57600080fd5b506105a5611339565b6040516105b29190612c6c565b60405180910390f35b3480156105c757600080fd5b506105d0611363565b6040516105dd9190612f5e565b60405180910390f35b3480156105f257600080fd5b506105fb611369565b6040516106089190612bfc565b60405180910390f35b34801561061d57600080fd5b506106266113fb565b6040516106339190612d02565b60405180910390f35b34801561064857600080fd5b50610663600480360381019061065e91906128f3565b611401565b005b34801561067157600080fd5b5061068c60048036038101906106879190612e1c565b6114b6565b005b34801561069a57600080fd5b506106b560048036038101906106b09190612c1e565b6115c1565b005b3480156106c357600080fd5b506106cc611650565b005b3480156106da57600080fd5b506106f560048036038101906106f09190612f79565b611847565b6040516107029190612d02565b60405180910390f35b6107256004803603810190610720919061305a565b6118b3565b005b610741600480360381019061073c91906130dd565b611926565b005b34801561074f57600080fd5b50610758611b5b565b6040516107659190612d02565b60405180910390f35b34801561077a57600080fd5b5061079560048036038101906107909190613169565b611b61565b005b3480156107a357600080fd5b506107be60048036038101906107b99190612c1e565b611bfe565b6040516107cb9190612bfc565b60405180910390f35b3480156107e057600080fd5b506107fb60048036038101906107f69190613196565b611c9c565b005b34801561080957600080fd5b50610812611d4e565b60405161081f9190612d02565b60405180910390f35b34801561083457600080fd5b5061084f600480360381019061084a91906131d6565b611d54565b60405161085c91906129d3565b60405180910390f35b34801561087157600080fd5b5061088c60048036038101906108879190612dc3565b611de8565b005b34801561089a57600080fd5b506108b560048036038101906108b09190612c1e565b611e6b565b005b6108bf611f99565b60008173ffffffffffffffffffffffffffffffffffffffff16836040516108e590613247565b60006040518083038185875af1925050503d8060008114610922576040519150601f19603f3d011682016040523d82523d6000602084013e610927565b606091505b505090508061096b576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610962906132a8565b60405180910390fd5b505050565b60006301ffc9a760e01b827bffffffffffffffffffffffffffffffffffffffffffffffffffffffff191614806109cb57506380ac58cd60e01b827bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916145b806109fb5750635b5e139f60e01b827bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916145b9050919050565b610a0a611f99565b8060089081610a1991906134d4565b5050565b606060028054610a2c906132f7565b80601f0160208091040260200160405190810160405280929190818152602001828054610a58906132f7565b8015610aa55780601f10610a7a57610100808354040283529160200191610aa5565b820191906000526020600020905b815481529060010190602001808311610a8857829003601f168201915b5050505050905090565b6000610aba82612017565b610af0576040517fcf4700e400000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6006600083815260200190815260200160002060000160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff169050919050565b6000610b398261117d565b90508073ffffffffffffffffffffffffffffffffffffffff16610b5a612076565b73ffffffffffffffffffffffffffffffffffffffff1614610bbd57610b8681610b81612076565b611d54565b610bbc576040517fcfb3b94200000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b5b826006600084815260200190815260200160002060000160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550818373ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff167f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b92560405160405180910390a4505050565b60088054610c7f906132f7565b80601f0160208091040260200160405190810160405280929190818152602001828054610cab906132f7565b8015610cf85780601f10610ccd57610100808354040283529160200191610cf8565b820191906000526020600020905b815481529060010190602001808311610cdb57829003601f168201915b505050505081565b6000610d0a61207e565b6001546000540303905090565b600f5481565b610d25611f99565b8160118481548110610d3a57610d396135a6565b5b9060005260206000209060020201600001819055508060118481548110610d6457610d636135a6565b5b906000526020600020906002020160010160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550505050565b6000610dc382612083565b90508373ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff1614610e2a576040517fa114810000000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b600080610e368461214f565b91509150610e4c8187610e47612076565b612176565b610e9857610e6186610e5c612076565b611d54565b610e97576040517f59c896be00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b5b600073ffffffffffffffffffffffffffffffffffffffff168573ffffffffffffffffffffffffffffffffffffffff1603610efe576040517fea553b3400000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b610f0b86868660016121ba565b8015610f1657600082555b600560008773ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600081546001900391905081905550600560008673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206000815460010191905081905550610fe485610fc08888876121c0565b7c0200000000000000000000000000000000000000000000000000000000176121e8565b600460008681526020019081526020016000208190555060007c020000000000000000000000000000000000000000000000000000000084160361106a5760006001850190506000600460008381526020019081526020016000205403611068576000548114611067578360046000838152602001908152602001600020819055505b5b505b838573ffffffffffffffffffffffffffffffffffffffff168773ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef60405160405180910390a46110d28686866001612213565b505050505050565b600c6020528060005260406000206000915054906101000a900460ff1681565b611115838383604051806020016040528060008152506118b3565b505050565b611122611f99565b80600c60008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060006101000a81548160ff0219169083151502179055505050565b600061118882612083565b9050919050565b600080846040516020016111a3919061361d565b604051602081830303815290604052805190602001209050600061120b858580806020026020016040519081016040528093929190818152602001838360200280828437600081840152601f19601f82011690508083019250505050505050600d5484612219565b905080925050509392505050565b60008073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff1603611280576040517f8f4eb60400000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b67ffffffffffffffff600560008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002054169050919050565b6112d9611f99565b6112e36000612230565b565b601181815481106112f557600080fd5b90600052602060002090600202016000915090508060000154908060010160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16905082565b6000600960009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16905090565b600d5481565b606060038054611378906132f7565b80601f01602080910402602001604051908101604052809291908181526020018280546113a4906132f7565b80156113f15780601f106113c6576101008083540402835291602001916113f1565b820191906000526020600020905b8154815290600101906020018083116113d457829003601f168201915b5050505050905090565b600e5481565b611409611f99565b601160405180604001604052808481526020018373ffffffffffffffffffffffffffffffffffffffff1681525090806001815401808255809150506001900390600052602060002090600202016000909190919091506000820151816000015560208201518160010160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555050505050565b80600760006114c3612076565b73ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060006101000a81548160ff0219169083151502179055508173ffffffffffffffffffffffffffffffffffffffff16611570612076565b73ffffffffffffffffffffffffffffffffffffffff167f17307eab39ab6107e8899845ad3d59bd9653f200f220920489ca2b5937696c31836040516115b591906129d3565b60405180910390a35050565b6115c9611f99565b600681111561160d576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401611604906136aa565b60405180910390fd5b806010819055507f8fd8f487a1d703cca2ded1250c8e7c8c1ae6f0b6cdc81883a282e0863a6d72836010546040516116459190612d02565b60405180910390a150565b611658611f99565b6002600a540361169d576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161169490613716565b60405180910390fd5b6002600a819055506000601180549050116116ed576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016116e4906137a8565b60405180910390fd5b600047905060005b60118054905081101561183b576000611733836011848154811061171c5761171b6135a6565b5b906000526020600020906002020160000154611847565b905060006011838154811061174b5761174a6135a6565b5b906000526020600020906002020160010160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16826040516117a090613247565b60006040518083038185875af1925050503d80600081146117dd576040519150601f19603f3d011682016040523d82523d6000602084013e6117e2565b606091505b5050905080611826576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161181d906132a8565b60405180910390fd5b50508080611833906137f7565b9150506116f5565b50506001600a81905550565b6000606483101561188d576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016118849061388b565b60405180910390fd5b600060648461189c91906138da565b905082816118aa919061390b565b91505092915050565b6118be848484610db8565b60008373ffffffffffffffffffffffffffffffffffffffff163b14611920576118e9848484846122f6565b61191f576040517fd1a57ed600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b5b50505050565b6002600a540361196b576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161196290613716565b60405180910390fd5b6002600a819055506000601054116119b8576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016119af90613999565b60405180910390fd5b600b54836119c4610d00565b6119ce91906139b9565b1115611a0f576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401611a0690613a39565b60405180910390fd5b6000600e549050600160105403611a7b57611a32611a2b612446565b848461118f565b611a71576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401611a6890613aa5565b60405180910390fd5b600f549050611aa4565b600260105403611aa357611a97611a90612446565b848461118f565b15611aa257600f5490505b5b5b8381611ab0919061390b565b3414611af1576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401611ae890613b37565b60405180910390fd5b611b02611afc612446565b8561244e565b7f58303c2ecff4b8a524f2f8ca478d8683b492b3419026f7199667453c2f15412a611b2b612446565b34611b34612446565b87604051611b459493929190613b57565b60405180910390a1506001600a81905550505050565b60105481565b600c6000611b6d612446565b73ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060009054906101000a900460ff16611bf4576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401611beb90613be8565b60405180910390fd5b80600d8190555050565b6060611c0982612017565b611c3f576040517fa14c4b5000000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6000611c4961246c565b90506000815103611c695760405180602001604052806000815250611c94565b80611c73846124fe565b604051602001611c84929190613c44565b6040516020818303038152906040525b915050919050565b611ca4611f99565b600b5482611cb0610d00565b611cba91906139b9565b1115611cfb576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401611cf290613cb4565b60405180910390fd5b611d05818361244e565b7f58303c2ecff4b8a524f2f8ca478d8683b492b3419026f7199667453c2f15412a611d2e612446565b60008385604051611d429493929190613d0f565b60405180910390a15050565b600b5481565b6000600760008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060009054906101000a900460ff16905092915050565b611df0611f99565b600073ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff1603611e5f576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401611e5690613dc6565b60405180910390fd5b611e6881612230565b50565b611e73611f99565b60116001601180549050611e879190613de6565b81548110611e9857611e976135a6565b5b906000526020600020906002020160118281548110611eba57611eb96135a6565b5b9060005260206000209060020201600082015481600001556001820160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff168160010160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055509050506011805480611f4e57611f4d613e1a565b5b60019003818190600052602060002090600202016000808201600090556001820160006101000a81549073ffffffffffffffffffffffffffffffffffffffff02191690555050905550565b611fa1612446565b73ffffffffffffffffffffffffffffffffffffffff16611fbf611339565b73ffffffffffffffffffffffffffffffffffffffff1614612015576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161200c90613e95565b60405180910390fd5b565b60008161202261207e565b11158015612031575060005482105b801561206f575060007c0100000000000000000000000000000000000000000000000000000000600460008581526020019081526020016000205416145b9050919050565b600033905090565b600090565b6000808290508061209261207e565b11612118576000548110156121175760006004600083815260200190815260200160002054905060007c0100000000000000000000000000000000000000000000000000000000821603612115575b6000810361210b5760046000836001900393508381526020019081526020016000205490506120e1565b809250505061214a565b505b5b6040517fdf2d9b4200000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b919050565b60008060006006600085815260200190815260200160002090508092508254915050915091565b600073ffffffffffffffffffffffffffffffffffffffff8316925073ffffffffffffffffffffffffffffffffffffffff821691508382148383141790509392505050565b50505050565b60008060e883901c905060e86121d786868461254e565b62ffffff16901b9150509392505050565b600073ffffffffffffffffffffffffffffffffffffffff83169250814260a01b178317905092915050565b50505050565b6000826122268584612557565b1490509392505050565b6000600960009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16905081600960006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055508173ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff167f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e060405160405180910390a35050565b60008373ffffffffffffffffffffffffffffffffffffffff1663150b7a0261231c612076565b8786866040518563ffffffff1660e01b815260040161233e9493929190613f0a565b6020604051808303816000875af192505050801561237a57506040513d601f19601f820116820180604052508101906123779190613f6b565b60015b6123f3573d80600081146123aa576040519150601f19603f3d011682016040523d82523d6000602084013e6123af565b606091505b5060008151036123eb576040517fd1a57ed600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b805181602001fd5b63150b7a0260e01b7bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916817bffffffffffffffffffffffffffffffffffffffffffffffffffffffff191614915050949350505050565b600033905090565b6124688282604051806020016040528060008152506125cc565b5050565b60606008805461247b906132f7565b80601f01602080910402602001604051908101604052809291908181526020018280546124a7906132f7565b80156124f45780601f106124c9576101008083540402835291602001916124f4565b820191906000526020600020905b8154815290600101906020018083116124d757829003601f168201915b5050505050905090565b606060a060405101806040526020810391506000825281835b60011561253957600184039350600a81066030018453600a8104905080612517575b50828103602084039350808452505050919050565b60009392505050565b60008082905060005b84518110156125c157600085828151811061257e5761257d6135a6565b5b602002602001015190508083116125a0576125998382612669565b92506125ad565b6125aa8184612669565b92505b5080806125b9906137f7565b915050612560565b508091505092915050565b6125d68383612680565b60008373ffffffffffffffffffffffffffffffffffffffff163b1461266457600080549050600083820390505b61261660008683806001019450866122f6565b61264c576040517fd1a57ed600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b81811061260357816000541461266157600080fd5b50505b505050565b600082600052816020526040600020905092915050565b600080549050600082036126c0576040517fb562e8dd00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6126cd60008483856121ba565b600160406001901b178202600560008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600082825401925050819055506127448361273560008660006121c0565b61273e8561283b565b176121e8565b6004600083815260200190815260200160002081905550600080838301905073ffffffffffffffffffffffffffffffffffffffff85169150828260007fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef600080a4600183015b8181146127e557808360007fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef600080a46001810190506127aa565b5060008203612820576040517f2e07630000000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b8060008190555050506128366000848385612213565b505050565b60006001821460e11b9050919050565b6000604051905090565b600080fd5b600080fd5b6000819050919050565b6128728161285f565b811461287d57600080fd5b50565b60008135905061288f81612869565b92915050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b60006128c082612895565b9050919050565b6128d0816128b5565b81146128db57600080fd5b50565b6000813590506128ed816128c7565b92915050565b6000806040838503121561290a57612909612855565b5b600061291885828601612880565b9250506020612929858286016128de565b9150509250929050565b60007fffffffff0000000000000000000000000000000000000000000000000000000082169050919050565b61296881612933565b811461297357600080fd5b50565b6000813590506129858161295f565b92915050565b6000602082840312156129a1576129a0612855565b5b60006129af84828501612976565b91505092915050565b60008115159050919050565b6129cd816129b8565b82525050565b60006020820190506129e860008301846129c4565b92915050565b600080fd5b600080fd5b6000601f19601f8301169050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b612a41826129f8565b810181811067ffffffffffffffff82111715612a6057612a5f612a09565b5b80604052505050565b6000612a7361284b565b9050612a7f8282612a38565b919050565b600067ffffffffffffffff821115612a9f57612a9e612a09565b5b612aa8826129f8565b9050602081019050919050565b82818337600083830152505050565b6000612ad7612ad284612a84565b612a69565b905082815260208101848484011115612af357612af26129f3565b5b612afe848285612ab5565b509392505050565b600082601f830112612b1b57612b1a6129ee565b5b8135612b2b848260208601612ac4565b91505092915050565b600060208284031215612b4a57612b49612855565b5b600082013567ffffffffffffffff811115612b6857612b6761285a565b5b612b7484828501612b06565b91505092915050565b600081519050919050565b600082825260208201905092915050565b60005b83811015612bb7578082015181840152602081019050612b9c565b60008484015250505050565b6000612bce82612b7d565b612bd88185612b88565b9350612be8818560208601612b99565b612bf1816129f8565b840191505092915050565b60006020820190508181036000830152612c168184612bc3565b905092915050565b600060208284031215612c3457612c33612855565b5b6000612c4284828501612880565b91505092915050565b6000612c5682612895565b9050919050565b612c6681612c4b565b82525050565b6000602082019050612c816000830184612c5d565b92915050565b612c9081612c4b565b8114612c9b57600080fd5b50565b600081359050612cad81612c87565b92915050565b60008060408385031215612cca57612cc9612855565b5b6000612cd885828601612c9e565b9250506020612ce985828601612880565b9150509250929050565b612cfc8161285f565b82525050565b6000602082019050612d176000830184612cf3565b92915050565b600080600060608486031215612d3657612d35612855565b5b6000612d4486828701612880565b9350506020612d5586828701612880565b9250506040612d66868287016128de565b9150509250925092565b600080600060608486031215612d8957612d88612855565b5b6000612d9786828701612c9e565b9350506020612da886828701612c9e565b9250506040612db986828701612880565b9150509250925092565b600060208284031215612dd957612dd8612855565b5b6000612de784828501612c9e565b91505092915050565b612df9816129b8565b8114612e0457600080fd5b50565b600081359050612e1681612df0565b92915050565b60008060408385031215612e3357612e32612855565b5b6000612e4185828601612c9e565b9250506020612e5285828601612e07565b9150509250929050565b600080fd5b600080fd5b60008083601f840112612e7c57612e7b6129ee565b5b8235905067ffffffffffffffff811115612e9957612e98612e5c565b5b602083019150836020820283011115612eb557612eb4612e61565b5b9250929050565b600080600060408486031215612ed557612ed4612855565b5b6000612ee386828701612c9e565b935050602084013567ffffffffffffffff811115612f0457612f0361285a565b5b612f1086828701612e66565b92509250509250925092565b6000604082019050612f316000830185612cf3565b612f3e6020830184612c5d565b9392505050565b6000819050919050565b612f5881612f45565b82525050565b6000602082019050612f736000830184612f4f565b92915050565b60008060408385031215612f9057612f8f612855565b5b6000612f9e85828601612880565b9250506020612faf85828601612880565b9150509250929050565b600067ffffffffffffffff821115612fd457612fd3612a09565b5b612fdd826129f8565b9050602081019050919050565b6000612ffd612ff884612fb9565b612a69565b905082815260208101848484011115613019576130186129f3565b5b613024848285612ab5565b509392505050565b600082601f830112613041576130406129ee565b5b8135613051848260208601612fea565b91505092915050565b6000806000806080858703121561307457613073612855565b5b600061308287828801612c9e565b945050602061309387828801612c9e565b93505060406130a487828801612880565b925050606085013567ffffffffffffffff8111156130c5576130c461285a565b5b6130d18782880161302c565b91505092959194509250565b6000806000604084860312156130f6576130f5612855565b5b600061310486828701612880565b935050602084013567ffffffffffffffff8111156131255761312461285a565b5b61313186828701612e66565b92509250509250925092565b61314681612f45565b811461315157600080fd5b50565b6000813590506131638161313d565b92915050565b60006020828403121561317f5761317e612855565b5b600061318d84828501613154565b91505092915050565b600080604083850312156131ad576131ac612855565b5b60006131bb85828601612880565b92505060206131cc85828601612c9e565b9150509250929050565b600080604083850312156131ed576131ec612855565b5b60006131fb85828601612c9e565b925050602061320c85828601612c9e565b9150509250929050565b600081905092915050565b50565b6000613231600083613216565b915061323c82613221565b600082019050919050565b600061325282613224565b9150819050919050565b7f5472616e73666572206661696c00000000000000000000000000000000000000600082015250565b6000613292600d83612b88565b915061329d8261325c565b602082019050919050565b600060208201905081810360008301526132c181613285565b9050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b6000600282049050600182168061330f57607f821691505b602082108103613322576133216132c8565b5b50919050565b60008190508160005260206000209050919050565b60006020601f8301049050919050565b600082821b905092915050565b60006008830261338a7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff8261334d565b613394868361334d565b95508019841693508086168417925050509392505050565b6000819050919050565b60006133d16133cc6133c78461285f565b6133ac565b61285f565b9050919050565b6000819050919050565b6133eb836133b6565b6133ff6133f7826133d8565b84845461335a565b825550505050565b600090565b613414613407565b61341f8184846133e2565b505050565b5b818110156134435761343860008261340c565b600181019050613425565b5050565b601f8211156134885761345981613328565b6134628461333d565b81016020851015613471578190505b61348561347d8561333d565b830182613424565b50505b505050565b600082821c905092915050565b60006134ab6000198460080261348d565b1980831691505092915050565b60006134c4838361349a565b9150826002028217905092915050565b6134dd82612b7d565b67ffffffffffffffff8111156134f6576134f5612a09565b5b61350082546132f7565b61350b828285613447565b600060209050601f83116001811461353e576000841561352c578287015190505b61353685826134b8565b86555061359e565b601f19841661354c86613328565b60005b828110156135745784890151825560018201915060208501945060208101905061354f565b86831015613591578489015161358d601f89168261349a565b8355505b6001600288020188555050505b505050505050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b60008160601b9050919050565b60006135ed826135d5565b9050919050565b60006135ff826135e2565b9050919050565b61361761361282612c4b565b6135f4565b82525050565b60006136298284613606565b60148201915081905092915050565b7f53746174652063616e206f6e6c792062652066726f6d203020746f20362c206960008201527f6e636c7573697665000000000000000000000000000000000000000000000000602082015250565b6000613694602883612b88565b915061369f82613638565b604082019050919050565b600060208201905081810360008301526136c381613687565b9050919050565b7f5265656e7472616e637947756172643a207265656e7472616e742063616c6c00600082015250565b6000613700601f83612b88565b915061370b826136ca565b602082019050919050565b6000602082019050818103600083015261372f816136f3565b9050919050565b7f4e46543a206e6f2077616c6c65747320696e697469616c697a656420666f722060008201527f7061796d656e7400000000000000000000000000000000000000000000000000602082015250565b6000613792602783612b88565b915061379d82613736565b604082019050919050565b600060208201905081810360008301526137c181613785565b9050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b60006138028261285f565b91507fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff8203613834576138336137c8565b5b600182019050919050565b7f56616c7565206d757374206265203e3d20313030000000000000000000000000600082015250565b6000613875601483612b88565b91506138808261383f565b602082019050919050565b600060208201905081810360008301526138a481613868565b9050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601260045260246000fd5b60006138e58261285f565b91506138f08361285f565b925082613900576138ff6138ab565b5b828204905092915050565b60006139168261285f565b91506139218361285f565b925082820261392f8161285f565b91508282048414831517613946576139456137c8565b5b5092915050565b7f53616c6520697320636c6f736564000000000000000000000000000000000000600082015250565b6000613983600e83612b88565b915061398e8261394d565b602082019050919050565b600060208201905081810360008301526139b281613976565b9050919050565b60006139c48261285f565b91506139cf8361285f565b92508282019050808211156139e7576139e66137c8565b5b92915050565b7f4e46543a2065786365656473206d617820737570706c79000000000000000000600082015250565b6000613a23601783612b88565b9150613a2e826139ed565b602082019050919050565b60006020820190508181036000830152613a5281613a16565b9050919050565b7f4e46543a20416c6c6f77206c697374206f6e6c79000000000000000000000000600082015250565b6000613a8f601483612b88565b9150613a9a82613a59565b602082019050919050565b60006020820190508181036000830152613abe81613a82565b9050919050565b7f4e46543a20696e636f727265637420616d6f756e74206f66204554482073656e60008201527f7400000000000000000000000000000000000000000000000000000000000000602082015250565b6000613b21602183612b88565b9150613b2c82613ac5565b604082019050919050565b60006020820190508181036000830152613b5081613b14565b9050919050565b6000608082019050613b6c6000830187612c5d565b613b796020830186612cf3565b613b866040830185612c5d565b613b936060830184612cf3565b95945050505050565b7f4f6e6c7941646d696e3a2073656e646572206973206e6f742061646d696e0000600082015250565b6000613bd2601e83612b88565b9150613bdd82613b9c565b602082019050919050565b60006020820190508181036000830152613c0181613bc5565b9050919050565b600081905092915050565b6000613c1e82612b7d565b613c288185613c08565b9350613c38818560208601612b99565b80840191505092915050565b6000613c508285613c13565b9150613c5c8284613c13565b91508190509392505050565b7f65786365656473206d617820737570706c790000000000000000000000000000600082015250565b6000613c9e601283612b88565b9150613ca982613c68565b602082019050919050565b60006020820190508181036000830152613ccd81613c91565b9050919050565b6000819050919050565b6000613cf9613cf4613cef84613cd4565b6133ac565b61285f565b9050919050565b613d0981613cde565b82525050565b6000608082019050613d246000830187612c5d565b613d316020830186613d00565b613d3e6040830185612c5d565b613d4b6060830184612cf3565b95945050505050565b7f4f776e61626c653a206e6577206f776e657220697320746865207a65726f206160008201527f6464726573730000000000000000000000000000000000000000000000000000602082015250565b6000613db0602683612b88565b9150613dbb82613d54565b604082019050919050565b60006020820190508181036000830152613ddf81613da3565b9050919050565b6000613df18261285f565b9150613dfc8361285f565b9250828203905081811115613e1457613e136137c8565b5b92915050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052603160045260246000fd5b7f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e6572600082015250565b6000613e7f602083612b88565b9150613e8a82613e49565b602082019050919050565b60006020820190508181036000830152613eae81613e72565b9050919050565b600081519050919050565b600082825260208201905092915050565b6000613edc82613eb5565b613ee68185613ec0565b9350613ef6818560208601612b99565b613eff816129f8565b840191505092915050565b6000608082019050613f1f6000830187612c5d565b613f2c6020830186612c5d565b613f396040830185612cf3565b8181036060830152613f4b8184613ed1565b905095945050505050565b600081519050613f658161295f565b92915050565b600060208284031215613f8157613f80612855565b5b6000613f8f84828501613f56565b9150509291505056fea26469706673582212208fda06d6b1e9c3115dac45e56beb856949c0dc2837b1662ce619bdf94805b16464736f6c63430008110033"