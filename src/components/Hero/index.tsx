import ShopNowButton from 'components/ShopNowButton'
import { AnimatePresence, motion } from 'framer-motion'
import utils from 'utils'

import CarouselNavigator from './components/CarouselNavigator'
import NavigationBar from './components/NavigationBar'
import TopMenu from './components/TopMenu'
import useCarouselNavigator from './hooks/useCarouselNavigator'
import useTopMenu from './hooks/useTopMenu'

const Hero = () => {
	const { showMenu, toggleMenu, closeMenu } = useTopMenu()
	const { currentItem, handleOnClickLeft, handleOnClickRight } =
		useCarouselNavigator()

	return (
		<motion.section
			key={currentItem.id}
			className='relative bg-black lg:grid lg:grid-cols-2 xl:flex xl:flex-row'
		>
			{/* Picture. */}
			<AnimatePresence mode='wait'>
				<motion.div
					initial={{ x: '-100vh', opacity: 0 }}
					animate={{ x: 0, opacity: 1 }}
					exit={{ x: '100vh', opacity: 0 }}
					transition={{ duration: 0.9 }}
					className='relative bg-black 2xl:flex-1'
				>
					<NavigationBar onClick={toggleMenu} />

					<picture>
						<source
							media='(min-width:640px)'
							srcSet={currentItem.image.desktop}
							className='h-full'
						/>
						<img
							src={currentItem.image.mobile}
							alt=''
							className='w-full lg:h-full'
						/>
					</picture>
					<CarouselNavigator
						onClickLeft={handleOnClickLeft}
						onClickRight={handleOnClickRight}
						className='lg:hidden'
					/>
				</motion.div>
			</AnimatePresence>

			{/* Content. */}
			<div className='relative bg-white px-6 pb-[72px] pt-14 sm:px-20 lg:flex lg:flex-1 lg:flex-col lg:pb-[120px] xl:px-[96px] xl:pb-[150px] xl:pt-[120px] 2xl:w-[600px] 2xl:flex-none'>
				<motion.h1
					initial={{ opacity: 0, x: '100vw' }}
					animate={{ opacity: 1, x: 0 }}
					transition={{ duration: 0.8 }}
					exit={{ opacity: 0 }}
					className='mb-6 text-[32px] font-bold leading-none xl:text-[40px]'
				>
					{currentItem.title}
				</motion.h1>

				<motion.p
					initial='hidden'
					animate='visible'
					variants={utils.VARIANTS.fadeIn}
					className='mb-10 text-primary-100 xl:mb-6'
				>
					{currentItem.description}
				</motion.p>

				<ShopNowButton />

				<CarouselNavigator
					onClickLeft={handleOnClickLeft}
					onClickRight={handleOnClickRight}
					className='hidden lg:bottom-0 lg:left-0 lg:flex'
				/>
			</div>

			{/* Top Menu. */}
			<AnimatePresence>
				{showMenu && <TopMenu onDismiss={closeMenu} />}
			</AnimatePresence>
		</motion.section>
	)
}

export default Hero
