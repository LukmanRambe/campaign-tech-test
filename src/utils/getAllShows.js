import { revalidateTag } from 'next/cache';

export const getAllShows = async ({ query = 'girls' }) => {
	const url = `https://api.tvmaze.com/search/shows?q=${query}`;
	const res = await fetch(url, {
		cache: 'no-store',
		next: {
			tags: ['shows'],
		},
	});
	if (!res.ok) throw new Error(res.statusText);

	const shows = await res.json();

	return new Promise((resolve) =>
		setTimeout(() => {
			revalidateTag('shows');
			resolve(shows);
		}, 1500)
	);
};
