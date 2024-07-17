const autoprefixer = import('autoprefixer');
const nested = import("postcss-nested");

const config = {
    plugins: [
        nested(),
        autoprefixer()
    ]
};
module.exports = config;
