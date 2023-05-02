import styles from "./styles.module.scss";
import iconFlower from "../../assets/input-flower.png";
import React, { useEffect, useState } from "react";
import { Icons, Input } from "../index";
import { ethers } from "ethers";
import { getEthBalance } from "../../utils";
import { TOKENS, FAST_BUY } from "../../constants";
import { useDebounce } from "../../hooks";
import { Spinner, BgGradient } from "../index";

export function Panel({
	ethersProvider,
	walletAddress,
}: {
	ethersProvider?: ethers.providers.Web3Provider;
	walletAddress: string;
}) {
	const { debouncedHandler } = useDebounce();

	/** Buy functionality  */
	const [buy, setBuy] = useState("0");
	const [selectedBuyToken, setSelectedBuyToken] = useState<(typeof TOKENS)[0]>(TOKENS[0]);
	const onSelectBuyToken = (e: React.ChangeEvent<HTMLSelectElement>) => {
		const val = TOKENS.find((item) => item.address === e.target.value);
		if (!val) return;
		setSelectedBuyToken(val);

		if (val.address === selectedSellToken.address) {
			onSwapTokens();
		}
	};

	/** Sell functionality */
	const [sell, setSell] = useState("0");
	const onChangeSell = (e: React.ChangeEvent<HTMLInputElement>) => {
		const value = e.target.value;

		if (value[0] === "0") {
			setSell(value.slice(1));
			return;
		}

		const newValue = value.replace(/[^0-9]/g, "");
		setSell(newValue);
	};
	const [selectedSellToken, setSelectedSellToken] = useState<(typeof TOKENS)[0]>(TOKENS[3]);
	const onSelectSellToken = async (e: React.ChangeEvent<HTMLSelectElement>) => {
		const val = TOKENS.find((item) => item.address === e.target.value);
		if (!val) return;
		setSelectedSellToken(val);

		if (val.address === selectedBuyToken.address) {
			onSwapTokens();
		}
	};

	/** Swap tokens */
	const onSwapTokens = () => {
		const temp = selectedSellToken;
		setSelectedSellToken(selectedBuyToken);
		setSelectedBuyToken(temp);

		const temp2 = sell;
		setSell(buy);
		setBuy(temp2);
	};

	/** Exchange functionality */
	const [isFetching, setIsFetching] = useState(false);
	const [estimatedGas, setEstimatedGas] = useState(0);
	const onExchange = async () => {
		const amount = parseFloat(sell) * Math.pow(10, selectedSellToken.decimals);
		setIsFetching(true);
		setBuy("");
		setEstimatedGas(0);
		if (Number.isNaN(amount) || !!amount === false) return;

		try {
			const url = `https://api.1inch.exchange/v5.0/1/quote?fromTokenAddress=${selectedSellToken.address}&toTokenAddress=${selectedBuyToken.address}&amount=${amount}`;
			const response = await fetch(url);
			const data = await response.json();

			setEstimatedGas(data.estimatedGas / 10000);
			const equivalent = data.toTokenAmount * Math.pow(10, -selectedBuyToken.decimals);
			setBuy(equivalent.toString());
		} catch (e) {
			console.log(e, "Oops, something went wrong!");
		} finally {
			setIsFetching(false);
		}
	};

	useEffect(() => {
		if (walletAddress && sell !== "0") {
			debouncedHandler(onExchange);
		}
	}, [selectedBuyToken.address, selectedSellToken.address, walletAddress, sell]);

	/** Get metamask wallet address ETH Balance */
	const [ethBalance, setEthBalance] = useState("0");
	useEffect(() => {
		const fetchEthBalance = async () => {
			if (!ethersProvider || !walletAddress) return;
			const ethBalance = await getEthBalance({
				walletAddress,
				ethersProvider,
			});
			setEthBalance(ethBalance);
		};

		fetchEthBalance();
	}, [walletAddress]);

	let equivalentOfOne = +buy / +sell;
	equivalentOfOne = Number.isNaN(equivalentOfOne) ? 0 : equivalentOfOne;

	/** Get tokens list */
	// Commented out, cause this functionality was not required, however leaving it here to show it is possible
	// useEffect(() => {
	// 	(async function () {
	// 		try {
	// 			const url = `https://api.1inch.exchange/v5.0/1/tokens`;
	// 			const response = await fetch(url);
	// 			const data = await response.json();
	// 			console.log(Object.values(data.tokens));
	// 		} catch (e) {
	// 			console.log(e, "Oops, something went wrong!");
	// 		} finally {
	// 			setIsFetching(false);
	// 		}
	// 	})();
	// }, []);

	return (
		<>
			<div className={styles.connectedWallet}>
				<p>Connected wallet address: {walletAddress}</p>
				<p>Wallet address ETH BALANCE: {ethBalance}</p>
			</div>
			<div className={styles.container}>
				<div className={styles.containerInner}>
					<BgGradient />
					<div className={styles.content}>
						<div className={styles.topCtas}>
							<div>
								<button>
									<Icons.IconRefresh />
								</button>
								<button>
									<Icons.IconGear />
								</button>
							</div>
						</div>
						<div>
							<Input
								label="You sell"
								value={sell}
								onChange={onChangeSell}
								onSelectToken={onSelectSellToken}
								selectedToken={selectedSellToken}
							/>
						</div>
						<div className={styles.swapWrapper}>
							<button onClick={onSwapTokens}>
								<Icons.IconSwitcher />
							</button>
							<div className={styles.line}></div>
						</div>
						<div>
							<Input
								showTag={true}
								label="You buy"
								value={buy}
								inputIsEditable={false}
								selectedToken={selectedBuyToken}
								onSelectToken={onSelectBuyToken}
							/>
						</div>
						<div className={styles.fastBuysWrapper}>
							{FAST_BUY.map((item) => {
								return (
									<button key={item.value} className={styles.fastBuy}>
										{item.label}
									</button>
								);
							})}
						</div>
						<div className={styles.converter}>
							<div className={styles.info}>
								<Icons.IconInfo />
							</div>
							<p>
								1 {selectedSellToken.label} = {equivalentOfOne.toFixed(2)} {selectedBuyToken.label} <span> ($2 030.4) </span>
							</p>

							<div className={styles.converterDropdown}>
								<img src={iconFlower} alt="" />
								<p>${estimatedGas}</p>
								<Icons.IconArrowDown color="#7185AA" />
							</div>
						</div>
						<div>
							<button className={styles.btnSwap} onClick={onSwapTokens}>
								Swap
							</button>
						</div>
					</div>
				</div>
			</div>

			{isFetching && (
				<div className={styles.fetching}>
					<Spinner />
				</div>
			)}
		</>
	);
}
