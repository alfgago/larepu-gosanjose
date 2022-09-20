module.exports = {
  content: [
        './resources/**/*.antlers.html',
        './resources/**/*.blade.php',
        './content/**/*.md'
    ],
    theme: {
        extend: {
            colors: {
                'teal': '#008483',
                'teal-light': '#a6d0cf'
            }
        }
    },
    plugins: [],
    important: true
}
