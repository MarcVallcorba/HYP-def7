globalThis._importMeta_=globalThis._importMeta_||{url:"file:///_entry.js",env:process.env};import 'node-fetch-native/polyfill';
import { Server as Server$1 } from 'node:http';
import { Server } from 'node:https';
import destr from 'destr';
import { defineEventHandler, handleCacheHeaders, createEvent, eventHandler, setHeaders, sendRedirect, proxyRequest, getRequestHeader, setResponseStatus, setResponseHeader, getRequestHeaders, createError, fromNodeMiddleware, assertMethod, readBody, setCookie, createApp, createRouter as createRouter$1, toNodeListener, fetchWithEvent, lazyEventHandler } from 'h3';
import { createFetch as createFetch$1, Headers } from 'ofetch';
import { createCall, createFetch } from 'unenv/runtime/fetch/index';
import { createHooks } from 'hookable';
import { snakeCase } from 'scule';
import defu, { defuFn } from 'defu';
import { hash } from 'ohash';
import { parseURL, withoutBase, joinURL, withQuery, withLeadingSlash, withoutTrailingSlash } from 'ufo';
import { createStorage, prefixStorage } from 'unstorage';
import { toRouteMatcher, createRouter } from 'radix3';
import { promises } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { dirname, resolve } from 'pathe';
import express from 'express';
import { Sequelize, DataTypes } from 'sequelize';
import { fileURLToPath as fileURLToPath$1 } from 'url';
import path from 'path';

const inlineAppConfig = {};



const appConfig = defuFn(inlineAppConfig);

const _runtimeConfig = {"app":{"baseURL":"/","buildAssetsDir":"/_nuxt/","cdnURL":""},"nitro":{"envPrefix":"NUXT_","routeRules":{"/__nuxt_error":{"cache":false},"/_nuxt/**":{"headers":{"cache-control":"public, max-age=31536000, immutable"}}}},"public":{"baseURL":"http://localhost:3000","supabase":{"url":"https://kdyxygaqowvcmrxyuyfq.supabase.co","key":"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImtkeXh5Z2Fxb3d2Y21yeHl1eWZxIiwicm9sZSI6ImFub24iLCJpYXQiOjE2ODcwMDE0OTksImV4cCI6MjAwMjU3NzQ5OX0.cydz1gB9POP5jyFD9tQvs9un9ECJK7lNgeXqTMOBeiQ","client":{"auth":{"detectSessionInUrl":true,"persistSession":true,"autoRefreshToken":true}},"redirect":false,"cookies":{"name":"sb","lifetime":28800,"domain":"","path":"/","sameSite":"lax"}}},"supabase":{"serviceKey":""}};
const ENV_PREFIX = "NITRO_";
const ENV_PREFIX_ALT = _runtimeConfig.nitro.envPrefix ?? process.env.NITRO_ENV_PREFIX ?? "_";
overrideConfig(_runtimeConfig);
const runtimeConfig = deepFreeze(_runtimeConfig);
const useRuntimeConfig = () => runtimeConfig;
deepFreeze(appConfig);
function getEnv(key) {
  const envKey = snakeCase(key).toUpperCase();
  return destr(
    process.env[ENV_PREFIX + envKey] ?? process.env[ENV_PREFIX_ALT + envKey]
  );
}
function isObject(input) {
  return typeof input === "object" && !Array.isArray(input);
}
function overrideConfig(obj, parentKey = "") {
  for (const key in obj) {
    const subKey = parentKey ? `${parentKey}_${key}` : key;
    const envValue = getEnv(subKey);
    if (isObject(obj[key])) {
      if (isObject(envValue)) {
        obj[key] = { ...obj[key], ...envValue };
      }
      overrideConfig(obj[key], subKey);
    } else {
      obj[key] = envValue ?? obj[key];
    }
  }
}
function deepFreeze(object) {
  const propNames = Object.getOwnPropertyNames(object);
  for (const name of propNames) {
    const value = object[name];
    if (value && typeof value === "object") {
      deepFreeze(value);
    }
  }
  return Object.freeze(object);
}

const _assets = {

};

function normalizeKey(key) {
  if (!key) {
    return "";
  }
  return key.split("?")[0].replace(/[/\\]/g, ":").replace(/:+/g, ":").replace(/^:|:$/g, "");
}

const assets$1 = {
  getKeys() {
    return Promise.resolve(Object.keys(_assets))
  },
  hasItem (id) {
    id = normalizeKey(id);
    return Promise.resolve(id in _assets)
  },
  getItem (id) {
    id = normalizeKey(id);
    return Promise.resolve(_assets[id] ? _assets[id].import() : null)
  },
  getMeta (id) {
    id = normalizeKey(id);
    return Promise.resolve(_assets[id] ? _assets[id].meta : {})
  }
};

const storage = createStorage({});

storage.mount('/assets', assets$1);

function useStorage(base = "") {
  return base ? prefixStorage(storage, base) : storage;
}

const defaultCacheOptions = {
  name: "_",
  base: "/cache",
  swr: true,
  maxAge: 1
};
function defineCachedFunction(fn, opts = {}) {
  opts = { ...defaultCacheOptions, ...opts };
  const pending = {};
  const group = opts.group || "nitro/functions";
  const name = opts.name || fn.name || "_";
  const integrity = hash([opts.integrity, fn, opts]);
  const validate = opts.validate || (() => true);
  async function get(key, resolver, shouldInvalidateCache) {
    const cacheKey = [opts.base, group, name, key + ".json"].filter(Boolean).join(":").replace(/:\/$/, ":index");
    const entry = await useStorage().getItem(cacheKey) || {};
    const ttl = (opts.maxAge ?? opts.maxAge ?? 0) * 1e3;
    if (ttl) {
      entry.expires = Date.now() + ttl;
    }
    const expired = shouldInvalidateCache || entry.integrity !== integrity || ttl && Date.now() - (entry.mtime || 0) > ttl || !validate(entry);
    const _resolve = async () => {
      const isPending = pending[key];
      if (!isPending) {
        if (entry.value !== void 0 && (opts.staleMaxAge || 0) >= 0 && opts.swr === false) {
          entry.value = void 0;
          entry.integrity = void 0;
          entry.mtime = void 0;
          entry.expires = void 0;
        }
        pending[key] = Promise.resolve(resolver());
      }
      try {
        entry.value = await pending[key];
      } catch (error) {
        if (!isPending) {
          delete pending[key];
        }
        throw error;
      }
      if (!isPending) {
        entry.mtime = Date.now();
        entry.integrity = integrity;
        delete pending[key];
        if (validate(entry)) {
          useStorage().setItem(cacheKey, entry).catch((error) => console.error("[nitro] [cache]", error));
        }
      }
    };
    const _resolvePromise = expired ? _resolve() : Promise.resolve();
    if (opts.swr && entry.value) {
      _resolvePromise.catch(console.error);
      return entry;
    }
    return _resolvePromise.then(() => entry);
  }
  return async (...args) => {
    const shouldBypassCache = opts.shouldBypassCache?.(...args);
    if (shouldBypassCache) {
      return fn(...args);
    }
    const key = await (opts.getKey || getKey)(...args);
    const shouldInvalidateCache = opts.shouldInvalidateCache?.(...args);
    const entry = await get(key, () => fn(...args), shouldInvalidateCache);
    let value = entry.value;
    if (opts.transform) {
      value = await opts.transform(entry, ...args) || value;
    }
    return value;
  };
}
const cachedFunction = defineCachedFunction;
function getKey(...args) {
  return args.length > 0 ? hash(args, {}) : "";
}
function escapeKey(key) {
  return key.replace(/[^\dA-Za-z]/g, "");
}
function defineCachedEventHandler(handler, opts = defaultCacheOptions) {
  const _opts = {
    ...opts,
    getKey: async (event) => {
      const key = await opts.getKey?.(event);
      if (key) {
        return escapeKey(key);
      }
      const url = event.node.req.originalUrl || event.node.req.url;
      const friendlyName = escapeKey(decodeURI(parseURL(url).pathname)).slice(
        0,
        16
      );
      const urlHash = hash(url);
      return `${friendlyName}.${urlHash}`;
    },
    validate: (entry) => {
      if (entry.value.code >= 400) {
        return false;
      }
      if (entry.value.body === void 0) {
        return false;
      }
      return true;
    },
    group: opts.group || "nitro/handlers",
    integrity: [opts.integrity, handler]
  };
  const _cachedHandler = cachedFunction(
    async (incomingEvent) => {
      const reqProxy = cloneWithProxy(incomingEvent.node.req, { headers: {} });
      const resHeaders = {};
      let _resSendBody;
      const resProxy = cloneWithProxy(incomingEvent.node.res, {
        statusCode: 200,
        getHeader(name) {
          return resHeaders[name];
        },
        setHeader(name, value) {
          resHeaders[name] = value;
          return this;
        },
        getHeaderNames() {
          return Object.keys(resHeaders);
        },
        hasHeader(name) {
          return name in resHeaders;
        },
        removeHeader(name) {
          delete resHeaders[name];
        },
        getHeaders() {
          return resHeaders;
        },
        end(chunk, arg2, arg3) {
          if (typeof chunk === "string") {
            _resSendBody = chunk;
          }
          if (typeof arg2 === "function") {
            arg2();
          }
          if (typeof arg3 === "function") {
            arg3();
          }
          return this;
        },
        write(chunk, arg2, arg3) {
          if (typeof chunk === "string") {
            _resSendBody = chunk;
          }
          if (typeof arg2 === "function") {
            arg2();
          }
          if (typeof arg3 === "function") {
            arg3();
          }
          return this;
        },
        writeHead(statusCode, headers2) {
          this.statusCode = statusCode;
          if (headers2) {
            for (const header in headers2) {
              this.setHeader(header, headers2[header]);
            }
          }
          return this;
        }
      });
      const event = createEvent(reqProxy, resProxy);
      event.context = incomingEvent.context;
      const body = await handler(event) || _resSendBody;
      const headers = event.node.res.getHeaders();
      headers.etag = headers.Etag || headers.etag || `W/"${hash(body)}"`;
      headers["last-modified"] = headers["Last-Modified"] || headers["last-modified"] || (/* @__PURE__ */ new Date()).toUTCString();
      const cacheControl = [];
      if (opts.swr) {
        if (opts.maxAge) {
          cacheControl.push(`s-maxage=${opts.maxAge}`);
        }
        if (opts.staleMaxAge) {
          cacheControl.push(`stale-while-revalidate=${opts.staleMaxAge}`);
        } else {
          cacheControl.push("stale-while-revalidate");
        }
      } else if (opts.maxAge) {
        cacheControl.push(`max-age=${opts.maxAge}`);
      }
      if (cacheControl.length > 0) {
        headers["cache-control"] = cacheControl.join(", ");
      }
      const cacheEntry = {
        code: event.node.res.statusCode,
        headers,
        body
      };
      return cacheEntry;
    },
    _opts
  );
  return defineEventHandler(async (event) => {
    if (opts.headersOnly) {
      if (handleCacheHeaders(event, { maxAge: opts.maxAge })) {
        return;
      }
      return handler(event);
    }
    const response = await _cachedHandler(event);
    if (event.node.res.headersSent || event.node.res.writableEnded) {
      return response.body;
    }
    if (handleCacheHeaders(event, {
      modifiedTime: new Date(response.headers["last-modified"]),
      etag: response.headers.etag,
      maxAge: opts.maxAge
    })) {
      return;
    }
    event.node.res.statusCode = response.code;
    for (const name in response.headers) {
      event.node.res.setHeader(name, response.headers[name]);
    }
    return response.body;
  });
}
function cloneWithProxy(obj, overrides) {
  return new Proxy(obj, {
    get(target, property, receiver) {
      if (property in overrides) {
        return overrides[property];
      }
      return Reflect.get(target, property, receiver);
    },
    set(target, property, value, receiver) {
      if (property in overrides) {
        overrides[property] = value;
        return true;
      }
      return Reflect.set(target, property, value, receiver);
    }
  });
}
const cachedEventHandler = defineCachedEventHandler;

const config$1 = useRuntimeConfig();
const _routeRulesMatcher = toRouteMatcher(
  createRouter({ routes: config$1.nitro.routeRules })
);
function createRouteRulesHandler() {
  return eventHandler((event) => {
    const routeRules = getRouteRules(event);
    if (routeRules.headers) {
      setHeaders(event, routeRules.headers);
    }
    if (routeRules.redirect) {
      return sendRedirect(
        event,
        routeRules.redirect.to,
        routeRules.redirect.statusCode
      );
    }
    if (routeRules.proxy) {
      let target = routeRules.proxy.to;
      if (target.endsWith("/**")) {
        let targetPath = event.path;
        const strpBase = routeRules.proxy._proxyStripBase;
        if (strpBase) {
          targetPath = withoutBase(targetPath, strpBase);
        }
        target = joinURL(target.slice(0, -3), targetPath);
      }
      return proxyRequest(event, target, {
        fetch: $fetch.raw,
        ...routeRules.proxy
      });
    }
  });
}
function getRouteRules(event) {
  event.context._nitro = event.context._nitro || {};
  if (!event.context._nitro.routeRules) {
    const path = new URL(event.node.req.url, "http://localhost").pathname;
    event.context._nitro.routeRules = getRouteRulesForPath(
      withoutBase(path, useRuntimeConfig().app.baseURL)
    );
  }
  return event.context._nitro.routeRules;
}
function getRouteRulesForPath(path) {
  return defu({}, ..._routeRulesMatcher.matchAll(path).reverse());
}

const plugins = [
  
];

function hasReqHeader(event, name, includes) {
  const value = getRequestHeader(event, name);
  return value && typeof value === "string" && value.toLowerCase().includes(includes);
}
function isJsonRequest(event) {
  return hasReqHeader(event, "accept", "application/json") || hasReqHeader(event, "user-agent", "curl/") || hasReqHeader(event, "user-agent", "httpie/") || hasReqHeader(event, "sec-fetch-mode", "cors") || event.path.startsWith("/api/") || event.path.endsWith(".json");
}
function normalizeError(error) {
  const cwd = typeof process.cwd === "function" ? process.cwd() : "/";
  const stack = (error.stack || "").split("\n").splice(1).filter((line) => line.includes("at ")).map((line) => {
    const text = line.replace(cwd + "/", "./").replace("webpack:/", "").replace("file://", "").trim();
    return {
      text,
      internal: line.includes("node_modules") && !line.includes(".cache") || line.includes("internal") || line.includes("new Promise")
    };
  });
  const statusCode = error.statusCode || 500;
  const statusMessage = error.statusMessage ?? (statusCode === 404 ? "Not Found" : "");
  const message = error.message || error.toString();
  return {
    stack,
    statusCode,
    statusMessage,
    message
  };
}

