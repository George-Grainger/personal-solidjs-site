# georgegrainger.com (old SolidJS version)
This is the old SolidJS implementation for my portfolio site georgegrainger.com. It has been replaced by a SvelteKit implementation found at [https://github.com/George-Grainger/georgegrainger.com](https://github.com/George-Grainger/georgegrainger.com).

While this version is no longer maintained, a live version of the site can still be found at [https://personal-solidjs-site.vercel.app/](https://personal-solidjs-site.vercel.app/).

## Features
Both this version and the new SvelteKit implementation have a similar set of core features:
* Language support
* Accessibility through reduced animation
* Dark mode, including transitions between the dark and light modes.
* Page transitions
* Integration with the Spotify API

## Repository Structure:
[/lang](/lang) contains the translations used through the site. These currently support English and French, though could be easily extended to include more.

[/public](/public) contains all the static assets for the website. This is mainly used for SEO images and excludes many of the site's SVGs, which are stored as javascript files to simplify their animation. Furthermore, it's notable that the CV is out of date - for a recent copy see the [SvelteKit implementation](https://github.com/George-Grainger/georgegrainger.com).

[/scripts](/scripts) contains a single script that is used to generate a sitemap when building the website in production.

[src](/src) the majority of the codebase, split into multiple subsections:
1. [/components](/src/components) contains all of the reusable SolidJS components for the site, including their style information. It also includes the animatable SVGs for the site.
2. [/hooks](/src/hooks) contains all of the reusable hooks for simplifying actions in the codebase.
3. [/page-styles](/src/page-styles) contains the page-level style information (not the components).
4. [/pages](/src/pages) contains the navigable pages on the site.

