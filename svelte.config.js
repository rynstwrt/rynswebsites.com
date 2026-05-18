// import adapter from '@sveltejs/adapter-static';
// import adapter from '@sveltejs/adapter-auto';
import adapter from "@sveltejs/adapter-vercel";

/** @type {import('@sveltejs/kit').Config} */
const config = {
	compilerOptions: {
		runes: ({ filename }) => filename.split(/[/\\]/).includes('node_modules') ? undefined : true
	},
	kit: {
		// adapter: adapter({
		// 	strict: false
		// }),
		adapter: adapter(),
		paths: {
			base: process.argv.includes('dev') ? '' : process.env.BASE_PATH
		},
		alias: {
			"$icons": "src/lib/icons",
			// "$util": "src/lib/util",
			// "$components": "src/lib/components",
			"$ui": "src/lib/components/ui"
		}
	}
};

export default config;
