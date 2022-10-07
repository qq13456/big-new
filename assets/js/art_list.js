$(function () {

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
      }
    })
  }
})