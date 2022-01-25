// const files = require.context('.', true, /\.js$/)
import home from './home'
import component from './component'
import common from './common'

let config = {
    home,
    component,
    common,
}

// files.keys().forEach((key) => {
//     if (key === './index.js') return

//     config = Object.assign(config, files(key).default)
// })

export default config
