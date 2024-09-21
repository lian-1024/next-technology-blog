import Search from '../Search';
import LayoutHeaderNavigation from './layout-header-navigation';

const LayoutHeader = () => {
  return (
    <header className="h-[56px] flex items-center p-4 gap-6 justify-between">
      <h1 className="font-bold">Blog</h1>
      <LayoutHeaderNavigation />
      <Search />
    </header>
  );
};

export default LayoutHeader;
