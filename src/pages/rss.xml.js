import { getCollection } from "astro:content";
import rss from "@astrojs/rss";
import MarkdownIt from "markdown-it";
import sanitizeHtml from "sanitize-html";
const parser = new MarkdownIt();

export async function GET(context) {
	const blog = await getCollection("blog");
	return rss({
		title: "Den Odell’s Journal",
		description:
			"Thoughts on building fast, accessible, and resilient frontends — drawn from years of real-world experience, a couple of books, and a lot of hard lessons. Expect deep dives, practical tips, a bit of history, and the occasional opinionated take on where the web is going.",
		site: context.site,
		items: blog.map((post) => {
			const imageUrl = post.data.image
				? `https://denodell.com/images/blog/${post.data.image}`
				: null;
			const imageHtml = imageUrl
				? `<p><img src="${imageUrl}" alt="" style="max-width:100%;height:auto;" /></p>`
				: "";

			return {
				title: post.data.title,
				pubDate: post.data.date,
				description: post.data.description,
				link: `/blog/${post.id}/`,
				content: sanitizeHtml(imageHtml + parser.render(post.body), {
					allowedTags: sanitizeHtml.defaults.allowedTags.concat(["img"]),
					allowedAttributes: {
						img: ["src", "alt", "style"],
						p: ["style"],
						"*": ["class"],
					},
				}),
				customData:
					post.data.tags
						?.map((tag) => `<category>${tag}</category>`)
						.join("") ?? "",
			};
		}),
		trailingSlash: false,
	});
}
