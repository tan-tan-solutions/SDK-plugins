var tantan = null
document.addEventListener('DOMContentLoaded', function () {
  var client_id = '42bb7f3d-f141-49d3-b9ba-5ce7f51cc1f9'
  tantan = new TanTanQrLogin({ client_id })
  tantan.login('qrcode', data => {
    alert('Hola, ' + data.scope_result.personal_data.first_name)
  })
})

function pay (el) {
  tantan.pay(el, data => {
    alert(data.res.detail)
  })
}
