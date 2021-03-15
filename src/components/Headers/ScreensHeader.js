// React Modules
import React from "react";
import PropTypes from "prop-types";

// Third party libraries
import {Header, Left, Body, Right, Title } from 'native-base';


const ScreensHeader = ({
  navigation,
  headerName,
  rightContainer,
  leftContainer,
  onPressInfor
}) => {

  return (
      <Header>
         {(leftContainer !== null)&&
            <Left>
               {leftContainer}
            </Left>
         }
            <Body>
              <Title>{headerName}</Title>
            </Body>
            <Right>
               {rightContainer}
            </Right>
      </Header>
  );
};

ScreensHeader.propTypes = {
  navigation: PropTypes.object.isRequired,
};

ScreensHeader.defaultProps = {
  leftContainer: null,
};

export default (ScreensHeader);
