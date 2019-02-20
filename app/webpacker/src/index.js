import React from 'react'
import ReactDOM from 'react-dom'
import Header from './Header'
import Footer from './Footer'

var newNode = document.createElement('div')
newNode.className = "cover-container d-flex w-100 h-100 p-3 mx-auto flex-column";

document.addEventListener('DOMContentLoaded', () => {
  ReactDOM.render(
    <div className="cover-container d-flex w-100 h-100 p-3 mx-auto flex-column">
      <Header/>
      <main role="main" className="inner cover">
        <h1 className="cover-heading">rdev.my</h1>
        <p className="lead">Coming soon. Page is under maintenance.</p>
      </main>
      <Footer/>
    </div>,
    document.body.appendChild(newNode),
  )
})