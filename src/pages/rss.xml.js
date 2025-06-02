import fs from "node:fs";
import path from "node:path";
import rss from "@astrojs/rss";
import matter from "gray-matter";

export async function getStaticPaths() {
	const blogDir = path.join(process.cwd(), "src/content/blog");
	const files = fs.readdirSync(blogDir);

	const posts = files
		.filter((file) => file.endsWith(".md"))
		.map((file) => {
			const slug = file.replace(/\.md$/, "");
			const filePath = path.join(blogDir, file);
			const fileContent = fs.readFileSync(filePath, "utf-8");
			const { data, content } = matter(fileContent);

			return {
				title: data.title,
				pubDate: new Date(data.date),
				description: data.description,
				link: `/blog/${slug}`,
				content: content,
				canonicalUrl: data.canonical_url,
			};
		});

	return rss({
		title: "Den Odell’s Blog",
		description: "Performance, architecture, and lessons from the real world.",
		site: "https://denodell.com",
		items: posts.map((post) => ({
			title: post.title,
			pubDate: post.pubDate,
			description: post.description,
			link: post.canonicalUrl || `https://denodell.com${post.link}`,
			content: post.content,
			guid: post.canonicalUrl || `https://denodell.com${post.link}`,
		})),
		customData: `<language>en</language>`,
	});
}
