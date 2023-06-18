import { _ as __nuxt_component_1 } from './nuxt-link-7dfe1055.mjs';
import { _ as __nuxt_component_1$1, a as __nuxt_component_3 } from './TheButton-864c6958.mjs';
import { _ as __nuxt_component_2 } from './Return-b6bae784.mjs';
import { useSSRContext, withCtx, createVNode, createTextVNode, mergeProps } from 'vue';
import { ssrRenderAttrs, ssrRenderAttr, ssrRenderComponent, ssrRenderStyle } from 'vue/server-renderer';
import { a as _export_sfc } from '../server.mjs';
import { _ as _imports_0 } from './howitworks-36e73e7e.mjs';
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

const _sfc_main$1 = {
  data() {
    return {
      showArrow: true
    };
  },
  methods: {
    handleScroll() {
      const scrollableDiv = document.querySelector(".timeline");
      this.showArrow = scrollableDiv.scrollTop === 0;
    },
    scrollToNextSection() {
      const scrollableDiv = document.querySelector(".timeline");
      const scrollDistance = 150;
      const scrollOptions = {
        top: scrollableDiv.scrollTop + scrollDistance,
        behavior: "smooth"
        // Use smooth scrolling behavior
      };
      scrollableDiv.scrollTo(scrollOptions);
    }
  }
};
function _sfc_ssrRender$1(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(mergeProps({
    class: "timeline",
    style: { "overflow-y": "scroll", "height": "70vh" }
  }, _attrs))}>`);
  if ($data.showArrow) {
    _push(`<div class="scroll">\u2304\u2304\u2304</div>`);
  } else {
    _push(`<!---->`);
  }
  _push(`<div class="container-timeline left"><div class="content-timeline"><h2 class="date">2005</h2><p>Ivy Ventures is officially born, created and founded by the <b>Queen of the United Kingdom </b>herself, with the sole purpose of <b>supporting innovative startups</b> and <b>driving positive change in the world</b>. The firm establishes its headquarters in a vibrant entrepreneurial hub, positioning itself at the forefront of emerging trends and opportunities.</p></div></div><div class="container-timeline right"><div class="content-timeline"><h2 class="date">2007</h2><p>Ivy Ventures celebrates its <b>first significant exit as one of its portfolio companies successfully goes public</b>, generating substantial returns for both the startup and Ivy Ventures. This milestone solidifies Ivy Ventures&#39; reputation as a <b>trusted partner</b> for early-stage startups and attracts attention from the investment community. </p></div></div><div class="container-timeline left"><div class="content-timeline"><h2 class="date">2010</h2><p>Recognizing a noticeable pattern among its portfolio startups, Ivy Ventures officially splits its investment strategy into three key areas: the environment, means of transportation, and health. This sector-focused approach allows Ivy Ventures to <b>leverage its expertise, resources, and network</b> to provide targeted support to startups operating in these domains. </p></div></div><div class="container-timeline right"><div class="content-timeline"><h2 class="date">2015</h2><p>Recognizing the global nature of the challenges and opportunities in its focus areas, Ivy Ventures establishes regional offices in key international markets. This global expansion enables the firm to <b>tap into diverse talent pools, access new markets</b>, and<b> forge partnerships with international startups and organizations</b>.</p></div></div><div class="container-timeline left"><div class="content-timeline"><h2 class="date">2020</h2><p>One of Ivy Ventures&#39; portfolio companies achieves unicorn status, reaching a valuation of over <span style="${ssrRenderStyle({ "color": "white" })}">$1 billion</span>. This milestone underscores Ivy Ventures&#39; ability to identify and nurture high-potential startups and highlights the strength of its support ecosystem.</p></div></div><div class="container-timeline right"><div class="content-timeline"><h2 class="date">Today</h2><p>Ivy Ventures continues to grow its portfolio, nurture innovative startups, and drive positive change in its focus areas. With a <b>dedicated team, strong partnerships, and a reputation for success</b>, Ivy Ventures remains committed to supporting the next generation of game-changing ventures and shaping a better future.</p></div></div></div>`);
}
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/TimeLine.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const __nuxt_component_4 = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["ssrRender", _sfc_ssrRender$1]]);
const _sfc_main = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  const _component_NuxtLink = __nuxt_component_1;
  const _component_Overview = __nuxt_component_1$1;
  const _component_Return = __nuxt_component_2;
  const _component_TheButton = __nuxt_component_3;
  const _component_TimeLine = __nuxt_component_4;
  _push(`<main${ssrRenderAttrs(_attrs)} data-v-8a96ac27><div class="introduction" data-v-8a96ac27><img${ssrRenderAttr("src", _imports_0)} alt="engrenage" class="howitworks-img" data-v-8a96ac27><div id="title" data-v-8a96ac27><p data-v-8a96ac27>How it works</p></div></div><ol class="breadcrumb" data-v-8a96ac27><li class="breadcrumb-item" data-v-8a96ac27>`);
  _push(ssrRenderComponent(_component_NuxtLink, { to: "/how_it_works" }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<a data-v-8a96ac27${_scopeId}>How it works</a>`);
      } else {
        return [
          createVNode("a", null, "How it works")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</li></ol>`);
  _push(ssrRenderComponent(_component_Overview, {
    class: "overview",
    sections: ["Venture Capital", "Our Story", "Getting started", "Financing steps", "Managing expertise"]
  }, null, _parent));
  _push(ssrRenderComponent(_component_Return, { class: "return_top" }, null, _parent));
  _push(`<div class="thebody" data-v-8a96ac27><div id="Venture Capital" data-v-8a96ac27><div class="link" data-v-8a96ac27><h2 data-v-8a96ac27>Not familiar with VC ?</h2>`);
  _push(ssrRenderComponent(_component_NuxtLink, { to: "/introduction_VC" }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(ssrRenderComponent(_component_TheButton, { color: "#427AA1" }, {
          default: withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(`Discover what is VC`);
            } else {
              return [
                createTextVNode("Discover what is VC")
              ];
            }
          }),
          _: 1
        }, _parent2, _scopeId));
      } else {
        return [
          createVNode(_component_TheButton, { color: "#427AA1" }, {
            default: withCtx(() => [
              createTextVNode("Discover what is VC")
            ]),
            _: 1
          })
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</div></div><br data-v-8a96ac27><br data-v-8a96ac27><h2 id="Our Story" data-v-8a96ac27>Our Story</h2>`);
  _push(ssrRenderComponent(_component_TimeLine, null, null, _parent));
  _push(`<br data-v-8a96ac27><br data-v-8a96ac27><div id="Getting started" data-v-8a96ac27><h2 data-v-8a96ac27>Getting started</h2> Startups interested in partnering with Ivy Ventures can begin the process by reaching out and expressing their interest. Whether through networking events, introductions, or direct inquiries, Ivy Ventures is <b data-v-8a96ac27>always open to exploring new opportunities</b>. Once the initial connection is established, a thorough evaluation process begins to assess the startup&#39;s potential for growth, market viability, and alignment with Ivy Ventures&#39; investment focus. <br data-v-8a96ac27><br data-v-8a96ac27><br data-v-8a96ac27><div class="link" data-v-8a96ac27>`);
  _push(ssrRenderComponent(_component_NuxtLink, { to: "/contact" }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(ssrRenderComponent(_component_TheButton, { color: "#427AA1" }, {
          default: withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(`Contact Us`);
            } else {
              return [
                createTextVNode("Contact Us")
              ];
            }
          }),
          _: 1
        }, _parent2, _scopeId));
      } else {
        return [
          createVNode(_component_TheButton, { color: "#427AA1" }, {
            default: withCtx(() => [
              createTextVNode("Contact Us")
            ]),
            _: 1
          })
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</div></div><br data-v-8a96ac27><br data-v-8a96ac27><div id="Financing steps" data-v-8a96ac27><h2 data-v-8a96ac27>Financing steps and strategies at a glance</h2><div class="steps" data-v-8a96ac27> \u2022 <b data-v-8a96ac27>If the startup is deemed a suitable candidate for investment</b>, Ivy Ventures works closely with the founders to develop a financing strategy that aligns with the company&#39;s growth plans. <br data-v-8a96ac27><br data-v-8a96ac27> \u2022 This may involve <b data-v-8a96ac27>seed funding, early-stage investments, </b>or <b data-v-8a96ac27> subsequent funding rounds </b>as the startup progresses. <br data-v-8a96ac27><br data-v-8a96ac27> \u2022 Ivy Ventures also offers <b data-v-8a96ac27>guidance and support</b> in securing follow-on financing from other investors, leveraging its network and industry connections to facilitate the process. <br data-v-8a96ac27></div><div class="link" data-v-8a96ac27>`);
  _push(ssrRenderComponent(_component_NuxtLink, { to: "/projects" }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(ssrRenderComponent(_component_TheButton, { color: "#427AA1" }, {
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
          createVNode(_component_TheButton, { color: "#427AA1" }, {
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
  _push(`</div><br data-v-8a96ac27><br data-v-8a96ac27></div><br data-v-8a96ac27><div id="Managing expertise" data-v-8a96ac27><h2 data-v-8a96ac27>Ivy&#39;s managing expertise</h2> Ivy Ventures brings <b data-v-8a96ac27> more than just financial support</b> to its partners. The firm&#39;s experienced team provides <b data-v-8a96ac27>hands-on management expertise</b> and <b data-v-8a96ac27>strategic guidance </b>to help startups navigate various challenges. <br data-v-8a96ac27><br data-v-8a96ac27>This includes assistance in areas such as <i data-v-8a96ac27>business strategy, market positioning, operational efficiency, talent acquisition, and building a strong leadership team</i>. Ivy Ventures takes a collaborative approach, working closely with founders to identify opportunities, mitigate risks, and foster sustainable growth. Through active engagement and mentorship, Ivy Ventures aims to <b data-v-8a96ac27>empower startups</b> with the knowledge and resources needed to achieve their full potential. <br data-v-8a96ac27><br data-v-8a96ac27><br data-v-8a96ac27><br data-v-8a96ac27></div></div></main>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/how_it_works.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const how_it_works = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender], ["__scopeId", "data-v-8a96ac27"]]);

export { how_it_works as default };
//# sourceMappingURL=how_it_works-8a045d13.mjs.map
