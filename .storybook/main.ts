import { StorybookConfig } from '@storybook/vue3-vite'

const config: StorybookConfig = {
  framework: '@storybook/vue3-vite',
  stories: ['../**/*.stories.@(js|ts)'],
  addons: ['@storybook/addon-controls', '@storybook/addon-a11y'],
}

export default config
