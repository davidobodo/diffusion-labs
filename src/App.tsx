import { useEffect, useState } from "react";
import { Panel } from "./components/panel";
import { ethers } from "ethers";
import Web3Modal from "web3modal";
function App() {
	const [provider, setProvider] = useState<ethers.providers.Web3Provider>();
	const [account, setAccount] = useState("");

	console.log(provider);
	console.log(account);
	const [ethBalance, setEthBalance] = useState("");

	useEffect(() => {
		connectToMetamask();
	}, []);

	const connectToMetamask = async () => {
		if (window.ethereum) {
			try {
				const providerOptions = {
					metamask: {
						id: "injected",
						name: "MetaMask",
						type: "injected",
						check: "isMetaMask",
						package: null,
						connector: async () => {
							return window.ethereum;
						},
					},
				};

				const web3Modal = new Web3Modal({
					cacheProvider: true,
					providerOptions,
				});

				const selectedProvider = await web3Modal.connect();

				const ethersProvider = new ethers.providers.Web3Provider(selectedProvider);
				setProvider(ethersProvider);

				const signer = ethersProvider.getSigner();
				const address = await signer.getAddress();
				setAccount(address);

				const ethBalance = await ethersProvider.getBalance(address);

				const formattedBalance = ethers.utils.formatEther(ethBalance);
				setEthBalance(formattedBalance);
			} catch (error) {
				console.log(error);
			}
		} else {
			console.log("Metamask not found");
		}
	};

	return (
		<div className="app-wrapper">
			<Panel ethBalance={ethBalance} />
		</div>
	);
}

export default App;
