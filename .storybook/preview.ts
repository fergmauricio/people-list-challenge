import type { Preview } from "@storybook/react";
import "../src/styles/globals.scss";

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: "^on[A-Z].*" },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    layout: "centered",
    backgrounds: {
      default: "dark",
      values: [
        { name: "dark", value: "#171717" },
        { name: "light", value: "#FFFFFF" },
      ],
    },
  },
  globalTypes: {
    theme: {
      name: "Theme",
      description: "Global theme for components",
      defaultValue: "dark",
      toolbar: {
        icon: "contrast",
        items: [
          { value: "dark", icon: "moon", title: "Dark" },
          { value: "light", icon: "sun", title: "Light" },
        ],
        showName: true,
        dynamicTitle: true,
      },
    },
  },
  decorators: [
    (Story, context) => {
      const theme = context.globals.theme;

      document.documentElement.setAttribute("data-theme", theme);

      document.body.style.backgroundColor =
        theme === "dark" ? "#171717" : "#FFFFFF";
      document.body.style.color = theme === "dark" ? "#F1F1F1" : "#1A1A1A";
      document.body.style.minHeight = "100vh";
      document.body.style.padding = "2rem";

      return Story();
    },
  ],
};

export default preview;
