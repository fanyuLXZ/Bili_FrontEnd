import * as types from 'mutations'
import * as actions from './actions'
import * as getters from './getters'

const state = {
  relations: {
    following: 0,
    whisper: 0,
    black: 0,
    follower: 0,
  },
  knightsList: [],
  knightsCount: 0,
  relationList: [],
  defaultGroupCount: 0,
  attribute: 0, // 当前登录用户与当前空间UP主的关系，默认是0
  isFansListLoad: false,
  userTag: [],
  userTagList: [],
  isLoad: false, // 接口是否请求失败
  isUserTaglistLoad: false,
  isKnightLoad: false,
  isRelationListLoad: false,
  accRelation: {
    relation: {},
    beRelation: {},
  },
}

const mutations = {
  [types.FETCH_NUMBERS_SUCCESS](state, data) {
    state.relations = data
  },
  [types.GETRELATIONLIST_SUCCESS](state, data) {
    state.relationList = data
    state.isRelationListLoad = true
  },
  [types.GETRELATIONLIST_START](state) {
    state.isRelationListLoad = false
  },
  [types.GETRELATIONLIST_FAILURE](state) {
    state.relationList = []
    state.isRelationListLoad = true
  },
  // 更新用户粉丝列表的元信息
  [types.UPDATE_RELATION](state, { mid, attribute }) {
    const index = state.relationList.findIndex(item => item.mid === mid)
    state.relationList[index].attribute = attribute
  },
  [types.RELATION_WITH_UPER](state, attr) {
    state.attribute = attr
  },
  [types.GETUSERTAG_SUCCESS](state, data) {
    state.relationList = data
    state.isLoad = true
  },
  [types.GETUSERTAG_START](state) {
    state.isLoad = false
  },
  [types.GETUSERTAG_FAILURE](state) {
    state.isLoad = true
  },
  [types.GETUSERTAGS_START](state) {
    state.isUserTaglistLoad = false
  },
  [types.GETUSERTAGS_SUCCESS](state, data) {
    state.userTagList = data
    state.isUserTaglistLoad = true
    // 将“默认分组”的数量拿出来，单独赋值
    const defaultTag = state.userTagList.find(item => item.tagid === 0)
    if (defaultTag) {
      state.defaultGroupCount = defaultTag.count
    }
  },
  [types.GETUSERTAGS_FAILURE](state) {
    state.isUserTaglistLoad = true
  },
  [types.GETKNIGHT_START](state) {
    state.isRelationListLoad = false
  },
  [types.GETKNIGHT_SUCCESS](state, { count }) {
    state.knightsCount = count
    state.isRelationListLoad = true
  },
  /* eslint-disable */
  [types.GET_ACCRELATION_SUCCESS](state, { relation, be_relation }) {
    state.accRelation.relation = relation
    state.accRelation.beRelation = be_relation
  },
  /* eslint-enable */
}

export default {
  actions,
  getters,
  state,
  mutations,
}
