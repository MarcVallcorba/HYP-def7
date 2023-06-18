import{_ as p}from"./nuxt-link.1a8fe4bd.js";import{e as l,r as m,o as _,g as i,b as t,w as o,a as e,d as s,j as f,p as v,i as w,G as g}from"./entry.2127660d.js";const y=""+new URL("ivylogo.e5d29e05.png",import.meta.url).href;const $={mounted(){window.addEventListener("scroll",this.handleScroll)},beforeDestroy(){window.removeEventListener("scroll",this.handleScroll)},methods:{handleScroll(){const d=this.$refs.headerElement,r=window.pageYOffset||document.documentElement.scrollTop,c=Math.min(r/20,5);d.style.backdropFilter=`blur(${c}px)`}}},k={ref:"headerElement",id:"header_desktop"},b=e("h1",{class:"ivylogo"},[e("img",{class:"logo",alt:"Ivy Ventures logo",src:y})],-1),x={class:"dropdown"},j={class:"dropdown"},V={class:"dropdown"},I={class:"down"},L={class:"dropdown"},S={class:"down"},E={class:"dropdown"};function T(d,r,c,u,Z,ee){const h=m("router-link"),n=p;return _(),i("header",k,[t(h,{class:"nav-link",to:"/"},{default:o(()=>[b]),_:1}),e("nav",null,[e("ul",null,[e("li",x,[t(n,{to:"/how_it_works"},{default:o(()=>[s("How it works ")]),_:1})]),e("li",j,[t(n,{to:"/team"},{default:o(()=>[s("Our team")]),_:1})]),e("li",V,[t(n,{to:"/areas"},{default:o(()=>[s("Areas")]),_:1}),e("ul",I,[e("li",null,[t(n,{to:"/areas"},{default:o(()=>[s("All areas")]),_:1})]),e("li",null,[t(n,{to:"/areas/projects_by_area"},{default:o(()=>[s("Projects by area")]),_:1})])])]),e("li",L,[t(n,{to:"/projects"},{default:o(()=>[s("Projects")]),_:1}),e("ul",S,[e("li",null,[t(n,{to:"/projects/top5projects"},{default:o(()=>[s("Top 5 projects")]),_:1})]),e("li",null,[t(n,{to:"/projects"},{default:o(()=>[s("All projects")]),_:1})])])]),e("li",E,[t(n,{to:"/contact"},{default:o(()=>[s("Contact us")]),_:1})])])])],512)}const N=l($,[["render",T]]),A=""+new URL("twitter.e6ca9110.png",import.meta.url).href,H=""+new URL("instagram.bd9d1254.png",import.meta.url).href,R=""+new URL("facebook.dd16b454.png",import.meta.url).href,U=""+new URL("linkedin.7dcbc614.png",import.meta.url).href;const C={},a=d=>(v("data-v-ddeeccd0"),d=d(),w(),d),F=a(()=>e("div",{style:{float:"left"}},[s(" +49 1 55 66 55 66 "),e("br"),s(" ivy@contact.com ")],-1)),P={style:{float:"center"}},B=a(()=>e("p",null,"Home ",-1)),O=a(()=>e("p",null,"How it works ",-1)),D=a(()=>e("p",null,"Our team ",-1)),G=a(()=>e("p",null,"Areas ",-1)),M=a(()=>e("p",null,"Projects ",-1)),Y={align:"center"},q=a(()=>e("p",null,"Contact us ",-1)),z=f('<br data-v-ddeeccd0><br data-v-ddeeccd0><div class="social" align="right" data-v-ddeeccd0><a href="https://twitter.com" style="color:black;" data-v-ddeeccd0><img src="'+A+'" height="20" width="20" data-v-ddeeccd0>#IvyVentures </a><a href="https://instagram.com" style="color:black;" data-v-ddeeccd0><img src="'+H+'" height="20" width="20" data-v-ddeeccd0> @IvyVentures </a><a href="https://facebook.com" style="color:black;" data-v-ddeeccd0><img src="'+R+'" height="20" width="20" data-v-ddeeccd0> @IvyVentures </a><a href="https://linkedin.com" style="color:black;" data-v-ddeeccd0><img src="'+U+'" height="20" width="20" data-v-ddeeccd0> @IvyVentures </a></div>',3);function J(d,r){const c=p;return _(),i("footer",null,[F,e("div",P,[t(c,{to:"/"},{default:o(()=>[B]),_:1}),s(" | "),t(c,{to:"/how_it_works"},{default:o(()=>[O]),_:1}),s(" | "),t(c,{to:"/team"},{default:o(()=>[D]),_:1}),s(" | "),t(c,{to:"/areas"},{default:o(()=>[G]),_:1}),s(" | "),t(c,{to:"/projects"},{default:o(()=>[M]),_:1})]),e("div",Y,[s(" Are you interested? For further information "),t(c,{to:"/contact"},{default:o(()=>[q]),_:1})]),z])}const K=l(C,[["render",J],["__scopeId","data-v-ddeeccd0"]]);const Q={},W={class:"page"};function X(d,r){const c=N,u=K;return _(),i("div",W,[t(c),g(d.$slots,"default"),t(u)])}const se=l(Q,[["render",X]]);export{se as default};