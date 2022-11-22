import Link from "next/link";

const Footer: React.FC = () => {
  return (
    <footer className="content ">
      <div className="border-t border-gray-100"></div>
      <div className="pt-10 pb-5 grid grid-cols-3">
        <div>
          <h2 className="text-2xl font-bold mb-4">Pedro Souza</h2>
          <p className="text-lg font-thin mt-3">Ajudo desenvolvedores a aprenderem a programar e solucionar problemas de forma divertida</p>
        </div>
        <div>
          <h2 className="text-2xl font-bold mb-4">Links</h2>
          <ul>
            <li>
              <Link href="/">Home</Link>
            </li>
            <li>
              <Link href="/posts">Posts</Link>
            </li>
            <li>
              <Link href="/about">Sobre</Link>
            </li>
          </ul>
        </div>
        <div>
          <h2 className="text-2xl font-bold mb-4">Veja Também</h2>
          <ul>
            <li>
              <Link href="/">Github</Link>
            </li>
            <li>
              <Link href="/posts">Youtube</Link>
            </li>
            <li>
              <Link href="/about">Instagram</Link>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  )
}

export default Footer;