const errorHandler = (async function errorhandler(error, event) {
  const { stack, statusCode, statusMessage, message } = normalizeError(error);
  const errorObject = {
    url: event.node.req.url,
    statusCode,
    statusMessage,
    message,
    stack: "",
    data: error.data
  };
  setResponseStatus(event, errorObject.statusCode !== 200 && errorObject.statusCode || 500, errorObject.statusMessage);
  if (error.unhandled || error.fatal) {
    const tags = [
      "[nuxt]",
      "[request error]",
      error.unhandled && "[unhandled]",
      error.fatal && "[fatal]",
      Number(errorObject.statusCode) !== 200 && `[${errorObject.statusCode}]`
    ].filter(Boolean).join(" ");
    console.error(tags, errorObject.message + "\n" + stack.map((l) => "  " + l.text).join("  \n"));
  }
  if (isJsonRequest(event)) {
    setResponseHeader(event, "Content-Type", "application/json");
    event.node.res.end(JSON.stringify(errorObject));
    return;
  }
  const isErrorPage = event.node.req.url?.startsWith("/__nuxt_error");
  const res = !isErrorPage ? await useNitroApp().localFetch(withQuery(joinURL(useRuntimeConfig().app.baseURL, "/__nuxt_error"), errorObject), {
    headers: getRequestHeaders(event),
    redirect: "manual"
  }).catch(() => null) : null;
  if (!res) {
    const { template } = await import('../error-500.mjs');
    setResponseHeader(event, "Content-Type", "text/html;charset=UTF-8");
    event.node.res.end(template(errorObject));
    return;
  }
  for (const [header, value] of res.headers.entries()) {
    setResponseHeader(event, header, value);
  }
  setResponseStatus(event, res.status && res.status !== 200 ? res.status : void 0, res.statusText);
  event.node.res.end(await res.text());
});

