import { _ as __nuxt_component_1, a as __nuxt_component_3 } from './TheButton-864c6958.mjs';
import { _ as __nuxt_component_1$1 } from './nuxt-link-7dfe1055.mjs';
import { a as _export_sfc, f as useRoute, u as useRuntimeConfig } from '../server.mjs';
import { withAsyncContext, withCtx, createTextVNode, createVNode, unref, toDisplayString, useSSRContext } from 'vue';
import { u as useFetch } from './fetch-b8116756.mjs';
import { ssrRenderComponent, ssrInterpolate, ssrRenderAttr, ssrRenderStyle } from 'vue/server-renderer';
import 'ufo';
import 'ofetch';
import 'hookable';
import 'unctx';
import '@unhead/ssr';
import 'unhead';
import '@unhead/shared';
import 'vue-router';
import 'h3';
import 'destr';
import 'cookie-es';
import 'ohash';
import '@supabase/supabase-js';
import 'defu';
import '../../nitro/node-server.mjs';
import 'node-fetch-native/polyfill';
import 'node:http';
import 'node:https';
import 'unenv/runtime/fetch/index';
import 'scule';
import 'unstorage';
import 'radix3';
import 'node:fs';
import 'node:url';
import 'pathe';
import 'express';
import 'sequelize';
import 'url';
import 'path';

const _sfc_main = {
  __name: "[id]",
  __ssrInlineRender: true,
  async setup(__props) {
    let __temp, __restore;
    const route = useRoute();
    const id = route.params.id;
    const { data: project } = ([__temp, __restore] = withAsyncContext(() => useFetch(useRuntimeConfig().baseURL + "/server/projects/" + id, "$NLv8nVzATR")), __temp = await __temp, __restore(), __temp);
    console.log("project supervisor name:", project.value.supervisor_name);
    const { data: team } = ([__temp, __restore] = withAsyncContext(() => useFetch(useRuntimeConfig().baseURL + "/server/teams", "$kQEDeYUFLT")), __temp = await __temp, __restore(), __temp);
    const supervisor = team.value.find((element) => element.name === project.value.supervisor_name);
    console.log("project supervisor:", supervisor.id);
    const { data: area } = ([__temp, __restore] = withAsyncContext(() => useFetch(useRuntimeConfig().baseURL + "/server/area", "$AVExNmwMbt")), __temp = await __temp, __restore(), __temp);
    const project_areas = project.value.project_areas;
    console.log("project areas:", project_areas);
    const areasArray = project_areas.split(";");
    console.log("areas array:", areasArray);
    const area1 = area.value.find((element) => element.name === areasArray[0]);
    const area2 = area.value.find((element) => element.name === areasArray[1]);
    var twoAreas;
    if (area2 == null) {
      twoAreas = "false";
      console.log("area 1:", area1);
      console.log("two aread:", twoAreas);
    } else {
      twoAreas = "true";
      console.log("area 1:", area1.id);
      console.log("area 2:", area2.id);
      console.log("two aread:", twoAreas);
    }
    return (_ctx, _push, _parent, _attrs) => {
      const _component_Overview = __nuxt_component_1;
      const _component_NuxtLink = __nuxt_component_1$1;
      const _component_TheButton = __nuxt_component_3;
      _push(`<!--[-->`);
      _push(ssrRenderComponent(_component_Overview, {
        class: "overview",
        sections: ["Introducing the startup", "The team", "More about the product", "Related areas", "The supervisor of the project"]
      }, null, _parent));
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/projects",
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
                  _push3(`See all the projects`);
                } else {
                  return [
                    createTextVNode("See all the projects")
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
                  createTextVNode("See all the projects")
                ]),
                _: 1
              })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<main data-v-0f9db192><div class="thebody" data-v-0f9db192><div class="project_name" data-v-0f9db192>${ssrInterpolate(unref(project).project_name)}\xA0 <img${ssrRenderAttr("src", "../" + unref(project).logo)} width="90" height="90" data-v-0f9db192></div><div class="block" id="Introducing the startup" data-v-0f9db192><h2 data-v-0f9db192>Introducing ${ssrInterpolate(unref(project).project_name)}</h2><img${ssrRenderAttr("src", "../" + unref(project).image)} class="imgtowrap" width="500" height="500" data-v-0f9db192> ${ssrInterpolate(unref(project).startup_presentation)}</div><br data-v-0f9db192><br data-v-0f9db192><h2 data-v-0f9db192>${ssrInterpolate(unref(project).project_name)}&#39;s team</h2> ${ssrInterpolate(unref(project).startup_team)} <br data-v-0f9db192><br data-v-0f9db192><br data-v-0f9db192><h2 data-v-0f9db192>More about ${ssrInterpolate(unref(project).project_name)}&#39;s service </h2> ${ssrInterpolate(unref(project).startup_team)} <br data-v-0f9db192><br data-v-0f9db192><br data-v-0f9db192><div class="block" id="The supervisor of the project" data-v-0f9db192><h2 data-v-0f9db192>${ssrInterpolate(unref(supervisor).name)}, the supervisor of the project</h2><img${ssrRenderAttr("src", "../" + unref(supervisor).image)} class="imgtowrapsupervisor" alt="Avatar" style="${ssrRenderStyle({ "width": "300px", "height": "300px" })}" data-v-0f9db192> ${ssrInterpolate(unref(supervisor).education)} ${ssrInterpolate(unref(supervisor).job_experience)} ${ssrInterpolate(unref(supervisor).main_expertise)} <br data-v-0f9db192><br data-v-0f9db192><a${ssrRenderAttr("href", `/team/${unref(supervisor).id}`)} data-v-0f9db192>`);
      _push(ssrRenderComponent(_component_TheButton, { color: "#679436" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`Learn more`);
          } else {
            return [
              createTextVNode("Learn more")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</a></div><div class="block" id="Related areas" data-v-0f9db192><h2 data-v-0f9db192>Related areas </h2> This project is asociated with the following areas, click to discover what they are about and find similar projects! <br data-v-0f9db192><br data-v-0f9db192><div class="buttons" data-v-0f9db192><a${ssrRenderAttr("href", `/areas/${unref(area1).name}`)} data-v-0f9db192>`);
      _push(ssrRenderComponent(_component_TheButton, { color: "#679436" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`${ssrInterpolate(unref(area1).name)}`);
          } else {
            return [
              createTextVNode(toDisplayString(unref(area1).name), 1)
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</a> \xA0 \xA0 \xA0 \xA0 \xA0 \xA0 \xA0 \xA0 `);
      if (unref(twoAreas) == "true") {
        _push(`<div data-v-0f9db192><a${ssrRenderAttr("href", `/areas/${unref(area2).name}`)} data-v-0f9db192>`);
        _push(ssrRenderComponent(_component_TheButton, { color: "#679436" }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`${ssrInterpolate(unref(area2).name)}`);
            } else {
              return [
                createTextVNode(toDisplayString(unref(area2).name), 1)
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(`</a></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div></div></div></main><!--]-->`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/projects/[id].vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const _id_ = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-0f9db192"]]);

export { _id_ as default };
//# sourceMappingURL=_id_-44976617.mjs.map
