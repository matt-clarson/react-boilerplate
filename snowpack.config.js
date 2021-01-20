module.exports = {
    mount: {
        public: { url: "/", static: true },
        src: { url: "/dist" },
    },
    plugins: [
        "@snowpack/plugin-dotenv",
        "@snowpack/plugin-react-refresh",
        ["@snowpack/plugin-typescript", { args: "--project ./tsconfig.prod.json" }],
        "@snowpack/plugin-postcss",
    ],
    packageOptions: {
        env: { NODE_ENV: true },
    },
};
