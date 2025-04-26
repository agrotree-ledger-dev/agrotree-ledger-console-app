/**
 * Program IDL in camelCase format in order to be used in JS/TS.
 *
 * Note that this is only a type helper and is not the actual IDL. The original
 * IDL can be found at `target/idl/agrotree_manager.json`.
 */
export type AgrotreeManager = {
  "address": "81W9dmkn3A8VjPprTTtZEdZv2UuNJhHau4EEjbrZYnwk",
  "metadata": {
    "name": "agrotreeManager",
    "version": "0.1.0",
    "spec": "0.1.0",
    "description": "Created with Anchor"
  },
  "instructions": [
    {
      "name": "addSaasAccount",
      "discriminator": [
        254,
        193,
        137,
        52,
        83,
        157,
        206,
        251
      ],
      "accounts": [
        {
          "name": "admin",
          "writable": true,
          "signer": true,
          "relations": [
            "config"
          ]
        },
        {
          "name": "config",
          "writable": true,
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  97,
                  103,
                  114,
                  111,
                  45,
                  99,
                  111,
                  110,
                  102,
                  105,
                  103
                ]
              }
            ]
          }
        },
        {
          "name": "systemProgram",
          "address": "11111111111111111111111111111111"
        }
      ],
      "args": [
        {
          "name": "accounts",
          "type": {
            "vec": "pubkey"
          }
        }
      ]
    },
    {
      "name": "createCollection",
      "discriminator": [
        156,
        251,
        92,
        54,
        233,
        2,
        16,
        82
      ],
      "accounts": [
        {
          "name": "creator",
          "writable": true,
          "signer": true
        },
        {
          "name": "config",
          "writable": true,
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  97,
                  103,
                  114,
                  111,
                  45,
                  99,
                  111,
                  110,
                  102,
                  105,
                  103
                ]
              }
            ]
          }
        },
        {
          "name": "collection",
          "writable": true,
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  99,
                  111,
                  108,
                  108,
                  101,
                  99,
                  116,
                  105,
                  111,
                  110
                ]
              },
              {
                "kind": "arg",
                "path": "cid"
              }
            ]
          }
        },
        {
          "name": "collectionMint",
          "writable": true,
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  99,
                  111,
                  108,
                  108,
                  101,
                  99,
                  116,
                  105,
                  111,
                  110,
                  45,
                  109,
                  105,
                  110,
                  116
                ]
              },
              {
                "kind": "account",
                "path": "collection"
              }
            ]
          }
        },
        {
          "name": "associatedTokenAccount",
          "writable": true,
          "pda": {
            "seeds": [
              {
                "kind": "account",
                "path": "collection"
              },
              {
                "kind": "const",
                "value": [
                  6,
                  221,
                  246,
                  225,
                  215,
                  101,
                  161,
                  147,
                  217,
                  203,
                  225,
                  70,
                  206,
                  235,
                  121,
                  172,
                  28,
                  180,
                  133,
                  237,
                  95,
                  91,
                  55,
                  145,
                  58,
                  140,
                  245,
                  133,
                  126,
                  255,
                  0,
                  169
                ]
              },
              {
                "kind": "account",
                "path": "collectionMint"
              }
            ],
            "program": {
              "kind": "const",
              "value": [
                140,
                151,
                37,
                143,
                78,
                36,
                137,
                241,
                187,
                61,
                16,
                41,
                20,
                142,
                13,
                131,
                11,
                90,
                19,
                153,
                218,
                255,
                16,
                132,
                4,
                142,
                123,
                216,
                219,
                233,
                248,
                89
              ]
            }
          }
        },
        {
          "name": "collectionMetadata",
          "writable": true
        },
        {
          "name": "collectionEdition",
          "writable": true
        },
        {
          "name": "tokenMetadataProgram",
          "address": "metaqbxxUerdq28cj1RbAWkYQm3ybzjb6a8bt518x1s"
        },
        {
          "name": "tokenProgram"
        },
        {
          "name": "associatedTokenProgram",
          "address": "ATokenGPvbdGVxr1b2hvZbsiqW5xWH25efTNsLJA8knL"
        },
        {
          "name": "systemProgram",
          "address": "11111111111111111111111111111111"
        },
        {
          "name": "rent",
          "address": "SysvarRent111111111111111111111111111111111"
        }
      ],
      "args": [
        {
          "name": "cid",
          "type": "u64"
        },
        {
          "name": "name",
          "type": "string"
        },
        {
          "name": "symbol",
          "type": "string"
        },
        {
          "name": "uri",
          "type": "string"
        }
      ]
    },
    {
      "name": "createTree",
      "discriminator": [
        165,
        83,
        136,
        142,
        89,
        202,
        47,
        220
      ],
      "accounts": [
        {
          "name": "payer",
          "writable": true,
          "signer": true
        },
        {
          "name": "collection",
          "writable": true,
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  99,
                  111,
                  108,
                  108,
                  101,
                  99,
                  116,
                  105,
                  111,
                  110
                ]
              },
              {
                "kind": "arg",
                "path": "cid"
              }
            ]
          }
        },
        {
          "name": "treeConfig",
          "writable": true,
          "pda": {
            "seeds": [
              {
                "kind": "account",
                "path": "merkleTree"
              }
            ],
            "program": {
              "kind": "account",
              "path": "mplBubblegumProgram"
            }
          }
        },
        {
          "name": "merkleTree",
          "writable": true,
          "signer": true
        },
        {
          "name": "mplBubblegumProgram",
          "address": "BGUMAp9Gq7iTEuizy4pqaxsTyUCBK68MDfK752saRPUY"
        },
        {
          "name": "splCompressionProgram",
          "address": "cmtDvXumGCrqC1Age74AVPhSRVXJMd8PJS91L8KbNCK"
        },
        {
          "name": "logWrapperProgram",
          "address": "noopb9bkMVfRPU8AsbpTUg8AQkHtKwMYZiFUjNRtMmV"
        },
        {
          "name": "systemProgram",
          "address": "11111111111111111111111111111111"
        }
      ],
      "args": [
        {
          "name": "cid",
          "type": "u64"
        },
        {
          "name": "maxDepth",
          "type": "u32"
        },
        {
          "name": "maxBufferSize",
          "type": "u32"
        }
      ]
    },
    {
      "name": "delegateToSaas",
      "discriminator": [
        222,
        68,
        150,
        160,
        51,
        88,
        166,
        54
      ],
      "accounts": [
        {
          "name": "payer",
          "writable": true,
          "signer": true
        },
        {
          "name": "config",
          "writable": true,
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  97,
                  103,
                  114,
                  111,
                  45,
                  99,
                  111,
                  110,
                  102,
                  105,
                  103
                ]
              }
            ]
          }
        },
        {
          "name": "delegateSaas",
          "writable": true,
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  100,
                  101,
                  108,
                  101,
                  103,
                  97,
                  116,
                  101
                ]
              },
              {
                "kind": "account",
                "path": "payer"
              },
              {
                "kind": "account",
                "path": "merkleTree"
              }
            ]
          }
        },
        {
          "name": "delegateSaasVault",
          "writable": true,
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  100,
                  101,
                  108,
                  101,
                  103,
                  97,
                  116,
                  101,
                  45,
                  118,
                  97,
                  117,
                  108,
                  116
                ]
              },
              {
                "kind": "account",
                "path": "delegateSaas"
              }
            ]
          }
        },
        {
          "name": "collection",
          "writable": true,
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  99,
                  111,
                  108,
                  108,
                  101,
                  99,
                  116,
                  105,
                  111,
                  110
                ]
              },
              {
                "kind": "arg",
                "path": "cid"
              }
            ]
          }
        },
        {
          "name": "treeConfig",
          "writable": true,
          "pda": {
            "seeds": [
              {
                "kind": "account",
                "path": "merkleTree"
              }
            ],
            "program": {
              "kind": "account",
              "path": "mplBubblegumProgram"
            }
          }
        },
        {
          "name": "merkleTree",
          "writable": true
        },
        {
          "name": "mplBubblegumProgram",
          "address": "BGUMAp9Gq7iTEuizy4pqaxsTyUCBK68MDfK752saRPUY"
        },
        {
          "name": "splCompressionProgram",
          "address": "cmtDvXumGCrqC1Age74AVPhSRVXJMd8PJS91L8KbNCK"
        },
        {
          "name": "logWrapperProgram",
          "address": "noopb9bkMVfRPU8AsbpTUg8AQkHtKwMYZiFUjNRtMmV"
        },
        {
          "name": "systemProgram",
          "address": "11111111111111111111111111111111"
        }
      ],
      "args": [
        {
          "name": "cid",
          "type": "u64"
        },
        {
          "name": "maxNftCanMint",
          "type": "u64"
        }
      ]
    },
    {
      "name": "initialize",
      "discriminator": [
        175,
        175,
        109,
        31,
        13,
        152,
        155,
        237
      ],
      "accounts": [
        {
          "name": "authority",
          "writable": true,
          "signer": true
        },
        {
          "name": "config",
          "writable": true,
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  97,
                  103,
                  114,
                  111,
                  45,
                  99,
                  111,
                  110,
                  102,
                  105,
                  103
                ]
              }
            ]
          }
        },
        {
          "name": "systemProgram",
          "address": "11111111111111111111111111111111"
        }
      ],
      "args": [
        {
          "name": "feeCollector",
          "type": "pubkey"
        },
        {
          "name": "lamportsPerCnft",
          "type": "u64"
        }
      ]
    },
    {
      "name": "mintBySaas",
      "discriminator": [
        161,
        3,
        86,
        147,
        90,
        23,
        107,
        148
      ],
      "accounts": [
        {
          "name": "authority",
          "writable": true,
          "signer": true
        },
        {
          "name": "collectionAuthority"
        },
        {
          "name": "config",
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  97,
                  103,
                  114,
                  111,
                  45,
                  99,
                  111,
                  110,
                  102,
                  105,
                  103
                ]
              }
            ]
          }
        },
        {
          "name": "feeCollector",
          "writable": true,
          "relations": [
            "config"
          ]
        },
        {
          "name": "delegateSaas",
          "writable": true,
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  100,
                  101,
                  108,
                  101,
                  103,
                  97,
                  116,
                  101
                ]
              },
              {
                "kind": "account",
                "path": "collectionAuthority"
              },
              {
                "kind": "account",
                "path": "merkleTree"
              }
            ]
          }
        },
        {
          "name": "delegateSaasVault",
          "writable": true,
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  100,
                  101,
                  108,
                  101,
                  103,
                  97,
                  116,
                  101,
                  45,
                  118,
                  97,
                  117,
                  108,
                  116
                ]
              },
              {
                "kind": "account",
                "path": "delegateSaas"
              }
            ]
          }
        },
        {
          "name": "collection",
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  99,
                  111,
                  108,
                  108,
                  101,
                  99,
                  116,
                  105,
                  111,
                  110
                ]
              },
              {
                "kind": "arg",
                "path": "cid"
              }
            ]
          }
        },
        {
          "name": "treeConfig",
          "writable": true,
          "pda": {
            "seeds": [
              {
                "kind": "account",
                "path": "merkleTree"
              }
            ],
            "program": {
              "kind": "account",
              "path": "mplBubblegumProgram"
            }
          }
        },
        {
          "name": "merkleTree",
          "writable": true
        },
        {
          "name": "leafOwner"
        },
        {
          "name": "leafDelegate"
        },
        {
          "name": "collectionMint"
        },
        {
          "name": "collectionMetadata",
          "writable": true
        },
        {
          "name": "collectionEdition",
          "docs": [
            "CHECK"
          ],
          "writable": true
        },
        {
          "name": "mplBubblegumProgram",
          "address": "BGUMAp9Gq7iTEuizy4pqaxsTyUCBK68MDfK752saRPUY"
        },
        {
          "name": "splCompressionProgram",
          "address": "cmtDvXumGCrqC1Age74AVPhSRVXJMd8PJS91L8KbNCK"
        },
        {
          "name": "logWrapperProgram",
          "address": "noopb9bkMVfRPU8AsbpTUg8AQkHtKwMYZiFUjNRtMmV"
        },
        {
          "name": "tokenMetadataProgram",
          "address": "metaqbxxUerdq28cj1RbAWkYQm3ybzjb6a8bt518x1s"
        },
        {
          "name": "tokenProgram"
        },
        {
          "name": "systemProgram",
          "address": "11111111111111111111111111111111"
        }
      ],
      "args": [
        {
          "name": "cid",
          "type": "u64"
        },
        {
          "name": "name",
          "type": "string"
        },
        {
          "name": "symbol",
          "type": "string"
        },
        {
          "name": "uri",
          "type": "string"
        }
      ]
    },
    {
      "name": "mintToCollection",
      "discriminator": [
        163,
        150,
        74,
        141,
        206,
        50,
        1,
        195
      ],
      "accounts": [
        {
          "name": "payer",
          "writable": true,
          "signer": true
        },
        {
          "name": "config",
          "writable": true,
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  97,
                  103,
                  114,
                  111,
                  45,
                  99,
                  111,
                  110,
                  102,
                  105,
                  103
                ]
              }
            ]
          }
        },
        {
          "name": "collection",
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  99,
                  111,
                  108,
                  108,
                  101,
                  99,
                  116,
                  105,
                  111,
                  110
                ]
              },
              {
                "kind": "arg",
                "path": "cid"
              }
            ]
          }
        },
        {
          "name": "treeConfig",
          "writable": true,
          "pda": {
            "seeds": [
              {
                "kind": "account",
                "path": "merkleTree"
              }
            ],
            "program": {
              "kind": "account",
              "path": "mplBubblegumProgram"
            }
          }
        },
        {
          "name": "merkleTree",
          "writable": true
        },
        {
          "name": "leafOwner"
        },
        {
          "name": "leafDelegate"
        },
        {
          "name": "collectionMint"
        },
        {
          "name": "collectionMetadata",
          "writable": true
        },
        {
          "name": "collectionEdition",
          "docs": [
            "CHECK"
          ],
          "writable": true
        },
        {
          "name": "mplBubblegumProgram",
          "address": "BGUMAp9Gq7iTEuizy4pqaxsTyUCBK68MDfK752saRPUY"
        },
        {
          "name": "splCompressionProgram",
          "address": "cmtDvXumGCrqC1Age74AVPhSRVXJMd8PJS91L8KbNCK"
        },
        {
          "name": "logWrapperProgram",
          "address": "noopb9bkMVfRPU8AsbpTUg8AQkHtKwMYZiFUjNRtMmV"
        },
        {
          "name": "tokenMetadataProgram",
          "address": "metaqbxxUerdq28cj1RbAWkYQm3ybzjb6a8bt518x1s"
        },
        {
          "name": "tokenProgram"
        },
        {
          "name": "systemProgram",
          "address": "11111111111111111111111111111111"
        }
      ],
      "args": [
        {
          "name": "cid",
          "type": "u64"
        },
        {
          "name": "name",
          "type": "string"
        },
        {
          "name": "symbol",
          "type": "string"
        },
        {
          "name": "uri",
          "type": "string"
        }
      ]
    },
    {
      "name": "removeSaasAccount",
      "discriminator": [
        25,
        117,
        218,
        7,
        234,
        34,
        216,
        65
      ],
      "accounts": [
        {
          "name": "admin",
          "writable": true,
          "signer": true,
          "relations": [
            "config"
          ]
        },
        {
          "name": "config",
          "writable": true,
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  97,
                  103,
                  114,
                  111,
                  45,
                  99,
                  111,
                  110,
                  102,
                  105,
                  103
                ]
              }
            ]
          }
        },
        {
          "name": "systemProgram",
          "address": "11111111111111111111111111111111"
        }
      ],
      "args": [
        {
          "name": "accounts",
          "type": {
            "vec": "pubkey"
          }
        }
      ]
    }
  ],
  "accounts": [
    {
      "name": "agroTreeCollection",
      "discriminator": [
        179,
        202,
        101,
        123,
        73,
        85,
        194,
        200
      ]
    },
    {
      "name": "agroTreeConfig",
      "discriminator": [
        53,
        171,
        243,
        0,
        161,
        92,
        55,
        91
      ]
    },
    {
      "name": "delegateSaas",
      "discriminator": [
        154,
        116,
        239,
        130,
        137,
        144,
        223,
        146
      ]
    }
  ],
  "errors": [
    {
      "code": 6000,
      "name": "customError",
      "msg": "Custom error message"
    },
    {
      "code": 6001,
      "name": "uriTooLong"
    },
    {
      "code": 6002,
      "name": "invalidUri"
    },
    {
      "code": 6003,
      "name": "invalidNftName"
    },
    {
      "code": 6004,
      "name": "symbolTooLong"
    },
    {
      "code": 6005,
      "name": "invalidAccountOwner"
    },
    {
      "code": 6006,
      "name": "metadataAccountAlreadyInUse"
    },
    {
      "code": 6007,
      "name": "masterEditionAccountAlreadyInUse"
    },
    {
      "code": 6008,
      "name": "unauthorized"
    },
    {
      "code": 6009,
      "name": "invalidCollectionId"
    },
    {
      "code": 6010,
      "name": "reachedMaxSaasAccount"
    },
    {
      "code": 6011,
      "name": "merkleTreeNotSet"
    },
    {
      "code": 6012,
      "name": "merkleTreeMismatch"
    },
    {
      "code": 6013,
      "name": "maxNftConMintMustBeGreaterThanOne"
    },
    {
      "code": 6014,
      "name": "noNftCanMint"
    },
    {
      "code": 6015,
      "name": "saasInsufficientFunds"
    }
  ],
  "types": [
    {
      "name": "agroTreeCollection",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "id",
            "type": "u64"
          },
          {
            "name": "authority",
            "type": "pubkey"
          },
          {
            "name": "mint",
            "type": "pubkey"
          },
          {
            "name": "metadata",
            "type": "pubkey"
          },
          {
            "name": "masterEdition",
            "type": "pubkey"
          },
          {
            "name": "merkleTree",
            "type": {
              "option": "pubkey"
            }
          },
          {
            "name": "treeConfig",
            "type": {
              "option": "pubkey"
            }
          },
          {
            "name": "bump",
            "type": "u8"
          }
        ]
      }
    },
    {
      "name": "agroTreeConfig",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "admin",
            "type": "pubkey"
          },
          {
            "name": "feeCollector",
            "type": "pubkey"
          },
          {
            "name": "saasAccount",
            "type": {
              "vec": "pubkey"
            }
          },
          {
            "name": "collectionCounter",
            "type": "u64"
          },
          {
            "name": "lamportsPerCnft",
            "type": "u64"
          },
          {
            "name": "bump",
            "type": "u8"
          }
        ]
      }
    },
    {
      "name": "delegateSaas",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "creator",
            "type": "pubkey"
          },
          {
            "name": "maxNftCanMint",
            "type": "u64"
          },
          {
            "name": "vault",
            "type": "pubkey"
          },
          {
            "name": "bump",
            "type": "u8"
          },
          {
            "name": "vaultBump",
            "type": "u8"
          }
        ]
      }
    }
  ],
  "constants": [
    {
      "name": "collectionMintSeed",
      "type": "bytes",
      "value": "[99, 111, 108, 108, 101, 99, 116, 105, 111, 110, 45, 109, 105, 110, 116]"
    },
    {
      "name": "collectionSeed",
      "type": "bytes",
      "value": "[99, 111, 108, 108, 101, 99, 116, 105, 111, 110]"
    },
    {
      "name": "configSeed",
      "type": "bytes",
      "value": "[97, 103, 114, 111, 45, 99, 111, 110, 102, 105, 103]"
    },
    {
      "name": "delegateSaasSeed",
      "type": "bytes",
      "value": "[100, 101, 108, 101, 103, 97, 116, 101]"
    },
    {
      "name": "delegateSaasVaultSeed",
      "type": "bytes",
      "value": "[100, 101, 108, 101, 103, 97, 116, 101, 45, 118, 97, 117, 108, 116]"
    },
    {
      "name": "mtreeSeed",
      "type": "bytes",
      "value": "[109, 116, 114, 101, 101]"
    }
  ]
};
