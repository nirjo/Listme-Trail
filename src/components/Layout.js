import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components/native';

const Container = styled.View`
  flex: 1;
  flex-direction: column;
  background-color: ${props => props.theme.backgroundColor};
`;
const TopBar = styled.View`
  height: ${props => (props.hasTopNav ? 0 : 0)};
`;

const Layout = props => {
  const { hasTopNav, children } = props;

  return (
    <Container>
      <TopBar hasTopNav={hasTopNav} />
      {children}
    </Container>
  );
};

Layout.defaultProps = {
  hasTopNav: true,
};

Layout.propTypes = {
  hasTopNav: PropTypes.bool,
  children: PropTypes.node.isRequired,
};

export default Layout;
