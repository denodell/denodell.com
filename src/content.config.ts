import { defineCollection, reference, z } from "astro:content";
import { glob } from "astro/loaders";
import image from "markdown-it/lib/rules_inline/image.mjs";

const blog = defineCollection({
	loader: glob({ pattern: "**/[^_]*.md", base: "./src/content/blog" }),
	schema: z.object({
		title: z.string(),
		description: z.string(),
		shortDescription: z.string().min(100).max(160, {
			message: "Short description must be between 100 and 160 characters long.",
		}),
		date: z.date(),
		author: z.string(),
		readingTime: z.string(),
		image: z.string(),
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
