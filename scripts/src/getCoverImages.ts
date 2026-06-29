import * as fs from "fs/promises";
import { fileURLToPath } from "url";
import * as path from "path";
import { createCanvas, DOMMatrix, ImageData } from "@napi-rs/canvas";

globalThis.DOMMatrix = DOMMatrix as any;
globalThis.ImageData = ImageData as any;

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const issuesPath = path.join(__dirname, "../../static/issues");

class CustomCanvasFactory {
	create(width: number, height: number) {
		const canvas = createCanvas(width, height);
		const context = canvas.getContext("2d");
		return { canvas, context };
	}

	reset(
		canvasAndContext: { canvas: any; context: any },
		width: number,
		height: number
	) {
		canvasAndContext.canvas.width = width;
		canvasAndContext.canvas.height = height;
	}

	destroy(canvasAndContext: { canvas: any; context: any }) {
		canvasAndContext.canvas = null;
		canvasAndContext.context = null;
	}
}

async function convertPdfs() {
	const pdfjsLib = await import("pdfjs-dist/legacy/build/pdf.mjs");

	const pdfs = (await fs.readdir(issuesPath)).filter(
		(p: string) => path.extname(p) === ".pdf"
	);

	await Promise.all(pdfs.map((pdf) => processPdf(pdf, pdfjsLib)));
}

async function processPdf(pdf: string, pdfjsLib: any) {
	const pdfPath = path.join(issuesPath, pdf);
	const outputName = `${pdf.replace('.pdf', '')}.png`;
	const outputPath = path.join(
		__dirname,
		"../../src/lib/thumbnails",
		outputName
	);

	try {
		const buffer = await fs.readFile(pdfPath);
		const doc = await pdfjsLib.getDocument({
			data: new Uint8Array(buffer),
			CanvasFactory: CustomCanvasFactory,
		}).promise;
		const page = await doc.getPage(1);

		const density = 100;
		const scale = density / 72;
		const viewport = page.getViewport({ scale });

		const canvas = createCanvas(viewport.width, viewport.height);
		const ctx = canvas.getContext("2d") as unknown as CanvasRenderingContext2D;

		await page
			.render({
				canvasContext: ctx,
				viewport,
			})
			.promise;

		const pngBuffer = await canvas.encode("png");
		await fs.writeFile(outputPath, pngBuffer);

		console.log(`Generated thumbnail for ${pdf}`);
	} catch (e) {
		console.log(`An error occured when processing ${pdf}`);
		console.error(e);
	}
}

convertPdfs();
