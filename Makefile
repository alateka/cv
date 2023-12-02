# DEV
dev:
	npm run dev

dev-css:
	./tailwindcss -i src/CSS/input.css -o ./src/app.css --watch

# PRO
pro:
	npm run build && npm run preview

pro-css:
	./tailwindcss -i src/CSS/input.css -o ./src/app.css --minify