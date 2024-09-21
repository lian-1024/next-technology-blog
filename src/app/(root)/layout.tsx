import LayoutHeader from '@/components/layout/layout-header';

const Layout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <>
      <LayoutHeader />
      {children}
    </>
  );
};

export default Layout;
