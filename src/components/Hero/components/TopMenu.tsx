import Close from 'assets/images/icon-close.svg'
import { motion } from 'framer-motion'
import utils from 'utils'

type TopMenuProps = {
	onDismiss: () => void
}

const TopMenu = ({ onDismiss }: TopMenuProps) => {
	return (
		<>
			<motion.div
				initial={{ opacity: 0 }}
				animate={{ opacity: 0.5 }}
				exit={{ opacity: 0 }}
				transition={{ type: 'spring', bounce: 0, duration: 0.5 }}
				onClick={onDismiss}
				className='fixed left-0 top-0 h-full w-full bg-black'
			/>
			<motion.div
				initial={{ y: '-100vh' }}
				animate={{ y: 0 }}
				exit={{ y: '-100vh' }}
				transition={{ type: 'spring', bounce: 0, duration: 0.5 }}
				className='fixed top-0 flex w-full flex-row justify-between bg-white px-6 py-12 sm:px-20'
			>
				<button type='button' onClick={onDismiss}>
					<Close />
				</button>

				<nav>
					<ul className='flex flex-row space-x-8'>
						{utils.NAVIGATION_LINKS.map((link) => {
							return (
								<li>
									<a href='/#' onClick={onDismiss}>
										{link.toLowerCase()}
									</a>
								</li>
							)
						})}
					</ul>
				</nav>
			</motion.div>
		</>
	)
}

export default TopMenu
