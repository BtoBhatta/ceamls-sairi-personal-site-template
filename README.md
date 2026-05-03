# CEAMLS SAIRI Personal Site Template

Welcome! This repo is a starter template for your CEAMLS SAIRI Summer Research personal website. You'll be able to:

- Pick a visual theme with one config change — **four themes** ship in the box
- Preview every other theme on your deployed site without changing your live one
- Edit your **About Me**, **About My Mentors**, and **About My Project** pages
- Add daily blog posts as Markdown files
- Deploy automatically to GitHub Pages on every push

---

## Quick Start (5 minutes)

1. Click the green **"Use this template"** button at the top of this repo on GitHub. Name your new repo `<your-username>.github.io` (lowercase, must end in `.github.io`).
2. In your new repo's **Settings → Pages**, set **Source: GitHub Actions**. The workflow at [.github/workflows/ci.yaml](.github/workflows/ci.yaml) handles the build and deploy.
3. Edit [_config.yml](_config.yml) — set `title:`, `author:`, `url:` to your details, and pick your `theme_name:`.
4. Edit [pages/about-me.md](pages/about-me.md), [pages/about-my-mentor.md](pages/about-my-mentor.md), and [pages/about-my-project.md](pages/about-my-project.md) with your information.
5. Drop your photos into [assets/images/](assets/images/) and update the image paths in the YAML to match.
6. Commit. Wait ~60 seconds for the Action to finish. Visit `https://<your-username>.github.io`.

The template ships with placeholder content for a fictional student named "Jordan Rivera" so you can see what a complete site looks like before you start editing.

---

## Pick Your Theme

This template ships with **four fully-built themes**. Each has its own layout chrome, typography, color palette, and JS — they're not just CSS reskins.

| Theme     | Look & Feel                                                                                          |
| --------- | ---------------------------------------------------------------------------------------------------- |
| `minimal` | Soft blue gradient, sidebar nav, Inter type. Clean and approachable. **Default.**                    |
| `premium` | Warm cream + serif headings (Instrument Serif), dot-pattern hero, magazine-style layout.             |
| `fresh`   | Dark editorial, sticky-sidebar layout with drop-cap bios and color-coded post sections.              |
| `signal`  | Dark navy + orange + Syne display type. Closest to the SAIRI brand. Editorial dark theme.            |

To set your theme:

1. Open [_config.yml](_config.yml) (the GitHub web editor works — pencil icon, no terminal needed).
2. Find the line `theme_name: minimal`.
3. Change `minimal` to `premium`, `fresh`, or `signal`. Commit.
4. Wait ~60 seconds for the Action to rebuild. Refresh your site.

You can switch as many times as you want — your content carries over because every theme reads the same YAML fields.

### Preview the other themes without changing your live site

Every push builds **all four themes** in parallel and deploys them as hidden URLs alongside your real site:

- `https://<your-username>.github.io/` — your live site (whatever you set `theme_name:` to)
- `https://<your-username>.github.io/_preview/minimal/` — same content, rendered with minimal
- `https://<your-username>.github.io/_preview/premium/`
- `https://<your-username>.github.io/_preview/fresh/`
- `https://<your-username>.github.io/_preview/signal/`

Sub-pages mirror cleanly: `/about-me.html` ↔ `/_preview/premium/about-me.html`, `/day1.html` ↔ `/_preview/fresh/day1.html`, etc. The previews are marked `noindex` so search engines won't pick them up as duplicates.

A small "Preview in another theme" switcher appears at the bottom of pages **only during local development** and on preview pages — never on your deployed live site, so visitors see a clean finished product.

---

## Project Structure

```
├── _config.yml                  ← Edit your name, URL, theme, year
├── _config_preview_*.yml        ← Per-theme preview overrides (don't edit)
├── _layouts/                    ← Canonical dispatchers (don't edit)
├── _includes/themes/<theme>/    ← Per-theme HTML fragments
├── _sass/themes/<theme>/        ← Per-theme styles
├── assets/
│   ├── css/style.scss           ← Theme dispatcher (don't edit)
│   ├── js/themes/<theme>.js     ← Per-theme JS
│   └── images/                  ← Your photos and SVG placeholders
├── pages/                       ← About Me / Mentor / Project / Blog index pages
├── _posts/                      ← Your daily blog posts
├── 404.html                     ← Themed 404 page (no edits needed)
├── index.md                     ← Home page (your name + tagline + Currently block)
└── bin/preview-all              ← Local script: build & serve all 5 versions
```

You'll spend most of your time in `_config.yml`, `pages/`, `_posts/`, `index.md`, and `assets/images/`. Theme code lives under `_includes/themes/` and `_sass/themes/` — only touch those if you want to deeply customize a theme.

---

## Editing Your Pages

All three `pages/about-*.md` files use **YAML front matter** for content. You don't write any HTML — just edit the values.

### `pages/about-me.md`

```yaml
---
layout: about
title: About Me
permalink: /about-me.html

about:
  name: Your Name
  role: Junior, Computer Science
  image: /assets/images/profile.svg     # replace with your photo
  linkedin: https://linkedin.com/in/your-handle
  bio: |
    A short paragraph about you.

    Multi-paragraph bios work — keep the indentation.

  hobbies:
    - icon: 🎺
      title: Trumpet
      description: Short description.

  gallery:
    - image: /assets/images/gallery-1.svg
      caption: A caption for this photo.
---
```

