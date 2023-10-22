import type { Meta, StoryObj } from '@storybook/vue3'
import MonsterBall from './MonsterBall.vue'

type Story = StoryObj<typeof MonsterBall>

const meta: Meta<typeof MonsterBall> = {
  title: 'MonsterBall',
  component: MonsterBall,
  render: (args) => ({
    components: { MonsterBall },
    setup() {
      return { args }
    },
    template: "<MonsterBall v-bind='args' />",
  }),
}

export const Default: Story = {
  args: {},
}

export default meta
