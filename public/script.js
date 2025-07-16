console.log('chrome-ex-github.script.js injected');

function addButton_CreatePullRequestToDev() {
  var button = document.createElement('button')
  button.className = 'flex-shrink-0 flex-self-start flex-md-self-center Button--secondary Button--small Button m-0 mr-md-2 mb-2'
  button.innerText = "PR to Dev"

  var headerMetas = document.querySelectorAll('div.gh-header-meta')
  if (headerMetas.length > 0) {
    var headerMeta = headerMetas[0]
    var baseRef = headerMeta.querySelector('span.base-ref>a>span').innerText
    var headRef = headerMeta.querySelector('span.head-ref>a>span').innerText
    console.log('headRef', headRef, 'baseRef', baseRef)
    if (baseRef === "main") {
    headerMeta.insertBefore(button, headerMeta.firstElementChild)
    }
  }

  button.onclick = async () => {
    console.log('chrome-ex-github.script.js.onclick', headerMetas)
    var locationHref = window.location.href
    console.log('locationHref', locationHref)

    var [url, prId] = locationHref.split("/pull/")
    url += "/compare/develop..." + headRef + `?quick_pull=1&body=%23${prId}`
    console.log('url', encodeURI(url))

    open(url, '_blank')
  }

}

addButton_CreatePullRequestToDev();
