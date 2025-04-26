/**
 * Program IDL in camelCase format in order to be used in JS/TS.
 *
 * Note that this is only a type helper and is not the actual IDL. The original
 * IDL can be found at `target/idl/agrotree_marketplace.json`.
 */
export type AgrotreeMarketplace = {
  "address": "EFw2geYiUUZup7tWqXFn5voceBPPPMttQvkLZ42ZD3WD",
  "metadata": {
    "name": "agrotreeMarketplace",
    "version": "0.1.0",
    "spec": "0.1.0",
    "description": "Created with Anchor"
  },
  "instructions": [
    {
      "name": "buyCnft",
      "discriminator": [
        202,
        184,
        228,
        3,
        59,
        163,
        93,
        90
      ],
      "accounts": [
        {
          "name": "buyer",
          "writable": true,
          "signer": true
        },
        {
          "name": "seller",
          "writable": true
        },
        {
          "name": "marketConfig",
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  109,
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
          "name": "marketFeeVault",
          "writable": true,
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  109,
                  45,
                  102,
                  101,
                  101,
                  118,
                  97,
                  117,
                  108,
                  116
                ]
              },
              {
                "kind": "account",
                "path": "marketConfig"
              }
            ]
          }
        },
        {
          "name": "compressedListing",
          "writable": true,
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  99,
                  45,
                  108,
                  105,
                  115,
                  116,
                  105,
                  110,
                  103
                ]
              },
              {
                "kind": "account",
                "path": "seller"
              },
              {
                "kind": "account",
                "path": "merkleTree"
              },
              {
                "kind": "arg",
                "path": "args.asset_id"
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
          "name": "args",
          "type": {
            "defined": {
              "name": "buyCnftArgs"
            }
          }
        }
      ]
    },
    {
      "name": "collectFee",
      "discriminator": [
        60,
        173,
        247,
        103,
        4,
        93,
        130,
        48
      ],
      "accounts": [
        {
          "name": "authority",
          "writable": true,
          "signer": true,
          "relations": [
            "marketConfig"
          ]
        },
        {
          "name": "marketConfig",
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  109,
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
          "name": "marketFeeVault",
          "writable": true,
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  109,
                  45,
                  102,
                  101,
                  101,
                  118,
                  97,
                  117,
                  108,
                  116
                ]
              },
              {
                "kind": "account",
                "path": "marketConfig"
              }
            ]
          }
        },
        {
          "name": "destination",
          "writable": true
        },
        {
          "name": "systemProgram",
          "address": "11111111111111111111111111111111"
        }
      ],
      "args": []
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
          "name": "marketConfig",
          "writable": true,
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  109,
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
          "name": "marketFeeVault",
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  109,
                  45,
                  102,
                  101,
                  101,
                  118,
                  97,
                  117,
                  108,
                  116
                ]
              },
              {
                "kind": "account",
                "path": "marketConfig"
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
          "name": "fee",
          "type": "u16"
        }
      ]
    },
    {
      "name": "listingCnft",
      "discriminator": [
        186,
        251,
        104,
        187,
        45,
        135,
        27,
        215
      ],
      "accounts": [
        {
          "name": "seller",
          "writable": true,
          "signer": true
        },
        {
          "name": "compressedListing",
          "writable": true,
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  99,
                  45,
                  108,
                  105,
                  115,
                  116,
                  105,
                  110,
                  103
                ]
              },
              {
                "kind": "account",
                "path": "seller"
              },
              {
                "kind": "account",
                "path": "merkleTree"
              },
              {
                "kind": "arg",
                "path": "args.asset_id"
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
          "name": "args",
          "type": {
            "defined": {
              "name": "listingCnftArgs"
            }
          }
        }
      ]
    },
    {
      "name": "unlistCnft",
      "discriminator": [
        219,
        67,
        11,
        161,
        198,
        208,
        221,
        217
      ],
      "accounts": [
        {
          "name": "seller",
          "writable": true,
          "signer": true
        },
        {
          "name": "compressedListing",
          "writable": true,
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  99,
                  45,
                  108,
                  105,
                  115,
                  116,
                  105,
                  110,
                  103
                ]
              },
              {
                "kind": "account",
                "path": "seller"
              },
              {
                "kind": "account",
                "path": "merkleTree"
              },
              {
                "kind": "arg",
                "path": "args.asset_id"
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
          "name": "args",
          "type": {
            "defined": {
              "name": "unlistCnftArgs"
            }
          }
        }
      ]
    }
  ],
  "accounts": [
    {
      "name": "compressedListing",
      "discriminator": [
        164,
        96,
        88,
        33,
        255,
        76,
        15,
        149
      ]
    },
    {
      "name": "marketConfig",
      "discriminator": [
        119,
        255,
        200,
        88,
        252,
        82,
        128,
        24
      ]
    }
  ],
  "errors": [
    {
      "code": 6000,
      "name": "unauthorized"
    },
    {
      "code": 6001,
      "name": "mathError"
    },
    {
      "code": 6002,
      "name": "invalidFee"
    },
    {
      "code": 6003,
      "name": "invalidAssetId"
    },
    {
      "code": 6004,
      "name": "invalidPrice"
    },
    {
      "code": 6005,
      "name": "invalidCompressedListingSeller"
    },
    {
      "code": 6006,
      "name": "invalidCompressedListingMerkleTree"
    },
    {
      "code": 6007,
      "name": "invalidCompressedListingAssetId"
    }
  ],
  "types": [
    {
      "name": "buyCnftArgs",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "assetId",
            "type": "pubkey"
          },
          {
            "name": "cnftArgs",
            "type": {
              "defined": {
                "name": "cnftArgs"
              }
            }
          }
        ]
      }
    },
    {
      "name": "cnftArgs",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "root",
            "type": {
              "array": [
                "u8",
                32
              ]
            }
          },
          {
            "name": "dataHash",
            "type": {
              "array": [
                "u8",
                32
              ]
            }
          },
          {
            "name": "creatorHash",
            "type": {
              "array": [
                "u8",
                32
              ]
            }
          },
          {
            "name": "nonce",
            "type": "u64"
          },
          {
            "name": "index",
            "type": "u32"
          }
        ]
      }
    },
    {
      "name": "compressedListing",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "seller",
            "type": "pubkey"
          },
          {
            "name": "merkleTree",
            "type": "pubkey"
          },
          {
            "name": "assetId",
            "type": "pubkey"
          },
          {
            "name": "price",
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
      "name": "listingCnftArgs",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "assetId",
            "type": "pubkey"
          },
          {
            "name": "price",
            "type": "u64"
          },
          {
            "name": "cnftArgs",
            "type": {
              "defined": {
                "name": "cnftArgs"
              }
            }
          }
        ]
      }
    },
    {
      "name": "marketConfig",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "authority",
            "type": "pubkey"
          },
          {
            "name": "feeVault",
            "type": "pubkey"
          },
          {
            "name": "fee",
            "type": "u16"
          },
          {
            "name": "bump",
            "type": "u8"
          },
          {
            "name": "feeVaultBump",
            "type": "u8"
          }
        ]
      }
    },
    {
      "name": "unlistCnftArgs",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "assetId",
            "type": "pubkey"
          },
          {
            "name": "cnftArgs",
            "type": {
              "defined": {
                "name": "cnftArgs"
              }
            }
          }
        ]
      }
    }
  ],
  "constants": [
    {
      "name": "compressedListingSeed",
      "type": "bytes",
      "value": "[99, 45, 108, 105, 115, 116, 105, 110, 103]"
    },
    {
      "name": "marketConfigSeed",
      "type": "bytes",
      "value": "[109, 45, 99, 111, 110, 102, 105, 103]"
    },
    {
      "name": "marketFeevaultSeed",
      "type": "bytes",
      "value": "[109, 45, 102, 101, 101, 118, 97, 117, 108, 116]"
    },
    {
      "name": "offerSeed",
      "type": "bytes",
      "value": "[111, 102, 102, 101, 114]"
    }
  ]
};
