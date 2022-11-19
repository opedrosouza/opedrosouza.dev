import Head from "next/head";

interface SiteHeadProps {
  title?: string;
  pageTitle?: string;
}

const SiteHead: React.FC<SiteHeadProps> = ({ title = 'opedrosouza', pageTitle }) => {
  const mountTitle = pageTitle ? `${pageTitle} | ${title}` : title;
  return (
    <Head>
      <title>{mountTitle}</title>
    </Head>
  )
}

export default SiteHead;
