import styles from "./styles.module.scss";
import iconFlower from "../../assets/input-flower.png";
import { Icons, Input } from "../index";

export function Panel({ ethBalance }: { ethBalance: string }) {
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
								<Icons.IconRefresh />
							</button>
							<button>
								<Icons.IconGear />
							</button>
						</div>
					</div>
					<div>
						<Input showTag={true} label="You buy" initValue={ethBalance} key={ethBalance} />
					</div>
					<div className={styles.swapWrapper}>
						<button>
							<Icons.IconSwitcher />
						</button>
						<div className={styles.line}></div>
					</div>
					<div className={styles.sellSection}>
						<Input label="You sell" initValue="00" inputIsEditable={false} />
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
							1 ETH = 2031.21 ARB <span> ($2 030.4) </span>
						</p>

						<div className={styles.converterDropdown}>
							<img src={iconFlower} alt="" />
							<p>$0</p>
							<Icons.IconArrowDown color="#7185AA" />
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
					fillRule="evenodd"
					clipRule="evenodd"
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
					colorInterpolationFilters="sRGB"
				>
					<feFlood floodOpacity="0" result="BackgroundImageFix" />
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
					<stop stopColor="#E5E54B" />
					<stop offset="1" stopColor="#EF5322" />
				</linearGradient>
			</defs>
		</svg>
	);
}
