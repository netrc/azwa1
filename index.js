

let user = {
  role: 'unauthenticated',
  name: 'none',
  email: 'n@none'
}

const aAny = (a, z) => a.some( x => x==z )
const isEditor = cp => aAny(cp.userRoles,'editor')

const getUser = async () => {
  const response = await fetch("/.auth/me").catch( err => {
    console.log('caught error')
  })
  const payload = await response.json()
  const { clientPrincipal } = payload

  if (clientPrincipal) {
    console.log(`cp userDetails: ${clientPrincipal.userDetails} isEditor:${isEditor(clientPrincipal)}`)
    console.dir(clientPrincipal)
    const el = document.getElementById("hw")
    el.innerHTML = `auth roles: ${clientPrincipal.userRoles.join(', ')}`
  }
  this.user = clientPrincipal
}
const getUuid = async () => {
  const UUIDURL = "https://httpbin.org/uuid"
  const response = await fetch(UUIDURL).catch( err => {
    console.log('caught error')
  })
  const payload = await response.json()
console.dir(payload)
  const { uuid } = payload
console.dir(uuid)
  const el = document.getElementById("uuid")
  el.innerHTML = `uuid : ${uuid}`
}

const envVal = (s) => ((typeof(process)!='undefined') && process.env[s] || `env[${s}] not defined`)

const main = async () => {
  const el = document.getElementById("hw")
  el.innerHTML = 'no auth yet'

  console.log(`checking env: ${envVal('AZWA1_SOMETHING')}`)

  getUser()
  
  getUuid()
}

main()
