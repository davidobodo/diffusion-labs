import { useEffect, useState } from "react";
import { Panel } from "./components/panel";
import { ethers } from "ethers";
import Web3Modal from "web3modal";

function App() {
	const [ethersProvider, setEthersProvider] = useState<ethers.providers.Web3Provider>();
	const [walletAddress, setWalletAddress] = useState("");

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
					network: "goerli",
					disableInjectedProvider: false,
				});

				const selectedProvider = await web3Modal.connect();
				const ethersProvider = new ethers.providers.Web3Provider(selectedProvider);
				setEthersProvider(ethersProvider);

				const signer = ethersProvider.getSigner();
				let walletAddress = await signer.getAddress();
				setWalletAddress(walletAddress);
			} catch (error) {
				console.log(error, "Oops, something went wrong!");
			}
		} else {
			alert("Metamask not found, please install to proceed");
		}
	};

	return (
		<div className="app-wrapper">
			<Panel ethersProvider={ethersProvider} walletAddress={walletAddress} />
		</div>
	);
}

export default App;
