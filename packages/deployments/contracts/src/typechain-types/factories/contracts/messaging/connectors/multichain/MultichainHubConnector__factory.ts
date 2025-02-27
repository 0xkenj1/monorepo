/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import {
  Signer,
  utils,
  Contract,
  ContractFactory,
  BigNumberish,
  Overrides,
} from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../../../../../common";
import type {
  MultichainHubConnector,
  MultichainHubConnectorInterface,
} from "../../../../../contracts/messaging/connectors/multichain/MultichainHubConnector";

const _abi = [
  {
    inputs: [
      {
        internalType: "uint32",
        name: "_domain",
        type: "uint32",
      },
      {
        internalType: "uint32",
        name: "_mirrorDomain",
        type: "uint32",
      },
      {
        internalType: "address",
        name: "_amb",
        type: "address",
      },
      {
        internalType: "address",
        name: "_rootManager",
        type: "address",
      },
      {
        internalType: "address",
        name: "_mirrorConnector",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "_mirrorChainId",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "_gasCap",
        type: "uint256",
      },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    inputs: [],
    name: "Connector__processMessage_notUsed",
    type: "error",
  },
  {
    inputs: [],
    name: "ProposedOwnable__onlyOwner_notOwner",
    type: "error",
  },
  {
    inputs: [],
    name: "ProposedOwnable__onlyProposed_notProposedOwner",
    type: "error",
  },
  {
    inputs: [],
    name: "ProposedOwnable__ownershipDelayElapsed_delayNotElapsed",
    type: "error",
  },
  {
    inputs: [],
    name: "ProposedOwnable__proposeNewOwner_invalidProposal",
    type: "error",
  },
  {
    inputs: [],
    name: "ProposedOwnable__proposeNewOwner_noOwnershipChange",
    type: "error",
  },
  {
    inputs: [],
    name: "ProposedOwnable__renounceOwnership_invalidProposal",
    type: "error",
  },
  {
    inputs: [],
    name: "ProposedOwnable__renounceOwnership_noProposal",
    type: "error",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "FundsWithdrawn",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "uint256",
        name: "_previous",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "_updated",
        type: "uint256",
      },
    ],
    name: "GasCapUpdated",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "bytes",
        name: "data",
        type: "bytes",
      },
      {
        indexed: false,
        internalType: "address",
        name: "caller",
        type: "address",
      },
    ],
    name: "MessageProcessed",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "bytes",
        name: "data",
        type: "bytes",
      },
      {
        indexed: false,
        internalType: "bytes",
        name: "encodedData",
        type: "bytes",
      },
      {
        indexed: false,
        internalType: "address",
        name: "caller",
        type: "address",
      },
    ],
    name: "MessageSent",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "previous",
        type: "address",
      },
      {
        indexed: false,
        internalType: "address",
        name: "current",
        type: "address",
      },
    ],
    name: "MirrorConnectorUpdated",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "uint32",
        name: "domain",
        type: "uint32",
      },
      {
        indexed: true,
        internalType: "uint32",
        name: "mirrorDomain",
        type: "uint32",
      },
      {
        indexed: false,
        internalType: "address",
        name: "amb",
        type: "address",
      },
      {
        indexed: false,
        internalType: "address",
        name: "rootManager",
        type: "address",
      },
      {
        indexed: false,
        internalType: "address",
        name: "mirrorConnector",
        type: "address",
      },
    ],
    name: "NewConnector",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "proposedOwner",
        type: "address",
      },
    ],
    name: "OwnershipProposed",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "previousOwner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "newOwner",
        type: "address",
      },
    ],
    name: "OwnershipTransferred",
    type: "event",
  },
  {
    inputs: [],
    name: "AMB",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "DOMAIN",
    outputs: [
      {
        internalType: "uint32",
        name: "",
        type: "uint32",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "MIRROR_DOMAIN",
    outputs: [
      {
        internalType: "uint32",
        name: "",
        type: "uint32",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "ROOT_MANAGER",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "acceptProposedOwner",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes",
        name: "_data",
        type: "bytes",
      },
    ],
    name: "anyExecute",
    outputs: [
      {
        internalType: "bool",
        name: "success",
        type: "bool",
      },
      {
        internalType: "bytes",
        name: "result",
        type: "bytes",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "delay",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "gasCap",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "mirrorConnector",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "owner",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes",
        name: "",
        type: "bytes",
      },
    ],
    name: "processMessage",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "newlyProposed",
        type: "address",
      },
    ],
    name: "proposeNewOwner",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "proposed",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "proposedTimestamp",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "renounceOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "renounced",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes",
        name: "_data",
        type: "bytes",
      },
      {
        internalType: "bytes",
        name: "_encodedData",
        type: "bytes",
      },
    ],
    name: "sendMessage",
    outputs: [],
    stateMutability: "payable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_gasCap",
        type: "uint256",
      },
    ],
    name: "setGasCap",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_mirrorConnector",
        type: "address",
      },
    ],
    name: "setMirrorConnector",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_expected",
        type: "address",
      },
    ],
    name: "verifySender",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_to",
        type: "address",
      },
    ],
    name: "withdrawFunds",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    stateMutability: "payable",
    type: "receive",
  },
] as const;

