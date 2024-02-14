import express from 'express'
import path from 'path'

const app = express();
const PORT = 3000;
const __dirname = path.resolve();

app.use(express.static(path.join(__dirname, 'dist')));

app.get('/', (res, req) => {
    res.sendFile(path.resolve(__dirname, 'dist/index.html'))
})

app.listen(PORT, () => {
    console.log(`Messenger has been listening on port: ${PORT}`);
});
