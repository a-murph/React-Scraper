import React from "react";

const Input = props => (
	<div>
		<label for={props.name}>{props.name}</label>
		<input type="text" name={props.name} {...props}></input>
	</div>
);

export default Input;