const _bytecode =
  "0x6101406040523480156200001257600080fd5b50604051620017b3380380620017b38339810160408190526200003591620003d7565b848282808a8a858a8a84848484846200004e3362000296565b8463ffffffff16600003620000995760405162461bcd60e51b815260206004820152600c60248201526b32b6b83a3c903237b6b0b4b760a11b60448201526064015b60405180910390fd5b6001600160a01b038216620000e55760405162461bcd60e51b815260206004820152601160248201527032b6b83a3c903937b7ba26b0b730b3b2b960791b604482015260640162000090565b63ffffffff8086166080526001600160a01b0380851660a05283811660c05290851660e0528116156200011d576200011d81620002fb565b604080516001600160a01b0385811682528481166020830152831681830152905163ffffffff86811692908816917f4f9c27c2fe3f84576ea469d367d044da53c45e951617e8389f2b5ed8db9d25f09181900360600190a35050505050505050505062000190816200036460201b60201c565b5081600003620001d45760405162461bcd60e51b815260206004820152600e60248201526d085b5a5c9c9bdc90da185a5b925960921b604482015260640162000090565b826001600160a01b031663c34c08e56040518163ffffffff1660e01b8152600401602060405180830381865afa15801562000213573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906200023991906200045a565b6001600160a01b0316610100819052620002825760405162461bcd60e51b815260206004820152600960248201526810b2bc32b1baba37b960b91b604482015260640162000090565b5061012052506200047f9650505050505050565b600080546040516001600160a01b03808516939216917f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e091a3600080546001600160a01b039092166001600160a01b0319928316178155600255600180549091169055565b600354604080516001600160a01b03928316815291831660208301527fc77bec288fc88f168427f2f7da682eadb26cac89d8d591af6e443da98dff2bbc910160405180910390a1600380546001600160a01b0319166001600160a01b0392909216919091179055565b60045460408051918252602082018390527f877a02cb809da0364d23adca3cd50c451b53f279d3df632e1fc11eb66335bce5910160405180910390a1600455565b805163ffffffff81168114620003ba57600080fd5b919050565b80516001600160a01b0381168114620003ba57600080fd5b600080600080600080600060e0888a031215620003f357600080fd5b620003fe88620003a5565b96506200040e60208901620003a5565b95506200041e60408901620003bf565b94506200042e60608901620003bf565b93506200043e60808901620003bf565b925060a0880151915060c0880151905092959891949750929550565b6000602082840312156200046d57600080fd5b6200047882620003bf565b9392505050565b60805160a05160c05160e05161010051610120516112ac6200050760003960008181610ca901528181610d9c0152610f0f015260008181610e0e0152610e6c0152600081816101750152610b0001526000818161025c0152818161044a0152610ad90152600081816103fd015281816107e30152610bdc0152600061020801526112ac6000f3fe60806040526004361061012e5760003560e01c8063715018a6116100ab578063c5b350df1161006f578063c5b350df1461036d578063cc39428314610382578063d1851c92146103a2578063d232c220146103c0578063d69f9d61146103eb578063db1b76591461041f57600080fd5b8063715018a6146102cc5780637850b020146102e15780638da5cb5b146103015780639abaf4791461031f578063b1f8100d1461034d57600080fd5b806352a9674b116100f257806352a9674b146101f65780635bd11efc1461022a5780635f61e3ec1461024a57806368742da6146102965780636a42b8f8146102b657600080fd5b8063047dbeb81461013a57806314168416146101635780633cf52ffb146101ac57806348e6fa23146101c15780634ff746f6146101d657600080fd5b3661013557005b600080fd5b34801561014657600080fd5b5061015060045481565b6040519081526020015b60405180910390f35b34801561016f57600080fd5b506101977f000000000000000000000000000000000000000000000000000000000000000081565b60405163ffffffff909116815260200161015a565b3480156101b857600080fd5b50600254610150565b6101d46101cf366004610ff3565b61043f565b005b3480156101e257600080fd5b506101d46101f1366004611057565b6104f4565b34801561020257600080fd5b506101977f000000000000000000000000000000000000000000000000000000000000000081565b34801561023657600080fd5b506101d46102453660046110a9565b61050d565b34801561025657600080fd5b5061027e7f000000000000000000000000000000000000000000000000000000000000000081565b6040516001600160a01b03909116815260200161015a565b3480156102a257600080fd5b506101d46102b13660046110a9565b610544565b3480156102c257600080fd5b5062093a80610150565b3480156102d857600080fd5b506101d46105c1565b3480156102ed57600080fd5b506101d46102fc3660046110cd565b610675565b34801561030d57600080fd5b506000546001600160a01b031661027e565b34801561032b57600080fd5b5061033f61033a366004611057565b6106a9565b60405161015a92919061112c565b34801561035957600080fd5b506101d46103683660046110a9565b6106bb565b34801561037957600080fd5b506101d4610759565b34801561038e57600080fd5b5060035461027e906001600160a01b031681565b3480156103ae57600080fd5b506001546001600160a01b031661027e565b3480156103cc57600080fd5b506000546001600160a01b0316155b604051901515815260200161015a565b3480156103f757600080fd5b5061027e7f000000000000000000000000000000000000000000000000000000000000000081565b34801561042b57600080fd5b506103db61043a3660046110a9565b6107c9565b336001600160a01b037f000000000000000000000000000000000000000000000000000000000000000016146104ab5760405162461bcd60e51b815260206004820152600c60248201526b10b937b7ba26b0b730b3b2b960a11b60448201526064015b60405180910390fd5b6104b582826107da565b7fdcaa37a042a0087de79018c629bbd29cee82ca80bd9be394e1696bf9e93550778282336040516104e893929190611147565b60405180910390a15050565b6040516316c2fdb560e21b815260040160405180910390fd5b6000546001600160a01b03163314610538576040516311a8a1bb60e31b815260040160405180910390fd5b61054181610817565b50565b6000546001600160a01b0316331461056f576040516311a8a1bb60e31b815260040160405180910390fd5b4761057a8282610880565b816001600160a01b03167feaff4b37086828766ad3268786972c0cd24259d4c87a80f9d3963a3c3d999b0d826040516105b591815260200190565b60405180910390a25050565b6000546001600160a01b031633146105ec576040516311a8a1bb60e31b815260040160405180910390fd5b62093a80600254426105fe919061119b565b1161061c576040516324e0285f60e21b815260040160405180910390fd5b60025460000361063f57604051630e4b303f60e21b815260040160405180910390fd5b6001546001600160a01b031615610669576040516323295ef960e01b815260040160405180910390fd5b610673600061099e565b565b6000546001600160a01b031633146106a0576040516311a8a1bb60e31b815260040160405180910390fd5b61054181610a03565b600060606106b683610a44565b915091565b6000546001600160a01b031633146106e6576040516311a8a1bb60e31b815260040160405180910390fd5b6001546001600160a01b038281169116148015610704575060025415155b15610722576040516311bc066560e11b815260040160405180910390fd5b6000546001600160a01b0380831691160361075057604051634a2fb73f60e11b815260040160405180910390fd5b61054181610b87565b6001546001600160a01b03163314610784576040516311a7f27160e11b815260040160405180910390fd5b62093a8060025442610796919061119b565b116107b4576040516324e0285f60e21b815260040160405180910390fd5b600154610673906001600160a01b031661099e565b60006107d482610bd5565b92915050565b600354610813907f0000000000000000000000000000000000000000000000000000000000000000906001600160a01b03168484610c01565b5050565b600354604080516001600160a01b03928316815291831660208301527fc77bec288fc88f168427f2f7da682eadb26cac89d8d591af6e443da98dff2bbc910160405180910390a1600380546001600160a01b0319166001600160a01b0392909216919091179055565b804710156108d05760405162461bcd60e51b815260206004820152601d60248201527f416464726573733a20696e73756666696369656e742062616c616e636500000060448201526064016104a2565b6000826001600160a01b03168260405160006040518083038185875af1925050503d806000811461091d576040519150601f19603f3d011682016040523d82523d6000602084013e610922565b606091505b50509050806109995760405162461bcd60e51b815260206004820152603a60248201527f416464726573733a20756e61626c6520746f2073656e642076616c75652c207260448201527f6563697069656e74206d6179206861766520726576657274656400000000000060648201526084016104a2565b505050565b600080546040516001600160a01b03808516939216917f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e091a3600080546001600160a01b039092166001600160a01b0319928316178155600255600180549091169055565b60045460408051918252602082018390527f877a02cb809da0364d23adca3cd50c451b53f279d3df632e1fc11eb66335bce5910160405180910390a1600455565b600354610a59906001600160a01b0316610bd5565b610a945760405162461bcd60e51b815260206004820152600c60248201526b10b61921b7b73732b1ba37b960a11b60448201526064016104a2565b8051602014610acf5760405162461bcd60e51b8152602060048201526007602482015266042d8cadccee8d60cb1b60448201526064016104a2565b6001600160a01b037f000000000000000000000000000000000000000000000000000000000000000016638e7d93fa7f0000000000000000000000000000000000000000000000000000000000000000610b28846111ae565b6040516001600160e01b031960e085901b16815263ffffffff9290921660048301526024820152604401600060405180830381600087803b158015610b6c57600080fd5b505af1158015610b80573d6000803e3d6000fd5b5050505050565b42600255600180546001600160a01b0319166001600160a01b0383169081179091556040517f6ab4d119f23076e8ad491bc65ce85f017fb0591dce08755ba8591059cc51737a90600090a250565b60006107d47f000000000000000000000000000000000000000000000000000000000000000083610e01565b8151602014610c415760405162461bcd60e51b815260206004820152600c60248201526b042c8c2e8c240d8cadccee8d60a31b60448201526064016104a2565b805115610c7f5760405162461bcd60e51b815260206004820152600c60248201526b042c8c2e8c240d8cadccee8d60a31b60448201526064016104a2565b6000610c8a34610f3a565b6040516366c96b3760e01b8152606060048201526000606482018190527f00000000000000000000000000000000000000000000000000000000000000006024830152602060448301529192506001600160a01b038716906366c96b3790608401602060405180830381865afa158015610d08573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610d2c91906111d5565b9050610d398260016111ee565b8110610d6f5760405162461bcd60e51b8152602060048201526005602482015264216665657360d81b60448201526064016104a2565b60405163bd45c4e760e01b81526001600160a01b0387169063bd45c4e7908490610dc790899089906000907f000000000000000000000000000000000000000000000000000000000000000090600290600401611201565b6000604051808303818588803b158015610de057600080fd5b505af1158015610df4573d6000803e3d6000fd5b5050505050505050505050565b6000336001600160a01b037f00000000000000000000000000000000000000000000000000000000000000001614610e675760405162461bcd60e51b815260206004820152600960248201526810b2bc32b1baba37b960b91b60448201526064016104a2565b6000807f00000000000000000000000000000000000000000000000000000000000000006001600160a01b031663d0496d6a6040518163ffffffff1660e01b8152600401606060405180830381865afa158015610ec8573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610eec919061123f565b5091509150836001600160a01b0316826001600160a01b0316148015610f3157507f000000000000000000000000000000000000000000000000000000000000000081145b95945050505050565b6000600454821115610f4c5760045491505b5090565b634e487b7160e01b600052604160045260246000fd5b600082601f830112610f7757600080fd5b813567ffffffffffffffff80821115610f9257610f92610f50565b604051601f8301601f19908116603f01168101908282118183101715610fba57610fba610f50565b81604052838152866020858801011115610fd357600080fd5b836020870160208301376000602085830101528094505050505092915050565b6000806040838503121561100657600080fd5b823567ffffffffffffffff8082111561101e57600080fd5b61102a86838701610f66565b9350602085013591508082111561104057600080fd5b5061104d85828601610f66565b9150509250929050565b60006020828403121561106957600080fd5b813567ffffffffffffffff81111561108057600080fd5b61108c84828501610f66565b949350505050565b6001600160a01b038116811461054157600080fd5b6000602082840312156110bb57600080fd5b81356110c681611094565b9392505050565b6000602082840312156110df57600080fd5b5035919050565b6000815180845260005b8181101561110c576020818501810151868301820152016110f0565b506000602082860101526020601f19601f83011685010191505092915050565b821515815260406020820152600061108c60408301846110e6565b60608152600061115a60608301866110e6565b828103602084015261116c81866110e6565b91505060018060a01b0383166040830152949350505050565b634e487b7160e01b600052601160045260246000fd5b818103818111156107d4576107d4611185565b805160208083015191908110156111cf576000198160200360031b1b821691505b50919050565b6000602082840312156111e757600080fd5b5051919050565b808201808211156107d4576107d4611185565b600060018060a01b03808816835260a0602084015261122360a08401886110e6565b9516604083015250606081019290925260809091015292915050565b60008060006060848603121561125457600080fd5b835161125f81611094565b60208501516040909501519096949550939250505056fea26469706673582212200ae4f053d41e79431398d163a4c6859ef849b3f23590cad671c6cac602adae1364736f6c63430008110033";

type MultichainHubConnectorConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: MultichainHubConnectorConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class MultichainHubConnector__factory extends ContractFactory {
  constructor(...args: MultichainHubConnectorConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    _domain: PromiseOrValue<BigNumberish>,
    _mirrorDomain: PromiseOrValue<BigNumberish>,
    _amb: PromiseOrValue<string>,
    _rootManager: PromiseOrValue<string>,
    _mirrorConnector: PromiseOrValue<string>,
    _mirrorChainId: PromiseOrValue<BigNumberish>,
    _gasCap: PromiseOrValue<BigNumberish>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<MultichainHubConnector> {
    return super.deploy(
      _domain,
      _mirrorDomain,
      _amb,
      _rootManager,
      _mirrorConnector,
      _mirrorChainId,
      _gasCap,
      overrides || {}
    ) as Promise<MultichainHubConnector>;
  }
  override getDeployTransaction(
    _domain: PromiseOrValue<BigNumberish>,
    _mirrorDomain: PromiseOrValue<BigNumberish>,
    _amb: PromiseOrValue<string>,
    _rootManager: PromiseOrValue<string>,
    _mirrorConnector: PromiseOrValue<string>,
    _mirrorChainId: PromiseOrValue<BigNumberish>,
    _gasCap: PromiseOrValue<BigNumberish>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(
      _domain,
      _mirrorDomain,
      _amb,
      _rootManager,
      _mirrorConnector,
      _mirrorChainId,
      _gasCap,
      overrides || {}
    );
  }
  override attach(address: string): MultichainHubConnector {
    return super.attach(address) as MultichainHubConnector;
  }
  override connect(signer: Signer): MultichainHubConnector__factory {
    return super.connect(signer) as MultichainHubConnector__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): MultichainHubConnectorInterface {
    return new utils.Interface(_abi) as MultichainHubConnectorInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): MultichainHubConnector {
    return new Contract(
      address,
      _abi,
      signerOrProvider
    ) as MultichainHubConnector;
  }
}