const assets = {
  "/favicon.ico": {
    "type": "image/vnd.microsoft.icon",
    "etag": "\"2d78-WFZD0Mrfsbwjp15oYq5OOhgFR2I\"",
    "mtime": "2023-06-18T15:02:53.205Z",
    "size": 11640,
    "path": "../public/favicon.ico"
  },
  "/favicon2 2.ico": {
    "type": "image/vnd.microsoft.icon",
    "etag": "\"13402-O88Y4A96X7kbbEj01O9cDn9USAQ\"",
    "mtime": "2023-06-18T15:02:53.205Z",
    "size": 78850,
    "path": "../public/favicon2 2.ico"
  },
  "/favicon2.ico": {
    "type": "image/vnd.microsoft.icon",
    "etag": "\"11266-gHg6PiGu46o2XTsfNlOiIA3xxWw\"",
    "mtime": "2023-06-18T15:02:53.204Z",
    "size": 70246,
    "path": "../public/favicon2.ico"
  },
  "/_nuxt/BioGenetics.0d264df3.png": {
    "type": "image/png",
    "etag": "\"14aa78-XbLaJr3HQkEye2AsviMUcCgOD0I\"",
    "mtime": "2023-06-18T15:02:53.077Z",
    "size": 1354360,
    "path": "../public/_nuxt/BioGenetics.0d264df3.png"
  },
  "/_nuxt/CleanWater.522d153d.png": {
    "type": "image/png",
    "etag": "\"14999e-khHI/qfSv6p08k8G3GuKiosSpUs\"",
    "mtime": "2023-06-18T15:02:53.075Z",
    "size": 1350046,
    "path": "../public/_nuxt/CleanWater.522d153d.png"
  },
  "/_nuxt/EcoFashion.3b187ace.png": {
    "type": "image/png",
    "etag": "\"d9868-Tl/2y3vtxCJAvo7aohV2s2AM0A8\"",
    "mtime": "2023-06-18T15:02:53.073Z",
    "size": 890984,
    "path": "../public/_nuxt/EcoFashion.3b187ace.png"
  },
  "/_nuxt/MaglevTech.6438abff.png": {
    "type": "image/png",
    "etag": "\"1a4a0a-E37HmlkGn5s+XvFweuv8YYrKoS4\"",
    "mtime": "2023-06-18T15:02:53.072Z",
    "size": 1722890,
    "path": "../public/_nuxt/MaglevTech.6438abff.png"
  },
  "/_nuxt/MedTech.4e3b76ec.png": {
    "type": "image/png",
    "etag": "\"10c5aa-af7BGcAFVNF5kl3t5AguBE7WjL4\"",
    "mtime": "2023-06-18T15:02:53.070Z",
    "size": 1099178,
    "path": "../public/_nuxt/MedTech.4e3b76ec.png"
  },
  "/_nuxt/Return.54d665db.js": {
    "type": "application/javascript",
    "etag": "\"20b-L3v5YRW/d8a/NIuuV2W4RNWJwHY\"",
    "mtime": "2023-06-18T15:02:53.069Z",
    "size": 523,
    "path": "../public/_nuxt/Return.54d665db.js"
  },
  "/_nuxt/Return.7ce69b94.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"ba-gqpPGa+7zUiYv1j/NK3a56NUgG4\"",
    "mtime": "2023-06-18T15:02:53.069Z",
    "size": 186,
    "path": "../public/_nuxt/Return.7ce69b94.css"
  },
  "/_nuxt/SustainableTransport.4c51fe1f.png": {
    "type": "image/png",
    "etag": "\"ee09a-HYiqLLj4DjYVyU6ku6tLtZAKH7Y\"",
    "mtime": "2023-06-18T15:02:53.069Z",
    "size": 975002,
    "path": "../public/_nuxt/SustainableTransport.4c51fe1f.png"
  },
  "/_nuxt/TheButton.0087f061.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"55e-wC68TWobvhg9yTl21/PbM4hzg2Y\"",
    "mtime": "2023-06-18T15:02:53.068Z",
    "size": 1374,
    "path": "../public/_nuxt/TheButton.0087f061.css"
  },
  "/_nuxt/TheButton.9d6a7be4.js": {
    "type": "application/javascript",
    "etag": "\"39d-1ykhaRZuRzDTtBH1woIjbK3xNmA\"",
    "mtime": "2023-06-18T15:02:53.068Z",
    "size": 925,
    "path": "../public/_nuxt/TheButton.9d6a7be4.js"
  },
  "/_nuxt/_id_.73ada15e.js": {
    "type": "application/javascript",
    "etag": "\"e2d-NdDnrUzTLMenqAcCgjOSigqceso\"",
    "mtime": "2023-06-18T15:02:53.068Z",
    "size": 3629,
    "path": "../public/_nuxt/_id_.73ada15e.js"
  },
  "/_nuxt/_id_.8680dbb8.js": {
    "type": "application/javascript",
    "etag": "\"abb-RC8ulyoLvCDevSpaiYtqt0u97GE\"",
    "mtime": "2023-06-18T15:02:53.067Z",
    "size": 2747,
    "path": "../public/_nuxt/_id_.8680dbb8.js"
  },
  "/_nuxt/_id_.ab618792.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"a3d-9xfYlEZu3p3fimhaf6z2i2DeZ0w\"",
    "mtime": "2023-06-18T15:02:53.067Z",
    "size": 2621,
    "path": "../public/_nuxt/_id_.ab618792.css"
  },
  "/_nuxt/_id_.e251844e.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"8a2-6valJeCy/P/IUjv1Txotws0yr3U\"",
    "mtime": "2023-06-18T15:02:53.067Z",
    "size": 2210,
    "path": "../public/_nuxt/_id_.e251844e.css"
  },
  "/_nuxt/area-main2.c3f72749.png": {
    "type": "image/png",
    "etag": "\"4ab71-iq629hO3LkG8BkfkpVhRuHLvPfM\"",
    "mtime": "2023-06-18T15:02:53.067Z",
    "size": 306033,
    "path": "../public/_nuxt/area-main2.c3f72749.png"
  },
  "/_nuxt/area_health.a5c662dc.jpg": {
    "type": "image/jpeg",
    "etag": "\"97ef-UJ6zcONJptYQVCKcP9my2YYu/K0\"",
    "mtime": "2023-06-18T15:02:53.066Z",
    "size": 38895,
    "path": "../public/_nuxt/area_health.a5c662dc.jpg"
  },
  "/_nuxt/area_transport.8991fe4d.png": {
    "type": "image/png",
    "etag": "\"58211-7GMpYJtJ3xk/Sj5+w9ESkaAGmn4\"",
    "mtime": "2023-06-18T15:02:53.066Z",
    "size": 360977,
    "path": "../public/_nuxt/area_transport.8991fe4d.png"
  },
  "/_nuxt/background_home.3c4c7ada.webp": {
    "type": "image/webp",
    "etag": "\"27362-Gn4DDkQw9gpZPwdb8nZ2epdG1To\"",
    "mtime": "2023-06-18T15:02:53.065Z",
    "size": 160610,
    "path": "../public/_nuxt/background_home.3c4c7ada.webp"
  },
  "/_nuxt/contact.79056389.js": {
    "type": "application/javascript",
    "etag": "\"c79-xgmyz5iZ35j9UeUVsKK/1lq9f6Y\"",
    "mtime": "2023-06-18T15:02:53.065Z",
    "size": 3193,
    "path": "../public/_nuxt/contact.79056389.js"
  },
  "/_nuxt/contact.d5b94866.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"afa-FuxFkVyQo/b3BmdYg90FB/l3NEo\"",
    "mtime": "2023-06-18T15:02:53.065Z",
    "size": 2810,
    "path": "../public/_nuxt/contact.d5b94866.css"
  },
  "/_nuxt/default.38262c61.js": {
    "type": "application/javascript",
    "etag": "\"e93-cnnvJtpdqbt1NSeAywaWIU2O8n4\"",
    "mtime": "2023-06-18T15:02:53.065Z",
    "size": 3731,
    "path": "../public/_nuxt/default.38262c61.js"
  },
  "/_nuxt/default.9d35f896.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"792-CAzIV6rOKuPQYXtpd7QobQUawAc\"",
    "mtime": "2023-06-18T15:02:53.065Z",
    "size": 1938,
    "path": "../public/_nuxt/default.9d35f896.css"
  },
  "/_nuxt/ecolo.d5d8646f.jpg": {
    "type": "image/jpeg",
    "etag": "\"d57d-C9ZhRfH+4EksEoTBnznfOf7TJKg\"",
    "mtime": "2023-06-18T15:02:53.064Z",
    "size": 54653,
    "path": "../public/_nuxt/ecolo.d5d8646f.jpg"
  },
  "/_nuxt/ecolo2.29d686d8.jpg": {
    "type": "image/jpeg",
    "etag": "\"d17c-ks6+lVhmBqfTtx0IuAghrYKGu1o\"",
    "mtime": "2023-06-18T15:02:53.064Z",
    "size": 53628,
    "path": "../public/_nuxt/ecolo2.29d686d8.jpg"
  },
  "/_nuxt/entry.2127660d.js": {
    "type": "application/javascript",
    "etag": "\"3b506-C0TNkCc3y1NaeszNqL582rjCiC0\"",
    "mtime": "2023-06-18T15:02:53.064Z",
    "size": 242950,
    "path": "../public/_nuxt/entry.2127660d.js"
  },
  "/_nuxt/entry.f9dba6e5.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"3e4-2QHExRT7eouis14G7PfcuYd0r2Y\"",
    "mtime": "2023-06-18T15:02:53.064Z",
    "size": 996,
    "path": "../public/_nuxt/entry.f9dba6e5.css"
  },
  "/_nuxt/environment.153740c6.js": {
    "type": "application/javascript",
    "etag": "\"d8c-uSmra4d0tkRqVOVoQTx+Rr7MfMc\"",
    "mtime": "2023-06-18T15:02:53.063Z",
    "size": 3468,
    "path": "../public/_nuxt/environment.153740c6.js"
  },
  "/_nuxt/environment.86bede58.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"e2a-CcXgyW6PEW4hYCSkYWuduR1LmqM\"",
    "mtime": "2023-06-18T15:02:53.063Z",
    "size": 3626,
    "path": "../public/_nuxt/environment.86bede58.css"
  },
  "/_nuxt/environment.d777d659.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"925-9jlNhEaAqyZXf8GvKgRju7C+dYI\"",
    "mtime": "2023-06-18T15:02:53.063Z",
    "size": 2341,
    "path": "../public/_nuxt/environment.d777d659.css"
  },
  "/_nuxt/environment.d853d29e.js": {
    "type": "application/javascript",
    "etag": "\"1514-99k8eNKQFIjl7Y2Sqo1yQ3Ce1MA\"",
    "mtime": "2023-06-18T15:02:53.063Z",
    "size": 5396,
    "path": "../public/_nuxt/environment.d853d29e.js"
  },
  "/_nuxt/error-component.51589540.js": {
    "type": "application/javascript",
    "etag": "\"196-7cHRcCN9ECI7oBSYnxUqqGDFPfc\"",
    "mtime": "2023-06-18T15:02:53.063Z",
    "size": 406,
    "path": "../public/_nuxt/error-component.51589540.js"
  },
  "/_nuxt/error-component.eb474f0e.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"16-yExynXbi6rAb2qLKP2pQD45swHw\"",
    "mtime": "2023-06-18T15:02:53.062Z",
    "size": 22,
    "path": "../public/_nuxt/error-component.eb474f0e.css"
  },
  "/_nuxt/facebook.dd16b454.png": {
    "type": "image/png",
    "etag": "\"3cf0-iSQNS7BkUSNmXr4OIhEmSJco7pc\"",
    "mtime": "2023-06-18T15:02:53.062Z",
    "size": 15600,
    "path": "../public/_nuxt/facebook.dd16b454.png"
  },
  "/_nuxt/fetch.4d096047.js": {
    "type": "application/javascript",
    "etag": "\"2c4e-DostgiyCvhzdTSRTxeg1c7klq0Q\"",
    "mtime": "2023-06-18T15:02:53.062Z",
    "size": 11342,
    "path": "../public/_nuxt/fetch.4d096047.js"
  },
  "/_nuxt/hand_shake.e0770988.png": {
    "type": "image/png",
    "etag": "\"987a-dF8v4iSginKQToHwRrwxRFmVyTU\"",
    "mtime": "2023-06-18T15:02:53.062Z",
    "size": 39034,
    "path": "../public/_nuxt/hand_shake.e0770988.png"
  },
  "/_nuxt/handshake.7bbc7ce0.png": {
    "type": "image/png",
    "etag": "\"3a816-vH+VSQ4IP5h697PJl3rMuLehEeY\"",
    "mtime": "2023-06-18T15:02:53.062Z",
    "size": 239638,
    "path": "../public/_nuxt/handshake.7bbc7ce0.png"
  },
  "/_nuxt/handshake.c0c22cd9.js": {
    "type": "application/javascript",
    "etag": "\"6e-TMQcD5l9PjdqVS70eOM/tVpBT38\"",
    "mtime": "2023-06-18T15:02:53.061Z",
    "size": 110,
    "path": "../public/_nuxt/handshake.c0c22cd9.js"
  },
  "/_nuxt/health.00cd5e84.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"e28-s2huImOd7bDb3sesf8KRK8v8yE0\"",
    "mtime": "2023-06-18T15:02:53.061Z",
    "size": 3624,
    "path": "../public/_nuxt/health.00cd5e84.css"
  },
  "/_nuxt/health.7724ad28.js": {
    "type": "application/javascript",
    "etag": "\"130f-k8azt+1YkVNmpJqu1jJNTuSGd8I\"",
    "mtime": "2023-06-18T15:02:53.061Z",
    "size": 4879,
    "path": "../public/_nuxt/health.7724ad28.js"
  },
  "/_nuxt/health.889a246c.jpg": {
    "type": "image/jpeg",
    "etag": "\"255e1-uZ0ERg3vubv10y/K3HXRYerq3zs\"",
    "mtime": "2023-06-18T15:02:53.061Z",
    "size": 153057,
    "path": "../public/_nuxt/health.889a246c.jpg"
  },
  "/_nuxt/health.89606dcf.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"925-ZUYOPR1woczhoL6uMHEFgWloAKk\"",
    "mtime": "2023-06-18T15:02:53.060Z",
    "size": 2341,
    "path": "../public/_nuxt/health.89606dcf.css"
  },
  "/_nuxt/health.b448a2d0.js": {
    "type": "application/javascript",
    "etag": "\"d79-lGC496CXDq5j80oqHJbWVDAJVvg\"",
    "mtime": "2023-06-18T15:02:53.060Z",
    "size": 3449,
    "path": "../public/_nuxt/health.b448a2d0.js"
  },
  "/_nuxt/how_it_works.194a5f5b.js": {
    "type": "application/javascript",
    "etag": "\"1e40-71uucQN7qVWW1ZEzvJXlxpcWbHg\"",
    "mtime": "2023-06-18T15:02:53.060Z",
    "size": 7744,
    "path": "../public/_nuxt/how_it_works.194a5f5b.js"
  },
  "/_nuxt/how_it_works.cb3e517e.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"cd9-OY89V+OcPd1z+x+RP0ApzdaPYg4\"",
    "mtime": "2023-06-18T15:02:53.060Z",
    "size": 3289,
    "path": "../public/_nuxt/how_it_works.cb3e517e.css"
  },
  "/_nuxt/howitworks.274bf457.png": {
    "type": "image/png",
    "etag": "\"da20-4M6Tondj8cZlb56+uq+/JACOh5o\"",
    "mtime": "2023-06-18T15:02:53.059Z",
    "size": 55840,
    "path": "../public/_nuxt/howitworks.274bf457.png"
  },
  "/_nuxt/howitworks.8b36371a.js": {
    "type": "application/javascript",
    "etag": "\"6f-0PWe+APKRccXO+EUmecNi9jjZok\"",
    "mtime": "2023-06-18T15:02:53.059Z",
    "size": 111,
    "path": "../public/_nuxt/howitworks.8b36371a.js"
  },
  "/_nuxt/index.0783ffb5.js": {
    "type": "application/javascript",
    "etag": "\"eec-ESIXJqBGOjtGjQW7i+KcjjNN0mM\"",
    "mtime": "2023-06-18T15:02:53.059Z",
    "size": 3820,
    "path": "../public/_nuxt/index.0783ffb5.js"
  },
  "/_nuxt/index.163e3154.js": {
    "type": "application/javascript",
    "etag": "\"230f-yPmfh2Z/GHYEkMQhPwto+o9SsjQ\"",
    "mtime": "2023-06-18T15:02:53.059Z",
    "size": 8975,
    "path": "../public/_nuxt/index.163e3154.js"
  },
  "/_nuxt/index.2b23efae.js": {
    "type": "application/javascript",
    "etag": "\"90f-8mrDQekECPlQQu6f8kktMmlXIcw\"",
    "mtime": "2023-06-18T15:02:53.059Z",
    "size": 2319,
    "path": "../public/_nuxt/index.2b23efae.js"
  },
  "/_nuxt/index.5dbf6a33.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"927-Au0eL9EcgCDIQ4eur6PkJGbA6p8\"",
    "mtime": "2023-06-18T15:02:53.058Z",
    "size": 2343,
    "path": "../public/_nuxt/index.5dbf6a33.css"
  },
  "/_nuxt/index.685147d2.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"91c-vgqbLX96lL3fr4l8rAQeO3exOEY\"",
    "mtime": "2023-06-18T15:02:53.058Z",
    "size": 2332,
    "path": "../public/_nuxt/index.685147d2.css"
  },
  "/_nuxt/index.7cdc2c56.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"912-BPa0RW4QcSQRGsBNePjVaNxWcvE\"",
    "mtime": "2023-06-18T15:02:53.058Z",
    "size": 2322,
    "path": "../public/_nuxt/index.7cdc2c56.css"
  },
  "/_nuxt/index.9613de3a.js": {
    "type": "application/javascript",
    "etag": "\"11c9-ETII2O3NfW073S6qPvUarIRfTeU\"",
    "mtime": "2023-06-18T15:02:53.058Z",
    "size": 4553,
    "path": "../public/_nuxt/index.9613de3a.js"
  },
  "/_nuxt/index.b49e5c8b.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"1c60-zWKHXAnMbE7RJOAIG7sMVZmpmhk\"",
    "mtime": "2023-06-18T15:02:53.058Z",
    "size": 7264,
    "path": "../public/_nuxt/index.b49e5c8b.css"
  },
  "/_nuxt/instagram.bd9d1254.png": {
    "type": "image/png",
    "etag": "\"ebdc-yrl7vcBJJap3q65jNayjHbMCT6Q\"",
    "mtime": "2023-06-18T15:02:53.057Z",
    "size": 60380,
    "path": "../public/_nuxt/instagram.bd9d1254.png"
  },
  "/_nuxt/introduction_VC.508656c0.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"591-o6nr6Pdv8fuQN1LJZuqMtlbLTtQ\"",
    "mtime": "2023-06-18T15:02:53.057Z",
    "size": 1425,
    "path": "../public/_nuxt/introduction_VC.508656c0.css"
  },
  "/_nuxt/introduction_VC.e2253700.js": {
    "type": "application/javascript",
    "etag": "\"1117-czrbDM8FnnJ78GAzG3Z2aHAnEVw\"",
    "mtime": "2023-06-18T15:02:53.057Z",
    "size": 4375,
    "path": "../public/_nuxt/introduction_VC.e2253700.js"
  },
  "/_nuxt/ivylogo.e5d29e05.png": {
    "type": "image/png",
    "etag": "\"583e-+LMCH7GuDGoT9pzj0/GRZgbV78M\"",
    "mtime": "2023-06-18T15:02:53.057Z",
    "size": 22590,
    "path": "../public/_nuxt/ivylogo.e5d29e05.png"
  },
  "/_nuxt/joinus.7f728a75.webp": {
    "type": "image/webp",
    "etag": "\"5710-7Mzc/VPe5XUCxJbo0g+EEF9X4xQ\"",
    "mtime": "2023-06-18T15:02:53.057Z",
    "size": 22288,
    "path": "../public/_nuxt/joinus.7f728a75.webp"
  },
  "/_nuxt/linkedin.7dcbc614.png": {
    "type": "image/png",
    "etag": "\"2cd9-ErZcBg2rF022rleE7kbdu+gRB0o\"",
    "mtime": "2023-06-18T15:02:53.056Z",
    "size": 11481,
    "path": "../public/_nuxt/linkedin.7dcbc614.png"
  },
  "/_nuxt/mail.ac6a37e6.png": {
    "type": "image/png",
    "etag": "\"6f5f-tRk4sI/7dxORkbnw2stfvC03NdI\"",
    "mtime": "2023-06-18T15:02:53.056Z",
    "size": 28511,
    "path": "../public/_nuxt/mail.ac6a37e6.png"
  },
  "/_nuxt/nuxt-link.1a8fe4bd.js": {
    "type": "application/javascript",
    "etag": "\"10dc-2dXmiLJdux9d/uLbCLoT89n4+eo\"",
    "mtime": "2023-06-18T15:02:53.056Z",
    "size": 4316,
    "path": "../public/_nuxt/nuxt-link.1a8fe4bd.js"
  },
  "/_nuxt/projects_by_area.e38683ab.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"7ff-vK6BfKqCfIp4jJBM9jfsqq47+fg\"",
    "mtime": "2023-06-18T15:02:53.056Z",
    "size": 2047,
    "path": "../public/_nuxt/projects_by_area.e38683ab.css"
  },
  "/_nuxt/projects_by_area.f8c6c4c6.js": {
    "type": "application/javascript",
    "etag": "\"108b-u2h00HxUeHWxGLiUKszSduBPVwE\"",
    "mtime": "2023-06-18T15:02:53.055Z",
    "size": 4235,
    "path": "../public/_nuxt/projects_by_area.f8c6c4c6.js"
  },
  "/_nuxt/return.d80a667b.png": {
    "type": "image/png",
    "etag": "\"42b5-ObIIhX5fC8AOrJ/EpuVRBJMeaiM\"",
    "mtime": "2023-06-18T15:02:53.055Z",
    "size": 17077,
    "path": "../public/_nuxt/return.d80a667b.png"
  },
  "/_nuxt/team.af72a18d.jpeg": {
    "type": "image/jpeg",
    "etag": "\"f3c3-is1U/qDotSD0r3K56v5WG0QbG6c\"",
    "mtime": "2023-06-18T15:02:53.055Z",
    "size": 62403,
    "path": "../public/_nuxt/team.af72a18d.jpeg"
  },
  "/_nuxt/top5projects.33439661.js": {
    "type": "application/javascript",
    "etag": "\"d69-E/dBTzSM5TMWL4bFWmlJnWBQnFw\"",
    "mtime": "2023-06-18T15:02:53.055Z",
    "size": 3433,
    "path": "../public/_nuxt/top5projects.33439661.js"
  },
  "/_nuxt/top5projects.384f76d8.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"931-sWnm1FIkWpDfrkSovnveTOoToo8\"",
    "mtime": "2023-06-18T15:02:53.054Z",
    "size": 2353,
    "path": "../public/_nuxt/top5projects.384f76d8.css"
  },
  "/_nuxt/transport.60958895.js": {
    "type": "application/javascript",
    "etag": "\"13b5-3UMWWm1kYC5AvjC+oz2GgLFAyjc\"",
    "mtime": "2023-06-18T15:02:53.054Z",
    "size": 5045,
    "path": "../public/_nuxt/transport.60958895.js"
  },
  "/_nuxt/transport.78d59f98.png": {
    "type": "image/png",
    "etag": "\"85f6f-DfPzArxhjquAUqLUNawQUXB8St4\"",
    "mtime": "2023-06-18T15:02:53.054Z",
    "size": 548719,
    "path": "../public/_nuxt/transport.78d59f98.png"
  },
  "/_nuxt/transport.85e58026.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"927-Z3UICULwz5dIEzVBVo5NPcdDG18\"",
    "mtime": "2023-06-18T15:02:53.053Z",
    "size": 2343,
    "path": "../public/_nuxt/transport.85e58026.css"
  },
  "/_nuxt/transport.d609fcec.js": {
    "type": "application/javascript",
    "etag": "\"da6-iFbNMdACoeuOK+QEyHd7xl+TcCw\"",
    "mtime": "2023-06-18T15:02:53.053Z",
    "size": 3494,
    "path": "../public/_nuxt/transport.d609fcec.js"
  },
  "/_nuxt/transport.fdd5a29a.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"e4b-OxOysyJLa5j+bsCuqmufsTH8uBI\"",
    "mtime": "2023-06-18T15:02:53.053Z",
    "size": 3659,
    "path": "../public/_nuxt/transport.fdd5a29a.css"
  },
  "/_nuxt/twitter.e6ca9110.png": {
    "type": "image/png",
    "etag": "\"33c1-NGkMjY0ycG9Quomiwu8nX870KmI\"",
    "mtime": "2023-06-18T15:02:53.051Z",
    "size": 13249,
    "path": "../public/_nuxt/twitter.e6ca9110.png"
  },
  "/img/.DS_Store": {
    "type": "text/plain; charset=utf-8",
    "etag": "\"2804-TObhoSWkVJvdIx0DtJ2i+vmU2ok\"",
    "mtime": "2023-06-18T15:02:53.204Z",
    "size": 10244,
    "path": "../public/img/.DS_Store"
  },
  "/img/BioGenetics.png": {
    "type": "image/png",
    "etag": "\"14aa78-XbLaJr3HQkEye2AsviMUcCgOD0I\"",
    "mtime": "2023-06-18T15:02:53.203Z",
    "size": 1354360,
    "path": "../public/img/BioGenetics.png"
  },
  "/img/CleanWater.png": {
    "type": "image/png",
    "etag": "\"14999e-khHI/qfSv6p08k8G3GuKiosSpUs\"",
    "mtime": "2023-06-18T15:02:53.199Z",
    "size": 1350046,
    "path": "../public/img/CleanWater.png"
  },
  "/img/EcoFashion.png": {
    "type": "image/png",
    "etag": "\"d9868-Tl/2y3vtxCJAvo7aohV2s2AM0A8\"",
    "mtime": "2023-06-18T15:02:53.195Z",
    "size": 890984,
    "path": "../public/img/EcoFashion.png"
  },
  "/img/GreenEats product.png": {
    "type": "image/png",
    "etag": "\"1b00df-7vgT7481BH9WqGilbAoEzTprhp8\"",
    "mtime": "2023-06-18T15:02:53.191Z",
    "size": 1769695,
    "path": "../public/img/GreenEats product.png"
  },
  "/img/MaglevTech.png": {
    "type": "image/png",
    "etag": "\"1a4a0a-E37HmlkGn5s+XvFweuv8YYrKoS4\"",
    "mtime": "2023-06-18T15:02:53.186Z",
    "size": 1722890,
    "path": "../public/img/MaglevTech.png"
  },
  "/img/SustainableTransport.png": {
    "type": "image/png",
    "etag": "\"ee09a-HYiqLLj4DjYVyU6ku6tLtZAKH7Y\"",
    "mtime": "2023-06-18T15:02:53.184Z",
    "size": 975002,
    "path": "../public/img/SustainableTransport.png"
  },
  "/img/area-main copie.png": {
    "type": "image/png",
    "etag": "\"38662-08Pp61xJrSfrdotHJRJNlrdDGJ8\"",
    "mtime": "2023-06-18T15:02:53.181Z",
    "size": 231010,
    "path": "../public/img/area-main copie.png"
  },
  "/img/area-main.png": {
    "type": "image/png",
    "etag": "\"c1cdf-9L/BV7tTtNcudWP0xOkz8txUkTw\"",
    "mtime": "2023-06-18T15:02:53.180Z",
    "size": 793823,
    "path": "../public/img/area-main.png"
  },
  "/img/area-main2.png": {
    "type": "image/png",
    "etag": "\"4ab71-iq629hO3LkG8BkfkpVhRuHLvPfM\"",
    "mtime": "2023-06-18T15:02:53.178Z",
    "size": 306033,
    "path": "../public/img/area-main2.png"
  },
  "/img/area_health.jpg": {
    "type": "image/jpeg",
    "etag": "\"97ef-UJ6zcONJptYQVCKcP9my2YYu/K0\"",
    "mtime": "2023-06-18T15:02:53.178Z",
    "size": 38895,
    "path": "../public/img/area_health.jpg"
  },
  "/img/area_transport.png": {
    "type": "image/png",
    "etag": "\"58211-7GMpYJtJ3xk/Sj5+w9ESkaAGmn4\"",
    "mtime": "2023-06-18T15:02:53.177Z",
    "size": 360977,
    "path": "../public/img/area_transport.png"
  },
  "/img/area_water.png": {
    "type": "image/png",
    "etag": "\"3c693-Igu4vTjIGMFP/zZyc0+iUntMwcs\"",
    "mtime": "2023-06-18T15:02:53.176Z",
    "size": 247443,
    "path": "../public/img/area_water.png"
  },
  "/img/arrow.png": {
    "type": "image/png",
    "etag": "\"393b-NkJbSTQV0ABJ/t8OApqIZSWoXA4\"",
    "mtime": "2023-06-18T15:02:53.175Z",
    "size": 14651,
    "path": "../public/img/arrow.png"
  },
  "/img/background_home.webp": {
    "type": "image/webp",
    "etag": "\"27362-Gn4DDkQw9gpZPwdb8nZ2epdG1To\"",
    "mtime": "2023-06-18T15:02:53.175Z",
    "size": 160610,
    "path": "../public/img/background_home.webp"
  },
  "/img/background_projects.webp": {
    "type": "image/webp",
    "etag": "\"18104-c2UBK2wmqTBgzWOxGkTkUSatgdM\"",
    "mtime": "2023-06-18T15:02:53.174Z",
    "size": 98564,
    "path": "../public/img/background_projects.webp"
  },
  "/img/ecolo.jpg": {
    "type": "image/jpeg",
    "etag": "\"d57d-C9ZhRfH+4EksEoTBnznfOf7TJKg\"",
    "mtime": "2023-06-18T15:02:53.173Z",
    "size": 54653,
    "path": "../public/img/ecolo.jpg"
  },
  "/img/ecolo2.jpg": {
    "type": "image/jpeg",
    "etag": "\"d17c-ks6+lVhmBqfTtx0IuAghrYKGu1o\"",
    "mtime": "2023-06-18T15:02:53.173Z",
    "size": 53628,
    "path": "../public/img/ecolo2.jpg"
  },
  "/img/facebook.png": {
    "type": "image/png",
    "etag": "\"3cf0-iSQNS7BkUSNmXr4OIhEmSJco7pc\"",
    "mtime": "2023-06-18T15:02:53.173Z",
    "size": 15600,
    "path": "../public/img/facebook.png"
  },
  "/img/hand_shake.png": {
    "type": "image/png",
    "etag": "\"987a-dF8v4iSginKQToHwRrwxRFmVyTU\"",
    "mtime": "2023-06-18T15:02:53.173Z",
    "size": 39034,
    "path": "../public/img/hand_shake.png"
  },
  "/img/handshake.png": {
    "type": "image/png",
    "etag": "\"3a816-vH+VSQ4IP5h697PJl3rMuLehEeY\"",
    "mtime": "2023-06-18T15:02:53.172Z",
    "size": 239638,
    "path": "../public/img/handshake.png"
  },
  "/img/health.jpg": {
    "type": "image/jpeg",
    "etag": "\"255e1-uZ0ERg3vubv10y/K3HXRYerq3zs\"",
    "mtime": "2023-06-18T15:02:53.172Z",
    "size": 153057,
    "path": "../public/img/health.jpg"
  },
  "/img/howitworks.png": {
    "type": "image/png",
    "etag": "\"da20-4M6Tondj8cZlb56+uq+/JACOh5o\"",
    "mtime": "2023-06-18T15:02:53.171Z",
    "size": 55840,
    "path": "../public/img/howitworks.png"
  },
  "/img/instagram.png": {
    "type": "image/png",
    "etag": "\"ebdc-yrl7vcBJJap3q65jNayjHbMCT6Q\"",
    "mtime": "2023-06-18T15:02:53.171Z",
    "size": 60380,
    "path": "../public/img/instagram.png"
  },
  "/img/ivylogo.png": {
    "type": "image/png",
    "etag": "\"583e-+LMCH7GuDGoT9pzj0/GRZgbV78M\"",
    "mtime": "2023-06-18T15:02:53.171Z",
    "size": 22590,
    "path": "../public/img/ivylogo.png"
  },
  "/img/joinus.webp": {
    "type": "image/webp",
    "etag": "\"5710-7Mzc/VPe5XUCxJbo0g+EEF9X4xQ\"",
    "mtime": "2023-06-18T15:02:53.170Z",
    "size": 22288,
    "path": "../public/img/joinus.webp"
  },
  "/img/linkedin.png": {
    "type": "image/png",
    "etag": "\"2cd9-ErZcBg2rF022rleE7kbdu+gRB0o\"",
    "mtime": "2023-06-18T15:02:53.170Z",
    "size": 11481,
    "path": "../public/img/linkedin.png"
  },
  "/img/mail.png": {
    "type": "image/png",
    "etag": "\"6f5f-tRk4sI/7dxORkbnw2stfvC03NdI\"",
    "mtime": "2023-06-18T15:02:53.170Z",
    "size": 28511,
    "path": "../public/img/mail.png"
  },
  "/img/member.webp": {
    "type": "image/webp",
    "etag": "\"b67a-Ysd5S5GVw1MD4IwlMgzlbnwv60I\"",
    "mtime": "2023-06-18T15:02:53.170Z",
    "size": 46714,
    "path": "../public/img/member.webp"
  },
  "/img/return.png": {
    "type": "image/png",
    "etag": "\"42b5-ObIIhX5fC8AOrJ/EpuVRBJMeaiM\"",
    "mtime": "2023-06-18T15:02:53.098Z",
    "size": 17077,
    "path": "../public/img/return.png"
  },
  "/img/team.jpeg": {
    "type": "image/jpeg",
    "etag": "\"f3c3-is1U/qDotSD0r3K56v5WG0QbG6c\"",
    "mtime": "2023-06-18T15:02:53.082Z",
    "size": 62403,
    "path": "../public/img/team.jpeg"
  },
  "/img/transport.png": {
    "type": "image/png",
    "etag": "\"85f6f-DfPzArxhjquAUqLUNawQUXB8St4\"",
    "mtime": "2023-06-18T15:02:53.081Z",
    "size": 548719,
    "path": "../public/img/transport.png"
  },
  "/img/twitter.png": {
    "type": "image/png",
    "etag": "\"33c1-NGkMjY0ycG9Quomiwu8nX870KmI\"",
    "mtime": "2023-06-18T15:02:53.080Z",
    "size": 13249,
    "path": "../public/img/twitter.png"
  },
  "/img/water.png": {
    "type": "image/png",
    "etag": "\"80279-FMKQxDYE8tJIj5m9XInSa2A8jL0\"",
    "mtime": "2023-06-18T15:02:53.080Z",
    "size": 524921,
    "path": "../public/img/water.png"
  },
  "/img/projects/.DS_Store": {
    "type": "text/plain; charset=utf-8",
    "etag": "\"2804-bq7mGUmDKqZLjlNGuFqdES6vShE\"",
    "mtime": "2023-06-18T15:02:53.169Z",
    "size": 10244,
    "path": "../public/img/projects/.DS_Store"
  },
  "/img/projects/1 EcoTech Solutions logo.png": {
    "type": "image/png",
    "etag": "\"5da71-gy2T2oo0MkQHT4tu/zmPYE7EdLQ\"",
    "mtime": "2023-06-18T15:02:53.168Z",
    "size": 383601,
    "path": "../public/img/projects/1 EcoTech Solutions logo.png"
  },
  "/img/projects/1 EcoTech Solutions product.png": {
    "type": "image/png",
    "etag": "\"162cf5-5C7QTwHeNgULDG+G2McAewvbZ9Y\"",
    "mtime": "2023-06-18T15:02:53.166Z",
    "size": 1453301,
    "path": "../public/img/projects/1 EcoTech Solutions product.png"
  },
  "/img/projects/10 NanoPort logo.png": {
    "type": "image/png",
    "etag": "\"3e63d-aZ9AYb4C7Bau5Z03ceFUMihg05E\"",
    "mtime": "2023-06-18T15:02:53.163Z",
    "size": 255549,
    "path": "../public/img/projects/10 NanoPort logo.png"
  },
  "/img/projects/10 NanoPort product.png": {
    "type": "image/png",
    "etag": "\"dabae-P1IlnXyVweuxFdcNDoC+Av4XPBw\"",
    "mtime": "2023-06-18T15:02:53.162Z",
    "size": 895918,
    "path": "../public/img/projects/10 NanoPort product.png"
  },
  "/img/projects/11 MaglevTech logo.png": {
    "type": "image/png",
    "etag": "\"451b9-PIYIc/xof2QqwoO7twyaDvNCt+w\"",
    "mtime": "2023-06-18T15:02:53.159Z",
    "size": 283065,
    "path": "../public/img/projects/11 MaglevTech logo.png"
  },
  "/img/projects/11 MaglevTech product.png": {
    "type": "image/png",
    "etag": "\"1a4a0a-E37HmlkGn5s+XvFweuv8YYrKoS4\"",
    "mtime": "2023-06-18T15:02:53.158Z",
    "size": 1722890,
    "path": "../public/img/projects/11 MaglevTech product.png"
  },
  "/img/projects/12 CleanEnergy Innovations logo.png": {
    "type": "image/png",
    "etag": "\"47ea5-WG43TytCg5aUT70PTkNnlvakAxA\"",
    "mtime": "2023-06-18T15:02:53.154Z",
    "size": 294565,
    "path": "../public/img/projects/12 CleanEnergy Innovations logo.png"
  },
  "/img/projects/12 CleanEnergy Innovations product.png": {
    "type": "image/png",
    "etag": "\"1a8704-jhba2u/N/5EvJ1y9++dQ3JQCsVU\"",
    "mtime": "2023-06-18T15:02:53.152Z",
    "size": 1738500,
    "path": "../public/img/projects/12 CleanEnergy Innovations product.png"
  },
  "/img/projects/13 SustainableTransport logo.png": {
    "type": "image/png",
    "etag": "\"2d952-A9mDTN3yKq5diNC0E3Rkq26Uu+U\"",
    "mtime": "2023-06-18T15:02:53.149Z",
    "size": 186706,
    "path": "../public/img/projects/13 SustainableTransport logo.png"
  },
  "/img/projects/13 SustainableTransport product.png": {
    "type": "image/png",
    "etag": "\"ee09a-HYiqLLj4DjYVyU6ku6tLtZAKH7Y\"",
    "mtime": "2023-06-18T15:02:53.148Z",
    "size": 975002,
    "path": "../public/img/projects/13 SustainableTransport product.png"
  },
  "/img/projects/14 HealthTech Solutions logo.png": {
    "type": "image/png",
    "etag": "\"50396-TbW7CO1LJS4m2HDhfQItwDG4gQA\"",
    "mtime": "2023-06-18T15:02:53.146Z",
    "size": 328598,
    "path": "../public/img/projects/14 HealthTech Solutions logo.png"
  },
  "/img/projects/14 HealthTech Solutions product.png": {
    "type": "image/png",
    "etag": "\"db25c-YJ2eTgb5BqXtLt6auuMAHE4D6j4\"",
    "mtime": "2023-06-18T15:02:53.144Z",
    "size": 897628,
    "path": "../public/img/projects/14 HealthTech Solutions product.png"
  },
  "/img/projects/15 Sustainable Agriculture Initiative logo.png": {
    "type": "image/png",
    "etag": "\"44960-zk90atAMUm0QVj6g4fCFdzAIrk4\"",
    "mtime": "2023-06-18T15:02:53.143Z",
    "size": 280928,
    "path": "../public/img/projects/15 Sustainable Agriculture Initiative logo.png"
  },
  "/img/projects/15 Sustainable Agriculture Initiative.png": {
    "type": "image/png",
    "etag": "\"1d9494-NJ2NJk9xXSKwnArlYes9YBIfltE\"",
    "mtime": "2023-06-18T15:02:53.140Z",
    "size": 1938580,
    "path": "../public/img/projects/15 Sustainable Agriculture Initiative.png"
  },
  "/img/projects/2 GreenCommute logo.png": {
    "type": "image/png",
    "etag": "\"4420b-Wu8gAghEEfF2R5Few379m7ZAA2k\"",
    "mtime": "2023-06-18T15:02:53.136Z",
    "size": 279051,
    "path": "../public/img/projects/2 GreenCommute logo.png"
  },
  "/img/projects/2 GreenCommute product.png": {
    "type": "image/png",
    "etag": "\"149f13-upt2NELu+FVRW18hKsEtwAwnRSg\"",
    "mtime": "2023-06-18T15:02:53.134Z",
    "size": 1351443,
    "path": "../public/img/projects/2 GreenCommute product.png"
  },
  "/img/projects/3 MedTech Innovations logo.png": {
    "type": "image/png",
    "etag": "\"3d7fa-qcATxcc/2JZlzhrP/4EcK2PRr04\"",
    "mtime": "2023-06-18T15:02:53.130Z",
    "size": 251898,
    "path": "../public/img/projects/3 MedTech Innovations logo.png"
  },
  "/img/projects/3 MedTech Innovations product.png": {
    "type": "image/png",
    "etag": "\"10c5aa-af7BGcAFVNF5kl3t5AguBE7WjL4\"",
    "mtime": "2023-06-18T15:02:53.129Z",
    "size": 1099178,
    "path": "../public/img/projects/3 MedTech Innovations product.png"
  },
  "/img/projects/4 CleanWater Solutions logo.png": {
    "type": "image/png",
    "etag": "\"34af7-T6H9aGSSYOisxJs9mTIJhaBQ8tg\"",
    "mtime": "2023-06-18T15:02:53.126Z",
    "size": 215799,
    "path": "../public/img/projects/4 CleanWater Solutions logo.png"
  },
  "/img/projects/4 CleanWater Solutions product.png": {
    "type": "image/png",
    "etag": "\"14999e-khHI/qfSv6p08k8G3GuKiosSpUs\"",
    "mtime": "2023-06-18T15:02:53.126Z",
    "size": 1350046,
    "path": "../public/img/projects/4 CleanWater Solutions product.png"
  },
  "/img/projects/5 BioGenetics logo.png": {
    "type": "image/png",
    "etag": "\"5e7ac-2aObLiAD4XxbotRxbl+YhZpqlh4\"",
    "mtime": "2023-06-18T15:02:53.122Z",
    "size": 386988,
    "path": "../public/img/projects/5 BioGenetics logo.png"
  },
  "/img/projects/5 BioGenetics product.png": {
    "type": "image/png",
    "etag": "\"14aa78-XbLaJr3HQkEye2AsviMUcCgOD0I\"",
    "mtime": "2023-06-18T15:02:53.121Z",
    "size": 1354360,
    "path": "../public/img/projects/5 BioGenetics product.png"
  },
  "/img/projects/6 GreenEats logo.png": {
    "type": "image/png",
    "etag": "\"5d079-Wz+eyjRPL0KhzIkvXglSgeJ1FqQ\"",
    "mtime": "2023-06-18T15:02:53.119Z",
    "size": 381049,
    "path": "../public/img/projects/6 GreenEats logo.png"
  },
  "/img/projects/6 GreenEats product.png": {
    "type": "image/png",
    "etag": "\"1b00df-7vgT7481BH9WqGilbAoEzTprhp8\"",
    "mtime": "2023-06-18T15:02:53.116Z",
    "size": 1769695,
    "path": "../public/img/projects/6 GreenEats product.png"
  },
  "/img/projects/7 SmartCity Solutions logo.png": {
    "type": "image/png",
    "etag": "\"55389-0cPe/OYyfY7GFj1Pc2HRThwRA3c\"",
    "mtime": "2023-06-18T15:02:53.112Z",
    "size": 349065,
    "path": "../public/img/projects/7 SmartCity Solutions logo.png"
  },
  "/img/projects/7 SmartCity Solutions product.png": {
    "type": "image/png",
    "etag": "\"16ba30-mcTl6TzrR+RKmGYEZvGMGQ4LqVI\"",
    "mtime": "2023-06-18T15:02:53.111Z",
    "size": 1489456,
    "path": "../public/img/projects/7 SmartCity Solutions product.png"
  },
  "/img/projects/8 EcoFashion logo.png": {
    "type": "image/png",
    "etag": "\"bc605-+zQfvD4tBi2vSxriCt4tckZuPzg\"",
    "mtime": "2023-06-18T15:02:53.107Z",
    "size": 771589,
    "path": "../public/img/projects/8 EcoFashion logo.png"
  },
  "/img/projects/8 EcoFashion products.png": {
    "type": "image/png",
    "etag": "\"d9868-Tl/2y3vtxCJAvo7aohV2s2AM0A8\"",
    "mtime": "2023-06-18T15:02:53.105Z",
    "size": 890984,
    "path": "../public/img/projects/8 EcoFashion products.png"
  },
  "/img/projects/9 CleanAir Technologies logo.png": {
    "type": "image/png",
    "etag": "\"47e86-41+5LkayK2NWUPzIH9zBkk8/plg\"",
    "mtime": "2023-06-18T15:02:53.103Z",
    "size": 294534,
    "path": "../public/img/projects/9 CleanAir Technologies logo.png"
  },
  "/img/projects/9 CleanAir Technologies product.png": {
    "type": "image/png",
    "etag": "\"166955-GoCGX84/2UyWDGDyO7htD0Ch6Xw\"",
    "mtime": "2023-06-18T15:02:53.100Z",
    "size": 1468757,
    "path": "../public/img/projects/9 CleanAir Technologies product.png"
  },
  "/img/team/.DS_Store": {
    "type": "text/plain; charset=utf-8",
    "etag": "\"1804-Y4rjhjPgQrjQITc5jmgPnXs+uNc\"",
    "mtime": "2023-06-18T15:02:53.098Z",
    "size": 6148,
    "path": "../public/img/team/.DS_Store"
  },
  "/img/team/alex.jpg": {
    "type": "image/jpeg",
    "etag": "\"12f79-tzUFbSXmMnvsLf4AQIWlNd7rAtM\"",
    "mtime": "2023-06-18T15:02:53.098Z",
    "size": 77689,
    "path": "../public/img/team/alex.jpg"
  },
  "/img/team/andrew.jpg": {
    "type": "image/jpeg",
    "etag": "\"f3fab-wUBMFQfOTr7p4slAI0Fjtrunvyc\"",
    "mtime": "2023-06-18T15:02:53.097Z",
    "size": 999339,
    "path": "../public/img/team/andrew.jpg"
  },
  "/img/team/david.jpg": {
    "type": "image/jpeg",
    "etag": "\"7ee7-JOvmfzDF1IS/RiJmI/P1ULq+Xw0\"",
    "mtime": "2023-06-18T15:02:53.095Z",
    "size": 32487,
    "path": "../public/img/team/david.jpg"
  },
  "/img/team/emily.jpg": {
    "type": "image/jpeg",
    "etag": "\"1270f-T1UBI5fB3UFyQPls444tRp+T4I8\"",
    "mtime": "2023-06-18T15:02:53.095Z",
    "size": 75535,
    "path": "../public/img/team/emily.jpg"
  },
  "/img/team/jennifer.jpg": {
    "type": "image/jpeg",
    "etag": "\"189f2-I25wbkyUqqPVV9Alz76Qkeb8S+0\"",
    "mtime": "2023-06-18T15:02:53.095Z",
    "size": 100850,
    "path": "../public/img/team/jennifer.jpg"
  },
  "/img/team/jonathan.jpg": {
    "type": "image/jpeg",
    "etag": "\"2719bd-OvM8d6lzmwt7zDH44NSL6rQRQO0\"",
    "mtime": "2023-06-18T15:02:53.092Z",
    "size": 2562493,
    "path": "../public/img/team/jonathan.jpg"
  },
  "/img/team/lauren.jpg": {
    "type": "image/jpeg",
    "etag": "\"fa4d-i3IyVFSD9fXnpYuclKuMtLmU81I\"",
    "mtime": "2023-06-18T15:02:53.088Z",
    "size": 64077,
    "path": "../public/img/team/lauren.jpg"
  },
  "/img/team/michael.jpg": {
    "type": "image/jpeg",
    "etag": "\"15bcdb-LGc2ye/8lRpAduHhgcYaPkjJl9A\"",
    "mtime": "2023-06-18T15:02:53.087Z",
    "size": 1424603,
    "path": "../public/img/team/michael.jpg"
  },
  "/img/team/michelle.jpg": {
    "type": "image/jpeg",
    "etag": "\"4a3a3-DbmLJLUljDBfqgLPR19hjbYCC3I\"",
    "mtime": "2023-06-18T15:02:53.084Z",
    "size": 304035,
    "path": "../public/img/team/michelle.jpg"
  },
  "/img/team/queen.jpg": {
    "type": "image/jpeg",
    "etag": "\"53872-XzOnIu6Jb62NBmzfE00WqosX6PA\"",
    "mtime": "2023-06-18T15:02:53.083Z",
    "size": 342130,
    "path": "../public/img/team/queen.jpg"
  },
  "/img/team/sarah.jpg": {
    "type": "image/jpeg",
    "etag": "\"7cba-z5rHjOO9zKps9PKgZaXQMTzSv/8\"",
    "mtime": "2023-06-18T15:02:53.083Z",
    "size": 31930,
    "path": "../public/img/team/sarah.jpg"
  }
};

