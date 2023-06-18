import { b as buildAssetsURL } from '../../handlers/renderer.mjs';
import { _ as __nuxt_component_1 } from './nuxt-link-7dfe1055.mjs';
import { _ as __nuxt_component_1$1, a as __nuxt_component_3 } from './TheButton-864c6958.mjs';
import { _ as __nuxt_component_2 } from './Return-b6bae784.mjs';
import { withCtx, createVNode, createTextVNode, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderStyle, ssrRenderAttr } from 'vue/server-renderer';
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

const _imports_0 = "" + buildAssetsURL("health.889a246c.jpg");
const _imports_1 = "" + buildAssetsURL("transport.78d59f98.png");
const _imports_2 = "" + buildAssetsURL("ecolo.d5d8646f.jpg");
const _sfc_main = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  const _component_NuxtLink = __nuxt_component_1;
  const _component_Overview = __nuxt_component_1$1;
  const _component_Return = __nuxt_component_2;
  const _component_TheButton = __nuxt_component_3;
  _push(`<main${ssrRenderAttrs(_attrs)} data-v-4b185c4d><div class="introduction" data-v-4b185c4d><div id="title" data-v-4b185c4d><p data-v-4b185c4d>Projects by Area</p></div></div><ol class="breadcrumb" data-v-4b185c4d><li class="breadcrumb-item" data-v-4b185c4d>`);
  _push(ssrRenderComponent(_component_NuxtLink, { to: "/areas" }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<a data-v-4b185c4d${_scopeId}>Areas</a>`);
      } else {
        return [
          createVNode("a", null, "Areas")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</li><li class="breadcrumb-item" data-v-4b185c4d>`);
  _push(ssrRenderComponent(_component_NuxtLink, { to: "/areas/projects_by_area" }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<a data-v-4b185c4d${_scopeId}>Projects by Area</a>`);
      } else {
        return [
          createVNode("a", null, "Projects by Area")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</li></ol>`);
  _push(ssrRenderComponent(_component_Overview, {
    class: "overview",
    sections: ["All projects", "Health", "Transport", "Environment"]
  }, null, _parent));
  _push(ssrRenderComponent(_component_Return, { class: "return_top" }, null, _parent));
  _push(`<div class="thebody" data-v-4b185c4d><div id="All projects" data-v-4b185c4d><h2 data-v-4b185c4d>Projects</h2><div class="button-center" data-v-4b185c4d>`);
  _push(ssrRenderComponent(_component_NuxtLink, { to: "/areas" }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(ssrRenderComponent(_component_TheButton, { color: "#20394b" }, {
          default: withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(`See all Areas`);
            } else {
              return [
                createTextVNode("See all Areas")
              ];
            }
          }),
          _: 1
        }, _parent2, _scopeId));
      } else {
        return [
          createVNode(_component_TheButton, { color: "#20394b" }, {
            default: withCtx(() => [
              createTextVNode("See all Areas")
            ]),
            _: 1
          })
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</div><div class="button-center" data-v-4b185c4d>`);
  _push(ssrRenderComponent(_component_NuxtLink, { to: "/projects" }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(ssrRenderComponent(_component_TheButton, { color: "#20394b" }, {
          default: withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(`See all projects`);
            } else {
              return [
                createTextVNode("See all projects")
              ];
            }
          }),
          _: 1
        }, _parent2, _scopeId));
      } else {
        return [
          createVNode(_component_TheButton, { color: "#20394b" }, {
            default: withCtx(() => [
              createTextVNode("See all projects")
            ]),
            _: 1
          })
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</div></div><br data-v-4b185c4d><br data-v-4b185c4d><br data-v-4b185c4d><div id="Health" data-v-4b185c4d><h2 data-v-4b185c4d>Health is so precious!</h2><br data-v-4b185c4d><br data-v-4b185c4d><div class="rectangle_health" data-v-4b185c4d><br data-v-4b185c4d><div id="content" style="${ssrRenderStyle({ "float": "left" })}" data-v-4b185c4d>`);
  _push(ssrRenderComponent(_component_NuxtLink, { to: "/areas/health" }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<img id="presentation"${ssrRenderAttr("src", _imports_0)} data-v-4b185c4d${_scopeId}>`);
      } else {
        return [
          createVNode("img", {
            id: "presentation",
            src: _imports_0
          })
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</div><br data-v-4b185c4d><br data-v-4b185c4d><br data-v-4b185c4d><br data-v-4b185c4d><div class="button-center" data-v-4b185c4d>`);
  _push(ssrRenderComponent(_component_NuxtLink, { to: "/projects/health" }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(ssrRenderComponent(_component_TheButton, { color: "#20394b" }, {
          default: withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(`View our health related projects`);
            } else {
              return [
                createTextVNode("View our health related projects")
              ];
            }
          }),
          _: 1
        }, _parent2, _scopeId));
      } else {
        return [
          createVNode(_component_TheButton, { color: "#20394b" }, {
            default: withCtx(() => [
              createTextVNode("View our health related projects")
            ]),
            _: 1
          })
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</div></div></div><br data-v-4b185c4d><br data-v-4b185c4d><br data-v-4b185c4d><br data-v-4b185c4d><br data-v-4b185c4d><div id="Transport" data-v-4b185c4d><h2 data-v-4b185c4d>Invest in the transport of the future!</h2><br data-v-4b185c4d><br data-v-4b185c4d><div class="rectangle_transport" data-v-4b185c4d><br data-v-4b185c4d><div id="content" style="${ssrRenderStyle({ "float": "right" })}" data-v-4b185c4d>`);
  _push(ssrRenderComponent(_component_NuxtLink, { to: "/areas/transport" }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<img id="presentation"${ssrRenderAttr("src", _imports_1)} data-v-4b185c4d${_scopeId}>`);
      } else {
        return [
          createVNode("img", {
            id: "presentation",
            src: _imports_1
          })
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</div><br data-v-4b185c4d><br data-v-4b185c4d><br data-v-4b185c4d><br data-v-4b185c4d><div class="button-center" data-v-4b185c4d>`);
  _push(ssrRenderComponent(_component_NuxtLink, { to: "/projects/transport" }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(ssrRenderComponent(_component_TheButton, { color: "#20394b" }, {
          default: withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(`View our projects related to means of tranport`);
            } else {
              return [
                createTextVNode("View our projects related to means of tranport")
              ];
            }
          }),
          _: 1
        }, _parent2, _scopeId));
      } else {
        return [
          createVNode(_component_TheButton, { color: "#20394b" }, {
            default: withCtx(() => [
              createTextVNode("View our projects related to means of tranport")
            ]),
            _: 1
          })
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</div></div></div><br data-v-4b185c4d><br data-v-4b185c4d><br data-v-4b185c4d><br data-v-4b185c4d><br data-v-4b185c4d><div id="Environment" data-v-4b185c4d><h2 data-v-4b185c4d>Help construct the world of tomorrow!</h2><br data-v-4b185c4d><br data-v-4b185c4d><div class="rectangle_ecolo" data-v-4b185c4d><br data-v-4b185c4d><div id="content" style="${ssrRenderStyle({ "float": "left" })}" data-v-4b185c4d>`);
  _push(ssrRenderComponent(_component_NuxtLink, { to: "/areas/environment" }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<img id="presentation"${ssrRenderAttr("src", _imports_2)} data-v-4b185c4d${_scopeId}>`);
      } else {
        return [
          createVNode("img", {
            id: "presentation",
            src: _imports_2
          })
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</div><br data-v-4b185c4d><br data-v-4b185c4d><br data-v-4b185c4d><br data-v-4b185c4d><div class="button-center" data-v-4b185c4d>`);
  _push(ssrRenderComponent(_component_NuxtLink, { to: "/projects/environment" }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(ssrRenderComponent(_component_TheButton, { color: "#20394b" }, {
          default: withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(`View our ecological projects`);
            } else {
              return [
                createTextVNode("View our ecological projects")
              ];
            }
          }),
          _: 1
        }, _parent2, _scopeId));
      } else {
        return [
          createVNode(_component_TheButton, { color: "#20394b" }, {
            default: withCtx(() => [
              createTextVNode("View our ecological projects")
            ]),
            _: 1
          })
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</div></div></div><br data-v-4b185c4d><br data-v-4b185c4d><br data-v-4b185c4d><br data-v-4b185c4d></div></main>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/areas/projects_by_area.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const projects_by_area = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender], ["__scopeId", "data-v-4b185c4d"]]);

export { projects_by_area as default };
//# sourceMappingURL=projects_by_area-8b8816c6.mjs.map
