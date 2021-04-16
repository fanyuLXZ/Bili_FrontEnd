export const getCookie = sKey => {
  return decodeURIComponent(
      document.cookie.replace(
          new RegExp('(?:(?:^|.*;)\\s*' +
        // eslint-disable-next-line no-useless-escape
        encodeURIComponent(sKey).replace(/[\-\.\+\*]/g, '\\$&') +
        '\\s*\\=\\s*([^;]*).*$)|^.*$'),
          '$1'
      )
  ) || null
}

export const getOffset = el => {
  const rect = el.getBoundingClientRect()
  const win = el.ownerDocument.defaultView
  return {
    top: rect.top + win.pageYOffset,
    left: rect.left + win.pageXOffset,
  }
}

export const parseString = cookie => {
  const cookies = {}
  if (cookie !== undefined) {
    const params = cookie.split(';')
    params.forEach(item => {
      const key = item.split('=')[0].trim()
      const val = item.split('=')[1]
      cookies[key] = val
    })
  }
  return cookies
}

export const cutText = (text, n = 10) => {
  if (text.length > n) {
    return text.substr(0, 10) + '...'
  } else {
    return text
  }
}
