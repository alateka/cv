## Setup Firebase
- Run: `sudo npm install -g firebase-tools`

- Run: `firebase login`

- Run: `firebase init hosting`

- Run: `firebase deploy --only hosting`

## Tailwind Binary 
### Download it:
`curl -sLO https://github.com/tailwindlabs/tailwindcss/releases/latest/download/tailwindcss-linux-x64`

`chmod +x tailwindcss-linux-x64`

`mv tailwindcss-linux-x64 tailwindcss`

### On pre
- `./tailwindcss -i src/CSS/input.css -o ./src/app.css --watch`

### On pro
- `./tailwindcss -i src/CSS/input.css -o ./src/app.css --minify`

## Vite
### On pre
- `npm run dev`

### On pro
- `npm run build`
- `npm run preview` > This is necessary to show index.html in production. Only works using HTTP protocol, file protocol will not work