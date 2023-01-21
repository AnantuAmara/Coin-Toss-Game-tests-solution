// Write your code here
import {Component} from 'react'

import './index.css'

class CoinToss extends Component {
  state = {
    imageUrl: 'https://assets.ccbp.in/frontend/react-js/heads-img.png',
    totalCount: 0,
    headsCount: 0,
    tailsCount: 0,
  }

  onClickingButton = () => {
    const tossResult = Math.floor(Math.random() * 2)

    if (tossResult === 0) {
      this.setState(prevState => ({
        totalCount: prevState.totalCount + 1,
        headsCount: prevState.headsCount + 1,
        imageUrl: 'https://assets.ccbp.in/frontend/react-js/heads-img.png',
      }))
    } else {
      this.setState(prevState => ({
        totalCount: prevState.totalCount + 1,
        tailsCount: prevState.tailsCount + 1,
        imageUrl: 'https://assets.ccbp.in/frontend/react-js/tails-img.png',
      }))
    }
  }

  render() {
    const {imageUrl, totalCount, headsCount, tailsCount} = this.state
    return (
      <div className="container">
        <div className="container-2">
          <h1 className="heading">Coin Toss Game</h1>
          <p className="paragraph">Heads (or) Tails</p>
          <img className="img" src={imageUrl} alt="toss result" />
          <div className="btn-container">
            <button
              className="button"
              type="button"
              onClick={this.onClickingButton}
            >
              Toss Coin
            </button>
          </div>
          <div className="count-container">
            <p className="count">Total:{totalCount}</p>
            <p className="count">Heads:{headsCount}</p>
            <p className="count">Tails:{tailsCount}</p>
          </div>
        </div>
      </div>
    )
  }
}

export default CoinToss
