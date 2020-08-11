import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { useStoreActions } from 'easy-peasy';

import { Modal } from '../elements';
import AddTipForm from '../forms/AddTipForm';

const ModalStyled = styled(Modal)`
  position: relative;
`;

const Wrapper = styled.View`
  padding-top: 30;
`;

const AddTipModal = props => {
  const { visible, onRequestClose, handleSubmit } = props;

  return (
    <ModalStyled
      isVisible={visible}
      title="Add Tip"
      onRequestClose={onRequestClose}
      hasHeader
    >
      <Wrapper>
        <AddTipForm handleSubmit={handleSubmit} />
      </Wrapper>
    </ModalStyled>
  );
};

AddTipModal.propTypes = {
  visible: PropTypes.bool.isRequired,
  onRequestClose: PropTypes.func.isRequired,
};

export default AddTipModal;
