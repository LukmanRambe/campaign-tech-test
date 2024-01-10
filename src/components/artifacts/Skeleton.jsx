const Skeleton = () => {
	return (
		<div className='my-3 relative min-w-[230px] aspect-[2/3] rounded-lg overflow-hidden group shadow-[0_5px_12px_rgb(255_0_0_/_0.35)] animate-pulse'>
			<div className='absolute bottom-0 left-0 z-50 w-full h-full bg-gray-200'>
				<div className='absolute bottom-0 flex flex-col w-full gap-2 p-6 overflow-hidden text-white z-[2]'></div>
			</div>
		</div>
	);
};

export default Skeleton;
