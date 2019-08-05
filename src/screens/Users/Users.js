import * as React from 'react';
import styles from './Users.module.scss';
import WebServices from '../../WebServices/WebServices';
import Input from '../../components/Input/Input';
import Button from '../../components/Button/Button';
import Table from '../../components/Table/Table';
import SimpleBarChart from '../../components/Chart/SimpleBarChart';

export default (class Users extends React.PureComponent {
	state = {
		response: {},
		countries: [ 'mexico', 'canada', 'usa', 'india', 'china' ],
		countryUrl:"https://restcountries.eu/rest/v2/name/mexico",
		urlClima: "",
		selected:true,
		datos:[],
		datos2:[]
	};

	componentDidMount() {
		
	}

	init = () => {
		const {datos} = this.state;
		let array = [];
		datos.forEach((item, i) => {
			const element = {
				name:datos[i].name,
				temp: datos[i].main.temp,
				humidity: datos[i].main.humidity,
				pressure: datos[i].main.pressure
			};
			array = array.concat(element);
		});
		console.log('array',array);
		this.setState({datos2:array});
	};

	fetchData = async (urlCity) => {
		try {
			const response = await WebServices.getWeather({
				urlCity
			});
			this.setState({ response: response});
			
		} catch (e) {}
	};

	onInputChange = (event) => {
		const value = event.target.value;
		this.setState({urlClima:value});
		try {
			this.fetchData(value);
		} catch (e) {
		}
	};

	onButtonNew = (event) => {
		const {datos,response,urlClima} = this.state;
		datos.push(response);
		this.setState({datos:datos});
		this.fetchData(urlClima);
		this.init();
	};

	onClicklist = (tipo) => {
		let urlCompuesta = '';
		switch(tipo){
			case 'name':
				urlCompuesta = 'http://api.openweathermap.org/data/2.5/weather?q=London&appid=d0b76fd83718eef1932b224506cfb48f';
				break;
			case 'id':
				urlCompuesta =  'http://api.openweathermap.org/data/2.5/weather?id=708546&appid=d0b76fd83718eef1932b224506cfb48f';
				break;
			case 'coor':
				urlCompuesta = 'http://api.openweathermap.org/data/2.5/weather?lat=35&lon=139&appid=d0b76fd83718eef1932b224506cfb48f';
				break;		

		}
		this.setState({urlClima:urlCompuesta });
		this.fetchData(urlCompuesta);
	};

	render() {
		
		const { response, urlClima,datos,datos2 } = this.state;
		const headers = ['CITY NAME','TEMP','HUMIDITY','PRESSURE'];
		const data = datos;
		return (
			<div className={styles.main}>
				<h2>Weather information</h2>
				<div className={styles.contenedor}>
					<label className={styles.label}>URL</label>
					<Input type="text" className={styles.input} value={urlClima} onChange={(event) => this.onInputChange(event)} />
					<Button type={'other'} className={styles.button} label={"New"} onClick={() => this.onButtonNew()}/>
						
				</div>	
				<div className={styles.info}>
					<ul>
						<li className={styles.li} onClick={(event) => this.onClicklist('name')}> by City name</li>
						<li className={styles.li} onClick={(event) => this.onClicklist('id')}> by City id</li>
						<li className={styles.li} onClick={(event) => this.onClicklist('coor')}> By coordenades</li>
					</ul>
				</div>	
				<div className={styles.info}>
					<ul>
						<li>Name:{response && response.name}</li>
						<li>Temp:{response && response.main && response.main.temp}</li>
						<li>Humidity:{response && response.main && response.main.humidity}</li>
						<li>Pressure:{response && response.main && response.main.pressure}</li>
					</ul>
				</div>
				<div>
					<p>Table</p>
					<Table data={data} headers={headers} />
				</div>
				<div>
					<p>Graph</p>
					<SimpleBarChart data={datos2} x={'name'} y1={'temp'} y2={'humidity'} y3={'pressure'} y1Axis={'left'} y2Axis={'right'} y3Axis={'right'} />
				</div>
			</div>
		);
	}
});
