import Icon from 'components/Icon'
import { motion } from 'framer-motion'
import utils from 'utils'

const ShopNowButton = () => {
	return (
		<motion.button
			initial='hidden'
			animate='visible'
			variants={utils.VARIANTS.fadeIn}
			type='button'
			className='group flex flex-row items-center'
		>
			<span className='animate-ease-300 mr-8 font-semibold tracking-[8px] group-hover:text-primary-100'>
				SHOP NOW
			</span>{' '}
			<span className='animate-ease-300 group-hover:translate-x-6'>
				{/* <Arrow /> */}
				<Icon.Arrow />
			</span>
		</motion.button>
	)
}

export default ShopNowButton
