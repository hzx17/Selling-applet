const cloud = require('wx-server-sdk')
cloud.init({
  env:'cloud1-3gwcftpz1f11b6e4'
})
const db = cloud.database()
exports.main = async (event, context) => {
  return await db.collection('zhihu_daily')
    .get()
}