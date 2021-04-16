<template>
  <div>
    <div class="section"
        v-if="_bili_space_info.official.role !== 0">
      <div class="row user-auth">
        <span class="auth-description"
          :title="_bili_space_info.official.title">
          <a class="auth-icon personal-auth"
            href="//account.bilibili.com/account/official/home"
            title="个人认证"
            target="_blank"
            v-if="[1,2,7].includes(_bili_space_info.official.role)"></a>
          <a class="auth-icon organization-auth"
            href="//account.bilibili.com/account/official/home"
            target="_blank"
            title="机构认证"
            v-if="[3,4,5,6].includes(_bili_space_info.official.role)"></a>
          {{ descText(_bili_space_info.official.title) }}
        </span>
      </div>
      <div class="row auth-detail">{{ _bili_space_info.official.desc }}</div>
    </div>
    <div class="section"
      v-if="this._bili_space_state === 'owner' && _bili_space_info.official.role === 0">
      <div class="row user-auth no-auth">
        <img class='icon-auth' src="../../../../public/img/icon-auth.png" alt="获得 bilibili 认证，享受多重认证福利！">
        <div class="no-auth-title">
          <a class="goto-auth"
            href="//account.bilibili.com/account/official/home"
            title="点此申请 bilibili 认证"
            target="_blank">点此申请 bilibili 认证<em class="icon i-m-ra"></em></a>
          <span>获得 bilibili 认证，享受多重认证福利！</span>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { mapGetters } from 'vuex'
export default {
  name: 'auth',
  methods: {
    descText(desc) {
      const type = this._bili_space_info.official.role
      const _type = [ 3, 4, 5, 6 ].includes(type) ? '机构' : '个人'
      const _desc = desc ? '：' + desc.decodeHTML() : ''

      return `bilibili${_type}认证${_desc}`
    },
  },
  computed: {
    ...mapGetters([ '_bili_space_info', '_bili_space_state' ]),
  },
}
</script>
