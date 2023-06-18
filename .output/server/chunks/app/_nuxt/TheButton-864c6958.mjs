import { mergeProps, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderList, ssrInterpolate, ssrRenderSlot } from 'vue/server-renderer';
import { a as _export_sfc } from '../server.mjs';

const _sfc_main$1 = {
  props: {
    sections: {
      type: Array,
      required: true
    }
  },
  methods: {
    scrollTo(section) {
      const element = document.getElementById(section);
      element.scrollIntoView({ behavior: "smooth" });
    }
  }
};
function _sfc_ssrRender$1(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(mergeProps({
    class: "overview",
    id: "desktop"
  }, _attrs))} data-v-7f2a6f35><p data-v-7f2a6f35>Browse the page \u2935</p><ul data-v-7f2a6f35><!--[-->`);
  ssrRenderList($props.sections, (section, index) => {
    _push(`<li data-v-7f2a6f35><a data-v-7f2a6f35>${ssrInterpolate(section)}</a></li>`);
  });
  _push(`<!--]--></ul></div>`);
}
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Overview.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const __nuxt_component_1 = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["ssrRender", _sfc_ssrRender$1], ["__scopeId", "data-v-7f2a6f35"]]);
const _sfc_main = {
  props: {
    color: {
      type: String,
      required: true
    }
  }
};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<button${ssrRenderAttrs(mergeProps({
    class: "TheButton",
    style: { backgroundColor: $props.color }
  }, _attrs))} data-v-0ef7e6d2><span data-v-0ef7e6d2>`);
  ssrRenderSlot(_ctx.$slots, "default", {}, () => {
    _push(`Click`);
  }, _push, _parent);
  _push(`</span></button>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/TheButton.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const __nuxt_component_3 = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender], ["__scopeId", "data-v-0ef7e6d2"]]);

export { __nuxt_component_1 as _, __nuxt_component_3 as a };
//# sourceMappingURL=TheButton-864c6958.mjs.map
