import dynamic from 'next/dynamic';
import PropTypes from 'prop-types';

import Image from 'next/image';
import Link from 'next/link';

const Banner = ({ show }) => {
	return (
		<section className='relative w-full h-dvh bg-gradient-to-b from-black/45 to-black/0'>
			<div className='inset-0 flex items-center w-full pt-12 sm:pt-0 px-4 sm:px-6 lg:px-12 h-full min-h-[75dvh] after:contents-[""] after:absolute after:inset-0 absolute after:z-[1] after:bg-gradient-to-tr after:from-black sm:after:from-black/80 after:to-black/0'>
				<Image
					src={show?.image?.original ?? '/fallback-image.png'}
					alt={show?.name}
					fill={true}
					priority={true}
					className='z-[1] object-cover sm:object-contain w-full h-full'
				/>

				<article className='z-[2] flex flex-col items-center sm:items-start gap-12 text-white max-w-2xl'>
					<div>
						<h2 className='mb-6 text-3xl font-semibold tracking-wide sm:text-4xl'>{show?.name}</h2>

						<article className='flex flex-col gap-2 mb-8 text-sm sm:mb-4'>
							<span className='tracking-wide'>{show?.genres?.join(', ')}</span>

							<div className='flex items-center gap-3 text-xs'>
								<span className='flex items-center justify-start gap-1 px-2 py-1 tracking-wide rounded-full bg-white/25'>
									<Image src={'/icon-star.svg'} alt='Star' width={12} height={12} className='w-auto h-auto' />
									<span>{show?.rating?.average ?? 0}</span>
								</span>

								<span className='px-2 py-1 tracking-wide rounded-full bg-white/25'>
									{show?.premiered?.split('-')[0] ?? '-'}
								</span>

								<span className='px-2 py-1 tracking-wide rounded-full bg-white/25'>{show?.language ?? '-'}</span>
							</div>
						</article>

						<p
							className='w-full text-sm tracking-wider sm:text-base'
							dangerouslySetInnerHTML={{
								__html:
									show?.summary ??
									`We don't have a summary for ${
										show?.name ?? 'This Show'
									} yet. Hang in there, or go ahead and contribute one.`,
							}}></p>
					</div>

					<Link
						href={show?.url ?? ''}
						className='px-12 py-4 transition-all duration-150 ease-in-out bg-red-600 rounded-full cursor-pointer w-full sm:w-fit focus:bg-red-700 hover:bg-red-700 active:bg-red-800 shadow-[0_8px_15px_0_rgba(220,38,38,.3)] uppercase font-medium tracking-wide text-center text-sm sm:text-base'>
						WATCH NOW
					</Link>
				</article>
			</div>
		</section>
	);
};

Banner.propTypes = {
	show: PropTypes.shape({
		id: PropTypes.string,
		url: PropTypes.string,
		name: PropTypes.string,
		summary: PropTypes.string,
		rating: PropTypes.shape({
			average: PropTypes.number,
		}),
		image: PropTypes.shape({
			medium: PropTypes.string,
			original: PropTypes.string,
		}),
	}),
};

export default dynamic(() => Promise.resolve(Banner), { ssr: false });
