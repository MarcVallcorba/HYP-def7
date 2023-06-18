import { b as buildAssetsURL } from '../../handlers/renderer.mjs';
import { _ as __nuxt_component_1, a as __nuxt_component_3 } from './TheButton-864c6958.mjs';
import { _ as __nuxt_component_2 } from './Return-b6bae784.mjs';
import { _ as __nuxt_component_1$1 } from './nuxt-link-7dfe1055.mjs';
import { useSSRContext, withCtx, createTextVNode, createVNode, mergeProps } from 'vue';
import { ssrRenderStyle, ssrRenderAttr, ssrRenderComponent, ssrRenderClass, ssrRenderAttrs } from 'vue/server-renderer';
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

const _sfc_main$1 = {};
function _sfc_ssrRender$1(_ctx, _push, _parent, _attrs) {
  const _component_NuxtLink = __nuxt_component_1$1;
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "scroll-container" }, _attrs))} data-v-9ebcef92><section class="carousel" data-v-9ebcef92><ol class="carousel__viewport" data-v-9ebcef92><li id="carousel__slide1" tabindex="0" class="carousel__slide" data-v-9ebcef92><div class="image-description" data-v-9ebcef92>`);
  _push(ssrRenderComponent(_component_NuxtLink, { to: "/projects/1" }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`EcoTech Solutions`);
      } else {
        return [
          createTextVNode("EcoTech Solutions")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</div><div class="carousel__snapper" data-v-9ebcef92><a href="#carousel__slide4" class="carousel__prev" data-v-9ebcef92></a><a href="#carousel__slide2" class="carousel__next" data-v-9ebcef92></a></div></li><li id="carousel__slide2" tabindex="0" class="carousel__slide" data-v-9ebcef92><div class="image-description" data-v-9ebcef92>`);
  _push(ssrRenderComponent(_component_NuxtLink, { to: "/projects/2" }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`GreenCommute`);
      } else {
        return [
          createTextVNode("GreenCommute")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</div><div class="carousel__snapper" data-v-9ebcef92></div><a href="#carousel__slide1" class="carousel__prev" data-v-9ebcef92></a><a href="#carousel__slide3" class="carousel__next" data-v-9ebcef92></a></li><li id="carousel__slide3" tabindex="0" class="carousel__slide" data-v-9ebcef92><div class="image-description" data-v-9ebcef92>`);
  _push(ssrRenderComponent(_component_NuxtLink, { to: "/projects/3" }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`MedTech Innovations`);
      } else {
        return [
          createTextVNode("MedTech Innovations")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</div><div class="carousel__snapper" data-v-9ebcef92></div><a href="#carousel__slide2" class="carousel__prev" data-v-9ebcef92></a><a href="#carousel__slide4" class="carousel__next" data-v-9ebcef92></a></li><li id="carousel__slide4" tabindex="0" class="carousel__slide" data-v-9ebcef92><div class="image-description" data-v-9ebcef92>`);
  _push(ssrRenderComponent(_component_NuxtLink, { to: "/projects/4" }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`BioGenetics`);
      } else {
        return [
          createTextVNode("BioGenetics")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</div><div class="carousel__snapper" data-v-9ebcef92></div><a href="#carousel__slide3" class="carousel__prev" data-v-9ebcef92></a><a href="#carousel__slide1" class="carousel__next" data-v-9ebcef92></a></li></ol><aside class="carousel__navigation" data-v-9ebcef92><ol class="carousel__navigation-list" data-v-9ebcef92><li class="carousel__navigation-item" data-v-9ebcef92><a href="#carousel__slide1" class="carousel__navigation-button" data-v-9ebcef92></a></li><li class="carousel__navigation-item" data-v-9ebcef92><a href="#carousel__slide2" class="carousel__navigation-button" data-v-9ebcef92></a></li><li class="carousel__navigation-item" data-v-9ebcef92><a href="#carousel__slide3" class="carousel__navigation-button" data-v-9ebcef92></a></li><li class="carousel__navigation-item" data-v-9ebcef92><a href="#carousel__slide4" class="carousel__navigation-button" data-v-9ebcef92></a></li></ol></aside></section></div>`);
}
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/HomeCarousel.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const __nuxt_component_4 = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["ssrRender", _sfc_ssrRender$1], ["__scopeId", "data-v-9ebcef92"]]);
const _imports_0 = "" + buildAssetsURL("background_home.3c4c7ada.webp");
const _imports_1 = "" + buildAssetsURL("joinus.7f728a75.webp");
const _imports_2 = "" + buildAssetsURL("team.af72a18d.jpeg");
const _sfc_main = {
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
  },
  components: {
    Overview: __nuxt_component_1
  }
};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_Overview = __nuxt_component_1;
  const _component_Return = __nuxt_component_2;
  const _component_NuxtLink = __nuxt_component_1$1;
  const _component_TheButton = __nuxt_component_3;
  const _component_HomeCarousel = __nuxt_component_4;
  _push(`<!--[--><main data-v-07445c67><div class="image-container1" data-v-07445c67><img style="${ssrRenderStyle({ "width": "100%" })}"${ssrRenderAttr("src", _imports_0)} alt="Image accueil" data-v-07445c67><div class="overlay" data-v-07445c67><div class="slogan" data-v-07445c67>Growing together with <br data-v-07445c67> <span class="hltxt" style="${ssrRenderStyle({ "color": "#679436" })}" data-v-07445c67>Ivy</span></div></div></div></main>`);
  _push(ssrRenderComponent(_component_Overview, {
    class: "overview",
    sections: ["Key Numbers", "Join Ivy", "The Team", "Main Areas", "Projects", "Join the Adventure"]
  }, null, _parent));
  _push(ssrRenderComponent(_component_Return, { class: "return_top" }, null, _parent));
  _push(`<div class="thebody" data-v-07445c67><div class="catchphrase" data-v-07445c67>Cultivating success through <span class="hltxt" style="${ssrRenderStyle({ "color": "#679436" })}" data-v-07445c67>strategic investments</span></div><div id="Key Numbers" data-v-07445c67><h2 class="${ssrRenderClass({ show: $data.textvisible })}" data-v-07445c67>IVY in numbers</h2><div class="${ssrRenderClass([{ show: $data.showGrid }, "my-grid"])}" data-v-07445c67><div class="my-grid-item" data-v-07445c67><div class="highlights" data-v-07445c67>1st</div> Impact investing firm worldwide </div><div class="my-grid-item" data-v-07445c67><div class="highlights" data-v-07445c67>30</div> Successful businesses supported</div><div class="my-grid-item" data-v-07445c67><div class="highlights" data-v-07445c67>500M</div> Invested so far</div></div></div><div class="block" id="Join Ivy" data-v-07445c67><h2 id="joinivy" data-v-07445c67>Join Ivy</h2><img class="imgtowrap"${ssrRenderAttr("src", _imports_1)} data-v-07445c67> At Ivy Ventures, we believe in a transparent and collaborative approach to building partnerships. Startups interested in partnering with us can initiate the process by reaching out to our team. We encourage entrepreneurs to connect with us through networking events, introductions, or by directly submitting their proposals. We are always excited to explore innovative ideas and engage with passionate founders who are determined to make a difference. Find out how to join us by clicking the button below! <div class="button-center" data-v-07445c67>`);
  _push(ssrRenderComponent(_component_NuxtLink, { to: "/how_it_works" }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(ssrRenderComponent(_component_TheButton, { color: "#20394b" }, {
          default: withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(`How it works`);
            } else {
              return [
                createTextVNode("How it works")
              ];
            }
          }),
          _: 1
        }, _parent2, _scopeId));
      } else {
        return [
          createVNode(_component_TheButton, { color: "#20394b" }, {
            default: withCtx(() => [
              createTextVNode("How it works")
            ]),
            _: 1
          })
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</div></div><div class="block" id="The Team" data-v-07445c67><h2 id="team-areas" data-v-07445c67>The Team</h2><img style="${ssrRenderStyle({ "width": "100%", "margin-bottom": "2%" })}"${ssrRenderAttr("src", _imports_2)} data-v-07445c67><div data-v-07445c67>At Ivy Ventures, our success is driven by our exceptional team of professionals who bring a wealth of experience, expertise, and passion to the world of venture capital. With a diverse range of backgrounds and skills, our team is dedicated to supporting innovative startups in various areas. By combining deep industry knowledge, strategic insights, and a collaborative approach, we strive to make a meaningful impact on the businesses we partner with. Each member of our team brings a unique perspective and skill set that we have every intention to share with our partners. You can find out more about each member of our team by clicking the button below! <div class="button-center" data-v-07445c67>`);
  _push(ssrRenderComponent(_component_NuxtLink, { to: "/team" }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(ssrRenderComponent(_component_TheButton, { color: "black" }, {
          default: withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(`Meet our Team`);
            } else {
              return [
                createTextVNode("Meet our Team")
              ];
            }
          }),
          _: 1
        }, _parent2, _scopeId));
      } else {
        return [
          createVNode(_component_TheButton, { color: "black" }, {
            default: withCtx(() => [
              createTextVNode("Meet our Team")
            ]),
            _: 1
          })
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</div></div></div><div class="block" id="Main Areas" data-v-07445c67><div class="areas" data-v-07445c67><p data-v-07445c67><h2 id="team-areas" data-v-07445c67>Main Areas </h2><div class="button-center" data-v-07445c67>`);
  _push(ssrRenderComponent(_component_NuxtLink, { to: "/area" }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(ssrRenderComponent(_component_TheButton, { color: "#000000" }, {
          default: withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(`See Areas`);
            } else {
              return [
                createTextVNode("See Areas")
              ];
            }
          }),
          _: 1
        }, _parent2, _scopeId));
      } else {
        return [
          createVNode(_component_TheButton, { color: "#000000" }, {
            default: withCtx(() => [
              createTextVNode("See Areas")
            ]),
            _: 1
          })
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</div></p><div class="delimiter" data-v-07445c67></div><table data-v-07445c67><tr data-v-07445c67><td style="${ssrRenderStyle({ "background-color": "#EBF2FA" })}" data-v-07445c67>`);
  _push(ssrRenderComponent(_component_NuxtLink, { to: "/areas_water" }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(ssrRenderComponent(_component_TheButton, { color: "#EBF2FA" }, {
          default: withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(`Health`);
            } else {
              return [
                createTextVNode("Health")
              ];
            }
          }),
          _: 1
        }, _parent2, _scopeId));
      } else {
        return [
          createVNode(_component_TheButton, { color: "#EBF2FA" }, {
            default: withCtx(() => [
              createTextVNode("Health")
            ]),
            _: 1
          })
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</td><td style="${ssrRenderStyle({ "background-color": "#427AA1" })}" data-v-07445c67>`);
  _push(ssrRenderComponent(_component_NuxtLink, { to: "/areas_transport" }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(ssrRenderComponent(_component_TheButton, { color: "#427AA1" }, {
          default: withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(`Transport`);
            } else {
              return [
                createTextVNode("Transport")
              ];
            }
          }),
          _: 1
        }, _parent2, _scopeId));
      } else {
        return [
          createVNode(_component_TheButton, { color: "#427AA1" }, {
            default: withCtx(() => [
              createTextVNode("Transport")
            ]),
            _: 1
          })
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</td></tr><tr data-v-07445c67><td style="${ssrRenderStyle({ "background-color": "#679436" })}" data-v-07445c67>`);
  _push(ssrRenderComponent(_component_NuxtLink, { to: "/areas_ecolo" }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(ssrRenderComponent(_component_TheButton, { color: "#679436" }, {
          default: withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(`Ecology`);
            } else {
              return [
                createTextVNode("Ecology")
              ];
            }
          }),
          _: 1
        }, _parent2, _scopeId));
      } else {
        return [
          createVNode(_component_TheButton, { color: "#679436" }, {
            default: withCtx(() => [
              createTextVNode("Ecology")
            ]),
            _: 1
          })
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</td><td data-v-07445c67>&amp; more!</td></tr></table></div></div><div class="block" id="Projects" data-v-07445c67><h2 data-v-07445c67>Projects</h2><div style="${ssrRenderStyle({ "text-align": "center" })}" data-v-07445c67>Here are a few projects we worked on:</div><br data-v-07445c67><br data-v-07445c67><div class="carousel" data-v-07445c67>`);
  _push(ssrRenderComponent(_component_HomeCarousel, null, null, _parent));
  _push(`</div> At Ivy Ventures, we take immense pride in the exceptional projects and startups we have nurtured throughout our journey. Our investment focus around the environment, means of transportation, and health has allowed us to support groundbreaking ventures that are driving innovation, sustainability, and social impact. From clean energy solutions to revolutionary transportation technologies and life-saving healthcare innovations, our portfolio reflects our commitment to making a difference in these critical sectors. You can find out more about each project we supported by clicking the button below!<div class="button-center" data-v-07445c67>`);
  _push(ssrRenderComponent(_component_NuxtLink, { to: "/projects" }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(ssrRenderComponent(_component_TheButton, { color: "#679436" }, {
          default: withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(`See our projects`);
            } else {
              return [
                createTextVNode("See our projects")
              ];
            }
          }),
          _: 1
        }, _parent2, _scopeId));
      } else {
        return [
          createVNode(_component_TheButton, { color: "#679436" }, {
            default: withCtx(() => [
              createTextVNode("See our projects")
            ]),
            _: 1
          })
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</div></div><div class="block" id="Join the Adventure" data-v-07445c67><h2 class="${ssrRenderClass({ show: $data.textvisible })}" data-v-07445c67>Join the ad<i data-v-07445c67>venture</i></h2> Need someone to invest in your idea?<div class="button-center" data-v-07445c67>`);
  _push(ssrRenderComponent(_component_NuxtLink, { to: "/contact" }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(ssrRenderComponent(_component_TheButton, { color: "#679436" }, {
          default: withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(`Join Ivy!`);
            } else {
              return [
                createTextVNode("Join Ivy!")
              ];
            }
          }),
          _: 1
        }, _parent2, _scopeId));
      } else {
        return [
          createVNode(_component_TheButton, { color: "#679436" }, {
            default: withCtx(() => [
              createTextVNode("Join Ivy!")
            ]),
            _: 1
          })
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</div></div></div><!--]-->`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const index = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender], ["__scopeId", "data-v-07445c67"]]);

export { index as default };
//# sourceMappingURL=index-6427c3c1.mjs.map
