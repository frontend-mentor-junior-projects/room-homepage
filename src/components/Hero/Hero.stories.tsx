import { Meta, StoryObj } from '@storybook/react'

import Hero from '.'

const meta: Meta<typeof Hero> = {
	title: 'Components/Hero',
	component: Hero,
	parameters: {
		layout: 'fullscreen',
	},
}

export default meta
type Story = StoryObj<typeof Hero>

export const Default: Story = {}
