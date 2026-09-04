#!/usr/bin/env python3
"""Copy OpenVK master Web/static/{img,audio,video} into the frontend public tree.

Source is github.com/OpenVK/openvk (same trees as Web/static/img|audio|video).
Uses a local clone when present, otherwise a shallow sparse clone.
"""

from __future__ import annotations

import shutil
import subprocess
import tempfile
from pathlib import Path

DEST = Path("/Users/yaroslav.koval/VSCodeProjects/openvk-frontend/public/assets/packages/static/openvk")
LOCAL_CLONE = Path("/Users/yaroslav.koval/VSCodeProjects/openvk")
TREES = ("img", "audio", "video")
REPO = "https://github.com/OpenVK/openvk.git"


def run(args: list[str], cwd: Path | None = None) -> None:
    subprocess.run(args, cwd=cwd, check=True)


def source_root() -> Path:
    if (LOCAL_CLONE / ".git").is_dir() and (LOCAL_CLONE / "Web/static/img").is_dir():
        run(["git", "fetch", "origin", "master"], cwd=LOCAL_CLONE)
        return LOCAL_CLONE / "Web" / "static"
    tmp = Path(tempfile.mkdtemp(prefix="openvk-static-"))
    run(
        [
            "git",
            "clone",
            "--depth",
            "1",
            "--filter=blob:none",
            "--sparse",
            REPO,
            str(tmp),
        ]
    )
    run(["git", "sparse-checkout", "set", "Web/static/img", "Web/static/audio", "Web/static/video"], cwd=tmp)
    return tmp / "Web" / "static"


def main() -> None:
    src = source_root()
    DEST.mkdir(parents=True, exist_ok=True)
    for name in TREES:
        source = src / name
        target = DEST / name
        if not source.is_dir():
            raise SystemExit(f"missing {source}")
        if target.exists():
            shutil.rmtree(target)
        shutil.copytree(source, target, ignore=shutil.ignore_patterns(".DS_Store"))
        count = sum(1 for path in target.rglob("*") if path.is_file())
        print(f"{name:5} {count:5}  {target}")


if __name__ == "__main__":
    main()
