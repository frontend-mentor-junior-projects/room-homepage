import { Meta, StoryObj } from '@storybook/react'

import Main from '.'

const meta: Meta<typeof Main> = {
	title: 'Components/Main',
	component: Main,
	parameters: {
		layout: 'fullscreen',
	},
}

export default meta
type Story = StoryObj<typeof Main>

export const Default: Story = {}
