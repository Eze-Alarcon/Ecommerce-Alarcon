# Introduction

Welcome, this is the final project of the React.js course done in the educational platform "CoderHouse", it is an e-Commerce in which several products with different categories are shown, different technologies have been implemented to carry out the project, which will be described later.

## Implemented technologies

- React.js
- Javascript
- HTML
- Tailwind CSS
- NPM
- Dependencias
  - Sweet Alert
  - React Router
  - Font Awesome (Icons)
- Firebase (Database)

# Rutas y componentes utilizados:

	Rutas y componentes utilizados:

	Default
		- NavBar
			* NavBarWidget
	
	1era ruta: "/"
		- ItemListContainer
			* Banner
			* ItemList
				* Item
					* Stars
			* ErrorPage

	2da ruta: "/:idCategory"
		- CategoryListContainer
			* Item
				* Stars
			* ErrorPage

	3era ruta: "/products/:idProduct"
		- ItemDetailContainer
			* ItemDetail
				* ItemCount
				* Stars
			* ErrorPage

	4ta ruta: "/cart"
		- Cart
			* CartAside
				* CartModal

	5ta ruta: "/about"
		- About



## Development team

* Ezequiel Alarcon

## Installation

This repository is open source, you can download it and use it as you wish. You should keep in mind that you will need the following technologies:

* Node.js 
* NPM
* Modern browser or live server

Note: This project was not intended to be implemented in older browsers like Internet Explorer, my apologies for that. 

After downloading the project from the GitHub repository, run the command "npm install" in your terminal, this will install all the necessary dependencies for the project to work locally.

### Extra:

We are still working on the project, improving its visualization on mobile devices, so slight changes can be expected in the future.

# Explanatory video

This short video shows how the application would work in a very brief way.

[![VIDEO EXPLANATORY IN YOUTUBE](https://img.youtube.com/vi/kZ9GIpSIwqQ/0.jpg)](https://www.youtube.com/watch?v=kZ9GIpSIwqQ)

# More info about React.js

## Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).
