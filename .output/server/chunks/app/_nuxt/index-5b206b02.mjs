import { _ as __nuxt_component_1 } from './nuxt-link-7dfe1055.mjs';
import { _ as __nuxt_component_1$1, a as __nuxt_component_3 } from './TheButton-864c6958.mjs';
import { _ as __nuxt_component_2 } from './Return-b6bae784.mjs';
import { a as _export_sfc, u as useRuntimeConfig } from '../server.mjs';
import { ref, withCtx, createVNode, createTextVNode, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderAttr, ssrRenderComponent, ssrRenderList, ssrRenderStyle, ssrInterpolate } from 'vue/server-renderer';
import { _ as _imports_0 } from './handshake-06cb928c.mjs';
import 'ufo';
import '../../handlers/renderer.mjs';
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

const _sfc_main = {
  __name: "index",
  __ssrInlineRender: true,
  setup(__props) {
    const team = ref([]);
    fetchTeamData();
    async function fetchTeamData() {
      const response = await fetch(useRuntimeConfig().baseURL + "/server/teams");
      const data = await response.json();
      team.value = data;
    }
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_1;
      const _component_Overview = __nuxt_component_1$1;
      const _component_Return = __nuxt_component_2;
      const _component_TheButton = __nuxt_component_3;
      _push(`<main${ssrRenderAttrs(_attrs)} data-v-653d5479><div class="main-team" data-v-653d5479><img${ssrRenderAttr("src", _imports_0)} alt="handshake" class="handshake-img" data-v-653d5479><div class="image-container2" data-v-653d5479><div class="overlay" data-v-653d5479> Our team</div></div></div><ol class="breadcrumb" data-v-653d5479><li class="breadcrumb-item" data-v-653d5479>`);
      _push(ssrRenderComponent(_component_NuxtLink, { to: "/team" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<a data-v-653d5479${_scopeId}>Our team</a>`);
          } else {
            return [
              createVNode("a", null, "Our team")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</li></ol>`);
      _push(ssrRenderComponent(_component_Overview, {
        class: "overview",
        sections: ["THE TEAM", "Members"]
      }, null, _parent));
      _push(ssrRenderComponent(_component_Return, { class: "return_top" }, null, _parent));
      _push(`<div class="thebody" data-v-653d5479><h2 id="THE TEAM" data-v-653d5479>THE TEAM</h2> At Ivy Ventures, our success is driven by our exceptional team of professionals who bring a wealth of experience, expertise, and passion to the world of venture capital. With a diverse range of backgrounds and skills, our team is dedicated to supporting innovative startups in various areas. By combining deep industry knowledge, strategic insights, and a collaborative approach, we strive to make a meaningful impact on the businesses we partner with. Each member of our team brings a unique perspective and skill set that we have every intention to share with our partners. You can find out more about each member of our team by clicking the button below! <h2 data-v-653d5479> Members</h2><!--[-->`);
      ssrRenderList(team.value, (member) => {
        _push(`<div class="flip-card" data-v-653d5479><div class="flip-card-inner" data-v-653d5479><div class="flip-card-front" data-v-653d5479><img${ssrRenderAttr("src", member.image)} alt="Avatar" style="${ssrRenderStyle({ "width": "20vw", "height": "20vw" })}" data-v-653d5479></div><div class="flip-card-back" data-v-653d5479><div class="content" data-v-653d5479><h1 data-v-653d5479>${ssrInterpolate(member.name)}</h1><p data-v-653d5479>${ssrInterpolate(member.role)}</p>`);
        _push(ssrRenderComponent(_component_NuxtLink, {
          to: "/team/" + member.id
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(ssrRenderComponent(_component_TheButton, { color: "#679436" }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`See Profile`);
                  } else {
                    return [
                      createTextVNode("See Profile")
                    ];
                  }
                }),
                _: 2
              }, _parent2, _scopeId));
            } else {
              return [
                createVNode(_component_TheButton, { color: "#679436" }, {
                  default: withCtx(() => [
                    createTextVNode("See Profile")
                  ]),
                  _: 1
                })
              ];
            }
          }),
          _: 2
        }, _parent));
        _push(`</div></div></div></div>`);
      });
      _push(`<!--]--></div></main>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/team/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const index = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-653d5479"]]);

export { index as default };
//# sourceMappingURL=index-5b206b02.mjs.map
