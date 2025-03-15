# psf-ipfs

This is a command-line interface (CLI) application for interrogating the PSF IPFS network. This includes many back end infrastructure that is part of the [Cash Stack](https://cashstack.info), and in particular the [ipfs-bch-wallet-consumer](https://cashstack.info/docs/local-back-end/ipfs-bch-wallet-consumer) service that acts as the gateway to the PSF IPFS network.

This CLI was forked from [psf-bch-wallet](https://github.com/Permissionless-Software-Foundation/psf-bch-wallet). This CLI has all the same commands as that one, plus the addition of IPFS-specific commands.

## Installation

This software requires node.js v20 or higher. Instructions for installation:

- `git clone https://github.com/Permissionless-Software-Foundation/psf-ipfs`
- `cd psf-ipfs`
- `npm install`

## Usage

### Display Help

- `node psf-ipfs.js help`

### IPFS Commands


#### Get Node Status

Get information about the node and the other nodes it is connected to:

- `node psf-ipfs.js ipfs-node`

##### Arguments
- none


#### IPFS Peers

Get information about the peers connected to the node:

- `node psf-ipfs.js ipfs-peers`

##### Arguments
- Use the `-a` flag to display verbose information about the peers (optional).


