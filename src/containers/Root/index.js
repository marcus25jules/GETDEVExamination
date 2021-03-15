// React Modules
import React from "react";

// Third party libraries
import { connect } from "react-redux";

// Navigation
import RootNavigator from "navigation";

const InitializingScreen = (props) => {

  return (
    <>
      <RootNavigator />
    </>
  );
};

export default connect(null, null)(InitializingScreen);
