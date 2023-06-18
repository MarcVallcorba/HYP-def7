import { b as buildAssetsURL } from '../../handlers/renderer.mjs';
import { _ as __nuxt_component_1$1 } from './nuxt-link-7dfe1055.mjs';
import { useSSRContext, mergeProps, resolveComponent, withCtx, createVNode, createTextVNode } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderSlot, ssrRenderAttr, ssrRenderStyle } from 'vue/server-renderer';
import { a as _export_sfc } from '../server.mjs';
import 'vue-bundle-renderer/runtime';
import 'h3';
import '../../nitro/node-server.mjs';
import 'node-fetch-native/polyfill';
import 'node:http';
import 'node:https';
import 'destr';
import 'ofetch';
import 'unenv/runtime/fetch/index';
import 'hookable';
import 'scule';
import 'defu';
import 'ohash';
import 'ufo';
import 'unstorage';
import 'radix3';
import 'node:fs';
import 'node:url';
import 'pathe';
import 'express';
import 'sequelize';
import 'url';
import 'path';
import 'unctx';
import '@unhead/ssr';
import 'unhead';
import '@unhead/shared';
import 'vue-router';
import 'cookie-es';
import '@supabase/supabase-js';

const _imports_0$1 = "" + buildAssetsURL("ivylogo.e5d29e05.png");
const _sfc_main$2 = {
  mounted() {
    window.addEventListener("scroll", this.handleScroll);
  },
  beforeDestroy() {
    window.removeEventListener("scroll", this.handleScroll);
  },
  methods: {
    handleScroll() {
      const headerElement = this.$refs.headerElement;
      const scrollPosition = window.pageYOffset || document.documentElement.scrollTop;
      const blurValue = Math.min(scrollPosition / 20, 5);
      headerElement.style.backdropFilter = `blur(${blurValue}px)`;
    }
  }
};
function _sfc_ssrRender$2(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_router_link = resolveComponent("router-link");
  const _component_NuxtLink = __nuxt_component_1$1;
  _push(`<header${ssrRenderAttrs(mergeProps({
    ref: "headerElement",
    id: "header_desktop"
  }, _attrs))}>`);
  _push(ssrRenderComponent(_component_router_link, {
    class: "nav-link",
    to: "/"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<h1 class="ivylogo"${_scopeId}><img class="logo" alt="Ivy Ventures logo"${ssrRenderAttr("src", _imports_0$1)}${_scopeId}></h1>`);
      } else {
        return [
          createVNode("h1", { class: "ivylogo" }, [
            createVNode("img", {
              class: "logo",
              alt: "Ivy Ventures logo",
              src: _imports_0$1
            })
          ])
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`<nav><ul><li class="dropdown">`);
  _push(ssrRenderComponent(_component_NuxtLink, { to: "/how_it_works" }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`How it works `);
      } else {
        return [
          createTextVNode("How it works ")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</li><li class="dropdown">`);
  _push(ssrRenderComponent(_component_NuxtLink, { to: "/team" }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`Our team`);
      } else {
        return [
          createTextVNode("Our team")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</li><li class="dropdown">`);
  _push(ssrRenderComponent(_component_NuxtLink, { to: "/areas" }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`Areas`);
      } else {
        return [
          createTextVNode("Areas")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`<ul class="down"><li>`);
  _push(ssrRenderComponent(_component_NuxtLink, { to: "/areas" }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`All areas`);
      } else {
        return [
          createTextVNode("All areas")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</li><li>`);
  _push(ssrRenderComponent(_component_NuxtLink, { to: "/areas/projects_by_area" }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`Projects by area`);
      } else {
        return [
          createTextVNode("Projects by area")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</li></ul></li><li class="dropdown">`);
  _push(ssrRenderComponent(_component_NuxtLink, { to: "/projects" }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`Projects`);
      } else {
        return [
          createTextVNode("Projects")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`<ul class="down"><li>`);
  _push(ssrRenderComponent(_component_NuxtLink, { to: "/projects/top5projects" }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`Top 5 projects`);
      } else {
        return [
          createTextVNode("Top 5 projects")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</li><li>`);
  _push(ssrRenderComponent(_component_NuxtLink, { to: "/projects" }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`All projects`);
      } else {
        return [
          createTextVNode("All projects")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</li></ul></li><li class="dropdown">`);
  _push(ssrRenderComponent(_component_NuxtLink, { to: "/contact" }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`Contact us`);
      } else {
        return [
          createTextVNode("Contact us")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</li></ul></nav></header>`);
}
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/TheHeader.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const __nuxt_component_0 = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["ssrRender", _sfc_ssrRender$2]]);
const _imports_0 = "" + buildAssetsURL("twitter.e6ca9110.png");
const _imports_1 = "" + buildAssetsURL("instagram.bd9d1254.png");
const _imports_2 = "" + buildAssetsURL("facebook.dd16b454.png");
const _imports_3 = "" + buildAssetsURL("linkedin.7dcbc614.png");
const _sfc_main$1 = {};
function _sfc_ssrRender$1(_ctx, _push, _parent, _attrs) {
  const _component_NuxtLink = __nuxt_component_1$1;
  _push(`<footer${ssrRenderAttrs(_attrs)} data-v-ddeeccd0><div style="${ssrRenderStyle({ "float": "left" })}" data-v-ddeeccd0> +49 1 55 66 55 66 <br data-v-ddeeccd0> ivy@contact.com </div><div style="${ssrRenderStyle({ "float": "center" })}" data-v-ddeeccd0>`);
  _push(ssrRenderComponent(_component_NuxtLink, { to: "/" }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<p data-v-ddeeccd0${_scopeId}>Home </p>`);
      } else {
        return [
          createVNode("p", null, "Home ")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(` | `);
  _push(ssrRenderComponent(_component_NuxtLink, { to: "/how_it_works" }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<p data-v-ddeeccd0${_scopeId}>How it works </p>`);
      } else {
        return [
          createVNode("p", null, "How it works ")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(` | `);
  _push(ssrRenderComponent(_component_NuxtLink, { to: "/team" }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<p data-v-ddeeccd0${_scopeId}>Our team </p>`);
      } else {
        return [
          createVNode("p", null, "Our team ")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(` | `);
  _push(ssrRenderComponent(_component_NuxtLink, { to: "/areas" }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<p data-v-ddeeccd0${_scopeId}>Areas </p>`);
      } else {
        return [
          createVNode("p", null, "Areas ")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(` | `);
  _push(ssrRenderComponent(_component_NuxtLink, { to: "/projects" }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<p data-v-ddeeccd0${_scopeId}>Projects </p>`);
      } else {
        return [
          createVNode("p", null, "Projects ")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</div><div align="center" data-v-ddeeccd0> Are you interested? For further information `);
  _push(ssrRenderComponent(_component_NuxtLink, { to: "/contact" }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<p data-v-ddeeccd0${_scopeId}>Contact us </p>`);
      } else {
        return [
          createVNode("p", null, "Contact us ")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</div><br data-v-ddeeccd0><br data-v-ddeeccd0><div class="social" align="right" data-v-ddeeccd0><a href="https://twitter.com" style="${ssrRenderStyle({ "color": "black" })}" data-v-ddeeccd0><img${ssrRenderAttr("src", _imports_0)} height="20" width="20" data-v-ddeeccd0>#IvyVentures\u2003</a><a href="https://instagram.com" style="${ssrRenderStyle({ "color": "black" })}" data-v-ddeeccd0><img${ssrRenderAttr("src", _imports_1)} height="20" width="20" data-v-ddeeccd0> @IvyVentures\u2003</a><a href="https://facebook.com" style="${ssrRenderStyle({ "color": "black" })}" data-v-ddeeccd0><img${ssrRenderAttr("src", _imports_2)} height="20" width="20" data-v-ddeeccd0> @IvyVentures\u2003</a><a href="https://linkedin.com" style="${ssrRenderStyle({ "color": "black" })}" data-v-ddeeccd0><img${ssrRenderAttr("src", _imports_3)} height="20" width="20" data-v-ddeeccd0> @IvyVentures\u2003</a></div></footer>`);
}
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/TheFooter.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const __nuxt_component_1 = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["ssrRender", _sfc_ssrRender$1], ["__scopeId", "data-v-ddeeccd0"]]);
const _sfc_main = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  const _component_TheHeader = __nuxt_component_0;
  const _component_TheFooter = __nuxt_component_1;
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "page" }, _attrs))}>`);
  _push(ssrRenderComponent(_component_TheHeader, null, null, _parent));
  ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
  _push(ssrRenderComponent(_component_TheFooter, null, null, _parent));
  _push(`</div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("layouts/default.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const _default = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);

export { _default as default };
//# sourceMappingURL=default-3a052ee3.mjs.map