function readAsset (id) {
  const serverDir = dirname(fileURLToPath(globalThis._importMeta_.url));
  return promises.readFile(resolve(serverDir, assets[id].path))
}

const publicAssetBases = {"/_nuxt":{"maxAge":31536000}};

function isPublicAssetURL(id = '') {
  if (assets[id]) {
    return true
  }
  for (const base in publicAssetBases) {
    if (id.startsWith(base)) { return true }
  }
  return false
}

function getAsset (id) {
  return assets[id]
}

const METHODS = /* @__PURE__ */ new Set(["HEAD", "GET"]);
const EncodingMap = { gzip: ".gz", br: ".br" };
const _f4b49z = eventHandler((event) => {
  if (event.node.req.method && !METHODS.has(event.node.req.method)) {
    return;
  }
  let id = decodeURIComponent(
    withLeadingSlash(
      withoutTrailingSlash(parseURL(event.node.req.url).pathname)
    )
  );
  let asset;
  const encodingHeader = String(
    event.node.req.headers["accept-encoding"] || ""
  );
  const encodings = [
    ...encodingHeader.split(",").map((e) => EncodingMap[e.trim()]).filter(Boolean).sort(),
    ""
  ];
  if (encodings.length > 1) {
    event.node.res.setHeader("Vary", "Accept-Encoding");
  }
  for (const encoding of encodings) {
    for (const _id of [id + encoding, joinURL(id, "index.html" + encoding)]) {
      const _asset = getAsset(_id);
      if (_asset) {
        asset = _asset;
        id = _id;
        break;
      }
    }
  }
  if (!asset) {
    if (isPublicAssetURL(id)) {
      event.node.res.removeHeader("cache-control");
      throw createError({
        statusMessage: "Cannot find static asset " + id,
        statusCode: 404
      });
    }
    return;
  }
  const ifNotMatch = event.node.req.headers["if-none-match"] === asset.etag;
  if (ifNotMatch) {
    event.node.res.statusCode = 304;
    event.node.res.end();
    return;
  }
  const ifModifiedSinceH = event.node.req.headers["if-modified-since"];
  const mtimeDate = new Date(asset.mtime);
  if (ifModifiedSinceH && asset.mtime && new Date(ifModifiedSinceH) >= mtimeDate) {
    event.node.res.statusCode = 304;
    event.node.res.end();
    return;
  }
  if (asset.type && !event.node.res.getHeader("Content-Type")) {
    event.node.res.setHeader("Content-Type", asset.type);
  }
  if (asset.etag && !event.node.res.getHeader("ETag")) {
    event.node.res.setHeader("ETag", asset.etag);
  }
  if (asset.mtime && !event.node.res.getHeader("Last-Modified")) {
    event.node.res.setHeader("Last-Modified", mtimeDate.toUTCString());
  }
  if (asset.encoding && !event.node.res.getHeader("Content-Encoding")) {
    event.node.res.setHeader("Content-Encoding", asset.encoding);
  }
  if (asset.size > 0 && !event.node.res.getHeader("Content-Length")) {
    event.node.res.setHeader("Content-Length", asset.size);
  }
  return readAsset(id);
});

