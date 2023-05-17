const About = () => {
	return (
		<section
			id='about'
			className='flex flex-col bg-white sm:grid sm:grid-cols-2 xl:flex xl:flex-row'
		>
			<picture>
				<img
					src='assets/images/image-about-dark.jpg'
					alt=''
					className='h-full w-full'
				/>
			</picture>

			<div className='px-6 py-12 sm:order-last sm:col-span-2 sm:px-20 xl:order-none xl:flex xl:flex-1 xl:flex-col xl:justify-center xl:px-12 xl:py-16'>
				<h2 className=' mb-6 font-bold tracking-[4px] xl:mb-4 xl:tracking-[8px]'>
					ABOUT OUR FURNITURE
				</h2>

				<p className='tracking-wide  text-primary-100'>
					Our multifunctional collection blends design and function to suit your
					individual taste. Make each room unique, or pick a cohesive theme that
					best express your interests and what inspires you. Find the furniture
					pieces you need, from traditional to contemporary styles or anything
					in between. Product specialists are available to help you create your
					dream space.
				</p>
			</div>

			<picture>
				<img
					src='assets/images/image-about-light.jpg'
					alt=''
					className='h-full w-full'
				/>
			</picture>
		</section>
	)
}

export default About
