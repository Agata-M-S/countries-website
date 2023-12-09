import { Link } from "react-router-dom";


export const HomePage = () => {
	return (
		<>
			<h2> Welcome</h2>
			<p>some text here explaining the app</p>
      <div className="btn-div">
			<Link to='/countries' >
      <button>Browse Countries</button>
			</Link>
      <Link> 
      <button>Browse Cities</button>
      </Link>
		</div>
		</>
	);
};
