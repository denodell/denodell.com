import { defineCollection, reference, z } from "astro:content";
import { glob } from "astro/loaders";

const blog = defineCollection({
	loader: glob({ pattern: "**/[^_]*.md", base: "./src/content/blog" }),
	schema: z.object({
		title: z.string(),
		description: z.string(),
		date: z.date(),
		author: z.string(),
		readingTime: z.string(),
		tags: z.array(z.string()),
		slug: z.string(),
		relatedPosts: z.array(reference("blog")).optional(),
	}),
});

export const collections = { blog };
