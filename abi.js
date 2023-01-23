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

export const nft_bytecode = "0x60806040523480156200001157600080fd5b50604051620045343803806200453483398181016040528101906200003791906200035e565b848481600290816200004a919062000665565b5080600390816200005c919062000665565b506200006d620000bd60201b60201c565b60008190555050506200009562000089620000c260201b60201c565b620000ca60201b60201c565b6001600a8190555082600b8190555081600d8190555080600e8190555050505050506200074c565b600090565b600033905090565b6000600960009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16905081600960006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055508173ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff167f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e060405160405180910390a35050565b6000604051905090565b600080fd5b600080fd5b600080fd5b600080fd5b6000601f19601f8301169050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b620001f982620001ae565b810181811067ffffffffffffffff821117156200021b576200021a620001bf565b5b80604052505050565b60006200023062000190565b90506200023e8282620001ee565b919050565b600067ffffffffffffffff821115620002615762000260620001bf565b5b6200026c82620001ae565b9050602081019050919050565b60005b83811015620002995780820151818401526020810190506200027c565b60008484015250505050565b6000620002bc620002b68462000243565b62000224565b905082815260208101848484011115620002db57620002da620001a9565b5b620002e884828562000279565b509392505050565b600082601f830112620003085762000307620001a4565b5b81516200031a848260208601620002a5565b91505092915050565b6000819050919050565b620003388162000323565b81146200034457600080fd5b50565b60008151905062000358816200032d565b92915050565b600080600080600060a086880312156200037d576200037c6200019a565b5b600086015167ffffffffffffffff8111156200039e576200039d6200019f565b5b620003ac88828901620002f0565b955050602086015167ffffffffffffffff811115620003d057620003cf6200019f565b5b620003de88828901620002f0565b9450506040620003f18882890162000347565b9350506060620004048882890162000347565b9250506080620004178882890162000347565b9150509295509295909350565b600081519050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b600060028204905060018216806200047757607f821691505b6020821081036200048d576200048c6200042f565b5b50919050565b60008190508160005260206000209050919050565b60006020601f8301049050919050565b600082821b905092915050565b600060088302620004f77fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff82620004b8565b620005038683620004b8565b95508019841693508086168417925050509392505050565b6000819050919050565b600062000546620005406200053a8462000323565b6200051b565b62000323565b9050919050565b6000819050919050565b620005628362000525565b6200057a62000571826200054d565b848454620004c5565b825550505050565b600090565b6200059162000582565b6200059e81848462000557565b505050565b5b81811015620005c657620005ba60008262000587565b600181019050620005a4565b5050565b601f8211156200061557620005df8162000493565b620005ea84620004a8565b81016020851015620005fa578190505b620006126200060985620004a8565b830182620005a3565b50505b505050565b600082821c905092915050565b60006200063a600019846008026200061a565b1980831691505092915050565b600062000655838362000627565b9150826002028217905092915050565b620006708262000424565b67ffffffffffffffff8111156200068c576200068b620001bf565b5b6200069882546200045e565b620006a5828285620005ca565b600060209050601f831160018114620006dd5760008415620006c8578287015190505b620006d4858262000647565b86555062000744565b601f198416620006ed8662000493565b60005b828110156200071757848901518255600182019150602085019450602081019050620006f0565b8683101562000737578489015162000733601f89168262000627565b8355505b6001600288020188555050505b505050505050565b613dd8806200075c6000396000f3fe60806040526004361061020e5760003560e01c806394a81c7011610118578063ba41b0c6116100a0578063d52c57e01161006f578063d52c57e014610758578063d5abeb0114610781578063e985e9c5146107ac578063f2fde38b146107e9578063f93300f0146108125761020e565b8063ba41b0c6146106ab578063c19d93fb146106c7578063c2218fdd146106f2578063c87b56dd1461071b5761020e565b8063a22cb465116100e7578063a22cb465146105e9578063a9e966b714610612578063af573db21461063b578063b71051e214610652578063b88d4fde1461068f5761020e565b806394a81c701461053f57806395d89b411461056a578063a035b1fe14610595578063a192cf4a146105c05761020e565b80631d1e715b1161019b578063677621691161016a578063677621691461044557806370a0823114610482578063715018a6146104bf5780637ad71f72146104d65780638da5cb5b146105145761020e565b80631d1e715b146103a757806323b872dd146103d057806342842e0e146103ec5780636352211e146104085761020e565b8063081812fc116101e2578063081812fc146102cd578063095ea7b31461030a5780631141d7de1461032657806318160ddd146103515780631b8926a91461037c5761020e565b8062f714ce1461021357806301ffc9a71461023c57806302fe53051461027957806306fdde03146102a2575b600080fd5b34801561021f57600080fd5b5061023a60048036038101906102359190612769565b61083b565b005b34801561024857600080fd5b50610263600480360381019061025e9190612801565b6108f4565b6040516102709190612849565b60405180910390f35b34801561028557600080fd5b506102a0600480360381019061029b91906129aa565b610986565b005b3480156102ae57600080fd5b506102b76109a1565b6040516102c49190612a72565b60405180910390f35b3480156102d957600080fd5b506102f460048036038101906102ef9190612a94565b610a33565b6040516103019190612ae2565b60405180910390f35b610324600480360381019061031f9190612b29565b610ab2565b005b34801561033257600080fd5b5061033b610bf6565b6040516103489190612a72565b60405180910390f35b34801561035d57600080fd5b50610366610c84565b6040516103739190612b78565b60405180910390f35b34801561038857600080fd5b50610391610c9b565b60405161039e9190612b78565b60405180910390f35b3480156103b357600080fd5b506103ce60048036038101906103c99190612b93565b610ca1565b005b6103ea60048036038101906103e59190612be6565b610d3c565b005b61040660048036038101906104019190612be6565b61105e565b005b34801561041457600080fd5b5061042f600480360381019061042a9190612a94565b61107e565b60405161043c9190612ae2565b60405180910390f35b34801561045157600080fd5b5061046c60048036038101906104679190612c99565b611090565b6040516104799190612849565b60405180910390f35b34801561048e57600080fd5b506104a960048036038101906104a49190612cf9565b61111a565b6040516104b69190612b78565b60405180910390f35b3480156104cb57600080fd5b506104d46111d2565b005b3480156104e257600080fd5b506104fd60048036038101906104f89190612a94565b6111e6565b60405161050b929190612d26565b60405180910390f35b34801561052057600080fd5b5061052961123a565b6040516105369190612ae2565b60405180910390f35b34801561054b57600080fd5b50610554611264565b6040516105619190612d68565b60405180910390f35b34801561057657600080fd5b5061057f61126a565b60405161058c9190612a72565b60405180910390f35b3480156105a157600080fd5b506105aa6112fc565b6040516105b79190612b78565b60405180910390f35b3480156105cc57600080fd5b506105e760048036038101906105e29190612769565b611302565b005b3480156105f557600080fd5b50610610600480360381019061060b9190612daf565b6113b7565b005b34801561061e57600080fd5b5061063960048036038101906106349190612a94565b6114c2565b005b34801561064757600080fd5b50610650611551565b005b34801561065e57600080fd5b5061067960048036038101906106749190612def565b611748565b6040516106869190612b78565b60405180910390f35b6106a960048036038101906106a49190612ed0565b6117b4565b005b6106c560048036038101906106c09190612f53565b611827565b005b3480156106d357600080fd5b506106dc611a5c565b6040516106e99190612b78565b60405180910390f35b3480156106fe57600080fd5b5061071960048036038101906107149190612fdf565b611a62565b005b34801561072757600080fd5b50610742600480360381019061073d9190612a94565b611a74565b60405161074f9190612a72565b60405180910390f35b34801561076457600080fd5b5061077f600480360381019061077a919061300c565b611b12565b005b34801561078d57600080fd5b50610796611bc4565b6040516107a39190612b78565b60405180910390f35b3480156107b857600080fd5b506107d360048036038101906107ce919061304c565b611bca565b6040516107e09190612849565b60405180910390f35b3480156107f557600080fd5b50610810600480360381019061080b9190612cf9565b611c5e565b005b34801561081e57600080fd5b5061083960048036038101906108349190612a94565b611ce1565b005b610843611e0f565b60008173ffffffffffffffffffffffffffffffffffffffff1683604051610869906130bd565b60006040518083038185875af1925050503d80600081146108a6576040519150601f19603f3d011682016040523d82523d6000602084013e6108ab565b606091505b50509050806108ef576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016108e69061311e565b60405180910390fd5b505050565b60006301ffc9a760e01b827bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916148061094f57506380ac58cd60e01b827bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916145b8061097f5750635b5e139f60e01b827bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916145b9050919050565b61098e611e0f565b806008908161099d919061334a565b5050565b6060600280546109b09061316d565b80601f01602080910402602001604051908101604052809291908181526020018280546109dc9061316d565b8015610a295780601f106109fe57610100808354040283529160200191610a29565b820191906000526020600020905b815481529060010190602001808311610a0c57829003601f168201915b5050505050905090565b6000610a3e82611e8d565b610a74576040517fcf4700e400000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6006600083815260200190815260200160002060000160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff169050919050565b6000610abd8261107e565b90508073ffffffffffffffffffffffffffffffffffffffff16610ade611eec565b73ffffffffffffffffffffffffffffffffffffffff1614610b4157610b0a81610b05611eec565b611bca565b610b40576040517fcfb3b94200000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b5b826006600084815260200190815260200160002060000160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550818373ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff167f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b92560405160405180910390a4505050565b60088054610c039061316d565b80601f0160208091040260200160405190810160405280929190818152602001828054610c2f9061316d565b8015610c7c5780601f10610c5157610100808354040283529160200191610c7c565b820191906000526020600020905b815481529060010190602001808311610c5f57829003601f168201915b505050505081565b6000610c8e611ef4565b6001546000540303905090565b600e5481565b610ca9611e0f565b8160108481548110610cbe57610cbd61341c565b5b9060005260206000209060020201600001819055508060108481548110610ce857610ce761341c565b5b906000526020600020906002020160010160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550505050565b6000610d4782611ef9565b90508373ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff1614610dae576040517fa114810000000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b600080610dba84611fc5565b91509150610dd08187610dcb611eec565b611fec565b610e1c57610de586610de0611eec565b611bca565b610e1b576040517f59c896be00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b5b600073ffffffffffffffffffffffffffffffffffffffff168573ffffffffffffffffffffffffffffffffffffffff1603610e82576040517fea553b3400000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b610e8f8686866001612030565b8015610e9a57600082555b600560008773ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600081546001900391905081905550600560008673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206000815460010191905081905550610f6885610f44888887612036565b7c02000000000000000000000000000000000000000000000000000000001761205e565b600460008681526020019081526020016000208190555060007c0200000000000000000000000000000000000000000000000000000000841603610fee5760006001850190506000600460008381526020019081526020016000205403610fec576000548114610feb578360046000838152602001908152602001600020819055505b5b505b838573ffffffffffffffffffffffffffffffffffffffff168773ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef60405160405180910390a46110568686866001612089565b505050505050565b611079838383604051806020016040528060008152506117b4565b505050565b600061108982611ef9565b9050919050565b600080846040516020016110a49190613493565b604051602081830303815290604052805190602001209050600061110c858580806020026020016040519081016040528093929190818152602001838360200280828437600081840152601f19601f82011690508083019250505050505050600c548461208f565b905080925050509392505050565b60008073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff1603611181576040517f8f4eb60400000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b67ffffffffffffffff600560008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002054169050919050565b6111da611e0f565b6111e460006120a6565b565b601081815481106111f657600080fd5b90600052602060002090600202016000915090508060000154908060010160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16905082565b6000600960009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16905090565b600c5481565b6060600380546112799061316d565b80601f01602080910402602001604051908101604052809291908181526020018280546112a59061316d565b80156112f25780601f106112c7576101008083540402835291602001916112f2565b820191906000526020600020905b8154815290600101906020018083116112d557829003601f168201915b5050505050905090565b600d5481565b61130a611e0f565b601060405180604001604052808481526020018373ffffffffffffffffffffffffffffffffffffffff1681525090806001815401808255809150506001900390600052602060002090600202016000909190919091506000820151816000015560208201518160010160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555050505050565b80600760006113c4611eec565b73ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060006101000a81548160ff0219169083151502179055508173ffffffffffffffffffffffffffffffffffffffff16611471611eec565b73ffffffffffffffffffffffffffffffffffffffff167f17307eab39ab6107e8899845ad3d59bd9653f200f220920489ca2b5937696c31836040516114b69190612849565b60405180910390a35050565b6114ca611e0f565b600681111561150e576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161150590613520565b60405180910390fd5b80600f819055507f8fd8f487a1d703cca2ded1250c8e7c8c1ae6f0b6cdc81883a282e0863a6d7283600f546040516115469190612b78565b60405180910390a150565b611559611e0f565b6002600a540361159e576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016115959061358c565b60405180910390fd5b6002600a819055506000601080549050116115ee576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016115e59061361e565b60405180910390fd5b600047905060005b60108054905081101561173c576000611634836010848154811061161d5761161c61341c565b5b906000526020600020906002020160000154611748565b905060006010838154811061164c5761164b61341c565b5b906000526020600020906002020160010160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16826040516116a1906130bd565b60006040518083038185875af1925050503d80600081146116de576040519150601f19603f3d011682016040523d82523d6000602084013e6116e3565b606091505b5050905080611727576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161171e9061311e565b60405180910390fd5b505080806117349061366d565b9150506115f6565b50506001600a81905550565b6000606483101561178e576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161178590613701565b60405180910390fd5b600060648461179d9190613750565b905082816117ab9190613781565b91505092915050565b6117bf848484610d3c565b60008373ffffffffffffffffffffffffffffffffffffffff163b14611821576117ea8484848461216c565b611820576040517fd1a57ed600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b5b50505050565b6002600a540361186c576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016118639061358c565b60405180910390fd5b6002600a819055506000600f54116118b9576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016118b09061380f565b60405180910390fd5b600b54836118c5610c84565b6118cf919061382f565b1115611910576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401611907906138af565b60405180910390fd5b6000600d5490506001600f540361197c5761193361192c6122bc565b8484611090565b611972576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016119699061391b565b60405180910390fd5b600e5490506119a5565b6002600f54036119a4576119986119916122bc565b8484611090565b156119a357600e5490505b5b5b83816119b19190613781565b34146119f2576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016119e9906139ad565b60405180910390fd5b611a036119fd6122bc565b856122c4565b7f58303c2ecff4b8a524f2f8ca478d8683b492b3419026f7199667453c2f15412a611a2c6122bc565b34611a356122bc565b87604051611a4694939291906139cd565b60405180910390a1506001600a81905550505050565b600f5481565b611a6a611e0f565b80600c8190555050565b6060611a7f82611e8d565b611ab5576040517fa14c4b5000000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6000611abf6122e2565b90506000815103611adf5760405180602001604052806000815250611b0a565b80611ae984612374565b604051602001611afa929190613a4e565b6040516020818303038152906040525b915050919050565b611b1a611e0f565b600b5482611b26610c84565b611b30919061382f565b1115611b71576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401611b6890613abe565b60405180910390fd5b611b7b81836122c4565b7f58303c2ecff4b8a524f2f8ca478d8683b492b3419026f7199667453c2f15412a611ba46122bc565b60008385604051611bb89493929190613b19565b60405180910390a15050565b600b5481565b6000600760008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060009054906101000a900460ff16905092915050565b611c66611e0f565b600073ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff1603611cd5576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401611ccc90613bd0565b60405180910390fd5b611cde816120a6565b50565b611ce9611e0f565b60106001601080549050611cfd9190613bf0565b81548110611d0e57611d0d61341c565b5b906000526020600020906002020160108281548110611d3057611d2f61341c565b5b9060005260206000209060020201600082015481600001556001820160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff168160010160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055509050506010805480611dc457611dc3613c24565b5b60019003818190600052602060002090600202016000808201600090556001820160006101000a81549073ffffffffffffffffffffffffffffffffffffffff02191690555050905550565b611e176122bc565b73ffffffffffffffffffffffffffffffffffffffff16611e3561123a565b73ffffffffffffffffffffffffffffffffffffffff1614611e8b576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401611e8290613c9f565b60405180910390fd5b565b600081611e98611ef4565b11158015611ea7575060005482105b8015611ee5575060007c0100000000000000000000000000000000000000000000000000000000600460008581526020019081526020016000205416145b9050919050565b600033905090565b600090565b60008082905080611f08611ef4565b11611f8e57600054811015611f8d5760006004600083815260200190815260200160002054905060007c0100000000000000000000000000000000000000000000000000000000821603611f8b575b60008103611f81576004600083600190039350838152602001908152602001600020549050611f57565b8092505050611fc0565b505b5b6040517fdf2d9b4200000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b919050565b60008060006006600085815260200190815260200160002090508092508254915050915091565b600073ffffffffffffffffffffffffffffffffffffffff8316925073ffffffffffffffffffffffffffffffffffffffff821691508382148383141790509392505050565b50505050565b60008060e883901c905060e861204d8686846123c4565b62ffffff16901b9150509392505050565b600073ffffffffffffffffffffffffffffffffffffffff83169250814260a01b178317905092915050565b50505050565b60008261209c85846123cd565b1490509392505050565b6000600960009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16905081600960006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055508173ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff167f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e060405160405180910390a35050565b60008373ffffffffffffffffffffffffffffffffffffffff1663150b7a02612192611eec565b8786866040518563ffffffff1660e01b81526004016121b49493929190613d14565b6020604051808303816000875af19250505080156121f057506040513d601f19601f820116820180604052508101906121ed9190613d75565b60015b612269573d8060008114612220576040519150601f19603f3d011682016040523d82523d6000602084013e612225565b606091505b506000815103612261576040517fd1a57ed600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b805181602001fd5b63150b7a0260e01b7bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916817bffffffffffffffffffffffffffffffffffffffffffffffffffffffff191614915050949350505050565b600033905090565b6122de828260405180602001604052806000815250612442565b5050565b6060600880546122f19061316d565b80601f016020809104026020016040519081016040528092919081815260200182805461231d9061316d565b801561236a5780601f1061233f5761010080835404028352916020019161236a565b820191906000526020600020905b81548152906001019060200180831161234d57829003601f168201915b5050505050905090565b606060a060405101806040526020810391506000825281835b6001156123af57600184039350600a81066030018453600a810490508061238d575b50828103602084039350808452505050919050565b60009392505050565b60008082905060005b84518110156124375760008582815181106123f4576123f361341c565b5b602002602001015190508083116124165761240f83826124df565b9250612423565b61242081846124df565b92505b50808061242f9061366d565b9150506123d6565b508091505092915050565b61244c83836124f6565b60008373ffffffffffffffffffffffffffffffffffffffff163b146124da57600080549050600083820390505b61248c600086838060010194508661216c565b6124c2576040517fd1a57ed600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b8181106124795781600054146124d757600080fd5b50505b505050565b600082600052816020526040600020905092915050565b60008054905060008203612536576040517fb562e8dd00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6125436000848385612030565b600160406001901b178202600560008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600082825401925050819055506125ba836125ab6000866000612036565b6125b4856126b1565b1761205e565b6004600083815260200190815260200160002081905550600080838301905073ffffffffffffffffffffffffffffffffffffffff85169150828260007fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef600080a4600183015b81811461265b57808360007fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef600080a4600181019050612620565b5060008203612696576040517f2e07630000000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b8060008190555050506126ac6000848385612089565b505050565b60006001821460e11b9050919050565b6000604051905090565b600080fd5b600080fd5b6000819050919050565b6126e8816126d5565b81146126f357600080fd5b50565b600081359050612705816126df565b92915050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b60006127368261270b565b9050919050565b6127468161272b565b811461275157600080fd5b50565b6000813590506127638161273d565b92915050565b600080604083850312156127805761277f6126cb565b5b600061278e858286016126f6565b925050602061279f85828601612754565b9150509250929050565b60007fffffffff0000000000000000000000000000000000000000000000000000000082169050919050565b6127de816127a9565b81146127e957600080fd5b50565b6000813590506127fb816127d5565b92915050565b600060208284031215612817576128166126cb565b5b6000612825848285016127ec565b91505092915050565b60008115159050919050565b6128438161282e565b82525050565b600060208201905061285e600083018461283a565b92915050565b600080fd5b600080fd5b6000601f19601f8301169050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b6128b78261286e565b810181811067ffffffffffffffff821117156128d6576128d561287f565b5b80604052505050565b60006128e96126c1565b90506128f582826128ae565b919050565b600067ffffffffffffffff8211156129155761291461287f565b5b61291e8261286e565b9050602081019050919050565b82818337600083830152505050565b600061294d612948846128fa565b6128df565b90508281526020810184848401111561296957612968612869565b5b61297484828561292b565b509392505050565b600082601f83011261299157612990612864565b5b81356129a184826020860161293a565b91505092915050565b6000602082840312156129c0576129bf6126cb565b5b600082013567ffffffffffffffff8111156129de576129dd6126d0565b5b6129ea8482850161297c565b91505092915050565b600081519050919050565b600082825260208201905092915050565b60005b83811015612a2d578082015181840152602081019050612a12565b60008484015250505050565b6000612a44826129f3565b612a4e81856129fe565b9350612a5e818560208601612a0f565b612a678161286e565b840191505092915050565b60006020820190508181036000830152612a8c8184612a39565b905092915050565b600060208284031215612aaa57612aa96126cb565b5b6000612ab8848285016126f6565b91505092915050565b6000612acc8261270b565b9050919050565b612adc81612ac1565b82525050565b6000602082019050612af76000830184612ad3565b92915050565b612b0681612ac1565b8114612b1157600080fd5b50565b600081359050612b2381612afd565b92915050565b60008060408385031215612b4057612b3f6126cb565b5b6000612b4e85828601612b14565b9250506020612b5f858286016126f6565b9150509250929050565b612b72816126d5565b82525050565b6000602082019050612b8d6000830184612b69565b92915050565b600080600060608486031215612bac57612bab6126cb565b5b6000612bba868287016126f6565b9350506020612bcb868287016126f6565b9250506040612bdc86828701612754565b9150509250925092565b600080600060608486031215612bff57612bfe6126cb565b5b6000612c0d86828701612b14565b9350506020612c1e86828701612b14565b9250506040612c2f868287016126f6565b9150509250925092565b600080fd5b600080fd5b60008083601f840112612c5957612c58612864565b5b8235905067ffffffffffffffff811115612c7657612c75612c39565b5b602083019150836020820283011115612c9257612c91612c3e565b5b9250929050565b600080600060408486031215612cb257612cb16126cb565b5b6000612cc086828701612b14565b935050602084013567ffffffffffffffff811115612ce157612ce06126d0565b5b612ced86828701612c43565b92509250509250925092565b600060208284031215612d0f57612d0e6126cb565b5b6000612d1d84828501612b14565b91505092915050565b6000604082019050612d3b6000830185612b69565b612d486020830184612ad3565b9392505050565b6000819050919050565b612d6281612d4f565b82525050565b6000602082019050612d7d6000830184612d59565b92915050565b612d8c8161282e565b8114612d9757600080fd5b50565b600081359050612da981612d83565b92915050565b60008060408385031215612dc657612dc56126cb565b5b6000612dd485828601612b14565b9250506020612de585828601612d9a565b9150509250929050565b60008060408385031215612e0657612e056126cb565b5b6000612e14858286016126f6565b9250506020612e25858286016126f6565b9150509250929050565b600067ffffffffffffffff821115612e4a57612e4961287f565b5b612e538261286e565b9050602081019050919050565b6000612e73612e6e84612e2f565b6128df565b905082815260208101848484011115612e8f57612e8e612869565b5b612e9a84828561292b565b509392505050565b600082601f830112612eb757612eb6612864565b5b8135612ec7848260208601612e60565b91505092915050565b60008060008060808587031215612eea57612ee96126cb565b5b6000612ef887828801612b14565b9450506020612f0987828801612b14565b9350506040612f1a878288016126f6565b925050606085013567ffffffffffffffff811115612f3b57612f3a6126d0565b5b612f4787828801612ea2565b91505092959194509250565b600080600060408486031215612f6c57612f6b6126cb565b5b6000612f7a868287016126f6565b935050602084013567ffffffffffffffff811115612f9b57612f9a6126d0565b5b612fa786828701612c43565b92509250509250925092565b612fbc81612d4f565b8114612fc757600080fd5b50565b600081359050612fd981612fb3565b92915050565b600060208284031215612ff557612ff46126cb565b5b600061300384828501612fca565b91505092915050565b60008060408385031215613023576130226126cb565b5b6000613031858286016126f6565b925050602061304285828601612b14565b9150509250929050565b60008060408385031215613063576130626126cb565b5b600061307185828601612b14565b925050602061308285828601612b14565b9150509250929050565b600081905092915050565b50565b60006130a760008361308c565b91506130b282613097565b600082019050919050565b60006130c88261309a565b9150819050919050565b7f5472616e73666572206661696c00000000000000000000000000000000000000600082015250565b6000613108600d836129fe565b9150613113826130d2565b602082019050919050565b60006020820190508181036000830152613137816130fb565b9050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b6000600282049050600182168061318557607f821691505b6020821081036131985761319761313e565b5b50919050565b60008190508160005260206000209050919050565b60006020601f8301049050919050565b600082821b905092915050565b6000600883026132007fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff826131c3565b61320a86836131c3565b95508019841693508086168417925050509392505050565b6000819050919050565b600061324761324261323d846126d5565b613222565b6126d5565b9050919050565b6000819050919050565b6132618361322c565b61327561326d8261324e565b8484546131d0565b825550505050565b600090565b61328a61327d565b613295818484613258565b505050565b5b818110156132b9576132ae600082613282565b60018101905061329b565b5050565b601f8211156132fe576132cf8161319e565b6132d8846131b3565b810160208510156132e7578190505b6132fb6132f3856131b3565b83018261329a565b50505b505050565b600082821c905092915050565b600061332160001984600802613303565b1980831691505092915050565b600061333a8383613310565b9150826002028217905092915050565b613353826129f3565b67ffffffffffffffff81111561336c5761336b61287f565b5b613376825461316d565b6133818282856132bd565b600060209050601f8311600181146133b457600084156133a2578287015190505b6133ac858261332e565b865550613414565b601f1984166133c28661319e565b60005b828110156133ea578489015182556001820191506020850194506020810190506133c5565b868310156134075784890151613403601f891682613310565b8355505b6001600288020188555050505b505050505050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b60008160601b9050919050565b60006134638261344b565b9050919050565b600061347582613458565b9050919050565b61348d61348882612ac1565b61346a565b82525050565b600061349f828461347c565b60148201915081905092915050565b7f53746174652063616e206f6e6c792062652066726f6d203020746f20362c206960008201527f6e636c7573697665000000000000000000000000000000000000000000000000602082015250565b600061350a6028836129fe565b9150613515826134ae565b604082019050919050565b60006020820190508181036000830152613539816134fd565b9050919050565b7f5265656e7472616e637947756172643a207265656e7472616e742063616c6c00600082015250565b6000613576601f836129fe565b915061358182613540565b602082019050919050565b600060208201905081810360008301526135a581613569565b9050919050565b7f4e46543a206e6f2077616c6c65747320696e697469616c697a656420666f722060008201527f7061796d656e7400000000000000000000000000000000000000000000000000602082015250565b60006136086027836129fe565b9150613613826135ac565b604082019050919050565b60006020820190508181036000830152613637816135fb565b9050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b6000613678826126d5565b91507fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff82036136aa576136a961363e565b5b600182019050919050565b7f56616c7565206d757374206265203e3d20313030000000000000000000000000600082015250565b60006136eb6014836129fe565b91506136f6826136b5565b602082019050919050565b6000602082019050818103600083015261371a816136de565b9050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601260045260246000fd5b600061375b826126d5565b9150613766836126d5565b92508261377657613775613721565b5b828204905092915050565b600061378c826126d5565b9150613797836126d5565b92508282026137a5816126d5565b915082820484148315176137bc576137bb61363e565b5b5092915050565b7f53616c6520697320636c6f736564000000000000000000000000000000000000600082015250565b60006137f9600e836129fe565b9150613804826137c3565b602082019050919050565b60006020820190508181036000830152613828816137ec565b9050919050565b600061383a826126d5565b9150613845836126d5565b925082820190508082111561385d5761385c61363e565b5b92915050565b7f4e46543a2065786365656473206d617820737570706c79000000000000000000600082015250565b60006138996017836129fe565b91506138a482613863565b602082019050919050565b600060208201905081810360008301526138c88161388c565b9050919050565b7f4e46543a20416c6c6f77206c697374206f6e6c79000000000000000000000000600082015250565b60006139056014836129fe565b9150613910826138cf565b602082019050919050565b60006020820190508181036000830152613934816138f8565b9050919050565b7f4e46543a20696e636f727265637420616d6f756e74206f66204554482073656e60008201527f7400000000000000000000000000000000000000000000000000000000000000602082015250565b60006139976021836129fe565b91506139a28261393b565b604082019050919050565b600060208201905081810360008301526139c68161398a565b9050919050565b60006080820190506139e26000830187612ad3565b6139ef6020830186612b69565b6139fc6040830185612ad3565b613a096060830184612b69565b95945050505050565b600081905092915050565b6000613a28826129f3565b613a328185613a12565b9350613a42818560208601612a0f565b80840191505092915050565b6000613a5a8285613a1d565b9150613a668284613a1d565b91508190509392505050565b7f65786365656473206d617820737570706c790000000000000000000000000000600082015250565b6000613aa86012836129fe565b9150613ab382613a72565b602082019050919050565b60006020820190508181036000830152613ad781613a9b565b9050919050565b6000819050919050565b6000613b03613afe613af984613ade565b613222565b6126d5565b9050919050565b613b1381613ae8565b82525050565b6000608082019050613b2e6000830187612ad3565b613b3b6020830186613b0a565b613b486040830185612ad3565b613b556060830184612b69565b95945050505050565b7f4f776e61626c653a206e6577206f776e657220697320746865207a65726f206160008201527f6464726573730000000000000000000000000000000000000000000000000000602082015250565b6000613bba6026836129fe565b9150613bc582613b5e565b604082019050919050565b60006020820190508181036000830152613be981613bad565b9050919050565b6000613bfb826126d5565b9150613c06836126d5565b9250828203905081811115613c1e57613c1d61363e565b5b92915050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052603160045260246000fd5b7f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e6572600082015250565b6000613c896020836129fe565b9150613c9482613c53565b602082019050919050565b60006020820190508181036000830152613cb881613c7c565b9050919050565b600081519050919050565b600082825260208201905092915050565b6000613ce682613cbf565b613cf08185613cca565b9350613d00818560208601612a0f565b613d098161286e565b840191505092915050565b6000608082019050613d296000830187612ad3565b613d366020830186612ad3565b613d436040830185612b69565b8181036060830152613d558184613cdb565b905095945050505050565b600081519050613d6f816127d5565b92915050565b600060208284031215613d8b57613d8a6126cb565b5b6000613d9984828501613d60565b9150509291505056fea2646970667358221220b1351fd5dab405eb57efb8be5b00b0da7e7d7c2cf572d76a94673387cc2aab1d64736f6c63430008110033"