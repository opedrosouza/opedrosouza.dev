import { unified } from 'unified'
import remarkParse from 'remark-parse'
import remarkRehype from 'remark-rehype'
import rehypeFormat from 'rehype-format'
import rehypeStringify from 'rehype-stringify'
import remarkPrism from 'remark-prism'
import rehypeRaw from 'rehype-raw'

export async function parseMarkdown(content: string) {
    const processedContent = await unified()
        .use(remarkParse)
        .use(remarkPrism, {
          plugins: ['line-numbers'],
        })
        .use(remarkRehype, { allowDangerousHtml: true })
        .use(rehypeRaw)
        .use(rehypeFormat)
        .use(rehypeStringify)
        .process(content)

    return processedContent.toString()
}
