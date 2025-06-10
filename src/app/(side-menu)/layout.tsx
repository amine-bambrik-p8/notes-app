import { MenuBar } from '@/components/navigation/menu-bar';
import { SideNav } from '@/components/navigation/side-nav';

export default function SidebarLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="flex h-full flex-col md:flex-row">
      {/* Sidenav */}
      <div className="hidden max-w-68 shrink grow md:block">
        <SideNav></SideNav>
      </div>
      {/* Content */}
      <div className="flex-1 overflow-y-auto max-md:rounded-t-xl">
        {children}
      </div>
      {/* Bottom Menubar */}
      <div className="md:hidden">
        <MenuBar></MenuBar>
      </div>
    </div>
  );
}
