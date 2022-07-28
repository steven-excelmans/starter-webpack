const autoprefixer = require('autoprefixer');
const tailwindcss = require('tailwindcss');

module.exports = () => {
    return {
        plugins: [autoprefixer, 'postcss-preset-env', tailwindcss]
    };
};
