import ThemeDefaults from './ThemeDefaults';

const theme = {
    id: "georgia",
    title: "Georgia Red / Black",
    properties: Object.assign({}, ThemeDefaults.properties, {
        "--colorPrimary": "red",
        "--colorSecondary": "black",
        "--logo": "url(/images/logo-georgia.svg)"
    })
}

export default theme