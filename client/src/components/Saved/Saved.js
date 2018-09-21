import React from "react";
import Section from "../Section";

const Saved = props => (
	<Section title="Saved Articles">
		{props.children}
	</Section>
);

export default Saved;