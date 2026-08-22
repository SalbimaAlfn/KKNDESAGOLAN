from pathlib import Path
from PIL import Image
import pillow_heif

pillow_heif.register_heif_opener()

src_dir = Path(r"d:\team-showcase\src\assets\members")
dst_dir = Path(r"d:\team-showcase\public\members")
dst_dir.mkdir(parents=True, exist_ok=True)

converted = []
for src_file in sorted(src_dir.iterdir()):
    if src_file.suffix.lower() not in {".heic", ".heif"}:
        continue

    member_id = src_file.stem.strip()
    try:
        member_id_int = int(member_id)
    except ValueError:
        print(f"Skipping non-numeric file name: {src_file.name}")
        continue

    out_file = dst_dir / f"{member_id_int}.jpg"
    with Image.open(src_file) as img:
        img.convert("RGB").save(out_file, "JPEG", quality=92)
    converted.append(f"{src_file.name} -> {out_file.name}")

if converted:
    print("\n".join(converted))
else:
    print("No HEIC files found in src/assets/members")
