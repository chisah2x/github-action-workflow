import express from 'express';
import { fileURLToPath } from 'node:url';

const app = express();
const port = process.env.PORT || 3000;

app.get('/hello', (request, response) => {
  response.send('Hello from Express');
});

app.get('/bye', (request, response) => {
  response.send('Bye from Express');
});

if (process.argv[1] === fileURLToPath(import.meta.url)) {
  app.listen(port, () => {
    console.log(`App listening on port ${port}`);
  });
}

export default app;