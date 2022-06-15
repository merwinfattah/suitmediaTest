import React from "react";
import '../style.css';


const ModalLogin = ({ setOpenModal }) => {
  return (
    <div className="modalBackground">
      <div className="modalContainer">
        <div className="titleCloseBtn">
          <button
            onClick={() => {
              setOpenModal(false);
            }}
          >
            X
          </button>
        </div>
        <div className="title">
          <h1>Login</h1>
        </div>
        <div className="body">
          <form>
            <label>
              Email
            </label>
            <input type="text"/>
            <label>
              Password
            </label>
            <input type="text"/>
          </form>
        </div>
        <div className="footer">
          <button>Login</button>
        </div>
      </div>
    </div>
  );
}

export default ModalLogin;