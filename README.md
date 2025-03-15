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


#### IPFS Relays

Get information about the [V2 Circuit Relays](https://cashstack.info/docs/local-back-end/circuit-relay) relays connected to the node:

- `node psf-ipfs.js ipfs-relays`

##### Arguments
- none


#### IPFS Connect

Instruct the node to attempt to connect to a specific peer:

- `node psf-ipfs.js ipfs-connect -d -m /ip4/143.198.70.59/tcp/4001/p2p/12D3KooWMbU9R49aiYUeFBpxFYK6PggacoeMydaZaR2dzDpWgcA6`

##### Arguments
- Use the `-m` flag to specify the multiaddr of the peer to connect to (required).
- Use the `-d` flag to display debug information (optional).


#### Wallet Service

Query the instance of [ipfs-bch-wallet-consumer](https://cashstack.info/docs/local-back-end/ipfs-bch-wallet-consumer) to retrieve the instances of [ipfs-bch-wallet-service](https://cashstack.info/docs/global-back-end/ipfs-bch-wallet-service) (blockchain services) and [ipfs-file-pin-service](https://cashstack.info/docs/global-back-end/file-storage#ipfs-file-pin-service) (file storage services) it is connected to.

- `node psf-ipfs.js wallet-service`

##### Arguments
- none


#### File Info

Query the instance of [ipfs-file-pin-service](https://cashstack.info/docs/global-back-end/file-storage#ipfs-file-pin-service) connected to this node. Retrieve information about the pin status of a specific file.

- `node psf-ipfs.js file-info -c bafybeicntn33k36dtrqd6ssf45duek5m6wz55antcdt4k4ltmq2u3sj2jm`

##### Arguments
- Use `-c` to specify the [CID](https://docs.ipfs.tech/concepts/content-addressing/) of the file (required).


#### File Download

Download a file from the instance of [ipfs-file-pin-service](https://cashstack.info/docs/global-back-end/file-storage#ipfs-file-pin-service) connected to this node.

- `node psf-ipfs.js file-download -c bafybeicntn33k36dtrqd6ssf45duek5m6wz55antcdt4k4ltmq2u3sj2jm`

##### Arguments
- Use `-c` to specify the [CID](https://docs.ipfs.tech/concepts/content-addressing/) of the file (required).


