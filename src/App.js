import React from 'react';
import './App.css';

import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Home from './components/pages/home';


import SignUp from './components/pages/signup';
import Contact from './components/pages/contact';
import RefundPolicy from './components/pages/refund';
import Privacy from './components/pages/privacy';
import Terms from './components/pages/terms';
import { Features } from './components/pages/features';
import Pricing from './components/pages/pricing';
import Login from './components/pages/login';
import { Navbar } from './components/pages/navbar';
import Footer from "./components/pages/footer"

function App() {
return (
	<Router>
<Navbar/>
	<Routes>
		<Route exact path='/' exact element={<Home />} />
		<Route path='/contact' element={<Contact/>} />
	
		<Route path='/signup' element={<SignUp/>} />
    <Route path='/refund' element={<RefundPolicy/>} />

		<Route path='/privacy' element={<Privacy/>} />
		<Route path='/terms' element={<Terms/>} />
    <Route path='/features' element={<Features/>} />
    <Route path='/login' element={<Login/>} />
    <Route path='/pricing' element={<Pricing/>} />
	</Routes>
	<Footer/>
	</Router>
);
}

export default App;
