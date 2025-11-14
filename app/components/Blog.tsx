interface BlogPost {
  title: string;
  date: string;
  excerpt: string;
  slug: string;
}

const BLOG_POSTS: BlogPost[] = [
  {
    title: "Blog Post 1",
    date: "2024-01-15",
    excerpt:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    slug: "blog-post-1",
  },
  {
    title: "Blog Post 2",
    date: "2023-12-10",
    excerpt:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.",
    slug: "blog-post-2",
  },
  {
    title: "Blog Post 3",
    date: "2023-11-05",
    excerpt:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis aute irure dolor in reprehenderit in voluptate velit esse.",
    slug: "blog-post-3",
  },
];

function formatDate(dateString: string): string {
  const date = new Date(dateString);
  return date.toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

export function Blog() {
  return (
    <section className="space-y-6">
      <h2 className="text-2xl font-semibold">Blog</h2>
      <div className="space-y-6">
        {BLOG_POSTS.map((post) => (
          <article key={post.slug} className="space-y-2">
            <div className="flex items-baseline justify-between gap-4 flex-wrap">
              <h3 className="text-lg font-medium">{post.title}</h3>
              <time className="text-sm text-muted">{formatDate(post.date)}</time>
            </div>
            <p className="text-body text-muted">{post.excerpt}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
