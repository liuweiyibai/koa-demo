const fs = require("fs")
const util = require("util")

module.exports = {
  readFile: (...args) => {
    return util.promisify(fs.readFile).apply(null, [...args])
  }
}
