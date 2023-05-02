import { TOKENS, TToken } from "../../constants";
import styles from "./styles.module.scss";
import { Icons } from "../";

export default function Dropdown({
	selected,
	onChange,
}: {
	selected: TToken;
	onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
}) {
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
