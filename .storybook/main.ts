import type { StorybookConfig } from "@storybook/react-vite";
import remarkLivecodes from "remark-livecodes";

const config: StorybookConfig = {
  stories: ["../src/**/*.mdx", "../src/**/*.stories.@(js|jsx|mjs|ts|tsx)"],
  addons: [
    "@storybook/addon-essentials",
    "@storybook/addon-onboarding",
    "@chromatic-com/storybook",
    "@storybook/experimental-addon-test",
    {
      name: "@storybook/addon-docs",
      options: {
        mdxPluginOptions: {
          mdxCompileOptions: {
            remarkPlugins: [
              [
                remarkLivecodes,
                {
                  /* options */
                },
              ],
            ],
          },
        },
      },
    },
  ],
  framework: {
    name: "@storybook/react-vite",
    options: {},
  },
};
export default config;
