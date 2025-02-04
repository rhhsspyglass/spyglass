import { getAverageColor } from "fast-average-color-node";
import * as fs from "fs/promises";
import { fileURLToPath } from "url";
import * as path from "path";

const __dirname = path.dirname(fileURLToPath(import.meta.url));

const issuesPath = path.join(__dirname, "../../src/lib/thumbnails");

async function getAverageColors() {
	const coverImages = (await fs.readdir(issuesPath)).filter(p => path.extname(p) === ".png");

	const colors = await Promise.all(coverImages.map(processImage));

	const outputPath = path.join(__dirname, "../", "output.json");

	console.log(outputPath);

	await fs.writeFile(
		outputPath,
		JSON.stringify(Object.fromEntries(colors), null, "\t")
	);
}

async function processImage(filename: string) {
	const filepath = path.join(__dirname, "../../src/lib/thumbnails", filename);
	const colorResult = await getAverageColor(filepath);

	return [filename, colorResult.hex];
}

getAverageColors();
