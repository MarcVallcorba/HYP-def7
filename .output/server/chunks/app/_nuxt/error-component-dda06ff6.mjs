import { _ as __nuxt_component_0 } from '../server.mjs';
import { _ as __nuxt_component_1 } from './nuxt-link-7dfe1055.mjs';
import { useSSRContext, withCtx, createTextVNode, createVNode } from 'vue';
import { ssrRenderComponent } from 'vue/server-renderer';
import 'ofetch';
import 'hookable';
import 'unctx';
import '@unhead/ssr';
import 'unhead';
import '@unhead/shared';
import 'vue-router';
import 'h3';
import 'ufo';
import 'destr';
import 'cookie-es';
import 'ohash';
import '@supabase/supabase-js';
import 'defu';
import '../../nitro/node-server.mjs';
import 'node-fetch-native/polyfill';
import 'node:http';
import 'node:https';
import 'unenv/runtime/fetch/index';
import 'scule';
import 'unstorage';
import 'radix3';
import 'node:fs';
import 'node:url';
import 'pathe';
import 'express';
import 'sequelize';
import 'url';
import 'path';

const _sfc_main = {
  __name: "error",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLayout = __nuxt_component_0;
      const _component_NuxtLink = __nuxt_component_1;
      _push(ssrRenderComponent(_component_NuxtLayout, _attrs, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<main${_scopeId}><h1${_scopeId}>Oops, something went wrong with your request</h1>`);
            _push2(ssrRenderComponent(_component_NuxtLink, { to: "/" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`RETURN TO HOME PAGE`);
                } else {
                  return [
                    createTextVNode("RETURN TO HOME PAGE")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</main>`);
          } else {
            return [
              createVNode("main", null, [
                createVNode("h1", null, "Oops, something went wrong with your request"),
                createVNode(_component_NuxtLink, { to: "/" }, {
                  default: withCtx(() => [
                    createTextVNode("RETURN TO HOME PAGE")
                  ]),
                  _: 1
                })
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("error.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const _sfc_main$1 = _sfc_main;

export { _sfc_main$1 as default };
//# sourceMappingURL=error-component-dda06ff6.mjs.map
