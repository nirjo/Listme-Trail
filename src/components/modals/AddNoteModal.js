import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { useStoreActions } from 'easy-peasy';

import { Modal } from '../elements';
import AddNoteForm from '../forms/AddNoteForm';

const ModalStyled = styled(Modal)`
  position: relative;
`;

const Wrapper = styled.View`
  padding-top: 30;
`;

const AddNoteModal = props => {
  const { visible, onRequestClose, handleSubmit } = props;
  return (
    <ModalStyled isVisible={visible} onRequestClose={onRequestClose} hasHeader>
      <Wrapper>
        <AddNoteForm handleSubmit={handleSubmit} />
      </Wrapper>
    </ModalStyled>
  );
};

AddNoteModal.propTypes = {
  visible: PropTypes.bool.isRequired,
  onRequestClose: PropTypes.func.isRequired,
  // handleItems: PropTypes.func.isRequired,
};

export default AddNoteModal;
