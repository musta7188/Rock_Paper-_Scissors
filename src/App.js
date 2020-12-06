import React from "react";
import "./App.css";
import Form from './Form'
import { connect } from "react-redux";
import GameDashboard from './GameDashboard'

export function App({ user = false }) {

  if(!user){
    return (
      <div className="App">
        <Form/>
        form
      </div>
    );
  }else{
    return(
      <div className="Game">
     <GameDashboard/>
      </div>
    )
  }
  
}

const mapStateToProps = (state) => {
  return {
    user: state.user,
  };
};

export default connect(mapStateToProps)(App);
