import React from 'react';
import { withFormik } from 'formik';
import * as yup from 'yup';
import styled from 'styled-components/native';
import { MaterialIcons } from '@expo/vector-icons';
import { Button, TextInput } from '../elements';

const Container = styled.View``;

const InputContainer = styled.View`
  border-width: 1;
  border-color: ${props => props.theme.textColor};
  border-radius: 8;
  margin-bottom: 20;
  flex-direction: row;
  align-items: center;
  padding-left: 10;
  background-color: ${props => props.theme.backgroundColor};
`;
const Input = styled(TextInput)`
  margin-bottom: 0;
  border-radius: 8;
  width: 90%;
  padding-left: 5;
`;

const PostCodeForm = props => {
  const {
    values,
    handleSubmit,
    isSubmitting,
    handleChange,
    isLoading,
    errors,
    loading,
  } = props;


  return (
    <Container>
      <InputContainer>
        <MaterialIcons name="location-on" size={24} color="black" />
        <Input
          placeholder="Enter your postcode"
          value={values.postcode}
          onChangeText={handleChange('postcode')}
          lite
          autoCapitalize="none"
          autoCorrect={false}
          autoFocus={true}
        />
      </InputContainer>
      <Button
        title="Send"
        onPress={handleSubmit}
        isLoading={isSubmitting || isLoading || loading}
      />
    </Container>
  );
};
const enhancer = withFormik({
  mapPropsToValues: ({ initialValues }) => ({
    postcode: '',
  }),
  validationSchema: yup.object().shape({
    postcode: yup.string().required('Please enter your postcode'),
  }),
  handleSubmit: (values, { setSubmitting, props }) => {
    props.handleSubmit({
      ...values,
    });
    setSubmitting(false);
  },
  displayName: 'PostCodeForm', // helps with React DevTools
});
export default enhancer(PostCodeForm);
