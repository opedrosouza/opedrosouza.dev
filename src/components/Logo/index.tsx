import Link from "next/link"

const Logo: React.FC = () => {
  return (
    <>
      <Link href="/" passHref={true} className="hover:underline dark:text-blue-100">
        <h1 className="font-bold text-2xl">opedrosouza.dev</h1>
      </Link>
    </>
  )
}

export default Logo
