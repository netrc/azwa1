

let user = {
  role: 'unauthenticated',
  name: 'none',
  email: 'n@none'
}

const getUser = async () => {
  const response = await fetch("/.auth/me").catch( err => {
    console.log('caught error')
  })
  const payload = await response.json()
  const { clientPrincipal } = payload

  this.user = clientPrincipal
}

const envVal = (s) => ((typeof(process)!='undefined') && process.env[s] || `env[${s}] not defined`)

const main = async () => {
  const el = document.getElementById("hw")
  el.innerHTML = 'from index.js'

  console.log(`checking env: ${envVal('AZWA1_SOMETHING')}`)

  getUser()
  
}

main()
