import React from 'react';
import {
	BrowserRouter as Router,
	Routes,
	Route,
	Link
} from "react-router-dom";
import Homepage from "./componets/HomePage"
import Courses from "./componets/Courses"

import './App.css';
import Navbar from './componets/navbar';

function App() {
	return (
		<>
			<Navbar />
			<Router>
				<Routes>
					<Route exact path="/"
						element={<Homepage />} />
					<Route exact path="/courses"
						element={<Courses />} />
				</Routes>
			</Router>
		</>
	);
}

export default App;
