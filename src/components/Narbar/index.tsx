import Link from "next/link";

interface NavbarProps {
  links: NavbarLinks[];
}

interface NavbarLinks {
  title: string;
  href: string;
}

const Navbar: React.FC<NavbarProps> = ({ links }) => {
  return (
    <nav className="flex items-center justify-between">
      {links.map((link) => (
        <Link
          key={link.title}
          href={link.href}
          className="text-xl font-mono hover:underline delay-75 ml-4"
        >
          {link.title}
        </Link>
      ))}
    </nav>
  )
}

export default Navbar;
