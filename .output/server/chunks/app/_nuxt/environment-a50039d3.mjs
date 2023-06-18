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
  __name: "environment",
  __ssrInlineRender: true,
  async setup(__props) {
    let __temp, __restore;
    const { data: AllProjects } = ([__temp, __restore] = withAsyncContext(() => useFetch(useRuntimeConfig().baseURL + "/server/projects", "$f3bBefvdGY")), __temp = await __temp, __restore(), __temp);
    var projects;
    projects = AllProjects.value.filter((element) => element.project_areas.includes("Environment"));
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
      _push(`<!--[--><div class="introduction" data-v-9d2c83b8><div id="title" data-v-9d2c83b8><p data-v-9d2c83b8>Projects of environment</p></div></div><main data-v-9d2c83b8><ol class="breadcrumb" data-v-9d2c83b8><li class="breadcrumb-item" data-v-9d2c83b8>`);
      _push(ssrRenderComponent(_component_NuxtLink, { to: "/projects" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<a data-v-9d2c83b8${_scopeId}>Projects</a>`);
          } else {
            return [
              createVNode("a", null, "Projects")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</li><li class="breadcrumb-item" data-v-9d2c83b8>`);
      _push(ssrRenderComponent(_component_NuxtLink, { to: "/projects/transport" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<a data-v-9d2c83b8${_scopeId}>Environment</a>`);
          } else {
            return [
              createVNode("a", null, "Environment")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</li></ol>`);
      _push(ssrRenderComponent(_component_Overview, {
        class: "overview",
        sections: ["The environment projects", "Discover the area", "Environment projects"]
      }, null, _parent));
      _push(ssrRenderComponent(_component_Return, null, null, _parent));
      _push(`<div class="thebody" data-v-9d2c83b8><div class="block" id="The environment projects" data-v-9d2c83b8><h2 data-v-9d2c83b8>The environment projects</h2> At Ivy Ventures, we take immense pride in the diverse range of projects and startups we have nurtured and supported throughout our journey. Our commitment to driving innovation and making a positive impact in the world is reflected in the exceptional ventures that we have had the privilege to work with. Our portfolio of supported projects spans a wide array of industries, from groundbreaking environmental initiatives to revolutionary transportation solutions and life-changing healthcare innovations. Each project represents our dedication to supporting startups that are not only financially promising but also aligned with our mission to create a better future. We are proud to celebrate the achievements of our supported projects, which serve as beacons of innovation, social impact, and technological advancement. From clean energy solutions that combat climate change to transformative transportation technologies that revolutionize mobility, and from breakthrough medical treatments that save lives to digital health platforms that enhance access to care, our supported projects are making a difference in their respective domains. <br data-v-9d2c83b8></div><br data-v-9d2c83b8><div class="block" id="Discover the area" data-v-9d2c83b8><div class="buttons" data-v-9d2c83b8>`);
      _push(ssrRenderComponent(_component_NuxtLink, { to: "/areas/environment/" }, {
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
      _push(`</div></div><br data-v-9d2c83b8><h2 data-v-9d2c83b8>Environment projects</h2><div class="block" id="Environment projects" data-v-9d2c83b8> Here are our most ecofriendly projects! <div class="projects" data-v-9d2c83b8><!--[-->`);
      ssrRenderList(unref(projects), (project) => {
        _push(`<div data-v-9d2c83b8><a class="project"${ssrRenderAttr("href", `/projects/${project.id}`)} data-v-9d2c83b8><h3 data-v-9d2c83b8>${ssrInterpolate(project.project_name)}</h3><br data-v-9d2c83b8><img${ssrRenderAttr("src", "../" + project.logo)} alt="Project Image" data-v-9d2c83b8><p data-v-9d2c83b8></p></a></div>`);
      });
      _push(`<!--]--></div></div></div></main><!--]-->`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/projects/environment.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const environment = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-9d2c83b8"]]);

export { environment as default };
//# sourceMappingURL=environment-a50039d3.mjs.map
