module.exports = {
	presets: [
		require.resolve("@babel/preset-env"),
		require.resolve("@babel/preset-react"),
		require.resolve('@babel/preset-stage-0')
	],

	plugins: [
		require.resolve("@babel/plugin-syntax-dynamic-import"),
		require.resolve("@babel/plugin-transform-regenerator"),

		[
			require.resolve("@babel/plugin-transform-runtime"),
			{
				polyfill: false,
			},
		]
	]
};
