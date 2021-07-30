import express from 'express';
import { runTest } from './testRuner';
import bodyParser from 'body-parser';
const app = express();
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
const port = 3000;

app.get('/', (req, res) => {
	res.end('Hello World!');
});

app.post('/task', async (req, res) => {
	global.globalString = 100;
	const { taskId, pageUrl } = req.body;
	await runTest(taskId, pageUrl);
	res.send(` globalString :  ${globalString}`);
});

app.listen(port, () => {
	console.log(`app listening at http://localhost:${port}`);
});
