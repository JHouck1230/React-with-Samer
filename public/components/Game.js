'use strict';

import React from "react";

import Cell from "./Cell";
import Row from "./Row";

import { sampleSize, flatten } from "lodash";

class Game extends React.Component {
	constructor(props) {

		super(props);
		let row, r, c;
		this.grid = [];

    for (r = 0; r < this.props.rows; r++) {
      row = [];
      for (c = 0; c < this.props.cols; c++) {
        row.push(`${r}-${c}`);
      }
      this.grid.push(row);
    }

    this.randomCells = sampleSize(flatten(this.grid), 6);

		this.state = {
			correctGuesses: [],
			incorrectGuesses: [],
			currentState: 'ready'
		};
	}
	recordGuess(cellId, correct) {
		let { correctGuesses, incorrectGuesses } = this.state;

		if(correct) {
			correctGuesses.push(cellId);
		} else {
			incorrectGuesses.push(cellId);
		}

		this.setState({ correctGuesses, incorrectGuesses }, () => {
			this.checkFinalState();
		});
	}

	checkFinalState() {
		let { currentState, incorrectGuesses, correctGuesses } = this.state;
		if(this.state.incorrectGuesses.length === 3) {
			currentState = 'over';
		}
		if(this.state.correctGuesses.length === 6) {
			currentState = 'won';
		}
		this.setState({currentState});
	}

	componentDidMount() {
		setTimeout(() => {
			this.memorizeTimerId = this.setState({currentState: 'memorize'});
			setTimeout(() => {
				this.recallTimerId = this.setState({currentState: 'recall'});
			}, 2000);
		}, 2000);
	}
  shouldHighlight() {
  	return ['memorize', 'over'].indexOf(this.state.currentState) >= 0 ;
  }
  render() {
  	const shouldHighlight = this.shouldHighlight();
  	const canGuess = this.state.currentState === 'recall';
    return (
      <div className="game">

      {this.grid.map((row, index) => (
        <Row key={index}>
          {row.map(col => 
          	<Cell key={col} id={col} 
									recordGuess={this.recordGuess.bind(this)}
									shouldHighlight={shouldHighlight}
									canGuess={canGuess}
			          	{...this.state}
			          	randomCells={this.randomCells} />)}
        </Row>
      ))}

      {this.state.currentState}

      </div>
    );
  }
}

export default Game;