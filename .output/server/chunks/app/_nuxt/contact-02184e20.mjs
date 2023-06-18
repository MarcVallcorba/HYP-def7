import { b as buildAssetsURL } from '../../handlers/renderer.mjs';
import { _ as __nuxt_component_1 } from './nuxt-link-7dfe1055.mjs';
import { _ as __nuxt_component_1$1, a as __nuxt_component_3 } from './TheButton-864c6958.mjs';
import { _ as __nuxt_component_2 } from './Return-b6bae784.mjs';
import { withCtx, createVNode, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderAttr, ssrRenderComponent } from 'vue/server-renderer';
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

const _imports_0 = "" + buildAssetsURL("mail.ac6a37e6.png");
const _sfc_main = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  const _component_NuxtLink = __nuxt_component_1;
  const _component_Overview = __nuxt_component_1$1;
  const _component_Return = __nuxt_component_2;
  const _component_TheButton = __nuxt_component_3;
  _push(`<main${ssrRenderAttrs(_attrs)} data-v-85a3a362><div class="introduction" data-v-85a3a362><img${ssrRenderAttr("src", _imports_0)} alt="mail" class="contact-img" data-v-85a3a362><div id="title" data-v-85a3a362><p data-v-85a3a362>Contact us</p></div></div><ol class="breadcrumb" data-v-85a3a362><li class="breadcrumb-item" data-v-85a3a362>`);
  _push(ssrRenderComponent(_component_NuxtLink, { to: "/contact" }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<a data-v-85a3a362${_scopeId}>Contact us</a>`);
      } else {
        return [
          createVNode("a", null, "Contact us")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</li></ol>`);
  _push(ssrRenderComponent(_component_Overview, {
    class: "overview",
    sections: ["Form", "Useful phone numbers", "Useful emails"]
  }, null, _parent));
  _push(ssrRenderComponent(_component_Return, { class: "return_top" }, null, _parent));
  _push(`<div class="thebody" data-v-85a3a362><div id="Form" data-v-85a3a362><br data-v-85a3a362><br data-v-85a3a362><h2 data-v-85a3a362>Contact form</h2><br data-v-85a3a362><div class="contact-us" data-v-85a3a362><br data-v-85a3a362><p data-v-85a3a362>A question ? You want to take part in this adventure ? </p><p data-v-85a3a362>Don&#39;t hesitate to fill this form to contact us !</p><form data-v-85a3a362><div data-v-85a3a362><label for="name" data-v-85a3a362>Name</label><input type="text" id="name" placeholder="Thomas" required data-v-85a3a362></div><div data-v-85a3a362><label for="email" data-v-85a3a362>Email</label><input type="email" id="email" placeholder="example@mail.com" required data-v-85a3a362></div><div data-v-85a3a362><label for="phone" data-v-85a3a362>Phone number</label><input type="phone" id="phone" placeholder="+49...." required data-v-85a3a362></div><div data-v-85a3a362><label for="subject" data-v-85a3a362>Choose the subject of your message</label><select name="subject" id="subject" required data-v-85a3a362><option value="" disabled selected hidden data-v-85a3a362></option><option value="information" data-v-85a3a362>I want more information</option><option value="new_project" data-v-85a3a362>I want to share my project</option><option value="other" data-v-85a3a362>Other...</option></select></div><div data-v-85a3a362><label for="message" data-v-85a3a362>Your message</label><textarea id="message" name="message" placeholder="...." required data-v-85a3a362></textarea></div><div data-v-85a3a362><button type="submit" id="submit" data-v-85a3a362>`);
  _push(ssrRenderComponent(_component_TheButton, { color: "white" }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<a data-v-85a3a362${_scopeId}>Send the message</a>`);
      } else {
        return [
          createVNode("a", null, "Send the message")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</button></div></form></div></div><div id="Useful phone numbers" data-v-85a3a362><h2 data-v-85a3a362>Phone numbers</h2><br data-v-85a3a362> English responsable +44 7 77 66 66 77 <br data-v-85a3a362> Italian responsable +39 7 66 66 77 77 <br data-v-85a3a362> French responsible +33 6 66 77 77 66 <br data-v-85a3a362> Spanish responsible +34 6 77 77 66 66 </div><br data-v-85a3a362><br data-v-85a3a362><br data-v-85a3a362><div id="Useful emails" data-v-85a3a362><h2 data-v-85a3a362>Emails</h2><br data-v-85a3a362> information@ivy.com <br data-v-85a3a362> firm@ivy.com <br data-v-85a3a362> customers@ivy.com </div></div></main>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/contact.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const contact = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender], ["__scopeId", "data-v-85a3a362"]]);

export { contact as default };
//# sourceMappingURL=contact-02184e20.mjs.map
