module.exports = {
    mode: "jit",
    content: ["./pages/**/*.jsx", "./component/**/*.jsx"],
    darkMode: false, // or 'media' or 'class'
    theme: {
        extend: {
            colors: {
                primary: "antiquewhite",
            },
        },
    },
    plugins: [],
}
