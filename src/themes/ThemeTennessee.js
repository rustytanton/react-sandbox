import ThemeDefaults from './ThemeDefaults';

const theme = {
    id: "tennessee",
    title: "Tennessee Orange / White",
    properties: Object.assign({}, ThemeDefaults.properties, {
        "--colorPrimary": "#f77f00",
        "--colorSecondary": "white",
        "--colorLink": "var(--colorPrimary)"
    })
}

export default theme