import React from 'react'

import classes from './PizzaImage.css'

import pizza from '../../assets/pizza.jpg'

const PizzaImage = (props) => {
	<div className={classes.PizzaImage}>
		<img src={pizza} className={classes.PizzaImg}/>
	</div>
}