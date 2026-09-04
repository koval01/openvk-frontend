#!/usr/bin/env python3
"""Download OpenVK 2007 CSS and images into the frontend public/ tree."""

from __future__ import annotations

import re
import urllib.error
import urllib.request
from pathlib import Path
from urllib.parse import urljoin, urlparse

ROOT = Path("/Users/yaroslav.koval/VSCodeProjects/openvk-frontend/public")
ORIGIN = "https://openvk.org"
UA = "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/140.0.0.0 Safari/537.36"

SEED = [
    "/assets/packages/static/openvk/css/main.css",
    "/assets/packages/static/openvk/css/audios.css",
    "/assets/packages/static/openvk/img/icon.ico",
    "/assets/packages/static/openvk/img/camera_200.png",
    "/assets/packages/static/openvk/img/tiny.gif",
    "/assets/packages/static/openvk/img/icon1.gif",
    "/assets/packages/static/openvk/img/icon2.gif",
    "/assets/packages/static/openvk/img/icon3.gif",
    "/assets/packages/static/openvk/img/like.gif",
    "/assets/packages/static/openvk/img/friends.svg",
    "/assets/packages/static/openvk/img/photos.svg",
    "/assets/packages/static/openvk/img/messages.svg",
    "/assets/packages/static/openvk/img/groups.svg",
    "/assets/packages/static/openvk/img/feedback.svg",
    "/assets/packages/static/openvk/img/flags/ru.gif",
    "/assets/packages/static/openvk/img/flags/gb.gif",
    "/assets/packages/static/openvk/img/flags/ua.gif",
    "/assets/packages/static/openvk/img/play_buttons.gif",
    "/assets/packages/static/openvk/img/audios_controls.png",
    "/assets/packages/static/openvk/img/search_icon.png",
    "/assets/packages/static/openvk/img/flex_arrow_open2.png",
    "/assets/packages/static/openvk/img/flex_arrow_shut.gif",
    "/assets/packages/static/openvk/img/header.png",
    "/assets/packages/static/openvk/img/header_custom.png",
    "/assets/packages/static/openvk/img/header_yellow.png",
    "/assets/packages/static/openvk/img/divider.png",
    "/assets/packages/static/openvk/img/loading_mini.gif",
    "/assets/packages/static/openvk/img/note.gif",
    "/assets/packages/static/openvk/img/bullet.gif",
    "/assets/packages/static/openvk/img/wall.png",
    "/assets/packages/static/openvk/img/arrows.png",
    "/assets/packages/static/openvk/img/radio.png",
    "/assets/packages/static/openvk/img/person.png",
    "/assets/packages/static/openvk/img/pin.png",
    "/assets/packages/static/openvk/img/video.png",
    "/assets/packages/static/openvk/img/audio.png",
    "/assets/packages/static/openvk/img/input_clear.gif",
    "/assets/packages/static/openvk/img/progressbar.gif",
    "/assets/packages/static/openvk/img/progress_indicator.gif",
    "/assets/packages/static/openvk/img/group_icons.png",
    "/assets/packages/static/openvk/img/docs_controls.png",
    "/assets/packages/static/openvk/img/checkmark.png",
    "/assets/packages/static/openvk/img/upload.png",
    "/assets/packages/static/openvk/js/node_modules/jquery/dist/jquery.min.js",
]

URL_RE = re.compile(r"url\(\s*['\"]?([^)'\"\s]+)['\"]?\s*\)")
SRC_RE = re.compile(r"""(?:src|href)=['\"]([^'\"]+)['\"]""")


def local_path(url_path: str) -> Path:
    parsed = urlparse(url_path)
    path = parsed.path
    if not path.startswith("/"):
        path = "/" + path
    return ROOT / path.lstrip("/")


def fetch(url_path: str) -> bytes | None:
    url = urljoin(ORIGIN, url_path)
    req = urllib.request.Request(url, headers={"User-Agent": UA, "Accept": "*/*"})
    try:
        with urllib.request.urlopen(req, timeout=30) as resp:
            if resp.status != 200:
                print(f"skip {resp.status} {url_path}")
                return None
            data = resp.read()
            if not data:
                print(f"empty {url_path}")
                return None
            dest = local_path(url_path)
            dest.parent.mkdir(parents=True, exist_ok=True)
            dest.write_bytes(data)
            print(f"ok {len(data):6d}  {url_path}")
            return data
    except urllib.error.HTTPError as exc:
        print(f"http {exc.code} {url_path}")
        return None
    except Exception as exc:  # noqa: BLE001
        print(f"err {url_path}: {exc}")
        return None


def css_urls(css: str, css_path: str) -> list[str]:
    found: list[str] = []
    css_dir = str(Path(urlparse(css_path).path).parent)
    for match in URL_RE.finditer(css):
        raw = match.group(1).strip()
        if raw.startswith("data:") or raw.startswith("#"):
            continue
        raw = raw.split("?")[0]
        if raw.startswith("/"):
            found.append(raw)
        else:
            found.append(str(Path(css_dir, raw).as_posix()).replace("/./", "/"))
    return found


def main() -> None:
    queue = list(SEED)
    seen: set[str] = set()
    while queue:
        path = queue.pop(0)
        path = urlparse(path).path
        if path in seen:
            continue
        seen.add(path)
        data = fetch(path)
        if data is None:
            continue
        if path.endswith((".css", ".html", ".js")):
            text = data.decode("utf-8", errors="ignore")
            extras = css_urls(text, path) if path.endswith(".css") else []
            extras += [m.group(1) for m in SRC_RE.finditer(text)]
            for extra in extras:
                extra_path = urlparse(extra).path
                if extra_path.startswith("/assets/"):
                    queue.append(extra_path)


if __name__ == "__main__":
    main()
