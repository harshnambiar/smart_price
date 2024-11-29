import detectEthereumProvider from "@metamask/detect-provider"
import Web3 from "web3"; 
import ABI from './abi.json'




async function priceCheck(val) {
  const web3 = new Web3('https://mainnet.infura.io/v3/');
  const abiInstance = ABI;
  const uniContract = new web3.eth.Contract(
                                    abiInstance,
                     "0x7a250d5630B4cF539739dF2C5dAcb4c659F2488D");
    var tokenAddress = '';
    if (val == 'eth'){
        tokenAddress = '';
    }
    else if (val == 'arb') {
        tokenAddress = '0xB50721BCf8d664c30412Cfbc6cf7a15145234ad1';
    }
    else if (val == 'pol'){
        tokenAddress = '0x455e53CBB86018Ac2B8092FdCd39d8444aFFC3F6';
    }
    else {
        throw "undefined token code";
    }

    try {
        const tokenPrice = await uniContract.methods.getAmountsOut(1, [tokenAddress, '0xdAC17F958D2ee523a2206206994597C13D831ec7']).call();
        console.log(`Current price in USDT: ${tokenPrice[1] / 1e18}`);
    }
    catch (e){
        console.log(e);
    }
 

  
}
window.priceCheck = priceCheck;
