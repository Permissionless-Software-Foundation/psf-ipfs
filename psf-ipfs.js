/*
  This is the primary entry point for the psf-bch-wallet CLI app.
  This app uses commander.js.
*/

// Global npm libraries
import { Command } from 'commander'

// Local libraries
import WalletCreate from './src/commands/wallet-create.js'
import WalletList from './src/commands/wallet-list.js'
import WalletAddrs from './src/commands/wallet-addrs.js'
import WalletBalance from './src/commands/wallet-balance.js'
import SendBch from './src/commands/send-bch.js'
import SendTokens from './src/commands/send-tokens.js'
import WalletSweep from './src/commands/wallet-sweep.js'
import MsgSign from './src/commands/msg-sign.js'
import MsgVerify from './src/commands/msg-verify.js'
import IPFSStatus from './src/commands/ipfs-status.js'
import IPFSPeers from './src/commands/ipfs-peers.js'
import IPFSRelays from './src/commands/ipfs-relays.js'
import IPFSConnect from './src/commands/ipfs-connect.js'
import IPFSFileInfo from './src/commands/file-info.js'
import WalletService from './src/commands/wallet-service.js'
import IPFSFileDownload from './src/commands/file-download.js'
import IPFSPinClaim from './src/commands/pin-claim.js'
// Instantiate the subcommands
const walletCreate = new WalletCreate()
const walletList = new WalletList()
const walletAddrs = new WalletAddrs()
const walletBalance = new WalletBalance()
const sendBch = new SendBch()
const sendTokens = new SendTokens()
const walletSweep = new WalletSweep()
const msgSign = new MsgSign()
const msgVerify = new MsgVerify()
const ipfsStatus = new IPFSStatus()
const ipfsPeers = new IPFSPeers()
const ipfsRelays = new IPFSRelays()
const ipfsConnect = new IPFSConnect()
const ipfsFileInfo = new IPFSFileInfo()
const ipfsFileDownload = new IPFSFileDownload()
const walletService = new WalletService()
const program = new Command()
const ipfsPinClaim = new IPFSPinClaim()

program
  // Define the psf-bch-wallet app options
  .name('psf-bch-wallet')
  .description('A command-line BCH and SLP token wallet.')

// Define the wallet-create command
program.command('wallet-create')
  .description('Create a new wallet with name (-n <name>) and description (-d)')
  .option('-n, --name <string>', 'wallet name')
  .option('-d --description <string>', 'what the wallet is being used for')
  .action(walletCreate.run)

// Define the wallet-list command
program.command('wallet-list')
  .description('List existing wallets')
  .action(walletList.run)

program.command('wallet-addrs')
  .description('List the different addresses for a wallet.')
  .option('-n, --name <string>', 'wallet name')
  .action(walletAddrs.run)

program.command('wallet-balance')
  .description('Get balances in BCH and SLP tokens held by the wallet.')
  .option('-n, --name <string>', 'wallet name')
  .action(walletBalance.run)

program.command('wallet-sweep')
  .description('Sweep funds from a WIF private key')
  .option('-n, --name <string>', 'wallet name receiving BCH')
  .option('-w, --wif <string>', 'WIF private key to sweep')
  .action(walletSweep.run)

program.command('send-bch')
  .description('Send BCH to an address')
  .option('-n, --name <string>', 'wallet name sending BCH')
  .option('-a, --addr <string>', 'address to send BCH to')
  .option('-q, --qty <string>', 'The quantity of BCH to send')
  .action(sendBch.run)

program.command('send-tokens')
  .description('Send SLP tokens to an address')
  .option('-n, --name <string>', 'wallet name sending BCH')
  .option('-a, --addr <string>', 'address to send BCH to')
  .option('-q, --qty <string>', 'The quantity of BCH to send')
  .option('-t, --tokenId <string>', 'The token ID of the token to send')
  .action(sendTokens.run)

program.command('msg-sign')
  .description('Sign a message using the wallets private key')
  .option('-n, --name <string>', 'wallet to sign the message')
  .option('-m, --msg <string>', 'Message to sign')
  .action(msgSign.run)

program.command('msg-verify')
  .description('Verify a signature')
  .option('-s, --sig <string>', 'Signature')
  .option('-m, --msg <string>', 'Cleartext message that was signed')
  .option('-a, --addr <string>', 'BCH address generated from private key that signed the message')
  .action(msgVerify.run)

program.command('ipfs-status')
  .description('Get ipfs node status')
  .action(ipfsStatus.run)

program.command('ipfs-peers')
  .description('Get ipfs node peers')
  .option('-a, --all', 'Display all data about peers')
  .action(ipfsPeers.run)

program.command('ipfs-relays')
  .description('Query the state of circuit relays')
  .action(ipfsRelays.run)

program.command('ipfs-connect')
  .description('Connect to an IPFS peer')
  .option('-m, --multiaddr <string>', 'Multiaddr of the peer to connect to')
  .option('-d, --details', 'Get details about the peer')
  .action(ipfsConnect.run)

program.command('file-info')
  .description('Get information about a file in IPFS')
  .option('-c, --cid <string>', 'CID of the file to get information about')
  .action(ipfsFileInfo.run)

program.command('file-download')
  .description('Download a file from IPFS to the files/ directory')
  .option('-c, --cid <string>', 'CID of the file to download')
  .action(ipfsFileDownload.run)

program.command('wallet-service')
  .description('Get information about the wallet service providers')
  .action(walletService.run)

program.command('pin-claim')
  .description('Trigger a pin claim for a given CID')
  .option('-p, --proofOfBurnTxid <string>', 'Proof of Burn TxId (required)')
  .option('-t, --claimTxid <string>', 'Claim TxId (required)')
  .option('-f, --filename <string>', 'File Name (required)')
  .option('-a, --address <string>', 'Address to claim the pin to (required)')
  .option('-c, --cid <string>', 'CID of the file (required)')
  .action(ipfsPinClaim.run)

program.parseAsync(process.argv)
