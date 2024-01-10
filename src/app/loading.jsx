import Navbar from '@/components/artifacts/Navbar';

const Loading = () => {
	return (
		<>
			<header>
				<Navbar />
			</header>

			<main className='relative flex flex-col items-center min-h-screen'>
				<section
					role='status'
					className='relative flex items-center justify-center w-full bg-gray-300 rounded-lg h-dvh animate-pulse'>
					<svg
						className='w-10 h-10 text-gray-200'
						aria-hidden='true'
						xmlns='http://www.w3.org/2000/svg'
						fill='currentColor'
						viewBox='0 0 16 20'>
						<path d='M5 5V.13a2.96 2.96 0 0 0-1.293.749L.879 3.707A2.98 2.98 0 0 0 .13 5H5Z' />
						<path d='M14.066 0H7v5a2 2 0 0 1-2 2H0v11a1.97 1.97 0 0 0 1.934 2h12.132A1.97 1.97 0 0 0 16 18V2a1.97 1.97 0 0 0-1.934-2ZM9 13a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-2a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v2Zm4 .382a1 1 0 0 1-1.447.894L10 13v-2l1.553-1.276a1 1 0 0 1 1.447.894v2.764Z' />
					</svg>

					<article className='w-full absolute inset-0 z-[2] flex flex-col justify-center px-4 sm:px-12 items-start text-white'>
						<div className='w-40 mb-12 bg-gray-400 rounded-full h-7 sm:h-10 sm:w-52'></div>

						<div className='h-2.5 bg-gray-400 rounded-full w-48 mb-4'></div>

						<article className='flex gap-2'>
							<div className='h-2.5 bg-gray-400 rounded-full w-10 mb-4'></div>
							<div className='h-2.5 bg-gray-400 rounded-full w-10 mb-4'></div>
							<div className='h-2.5 bg-gray-400 rounded-full w-10 mb-4'></div>
						</article>

						<article className='flex flex-col gap-2'>
							<div className='flex items-center'>
								<div className='h-2.5 bg-gray-400 rounded-full w-16 sm:w-32'></div>
								<div className='h-2.5 ms-2 bg-gray-400 rounded-full w-12 sm:w-24'></div>
								<div className='h-2.5 ms-2 bg-gray-400 rounded-full w-20 sm:w-48'></div>
							</div>

							<div className='flex items-center'>
								<div className='h-2.5 bg-gray-400 rounded-full w-20 sm:w-48'></div>
								<div className='h-2.5 ms-2 bg-gray-400 rounded-full w-16 sm:w-24'></div>
								<div className='h-2.5 ms-2 bg-gray-400 rounded-full w-12 sm:w-32'></div>
							</div>

							<div className='flex items-center'>
								<div className='h-2.5 bg-gray-400 rounded-full w-12 sm:w-24'></div>
								<div className='h-2.5 ms-2 bg-gray-400 rounded-full w-20 sm:w-32'></div>
								<div className='h-2.5 ms-2 bg-gray-400 rounded-full w-16 sm:w-48'></div>
							</div>
						</article>
					</article>
				</section>

				<section className='w-full h-full py-12 pb-24 overflow-hidden bg-black'>
					<h3 className='px-4 mb-12 text-2xl font-semibold tracking-wider text-white sm:px-12'>All Shows</h3>
					<div className='relative flex w-screen gap-6 px-4 overflow-auto sm:px-12 show-list'>
						{new Array(3).fill('').map((_, index) => (
							<div
								key={index}
								className='my-3 relative min-w-[230px] aspect-[2/3] rounded-lg overflow-hidden group shadow-[0_5px_12px_rgb(255_0_0_/_0.35)] animate-pulse'>
								<div className='relative bottom-0 left-0 z-50 w-full h-full bg-gray-200'>
									<article className='w-full absolute inset-0 z-[2] flex flex-col justify-end pb-8 px-4 items-start text-white'>
										<div className='h-2.5 bg-gray-400 rounded-full w-20 mb-4'></div>

										<article className='flex flex-col gap-2'>
											<div className='flex items-center'>
												<div className='h-2.5 bg-gray-400 rounded-full w-6'></div>
												<div className='h-2.5 ms-2 bg-gray-400 rounded-full w-6'></div>
											</div>

											<div className='flex items-center'>
												<div className='w-8 h-3 bg-gray-400 rounded-full'></div>
												<div className='w-8 h-3 bg-gray-400 rounded-full ms-2'></div>
												<div className='w-8 h-3 bg-gray-400 rounded-full ms-2'></div>
											</div>
										</article>
									</article>
								</div>
							</div>
						))}
					</div>
				</section>
			</main>
		</>
	);
};

export default Loading;
