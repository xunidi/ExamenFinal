import * as React from 'react';
import styles from './Input.module.scss';

export default class Button extends React.Component {
	render() {
		const { value, onChange, type } = this.props;
		return (
			<div className={styles.main}>
				<input type={type} className={styles.default} value={value} onChange={onChange} />
			</div>
		);
	}
}
