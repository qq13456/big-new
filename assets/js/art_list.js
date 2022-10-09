$(function () {
  const layer = layui.layer

  template.defaults.imports.dataFormat = function(date){
    const dt = new Date(date)

    var u = dt.getFullYear()
    var m = padZero(dt.getMonth() + 1)
    var d = padZero(dt.getDate())
    var hh = padZero(dt.getHours())
    var mm = padZero(dt.getMinutes())
    var ss = padZero(dt.getSeconds())

    return y + '-' + m + '-' + d + '' + hh +':' + mm + ':' + ss
  }
  let qs = {
    pagenum:1,
    pagesize:2,
    cate_id:'',
    state:''
  }
  loadArticleList()

  function loadArticleList() {
    $.ajax({
      method: 'GET',
      url:`/my/article/list?pagenum=${qs.pagenum}&pagesize=${qs.pagesize}&cate_id=${qs.cate_id}&state=${qs.state}`,
      
      success(res) {
        if (res.code !== 0) return layer.msg('获取文章列表失败')
        console.log((res));
        const str = template('tpl-list',res)
        $('tbody').empty().append(str)
      }
    })
  }
  
})