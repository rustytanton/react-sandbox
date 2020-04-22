import ThemeDefaults from './ThemeDefaults';

const theme = {
    id: "florida",
    title: "Florida Blue / Orange",
    properties: Object.assign({}, ThemeDefaults.properties, {
        "--colorPrimary": "#0021A5",
        "--colorSecondary": "#FA4616",
        "--logo": "url(/images/logo-florida.svg)"
    })
}

export default theme