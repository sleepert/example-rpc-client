const Web3 = require("web3");
const logger = require("./logger");

const getData = async (req, resp) => {
  const web3 = new Web3(process.env.RPC_ENDPOINT);
  blockNumber = await web3.eth.getBlockNumber();
  logger.info(`Getting block info: ${blockNumber}`);
  blockInfo = await web3.eth.getBlock(blockNumber);

  resp.send( blockInfo );
};

module.exports = { getData };
