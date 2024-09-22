import { Code } from 'lucide-react';
import Link from 'next/link';

const CategoryMenu = [
  {
    id: 1,
    name: '前端',
  },
  {
    id: 2,
    name: '后端',
  },
  {
    id: 3,
    name: '全栈',
  },
  {
    id: 4,
    name: '前沿技术',
  },
  {
    id: 5,
    name: 'AI',
  },
];

const NoteNavigation = () => {
  return (
    <ul className="max-md:flex bg-white dark:bg-black max-md:flex-wrap">
      {CategoryMenu.map((item) => (
        <li key={item.id} className="hover:bg-slate-50 px-6">
          <Link href={'/'} className="h-12 leading-[3rem] flex items-center">
            <Code className="mr-2 h-4 w-4 text-slate-600 dark:text-white" />
            <span className="text-sm text-slate-600 dark:text-white">{item.name}</span>
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default NoteNavigation;
