import Link from "next/link"

const Logo: React.FC = () => {
  return (
    <>
      <Link href="/" passHref={true}>
        <h1 className="font-bold text-2xl font-mono">opedrosouza<span className="text-red-500">.dev</span></h1>
      </Link>
    </>
  )
}

export default Logo
