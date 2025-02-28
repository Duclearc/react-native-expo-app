import colors from "tailwindcss/colors";

const primary = colors.blue[500];
const primaryDark = colors.blue[800];
const onPrimary = colors.white;
const tabTintColor = "#E95C1C";

export const themeColors = {
  itemBg: primary,
  itemBgActive: primaryDark,
  itemBgActiveAlt: colors.gray[300],
  onItem: onPrimary,

  itemBgDark: primary,
  itemBgDarkActive: primary,
  onItemDark: onPrimary,

  textDefault: colors.black,
  textOnDark: colors.white,

  bgDefault: colors.white,
  bgOnDark: colors.black,

  borderDefault: colors.black,
  borderOnDark: colors.white,

  disabled: colors.gray[500],

  tabBar: {
    light: {
      text: "#11181C",
      background: "#fff",
      tint: tabTintColor,
      icon: "#687076",
      tabIconDefault: "#687076",
      tabIconSelected: tabTintColor,
    },
    dark: {
      text: "#ECEDEE",
      background: "#151718",
      tint: tabTintColor,
      icon: "#9BA1A6",
      tabIconDefault: "#9BA1A6",
      tabIconSelected: tabTintColor,
    },
  },
};
