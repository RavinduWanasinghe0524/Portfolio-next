# Portfolio design

## Direction

An editorial portfolio for internship teams and collaborators. It positions Ravindu as a full stack developer and prompt engineer with a growing focus on AI and machine learning. It should feel precise, capable, calm, and human. The visitor path is introduction → selected work → expertise → recognition → background → contact.

The redesign takes the clarity of type-led portfolios and the directness of case-study showcases, rather than using decorative effects. References: [Tarik Karahodžić's portfolio case study](https://www.tarikkarahodzic.dev/projects/personal-site), [Figma's portfolio examples](https://www.figma.com/resource-library/portfolio-website-examples/), and [Creative Bloq's portfolio review](https://www.creativebloq.com/portfolios/examples-712368). These informed the hierarchy and content emphasis; the layout and styling are original to this site.

## System

- **Type:** IBM Plex Sans for display and body; IBM Plex Mono for section labels and metadata. Fonts are bundled locally.
- **Color:** charcoal background (`#111315`), off-white text (`#e9e8e3`), warm copper accent (`#d6ae8e`), and a slightly lighter surface for recognition.
- **Layout:** 1180px maximum content width, left-aligned grid, large image-led project rows, and generous section spacing.
- **Signature:** a single warm recognition panel carries the award and credentials; the closing contact section uses the accent as a full surface.
- **Interaction:** restrained link and image hover states; visible keyboard focus; reduced-motion support.

## Content and maintenance

The three selected projects, AI practice, and tech stack are drawn from `src/lib/data.ts`. Credentials and award details come from the owner's CV PDFs in `public/`. The portrait is `public/2.jpg`. The rest of the project archive is linked through GitHub.

## Audit

The page uses real project imagery where available, avoids decorative cards and animation, and keeps content accessible in a linear mobile layout. Desktop and mobile renders, image loading, horizontal overflow, lint, and production build should be checked after visual changes.
