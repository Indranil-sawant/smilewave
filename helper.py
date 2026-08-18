import instaloader

USERNAME = "instagram_account_name"
DOWNLOAD_FOLDER = "instagram_downloads"

L = instaloader.Instaloader(
    dirname_pattern=DOWNLOAD_FOLDER,
    filename_pattern="{date_utc:%Y-%m-%d}_{shortcode}",
    download_videos=False,
    download_video_thumbnails=False,
    save_metadata=False,
    compress_json=False
)

profile = instaloader.Profile.from_username(L.context, USERNAME)

for post in profile.get_posts():
    if post.typename == "GraphImage":
        print(f"Downloading: {post.shortcode}")
        L.download_post(post, target=USERNAME)

print("Done.")