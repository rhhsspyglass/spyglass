import * as fs from "fs/promises";
import { fileURLToPath } from "url";
import * as path from "path";
import { fromPath } from "pdf2pic";

const __dirname = path.dirname(fileURLToPath(import.meta.url));

const issuesPath = path.join(__dirname, "../../static/issues");

async function convertPdfs() {
	const pdfs = (await fs.readdir(issuesPath)).filter(p => path.extname(p) === ".pdf");

	await Promise.all(pdfs.map(processPdf));
}

async function processPdf(pdf: string) {
	const options = {
		density: 100,
		saveFilename: pdf,
		savePath: path.join(__dirname, "../../src/lib/thumbnails"),
		format: "png",
		preserveAspectRatio: true
	};

	const convert = fromPath(
		path.join(__dirname, "../../static/issues", pdf),
		options
	);

    try {
        await convert(1, { responseType: "image" });
    } catch (e) {
        console.log(`An error occured when processing ${pdf}`);
        console.error(e);
    }
}

convertPdfs();
