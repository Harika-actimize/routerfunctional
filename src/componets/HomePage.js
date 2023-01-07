import React from 'react'
import {useNavigate
} from "react-router-dom";
import "../App.css";

function Homepage() {
	const history = useNavigate();

	const coursesPage = () => {
		history("/courses")
	}
	return (
		<>

			<div className="jumbotron text-center">
				<h1 className="display-4">Hello,Geeks</h1>
				<p className="lead">
					Geeks for Geeks is a Computer Science portal.
					It contains well written, well thought and well
					explained computer science and programming articles
				</p>

				<hr className="my-4" />
				<p>
					Real-time Live and self paced courses carefully
					curated for you !
				</p>

				<p className="lead">
					<button className="btn btn-success"
						onClick={coursesPage}>Explore Courses
					</button>
				</p>

			</div>
		</>
	)
}

export default Homepage