### `pages/about-my-mentor.md`

Set both `graduate_mentor:` and `faculty_mentor:` blocks with their `name`, `title`, `image`, `website`, and `bio` fields.

### `pages/about-my-project.md`

Fill in `subtitle`, `project_title`, `problem`, `approach`, `outcome`. Optional: `final_report_url`, `grad_mentor`, `faculty_mentor`.

### `index.md` — home page

Set `title`, `description`, `motto`, `quick_facts`, `linkedin`, `image`. There's also an optional **`currently:`** block (more on this below).

---

## The "Currently" Block

`index.md` has an optional `currently:` field with mono-labeled status lines that render on the home page (premium, fresh, and signal themes — minimal intentionally skips it):

```yaml
currently:
  - label: Reading
    text: "The Design of Everyday Things — Don Norman"
  - label: Building
    text: "A small Raspberry Pi sensor logging dashboard"
  - label: Wondering
    text: "How accessibility research can shape consumer hardware"
```

Renders as:

```
CURRENTLY ───────────────────────────
READING    ·  The Design of Everyday Things
BUILDING   ·  A small Raspberry Pi sensor logging dashboard
WONDERING  ·  How accessibility research can shape consumer hardware
```

Add or remove rows freely. Use any labels you want (`Listening`, `Stuck on`, `Shipping`). Delete the whole `currently:` field to hide the section entirely. Update it weekly to give your home page a sense of presence.

---

## Adding Blog Posts

1. Create a file in [_posts/](_posts/) named `YYYY-MM-DD-day-N.md` (e.g. `2026-06-15-day-12.md`). Jekyll reads the date from the filename.
2. Use this front matter:

```yaml
---
layout: post
title: "Day N — Your Title"
date: 2026-06-15
author: Your Name
permalink: /day12.html
tags: ["tag1", "tag2"]

what_i_learned: |
  What you learned today.

blockers: |
  What got in your way (if anything).

reflection: |
  Your thoughts on the day.
---
```

The blog index page automatically groups posts by week.

---

## Images

The template ships with **SVG silhouette placeholders** in [assets/images/](assets/images/) so the demo looks complete out of the box. Replace them with your own photos:

- `profile.svg` — your portrait (used on home and About Me)
- `gallery-1.svg`, `gallery-2.svg`, `gallery-3.svg` — gallery photos on About Me
- `graduate-student-mentor.svg`, `faculty-mentor.svg` — mentor portraits

Two ways to swap images:
- **Same filename**: drop in (say) a `profile.jpg` and update the YAML to reference `.jpg` instead of `.svg`.
- **New filenames**: add your files alongside the placeholders and update the YAML paths.

Tips:
- Square crops (1:1) work best for profile and mentor photos.
- Compress large photos before committing — under 500 KB per image is a good rule.
- Use lowercase filenames with hyphens (`my-photo.jpg`, not `My Photo.JPG`).

---

## Run Locally (Optional)

You don't need to run locally — the GitHub Action builds your site automatically on every push. But if you want to preview changes before committing:

### Just iterating on your live theme

```bash
bundle install                            # one-time
bundle exec jekyll serve --livereload
```

Then open `http://localhost:4000`. Edits reload instantly.

### Trying all four themes side-by-side

```bash
bin/preview-all                           # builds all 5 versions and serves them
```

Then visit:
- `http://localhost:4000/` — your live theme
- `http://localhost:4000/_preview/minimal/`
- `http://localhost:4000/_preview/premium/`
- `http://localhost:4000/_preview/fresh/`
- `http://localhost:4000/_preview/signal/`

The local `bin/preview-all` is a static server (no live reload) — re-run it after edits. Don't run `jekyll serve` and `bin/preview-all` at the same time.

---

## Pulling Updates From the Program

If the program ships a fix or improvement to one of the themes, pull it into your fork:

```bash
git remote add upstream https://github.com/<program-org>/<template-repo>.git   # one-time
git pull upstream main
```

By design, theme code lives under `_includes/themes/`, `_sass/themes/`, and the canonical `_layouts/` — files you typically don't edit. Conflicts (if any) will only happen on `_config.yml`, `pages/`, `_posts/`, `index.md`, or `assets/images/` — your own content.

---

## Troubleshooting

- **Site won't build?** Check the **Actions** tab on your GitHub repo for the build log.
- **YAML syntax error?** Indentation matters. Use spaces (not tabs), and keep nested fields aligned.
- **Theme looks broken after switching?** Make sure `theme_name:` is exactly one of `minimal`, `premium`, `fresh`, or `signal` (lowercase, no quotes).
- **Image not showing?** Confirm the file exists at the path in the YAML and that the extension matches (`.jpg` vs `.svg` vs `.png`).
- **`/_preview/<theme>/` returns 404 locally?** That's expected. `jekyll serve` only builds the live theme. Use `bin/preview-all` to populate the preview directories locally.
- **Switcher visible on deployed site?** It shouldn't be — only deployed `/_preview/` pages show the switcher. If it's showing on your live site, check that the GitHub Action is setting `JEKYLL_ENV: production` (it does by default — see [.github/workflows/ci.yaml](.github/workflows/ci.yaml)).

Have a great summer of research! 📚
