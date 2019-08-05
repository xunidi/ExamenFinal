import * as React from 'react';
import PropTypes from 'prop-types';
import styles from './Button.module.scss';
import { IconAddMark, IconRemoveMark } from '../../resources/svg/Icons';

export default class Button extends React.Component {
	static propTypes = {
		onClick: PropTypes.func.isRequired,
		label: PropTypes.string
	};

	selectIcon = (type) => {
		switch (type) {
			case 'add':
				return <IconAddMark className={styles.icon} />;
			case 'other':
				return '';
			default:
				return <IconRemoveMark className={styles.icon} />;
		}
	};

	render() {
		const { onClick, type, className, label } = this.props;
		return (
			<div className={styles.main}>
				<button onClick={onClick} className={styles.button + ' ' + className}>
				{label}
				{this.selectIcon(type)}
				</button>
			</div>
		);
	}
}