const dbInitialization = async (models) => {
  const projectModel = [
    {
      project_name: "EcoTech Solutions",
      project_areas: "Environment",
      logo: "_nuxt/assets/img/projects/1 EcoTech Solutions logo.png",
      image: "_nuxt/assets/img/projects/1 EcoTech Solutions product.png",
      supervisor_name: "Alex Turner",
      startup_presentation: "EcoTech Solutions is an innovative startup dedicated to developing sustainable solutions for environmental challenges. With a deep commitment to preserving and restoring the planet, they strive to create a greener and more sustainable future for generations to come. By leveraging cutting-edge technology and environmentally friendly practices, EcoTech Solutions aims to address critical issues such as renewable energy generation, waste management, and resource conservation.",
      startup_team: "At EcoTech Solutions, a passionate and diverse team of experts collaborates to drive positive change. Their team includes seasoned engineers, environmental scientists, business professionals, and sustainability experts. This multidisciplinary approach allows them to combine technical expertise, scientific knowledge, and strategic insights to tackle complex environmental issues. With a shared vision and a wealth of experience, the team at EcoTech Solutions is well-equipped to develop innovative and practical solutions that make a tangible impact on the environment.",
      product_service_presentation: "EcoTech Solutions' flagship product, EcoGen, is a groundbreaking renewable energy system that revolutionizes the way we generate and consume electricity. EcoGen harnesses the power of solar and wind energy, integrating advanced energy storage technology to ensure a consistent and reliable power supply. The system's smart grid capabilities enable efficient energy management, allowing users to optimize energy consumption and reduce reliance on traditional energy sources. By providing a sustainable and cost-effective solution, EcoGen empowers individuals, businesses, and communities to transition to clean and renewable energy sources, contributing to a greener and more sustainable future."
    },
    {
      project_name: "GreenCommute",
      project_areas: "Transport;Environment",
      logo: "_nuxt/assets/img/projects/2 GreenCommute logo.png",
      image: "_nuxt/assets/img/projects/2 GreenCommute product.png",
      supervisor_name: "Alex Turner",
      startup_presentation: "GreenCommute is a visionary project that aims to transform urban transportation and reshape the way people commute. With a focus on reducing carbon emissions, alleviating traffic congestion, and promoting sustainable mobility options, GreenCommute envisions a future where transportation is efficient, environmentally friendly, and accessible to all. By leveraging technology and innovative solutions, GreenCommute seeks to create a seamless and interconnected transportation network that prioritizes sustainability and enhances the quality of urban living.",
      startup_team: "The team at GreenCommute comprises a diverse group of transportation experts, software engineers, urban planners, and user experience designers. With their collective knowledge and expertise, they work tirelessly to develop innovative solutions that address the complex challenges of urban mobility. By collaborating closely with assets transportation agencies, local communities, and technology partners, the team at GreenCommute is committed to revolutionizing the way people move in cities and making sustainable transportation options readily available to all.",
      image_path: "~/assets/img/apple.png",
      product_service_presentation: "GreenCommute offers a comprehensive platform that integrates various sustainable transportation options, providing users with a convenient and eco-friendly alternative to traditional commuting methods. Their state-of-the-art mobile application empowers individuals to plan their commutes effectively, find the most efficient routes, and seamlessly switch between different modes of transportation, including ride-sharing, bike-sharing, and assets transit. By leveraging real-time data, advanced algorithms, and intuitive user interfaces, GreenCommute aims to streamline urban transportation, reduce congestion, and encourage the adoption of sustainable mobility solutions."
    },
    {
      project_name: "MedTech Innovations",
      isTop5: true,
      project_areas: "Health",
      logo: "_nuxt/assets/img/projects/3 MedTech Innovations logo.png",
      image: "_nuxt/assets/img/projects/3 MedTech Innovations product.png",
      supervisor_name: "Sarah Thompson",
      startup_presentation: "MedTech Innovations is a trailblazing startup at the forefront of medical technology advancements. With a mission to improve patient care, enhance diagnosis accuracy, and revolutionize treatment outcomes, MedTech Innovations is transforming the healthcare landscape. By combining cutting-edge technologies, data-driven insights, and a deep understanding of healthcare challenges, they aim to empower medical professionals and improve the lives of patients around the world.",
      startup_team: "The highly skilled and multidisciplinary team at MedTech Innovations brings together a diverse range of talents and expertise. From biomedical engineers and software developers to healthcare professionals and regulatory specialists, their team is united by a common goal: to push the boundaries of medical technology innovation. With a deep understanding of the intricacies of the healthcare industry and a passion for making a difference, the team at MedTech Innovations is well-positioned to develop groundbreaking solutions that address critical medical challenges.",
      product_service_presentation: "MedTech Innovations offers a portfolio of cutting-edge medical devices and software solutions that revolutionize patient care. From advanced diagnostic imaging systems and precision surgical tools to AI-powered healthcare analytics platforms, their products empower medical professionals to deliver accurate diagnoses, personalized treatments, and improved patient outcomes. By embracing the latest technological advancements, MedTech Innovations is driving innovation in the healthcare industry and paving the way for a future where advanced medical technologies are accessible to all."
    },
    {
      project_name: "CleanWater Solutions",
      project_areas: "Health;Environment",
      logo: "_nuxt/assets/img/projects/4 CleanWater Solutions logo.png",
      image: "_nuxt/assets/img/projects/4 CleanWater Solutions product.png",
      supervisor_name: "Lauren Miller",
      startup_presentation: "CleanWater Solutions is a transformative project focused on tackling water pollution, promoting water conservation, and ensuring access to clean and safe water for all. With the global water crisis looming, CleanWater Solutions aims to develop innovative technologies and implement sustainable practices to protect and preserve our most precious resource - water. By collaborating with local communities, water management authorities, and environmental experts, CleanWater Solutions seeks to address the pressing challenges of water pollution, scarcity, and inequitable access.",
      startup_team: "The dedicated team at CleanWater Solutions comprises water resource management experts, environmental engineers, hydrologists, and sustainability advocates. With their deep understanding of water systems, environmental dynamics, and regulatory frameworks, they work diligently to develop comprehensive and effective solutions for water-related challenges. By leveraging their expertise in water treatment, conservation practices, and ecosystem restoration, the team at CleanWater Solutions is committed to safeguarding water resources and creating a sustainable water future.",
      product_service_presentation: "CleanWater Solutions offers an integrated suite of water management solutions that encompass water treatment, smart monitoring systems, and community engagement programs. Their advanced water treatment technologies remove contaminants, including pollutants and microorganisms, ensuring the delivery of clean and safe water to communities. Additionally, their smart monitoring systems provide real-time data on water quality, enabling proactive management and early detection of potential issues. Through community engagement programs, CleanWater Solutions educates and empowers individuals to participate in water conservation efforts, fostering a culture of responsible water usage and long-term sustainability."
    },
    {
      project_name: "BioGenetics",
      project_areas: "Health;Environment",
      logo: "_nuxt/assets/img/projects/5 BioGenetics logo.png",
      image: "_nuxt/assets/img/projects/5 BioGenetics product.png",
      supervisor_name: "Michelle Wong",
      startup_presentation: "BioGenetics is an innovative startup dedicated to leveraging genetic engineering and biotechnology to address critical challenges in healthcare and agriculture. With a focus on precision medicine, sustainable food production, and environmental conservation, BioGenetics aims to push the boundaries of scientific discovery and create a positive impact on society. By harnessing the power of genetic insights and advanced biotech tools, they strive to improve human health, enhance crop resilience, and protect biodiversity.",
      startup_team: "The exceptional team at BioGenetics is comprised of geneticists, bioengineers, data scientists, and sustainability experts who share a common vision of harnessing the potential of genetic innovation. Their diverse backgrounds and expertise enable them to tackle complex challenges at the intersection of biology, technology, and sustainability. With a deep commitment to ethical practices and responsible innovation, the team at BioGenetics is pioneering groundbreaking solutions that address pressing societal and environmental needs.",
      product_service_presentation: "BioGenetics offers a range of advanced genetic solutions and services that span multiple domains. In the healthcare sector, they develop personalized medicine approaches by analyzing individual genetic profiles, enabling precise diagnoses and targeted therapies. In agriculture, BioGenetics focuses on enhancing crop yields, improving nutritional content, and developing resilient varieties through genetic engineering techniques. Their sustainable agriculture solutions reduce the need for harmful pesticides and promote eco-friendly farming practices. Through their innovative products and services, BioGenetics is transforming industries and contributing to a more sustainable and healthier future."
    },
    {
      project_name: "GreenEats",
      project_areas: "Health;Environment",
      logo: "_nuxt/assets/img/projects/6 GreenEats logo.png",
      image: "_nuxt/assets/img/projects/6 GreenEats product.png",
      supervisor_name: "Michelle Wong",
      startup_presentation: "GreenEats is a visionary startup that aims to revolutionize the food industry by promoting sustainable and eco-friendly eating habits. With a mission to reduce the carbon footprint of the food sector and enhance the health and well-being of individuals, GreenEats offers innovative solutions that encourage mindful consumption and sustainable food choices. By leveraging technology, education, and community engagement, GreenEats envisions a future where nutritious, planet-friendly food is accessible to all.",
      startup_team: "The passionate team at GreenEats comprises food scientists, nutritionists, culinary experts, and sustainability advocates. With a shared commitment to promoting sustainable eating practices, they work collaboratively to develop innovative plant-based food alternatives, educational resources, and community programs. Their collective expertise and dedication drive the mission of GreenEats and empower individuals to make sustainable food choices.",
      product_service_presentation: "GreenEats offers a range of sustainable food products and services that cater to health-conscious consumers. Their plant-based food line includes delicious and nutritious alternatives to animal-based products, such as meat substitutes, dairy alternatives, and plant-based snacks. Additionally, GreenEats provides educational resources, recipe ideas, and workshops to empower individuals with the knowledge and skills to adopt sustainable eating habits. Through their initiatives, GreenEats aims to transform the food landscape, reduce the environmental impact of food production, and promote a healthier and more sustainable society."
    },
    {
      project_name: "SmartCity Solutions",
      project_areas: "Transport;Environment",
      logo: "_nuxt/assets/img/projects/7 SmartCity Solutions logo.png",
      image: "_nuxt/assets/img/projects/7 SmartCity Solutions product.png",
      supervisor_name: "Michael Chen",
      startup_presentation: "The SmartCity Solutions project is dedicated to building smarter, more sustainable cities that enhance the quality of life for residents. By leveraging emerging technologies, data analytics, and citizen engagement, SmartCity Solutions aims to create intelligent urban environments that optimize resource utilization, improve connectivity, and prioritize the well-being of residents. With a focus on energy efficiency, smart mobility, and urban resilience, SmartCity Solutions envisions a future where cities are vibrant, inclusive, and sustainable.",
      startup_team: "The dynamic team at SmartCity Solutions comprises urban planners, data scientists, software engineers, and sustainability experts. With their diverse skill set and collective knowledge, they collaborate to develop innovative solutions for urban challenges. By working closely with local governments, businesses, and communities, the team at SmartCity Solutions co-creates smart city initiatives that address specific needs and foster long-term sustainability.",
      product_service_presentation: "SmartCity Solutions offers a suite of interconnected solutions designed to optimize urban infrastructure and improve the quality of life for residents. Their smart energy management systems enable efficient use of resources and promote renewable energy integration into city grids. Additionally, their intelligent transportation solutions enhance mobility by incorporating real-time data, traffic management algorithms, and smart assets transit options. By harnessing the power of data analytics and innovative technologies, SmartCity Solutions empowers cities to become more resilient, sustainable, and people-centric."
    },
    {
      project_name: "EcoFashion",
      project_areas: "Environment",
      logo: "_nuxt/assets/img/projects/8 EcoFashion logo.png",
      image: "_nuxt/assets/img/projects/8 EcoFashion product.png",
      supervisor_name: "Jonathan Reed",
      startup_presentation: "EcoFashion is a pioneering startup that merges fashion with sustainability to revolutionize the apparel industry. With a vision to transform the way we produce, consume, and dispose of clothing, EcoFashion offers stylish and eco-friendly alternatives that minimize the environmental impact of fashion. By promoting ethical practices, circular economy principles, and conscious consumerism, EcoFashion aims to create a more sustainable and equitable fashion ecosystem.",
      startup_team: "The talented team at EcoFashion comprises fashion designers, textile experts, sustainability consultants, and supply chain specialists. With their deep understanding of the fashion industry and a commitment to responsible practices, they work tirelessly to develop innovative and eco-friendly clothing lines. Through collaboration with sustainable material suppliers, manufacturers, and industry partners, the team at EcoFashion aims to drive systemic change within the fashion industry.",
      product_service_presentation: "EcoFashion offers a range of sustainable clothing options that combine style, comfort, and eco-consciousness. Their products feature ethically sourced materials, such as organic cotton, recycled fabrics, and innovative eco-textiles. By implementing sustainable manufacturing processes and adopting circular design principles, EcoFashion minimizes waste, reduces carbon emissions, and promotes a more sustainable fashion lifecycle. Through their collections, EcoFashion inspires individuals to embrace sustainable fashion choices and contribute to a greener and more responsible industry."
    },
    {
      project_name: "CleanAir Technologies",
      isTop5: true,
      project_areas: "Health;Environment",
      logo: "_nuxt/assets/img/projects/9 CleanAir Technologies logo.png",
      image: "_nuxt/assets/img/projects/9 CleanAir Technologies product.png",
      supervisor_name: "Emily Johnson",
      startup_presentation: "CleanAir Technologies is a groundbreaking project that aims to combat air pollution and improve air quality in urban areas. With a focus on reducing harmful emissions, promoting clean energy solutions, and implementing smart city strategies, CleanAir Technologies seeks to create healthier and more livable environments for communities. By leveraging advanced technologies, data-driven insights, and policy advocacy, they aim to mitigate the detrimental impacts of air pollution on assets health and the environment.",
      startup_team: "The dedicated team at CleanAir Technologies comprises environmental engineers, air quality scientists, data analysts, and policy experts. Their diverse expertise enables them to develop comprehensive air pollution control strategies, implement monitoring systems, and advocate for effective policies. Through collaboration with local governments, research institutions, and community organizations, the team at CleanAir Technologies drives impactful initiatives that improve air quality and promote sustainable urban development.",
      product_service_presentation: "CleanAir Technologies offers a range of solutions and services aimed at monitoring, analyzing, and mitigating air pollution. Their advanced air quality monitoring systems provide real-time data on pollutant levels, enabling proactive measures to protect assets health. Additionally, CleanAir Technologies develops customized emission reduction strategies for industries, transportation networks, and urban areas, leveraging clean energy technologies, smart transportation systems, and effective policy frameworks. By integrating cutting-edge technologies and innovative approaches, CleanAir Technologies is committed to creating cleaner and healthier environments for all."
    },
    {
      project_name: "NanoPort",
      isTop5: true,
      project_areas: "Transport",
      logo: "_nuxt/assets/img/projects/10 NanoPort logo.png",
      image: "_nuxt/assets/img/projects/10 NanoPort product.png",
      supervisor_name: "Andrew Lee",
      startup_presentation: "NanoPort is a groundbreaking project aimed at revolutionizing the shipping industry through the development of the very first matter teleportation device. While initially limited to small objects, NanoPort has the potential to transform the way goods are transported, particularly in the realm of high-value, time-sensitive items. By leveraging cutting-edge quantum teleportation technology and advanced material science, NanoPort aims to offer unparalleled speed, precision, and security in the movement of small-scale cargo.",
      startup_team: "The NanoPort team consists of world-renowned physicists, engineers, and materials scientists who have dedicated their expertise to the development of quantum teleportation technology. Ethical considerations regarding the testing and use of this technology on living beings have been thoroughly debated within the team and with external stakeholders, leading NanoPort to focus solely on non-living cargo for the time being. The team's commitment to ethical practices and responsible innovation drives their efforts to ensure that the development and application of NanoPort technology align with societal values and safety standards.",
      product_service_presentation: "NanoPort's matter teleportation device enables the near-instantaneous transfer of small objects from one location to another by disassembling and reconstructing matter at the quantum level. This transformative technology offers unprecedented speed and efficiency, reducing shipping times and costs for small-scale cargo. While the project acknowledges ongoing ethical debates surrounding the use and testing of this technology on living beings, NanoPort has chosen to prioritize its application in non-living cargo transportation. By focusing on high-value, time-sensitive items, NanoPort aims to provide a secure and efficient logistics solution for industries such as pharmaceuticals, electronics, and specialized manufacturing."
    },
    {
      project_name: "MaglevTech",
      isTop5: true,
      project_areas: "Transport",
      logo: "_nuxt/assets/img/projects/11 MaglevTech logo.png",
      image: "_nuxt/assets/img/projects/11 MaglevTech product.png",
      supervisor_name: "Andrew Lee",
      startup_presentation: "MaglevTech is a dynamic startup focused on revolutionizing assets transportation through the development of high-speed and energy-efficient magnetic levitation (maglev) technology. With a vision to transform the way people commute, MaglevTech aims to create a sustainable, fast, and reliable means of transportation that will alleviate congestion, reduce carbon emissions, and enhance the overall travel experience.",
      startup_team: "The talented team at MaglevTech consists of engineers, designers, and transportation experts who are passionate about reshaping urban mobility. With a strong background in maglev technology and advanced engineering, the team is committed to building a next-generation transportation system that is not only fast but also extremely energy-efficient. By optimizing magnetic levitation, propulsion systems, and aerodynamics, the team at MaglevTech strives to push the boundaries of speed and sustainability in assets transportation.",
      product_service_name: "MaglevTech's flagship product is a high-speed train-like transportation system that utilizes magnetic levitation technology to achieve rapid speeds with minimal energy consumption. By eliminating friction and using powerful magnetic forces, MaglevTech's trains can reach remarkable speeds while providing a smooth and comfortable ride. The energy efficiency of the system reduces environmental impact and offers a sustainable alternative to conventional transportation. With cutting-edge safety features, advanced control systems, and smart connectivity, MaglevTech aims to enhance the efficiency and convenience of assets transportation, making travel faster, greener, and more enjoyable.",
      product_service_presentation: ""
    },
    {
      project_name: "CleanEnergy Innovations",
      project_areas: "Environment",
      logo: "_nuxt/assets/img/projects/12 CleanEnergy Innovations logo.png",
      image: "_nuxt/assets/img/projects/12 CleanEnergy Innovations product.png",
      supervisor_name: "Emily Johnson",
      startup_presentation: "CleanEnergy Innovations is a pioneering startup focused on advancing renewable energy technologies and accelerating the transition to a clean energy future. With a commitment to reducing greenhouse gas emissions and promoting sustainable energy solutions, CleanEnergy Innovations aims to revolutionize the energy sector. By developing innovative clean energy technologies, advocating for supportive policies, and driving assets awareness, they are at the forefront of the clean energy revolution.",
      startup_team: "The dynamic team at CleanEnergy Innovations comprises engineers, researchers, data scientists, and policy experts who are passionate about renewable energy. With their diverse backgrounds and expertise, they collaborate to develop groundbreaking technologies, such as solar power systems, wind energy solutions, energy storage technologies, and grid optimization tools. Through their collective knowledge and innovation, the team at CleanEnergy Innovations is driving the transition to a clean and sustainable energy future.",
      product_service_presentation: "CleanEnergy Innovations offers a range of clean energy solutions designed to meet the growing global demand for sustainable power generation. Their product portfolio includes advanced solar panels, wind turbines, energy storage systems, and smart grid technologies. By providing reliable, cost-effective, and environmentally friendly energy solutions, CleanEnergy Innovations empowers individuals, businesses, and communities to reduce their carbon footprint and embrace clean energy alternatives."
    },
    {
      project_name: "SustainableTransport",
      project_areas: "Transport;Environment",
      logo: "_nuxt/assets/img/projects/13 SustainableTransport logo.png",
      image: "_nuxt/assets/img/projects/13 SustainableTransport product.png",
      supervisor_name: "David Patel",
      startup_presentation: "The SustainableTransport project is dedicated to revolutionizing transportation systems by promoting sustainable and low-carbon alternatives. With a focus on reducing greenhouse gas emissions, improving air quality, and enhancing mobility, SustainableTransport aims to create efficient, equitable, and environmentally friendly transportation networks. By integrating clean technologies, innovative mobility solutions, and policy advocacy, they are driving the transition towards a sustainable transportation future.",
      startup_team: "The dedicated team at SustainableTransport comprises transportation planners, engineers, data analysts, and sustainability experts. Their collective expertise enables them to develop comprehensive transportation strategies, implement smart mobility solutions, and advocate for policies that support sustainable transportation practices. Through collaboration with government agencies, assets transit authorities, and technology providers, the team at SustainableTransport works to improve transportation efficiency, accessibility, and sustainability.",
      product_service_presentation: "SustainableTransport offers a range of solutions and services aimed at transforming transportation systems into sustainable and inclusive networks. Their offerings include electric vehicle charging infrastructure, intelligent transportation systems, multimodal transportation planning, and data-driven transportation analytics. By promoting electric and shared mobility options, optimizing transportation networks, and integrating sustainable transportation modes, SustainableTransport is paving the way for greener and more efficient mobility solutions."
    },
    {
      project_name: "HealthTech Solutions",
      project_areas: "Health",
      logo: "_nuxt/assets/img/projects/14 HealthTech Solutions logo.png",
      image: "_nuxt/assets/img/projects/14 HealthTech Solutions product.png",
      supervisor_name: "Jennifer Ramirez",
      startup_presentation: "HealthTech Solutions is an innovative startup that leverages technology to revolutionize healthcare delivery and improve patient outcomes. With a focus on digital health, telemedicine, and personalized healthcare solutions, HealthTech Solutions aims to transform the healthcare landscape. By harnessing the power of data, connectivity, and artificial intelligence, they empower individuals to take control of their health and enable healthcare providers to deliver more efficient and personalized care.",
      startup_team: "The talented team at HealthTech Solutions comprises healthcare professionals, software engineers, data scientists, and user experience designers. Together, they develop cutting-edge health technologies, intuitive mobile applications, and data-driven platforms that enhance healthcare accessibility, efficiency, and patient engagement. By bridging the gap between technology and healthcare, the team at HealthTech Solutions is committed to improving the well-being of individuals and transforming the healthcare experience.",
      product_service_presentation: "HealthTech Solutions offers a suite of digital health solutions and services that empower individuals to proactively manage their health. Their products include mobile health applications, wearable devices, and remote monitoring systems that enable individuals to track and monitor their vital signs, manage chronic conditions, and access personalized health information. Additionally, HealthTech Solutions provides healthcare providers with integrated platforms for telemedicine, electronic health records, and data analytics, facilitating efficient and patient-centric healthcare delivery."
    },
    {
      project_name: "Sustainable Agriculture",
      isTop5: true,
      project_areas: "Environment",
      logo: "_nuxt/assets/img/projects/15 Sustainable Agriculture Initiative logo.png",
      image: "_nuxt/assets/img/projects/15 Sustainable Agriculture Initiative product.png",
      supervisor_name: "Lauren Miller",
      startup_presentation: "The Sustainable Agriculture Initiative is a transformative project aimed at promoting sustainable farming practices, ensuring food security, and safeguarding the environment. By integrating innovative technologies, regenerative farming methods, and community engagement, the Sustainable Agriculture Initiative seeks to create a resilient and sustainable food system. With a focus on promoting sustainable farming techniques, minimizing environmental impact, and fostering collaboration across the agricultural value chain, the project envisions a future where agriculture nourishes both people and the planet.",
      startup_team: "The passionate and dedicated team at the Sustainable Agriculture Initiative comprises agricultural scientists, agronomists, environmentalists, and community development specialists. Together, they work to develop and implement sustainable farming practices, such as organic farming, precision agriculture, and agroforestry. By collaborating with farmers, policymakers, and industry stakeholders, the team at the Sustainable Agriculture Initiative drives the adoption of sustainable agricultural practices and supports farmers in transitioning to more environmentally friendly and economically viable methods.",
      product_service_presentation: "The Sustainable Agriculture Initiative offers a range of services and resources designed to support sustainable farming practices. These include training programs, knowledge sharing platforms, and access to innovative agricultural technologies. By providing farmers with the tools and knowledge they need to implement sustainable farming practices, the Sustainable Agriculture Initiative promotes soil health, biodiversity conservation, and responsible resource management, ultimately contributing to a more sustainable and resilient food system."
    }
  ];
  await models.Project.bulkCreate(projectModel);
  const teamModel = [
    {
      name: "Queen Elizabeth II",
      image: "_nuxt/assets/img/team/queen.jpg",
      education: "Born with a reserved spot at Cambridge University, Queen Elizabeth II graduated during the Second World War. She got her Bachelor's Degree in Colonizing with honours.",
      job_experience: "Queen, Founder and CEO of Ivy Ventures",
      main_expertise: "Being a CEO",
      projects_supervised: "None",
      projects_id: "None",
      role: "CEO"
    },
    {
      name: "Emily Johnson",
      image: "_nuxt/assets/img/team/emily.jpg",
      education: "Emily holds a Master's degree in Business Administration from Stanford University, specializing in Finance.",
      job_experience: "Emily brings a wealth of experience to Ivy Ventures. Prior to joining the firm, she worked as an Investment Analyst at a renowned investment firm, where she played a crucial role in evaluating potential investment opportunities. Her responsibilities included conducting comprehensive due diligence, performing financial modeling and analysis, and researching market trends. Emily's attention to detail and analytical skills enabled her to identify promising investments in various industries.",
      main_expertise: "Emily's expertise lies in the intersection of venture capital and the environment. She has a deep understanding of renewable energy, clean technology, and green infrastructure projects. Emily closely monitors the latest developments in sustainability and identifies startups that have the potential to make a significant environmental impact while delivering strong financial returns.",
      projects_supervised: "Clean Air Technologies,CleanEnergy Innovations",
      projects_id: "9,12",
      role: "Investment Analyst"
    },
    {
      name: "Andrew Lee",
      image: "_nuxt/assets/img/team/andrew.jpg",
      education: "Andrew completed his Bachelor's degree in Economics from Harvard University, followed by an MBA from Wharton School of the University of Pennsylvania.",
      job_experience: "Andrew's prior experience in the field of venture capital has honed his skills in investment analysis and strategic decision-making. He spent several years as a Management Consultant at a top-tier consulting firm, where he advised clients on strategic investments and business development initiatives. Andrew excelled in conducting in-depth market research, analyzing financial data, and developing growth strategies for businesses across various sectors. His experience provided him with a comprehensive understanding of the due diligence process and the critical factors that drive successful investment outcomes.",
      main_expertise: "Andrew's main area of expertise lies in the means of transportation sector. He has a keen interest in emerging technologies such as electric vehicles, autonomous transportation systems, and sustainable logistics. Andrew closely follows industry trends and market dynamics to identify startups that are disrupting traditional transportation models and have the potential to shape the future of mobility.",
      projects_supervised: "NanoPort,MaglevTech",
      projects_id: "10,11",
      role: "Investment Manager"
    },
    {
      name: "Sarah Thompson",
      image: "_nuxt/assets/img/team/sarah.jpg",
      education: "Sarah holds a Bachelor's degree in Biomedical Engineering from MIT, with a minor in Business Management.",
      job_experience: "Sarah's journey in the venture capital industry began after gaining valuable experience as a Research Scientist at a leading pharmaceutical company. During her time there, she contributed to the development of innovative medical devices and drug delivery systems, leveraging her technical expertise in biomedical engineering. Additionally, Sarah gained experience in project management, collaborating with cross-functional teams and overseeing the successful execution of projects. Her role also involved conducting intellectual property evaluations and assessing the commercial potential of scientific discoveries.",
      main_expertise: "Sarah's primary area of expertise is health. She combines her technical background in biomedical engineering with a deep understanding of the healthcare industry to evaluate investment opportunities in areas such as digital health, medical technology, and biotechnology. Sarah is particularly passionate about leveraging technology to improve patient care and wellness, and she actively seeks out startups that are revolutionizing healthcare delivery and driving positive outcomes.",
      projects_supervised: "MedTech Innovations",
      projects_id: "3",
      role: "Portfolio Manager"
    },
    {
      name: "Michael Chen",
      image: "_nuxt/assets/img/team/michael.jpg",
      education: "Michael graduated from Stanford University with a Bachelor's degree in Computer Science and a minor in Business Administration.",
      job_experience: "Michael's journey in venture capital began after gaining significant experience as a Software Engineer at a prominent technology company. In this role, he specialized in developing scalable software solutions, leveraging data analytics for business optimization, and collaborating with cross-functional teams to deliver high-quality products. Michael's experience equipped him with a solid foundation in problem-solving, critical thinking, and project management.",
      main_expertise: "Michael's main area of expertise is at the intersection of technology and venture capital. His strong technical skills, coupled with his understanding of emerging technologies such as artificial intelligence, blockchain, and cybersecurity, make him adept at identifying investment opportunities in the tech sector. Michael closely monitors the technological landscape and seeks out startups that have the potential to disrupt industries and create transformative solutions.",
      projects_supervised: "SmartCity Solutions",
      projects_id: "7",
      role: "CFO"
    },
    {
      name: "Lauren Miller",
      image: "_nuxt/assets/img/team/lauren.jpg",
      education: "Lauren holds a Master's degree in Environmental Science from Columbia University, with a focus on sustainability and resource management.",
      job_experience: "Lauren's professional journey in sustainability began as a Sustainability Consultant, where she assisted businesses in integrating environmentally responsible practices into their operations. In this role, she conducted sustainability assessments, identified areas for improvement, and developed customized strategies to minimize environmental impact. Lauren also gained experience in conducting environmental impact assessments, helping organizations navigate regulatory requirements, and advising on sustainable supply chain management.",
      main_expertise: "Lauren specializes in environmental sustainability. Her expertise encompasses a wide range of areas, including renewable energy projects, circular economy models, sustainable supply chains, and green infrastructure. Lauren's deep knowledge of sustainable practices, coupled with her ability to identify viable investment opportunities, enables Ivy Ventures to make environmentally conscious investments that generate both positive financial returns and lasting environmental impact.",
      projects_supervised: "CleanWater Solutions,Sustainable Agriculture Initiative",
      projects_id: "4,15",
      role: "CTO"
    },
    {
      name: "David Patel",
      image: "_nuxt/assets/img/team/david.jpg",
      education: "David completed his Bachelor's degree in Finance from the London School of Economics and Political Science.",
      job_experience: "David's extensive experience as an Investment Banker at a global financial institution provides him with a comprehensive understanding of the investment landscape and deal execution. He played a pivotal role in advising clients on mergers and acquisitions, capital raising, and strategic transactions. David's responsibilities included conducting financial analysis, modeling complex financial structures, and negotiating deals. His experience in conducting due diligence and assessing investment opportunities equips him with the skills needed to identify ventures with strong growth potential.",
      main_expertise: "David's area of expertise lies in financial analysis and deal execution. He leverages his deep understanding of capital markets, financial modeling, and valuation techniques to evaluate investment opportunities and structure deals that align with Ivy Ventures' investment strategy. David's expertise contributes to the firm's ability to make sound investment decisions and create value for both portfolio companies and investors.",
      projects_supervised: "Sustainable Transport",
      projects_id: "13",
      role: "Office Manager"
    },
    {
      name: "Jennifer Ramirez",
      image: "_nuxt/assets/img/team/jennifer.jpg",
      education: "Jennifer holds a Master's degree in Public Health from Johns Hopkins University, with a specialization in health policy and management.",
      job_experience: "Jennifer's previous role as a Health Policy Analyst at a leading research institute has equipped her with a strong foundation in healthcare policy, research, and analysis. She played a crucial role in conducting policy research, analyzing healthcare trends, and providing strategic recommendations to government agencies and healthcare organizations. Jennifer's experience involved evaluating the impact of policies on assets health, conducting cost-effectiveness analyses, and developing evidence-based strategies to improve health outcomes.",
      main_expertise: "Jennifer's area of expertise lies in health policy and healthcare innovation. She possesses a deep understanding of the regulatory landscape, reimbursement models, and emerging trends in the healthcare industry. Jennifer closely monitors advancements in digital health, telemedicine, and personalized medicine, identifying startups that have the potential to revolutionize healthcare delivery and improve patient outcomes. Her expertise allows Ivy Ventures to navigate the complex healthcare landscape and invest in ventures that have the potential to drive positive change.",
      projects_supervised: "HealthTech Solutions",
      projects_id: "14",
      role: " Lead Software Engineer"
    },
    {
      name: "Alex Turner",
      image: "_nuxt/assets/img/team/alex.jpg",
      education: "Alex graduated with a Bachelor's degree in Economics from Princeton University, with a minor in Environmental Studies.",
      job_experience: "Alex's experience at a sustainable investment firm as a Senior Analyst provided him with valuable insights into impact investing and sustainable business practices. His responsibilities included conducting financial analysis, impact assessments, and due diligence for companies operating in the renewable energy and clean technology sectors. Alex actively participated in evaluating investment opportunities, identifying key ESG (environmental, social, and governance) factors, and assessing the potential for long-term sustainability and profitability.",
      main_expertise: "Alex's main area of expertise is sustainable investing. He possesses a deep understanding of impact investing frameworks, ESG considerations, and sustainable business models. Alex's expertise helps Ivy Ventures evaluate investment opportunities that align with their commitment to environmental and social responsibility. He actively seeks out ventures that demonstrate strong environmental stewardship, social impact, and financial performance, thereby contributing to a sustainable future.",
      projects_supervised: "EcoTech Solutions,GreenCommute",
      projects_id: "1,2",
      role: "Sales Manager"
    },
    {
      name: "Michelle Wong",
      image: "_nuxt/assets/img/team/michelle.jpg",
      education: "Michelle holds a Bachelor's degree in Biochemistry from the University of California, Berkeley, and an MBA from INSEAD.",
      job_experience: "Michelle's journey in the biotech industry began as a Senior Analyst at a leading biotechnology company, where she conducted in-depth market research, competitive analysis, and commercialization strategies for novel therapeutics and medical devices. She collaborated with cross-functional teams to assess market demand, evaluate regulatory landscapes, and identify potential barriers to entry. Michelle's experience provided her with a comprehensive understanding of the biotech industry's complexities and the critical success factors for investment.",
      main_expertise: "Michelle's primary area of expertise lies in the biotech and healthcare sectors. Her strong scientific background, coupled with her business acumen, allows her to evaluate investment opportunities in areas such as pharmaceuticals, medical devices, diagnostics, and healthcare technology. Michelle actively seeks out startups that are developing breakthrough therapies, disruptive technologies, and innovative approaches to addressing unmet medical needs. Her expertise contributes to Ivy Ventures' ability to identify ventures with transformative potential and contribute to advancements in healthcare.",
      projects_supervised: "BioGenetics,GreenEats",
      projects_id: "5,6",
      role: "Software Engineer"
    },
    {
      name: "Jonathan Reed",
      image: "_nuxt/assets/img/team/jonathan.jpg",
      education: "Jonathan completed his Bachelor's degree in Electrical Engineering from MIT, followed by an MBA from Harvard Business School. Fun fact, his twin brother is France's President",
      job_experience: "Jonathan's prior experience as a Product Manager at a leading technology company equipped him with a deep understanding of product development, technology commercialization, and market dynamics. In his role, he led cross-functional  in developing innovative products, defining product roadmaps, and collaborating with engineering, design, and marketing teams. Jonathan's experience involved conducting market research, gathering customer insights, and managing the product lifecycle from ideation to launch.",
      main_expertise: "Jonathan's main area of expertise lies in product development and technology commercialization. He has a keen eye for identifying market trends, understanding user needs, and translating them into successful product strategies. Jonathan actively seeks out startups that demonstrate strong product-market fit, disruptive technology, and exceptional user experience. His expertise contributes to Ivy Ventures' ability to evaluate technology-driven investment opportunities and identify ventures with high growth potential.",
      projects_supervised: "EcoFashion",
      projects_id: "8",
      role: "Accountant"
    }
  ];
  await models.Team.bulkCreate(teamModel);
  const areaModel = [
    {
      name: "Health",
      intro: "Health is a fundamental aspect of human well-being. Advancements in medical technology and healthcare are vital for improving quality of life and addressing global health challenges.Ivy Ventures recognizes the potential for startups to drive positive change in this field. By investing in health-focused startups, Ivy Ventures aims to contribute to the advancement of healthcare.",
      summary: "We have chosen to focus on health because we believe in the power of technology, data, and innovation to transform healthcare. By investing in HealthTech startups, telemedicine platforms, digital health solutions, and personalized medicine initiatives, we aim to enhance healthcare accessibility, efficiency, and quality. We seek out entrepreneurs who are developing groundbreaking technologies, leveraging artificial intelligence and data analytics, and creating patient-centric healthcare solutions. Our goal is to contribute to a healthcare system that is proactive, patient-centered, and capable of delivering better outcomes for individuals and communities. ",
      short_summary: "Health is a fundamental aspect of human well-being, and we believe that investing in advancements in healthcare is crucial for the betterment of society. The healthcare industry faces numerous challenges, including rising healthcare costs, inadequate access to care, and the need for personalized and preventive approaches. At Ivy Ventures, we are dedicated to supporting innovative startups and projects that revolutionize healthcare delivery and improve patient outcomes."
    },
    {
      name: "Transport",
      intro: "Transportation plays a crucial role in our modern society. However, the traditional modes of transportation come with challenges such as congestion, carbon emissions, and reliance on fossil fuels. The stakes are high as we seek to develop efficient, safe, and sustainable transportation solutions. Ivy Ventures focuses on startups that are revolutionizing means of transportation through major advancements.",
      summary: "We have chosen to focus on means of transportation because we believe in the transformative power of sustainable transportation solutions. By investing in innovative startups and projects that promote electric mobility, intelligent transportation systems, and shared transportation services, we aim to reduce emissions, improve air quality, and enhance the overall efficiency of transportation networks. Our portfolio includes startups that are developing electric vehicles, smart charging infrastructure, autonomous transportation technologies, and alternative transportation models. We work closely with entrepreneurs who share our vision of a cleaner, safer, and more accessible transportation future.",
      short_summary: "Transportation plays a crucial role in our daily lives, connecting people, goods, and ideas across the globe. However, traditional transportation systems heavily rely on fossil fuels, contributing to air pollution, carbon emissions, and traffic congestion. The need for sustainable and efficient means of transportation has never been more evident. At Ivy Ventures, we are committed to revolutionizing the transportation sector and shaping the future of mobility."
    },
    {
      name: "Environment",
      intro: "The environment is one of the most pressing issues of our time, with challenges ranging from climate change and resource depletion to pollution and loss of biodiversity. The stakes are high as the health and well-being of our planet and future generations depend on finding sustainable solutions. Ivy Ventures recognizes the urgency to support startups in this field.",
      summary: "We have chosen to focus on the environment because we believe that environmental sustainability is key to building a prosperous and resilient future. By investing in and supporting innovative startups and projects that address environmental challenges, we aim to drive positive change and contribute to the creation of a sustainable planet. Our commitment to the environment encompasses a wide range of sectors, including renewable energy, waste management, sustainable agriculture, and green infrastructure. We seek out visionary entrepreneurs and cutting-edge technologies that have the potential to make a significant impact on environmental conservation, climate mitigation, and the transition to a circular economy.",
      short_summary: "At Ivy Ventures, we recognize the pressing challenges and stakes associated with environmental sustainability. The world is facing unprecedented environmental issues, including climate change, biodiversity loss, and resource depletion. These challenges not only pose significant risks to the planet but also affect human health, social equity, and economic stability. It is imperative that we take immediate and decisive action to protect and restore our environment."
    }
  ];
  await models.Area.bulkCreate(areaModel);
};

