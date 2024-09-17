const MainLayout = ({ children }: Readonly<{ children: React.ReactNode }>) => {
	return (
		<div className='flex'>
			<div className='bg-indigo-300 h-screen'>サイドメニュー</div>
			<main className='bg-red-300 flex-1 overflow-auto'>{children}</main>
		</div>
	);
};

export default MainLayout;
