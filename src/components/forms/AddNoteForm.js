import React from 'react';
import { withFormik } from 'formik';
import * as yup from 'yup';
import styled from 'styled-components/native';
import { useTranslation } from 'react-i18next';
import { Text, Button, TextInput } from '../elements';

const Container = styled.View`
  padding-horizontal: 20;
  margin-top: 50;
`;

const Bottom = styled.View`
  flex: 1;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;
const ButtonWrapper = styled.View`
  flex: 1;
`;
const Input = styled(TextInput)`
  margin-bottom: 20;
  margin-top: 10;
  border-width: 1;
  border-color: ${(props) => props.theme.primaryColor};
`;

const AddNoteForm = (props) => {
  const {
    values,
    handleSubmit,
    isSubmitting,
    handleChange,
    isLoading,
    errors,
    loading,
  } = props;
  const { t } = useTranslation();

  return (
    <Container>
      <Text size="extraSmall">Leave a note for the restaurant</Text>
      <Input
        placeholder="eg. Don't ring the doorbell"
        value={values.note}
        onChangeText={handleChange('note')}
        lite
        autoCapitalize="none"
        autoCorrect={false}
        autoFocus={true}
      />
      <Bottom>
        <ButtonWrapper>
          <Button
            title="Submit"
            onPress={handleSubmit}
            isLoading={isSubmitting || isLoading || loading}
            noAnimation={true}
          />
        </ButtonWrapper>
      </Bottom>
    </Container>
  );
};
const enhancer = withFormik({
  mapPropsToValues: ({ initialValues }) => ({
    note: '',
  }),
  validationSchema: yup.object().shape({
    note: yup.string().required('Leave a note for the restaurant'),
  }),
  handleSubmit: (values, { setSubmitting, props }) => {
    props.handleSubmit(values);
    setSubmitting(false);
  },
  displayName: 'AddItemForm', // helps with React DevTools
});
export default enhancer(AddNoteForm);
