import SiteHead from "../SiteHead";
import Navbar from "../Narbar";
import Logo from "../Logo";

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const links = [
    {
      title: "Home",
      href: "/",
    },
    {
      title: "Posts",
      href: "/posts",
    }
  ]

  return (
    <>
      <SiteHead />
      <header className="content flex justify-between items-center py-4">
        <Logo />
        <Navbar links={links} />
      </header>
      <main className="">
        {children}
      </main>
      <footer className="text-center fixed bottom-0 inset-x-0">
        <h4>Feito com amor</h4>
      </footer>
    </>
  );
};

export default Layout;
