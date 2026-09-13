import Link from "next/link";
import { POSTS, getPost, renderBlocks, renderInline } from "../../lib/posts";

export async function generateStaticParams() {
  return POSTS.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) return { title: "Article not found | Sweepstakes Central" };
  return {
    title: `${post.title} | Sweepstakes Central`,
    description: post.description,
  };
}

export default async function ArticlePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = getPost(slug);

  if (!post) {
    return (
      <main style={{ maxWidth: "720px", margin: "0 auto", padding: "48px 20px" }}>
        <h1>Article not found</h1>
        <Link href="/blog" style={{ color: "#2563eb" }}>
          &larr; Back to guides
        </Link>
      </main>
    );
  }

  const blocks = renderBlocks(post.content);

  return (
    <main
      style={{
        maxWidth: "720px",
        margin: "0 auto",
        padding: "48px 20px 64px",
        fontFamily:
          "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif",
        color: "#1e293b",
      }}
    >
      <Link href="/blog" style={{ color: "#2563eb", fontSize: "14px" }}>
        &larr; All guides
      </Link>
      <h1 style={{ fontSize: "32px", margin: "16px 0 8px", lineHeight: 1.25 }}>
        {post.title}
      </h1>
      <p style={{ color: "#64748b", marginBottom: "32px", fontSize: "14px" }}>
        {post.date} &middot; {post.readTime}
      </p>

      {blocks.map((block, i) => {
        if (block.type === "h2") {
          return (
            <h2 key={i} style={{ fontSize: "22px", marginTop: "32px", marginBottom: "8px" }}>
              {block.text}
            </h2>
          );
        }
        if (block.type === "ul") {
          return (
            <ul key={i} style={{ lineHeight: 1.75, paddingLeft: "20px", margin: "8px 0" }}>
              {block.items!.map((item, j) => (
                <li key={j} style={{ marginBottom: "6px" }}>
                  {renderInline(item).map((part, k) =>
                    part.bold ? (
                      <strong key={k}>{part.text}</strong>
                    ) : (
                      <span key={k}>{part.text}</span>
                    )
                  )}
                </li>
              ))}
            </ul>
          );
        }
        return (
          <p key={i} style={{ lineHeight: 1.75, margin: "12px 0" }}>
            {renderInline(block.text!).map((part, k) =>
              part.bold ? (
                <strong key={k}>{part.text}</strong>
              ) : (
                <span key={k}>{part.text}</span>
              )
            )}
          </p>
        );
      })}

      <hr style={{ border: "none", borderTop: "1px solid #e2e8f0", margin: "40px 0 24px" }} />
      <p style={{ color: "#64748b", fontSize: "14px", lineHeight: 1.6 }}>
        Looking for something to enter?{" "}
        <Link href="/" style={{ color: "#2563eb" }}>
          Browse this week&apos;s verified sweepstakes
        </Link>
        .
      </p>
    </main>
  );
}
