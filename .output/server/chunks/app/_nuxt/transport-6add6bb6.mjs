import { _ as __nuxt_component_1 } from './nuxt-link-7dfe1055.mjs';
import { _ as __nuxt_component_1$1, a as __nuxt_component_3 } from './TheButton-864c6958.mjs';
import { _ as __nuxt_component_2 } from './Return-b6bae784.mjs';
import { a as _export_sfc, u as useRuntimeConfig } from '../server.mjs';
import { withAsyncContext, ref, computed, withCtx, createVNode, createTextVNode, unref, useSSRContext } from 'vue';
import { u as useFetch } from './fetch-b8116756.mjs';
import { ssrRenderComponent, ssrRenderList, ssrRenderAttr, ssrInterpolate } from 'vue/server-renderer';
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
  __name: "transport",
  __ssrInlineRender: true,
  async setup(__props) {
    let __temp, __restore;
    const { data: AllProjects } = ([__temp, __restore] = withAsyncContext(() => useFetch(useRuntimeConfig().baseURL + "/server/projects", "$UEex0DUe0A")), __temp = await __temp, __restore(), __temp);
    var projects;
    projects = AllProjects.value.filter((element) => element.project_areas.includes("Transport"));
    console.log("projects trs:", projects);
    const name = ref("");
    computed(() => {
      if (name.value == 0 || name.value == "")
        return projects.value;
      const arr = [];
      for (let project of projects.value) {
        if (project.project_name.toLowerCase().includes(name.value))
          arr.push(project);
      }
      return arr;
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_1;
      const _component_Overview = __nuxt_component_1$1;
      const _component_Return = __nuxt_component_2;
      const _component_TheButton = __nuxt_component_3;
      _push(`<!--[--><div class="introduction" data-v-49d27aec><div id="title" data-v-49d27aec><p data-v-49d27aec>Projects of transport</p></div></div><main data-v-49d27aec><ol class="breadcrumb" data-v-49d27aec><li class="breadcrumb-item" data-v-49d27aec>`);
      _push(ssrRenderComponent(_component_NuxtLink, { to: "/projects" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<a data-v-49d27aec${_scopeId}>Projects</a>`);
          } else {
            return [
              createVNode("a", null, "Projects")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</li><li class="breadcrumb-item" data-v-49d27aec>`);
      _push(ssrRenderComponent(_component_NuxtLink, { to: "/projects/transport" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<a data-v-49d27aec${_scopeId}>Transport</a>`);
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
        sections: ["The transport projects", "Discover the area", "Transport projects"]
      }, null, _parent));
      _push(ssrRenderComponent(_component_Return, null, null, _parent));
      _push(`<div class="thebody" data-v-49d27aec><div class="block" id="The transport projects" data-v-49d27aec><h2 data-v-49d27aec>The transport projects</h2> At Ivy Ventures, we take immense pride in the diverse range of projects and startups we have nurtured and supported throughout our journey. Our commitment to driving innovation and making a positive impact in the world is reflected in the exceptional ventures that we have had the privilege to work with. Our portfolio of supported projects spans a wide array of industries, from groundbreaking environmental initiatives to revolutionary transportation solutions and life-changing healthcare innovations. Each project represents our dedication to supporting startups that are not only financially promising but also aligned with our mission to create a better future. We are proud to celebrate the achievements of our supported projects, which serve as beacons of innovation, social impact, and technological advancement. From clean energy solutions that combat climate change to transformative transportation technologies that revolutionize mobility, and from breakthrough medical treatments that save lives to digital health platforms that enhance access to care, our supported projects are making a difference in their respective domains. <br data-v-49d27aec></div><br data-v-49d27aec><div class="block" id="Discover the area" data-v-49d27aec><div class="buttons" data-v-49d27aec>`);
      _push(ssrRenderComponent(_component_NuxtLink, { to: "/areas/transport/" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_TheButton, { color: "#679436" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`Discover this area`);
                } else {
                  return [
                    createTextVNode("Discover this area")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_TheButton, { color: "#679436" }, {
                default: withCtx(() => [
                  createTextVNode("Discover this area")
                ]),
                _: 1
              })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></div><br data-v-49d27aec><h2 data-v-49d27aec>Transport projects</h2><div class="block" id="Transport projects" data-v-49d27aec> Here you can see our faster growing and moving projects! <div class="projects" data-v-49d27aec><!--[-->`);
      ssrRenderList(unref(projects), (project) => {
        _push(`<div data-v-49d27aec><a class="project"${ssrRenderAttr("href", `/projects/${project.id}`)} data-v-49d27aec><h3 data-v-49d27aec>${ssrInterpolate(project.project_name)}</h3><br data-v-49d27aec><img${ssrRenderAttr("src", "../" + project.logo)} alt="Project Image" data-v-49d27aec><p data-v-49d27aec></p></a></div>`);
      });
      _push(`<!--]--></div></div></div></main><!--]-->`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/projects/transport.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const transport = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-49d27aec"]]);

export { transport as default };
//# sourceMappingURL=transport-6add6bb6.mjs.map
