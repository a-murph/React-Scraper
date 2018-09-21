import React from "react";
import Section from "../Section";
import Input from "../Input";

const Home = props => (
	<div>
		<Section title="Search">
			<form>
				<Input name="Topic" />
				<Input name="Start Year" />
				<Input name="End Year" />
				<input type="submit"></input>
			</form>
		</Section>
		<Section title="Results">
			{props.children}
		</Section>
	</div>
);

export default Home;