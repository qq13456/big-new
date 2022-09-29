// 每次发起真正的请求之前，都会经过的地方
$.ajaxPrefilter(function(config) {

  const format2Json = (source) => {
    let target ={}
    source.split('&').forEach((el)=>{
      let kv = el.split('=')
      target[kv[0]] = kv[1]
    })
    return JSON.stringify(target)
  }
  // 在此将基准地址拼接一下
  config.url = 'http://big-event-vue-api-t.itheima.net' + config.url

  // 统一设置请求头 Content-Type 值
  config.contentType = 'application/json'

  // 统一设置请求的参数 - post 请求
  config.data = format2Json(config.data)
})