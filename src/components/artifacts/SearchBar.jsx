'use client';

import useDebounce from '@/hooks/useDebounce';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import { useEffect, useState } from 'react';

const SearchBar = () => {
	const [query, setQuery] = useState();
	const debouncedQuery = useDebounce(query, 750);
	const searchParams = useSearchParams();
	const pathname = usePathname();
	const { replace } = useRouter();

	const handleSearchShows = (query) => {
		setQuery(query);
	};

	useEffect(() => {
		const params = new URLSearchParams(searchParams);

		if (debouncedQuery) {
			params.set('q', debouncedQuery);
		} else {
			params.delete('q');
		}

		replace(`${pathname}?${params.toString()}`);
	}, [debouncedQuery, pathname, replace, searchParams]);

	return (
		<article className='w-full sm:w-fit p-3 px-[14px] rounded-lg bg-black/65 group'>
			<div className='relative'>
				<div className='absolute inset-y-0 flex items-center pointer-events-none start-0 ps-2'>
					<svg
						className='w-4 h-4 text-gray-500'
						aria-hidden='true'
						xmlns='http://www.w3.org/2000/svg'
						fill='none'
						viewBox='0 0 20 20'>
						<path
							stroke='currentColor'
							strokeLinecap='round'
							strokeLinejoin='round'
							strokeWidth='2'
							d='m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z'
						/>
					</svg>
				</div>

				<input
					id='search-bar'
					name='query'
					type='text'
					autoComplete='off'
					className='block text-sm text-white bg-transparent outline-none fill-transparent sm:w-full ps-10'
					placeholder='Search Shows....'
					onChange={(event) => handleSearchShows(event.target.value)}
					defaultValue={''}
				/>
			</div>
		</article>
	);
};

export default SearchBar;
