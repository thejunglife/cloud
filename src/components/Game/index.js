import React from 'react';

import GameEngine from '../../services/GameEngine';

export default class Game extends React.Component {
  constructor(props) {
    super(props);

    this.canvas = React.createRef();
  }

  componentDidMount() {
    const gameEngine = new GameEngine(this.canvas.current);

    gameEngine.init()
  }

  render() {
    return (
      <div>
        <canvas ref={this.canvas} height="720" width="500" />
      </div>
    )
  }
}
