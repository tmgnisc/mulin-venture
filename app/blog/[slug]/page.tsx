import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { getBlogPost, getBlogSlugs } from '@/lib/blog-data'
import { BlogPostContent } from './blog-post-content'

export const dynamic = 'force-static'

export async function generateStaticParams() {
  const slugs = getBlogSlugs()
  return slugs.map((slug) => ({ slug }))
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params
  const post = getBlogPost(slug)
  if (!post) return {}
  return {
    title: { absolute: `${post.title} | Mulin Venture Nepal` },
    description: `${post.excerpt} — Mulin Venture Nepal`,
    alternates: { canonical: `/blog/${slug}` },
    openGraph: {
      title: post.title,
      description: `${post.excerpt} — Mulin Venture Nepal`,
      url: `https://www.mulinventure.com/blog/${slug}`,
      siteName: 'Mulin Venture',
      type: 'article',
      locale: 'en_US',
      images: [{ url: post.image, width: 1200, height: 630, alt: post.alt }],
      publishedTime: new Date(post.date).toISOString(),
      authors: [post.author],
    },
    twitter: {
      card: 'summary_large_image',
      title: post.title,
      description: `${post.excerpt} — Mulin Venture Nepal`,
      images: [post.image],
    },
  }
}

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const post = getBlogPost(slug)
  if (!post) notFound()
  return <BlogPostContent post={post} />
}
