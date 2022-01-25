// const files = require.context('.', true, /\.js$/)

// let config = {}

// files.keys().forEach((key) => {
//     if (key === './index.js') return

//     config = Object.assign(config, files(key).default)
// })

import home from './home'
import component from './component'
import common from './common'
import brand from './brand'

let config = {
    home,
    component,
    common,
    brand,
}

export default config
