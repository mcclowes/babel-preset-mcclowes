const targets = {
	browsers: "> 1%",
	node: "current",
};

module.exports = {
	presets: [
		[
			"env",
			{
				targets,
				modules: (process.env.BABEL_OPTIONS || "").includes("webpack")
					? false
					: "commonjs",
			},
		],
		"react",
	],
	plugins: [
		"@babel/transform-class-properties",
		"@babel/transform-decorators-legacy",
		"@babel/plugin-proposal-class-properties",
		"@babel/plugin-proposal-decorators",
		"@babel/plugin-proposal-json-strings",
		"@babel/plugin-syntax-dynamic-import",
		"@babel/plugin-syntax-import-meta",
		"@babel/plugin-proposal-optional-chaining",
		"@babel/plugin-proposal-pipeline-operator",

		[
			"@babel/ramda",
			{
				useES: false,
			},
		],
		[
			"@babel/plugin-transform-runtime",
			{
				polyfill: false,
				regenerator: true,
			},
		],
	],
};
