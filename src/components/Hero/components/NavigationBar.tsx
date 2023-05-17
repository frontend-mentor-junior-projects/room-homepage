import Hamburger from 'assets/images/icon-hamburger.svg'
import Logo from 'assets/images/logo.svg'
import utils from 'utils'

type NavigationBarProps = {
	onClick: () => void
}

const NavigationBar = ({ onClick }: NavigationBarProps) => {
	return (
		<>
			<button
				type='button'
				onClick={onClick}
				className='absolute left-6 top-12 sm:left-20 lg:hidden'
			>
				<Hamburger />
			</button>

			<div className='absolute left-[50%] top-12 translate-x-[-50%] lg:hidden'>
				<Logo />
			</div>

			<div className='absolute hidden flex-row items-center lg:left-16 lg:top-14 lg:flex'>
				<div className='mr-12'>
					<Logo />
				</div>

				<nav>
					<ul className='flex flex-row space-x-8'>
						{utils.NAVIGATION_LINKS.map((link) => {
							return (
								<li key={link} className='group flex flex-col items-center'>
									<a href='/#' className='text-white'>
										{link.toLowerCase()}
									</a>

									<hr className='h-[2px] w-4 bg-white opacity-0 transition duration-300 ease-out group-hover:opacity-100' />
								</li>
							)
						})}
					</ul>
				</nav>
			</div>
		</>
	)
}

export default NavigationBar
