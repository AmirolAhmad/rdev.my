import React from 'react'
import { Link } from 'react-router-dom'

class Footer extends React.Component {
  render() {
    return (
      <footer className="mastfoot mt-auto">
        <div className="inner small">
          <p>
            &copy; 2018. All right reserved.<br/>Built with <i class="fas fa-heart"></i> by <a href="https://www.facebook.com/amirolahmad" target="_blank">9M2ROL</a>
          </p>
        </div>
      </footer>
    )
  }
}

export default Footer