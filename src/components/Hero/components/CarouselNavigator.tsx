import AngleLeft from 'assets/images/icon-angle-left.svg'
import AngleRight from 'assets/images/icon-angle-right.svg'

type CarouselNavigatorProps = {
	onClickLeft: () => void
	onClickRight: () => void
	// eslint-disable-next-line react/require-default-props
	className?: string
}

const CarouselNavigator = ({
	onClickLeft,
	onClickRight,
	className = '',
}: CarouselNavigatorProps) => {
	return (
		<div className={`absolute bottom-0 right-0 flex flex-row ${className}`}>
			<button
				type='button'
				onClick={onClickLeft}
				className='animate-ease-300 flex h-14 w-14 flex-col items-center justify-center bg-black hover:bg-primary-200 xl:h-20 xl:w-20'
			>
				<AngleLeft />
			</button>
			<button
				type='button'
				onClick={onClickRight}
				className='animate-ease-300 flex h-14 w-14 flex-col items-center justify-center bg-black hover:bg-primary-200 xl:h-20 xl:w-20'
			>
				<AngleRight />
			</button>
		</div>
	)
}

export default CarouselNavigator
