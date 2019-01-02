import app from './app';

const PORT = 3000;
const APP_NAME = 'Request API';

app.listen(PORT, () => {
  console.log(`${APP_NAME} running at port ${PORT}...`);
});
