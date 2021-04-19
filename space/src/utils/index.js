import BFS from '@blink-common/component.bfs-utils'

const _bfs = new BFS()

export const trimProtocol = raw => {
    if (!raw) return ''
    return raw.replace(/^https?:/g, '')
}

export const bfsImg = (url, w, h, q, o = 1, restOptions) => {
    if (!url) return ''
    const ratio = 2
    const width = (w && w * ratio) || w
    const height = (h && h * ratio) || h
    // eslint-disable-next-line
    return url.includes('gif') ? trimProtocol(url) : trimProtocol(_bfs.getImageLink(url, Math.round(width), Math.round(height), {
        o,
        q, ...restOptions
    }))
}