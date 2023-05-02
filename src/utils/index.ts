import { ContractInterface, ethers } from "ethers";

/** Gets the balance of token a wallet address has */
async function getTokenBalance({
	tokenAddress,
	walletAddress,
	ethersProvider,
	abi,
}: {
	tokenAddress: string;
	walletAddress: string;
	abi: ContractInterface;
	ethersProvider: ethers.providers.Web3Provider;
}) {
	const tokenContract = new ethers.Contract(tokenAddress, abi, ethersProvider);
	const balance = await tokenContract.balanceOf(walletAddress);
	const formattedBalance = ethers.utils.formatEther(balance);
	return formattedBalance;
}

/** Gets eth balance of a wallet address */
async function getEthBalance({
	walletAddress,
	ethersProvider,
}: {
	walletAddress: string;
	ethersProvider: ethers.providers.Web3Provider;
}) {
	const ethBalance = await ethersProvider.getBalance(walletAddress);
	const formattedBalance = ethers.utils.formatEther(ethBalance);
	return formattedBalance;
}

export { getTokenBalance, getEthBalance };
