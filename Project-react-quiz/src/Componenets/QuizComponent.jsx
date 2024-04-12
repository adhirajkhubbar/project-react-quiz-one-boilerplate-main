import React, { Component } from 'react'

export default class QuizComponent extends Component {
  render() {
    return (
      <div className='main'>
        <h1 className='text'>Question</h1>
        <h4 className='text' style={{textAlign:"left",marginLeft:"20px"}}>1 of 15</h4>
        <div className='question'>
          <h2 className='text'>Random Questions</h2>
        </div>
        <div className="options-container">
      <button className="option">Option A</button>
      <button className="option">Option B</button>
      <button className="option">Option C</button>
      <button className="option">Option D</button>
    </div>
    <div className="buttons">
      <button className="buttn" style={{borderRadius:"3px"}}>Previous</button>
      <button className="buttn" style={{borderRadius:"3px",backgroundColor:"green",}}>Next</button>
      <button className="buttn" style={{borderRadius:"3px",backgroundColor:"red",}}>Quit</button>
  
    </div>
      </div>
    )
  }
}