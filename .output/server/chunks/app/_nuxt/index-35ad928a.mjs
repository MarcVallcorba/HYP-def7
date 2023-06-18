import { b as buildAssetsURL } from '../../handlers/renderer.mjs';
import { _ as __nuxt_component_1$1 } from './nuxt-link-7dfe1055.mjs';
import { useSSRContext, withAsyncContext, withCtx, createVNode, unref, createTextVNode, mergeProps, toDisplayString } from 'vue';
import { ssrRenderAttrs, ssrRenderAttr, ssrRenderComponent, ssrRenderStyle, ssrInterpolate, ssrRenderList } from 'vue/server-renderer';
import { a as _export_sfc, u as useRuntimeConfig } from '../server.mjs';
import { _ as __nuxt_component_1, a as __nuxt_component_3 } from './TheButton-864c6958.mjs';
import { _ as __nuxt_component_2 } from './Return-b6bae784.mjs';
import { u as useFetch } from './fetch-b8116756.mjs';
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

const _sfc_main$1 = {
  props: {
    sections: {
      type: Array,
      required: true
    }
  }
};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_NuxtLink = __nuxt_component_1$1;
  _push(`<ol${ssrRenderAttrs(mergeProps({ class: "breadcrumb" }, _attrs))}><!--[-->`);
  ssrRenderList($props.sections, (section, index2) => {
    _push(`<li class="breadcrumb-item">`);
    _push(ssrRenderComponent(_component_NuxtLink, { to: "/areas" }, {
      default: withCtx((_, _push2, _parent2, _scopeId) => {
        if (_push2) {
          _push2(`${ssrInterpolate(section)}`);
        } else {
          return [
            createTextVNode(toDisplayString(section), 1)
          ];
        }
      }),
      _: 2
    }, _parent));
    _push(`</li>`);
  });
  _push(`<!--]--></ol>`);
}
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Breadcrumbs.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const __nuxt_component_0 = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["ssrRender", _sfc_ssrRender]]);
const _imports_0 = "" + buildAssetsURL("area-main2.c3f72749.png");
const _imports_1 = "" + buildAssetsURL("health.889a246c.jpg");
const _imports_2 = "" + buildAssetsURL("transport.78d59f98.png");
const _imports_3 = "" + buildAssetsURL("ecolo.d5d8646f.jpg");
const _sfc_main = {
  __name: "index",
  __ssrInlineRender: true,
  async setup(__props) {
    let __temp, __restore;
    const { data: area } = ([__temp, __restore] = withAsyncContext(() => useFetch(useRuntimeConfig().baseURL + "/server/area", "$Stmmz1SXB6")), __temp = await __temp, __restore(), __temp);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_Breadcrumbs = __nuxt_component_0;
      const _component_Overview = __nuxt_component_1;
      const _component_Return = __nuxt_component_2;
      const _component_NuxtLink = __nuxt_component_1$1;
      const _component_TheButton = __nuxt_component_3;
      _push(`<main${ssrRenderAttrs(_attrs)} data-v-ced38c5e><div class="introduction" data-v-ced38c5e><img${ssrRenderAttr("src", _imports_0)} alt="logo areas" class="area-img" data-v-ced38c5e><div id="title" data-v-ced38c5e><p data-v-ced38c5e>Areas</p></div></div>`);
      _push(ssrRenderComponent(_component_Breadcrumbs, {
        class: "Breadcrumb",
        sections: ["Areas"]
      }, null, _parent));
      _push(ssrRenderComponent(_component_Overview, {
        class: "overview",
        sections: ["Health", "Transport", "Environment", "Projects"]
      }, null, _parent));
      _push(ssrRenderComponent(_component_Return, { class: "return_top" }, null, _parent));
      _push(`<div class="thebody" data-v-ced38c5e><div id="Health" data-v-ced38c5e><h2 data-v-ced38c5e>Health is so precious!</h2><br data-v-ced38c5e><br data-v-ced38c5e><div class="rectangle_health" data-v-ced38c5e><br data-v-ced38c5e><div id="content1" style="${ssrRenderStyle({ "float": "left" })}" data-v-ced38c5e>`);
      _push(ssrRenderComponent(_component_NuxtLink, { to: "/areas/health" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<img id="presentation"${ssrRenderAttr("src", _imports_1)} data-v-ced38c5e${_scopeId}>`);
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
      _push(`</div><div id="content" data-v-ced38c5e>${ssrInterpolate(unref(area)[0].intro)} <div class="button-center" data-v-ced38c5e>`);
      _push(ssrRenderComponent(_component_NuxtLink, { to: "/areas/health" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_TheButton, { color: "#20394b" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`View more`);
                } else {
                  return [
                    createTextVNode("View more")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_TheButton, { color: "#20394b" }, {
                default: withCtx(() => [
                  createTextVNode("View more")
                ]),
                _: 1
              })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></div></div></div><br data-v-ced38c5e><br data-v-ced38c5e><br data-v-ced38c5e><br data-v-ced38c5e><br data-v-ced38c5e><div id="Transport" data-v-ced38c5e><h2 data-v-ced38c5e>Invest in the transport of the future!</h2><br data-v-ced38c5e><br data-v-ced38c5e><div class="rectangle_transport" data-v-ced38c5e><div id="content" style="${ssrRenderStyle({ "float": "right" })}" data-v-ced38c5e>`);
      _push(ssrRenderComponent(_component_NuxtLink, { to: "/areas/transport" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<img id="presentation"${ssrRenderAttr("src", _imports_2)} data-v-ced38c5e${_scopeId}>`);
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
      _push(`</div><div id="content" data-v-ced38c5e>${ssrInterpolate(unref(area)[1].intro)} <div class="button-center" data-v-ced38c5e>`);
      _push(ssrRenderComponent(_component_NuxtLink, { to: "/areas/transport" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_TheButton, { color: "#20394b" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`View more`);
                } else {
                  return [
                    createTextVNode("View more")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_TheButton, { color: "#20394b" }, {
                default: withCtx(() => [
                  createTextVNode("View more")
                ]),
                _: 1
              })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></div></div></div><br data-v-ced38c5e><br data-v-ced38c5e><br data-v-ced38c5e><br data-v-ced38c5e><br data-v-ced38c5e><div id="Environment" data-v-ced38c5e><h2 data-v-ced38c5e>Help construct the world of tomorrow!</h2><br data-v-ced38c5e><br data-v-ced38c5e><div class="rectangle_ecolo" data-v-ced38c5e><br data-v-ced38c5e><div id="content" style="${ssrRenderStyle({ "float": "left" })}" data-v-ced38c5e>`);
      _push(ssrRenderComponent(_component_NuxtLink, { to: "/areas/environment" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<img id="presentation"${ssrRenderAttr("src", _imports_3)} data-v-ced38c5e${_scopeId}>`);
          } else {
            return [
              createVNode("img", {
                id: "presentation",
                src: _imports_3
              })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div><div id="content" data-v-ced38c5e>${ssrInterpolate(unref(area)[2].intro)} <div class="button-center" data-v-ced38c5e>`);
      _push(ssrRenderComponent(_component_NuxtLink, { to: "/areas/environment" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_TheButton, { color: "#20394b" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`View more`);
                } else {
                  return [
                    createTextVNode("View more")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_TheButton, { color: "#20394b" }, {
                default: withCtx(() => [
                  createTextVNode("View more")
                ]),
                _: 1
              })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></div></div></div><br data-v-ced38c5e><br data-v-ced38c5e><br data-v-ced38c5e><div id="Projects" data-v-ced38c5e><h2 data-v-ced38c5e>Projects</h2><br data-v-ced38c5e><div class="button-center" data-v-ced38c5e>`);
      _push(ssrRenderComponent(_component_NuxtLink, { to: "/areas/projects_by_area" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_TheButton, { color: "#20394b" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`Projects by area`);
                } else {
                  return [
                    createTextVNode("Projects by area")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_TheButton, { color: "#20394b" }, {
                default: withCtx(() => [
                  createTextVNode("Projects by area")
                ]),
                _: 1
              })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div><br data-v-ced38c5e><div class="button-center" data-v-ced38c5e><div style="${ssrRenderStyle({ "float": "left" })}" data-v-ced38c5e><br data-v-ced38c5e> Do you have a project in one of these areas that you are looking to fund?\u2003 </div><div data-v-ced38c5e>`);
      _push(ssrRenderComponent(_component_NuxtLink, { to: "/contact" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_TheButton, { color: "#20394b" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`Contact us`);
                } else {
                  return [
                    createTextVNode("Contact us")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_TheButton, { color: "#20394b" }, {
                default: withCtx(() => [
                  createTextVNode("Contact us")
                ]),
                _: 1
              })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div><br data-v-ced38c5e><br data-v-ced38c5e><br data-v-ced38c5e><br data-v-ced38c5e><br data-v-ced38c5e><br data-v-ced38c5e></div></div></div></main>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/areas/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const index = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-ced38c5e"]]);

export { index as default };
//# sourceMappingURL=index-35ad928a.mjs.map
