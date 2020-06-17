import express from 'express';
import routes from './routes';

const app = express();
app.use(express.json());
const PORT = 3333;

app.use(routes);

app.listen(PORT, () => {
  console.log('✅ Server Connected at Port 3️⃣ 3️⃣ 3️⃣ 3️⃣');
});
