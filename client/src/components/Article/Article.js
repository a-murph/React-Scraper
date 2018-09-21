import React from "react";

const Article = props => (
	<div>
		<p>{props.title}</p>
		<span>
			<p>{props.dateSaved}</p>
		</span>
		<span>
			<button>{props.isSaved ? "Remove" : "Save"}</button>
		</span>
		<div>
			{props.children}
		</div>
	</div>
);

export default Article;