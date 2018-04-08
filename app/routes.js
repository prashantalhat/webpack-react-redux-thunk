import React from 'react';
import { Route, Switch } from 'react-router-dom';
import ProductTable from './containers/ProductTable';
import About from './components/About';

export default (
	<Switch>
		<Route exact path="/" component={ProductTable} />
		<Route path="/about" component={About} />
	</Switch>
);
