import Link from "next/link";

const Footer: React.FC = () => {
  return (
    <footer className="content ">
      <div className="border-t border-gray-100"></div>
      <div className="pt-10 pb-5 grid grid-cols-3">
        <div>
          <h2 className="text-2xl font-bold mb-4">Pedro Souza</h2>
          <p className="text-lg font-thin mt-3">Apenas um programador compartilhando um pouco das loucuras do dia a dia.</p>
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
              <Link href="https://github.com/opedrosouza" target="_blank" title="Github Profile">Github</Link>
            </li>
            <li>
              <Link href="https://www.youtube.com/@opedrosouzadev" target="_blank" title="Youtube Channel">Youtube</Link>
            </li>
            <li>
              <Link href="https://instagram.com/opedrosouza.dev" target="_blank" title="Instagram Profile">Instagram</Link>
            </li>
            <li>
              <Link href="https://linkedin.com/in/opedrosouza" target="_blank" title="LinkedIn Profile">LinkedIn</Link>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  )
}

export default Footer;
