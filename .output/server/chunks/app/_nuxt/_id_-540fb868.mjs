import { _ as __nuxt_component_1 } from './nuxt-link-7dfe1055.mjs';
import { a as __nuxt_component_3, _ as __nuxt_component_1$1 } from './TheButton-864c6958.mjs';
import { _ as __nuxt_component_2 } from './Return-b6bae784.mjs';
import { a as _export_sfc, f as useRoute, u as useRuntimeConfig } from '../server.mjs';
import { withAsyncContext, unref, withCtx, createVNode, toDisplayString, createTextVNode, useSSRContext } from 'vue';
import { u as useFetch } from './fetch-b8116756.mjs';
import { ssrRenderAttr, ssrInterpolate, ssrRenderComponent, ssrRenderStyle, ssrRenderList } from 'vue/server-renderer';
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
  __name: "[id]",
  __ssrInlineRender: true,
  async setup(__props) {
    let __temp, __restore;
    const route = useRoute();
    const id = route.params.id;
    const { data: team } = ([__temp, __restore] = withAsyncContext(() => useFetch(useRuntimeConfig().baseURL + "/server/teams/" + id, "$lUf5eGt3o7")), __temp = await __temp, __restore(), __temp);
    const { data: AllProjects } = ([__temp, __restore] = withAsyncContext(() => useFetch(useRuntimeConfig().baseURL + "/server/projects", "$DRiemIAIDY")), __temp = await __temp, __restore(), __temp);
    var projects;
    projects = AllProjects.value.filter((element) => element.supervisor_name === team.value.name);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_1;
      const _component_TheButton = __nuxt_component_3;
      const _component_Overview = __nuxt_component_1$1;
      const _component_Return = __nuxt_component_2;
      _push(`<!--[--><div class="main-team" data-v-1c623712><img${ssrRenderAttr("src", _imports_0)} alt="handshake" class="handshake-img" data-v-1c623712><div class="image-container2" data-v-1c623712><div class="overlay" data-v-1c623712>${ssrInterpolate(unref(team).name)}</div></div></div><ol class="breadcrumb" data-v-1c623712><li class="breadcrumb-item" data-v-1c623712>`);
      _push(ssrRenderComponent(_component_NuxtLink, { to: "/team" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<a data-v-1c623712${_scopeId}>Our team</a>`);
          } else {
            return [
              createVNode("a", null, "Our team")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</li><li class="breadcrumb-item" data-v-1c623712>`);
      _push(ssrRenderComponent(_component_NuxtLink, { to: "/team/id" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<a data-v-1c623712${_scopeId}>${ssrInterpolate(unref(team).name)}</a>`);
          } else {
            return [
              createVNode("a", null, toDisplayString(unref(team).name), 1)
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</li></ol><main data-v-1c623712>`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/team",
        class: "link"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_TheButton, {
              color: "#427AA1",
              textcolor: "white"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`See the whole team`);
                } else {
                  return [
                    createTextVNode("See the whole team")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_TheButton, {
                color: "#427AA1",
                textcolor: "white"
              }, {
                default: withCtx(() => [
                  createTextVNode("See the whole team")
                ]),
                _: 1
              })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_Overview, {
        class: "overview",
        sections: ["Education", "Job Experience", "Main Expertise", "Supervised Projects"]
      }, null, _parent));
      _push(ssrRenderComponent(_component_Return, { class: "return_top" }, null, _parent));
      _push(`<div class="body-employee" data-v-1c623712><div class="employee-role" data-v-1c623712>${ssrInterpolate(unref(team).role)}</div><div class="employee-image-container" data-v-1c623712><img style="${ssrRenderStyle({ "max-width": "40%" })}"${ssrRenderAttr("src", "../" + unref(team).image)} data-v-1c623712></div><div id="Education" data-v-1c623712><div class="section" data-v-1c623712>Education</div> ${ssrInterpolate(unref(team).education)}</div><div id="Job Experience" data-v-1c623712><div class="section" data-v-1c623712>Job Experience</div> ${ssrInterpolate(unref(team).job_experience)}</div><div id="Main Expertise" data-v-1c623712><div class="section" data-v-1c623712>Main Expertise</div> ${ssrInterpolate(unref(team).main_expertise)}</div><div id="Supervised Projects" data-v-1c623712><div class="section" data-v-1c623712>Supervised Projects</div> ${ssrInterpolate(unref(team).name)} worked on many projects with Ivy Ventures, but in particular, ${ssrInterpolate(unref(team).name)} supervised so far: <div class="projects" data-v-1c623712><!--[-->`);
      ssrRenderList(unref(projects), (project) => {
        _push(`<div data-v-1c623712><a class="project"${ssrRenderAttr("href", `/projects/${project.id}`)} data-v-1c623712><h3 data-v-1c623712>${ssrInterpolate(project.project_name)}</h3><br data-v-1c623712><img${ssrRenderAttr("src", "../" + project.logo)} alt="Project Image" data-v-1c623712><p data-v-1c623712></p></a></div>`);
      });
      _push(`<!--]--></div></div></div></main><!--]-->`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/team/[id].vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const _id_ = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-1c623712"]]);

export { _id_ as default };
//# sourceMappingURL=_id_-540fb868.mjs.map