const __filename = fileURLToPath$1(globalThis._importMeta_.url);
const __dirname = path.dirname(__filename);
console.log("DIRNAME --> " + __dirname);
const db = new Sequelize({
  dialect: "sqlite",
  storage: path.join(__dirname, "db.sqlite")
});
const app = express();
app.use(express.json());
async function initDB() {
  const models = {};
  await db.authenticate();
  models.Project = db.define("project", {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false
    },
    project_name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    logo: {
      type: DataTypes.STRING,
      allowNull: false
    },
    image: {
      type: DataTypes.STRING,
      allowNull: false
    },
    startup_presentation: {
      type: DataTypes.STRING,
      allowNull: true
    },
    startup_team: {
      type: DataTypes.STRING,
      allowNull: true
    },
    product_service_presentation: {
      type: DataTypes.STRING,
      allowNull: true
    },
    product_service_name: {
      type: DataTypes.STRING,
      allowNull: true
    },
    isTop5: {
      type: Sequelize.BOOLEAN,
      defaultValue: false
    },
    supervisor_name: {
      type: DataTypes.STRING,
      allowNull: true
    },
    project_areas: {
      type: DataTypes.STRING,
      allowNull: true
    }
    // Add more columns as needed for your project table
  });
  models.Team = db.define("team", {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    image: {
      type: DataTypes.STRING,
      allowNull: true
    },
    education: {
      type: DataTypes.STRING,
      allowNull: true
    },
    job_experience: {
      type: DataTypes.STRING,
      allowNull: true
    },
    main_expertise: {
      type: DataTypes.STRING,
      allowNull: true
    },
    projects_supervised: {
      type: DataTypes.STRING,
      //string with the names of the projects supervised, separated by a ","
      allowNull: true
    },
    projects_id: {
      type: DataTypes.STRING,
      allowNull: true
    },
    role: {
      type: DataTypes.STRING,
      allowNull: true
    }
  });
  models.Area = db.define("area", {
    name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false
    },
    intro: {
      type: DataTypes.STRING,
      allowNull: false
    },
    summary: {
      type: DataTypes.STRING,
      allowNull: false
    },
    short_summary: {
      type: DataTypes.STRING,
      allowNull: false
    }
  });
  await db.sync({ force: true });
  await dbInitialization(models);
  return models;
}
async function initServer() {
  const models = await initDB();
  app.get("/projects", async (req, res) => {
    const data = await models.Project.findAll();
    res.status(200).json(data);
  });
  app.get("/teams", async (req, res) => {
    const data = await models.Team.findAll();
    res.status(200).json(data);
  });
  app.get("/projects/:id", async (req, res) => {
    const data = await models.Project.findOne({
      where: {
        id: req.params.id
      }
    });
    if (data) {
      res.status(200).json(data);
    } else {
      res.sendStatus(404);
    }
  });
  app.get("/teams/:id", async (req, res) => {
    const data = await models.Team.findOne({
      where: {
        id: req.params.id
      }
    });
    if (data) {
      res.status(200).json(data);
    } else {
      res.sendStatus(404);
    }
  });
  app.get("/area", async (req, res) => {
    const data = await models.Area.findAll();
    res.status(200).json(data);
  });
  app.get("/area/:id", async (req, res) => {
    const data = await models.Area.findOne({
      where: {
        id: req.params.id
      }
    });
    if (data) {
      res.status(200).json(data);
    } else {
      res.sendStatus(404);
    }
  });
  app.get("/area", async (req, res) => {
    const data = await models.Area.findAll();
    res.status(200).json(data);
  });
  app.get("/area/:id", async (req, res) => {
    const data = await models.Area.findOne({
      where: {
        id: req.params.id
      }
    });
    if (data) {
      res.status(200).json(data);
    } else {
      res.sendStatus(404);
    }
  });
}
initServer();
console.log("SERVER INITIALIZED");
const _LCV9Rf = fromNodeMiddleware(app);

