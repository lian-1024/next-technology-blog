import Search from '../Search';
import { ThemeToggle } from '../Theme-toggle';
import LayoutHeaderNavigation from './layout-header-navigation';

const LayoutHeader = () => {
  return (
    <header className="h-[56px] flex items-center p-4 gap-6">
      <h1 className="font-bold">Blog</h1>
      <LayoutHeaderNavigation />
      <Search />
      <ThemeToggle />
    </header>
  );
};

export default LayoutHeader;
