# DEV
dev:
	npm run dev

dev-css:
	./tailwindcss -i src/CSS/input.css -o ./src/app.css --watch

# PRO
pro:
	./tailwindcss -i src/CSS/input.css -o ./src/app.css --minify && npm run build && npm run preview