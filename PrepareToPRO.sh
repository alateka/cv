#!/bin/bash
# Optional - After of compile the project.
# If you need to replace the URIs to adapted it to a Nginx or Apache server independent
find dist/ -type f -exec sed -i 's|href="/favicon.webp"|href="/cv/favicon.webp"|g' {} \;
find dist/ -type f -exec sed -i 's|"assets/img/header_img.webp"|"/cv/assets/img/header_img.webp"|g' {} \;
find dist/ -type f -exec sed -i 's|"assets/img/face.webp"|"/cv/assets/img/face.webp"|g' {} \;
find dist/ -type f -exec sed -i 's|/assets/fonts/nunito_regular.ttf|/cv/assets/fonts/nunito_regular.ttf|g' {} \;
find dist/ -type f -exec sed -i 's|src="/assets/index-|src="/cv/assets/index-|g' {} \;
find dist/ -type f -exec sed -i 's|href="/assets/index-|href="/cv/assets/index-|g' {} \;
exit