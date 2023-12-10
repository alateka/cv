## Setup Firebase
- Run: `sudo npm install -g firebase-tools`

- Run: `firebase login`

- Run: `firebase init hosting`

- Run: `firebase deploy --only hosting`

## Prepare dependencies
- `npm install`

### On pre
- `npm run dev`

### On pro
- `npm run build`
- `npm run preview` > This is necessary to show index.html in production. Only works using HTTP protocol, file protocol will not work