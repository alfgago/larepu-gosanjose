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
            futura: ['Futura'],
            futural: ['Futura Lt BT'],
            futuram: ['Futura Md BT'],
            futurabc: ['Futura BdCn BT'],
            futurabk: ['Futura Bk BT'],
            futuraltcn: ['Futura LtCn BT']
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
