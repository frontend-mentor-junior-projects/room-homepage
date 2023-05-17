import { useState } from 'react'

const useTopMenu = () => {
	const [showMenu, setShowMenu] = useState(false)

	const toggleMenu = () => {
		setShowMenu(!showMenu)
	}

	const closeMenu = () => {
		setShowMenu(false)
	}

	return { showMenu, toggleMenu, closeMenu }
}

export default useTopMenu
