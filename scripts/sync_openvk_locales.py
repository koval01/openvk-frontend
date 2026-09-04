#!/usr/bin/env python3
"""Copy OpenVK master locales into the frontend public tree.

Source is github.com/OpenVK/openvk locales/. Uses a local clone when present.
"""

from __future__ import annotations

import shutil
import subprocess
import tempfile
from pathlib import Path

DEST = Path("/Users/yaroslav.koval/VSCodeProjects/openvk-frontend/public/locales")
LOCAL_CLONE = Path("/Users/yaroslav.koval/VSCodeProjects/openvk")
REPO = "https://github.com/OpenVK/openvk.git"


def run(args: list[str], cwd: Path | None = None) -> None:
    subprocess.run(args, cwd=cwd, check=True)


def source_root() -> Path:
    if (LOCAL_CLONE / ".git").is_dir() and (LOCAL_CLONE / "locales" / "ru.strings").is_file():
        run(["git", "fetch", "origin", "master"], cwd=LOCAL_CLONE)
        return LOCAL_CLONE / "locales"
    tmp = Path(tempfile.mkdtemp(prefix="openvk-locales-"))
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
    run(["git", "sparse-checkout", "set", "locales"], cwd=tmp)
    return tmp / "locales"


def main() -> None:
    src = source_root()
    if DEST.exists():
        shutil.rmtree(DEST)
    shutil.copytree(src, DEST, ignore=shutil.ignore_patterns(".DS_Store", ".git"))
    count = sum(1 for path in DEST.rglob("*") if path.is_file())
    print(f"locales {count:5}  {DEST}")


if __name__ == "__main__":
    main()
