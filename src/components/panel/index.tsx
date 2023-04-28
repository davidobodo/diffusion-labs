import styles from "./styles.module.scss";
import iconEth from "../../assets/eth.png";
import iconArb from "../../assets/arb.png";
import iconFlower from "../../assets/input-flower.png";

export function Panel() {
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

	return (
		<div className={styles.container}>
			<div className={styles.containerInner}>
				<BgGradient />
				<div className={styles.content}>
					<div className={styles.topCtas}>
						<div>
							<button>
								<IconRefresh />
							</button>
							<button>
								<IconGear />
							</button>
						</div>
					</div>
					<div className={styles.buySection}>
						<Input showTag={true} label="You buy" />
					</div>
					<div className={styles.swapWrapper}>
						<button>
							<Switcher />
						</button>
						<div className={styles.line}></div>
					</div>
					<div className={styles.sellSection}>
						<Input label="You sell" />
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
							<IconInfo />
						</div>
						<p>
							1 ETH = 2031.21 ARB <span> ($2 030.4) </span>
						</p>

						<div className={styles.converterDropdown}>
							<img src={iconFlower} alt="" />
							<p>$0</p>
							<IconArrowDown color="#7185AA" />
						</div>
					</div>
					<div>
						<button className={styles.btnSwap}>Swap</button>
					</div>
				</div>
			</div>
		</div>
	);
}

function Input({ showTag = false, label }: { showTag?: boolean; label: string }) {
	const CRYPTOS = [
		{
			img: iconEth,
			label: "ETH",
		},
		{
			img: iconArb,
			label: "ARB",
		},
	];
	return (
		<div className={styles.mainAmount}>
			<div className={styles.mainAmountTop}>
				<p>~$10 921.69</p>
				<p>{label}</p>
			</div>
			<div className={styles.mainAmountBottom}>
				<input type="text" value="10" />
				<div className={styles.mainAmountBottomRight}>
					{showTag && <div className={styles.tag}>Min</div>}
					<div className={styles.crypto}>
						<img src={iconEth} alt="" />
						<p>ETH</p>
						<IconArrowDown />
					</div>
				</div>
			</div>
		</div>
	);
}

function Switcher() {
	return (
		<svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
			<rect width="40" height="40" rx="20" fill="#101010" />
			<g clip-path="url(#clip0_675_293)">
				<path d="M18 16L15 13L12 16" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
				<path d="M15 27V13" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
				<path d="M22 24L25 27L28 24" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
				<path d="M25 13V27" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
			</g>
			<defs>
				<clipPath id="clip0_675_293">
					<rect width="24" height="24" fill="white" transform="translate(8 8)" />
				</clipPath>
			</defs>
		</svg>
	);
}

function IconInfo() {
	return (
		<svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
			<path
				d="M7 0C3.136 0 0 3.136 0 7C0 10.864 3.136 14 7 14C10.864 14 14 10.864 14 7C14 3.136 10.864 0 7 0ZM7.7 10.5H6.3V6.3H7.7V10.5ZM7.7 4.9H6.3V3.5H7.7V4.9Z"
				fill="#7185AA"
			/>
		</svg>
	);
}

function IconRefresh() {
	return (
		<svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
			<path
				d="M12.7955 2.20312C11.4353 0.84375 9.56848 0 7.49531 0C3.34897 0 0 3.35625 0 7.5C0 11.6438 3.34897 15 7.49531 15C10.9944 15 13.9118 12.6094 14.7467 9.375H12.7955C12.0263 11.5594 9.94372 13.125 7.49531 13.125C4.39024 13.125 1.86679 10.6031 1.86679 7.5C1.86679 4.39687 4.39024 1.875 7.49531 1.875C9.05253 1.875 10.4409 2.52188 11.454 3.54375L8.4334 6.5625H15V0L12.7955 2.20312Z"
				fill="#E5E5E5"
			/>
		</svg>
	);
}

