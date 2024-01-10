'use client';

import Image from 'next/image';
import { useEffect, useState } from 'react';
import SearchBar from './SearchBar';

const Navbar = () => {
	const [isDialogOpen, setIsDialogOpen] = useState(false);
	const [isScroll, setIsScroll] = useState(false);

	useEffect(() => {
		window.addEventListener('scroll', () => {
			if (window.scrollY >= 80) {
				setIsScroll(true);
			} else {
				setIsScroll(false);
			}
		});
	}, [isDialogOpen]);

	return (
		<nav
			className={`fixed top-0 z-[100] flex flex-col items-center w-full px-4 py-5 sm:flex-row sm:py-5 sm:px-6 lg:px-12 ${
				isScroll ? 'bg-red-700' : isDialogOpen ? 'bg-red-700' : 'bg-transparent'
			}`}>
			<div className='flex items-center justify-between w-full md:w-fit'>
				<h1 className='text-2xl font-bold tracking-wider text-white sm:text-3xl'>Campflix</h1>

				<button
					data-collapse-toggle='navbar-default'
					type='button'
					className='inline-flex items-center justify-center h-10 text-sm text-white w-fit md:hidden focus:outline-none'
					onClick={() => setIsDialogOpen(!isDialogOpen)}>
					<span className='sr-only'>Open main menu</span>
					<svg
						className='w-5 h-5'
						aria-hidden='true'
						xmlns='http://www.w3.org/2000/svg'
						fill='none'
						viewBox='0 0 17 14'>
						<path
							stroke='currentColor'
							strokeLinecap='round'
							strokeLinejoin='round'
							strokeWidth='2'
							d='M1 1h15M1 7h15M1 13h15'
						/>
					</svg>
				</button>
			</div>

			<article
				className={`w-full md:flex md:flex-row md:items-center md:justify-end gap-5 pt-3 md:py-0 ${
					isDialogOpen ? 'flex flex-col-reverse	 items-start justify-between' : 'hidden'
				}`}>
				<SearchBar />

				<article className='flex items-center w-full gap-2 md:w-fit'>
					<Image
						src={'/icon-avatar.png'}
						alt='Avatar'
						width={30}
						height={30}
						className='w-[30px] h-[30px] border border-white rounded-full'
					/>

					<span className='text-md font-medium tracking-wide text-white min-w-[125px] max-w-[150px]'>Lukman Rambe</span>
				</article>
			</article>
		</nav>
	);
};

export default Navbar;
