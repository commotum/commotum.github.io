# Jekyll ideas Scaffold (from CSV)

Generated from `ideas_21_quotes_template.csv` with columns:
- `id`, `title`, `excerpt`, `image`, `theme_rgb`.

Contents:
- `_ideas/XX.md` — one stub per row with front matter filled.
- `_data/ideas.yml` — ordered list of IDs for navigation.
- `README.md` — this file.

## Notes
- For monochrome, delete `theme_rgb` fields or ignore them in your layout.
- To hide images, remove `image` or guard with a Liquid `{% if page.image %}` block.
