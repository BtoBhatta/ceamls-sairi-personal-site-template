# Your CEAMLS SAIRI Personal Site

This is a starter for your personal research website during the CEAMLS SAIRI Summer Research program. You don't need to know how to code to use it — you'll mostly be filling in your name, your bio, and your daily reflections, all by editing simple text files.

When you're done, you'll have a website at `https://your-username.github.io` that includes:

- A home page with your name, photo, and a short intro
- An "About Me" page with your bio, hobbies, and photos
- An "About My Mentors" page about your graduate and faculty mentors
- An "About My Project" page describing your research
- A blog where you post daily reflections
- A look you can change anytime by switching between four built-in themes

Read on. Every step is explained.

---

## Step 1 — Make a copy of this template

1. Click the green **"Use this template"** button at the top of this page.
2. Choose **"Create a new repository"**.
3. Name your new repo exactly: **`<your-github-username>.github.io`** — all lowercase, ending in `.github.io`. For example, if your GitHub username is `jordan-rivera`, name the repo `jordan-rivera.github.io`.
4. Make sure it's set to **Public**, then click **"Create repository"**.

That gives you your own copy that you can edit without affecting anyone else.

---

## Step 2 — Turn on the website

1. In your new repo, click the **Settings** tab (top right).
2. In the left sidebar, click **Pages**.
3. Under "Build and deployment", set **Source** to **GitHub Actions**.

You don't need to pick anything else — the workflow handles the build for you.

---

## Step 3 — Edit your name and theme

The main settings file is called `_config.yml`. In your repo:

1. Click on `_config.yml` in the file list.
2. Click the pencil icon (top right) to edit it.
3. Find the line `title: Your Name Here` and replace `Your Name Here` with your name. Do the same for `author:` and `url:` (your URL is `https://your-username.github.io`).
4. Find the line `theme_name: minimal` and leave it as-is for now — you can change the theme later (Step 7).
5. Scroll down and click **Commit changes**. Pick "Commit directly to the main branch" and click the green button.

That's it — give it about a minute, then visit `https://your-username.github.io`. Your site is live.

> **What's a "commit"?** It's just GitHub's word for "save". Every time you change a file, you commit the change. The website rebuilds automatically.

---

## Step 4 — Edit the About pages

Your three about pages live in the `pages/` folder. Open each one, click the pencil, and replace the example values with your own:

### `pages/about-me.md`

This page uses a structured format called **YAML** — it looks like a list of `field: value` pairs. The most important rule: **indentation matters**. Use spaces, not tabs, and keep nested fields aligned the same way as the example.

You'll fill in:

