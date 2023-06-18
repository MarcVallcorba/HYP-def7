import { b as buildAssetsURL } from '../../handlers/renderer.mjs';
import { mergeProps, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderAttr } from 'vue/server-renderer';
import { a as _export_sfc } from '../server.mjs';

const _imports_0 = "" + buildAssetsURL("return.d80a667b.png");
const _sfc_main = {
  methods: {
    scrollTo(section) {
      const element = document.getElementById(section);
      element.scrollIntoView({ behavior: "smooth" });
    }
  }
};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "return_top" }, _attrs))} data-v-61296279><a href="#" class="btn btn-default" data-v-61296279><img${ssrRenderAttr("src", _imports_0)} height="40" width="40" data-v-61296279></a></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Return.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const __nuxt_component_2 = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender], ["__scopeId", "data-v-61296279"]]);

export { __nuxt_component_2 as _ };
//# sourceMappingURL=Return-b6bae784.mjs.map
