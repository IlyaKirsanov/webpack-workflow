import React from 'react'
import {Link, Route} from 'react-router-dom'
import Pizza from './container/Pizza'

import asyncComponent from './hoc/asyncComponent'

const AsyncPizza = asyncComponent(()=>{
	return import ('./container/Users')
})

class App extends React.Component{
	render(){
		return(
			<div>
				<div>
					<Link to='/'>Users</Link>
					<Link to='/pizza'>Pizza</Link>
				</div>

				<div>
					<Route path="/" exact component={Users}/>
					<Route path="/pizza" exact component={AsyncPizza}/>
				</div>
			</div>
		)
	}
}