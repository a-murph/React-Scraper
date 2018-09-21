import React, { Component } from 'react';
import Header from "./components/Header"
import Home from "./components/Home";
import Article from "./components/Article";
import Saved from "./components/Saved";
import Note from "./components/Note";

class App extends Component {
	render() {
		return (
			<div className="container">
				<Header />
				<Home>
					<Article title="Sample Article" />
					<Article title="Another Article" />
					<Article title="Some More Articles" />
					<Article title="One More Article" />
				</Home>
				<Saved>
					<Article title="Saved Article Test" isSaved={true} dateSaved="9/21/2018">
						<Note text="This is a note." />
					</Article>
				</Saved>
			</div>
		);
	}
}

export default App;