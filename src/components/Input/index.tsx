import React from "react";
import { Dropdown } from "../";
import { TToken } from "../../constants";
import styles from "./styles.module.scss";

export default function Input({
	showTag = false,
	label,
	inputIsEditable = true,
	value,
	onChange,
	selectedToken,
	onSelectToken,
}: {
	showTag?: boolean;
	label: string;
	value: string;
	inputIsEditable?: boolean;
	onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
	selectedToken: TToken;
	onSelectToken: (e: React.ChangeEvent<HTMLSelectElement>) => void;
}) {
	return (
		<div className={styles.mainAmount}>
			<div className={styles.mainAmountTop}>
				<p>~$10 921.69</p>
				<p>{label}</p>
			</div>
			<div className={styles.mainAmountBottom}>
				<input type="text" value={value} onChange={inputIsEditable && onChange ? onChange : () => {}} />
				<div className={styles.mainAmountBottomRight}>
					{showTag && <div className={styles.tag}>Min</div>}
					<Dropdown selected={selectedToken} onChange={onSelectToken} />
				</div>
			</div>
		</div>
	);
}
