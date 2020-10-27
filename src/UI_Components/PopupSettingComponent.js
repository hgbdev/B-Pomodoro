import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import Popup from 'reactjs-popup';
import { Context } from './../Context/context';
import { closeSetting } from './../Context/actions';
import {
  Container,
  Row,
  Col,
  Form,
  Card,
  Button,
  Modal,
} from 'react-bootstrap';

function PopupSettingComponent(props) {
  const {} = props;
  const [state, dispatch] = useContext(Context);

  const handleClose = () => {
    dispatch(closeSetting());
  };

  return (
    <Modal show={state.isOpenSetting} onHide={handleClose} centered>
      <Modal.Header closeButton>
        <Modal.Title>Setting</Modal.Title>
      </Modal.Header>
      <Modal.Body>Woohoo, you're reading this text in a modal!</Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
          Close
        </Button>
        <Button variant="primary" onClick={handleClose}>
          Save Changes
        </Button>
      </Modal.Footer>
    </Modal>
  );
}

PopupSettingComponent.propTypes = {};

export default PopupSettingComponent;
