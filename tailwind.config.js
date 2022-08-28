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
            futura: ['Futura', 'Bold'],
            futural: ['Futura Lt BT', 'Light'],
            futuram: ['Futura Md BT', 'Medium'],
            futurabc: ['Futura BdCn BT', 'BoldCondensed'],
            futurabk: ['Futura Bk BT', 'Book'],
            futuraltcn: ['Futura LtCn BT', 'LightCondensed']
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
