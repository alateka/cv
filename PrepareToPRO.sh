#!/bin/bash
# Optional - After of compile the project.
# If you need to replace the URIs to adapted it to a Nginx or Apache server independent
sed -i 's|href="/favicon.webp"|href="/cv/favicon.webp"|g' public/cv/index.html
find public/cv/ -type f -exec sed -i 's|assets/|cv/assets/|g' {} \;
find public/cv/ -type f -exec sed -i 's|href="/"|href="/cv/"|g' {} \;
exit