- `name:` — your full name
- `role:` — your year and major (e.g. "Junior, Computer Science")
- `image:` — the path to your photo (more on photos in Step 6)
- `linkedin:` — your LinkedIn URL (or remove the line if you don't have one)
- `bio:` — a paragraph or two about you. Use the `|` symbol to keep multi-line text aligned.
- `hobbies:` — a list of hobby cards, each with an `icon` (an emoji), `title`, and `description`
- `gallery:` — a list of photos, each with an `image` path and a `caption`

The file already has examples filled in. Replace them with your own info, keeping the same structure.

### `pages/about-my-mentor.md`

Same idea, but with two sections:
- `graduate_mentor:` — your grad-student mentor (name, title, image, website, bio)
- `faculty_mentor:` — your faculty advisor (same fields)

### `pages/about-my-project.md`

Fill in:
- `subtitle:` — a one-line tagline for your project area
- `project_title:` — the actual title of your project
- `problem:` — what problem are you tackling, and why does it matter
- `approach:` — how you'll work on it (a bulleted plan works well)
- `outcome:` — what you expect to produce by the end of the program
- `final_report_url:` — link to your final report (you can fill this in later, or delete the line for now)
- `grad_mentor:` and `faculty_mentor:` — name + LinkedIn for each

---

## Step 5 — Edit your home page

The home page is `index.md`. It controls what visitors see first.

- `title:` — leave this as `Home` (it's what shows in the browser tab)
- `display_name:` — your full name as you want it shown big on the home page
- `description:` — a short tagline for SEO and social sharing
- `motto:` — a one-line quote that captures what you're about (optional — delete if you don't want one)
- `quick_facts:` — a list of short bullet points (year, research interest, location, fun fact)
- `linkedin:` — your LinkedIn URL
- `image:` — path to your portrait photo

There's also an optional **"Currently"** section described in Step 8.

---

## Step 6 — Add your photos

The `assets/images/` folder is where photos live. The template ships with grey silhouette placeholders so the demo looks complete out of the box.

To replace them:

1. Click into `assets/images/`.
2. Drag-and-drop your own photo files into the file browser (or use **Add file → Upload files**).
3. Make sure the filename matches what's referenced in your YAML files. For example, if your YAML says `image: /assets/images/profile.svg`, you can either:
   - Upload a file *named* `profile.svg` (replaces the placeholder), or
   - Upload `profile.jpg` and then edit the YAML to say `profile.jpg` instead of `profile.svg`.

**Tips:**
- Square crops work best for profile photos and mentor photos.
- Keep each photo under 500 KB if you can — large photos slow your site down.
- Use lowercase filenames with hyphens: `my-photo.jpg`, not `My Photo.JPG`.

The placeholders you'll want to replace are: `profile.svg`, `gallery-1.svg`, `gallery-2.svg`, `gallery-3.svg`, `graduate-student-mentor.svg`, `faculty-mentor.svg`.

---

## Step 7 — Pick your theme

The template ships with four themes. Pick the one you like best:

| Theme     | Look                                                                    |
| --------- | ----------------------------------------------------------------------- |
| `minimal` | Soft blue, side menu, clean. Default.                                   |
| `premium` | Warm cream, serif headings, magazine feel.                              |
| `fresh`   | Dark editorial, sticky sidebar, drop-cap bios.                          |
| `signal`  | Dark navy and orange — closest to the SAIRI brand.                      |

**To switch:**

1. Open `_config.yml`.
2. Find the line `theme_name: minimal`.
3. Change `minimal` to `premium`, `fresh`, or `signal`.
4. Commit. Wait about a minute. Refresh your site.

You can switch as many times as you want. Your content moves with you because every theme reads the same fields.

### Try the other themes without changing yours

Every push automatically builds all four themes as hidden URLs alongside your live site. So if your live theme is `minimal`, you can still see what your content looks like in the other three at:

- `https://your-username.github.io/_preview/premium/`
- `https://your-username.github.io/_preview/fresh/`
- `https://your-username.github.io/_preview/signal/`

(These are quietly available — not linked from your live site, so visitors won't stumble onto them.)

---

## Step 8 — Add a blog post each day

Every day, you'll add a new file to the `_posts/` folder.

1. In the `_posts/` folder, click **Add file → Create new file**.
2. Name the file in this exact format: `YYYY-MM-DD-day-N.md`. For example, your first post on June 1, 2026 would be `2026-06-01-day-1.md`.
3. Paste this template at the top, then fill in the values:

```yaml
---
layout: post
title: "Day N — Your Title"
date: 2026-06-01
permalink: /day1.html
tags: ["tag1", "tag2"]

what_i_learned: |
  What you learned today. You can write multiple paragraphs —
  just keep them indented the same way.

blockers: |
  Anything that got in your way. Write "No blockers!" if it was smooth sailing.

reflection: |
  Your honest thoughts on the day.
---
```

You don't need to add an `author:` line to each post — it falls back to whatever you set as `author:` in `_config.yml`. (Add `author: Someone Else` to a post only if you want a different byline for that one post — e.g. a guest post.)

4. Commit. Your post shows up on the blog page automatically, grouped by week.

---

## Step 9 — The "Currently" section (optional)

The home page has an optional **"Currently"** section that shows what you're up to right now. It looks like this on your live site:

```
CURRENTLY
─────────
READING    ·  The Design of Everyday Things
BUILDING   ·  A small Raspberry Pi sensor logging dashboard
WONDERING  ·  How accessibility research can shape consumer hardware
```

Edit `index.md` and look for the `currently:` section. Update the labels and text as your week changes — it gives your home page a sense of presence and shows you're actively working.

You can use any labels you want: `Reading`, `Building`, `Wondering`, `Listening`, `Stuck on`, `Shipping` — whatever fits. Add or remove rows freely. To hide the section entirely, delete the whole `currently:` block.

(This section appears on the `premium`, `fresh`, and `signal` themes; the `minimal` theme intentionally skips it for visual simplicity.)

---

## Common mistakes and how to fix them

- **Site won't build / I see an error in the Actions tab.** Almost always a YAML mistake. The most common cause is mixing tabs and spaces, or misaligning indentation. Open the file, check that everything indented is consistent (use spaces, not tabs).
- **The page builds but my photo is missing.** Check that the file actually exists at the path in your YAML. `image: /assets/images/profile.svg` requires a file named `profile.svg` to exist inside `assets/images/`. Filenames are case-sensitive: `Profile.SVG` is different from `profile.svg`.
- **My theme switch didn't take effect.** Make sure the value is exactly `minimal`, `premium`, `fresh`, or `signal` (lowercase, no quotes, nothing extra). Wait at least 60 seconds for GitHub to rebuild.
- **The browser tab still shows "Your Name Here".** That's `title:` in `_config.yml` — make sure you replaced it with your name and committed.
- **My quotes are showing up as `&quot;` or some weird text.** YAML doesn't always need quotes around strings. If you have an apostrophe in your text (like "I'm"), wrap the whole value in double quotes: `motto: "I'm a curious researcher"`.

---

## Run it on your own computer (optional, for the curious)

You don't need to do this — GitHub builds your site automatically. But if you want to preview changes before pushing, you can run the site locally.

You'll need [Ruby](https://www.ruby-lang.org/) installed. Then in a terminal:

```bash
cd path/to/your-repo
bundle install                              # one-time setup
bundle exec jekyll serve --livereload       # starts the local server
```

Open `http://localhost:4000` in your browser. Edits reload automatically.

To preview all four themes side-by-side locally, run `bin/preview-all` instead. (This builds all four into separate folders and serves them at `http://localhost:4000/_preview/<theme>/`.)

---

## Pulling updates from the program (optional, for the curious)

If the program ships a fix or improvement to one of the themes, you can pull it into your fork. In a terminal:

```bash
git remote add upstream https://github.com/clydewtt/ceamls-sairi-personal-site-template.git   # one-time
git pull upstream main
```

Conflicts (if any) will only be on files you've personally edited (`_config.yml`, `pages/`, `_posts/`, `index.md`, or `assets/images/`).

---

## Need help?

- Stuck on YAML? It's a finicky format. Try [yamlchecker.com](https://yamlchecker.com) to find syntax errors.
- Site won't build? Click the **Actions** tab on your repo to see the error log.
- Something else? Ask your mentor or the program coordinator — they've seen most issues before.

Have a great summer of research! 📚
