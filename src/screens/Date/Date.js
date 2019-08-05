import * as React from 'react';
import styles from './Date.module.scss';
import moment from 'moment';
import { Calendar } from 'react-date-range';
import { es } from 'date-fns/esm/locale';
import { format, endOfDay, startOfDay } from 'date-fns';
import 'react-date-range/dist/styles.css';
import 'react-date-range/dist/theme/default.css';
import produce from 'immer/dist/immer';

export default (class Date extends React.PureComponent {
	state = {
		date: undefined
	};

	componentDidMount() {}

	onHandleCalendar = (date) => {
		console.log('TCL: Date -> onHandleCalendar -> date', date);
		console.log('TCL: Date -> onHandleCalendar -> date', moment(date).format('YYYY-MM-DD'));

		const nextState = produce(this.state, (draft) => {
			draft.date = date;
		});
		this.setState(nextState);
	};

	render() {
		const { date } = this.state;
		return (
			<div className={styles.main}>
				Fechas
				<div className={styles.datepicker}>
					<Calendar locale={es} date={date} rangeColors={[ '#3861f6' ]} color={'#3861f6'} onChange={this.onHandleCalendar} />
				</div>
			</div>
		);
	}
});
