import { createServer } from 'http';
import { success } from './lib'
import path from 'path';

import App from './config';

const app = App.express;

const server = createServer( app );
const PORT = process.env.PORT || 3000;

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../../client/public/dist/index.html'));
});

server.listen( PORT, err => {
  if (err) {
    throw new Error;
  }
  success(`Server is now listening on PORT: ${PORT}`);
});

export default server;