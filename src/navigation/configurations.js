import { moderateScale, verticalScale } from "utils/scale";

export const navigationOption = {
  gestureEnabled: false,
  headerTitleAllowFontScaling: false,
  headerBackTitleVisible: false,
  headerStyle: {
    backgroundColor: "#02152B",
    borderBottomWidth: 0,
    shadowOpacity: 0,
  },
  headerTitleAlign: "center",
  headerTintColor: "#fff",
  headerTitleStyle: {
    fontWeight: "normal",
    fontSize: moderateScale(24),
    lineHeight: verticalScale(24),
  },
};

export const horizontalAnimation = {
  cardStyleInterpolator: ({ current, layouts }) => {
    return {
      cardStyle: {
        transform: [
          {
            translateX: current.progress.interpolate({
              inputRange: [0, 1],
              outputRange: [layouts.screen.width, 0],
            }),
          },
        ],
      },
    };
  },
};

export const removeHeader = () => null;
