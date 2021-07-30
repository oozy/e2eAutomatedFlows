import express from 'express';
import { runTest } from './testRuner';
import timeout from 'connect-timeout';

// import bodyParser from 'body-parser';
const app = express();
// app.use(bodyParser.urlencoded({ extended: false }));
// app.use(bodyParser.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(haltOnTimedout);
const port = process.env.PORT || 3000;

app.get('/', (req, res) => {
	res.end('Hello World!');
});

function haltOnTimedout(req, res, next) {
	if (!req.timedout) next();
}
app.post('/task', timeout('60s'), async (req, res) => {
	req.setTimeout(500000);
	global.globalString = 100;
	const { taskId, pageUrl } = req.body;
	await runTest(taskId, pageUrl);
	if (req.timedout) return;
	res.send(` globalString :  ${globalString}`);
});

app.listen(port, () => {
	console.log(`Listening on http://localhost:${port}/`);
});
