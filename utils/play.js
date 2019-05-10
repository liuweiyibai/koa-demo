const jwt = require("jsonwebtoken")
const moment = require("moment")
const token = jwt.sign({ name: "a" }, "abc", {
  algorithm: "HS384",
  expiresIn: 60 * 60
})

console.log("====================================")
console.log(token)
console.log("====================================")

console.log("解析token")
const token1 =
  "eyJhbGciOiJIUzM4NCIsInR5cCI6IkpXVCJ9.eyJuYW1lIjoiYSIsImlhdCI6MTU1NzQ3NDI0MCwiZXhwIjoxNTU3NDc3ODQwfQ.M_YlbQB0gzvTqGIN71YfAESw0RgA5KHQ5GX7QowDsSFYteG_V96_ziCRjMSC2uO1"

try {
  const result = jwt.verify(token1, "abc")
  console.log("====================================")
  console.log(result)
  console.log(result.exp - result.iat)
  console.log("====================================")
} catch (err) {}
