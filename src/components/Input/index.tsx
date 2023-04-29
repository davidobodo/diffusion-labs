import { useState } from "react";
import { Dropdown } from "../";
import styles from "./styles.module.scss";
export default function Input({
	showTag = false,
	label,
	initValue = "00",
	inputIsEditable = true,
}: {
	showTag?: boolean;
	label: string;
	initValue: string;
	inputIsEditable?: boolean;
}) {
	const [inputValue, setInputValue] = useState(initValue);

	const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		setInputValue(e.target.value);
	};
	return (
		<div className={styles.mainAmount}>
			<div className={styles.mainAmountTop}>
				<p>~$10 921.69</p>
				<p>{label}</p>
			</div>
			<div className={styles.mainAmountBottom}>
				<input type="text" value={inputValue} onChange={inputIsEditable ? onChange : () => {}} />
				<div className={styles.mainAmountBottomRight}>
					{showTag && <div className={styles.tag}>Min</div>}
					<Dropdown />
				</div>
			</div>
		</div>
	);
}
