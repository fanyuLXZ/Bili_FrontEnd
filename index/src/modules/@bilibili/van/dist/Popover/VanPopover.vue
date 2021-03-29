<template>

</template>

<script>
export default {
  name: "VanPopover",
  mixins: [r.default],
  props: {
    trigger: {
      type: String, default: "click", validator: function (e) {
        return ["click", "focus", "hover", "manual"].indexOf(e) > -1
      }
    },
    openDelay: {type: Number, default: 0},
    title: String,
    disabled: Boolean,
    content: String,
    reference: {},
    popperClass: String,
    width: {},
    visibleArrow: {default: !0},
    arrowOffset: {type: Number, default: 0},
    transition: {type: String, default: "fade-in-linear"}
  },
  computed: {
    tooltipId: function () {
      return "van-popover-" + (0, n.generateId)()
    }
  },
  watch: {
    showPopper: function (e) {
      e ? this.$emit("show") : this.$emit("hide")
    }
  },
  mounted: function () {
    var e = this, t = this.referenceElm = this.reference || this.$refs.reference,
        o = this.popper || this.$refs.popper;
    if (!t && this.$slots.reference && this.$slots.reference[0] && (t = this.referenceElm = this.$slots.reference[0].elm), t && ((0, i.addClass)(t, "van-popover__reference"), t.setAttribute("aria-describedby", this.tooltipId), t.setAttribute("tabindex", 0), o.setAttribute("tabindex", 0), "click" !== this.trigger && ((0, i.on)(t, "focusin", function () {
      e.handleFocus();
      var o = t.__vue__;
      o && o.focus && o.focus()
    }), (0, i.on)(o, "focusin", this.handleFocus), (0, i.on)(t, "focusout", this.handleBlur), (0, i.on)(o, "focusout", this.handleBlur)), (0, i.on)(t, "keydown", this.handleKeydown), (0, i.on)(t, "click", this.handleClick)), "click" === this.trigger) (0, i.on)(t, "click", this.doToggle), (0, i.on)(document, "click", this.handleDocumentClick); else if ("hover" === this.trigger) (0, i.on)(t, "mouseenter", this.handleMouseEnter), (0, i.on)(o, "mouseenter", this.handleMouseEnter), (0, i.on)(t, "mouseleave", this.handleMouseLeave), (0, i.on)(o, "mouseleave", this.handleMouseLeave); else if ("focus" === this.trigger) {
      var r = !1;
      if ([].slice.call(t.children).length) for (var n = t.childNodes, s = n.length, l = 0; l < s; l++) if ("INPUT" === n[l].nodeName || "TEXTAREA" === n[l].nodeName) {
        (0, i.on)(n[l], "focusin", this.doShow), (0, i.on)(n[l], "focusout", this.doClose), r = !0;
        break
      }
      if (r) return;
      "INPUT" === t.nodeName || "TEXTAREA" === t.nodeName ? ((0, i.on)(t, "focusin", this.doShow), (0, i.on)(t, "focusout", this.doClose)) : ((0, i.on)(t, "mousedown", this.doShow), (0, i.on)(t, "mouseup", this.doClose))
    }
  },
  methods: {
    doToggle: function () {
      this.showPopper = !this.showPopper
    }, doShow: function () {
      this.showPopper = !0
    }, doClose: function () {
      this.showPopper = !1
    }, handleFocus: function () {
      (0, i.addClass)(this.referenceElm, "focusing"), "manual" !== this.trigger && (this.showPopper = !0)
    }, handleClick: function () {
      (0, i.removeClass)(this.referenceElm, "focusing")
    }, handleBlur: function () {
      (0, i.removeClass)(this.referenceElm, "focusing"), "manual" !== this.trigger && (this.showPopper = !1)
    }, handleMouseEnter: function () {
      var e = this;
      clearTimeout(this._timer), this.openDelay ? this._timer = setTimeout(function () {
        e.showPopper = !0
      }, this.openDelay) : this.showPopper = !0
    }, handleKeydown: function (e) {
      27 === e.keyCode && "manual" !== this.trigger && this.doClose()
    }, handleMouseLeave: function () {
      var e = this;
      clearTimeout(this._timer), this._timer = setTimeout(function () {
        e.showPopper = !1
      }, 200)
    }, handleDocumentClick: function (e) {
      var t = this.reference || this.$refs.reference, o = this.popper || this.$refs.popper;
      !t && this.$slots.reference && this.$slots.reference[0] && (t = this.referenceElm = this.$slots.reference[0].elm), this.$el && t && !this.$el.contains(e.target) && !t.contains(e.target) && o && !o.contains(e.target) && (this.showPopper = !1)
    }, handleAfterEnter: function () {
      this.$emit("after-enter")
    }, handleAfterLeave: function () {
      this.$emit("after-leave"), this.doDestroy()
    }
  },
  destroyed: function () {
    var e = this.reference;
    (0, i.off)(e, "click", this.doToggle), (0, i.off)(e, "mouseup", this.doClose), (0, i.off)(e, "mousedown", this.doShow), (0, i.off)(e, "focusin", this.doShow), (0, i.off)(e, "focusout", this.doClose), (0, i.off)(e, "mouseleave", this.handleMouseLeave), (0, i.off)(e, "mouseenter", this.handleMouseEnter), (0, i.off)(document, "click", this.handleDocumentClick)
  }
}
</script>

<style scoped>

</style>