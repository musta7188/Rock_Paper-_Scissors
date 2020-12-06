import React, { useState } from "react";
import { connect } from "react-redux";
import "./Form.css";

export function Form({ startGame }) {
  const [gamer, setUser] = useState(null);

  const handelSubmit = (e) => {
    e.preventDefault();
    startGame(gamer);
  };
  return (
    <div data-testid="form" className="form--container">
      <form onSubmit={(e) => handelSubmit(e)}>
        <label>
          <h1>Player name</h1>
          <input
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="gamer"
            label="gamer"
            name="gamer"
            value={gamer}
            onChange={(e) => setUser(e.target.value)}
            autoComplete="gamer"
            autoFocus
            placeholder="Insert your name"
          />
        </label>
        <input className="submit-button" type="submit" value="Submit" />
      </form>
    </div>
  );
}

const mapDispatchToProps = (dispatch) => {
  return {
    startGame: (user) => dispatch({ type: "SET_USER", payload: { user } }),
  };
};

const mapStateToProps = (state) => {
  return {
    user: state.user,
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Form);
