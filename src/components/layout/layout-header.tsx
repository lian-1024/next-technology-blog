import Search from '../Search';
import LayoutHeaderNavigation from './layout-header-navigation';

const LayoutHeader = () => {
  return (
    <header className="z-50 h-[56px] flex items-center p-4 gap-6 fixed border-b bg-white dark:bg-black  border-b-slate-100 w-full">
      <h1 className="font-bold text-slate-900">Blog</h1>
      <LayoutHeaderNavigation />
      <Search />
    </header>
  );
};

export default LayoutHeader;
