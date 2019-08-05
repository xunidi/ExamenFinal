import React from 'react';
import { Route, Redirect, withRouter, Switch } from 'react-router-dom';
import DocumentTitle from 'react-document-title';
import Topbar from './components/Topbar/Topbar';
import Home from './screens/Home/Home';
import Report from './screens/Report/Report';
import Summary from './screens/Summary/Summary';
import Users from './screens/Users/Users';
import Date from './screens/Date/Date';

export default withRouter(
	class App extends React.PureComponent {
		render() {
			return (
				<div>
					<Topbar />
					<Switch>
						<RouteWithTitle exact title="Inicio" path="/inicio" component={Home} />
						<RouteWithTitle exact title="Tablas" path="/reporte" component={Report} />
						<RouteWithTitle exact title="Tablas" path="/resumen" component={Summary} />
						<RouteWithTitle exact title="Usuarios" path="/usuarios" component={Users} />
						<RouteWithTitle exact title="Fechas" path="/fechas" component={Date} />
						<Redirect to={'/inicio'} />
					</Switch>
				</div>
			);
		}
	}
);

export const RouteWithTitle = ({ title, render, component: Comp, ...props }) => (
	<Route {...props} render={(p) => <DocumentTitle title={title}>{render ? render(p) : <Comp {...p} />}</DocumentTitle>} />
);
