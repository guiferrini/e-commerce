import express from 'express';

const app = express();
app.use(express.json())
const PORT = 3333;

app.get('/principal', (request, response) => {
  response.json({message: 'ola mundo'});
});

app.listen(PORT, () => {
  console.log(`✅ Server Connected at Port 3️⃣ 3️⃣ 3️⃣ 3️⃣`)
});