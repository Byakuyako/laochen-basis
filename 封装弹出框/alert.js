function lcAlert(args) {
  var zhezhao = document.createElement("div")
  zhezhao.className = "zhezhao"
  zhezhao.innerHTML = `
    <div class="alert">
      <div class="header">
        <span class="title">
        {{args.title}}
        </span>
        <span class="close">x</span>
      </div>
      <div class="main">{{args.content}}</div>
      <div class="btnList">
        <div class="btn confirm">确定</div>
        <div class="btn cancel">取消</div>
      </div>
    </div>
  `

  var  body = document.querySelector('body')
  body.appendChild(zhezhao)

  // 获取close元素
  var closeDiv = document.querySelector('.close')

  closeDiv.onclick = function () {
    body.removeChild(zhezhao)
  }

  var confirmDiv = document.querySelector('.btn.confirm')
  confirmDiv.onclick = function () {
    args.confirmFn()
    if (typeof args.confirmFn() === 'function'){
      args.confirmFn()
    }else {
      console.error('传入的参数有误,没有设置确认函数!')
    }
    body.removeChild(zhezhao)
  }

  var cancelDiv = document.querySelector('.btn,cancel')
  cancelDiv.onclick = function () {
    if (typeof args.cancelFn === 'function'){
      args.cancelFn()
    }else {
      console.error('传入的参数,没有设置取消函数!')
    }
    body.removeChild(zhezhao)
  }
}