import { useState } from 'react'

import utils from 'utils'

const useCarouselNavigator = () => {
	const [position, setPosition] = useState(0)

	const currentItem = utils.CAROUSEL_ITEMS[position]

	const handleOnClickLeft = () => {
		setPosition((prevPosition) => {
			if (prevPosition > 0) {
				return prevPosition - 1
			}

			if (prevPosition === 0) {
				return utils.CAROUSEL_ITEMS.length - 1
			}

			return prevPosition
		})
	}

	const handleOnClickRight = () => {
		setPosition((prevPosition) => {
			if (prevPosition < utils.CAROUSEL_ITEMS.length - 1) {
				return prevPosition + 1
			}

			if (prevPosition === utils.CAROUSEL_ITEMS.length - 1) {
				return 0
			}

			return prevPosition
		})
	}

	return { currentItem, handleOnClickLeft, handleOnClickRight }
}

export default useCarouselNavigator
