---
title: Responsive Design Principles
date: 01-01-2013
---

Reproduced from TECH.review, 2013

> Responsive design is made possible by browser support for CSS3 Media Queries

A “Responsive” web page or site is one that adapts its visual layout to suit the characteristics of the device used to view it, most often by the screen’s aspect-ratio and/or resolution. The same page, with the same URL, viewed on both a mobile or desktop device would appear to the end user to have been designed to display best on that device, with font sizes and imagery scaled appropriately so the user doesn’t need to zoom or scroll around the page unnecessarily.

In this article, I will explain the three principles of Responsive design - media queries, breakpoints, and mobile-first development.

This type of Responsive layout is made possible by the support of [CSS3 Media Queries](https://web.archive.org/web/20160508064232/https://developer.mozilla.org/en-US/docs/Web/Guide/CSS/Media_queries) technology in web browsers – currently supported in [over 85% of browsers in use around the world](ttps://web.archive.org/web/20160508064232/http://caniuse.com/#feat=css-mediaqueries), the only notable exception being Microsoft’s Internet Explorer version 8 and below. Device characteristic detection, which feeds these media queries creating the desired layout, is handled within the browser itself and relies on no server-side component. Layouts typically scale to the full width of the browser’s viewport, with _breakpoints_ (the widths at which the layout needs to change) defined at specific screen widths so the page layout is grouped into small, medium, and large variants, typically corresponding to mobile-, tablet- and desktop-sized devices.

## I’ve heard of ‘Adaptive’ design – what’s that?

_Adaptive design_ is the process of using server-side technology to render alternative content and styling to a web page based on device type. A relevant stylesheet and/or markup can be sent to the browsing device dependent on its device characteristics, established by comparing its user agent string against a database (most commonly, [WURFL](https://web.archive.org/web/20160508064232/http://en.wikipedia.org/wiki/WURFL) of known features for that device.

The most important difference between Adaptive and Responsive design is that characteristic detection is handled on the server-side in the former technique, and within the browser in the latter.

## Why should I adopt Responsive design?

There are a number of benefits to adopting the Responsive design practice, which benefit both end users and developers.

End-users prefer Responsive layouts because:

- Websites load the most appropriate layout for their device, regardless of screen size or resolution
- No need to zoom or scroll horizontally around a page to locate hyperlinks and content when viewing a Responsive site on a mobile device
- When reorienting the user’s mobile device (e.g. portrait to landscape), the page will immediately display appropriately according to the new device orientation<
- When resizing the user’s browser windows on their desktop screen, the layout of the site dynamically adapts to the new window size, giving them access to the site without unnecessary horizontal scrolling, allowing them to stack windows side-by-side in their operating system as they prefer
- Uses the same URL for all devices, meaning synced bookmarks produce the same content regardless of browsing device – no need for complex redirects between <code>m.</code> sites and their desktop equivalent

Web developers prefer constructing Responsive layouts because:

- Code and content maintenance is simpler, as there is only a single set of code to manage.<
Less complex because no server-side solution is required to perform redirection based on a device’s user
 agent string – Responsive websites can even be coded in plain HTML and CSS without requiring any custom server-side code.
 - It adheres to standardised technologies, defined by the W3C, supported in the vast majority of web browsers
 - Single URL per page, which avoids the possibility of a search engine indexing two versions of the same site by their differing URLs
 - Layout is built once and adapts to any screen size, meaning that when new devices are launched with untested screen dimensions, such as phablets, they will just work - no need to add or update complex rules in a server-side component with the release of each new device (as with WURFL)
 
## It’s time to adopt Responsive design… mobile-first

I recommend all web pages and sites to be designed and built with Responsive layouts. This should be achieved in the majority of cases without relying on the server to generate alternative markup based on device type. There is still a place for server-side code in certain circumstances, for example to generate appropriately sized images for display based on the browser or device screen size. By utilising client-side code to adapt the site’s layout based on characteristics of the browser, any changes made by the user to the browser dimensions or other characteristics are reflected immediately in the site’s layout – something not possible with the server-side _adaptive_ technique.

Developers should work _mobile-first_, building the styles for the smallest screen size breakpoint first  (usually for mobile devices, hence the name) and adding the extra styles for other breakpoints using CSS3 Media Queries. This focus on mobile reflects the huge growth in this area and the impending time at which more users will browse on mobile than on desktop. This approach has the added side-effect of giving mobile users with older devices, e.g. Blackberry, an appropriate mobile view of the page, despite them not supporting CSS Media Queries.

## How do I do it? The Technical Notes for your Development Team

CSS3 Media Queries allow us to write code to create Responsive websites, whose page design adjusts based on characteristics of the device used to view it. Using this technique, we’re able to adjust any CSS property based on screen width, height, pixel density, etc. While it’s possible to provide almost limitless differences in design based on every possible characteristic, in reality we tend to adjust the page based around three
different screen widths, and also pixel density – with the latter only really relevant for serving different background image files.
 
These three screen width ‘breakpoints’ split the design into ‘narrow’, ‘wide’, and ‘full’ layouts. While it might be tempting to describe these in terms of ‘smartphone’, ‘tablet’, and ‘desktop’, with a plethora of new devices released every year, we prefer to stick to non-device-specific terms. Between each breakpoint, the design should scale to fill the width of the browser, so that no matter what screen sized device is being used to browse the page, the page always looks as if it has been designed appropriately for that device.

The default CSS styles written for a site should be those for the ‘narrow’ size (i.e. ‘mobile-first’) and these should be written at the top of the CSS file, with any styles to be applied to the ‘wide’ or ‘full’ layouts to be added via CSS3 Media Queries. This means that any device incapable of comprehending Media Queries – most likely older-feature phones and smartphones – will be provided an appropriate experience.

The elephant in the room is OldIE (i.e. IE8 and below), which do not support Media Queries; we want to give these users the ‘full’ experience. In this case there are a couple of solutions, the best of which is [the approach detailed here by Jake Archibald](https://web.archive.org/web/20160508064232/http://jakearchibald.github.io/sass-ie/), providing you are using Sass to author your stylesheet files (which is preferred). Alternatively, a single additional CSS file could be produced for IE containing the styles from the ‘full’ Media Query, ideally produced dynamically based on code in the existing CSS file. Other solutions include [Respond.JS](https://web.archive.org/web/20160508064232/https://github.com/scottjehl/Respond), though it only patches support for a couple of Media Query types (thankfully, the most common ones) and its performance is not ideal.

Here’s an example CSS file structure showing some basic styles applied to an element using the mobile-first approach:

<pre><code class="language-css"><span class="comment">/* 'narrow' and default styles go first */</span>
<span class="tag">body</span> <span class="rules">{
    <span class="rule"><span class="attribute">width</span>:<span class="value"> <span class="number">100</span>%</span></span>;
<span class="rule">}</span></span>

<span class="class">.canvas</span> <span class="rules">{
    <span class="rule"><span class="attribute">position</span>:<span class="value"> absolute</span></span>;
    <span class="rule"><span class="attribute">top</span>:<span class="value"> <span class="number">0</span></span></span>;
    <span class="rule"><span class="attribute">left</span>:<span class="value"> <span class="number">0</span></span></span>;
    <span class="rule"><span class="attribute">border</span>:<span class="value"> <span class="number">2</span>px solid <span class="hexcolor">#000</span></span></span>;
    <span class="rule"><span class="attribute">width</span>:<span class="value"> <span class="number">100</span>%</span></span>;
<span class="rule">}</span></span>

<span class="comment">/* Style rules to apply to screen sizes wider than 480px, overriding those set previously */</span>
<span class="at_rule">@<span class="keyword">media</span> only screen and (min-width: <span class="number">481</span>px) </span>{
    <span class="class">.canvas</span> <span class="rules">{
        <span class="rule"><span class="attribute">width</span>:<span class="value"> <span class="number">480</span>px</span></span>;
    <span class="rule">}</span></span>
}

<span class="comment">/* Style rules to apply to screen sizes wider than 468px, overriding those set previously */</span>
<span class="at_rule">@<span class="keyword">media</span> only screen and (min-width: <span class="number">769</span>px) </span>{
    <span class="class">.canvas</span> <span class="rules">{
        <span class="rule"><span class="attribute">width</span>:<span class="value"> <span class="number">768</span>px</span></span>;
    <span class="rule">}</span></span>
}</code></pre>

Now I’ve covered the three principles behind the Responsive design technique – media queries, breakpoints, and mobile-first development – it’s time to dip your toes further into the waters of Responsive design. The following articles should help you do this:

- [Responsive Web Design</a> by Ethan Marcotte](https://web.archive.org/web/20160508064232/http://alistapart.com/article/responsive-web-design)
- [Responsive Web Design: What It Is And How To Use It](https://web.archive.org/web/20160508064232/http://coding.smashingmagazine.com/2011/01/12/guidelines-for-responsive-web-design/) by Kayla Knight
- [Build A Basic Responsive Site With CSS](https://web.archive.org/web/20160508064232/http://www.creativebloq.com/responsive-web-design/build-basic-responsive-site-css-1132756) by Jason Michael
- [Creating A Mobile-First Responsive Website](https://web.archive.org/web/20160508064232/http://www.html5rocks.com/en/mobile/responsivedesign/) by Brad Frost