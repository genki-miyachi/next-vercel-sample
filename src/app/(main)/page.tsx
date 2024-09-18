import TaskCard from "@/components/TaskCard/TaskCard";
import Link from "next/link";
import { MdAddTask } from "react-icons/md";

export default function HomePage() {
	return (
		<div className='text-gray-800 p-8 h-full overflow-y-auto pb-24'>
			<header className='flex justify-between items-center'>
				<h1 className='text-2cl font-bold flow item-center'>All Tasks</h1>
				<Link
					href='/new'
					className='flex items-center gap-1 font-semibold border px-4 py-2 rounded-full shadow-sm text-white bg-gray-800 hober:bg-gray-700'>
					<MdAddTask />
					<div>Add Task</div>
				</Link>
			</header>
			<div className='mt-8 flex flex-wrap gap-4'>
				<TaskCard />
			</div>
		</div>
	);
}
