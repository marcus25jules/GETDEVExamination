import React from "react";
import PropTypes from "prop-types";
import { Text } from "react-native";
import { moderateScale } from "utils/scale";

const StyledText = ({
  size = 14,
  color,
  weight,
  style = {},
  fontFamily = "Myriad Pro",
  testID,
  accessibilityLabel,
  ...rest
}) => {
  return (
    <Text
      {...rest}
      testID={testID}
      accessibilityLabel={accessibilityLabel}
      allowFontScaling={false}
      style={[
        {
          fontSize: moderateScale(size),
          color,
          fontWeight: weight,
          flexWrap: "wrap",
          fontFamily: fontFamily,
        },
        style,
      ]}
    />
  );
};

StyledText.propTypes = {
  size: PropTypes.number,
  color: PropTypes.string,
  weight: PropTypes.string
};

StyledText.defaultProps = {
  size: 14,
  color: "#000000",
  weight: "normal",
  flexWrap: "wrap",
};

export default StyledText;
