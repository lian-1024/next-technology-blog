import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from '@/components/ui/navigation-menu';
import { cn } from '@/lib/utils';
import Link from 'next/link';

const MenuOptions = [
  {
    menuName: '首页',
    menuHref: '/',
  },
  {
    menuName: '笔记',
    menuHref: '/note',
    children: [
      {
        categoryName: '前端',
        categoryId: 1,
      },
      {
        categoryName: '后端',
        categoryId: 2,
      },
      {
        categoryName: '人工智能',
        categoryId: 3,
      },
      {
        categoryName: '前言技术',
        categoryId: 4,
      },
    ],
  },
  {
    menuName: '关于我',
    menuHref: '/about',
  },
];

const LayoutHeaderNavigation = () => {
  return (
    <NavigationMenu>
      <NavigationMenuList>
        {MenuOptions.map((menu) => (
          <NavigationMenuItem key={menu.menuName}>
            <Link href={menu.menuHref} legacyBehavior passHref>
              <NavigationMenuLink className={cn(navigationMenuTriggerStyle(), 'text-xs text-slate-800')}>
                {menu.menuName}
              </NavigationMenuLink>
            </Link>
          </NavigationMenuItem>
        ))}
      </NavigationMenuList>
    </NavigationMenu>
  );
};

export default LayoutHeaderNavigation;
