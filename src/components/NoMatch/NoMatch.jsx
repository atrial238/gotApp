import React from 'react';
import { useLocation } from "react-router";

const NoMatch = () => {

	let location = useLocation();
 
	return (
	  <div>
		 <h3 style={{color: 'red'}}>
			No match for <code>{location.pathname}</code>
		 </h3>
	  </div>
	);
}

export default NoMatch;