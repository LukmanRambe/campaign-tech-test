import PropTypes from 'prop-types';

import Image from 'next/image';
import Link from 'next/link';

const Show = ({ show }) => {
	return (
		<article className='my-3 relative min-w-[230px] aspect-[2/3] rounded-lg overflow-hidden group shadow-[0_5px_12px_rgb(255_0_0_/_0.35)]'>
			<Image
				src={show?.image?.medium ?? '/fallback-image.png'}
				alt={show?.name}
				fill={true}
				sizes='(max-width: 230px) 100%'
				className='object-cover w-full h-full z-[1] group-hover:scale-110 scale-100 transition-all duration-[.25s] ease-in-out'
			/>

			<Link
				className='absolute bottom-0 left-0 z-50 h-full w-full after:contents-[""] after:absolute after:inset-0 after:z-[1] after:bg-gradient-to-t after:from-black/80 after:to-black/0 after:w-full after:h-full'
				href={show?.url}>
				<span className='absolute bottom-0 flex flex-col w-full gap-2 p-6 overflow-hidden text-white z-[2]'>
					<h4 className='text-lg tracking-wide font-semibold min-h-[30px]'>{show?.name}</h4>

					<article className='flex flex-col gap-2 text-xs'>
						<span className='text-xs min-h-[20px] tracking-wide'>{show?.genres?.join(', ')}</span>

						<div className='flex items-center gap-1'>
							<span className='flex items-center justify-start gap-1 px-2 py-1 tracking-wide rounded-full bg-white/25'>
								<Image src={'/icon-star.svg'} alt='Star' width={12} height={12} className='w-[12px] h-[12px]' />
								<span>{show?.rating?.average ?? 0}</span>
							</span>

							<span className='px-2 py-1 tracking-wide rounded-full bg-white/25'>
								{show?.premiered?.split('-')[0] ?? '-'}
							</span>

							<span className='px-2 py-1 tracking-wide rounded-full bg-white/25'>{show?.language ?? '-'}</span>
						</div>
					</article>
				</span>
			</Link>
		</article>
	);
};

Show.propTypes = {
	show: PropTypes.shape({
		id: PropTypes.number,
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

export default Show;
