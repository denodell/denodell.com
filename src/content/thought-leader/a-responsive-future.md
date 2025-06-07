---
title: A Responsive Future
date: 01-01-2013
---

Reproduced from TECH.review, 2013

> The ultimate goal of Responsive design is to adapt to any user regardless of their browser, abilities or even their computer literacy
    
These are exciting times to be a web developer. Increasingly, regular browser updates deliver improved web standards support, meaning we can build better user interfaces for our site visitors. As web technology evolves, new site build techniques, such as Responsive Design, are made possible.

This “one site fits all” technique uses [CSS Media Queries](https://web.archive.org/web/20141127164208/http://www.w3.org/TR/css3-mediaqueries/) to adapt our page design to the user’s browser – no unnecessary zooming or scrolling is required on their part. They also get a single URL for bookmarking both mobile and desktop versions of the same site.

It’s all about building a highly-accessible user interface.

We’re only just getting started using this technique, and I see a lot of potential to develop it in future to suit our needs and those of our visitors.

First of all, we must overcome our current reliance on JavaScript: we can then evolve web standards to build sites that better adapt to our users’ needs and environments. Ultimately, there’s also an opportunity to meet the needs of new users by adapting our sites to work beyond the browser.

## Overcoming our reliance on JavaScript

Currently, we’re using JavaScript to patch functionality lacking in HTML5 and CSS3. We need to use the right technology to build our sites, so that we have a solid foundation to build on in the future. Notably, because the <code>&lt;img&gt;</code> tag is not up to the task of displaying Responsive in-page images that adapt based on media queries, we require a temporary solution such as the [picturefill polyfill](https://web.archive.org/web/20141127164208/https://github.com/scottjehl/picturefill) to do this. The draft W3C [&lt;picture&gt;](https://web.archive.org/web/20141127164208/http://www.w3.org/TR/html-picture-element/) element specification proposes a proper, mark-up-based solution to address this deficiency in HTML, however at the time of writing it is not supported in any currently-shipping browser version.
                
Similarly, applying CSS styles to elements based on a browser’s scripting support currently requires a JavaScript-based solution, but the problem should really be solved within CSS. Thankfully, the emerging [CSS Level 4 Media Queries](https://web.archive.org/web/20141127164208/http://dev.w3.org/csswg/mediaqueries4/) specification proposes a new `script` media feature (enabled when the current page supports scripting) to address this problem.

This specification also promises the ability to alter applied page styles based on the size, type, and capabilities of the user’s input device. This means we could create larger target areas for users with touch-based input devices and smaller ones for those with a mouse or stylus.

Reducing our current reliance on JavaScript will allow us to build more reliable and accessible solutions for our users.

## Evolving web standards

We need to ensure that web standards evolve to adapt content as well as design. We’ll need a solution for how we should handle secondary page content – the kind of text or advertising you might find in a sidebar, but only want loaded if the user’s browser is wider than a certain breakpoint, so mobile users who wouldn’t see it don’t download it. Using Ajax relies on JavaScript to solve what I see as the lack of an appropriate solution within HTML. We might evolve the &lt;link&gt; tag to point to secondary content at an external URL associated with a media attribute: the browser would only load content if it will be displayed.

<pre><code class="language-xml"><span class="tag">&lt;<span class="title">link</span> <span class="attribute">href</span>=<span class="value">"secondary-content.html"</span>
<span class="attribute">id</span>=<span class="value">"my-secondary-content"</span>
<span class="attribute">rel</span>=<span class="value">"secondary"</span>
<span class="attribute">media</span>=<span class="value">"(min-width: 40em)"</span>&gt;</span>

…

<span class="tag">&lt;<span class="title">aside</span> <span class="attribute">content</span>=<span class="value">"my-secondary-content"</span>&gt;</span><span class="tag">&lt;/<span class="title">aside</span>&gt;</span></code></pre>
        
However we solve the problem, web standards must continue to evolve to address more than design.

The proliferation of mobile devices with sensors capable of geolocation, orientation, direction and motion detection suggest to me a potential future wave of sites whose designs adapt to users’ real-world environments. Imagine being able to increase font sizes and button target areas if the motion sensor suggests the user is browsing while walking or running – and so might be struggling to read the page. We might consider adapting our layout based on our visitor’s geographic region or on ambient light or sound levels, such as in the following possible examples of future CSS media queries:

<pre><code class="language-css"><span class="at_rule">@<span class="keyword">media</span> (min-speed: <span class="number">5</span>m/s),
@media (min-acceleration: <span class="number">5</span>m/s^<span class="number">2</span>) </span>{
…
}

<span class="at_rule">@<span class="keyword">media</span> (region: Europe),
@media (region: Asia) </span>{
…
}

<span class="at_rule">@<span class="keyword">media</span> (min-ambient-sound-level: <span class="number">3</span>dB) </span>{
…
}

<span class="at_rule">@<span class="keyword">media</span> (min-connection-speed: <span class="number">1</span>Mbps) </span>{
…
}</code></pre>

## Beyond the browser

If we want to build sites that are truly responsive to our users’ needs, we must separate our user interface from our site’s underlying services and data. This frees us up to tailor interfaces to completely different types of device. We have an exciting opportunity to use a voice server with [VoiceXML](https://web.archive.org/web/20141127164208/http://en.wikipedia.org/wiki/VoiceXML) mark-up – allowing the public to use their telephones to dial into our site and access its underlying services and data using only voice commands.

This would bring about a paradigm shift in accessibility, allowing site access without the prerequisite of an internet connection or the computer literacy skills usually required to browse the web. This concept forms the basis of the [W3C Multimodal Interaction](https://web.archive.org/web/20141127164208/http://www.w3.org/2002/mmi/) effort, a larger initiative for the web well worth reading about in detail.

The ultimate goal of Responsive design is to provide a site that adapts to any user regardless of their browser, device, abilities or even their computer literacy. We can progress this ‘one site fits all’ idea by continually evolving web standards, and addressing our users’ needs much more personally as we do so.

These are exciting times to be a web developer. I hope, like me, you’re looking forward to this vision of the future of Responsive design.