export const channels = state => state.channels
export const channelsWithArchives = state => state.channelsWithArchives
export const isChannelsLoad = state => state.isChannelsLoad
export const isChannelLoad = state => state.isChannelLoad
export const channel = state => state.channel

// 频道是否全部为空
export const isThereVideos = state => {
    const {channels, channelsWithArchives} = state
    if (channels.count === 0 && channelsWithArchives.length === 0) return false

    const list = channelsWithArchives.length === 0 ? channels.list : channelsWithArchives
    return list.some(({count}) => count > 0)
}