const config = useRuntimeConfig().public;
const _TZj70f = defineEventHandler(async (event) => {
  assertMethod(event, "POST");
  const body = await readBody(event);
  const cookieOptions = config.supabase.cookies;
  const { event: signEvent, session } = body;
  if (!event) {
    throw new Error("Auth event missing!");
  }
  if (signEvent === "SIGNED_IN" || signEvent === "TOKEN_REFRESHED") {
    if (!session) {
      throw new Error("Auth session missing!");
    }
    setCookie(
      event,
      `${cookieOptions.name}-access-token`,
      session.access_token,
      {
        domain: cookieOptions.domain,
        maxAge: cookieOptions.lifetime ?? 0,
        path: cookieOptions.path,
        sameSite: cookieOptions.sameSite
      }
    );
    setCookie(event, `${cookieOptions.name}-refresh-token`, session.refresh_token, {
      domain: cookieOptions.domain,
      maxAge: cookieOptions.lifetime ?? 0,
      path: cookieOptions.path,
      sameSite: cookieOptions.sameSite
    });
  }
  if (signEvent === "SIGNED_OUT") {
    setCookie(event, `${cookieOptions.name}-access-token`, "", {
      maxAge: -1,
      path: cookieOptions.path
    });
    setCookie(event, `${cookieOptions.name}-refresh-token`, "", {
      maxAge: -1,
      path: cookieOptions.path
    });
  }
  return "auth cookie set";
});

