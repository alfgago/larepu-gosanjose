module.exports = {
  content: [
        './resources/**/*.antlers.html',
        './resources/**/*.blade.php',
        './content/**/*.md'
    ],
    theme: {
        fontFamily: {
            sans: ['Inter', 'sans'],
            mono: ['Menlo', 'monospace'],
            futurab: ['Futura', 'Bold'],
            futural: ['Futura Lt BT', 'Light']
        },
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
