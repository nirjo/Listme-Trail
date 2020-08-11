import React from 'react';
import { withFormik } from 'formik';
import * as yup from 'yup';
import styled from 'styled-components/native';
import { useTranslation } from 'react-i18next';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { Button, TextInput, Text } from '../elements';

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
  border-width: 1;
  border-color: ${props => props.theme.primaryColor};
`;

const AddTipForm = props => {
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
      <Input
        placeholder="$ Tip"
        value={values.tip}
        onChangeText={handleChange('tip')}
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
    tip: '',
  }),
  validationSchema: yup.object().shape({
    tip: yup.string().required('Add your Tip'),
  }),
  handleSubmit: (values, { setSubmitting, props }) => {
    props.handleSubmit(values);
    setSubmitting(false);
  },
  displayName: 'AddItemForm', // helps with React DevTools
});
export default enhancer(AddTipForm);
