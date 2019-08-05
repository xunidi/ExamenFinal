import * as React from 'react';
import styles from './Topbar.module.scss';
import { Link } from 'react-router-dom';

export default (class Topbar extends React.PureComponent {
	state = {};

	componentDidMount() {}

	render() {
		return (
			<div className={styles.main}>
				<ul className={styles.list}>
					{/*<Link className={styles.item} to="/inicio">
						<li className={styles.item}> Inicio</li>
					</Link>
					<Link className={styles.item} to="/reporte">
						<li className={styles.item}> Reporte</li>
					</Link>
					<Link className={styles.item} to="/resumen">
						<li className={styles.item}> Resumen</li>
					</Link>*/}
					<Link className={styles.item} to="/usuarios">
						<li className={styles.item}> Weather</li>
					</Link>
					{/*<Link className={styles.item} to="/fechas">
						<li className={styles.item}> Fechas</li>
				</Link>*/}
				</ul>
			</div>
		);
	}
});
