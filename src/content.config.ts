import { defineCollection, reference, z } from "astro:content";
import { glob } from "astro/loaders";
import image from "markdown-it/lib/rules_inline/image.mjs";

const blog = defineCollection({
	loader: glob({ pattern: "**/[^_]*.md", base: "./src/content/blog" }),
	schema: ({ image }) =>
		z.object({
			title: z.string(),
			description: z.string(),
			date: z.date(),
			author: z.string(),
			readingTime: z.string(),
			image: image(),
			imageAlt: z.string(),
			tags: z
				.array(
					z.string().regex(/^[a-z]+$/, {
						message:
							"Tags must contain only lowercase a–z letters with no spaces or symbols.",
					}),
				)
				.min(1)
				.max(4, { message: "You can use up to 4 tags only." }),
			slug: z.string(),
			devToSlug: z.string().optional(),
			relatedPosts: z.array(reference("blog")).optional(),
		}),
});

export const collections = { blog };