function IconGear() {
	return (
		<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
			<path
				d="M13.95 8.78333C13.9833 8.53333 14 8.275 14 8C14 7.73333 13.9833 7.46667 13.9417 7.21667L15.6333 5.9C15.7833 5.78333 15.825 5.55833 15.7333 5.39167L14.1333 2.625C14.0333 2.44167 13.825 2.38333 13.6417 2.44167L11.65 3.24167C11.2333 2.925 10.7917 2.65833 10.3 2.45833L9.99999 0.341667C9.96666 0.141667 9.79999 0 9.59999 0H6.39999C6.19999 0 6.04166 0.141667 6.00832 0.341667L5.70832 2.45833C5.21666 2.65833 4.76666 2.93333 4.35832 3.24167L2.36666 2.44167C2.18332 2.375 1.97499 2.44167 1.87499 2.625L0.283323 5.39167C0.183323 5.56667 0.216656 5.78333 0.383323 5.9L2.07499 7.21667C2.03332 7.46667 1.99999 7.74167 1.99999 8C1.99999 8.25833 2.01666 8.53333 2.05832 8.78333L0.366656 10.1C0.216656 10.2167 0.17499 10.4417 0.266656 10.6083L1.86666 13.375C1.96666 13.5583 2.17499 13.6167 2.35832 13.5583L4.34999 12.7583C4.76666 13.075 5.20832 13.3417 5.69999 13.5417L5.99999 15.6583C6.04166 15.8583 6.19999 16 6.39999 16H9.59999C9.79999 16 9.96666 15.8583 9.99166 15.6583L10.2917 13.5417C10.7833 13.3417 11.2333 13.075 11.6417 12.7583L13.6333 13.5583C13.8167 13.625 14.025 13.5583 14.125 13.375L15.725 10.6083C15.825 10.425 15.7833 10.2167 15.625 10.1L13.95 8.78333ZM7.99999 11C6.34999 11 4.99999 9.65 4.99999 8C4.99999 6.35 6.34999 5 7.99999 5C9.64999 5 11 6.35 11 8C11 9.65 9.64999 11 7.99999 11Z"
				fill="#E5E5E5"
			/>
		</svg>
	);
}

function IconArrowDown({ color = "#E5E5E5" }) {
	return (
		<svg width="12" height="7" viewBox="0 0 12 7" fill="none" xmlns="http://www.w3.org/2000/svg">
			<path
				d="M5.46094 6.53906C5.74219 6.84375 6.23438 6.84375 6.51562 6.53906L11.0156 2.03906C11.3203 1.75781 11.3203 1.26562 11.0156 0.984375C10.7344 0.679688 10.2422 0.679688 9.96094 0.984375L6 4.94531L2.01562 0.984375C1.73438 0.679688 1.24219 0.679688 0.960938 0.984375C0.65625 1.26562 0.65625 1.75781 0.960938 2.03906L5.46094 6.53906Z"
				fill={color}
			/>
		</svg>
	);
}

function BgGradient() {
	return (
		<svg
			width="643"
			height="638"
			viewBox="0 0 643 638"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
			className={styles.bgGradient}
		>
			<g filter="url(#filter0_f_3_1498)">
				<path
					fill-rule="evenodd"
					clip-rule="evenodd"
					d="M320.858 227.736C337.927 229.451 356.938 221.277 371.367 230.543C385.785 239.802 387.719 259.68 394.846 275.249C401.304 289.354 407.503 302.885 411.363 317.908C416.277 337.034 432.823 359.901 420.577 375.403C407.537 391.908 378.515 375.923 359.104 384.061C343.269 390.701 337.272 412.168 320.858 417.213C303.043 422.69 283.406 419.525 266.08 412.659C247.356 405.238 224.099 396.166 218.784 376.761C213.177 356.286 239.443 339.123 240.132 317.908C240.785 297.792 217.758 280.771 222.536 261.218C227.26 241.888 245.259 226.184 264.117 219.762C282.508 213.499 301.525 225.792 320.858 227.736Z"
					fill="url(#paint0_linear_3_1498)"
				/>
			</g>
			<defs>
				<filter
					id="filter0_f_3_1498"
					x="0"
					y="0"
					width="643"
					height="638"
					filterUnits="userSpaceOnUse"
					color-interpolation-filters="sRGB"
				>
					<feFlood flood-opacity="0" result="BackgroundImageFix" />
					<feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
					<feGaussianBlur stdDeviation="109" result="effect1_foregroundBlur_3_1498" />
				</filter>
				<linearGradient
					id="paint0_linear_3_1498"
					x1="125.366"
					y1="320.036"
					x2="317.741"
					y2="517.173"
					gradientUnits="userSpaceOnUse"
				>
					<stop stop-color="#E5E54B" />
					<stop offset="1" stop-color="#EF5322" />
				</linearGradient>
			</defs>
		</svg>
	);
}
