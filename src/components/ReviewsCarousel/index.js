// Write your code here
import {Component} from 'react'

import './index.css'

class ReviewsCarousel extends Component {
  state = {index: 0}

  rightArrow = () => {
    const {index} = this.state
    const {reviewsList} = this.props
    if (index < reviewsList.length - 1) {
      this.setState(() => ({index: index + 1}))
    } else {
      this.setState(() => ({index: index - 0}))
    }
  }

  leftArrow = () => {
    const {index} = this.state
    // const {reviewsList} = this.props
    if (index === 0) {
      this.setState(() => ({index: index + 0}))
    } else {
      this.setState(() => ({index: index - 1}))
    }
  }

  render() {
    const {index} = this.state
    const {reviewsList} = this.props
    console.log(index)
    const data = reviewsList[index]

    const {imgUrl, username, companyName, description} = data

    return (
      <div className="main-container">
        <div className="content-card">
          <h1 className="heading">Reviews</h1>
          <div className="reviews-container">
            <button className="btn" type="button" onClick={this.leftArrow}>
              <img
                className="btn-img"
                src="https://assets.ccbp.in/frontend/react-js/left-arrow-img.png"
                alt="left arrow"
                onClick={this.leftArrow}
              />
            </button>
            <div className="profile-container">
              <img className="profile-pic" src={imgUrl} alt={username} />
              <p className="profile-name">{username}</p>
              <p>{companyName}</p>
              <p className="description">{description}</p>
            </div>
            <button className="btn" type="button" onClick={this.rightArrow}>
              <img
                className="btn-img"
                src="https://assets.ccbp.in/frontend/react-js/right-arrow-img.png"
                alt="right arrow"
              />
            </button>
          </div>
        </div>
      </div>
    )
  }
}
export default ReviewsCarousel
