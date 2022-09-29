$(function(){
  // 点击去注册
  $('#go2Reg').on('click',function(){
    $('.login-wrap').hide()
    $('.reg-wrap').show()
  })

  // 点击去登录
  $('#go2Login').on('click',function(){
    $('.reg-wrap').hide()
    $('.login-wrap').show()
  })
// 表单验证
  const form = layui.form
  const layer = layui.layer
  form.verify({
    pwd:[/^[\S]{6,12}$/,'密码6-12位,不能出现空格'],

    repwd:function(value) {
      let pwd = $('.reg-wrap [name=password]').val()
      if(pwd !== value) {
        return '两次密码不一样'
      }
    }
  })


  
  // 监听注册
  $('#formReg').on('submit',function(e){
    e.preventDefault()

    $.ajax({
      method:'POST',
      url:'/api/reg',
      data:$(this).serialize(),
      success(res) {
        if(res.code !== 0) return layer.msg(res.message)
        layer.msg('注册成功');
        $('#go2Login').click()
      }
    })
  })
  // 监听登录
  $('#formLogin').on('submit',function(e){
    e.preventDefault()

    $.ajax({
      method:'POST',
      url:'/api/login',
      data:$(this).serialize(),
      success(res) {
        if(res.code !== 0) return layer.msg(res.message)
        localStorage.setItem('big_news_token',res.token)
        location.href = '/home.html'
      }
    })
  })
})