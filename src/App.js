import React from "react"

// react router dom
import { BrowserRouter as Router, Route, Switch } from "react-router-dom"
// page
import About from "./pages/About"
import Cart from "./pages/Cart"
import Checkout from "./pages/Checkout"
import Error from "./pages/Error"
import Home from "./pages/Home"
import Login from "./pages/Login"
import Products from "./pages/Products"
import ProductDetails from "./pages/ProductDetails"
// components
import Header from "./components/Header"

export default function App() {
	return (
		<Router>
			<Header />
			<Switch>
				<Route exact path="/">
					<Home />
				</Route>
				<Route exact path="/about">
					<About />
				</Route>
				<Route exact path="/cart">
					<Cart />
				</Route>
				<Route exact path="/checkout">
					<Checkout />
				</Route>
				<Route exact path="/login">
					<Login />
				</Route>
				<Route exact path="/products">
					<Products />
				</Route>
				<Route
					path="/products/:id"
					children={<ProductDetails></ProductDetails>}
				></Route>
				<Route path="*">
					<Error />
				</Route>
			</Switch>
		</Router>
	)
}
