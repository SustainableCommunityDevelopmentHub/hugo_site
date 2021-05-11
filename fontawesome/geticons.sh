
#!/bin/sh
set -ex
icons="lemon-o life-buoy line-chart motorcycle map-o plane phone-square print remove shopping-basket retweet star-half-full sticky-note-o thumb-tack trash tree trophy trademark truck university umbrella wrench video-camera users thumbs-up thumbs-down"
iconsss="compass diamond database cubes feed file-audio-0 file-movie-o gamepad gift gavel thermometor-4 thermometor-0 user-circle shower envelope-open-o bank binoculars beer be blind bolt birthday-cake building calculator bus child handshake-o snowflake-o bath file-pdf-0 file-code-o glass beer lemon-o life-buoy line-chart motorcycle map-o plane phone-square print remove shopping-basket retweet star-half-full sticky-note-o thumb-tack trash tree trophy trademark truck university umbrella wrench video-camera users thumbs-up thumbs-down"

dest=fontawesome
url=https://raw.githubusercontent.com/FortAwesome/Font-Awesome/master/svgs/solid

mkdir -p "${dest}"
for icon in $icons; do
  icon="${icon}.svg"
  wget -O "${dest}/${icon}" "${url}/${icon}"
done
