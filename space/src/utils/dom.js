function setClass(el, className) {
    el.setAttribute('class', className)
}

export const hasClass = (el, className) => {
    const oldClassNames = el.className.split(' ')
    const index = oldClassNames.indexOf(className.trim())

    return index > -1
}

export const addClass = (el, className) => {
    const oldClassNames = el.className.split(' ')
    className = className.trim()

    if (!hasClass(el, className)) {
        setClass(el, oldClassNames.length === 1 ? className : [...oldClassNames, className].join(' '))
    }
    return el
}

export const removeClass = (el, className) => {
    const oldClassNames = el.className.split(' ')
    const index = oldClassNames.indexOf(className.trim())

    if (hasClass(el, className)) {
        oldClassNames.splice(index, 1)
        setClass(el, oldClassNames.join(' '))
    }
    return el
}
