import React, { useContext, useState } from 'react';
import PropTypes from 'prop-types';
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
import ColorPicker from 'rc-color-picker';
import 'rc-color-picker/assets/index.css';
import { Panel as ColorPickerPanel } from 'rc-color-picker';

function PopupSettingComponent(props) {
  const {} = props;
  const [state, dispatch] = useContext(Context);

  const handleClose = () => {
    dispatch(closeSetting());
  };

  function changeHandler(colors) {
    console.log(colors);
  }

  return (
    <Modal
      show={state.isOpenSetting}
      onHide={handleClose}
      centered
      backdrop={false}
      onClick={() => console.log('xc')}
    >
      <Modal.Header closeButton>
        <Modal.Title>Setting</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <Form.Group as={Row} controlId="background">
            <Form.Label column sm="5">
              Background:
            </Form.Label>
            <Col sm="7">
              <Form.Control placeholder="(Link image backgorund)" />
            </Col>
          </Form.Group>

          <Form.Group as={Row} controlId="pomodoro">
            <Form.Label column sm="5">
              Pomorodo:
            </Form.Label>
            <Col sm="7">
              <Form.Control placeholder="(Minutes)" />
            </Col>
          </Form.Group>

          <Form.Group as={Row} controlId="s_break">
            <Form.Label column sm="5">
              Short Break:
            </Form.Label>
            <Col sm="7">
              <Form.Control placeholder="(Minutes)" />
            </Col>
          </Form.Group>

          <Form.Group as={Row} controlId="l_break">
            <Form.Label column sm="5">
              Long Break:
            </Form.Label>
            <Col sm="7">
              <Form.Control placeholder="(Minutes)" />
            </Col>
          </Form.Group>

          <Form.Group as={Row} controlId="interval">
            <Form.Label column sm="5">
              Long Break Interval:
            </Form.Label>
            <Col sm="7">
              <Form.Control placeholder="(Long Break Interval)" />
            </Col>
          </Form.Group>

          <Form.Group as={Row} controlId="auto_start">
            <Form.Label column sm="5">
              Auto start:
            </Form.Label>
            <Col sm="7">
              <Form.Control as="select">
                <option>Yes</option>
                <option>No</option>
              </Form.Control>
            </Col>
          </Form.Group>

          <Form.Group as={Row} controlId="font">
            <Form.Label column sm="5">
              Font:
            </Form.Label>
            <Col sm="7">
              <Form.Control as="select">
                <option>Yes</option>
                <option>No</option>
              </Form.Control>
            </Col>
          </Form.Group>

          <Form.Group as={Row} controlId="size_timmer">
            <Form.Label column sm="5">
              Size Timer:
            </Form.Label>
            <Col sm="7">
              <Form.Control placeholder="(Long Break Interval)" />
            </Col>
          </Form.Group>

          <Form.Group as={Row} controlId="size_text">
            <Form.Label column sm="5">
              Size Text:
            </Form.Label>
            <Col sm="7">
              <Form.Control placeholder="(Long Break Interval)" />
            </Col>
          </Form.Group>

          <Form.Group as={Row} controlId="size_border_text">
            <Form.Label column sm="5">
              Size border text:
            </Form.Label>
            <Col sm="7">
              <Form.Control placeholder="(Long Break Interval)" />
            </Col>
          </Form.Group>

          <Form.Group as={Row} controlId="font_color">
            <Form.Label column sm="5">
              Font color:
            </Form.Label>
            <Col sm="7">
              <div style={{ backgroundColor: '#ddd', padding: 20 }}>
                <ColorPickerPanel
                  enableAlpha={false}
                  color={'#345679'}
                  onChange={changeHandler}
                  mode="RGB"
                />
              </div>
            </Col>
          </Form.Group>

          <Form.Group as={Row} controlId="border_text_color">
            <Form.Label column sm="5">
              Border text color:
            </Form.Label>
            <Col sm="7">
              <Form.Control placeholder="(Long Break Interval)" />
            </Col>
          </Form.Group>
        </Form>
      </Modal.Body>
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
