import ABI from "./erc20-abi";

export type TToken = {
	label: string;
	address: string;
	img: string;
	decimals: number;
};

const ARB_ADDRESS = "0xB50721BCf8d664c30412Cfbc6cf7a15145234ad1";
const DAI_ADDRESS = "0x6B175474E89094C44Da98b954EedeAC495271d0F";
const USDC_ADDRESS = "0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48";
const USDT_ADDRESS = "0xdAC17F958D2ee523a2206206994597C13D831ec7";
const WBTC_ADDRESS = "0x2260FAC5E5542a773Aa44fBCfeDf7C193bc2C599";
const WETH_ADDRESS = "0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2";
const TOKENS: TToken[] = [
	{
		label: "ARB",
		address: ARB_ADDRESS,
		img: "https://etherscan.io/images/main/empty-token.png",
		decimals: 18,
	},
	{
		label: "DAI",
		address: DAI_ADDRESS,
		img: "https://tokens.1inch.io/0x6b175474e89094c44da98b954eedeac495271d0f.png",
		decimals: 18,
	},
	{
		label: "USDC",
		address: USDC_ADDRESS,
		img: "https://tokens.1inch.io/0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48.png",
		decimals: 6,
	},
	{
		label: "USDT",
		address: USDT_ADDRESS,
		img: "https://tokens.1inch.io/0xdac17f958d2ee523a2206206994597c13d831ec7.png",
		decimals: 6,
	},
	{
		label: "WBTC",
		address: WBTC_ADDRESS,
		img: "https://tokens.1inch.io/0x2260fac5e5542a773aa44fbcfedf7c193bc2c599.png",
		decimals: 8,
	},
	{
		label: "WETH",
		address: WETH_ADDRESS,
		img: "https://tokens.1inch.io/0xc02aaa39b223fe8d0a0e5c4f27ead9083c756cc2.png",
		decimals: 18,
	},
];

const FAST_BUY = [
	{
		label: "25%",
		value: "25",
	},
	{
		label: "50%",
		value: "50",
	},
	{
		label: "75%",
		value: "75",
	},
	{
		label: "100%",
		value: "100",
	},
];

export { TOKENS, ABI, FAST_BUY };
