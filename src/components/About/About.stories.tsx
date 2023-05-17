import { Meta, StoryObj } from '@storybook/react'

import About from '.'

const meta: Meta<typeof About> = {
	title: 'Components/About',
	component: About,
	parameters: {
		layout: 'fullscreen',
	},
}

export default meta
type Story = StoryObj<typeof About>

export const Default: Story = {}
