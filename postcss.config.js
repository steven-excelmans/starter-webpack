const tailwindcss = require('tailwindcss');

module.exports = () => {
    return {
        plugins: ['postcss-preset-env', tailwindcss]
    };
};
