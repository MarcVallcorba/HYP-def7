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

const _imports_0 = "" + buildAssetsURL("SustainableTransport.4c51fe1f.png");
const _imports_1 = "" + buildAssetsURL("MaglevTech.6438abff.png");
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
  __name: "transport",
  __ssrInlineRender: true,
  async setup(__props) {
    let __temp, __restore;
    const { data: area } = ([__temp, __restore] = withAsyncContext(() => useFetch(useRuntimeConfig().baseURL + "/server/area", "$uGGUQd5a4Z")), __temp = await __temp, __restore(), __temp);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_1;
      const _component_Overview = __nuxt_component_1$1;
      const _component_Return = __nuxt_component_2;
      const _component_proj = resolveComponent("proj");
      const _component_TheButton = __nuxt_component_3;
      _push(`<main${ssrRenderAttrs(_attrs)} data-v-ab120633><div class="image" data-v-ab120633><div id="slogan" data-v-ab120633>Invest in the transport of the future !</div></div><ol class="breadcrumb" data-v-ab120633><li class="breadcrumb-item" data-v-ab120633>`);
      _push(ssrRenderComponent(_component_NuxtLink, { to: "/areas" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<a data-v-ab120633${_scopeId}>Areas</a>`);
          } else {
            return [
              createVNode("a", null, "Areas")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</li><li class="breadcrumb-item" data-v-ab120633>`);
      _push(ssrRenderComponent(_component_NuxtLink, { to: "/areas/transport" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<a data-v-ab120633${_scopeId}>Transport</a>`);
          } else {
            return [
              createVNode("a", null, "Transport")
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
      _push(`<div class="thebody" data-v-ab120633><div id="Summary" data-v-ab120633><h2 class="${ssrRenderClass({ show: _ctx.textvisible })}" data-v-ab120633>Summary</h2><br data-v-ab120633><br data-v-ab120633> ${ssrInterpolate(unref(area)[1].short_summary)} <br data-v-ab120633><br data-v-ab120633> ${ssrInterpolate(unref(area)[1].summary)} <br data-v-ab120633><br data-v-ab120633><br data-v-ab120633><br data-v-ab120633></div><div id="A few number" data-v-ab120633><h2 class="${ssrRenderClass({ show: _ctx.textvisible })}" data-v-ab120633>A few number</h2><br data-v-ab120633><div class="my-container" data-v-ab120633><div class="${ssrRenderClass([{ show: _ctx.showGrid }, "my-grid"])}" data-v-ab120633><div id="circle_1" align="center" data-v-ab120633><br data-v-ab120633><br data-v-ab120633><br data-v-ab120633><br data-v-ab120633><br data-v-ab120633>TTTTTT % CO2</div><div data-v-ab120633></div><div id="circle_2" align="center" data-v-ab120633><br data-v-ab120633><br data-v-ab120633><br data-v-ab120633>Responsible of 40% of the global CO2 emission.</div><div data-v-ab120633></div><div data-v-ab120633></div><div data-v-ab120633></div><div id="circle_1" align="center" data-v-ab120633><br data-v-ab120633><br data-v-ab120633><br data-v-ab120633>285g of CO2/passager/km/plane</div><div data-v-ab120633></div><div data-v-ab120633></div><div data-v-ab120633></div><div data-v-ab120633></div><div data-v-ab120633></div><div data-v-ab120633></div></div></div></div><br data-v-ab120633><div id="Projects" data-v-ab120633><br data-v-ab120633><br data-v-ab120633><br data-v-ab120633><br data-v-ab120633><br data-v-ab120633><br data-v-ab120633><br data-v-ab120633><h2 class="${ssrRenderClass({ show: _ctx.textvisible })}" data-v-ab120633>Projects</h2><br data-v-ab120633><br data-v-ab120633><div class="carousel" style="${ssrRenderStyle({ "float": "center" })}" data-v-ab120633><input type="radio" name="position" data-v-ab120633><input type="radio" name="position" checked data-v-ab120633><input type="radio" name="position" data-v-ab120633>`);
      _push(ssrRenderComponent(_component_proj, { id: "carousel" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="item" data-v-ab120633${_scopeId}>`);
            _push2(ssrRenderComponent(_component_NuxtLink, { to: "/projects/13" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<img class="image_test"${ssrRenderAttr("src", _imports_0)} height="200" width="240" data-v-ab120633${_scopeId2}>`);
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
            _push2(`<div class="image-description" align="center" data-v-ab120633${_scopeId}>`);
            _push2(ssrRenderComponent(_component_NuxtLink, { to: "/projects/13" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`SustainableTransport`);
                } else {
                  return [
                    createTextVNode("SustainableTransport")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</div></div><div class="item" data-v-ab120633${_scopeId}>`);
            _push2(ssrRenderComponent(_component_NuxtLink, { to: "/projects/11" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<img class="image_test"${ssrRenderAttr("src", _imports_1)} height="200" width="240" data-v-ab120633${_scopeId2}>`);
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
            _push2(`<div class="image-description" align="center" data-v-ab120633${_scopeId}>`);
            _push2(ssrRenderComponent(_component_NuxtLink, { to: "/projects/11" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`MaglevTech`);
                } else {
                  return [
                    createTextVNode("MaglevTech")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</div></div><div class="item" data-v-ab120633${_scopeId}><br data-v-ab120633${_scopeId}><br data-v-ab120633${_scopeId}><br data-v-ab120633${_scopeId}><br data-v-ab120633${_scopeId}><div class="button-right" data-v-ab120633${_scopeId}>`);
            _push2(ssrRenderComponent(_component_NuxtLink, { to: "/projects/transport" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_TheButton, { color: "red" }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`See all projects <br data-v-ab120633${_scopeId3}>in this area`);
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
                createVNode(_component_NuxtLink, { to: "/projects/13" }, {
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
                  createVNode(_component_NuxtLink, { to: "/projects/13" }, {
                    default: withCtx(() => [
                      createTextVNode("SustainableTransport")
                    ]),
                    _: 1
                  })
                ])
              ]),
              createVNode("div", { class: "item" }, [
                createVNode(_component_NuxtLink, { to: "/projects/11" }, {
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
                  createVNode(_component_NuxtLink, { to: "/projects/11" }, {
                    default: withCtx(() => [
                      createTextVNode("MaglevTech")
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
                  createVNode(_component_NuxtLink, { to: "/projects/transport" }, {
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
      _push(`</div><div data-v-ab120633><div class="button-center" data-v-ab120633>`);
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
      _push(`</div><br data-v-ab120633><br data-v-ab120633></div></div></div></main>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/areas/transport.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const transport = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-ab120633"]]);

export { transport as default };
//# sourceMappingURL=transport-a7c1a81e.mjs.map
