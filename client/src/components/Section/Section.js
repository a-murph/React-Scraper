import React from "react";

const Section = props => (
	<div>
		<div>
			<h3>{props.title}</h3>
		</div>
		<div>
			<div>
				{props.children}
			</div>
		</div>
	</div>
);

export default Section;