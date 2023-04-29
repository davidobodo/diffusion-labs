import { TOKENS } from "../../constants";
import styles from "./styles.module.scss";
import { Icons } from "../";
import { useState } from "react";

export default function Dropdown() {
	const [selected, setSelected] = useState<(typeof TOKENS)[0]>(TOKENS[0]);

	const onChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
		const val = TOKENS.find((item) => item.address === e.target.value);

		if (!val) return;

		setSelected(val);
	};
	return (
		<div className={styles.customSelect}>
			<div className={styles.crypto}>
				<img src={selected.img} alt="" />
				<p>{selected.label}</p>
				<Icons.IconArrowDown />
			</div>
			<select onChange={onChange}>
				{TOKENS.map((item) => {
					const { label, address } = item;
					return (
						<option value={address} key={address}>
							{label}
						</option>
					);
				})}
			</select>
		</div>
	);
}
