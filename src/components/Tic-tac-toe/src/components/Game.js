
import React from 'react';

import Board from './Board';
import calculateWinner from '../utils/calculateWinner';

class Game extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            history: [{
                squares: Array(9).fill(null),
            }],
            stepNumber: 0,
            xIsNext: true,
            gameNumber: 1,
            X: 0,
            O: 0,
        };
    }

    handleClick(i) {
        const history = this.state.history.slice(0, this.state.stepNumber + 1);
        const current = history[history.length - 1];
        const squares = current.squares.slice();
       
        if (calculateWinner(squares) || squares[i]) {
            return;
        }
        squares[i] = this.state.xIsNext ? 'X' : 'O';
        this.setState({
            history: history.concat([{
                squares: squares,
            }]),
            stepNumber: history.length,
            xIsNext: !this.state.xIsNext,
        });

        if (calculateWinner(squares) === 'X') {
            this.setState({ X: this.state.X + 1 });
        } else if (calculateWinner(squares) === 'O') {
            this.setState({ O: this.state.O + 1 });
        }
    }

    jumpTo(step){
        this.setState({
            stepNumber: step,
            xIsNext: ((step + this.state.gameNumber + 1) % 2) === 0,
        });
    }

    newGame(){
        this.setState({
            history: [{
                squares: Array(9).fill(null),
            }],
            stepNumber: 0,
            gameNumber: this.state.gameNumber + 1,
            xIsNext: (this.state.gameNumber % 2) === 0,
        });
    }

    render() {
        const history = this.state.history;
        const current = history[this.state.stepNumber];
        const winner = history.length > 5 ? calculateWinner(current.squares): null;
        
        const moves = () => {
            const stepBack = this.state.stepNumber === 0 ? this.state.stepNumber : this.state.stepNumber - 1;
            const stepFoward = this.state.stepNumber === history.length - 1 ? this.state.stepNumber : this.state.stepNumber + 1;
            const descBack = '<<';
            const descFoward = '>>';
            return (
                <>
                    <button onClick={() => this.jumpTo(stepBack)}>{descBack}</button>
                    <button onClick={() => this.newGame()}>New Game</button>
                    <button onClick={() => this.jumpTo(stepFoward)}>{descFoward}</button>
                </>
            )
        } 
        let playerX, playerO;
        
        playerX = this.state.X;
        playerO = this.state.O;
        let status;
        if (winner) {
            status = 'Winner: ' + winner;
        } else if (this.state.stepNumber === 9) {
            status = 'Draw';
        } else {
            status = 'Next: ' + (this.state.xIsNext ? 'X' : 'O');
        }
        return (
            <div className="game">
                <div className="game-score">
                    <div>
                        X: {playerX}
                    </div>
                    <div>
                        O: {playerO}
                    </div>
                    <div>{status}</div>

                </div>
                <div className="game-status"></div>
                <div className="game-board">
                    <Board 
                        squares={current.squares}
                        onClick={(i) => this.handleClick(i)}
                    />
                </div>                
                <div className="game-controls">{moves()}</div>
            </div>
        );
    }
}

export default Game;