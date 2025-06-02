---
title: "Want to Be a Better Frontend Engineer? Try a Week On-Call"
description: "You’re going to hate me for saying this, but I actually like being on-call. Honestly! It’s taught me more about frontend quality than any bug tracker ever did."
date: 2025-06-04 13:00:00 UTC
author: "Den Odell"
readingTime: 3 min
tags: ["frontend", "engineering", "on-call", "quality", "career"]
slug: try-a-week-on-call
---

**You’re going to hate me for saying this, but I actually like being on-call.**  
I know. _I know._ But hear me out.  
Obviously not the part where PagerDuty yanks you out of a dream with your heart pounding.  
But on-call taught me more about frontend quality than any bug tracker ever did.

***

It was 2:43 AM.  
A customer couldn’t click through to checkout.  
Revenue was on the line.  
And the alert came to me.

The root cause wasn’t in the frontend. A backend job had failed quietly, returning malformed data. But to the user, the result was simple: the button didn’t work. And when you’re on-call for the frontend, you’re the one who has to respond, no matter where the problem starts.

## On-Call Sharpens What You Already Care About

I’ve always cared about quality.  
I’ve written tests, chased down edge cases, and treated polish as part of the craft.  
But on-call changes how you think about all of it.

It’s not just about whether your code works.  
It’s about how it fails.  
It’s about how quickly it can be understood under pressure.  
It’s about whether your interface can recover from issues far outside your control.

## The Frontend Catches Everything

When something fails in the system, the user usually sees it in the frontend.  
If a service goes down, your component gets no data.  
If a token expires, the user gets stuck.  
If a third-party script blocks rendering, your buttons stop working.  
If checkout breaks, your app takes the blame.

You may not control the systems upstream, but on-call teaches you that you still own the experience.

## You Start Building for Real-World Failure

On-call shifts your habits.

You write clearer loading states.  
You handle empty, broken, or missing data.  
You stop assuming things will behave.  
You add useful logs. A _lot_ of them.  
You recover from failure instead of hiding from it.

You stop writing code that works in theory.  
You start writing code that holds up at 2 AM.

You begin asking better questions:
- What happens if this API returns nothing?
- What if the feature flag system is down?
- Will this UI leave the user stranded if it doesn’t render properly?

## You Build Like You’re the One Who’ll Be Paged

Because you might be.

On-call brings accountability.  
You stop cutting corners you know might break later.  
You stop leaving vague TODOs for someone else.  
You stop letting “it works on my machine” be the final word.

A single week of on-call teaches you what months of bug triage can’t.  
It shows you what real-world pressure feels like, and how it exposes every weak spot in your stack.

And once you’ve lived through that, you start building differently.  
You start building better.