import { b as buildAssetsURL } from '../../handlers/renderer.mjs';
import { _ as __nuxt_component_1 } from './nuxt-link-7dfe1055.mjs';
import { _ as __nuxt_component_1$1, a as __nuxt_component_3 } from './TheButton-864c6958.mjs';
import { _ as __nuxt_component_2 } from './Return-b6bae784.mjs';
import { a as _export_sfc, u as useRuntimeConfig } from '../server.mjs';
import { useSSRContext, withAsyncContext, resolveComponent, withCtx, createVNode, unref, createTextVNode } from 'vue';
import { u as useFetch } from './fetch-b8116756.mjs';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderClass, ssrInterpolate, ssrRenderStyle, ssrRenderAttr } from 'vue/server-renderer';
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

const _imports_0 = "" + buildAssetsURL("BioGenetics.0d264df3.png");
const _imports_1 = "" + buildAssetsURL("MedTech.4e3b76ec.png");
const __default__ = {
  data() {
    return {
      showGrid: false,
      textvisible: false
    };
  },
  mounted() {
    window.addEventListener("scroll", this.handleScroll);
  },
  destroyed() {
    window.removeEventListener("scroll", this.handleScroll);
  },
  methods: {
    handleScroll() {
      const grid = document.querySelector(".my-grid");
      const gridPos = grid.getBoundingClientRect().top;
      const screenHeight = window.innerHeight;
      const txt = document.querySelector("h2");
      const txtPos = txt.getBoundingClientRect().top;
      if (gridPos < screenHeight * 0.8) {
        this.showGrid = true;
      }
      if (txtPos < screenHeight * 0.8) {
        this.textvisible = true;
      }
    }
  }
};
const _sfc_main = /* @__PURE__ */ Object.assign(__default__, {
  __name: "health",
  __ssrInlineRender: true,
  async setup(__props) {
    let __temp, __restore;
    const { data: area } = ([__temp, __restore] = withAsyncContext(() => useFetch(useRuntimeConfig().baseURL + "/server/area", "$1DDPRSYfSG")), __temp = await __temp, __restore(), __temp);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_1;
      const _component_Overview = __nuxt_component_1$1;
      const _component_Return = __nuxt_component_2;
      const _component_proj = resolveComponent("proj");
      const _component_TheButton = __nuxt_component_3;
      _push(`<main${ssrRenderAttrs(_attrs)} data-v-5a3d09b0><div class="image" data-v-5a3d09b0><div id="slogan" data-v-5a3d09b0>Health is so precious</div></div><ol class="breadcrumb" data-v-5a3d09b0><li class="breadcrumb-item" data-v-5a3d09b0>`);
      _push(ssrRenderComponent(_component_NuxtLink, { to: "/areas" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<a data-v-5a3d09b0${_scopeId}>Areas</a>`);
          } else {
            return [
              createVNode("a", null, "Areas")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</li><li class="breadcrumb-item" data-v-5a3d09b0>`);
      _push(ssrRenderComponent(_component_NuxtLink, { to: "/areas/health" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<a data-v-5a3d09b0${_scopeId}>Health</a>`);
          } else {
            return [
              createVNode("a", null, "Health")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</li></ol>`);
      _push(ssrRenderComponent(_component_Overview, {
        class: "overview",
        sections: ["Summary", "A few number", "Projects"]
      }, null, _parent));
      _push(ssrRenderComponent(_component_Return, { class: "return_top" }, null, _parent));
      _push(`<div class="thebody" data-v-5a3d09b0><div id="Summary" data-v-5a3d09b0><h2 class="${ssrRenderClass({ show: _ctx.textvisible })}" data-v-5a3d09b0>Summary</h2><br data-v-5a3d09b0><br data-v-5a3d09b0> ${ssrInterpolate(unref(area)[0].short_summary)} <br data-v-5a3d09b0><br data-v-5a3d09b0> ${ssrInterpolate(unref(area)[0].summary)} <br data-v-5a3d09b0><br data-v-5a3d09b0><br data-v-5a3d09b0><br data-v-5a3d09b0></div><div id="A few number" data-v-5a3d09b0><h2 class="${ssrRenderClass({ show: _ctx.textvisible })}" data-v-5a3d09b0>A few number</h2><br data-v-5a3d09b0><div class="my-container" data-v-5a3d09b0><div class="${ssrRenderClass([{ show: _ctx.showGrid }, "my-grid"])}" data-v-5a3d09b0><div id="circle_1" align="center" data-v-5a3d09b0><br data-v-5a3d09b0><br data-v-5a3d09b0><br data-v-5a3d09b0><br data-v-5a3d09b0><br data-v-5a3d09b0>????????????????????</div><div data-v-5a3d09b0></div><div id="circle_2" align="center" data-v-5a3d09b0><br data-v-5a3d09b0><br data-v-5a3d09b0><br data-v-5a3d09b0>????????????<br data-v-5a3d09b0>??????????????</div><div data-v-5a3d09b0></div><div data-v-5a3d09b0></div><div data-v-5a3d09b0></div><div data-v-5a3d09b0></div><div data-v-5a3d09b0></div><div data-v-5a3d09b0></div><div data-v-5a3d09b0></div><div id="circle_3" align="center" data-v-5a3d09b0><br data-v-5a3d09b0><br data-v-5a3d09b0><br data-v-5a3d09b0><br data-v-5a3d09b0><br data-v-5a3d09b0><br data-v-5a3d09b0>?????????<br data-v-5a3d09b0>????????????<br data-v-5a3d09b0>?????????????? </div><div data-v-5a3d09b0></div><div data-v-5a3d09b0></div><div data-v-5a3d09b0></div><div data-v-5a3d09b0></div></div></div></div><div id="Projects" data-v-5a3d09b0><h2 class="${ssrRenderClass({ show: _ctx.textvisible })}" data-v-5a3d09b0>Projects</h2><br data-v-5a3d09b0><br data-v-5a3d09b0><div class="carousel" style="${ssrRenderStyle({ "float": "center" })}" data-v-5a3d09b0><input type="radio" name="position" data-v-5a3d09b0><input type="radio" name="position" checked data-v-5a3d09b0><input type="radio" name="position" data-v-5a3d09b0>`);
      _push(ssrRenderComponent(_component_proj, { id: "carousel" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="item" data-v-5a3d09b0${_scopeId}>`);
            _push2(ssrRenderComponent(_component_NuxtLink, { to: "/projects/5" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<img class="image_test"${ssrRenderAttr("src", _imports_0)} height="200" width="240" data-v-5a3d09b0${_scopeId2}>`);
                } else {
                  return [
                    createVNode("img", {
                      class: "image_test",
                      src: _imports_0,
                      height: "200",
                      width: "240"
                    })
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`<div class="image-description" align="center" data-v-5a3d09b0${_scopeId}>`);
            _push2(ssrRenderComponent(_component_NuxtLink, { to: "/projects/5" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`BioGenetics`);
                } else {
                  return [
                    createTextVNode("BioGenetics")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</div></div><div class="item" data-v-5a3d09b0${_scopeId}>`);
            _push2(ssrRenderComponent(_component_NuxtLink, { to: "/projects/3" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<img class="image_test"${ssrRenderAttr("src", _imports_1)} height="200" width="240" data-v-5a3d09b0${_scopeId2}>`);
                } else {
                  return [
                    createVNode("img", {
                      class: "image_test",
                      src: _imports_1,
                      height: "200",
                      width: "240"
                    })
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`<div class="image-description" align="center" data-v-5a3d09b0${_scopeId}>`);
            _push2(ssrRenderComponent(_component_NuxtLink, { to: "/projects/3" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`MedTech`);
                } else {
                  return [
                    createTextVNode("MedTech")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</div></div><div class="item" data-v-5a3d09b0${_scopeId}><br data-v-5a3d09b0${_scopeId}><br data-v-5a3d09b0${_scopeId}><br data-v-5a3d09b0${_scopeId}><br data-v-5a3d09b0${_scopeId}><div class="button-right" data-v-5a3d09b0${_scopeId}>`);
            _push2(ssrRenderComponent(_component_NuxtLink, { to: "/projects/health" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_TheButton, { color: "red" }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`See all projects <br data-v-5a3d09b0${_scopeId3}>in this area`);
                      } else {
                        return [
                          createTextVNode("See all projects "),
                          createVNode("br"),
                          createTextVNode("in this area")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_TheButton, { color: "red" }, {
                      default: withCtx(() => [
                        createTextVNode("See all projects "),
                        createVNode("br"),
                        createTextVNode("in this area")
                      ]),
                      _: 1
                    })
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</div></div>`);
          } else {
            return [
              createVNode("div", { class: "item" }, [
                createVNode(_component_NuxtLink, { to: "/projects/5" }, {
                  default: withCtx(() => [
                    createVNode("img", {
                      class: "image_test",
                      src: _imports_0,
                      height: "200",
                      width: "240"
                    })
                  ]),
                  _: 1
                }),
                createVNode("div", {
                  class: "image-description",
                  align: "center"
                }, [
                  createVNode(_component_NuxtLink, { to: "/projects/5" }, {
                    default: withCtx(() => [
                      createTextVNode("BioGenetics")
                    ]),
                    _: 1
                  })
                ])
              ]),
              createVNode("div", { class: "item" }, [
                createVNode(_component_NuxtLink, { to: "/projects/3" }, {
                  default: withCtx(() => [
                    createVNode("img", {
                      class: "image_test",
                      src: _imports_1,
                      height: "200",
                      width: "240"
                    })
                  ]),
                  _: 1
                }),
                createVNode("div", {
                  class: "image-description",
                  align: "center"
                }, [
                  createVNode(_component_NuxtLink, { to: "/projects/3" }, {
                    default: withCtx(() => [
                      createTextVNode("MedTech")
                    ]),
                    _: 1
                  })
                ])
              ]),
              createVNode("div", { class: "item" }, [
                createVNode("br"),
                createVNode("br"),
                createVNode("br"),
                createVNode("br"),
                createVNode("div", { class: "button-right" }, [
                  createVNode(_component_NuxtLink, { to: "/projects/health" }, {
                    default: withCtx(() => [
                      createVNode(_component_TheButton, { color: "red" }, {
                        default: withCtx(() => [
                          createTextVNode("See all projects "),
                          createVNode("br"),
                          createTextVNode("in this area")
                        ]),
                        _: 1
                      })
                    ]),
                    _: 1
                  })
                ])
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div><div data-v-5a3d09b0><div class="button-center" data-v-5a3d09b0>`);
      _push(ssrRenderComponent(_component_NuxtLink, { to: "/areas" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_TheButton, { color: "#20394b" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`See all areas`);
                } else {
                  return [
                    createTextVNode("See all areas")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_TheButton, { color: "#20394b" }, {
                default: withCtx(() => [
                  createTextVNode("See all areas")
                ]),
                _: 1
              })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div><br data-v-5a3d09b0><br data-v-5a3d09b0></div></div></div></main>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/areas/health.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const health = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-5a3d09b0"]]);

export { health as default };
//# sourceMappingURL=health-4b382d87.mjs.map
