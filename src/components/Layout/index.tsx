import Navbar from "../Narbar";
import Logo from "../Logo";
import Footer from "../Footer";

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
      <header className="content flex justify-between items-center py-4">
        <Logo />
        <Navbar links={links} />
      </header>
      <main className="">
        {children}
      </main>
      <Footer />
    </>
  );
};

export default Layout;
