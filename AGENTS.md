# Agents

This repo is the Svelte SPA of an OpenVK rewrite (classic 2007 VKontakte). The matching API is `../openvk-backend`.

## Original OpenVK

The PHP site we are replacing lives at:

`/Users/yaroslav.koval/VSCodeProjects/openvk`

That clone is the behavior spec. Before inventing a route, block, class name, or page flow, open the original:

- `Web/routes.yml` — first-match-wins router
- `Web/Presenters/` — PHP handlers
- `Web/Presenters/templates/` — 2007 Latte pages (UI contract)
- `locales/` — user-visible copy (Russian source; copied here to `public/locales`)

GitHub `OpenVK/openvk` is the same project, not a second backlog. Port blocks and CSS classes, not Latte or jQuery.

## Production

When the clone is not enough (odd redirects, logged-in chrome, real data), inspect https://openvk.org as the owner’s account. Ask for a current session cookie or credentials in chat. Never write passwords, cookies, or `CHANDLERSESS` into this repo.
