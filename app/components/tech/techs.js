import React from 'react';
import PropTypes from 'prop-types';
import ReactModal from 'react-modal';
import Card from "./flip_card";
class Projects extends React.Component {
  static get propTypes() {
    return {
      list:PropTypes.array,
        children: PropTypes.any,
        onClickOut: PropTypes.func
    };
  }
  constructor () {
    super();
    this.state = {
      showModal: false
    };
    ReactModal.setAppElement('#container');
    this.handleOpenModal = this.handleOpenModal.bind(this);
    this.handleCloseModal = this.handleCloseModal.bind(this);
  }

  handleOpenModal () {
    this.setState({ showModal: true });
  }

  handleCloseModal () {
    this.setState({ showModal: false });
  }

  handleClick(key){
    console.log("clicked11: ", key);
    this.handleOpenModal();
  }
  render() {
    return (
      <section>
        <div className="moving-tiles" style={{height: 500}}>
        {this.props.list.map((item, itemkey) =>
          <Card item={item} key={itemkey} onClickOut={this.handleClick}/>
        )}
        <button onClick={this.handleOpenModal}>Trigger Modal</button>
        <ReactModal
           isOpen={this.state.showModal}
           contentLabel="onRequestClose Example"
           onRequestClose={this.handleCloseModal}
           className="Modal"
           overlayClassName="Overlay"
        >
          <p>Modal text!</p>
          <button onClick={this.handleCloseModal}>Close Modal</button>
        </ReactModal>
        </div>
      </section>
    );
  }
}

module.exports = Projects;
