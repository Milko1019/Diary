import React from "react";
import "./style.css";

export function Modal ({ handleClose, show, children }){
    const showHideClassName = show ? "modal display-block" : "modal display-none";

    return (
      <div className={showHideClassName}>
        <section className="modal-main">
          {children}
          
          <button className="btn-primary mb-3" onClick={handleClose}>Close</button>
        </section>
      </div>
    );
};

export default Modal;