

let user = {
  role: 'unauthenticated',
  name: 'none',
  email: 'n@none'
}

const aAny = (a, z) => a.some( x => x==z )

const getUser = async () => {
  const response = await fetch("/.auth/me").catch( err => {
    console.log('caught error')
  })
  const payload = await response.json()
  const { clientPrincipal } = payload

  const isEditor = cp => aAny(cp.userRoles,'editor')
  console.log(`cp userDetails: ${clientPrincipal.userDetails} isEditor:${isEditor}`)
  console.dir(clientPrincipal)

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
