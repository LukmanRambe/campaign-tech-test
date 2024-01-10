import Navbar from '@/components/artifacts/Navbar';
import Banner from '@/components/banner';
import Shows from '@/components/shows';
import { getAllShows } from '@/utils/getAllShows';

const Main = async ({ searchParams }) => {
	const query = searchParams.q?.toString().toLowerCase();
	const shows = await getAllShows({ query });

	return (
		<>
			<header>
				<Navbar />
			</header>

			<main className='relative flex flex-col items-center min-h-screen'>
				<Banner show={shows[0]?.show} />
				<Shows shows={shows} />
			</main>
		</>
	);
};

export default Main;
