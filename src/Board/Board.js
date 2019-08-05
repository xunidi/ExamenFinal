import * as React from 'react';
import styles from './Board.module.scss';
import List from '../components/List/List';
import Button from '../components/Button/Button';
import Input from '../components/Input/Input';

class Board extends React.Component {
	state = {};

	componentDidMount() {}

	onRemoveItem = (index) => {
		const { onRemoveItem } = this.props;
		onRemoveItem(index);
	};

	render() {
		const { object, onAddButtonClick, onRemoveButtonClick, onAddInputChange, onRemoveInputChange, onRemoveItem } = this.props;
		return (
			<div className={styles.main}>
				<p className={styles.title}>{object.title}</p>
				<div className={styles.container}>
					<List items={object.items} onRemoveItem={(index) => this.onRemoveItem(index)} />
					<div className={styles.group}>
						<div className={styles.container_input}>
							<Input type="text" value={object.input.add} onChange={onAddInputChange} />
						</div>
						<Button type={'add'} onClick={onAddButtonClick} />
					</div>

					<div className={styles.group}>
						<div className={styles.container_input}>
							<Input type="number" value={object.input.remove} onChange={onRemoveInputChange} />
						</div>
						<Button type={'remove'} onClick={onRemoveButtonClick} />
					</div>
				</div>
			</div>
		);
	}
}

export default Board;
