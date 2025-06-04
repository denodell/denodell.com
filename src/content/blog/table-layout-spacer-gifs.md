---
title: "How We Laid Out the Web Before CSS: Tables and Spacer GIFs"
description: ""
date: 2025-06-11T13:00:00Z
author: Den Odell
readingTime: 3 min
image: "./images/table-layout-spacer-gifs.png"
imageAlt: ""
tags: ["frontend"]
slug: table-layout-spacer-gifs
draft: true
---

Before flex, before grid, even before float, there were tables. Not the semantic kind used for displaying tabular data — I’m talking about layout tables. And if you were building websites in the late 90s or early 2000s, you probably spent a good chunk of your time nesting them, stretching them, and stuffing them with invisible images just to get elements to line up.

This is a look back at how we used to lay out the web when CSS wasn’t quite ready — and what we can still learn from that era.

HTML wasn't made for layout
The original purpose of HTML was to mark up academic documents. Headings, paragraphs, links, lists. That was about it. There was no real notion of "layout" in the design sense. Early browsers had no support for anything like positioning or styling beyond some basic font tweaks and alignment.

Developers still wanted structure though. Clients wanted multi-column layouts, logos in the corner, and pixel-perfect buttons that looked the same in Netscape and Internet Explorer. So we did what developers always do: we got creative with what we had.

Enter the layout table
HTML tables gave us something no other element did at the time — control. You could create rows and columns. You could define cell widths and heights. You could nest tables inside other tables to carve up the page into zones. That control was intoxicating.

It wasn’t elegant. It definitely wasn’t semantic. But it worked.

<table width="100%" cellpadding="0" cellspacing="0">
  <tr>
    <td width="200">
      <img src="spacer.gif" width="200" height="1" alt="">
    </td>
    <td>
      Main content goes here
    </td>
  </tr>
</table>
Spacer GIFs like the one above were a standard trick. You'd create a 1×1 pixel transparent image, then stretch it using width and height attributes to force the browser to reserve space. There were whole toolkits and scripts that generated spacer-based layouts automatically.

If you wanted padding, you'd nest another table. If you wanted alignment, you'd add empty cells or abuse the align attribute. And when that wasn't enough, you'd resort to comment-tag hacks and conditional rendering quirks just to get things to behave consistently across browsers.

Why we did it anyway
It’s easy to look back now and laugh at this approach, but at the time, layout tables gave us something CSS didn’t: predictability. CSS support was spotty. Browsers implemented things inconsistently. You could spend hours writing CSS only to have it look completely broken in IE5.5. Tables weren’t perfect, but they behaved the same almost everywhere.

WYSIWYG tools like Dreamweaver leaned hard into this model. You’d drag-and-drop content into table cells and the tool would spit out layers of nested HTML you were never really meant to touch.

Was it bloated? Yes. Fragile? Absolutely. But it shipped.

The long road to modern CSS
CSS1 was introduced in 1996. CSS2 followed in 1998 and gave us position: absolute, floats, and z-index. But it took years for browsers to catch up and for developers to trust it.

The table era didn’t really end until the mid-2000s when modern browsers matured and CSS layout finally became viable. Even then, it took a while before designers and developers truly embraced separation of concerns: structure in HTML, style in CSS, behavior in JavaScript.

Today: grid systems, not grid hacks
Today we have display: grid and display: flex. We can align items without nesting. We can reorder content for accessibility. We can build layouts that respond fluidly to screen size without a single spacer GIF in sight.

What used to take 100 lines of table markup now takes 10 lines of clean, declarative CSS. It’s not just better for developers — it’s better for users too. Especially those using assistive technology, which struggled to make sense of the old markup soup.

What this history still teaches us
A few lessons from the table layout era still hold true:

Cross-browser consistency matters. Even now, not everything renders the same across platforms. Test broadly.
You’ll always be working with constraints. Back then, it was no CSS. Today, it might be legacy code, frameworks, or team skills. Creativity under constraint is part of the job.
Understand the tools you’re misusing. Tables weren’t designed for layout, but we understood them deeply. That same mindset helps today when using any tech outside its intended sweet spot.
In closing
Table-based layouts were a workaround. But they also reflect something constant about web development: we’re always adapting. Always hacking. Always building better experiences with the tools we have — until the next set of tools comes along.

So next time you float a div or write a neat little grid template, give a small nod to the table layouts that walked so Flexbox could run.

