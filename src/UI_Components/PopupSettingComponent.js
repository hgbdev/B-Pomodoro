import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import Popup from 'reactjs-popup';
import { Context } from './../Context/context';
import { closeSetting } from './../Context/actions';
import { Container, Row, Col } from 'react-bootstrap';

function PopupSettingComponent(props) {
  const {} = props;
  const [state, dispatch] = useContext(Context);

  return (
    <Popup
      open={state.isOpenSetting}
      modal
      onClose={() => dispatch(closeSetting())}
    >
      <Container>
        <Row>
          <Col>1 of 1</Col>
        </Row>
      </Container>
    </Popup>
  );
}

PopupSettingComponent.propTypes = {};

export default PopupSettingComponent;