const _lazy_EgqcoN = () => import('../handlers/renderer.mjs').then(function (n) { return n.r; });

const handlers = [
  { route: '', handler: _f4b49z, lazy: false, middleware: true, method: undefined },
  { route: '/__nuxt_error', handler: _lazy_EgqcoN, lazy: true, middleware: false, method: undefined },
  { route: '/server', handler: _LCV9Rf, lazy: false, middleware: true, method: undefined },
  { route: '/api/_supabase/session', handler: _TZj70f, lazy: false, middleware: false, method: undefined },
  { route: '/**', handler: _lazy_EgqcoN, lazy: true, middleware: false, method: undefined }
];

function createNitroApp() {
  const config = useRuntimeConfig();
  const hooks = createHooks();
  const h3App = createApp({
    debug: destr(false),
    onError: errorHandler
  });
  const router = createRouter$1();
  h3App.use(createRouteRulesHandler());
  const localCall = createCall(toNodeListener(h3App));
  const localFetch = createFetch(localCall, globalThis.fetch);
  const $fetch = createFetch$1({
    fetch: localFetch,
    Headers,
    defaults: { baseURL: config.app.baseURL }
  });
  globalThis.$fetch = $fetch;
  h3App.use(
    eventHandler((event) => {
      const envContext = event.node.req.__unenv__;
      if (envContext) {
        Object.assign(event.context, envContext);
      }
      event.fetch = (req, init) => fetchWithEvent(event, req, init, { fetch: localFetch });
      event.$fetch = (req, init) => fetchWithEvent(event, req, init, { fetch: $fetch });
    })
  );
  for (const h of handlers) {
    let handler = h.lazy ? lazyEventHandler(h.handler) : h.handler;
    if (h.middleware || !h.route) {
      const middlewareBase = (config.app.baseURL + (h.route || "/")).replace(
        /\/+/g,
        "/"
      );
      h3App.use(middlewareBase, handler);
    } else {
      const routeRules = getRouteRulesForPath(
        h.route.replace(/:\w+|\*\*/g, "_")
      );
      if (routeRules.cache) {
        handler = cachedEventHandler(handler, {
          group: "nitro/routes",
          ...routeRules.cache
        });
      }
      router.use(h.route, handler, h.method);
    }
  }
  h3App.use(config.app.baseURL, router);
  const app = {
    hooks,
    h3App,
    router,
    localCall,
    localFetch
  };
  for (const plugin of plugins) {
    plugin(app);
  }
  return app;
}
const nitroApp = createNitroApp();
const useNitroApp = () => nitroApp;

const cert = process.env.NITRO_SSL_CERT;
const key = process.env.NITRO_SSL_KEY;
const server = cert && key ? new Server({ key, cert }, toNodeListener(nitroApp.h3App)) : new Server$1(toNodeListener(nitroApp.h3App));
const port = destr(process.env.NITRO_PORT || process.env.PORT) || 3e3;
const host = process.env.NITRO_HOST || process.env.HOST;
const s = server.listen(port, host, (err) => {
  if (err) {
    console.error(err);
    process.exit(1);
  }
  const protocol = cert && key ? "https" : "http";
  const i = s.address();
  const baseURL = (useRuntimeConfig().app.baseURL || "").replace(/\/$/, "");
  const url = `${protocol}://${i.family === "IPv6" ? `[${i.address}]` : i.address}:${i.port}${baseURL}`;
  console.log(`Listening ${url}`);
});
{
  process.on(
    "unhandledRejection",
    (err) => console.error("[nitro] [dev] [unhandledRejection] " + err)
  );
  process.on(
    "uncaughtException",
    (err) => console.error("[nitro] [dev] [uncaughtException] " + err)
  );
}
const nodeServer = {};

export { useRuntimeConfig as a, getRouteRules as g, nodeServer as n, useNitroApp as u };
//# sourceMappingURL=node-server.mjs.map
