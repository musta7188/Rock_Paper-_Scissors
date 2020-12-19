import React, { useState, useEffect } from 'react'
import {gameStart} from '../Shared/SharedFunction'
import {connect} from 'react-redux'
import '../Style/WinOrLose.css'
function WinOrLose({computerChoice, userChoice, resetState, setScore,showResult, getResult}) {

  const [result, setResult] = useState(null)

  useEffect(() =>{
    let outCome = gameStart(userChoice,computerChoice)
    setResult(outCome)
    setScore(outCome)
    getResult(outCome)
    showResult(true)// eslint-disable-next-line 
  },[])

  
 return (
  <div className="win_lose">
    <h1>{result==="DRAW"? "TRY AGAIN" :`YOU ${result}`}</h1>
    <button onClick={() => resetState()}>Play Again</button>
  </div>
  )
}


const mapDispatchToProps = (dispatch) => {
  return {
    resetState: () => dispatch({ type: "RESET" }),
    setScore: (result) => dispatch({ type: "RESULT", payload: { result } }),
    showResult:() => dispatch({type: "CHANGE_CLASS"})
  };
}


const mapStateToProps = (state) => {
  return {
    userChoice: state.userChoice,
    computerChoice: state.computerChoice,
    score: state.score
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(WinOrLose);

