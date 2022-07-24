const cloud = require('wx-server-sdk')
const fs = require('fs')
const path = require('path')
cloud.init({
  env: 'cloud1-3gwcftpz1f11b6e4',
})
exports.main = async (event, context) => {
  const fileStream = fs.createReadStream(path.join(__dirname,'demo.jpg'))
  return await cloud.uploadFile({
    cloudPath: 'tcbdemo.jpg',
    fileContent: fileStream,
  })
}