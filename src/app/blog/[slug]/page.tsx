import { siteConfig } from '@/config/site';
import { notFound } from 'next/navigation';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import Link from 'next/link';

interface BlogPostPageProps {
  params: {
    slug: string;
  };
}

export async function generateStaticParams() {
  const { blogs } = siteConfig;
  return blogs.map((blog) => ({
    slug: blog.slug,
  }));
}

export default function BlogPost({ params }: BlogPostPageProps) {
  const { blogs } = siteConfig;
  const blog = blogs.find((b) => b.slug === params.slug);

  if (!blog) {
    notFound();
  }

  const formattedDate = new Date(blog.date).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });

  return (
    <div className="bg-[#F5F5F0] min-h-screen pt-16">
      <article className="max-w-4xl mx-auto px-6 lg:px-12 py-16">
        <Link
          href="/blog"
          className="inline-flex items-center text-black hover:opacity-70 mb-8 transition-opacity text-sm"
        >
          <svg
            className="mr-2 w-4 h-4"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={1.5}
              d="M15 19l-7-7 7-7"
            />
          </svg>
          Back to Blog
        </Link>

        <header className="mb-8">
          <h1 className="text-4xl md:text-5xl font-normal text-black mb-4 tracking-[-0.02em]">{blog.title}</h1>
          <div className="text-black text-base opacity-70">{formattedDate}</div>
        </header>

        <div className="prose prose-lg max-w-none prose-headings:text-black prose-p:text-black prose-p:opacity-80 prose-a:text-[#0066FF] prose-a:no-underline hover:prose-a:underline prose-strong:text-black prose-code:text-[#0066FF] prose-code:bg-[#F5F5F0] prose-code:px-1 prose-code:py-0.5 prose-code:rounded prose-pre:bg-black prose-pre:text-white mb-12">
          <ReactMarkdown remarkPlugins={[remarkGfm]}>{blog.content}</ReactMarkdown>
        </div>

        {/* FAQ Section */}
        {siteConfig.aboutUs?.faq && (
          <div className="mt-16 pt-16 border-t border-black border-opacity-10">
            <div className="bg-white rounded-lg border border-black border-opacity-10 p-8 lg:p-12">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-normal text-black mb-12 tracking-[-0.02em]">{siteConfig.aboutUs.faq.title}</h2>
              <div className="space-y-8 lg:space-y-10">
                {siteConfig.aboutUs.faq.items.map((item, index) => (
                  <div key={index} className="pb-8 lg:pb-10 border-b border-black border-opacity-5 last:border-b-0 last:pb-0">
                    <div className="flex items-start gap-4">
                      <div className="flex-shrink-0 mt-1">
                        <div className="w-6 h-6 rounded-full bg-[#0066FF] flex items-center justify-center">
                          <span className="text-white text-xs font-medium">{index + 1}</span>
                        </div>
                      </div>
                      <div className="flex-grow">
                        <h3 className="text-xl md:text-2xl font-normal text-black mb-4 tracking-[-0.01em]">{item.question}</h3>
                        <p className="text-base md:text-lg text-black opacity-70 leading-relaxed">{item.answer}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}
      </article>
    </div>
  );
}

