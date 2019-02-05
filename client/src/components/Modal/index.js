import React from "react";

export function Modal ({ handleClose, show, children }){
    const showHideClassName = show ? "modal display-block" : "modal display-none";

    return (
      <div className={showHideClassName}>
        <section className="modal-main">
          {children}
          <button onClick={handleClose}>close</button>
        </section>
      </div>
    );
};

export default Modal;

{/* <Modal show={this.state.show} handleClose={this.hideModal}>
        <p>{entry.title}</p>
        <p>{entry.data}</p>
        <p>{entry.entry}</p>
        </Modal>
        <button type="button" onClick={this.showModal}>
        open
        </button> */}