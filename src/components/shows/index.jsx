import PropTypes from 'prop-types';

import Show from './Show';

const Shows = ({ shows }) => {
	return (
		<section className='relative w-full h-full py-12 pb-24 overflow-hidden bg-black'>
			<h3 className='px-4 mb-12 text-2xl font-semibold tracking-wider text-white sm:px-12'>All Shows</h3>

			<div className='relative flex w-screen gap-6 px-4 overflow-auto sm:px-12 show-list'>
				{shows?.length <= 0 ? (
					<p className='text-lg tracking-wide text-white'>No Shows Founded</p>
				) : (
					shows?.map((show) => <Show key={show?.show.id} show={show?.show} />)
				)}
			</div>
		</section>
	);
};

Shows.propTypes = {
	shows: PropTypes.arrayOf(
		PropTypes.shape({
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
		})
	),
};

export default Shows;
