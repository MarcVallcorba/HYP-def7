import{_ as y}from"./nuxt-link.1a8fe4bd.js";import{_ as w,a as x}from"./TheButton.9d6a7be4.js";import{_ as k}from"./Return.54d665db.js";import{e as T,f as I,q as P,s as A,g as p,a as e,b as o,w as n,d as i,v as B,x as S,F as f,k as V,u as C,h as F,o as _,t as L,p as N,i as O}from"./entry.2127660d.js";import{u as R}from"./fetch.4d096047.js";const t=c=>(N("data-v-56a9eb57"),c=c(),O(),c),D=t(()=>e("div",{class:"introduction"},[e("div",{id:"title"},[e("p",null,"Our projects")])],-1)),W={class:"breadcrumb"},q={class:"breadcrumb-item"},E=t(()=>e("a",null,"Projects",-1)),U={class:"thebody"},$=t(()=>e("div",{class:"block",id:"Top 5 relevant projects"},[e("h2",null,"What are our projects about?"),i(" At Ivy Ventures, we take immense pride in the diverse range of projects and startups we have nurtured and supported throughout our journey. Our commitment to driving innovation and making a positive impact in the world is reflected in the exceptional ventures that we have had the privilege to work with. Our portfolio of supported projects spans a wide array of industries, from groundbreaking environmental initiatives to revolutionary transportation solutions and life-changing healthcare innovations. Each project represents our dedication to supporting startups that are not only financially promising but also aligned with our mission to create a better future. We are proud to celebrate the achievements of our supported projects, which serve as beacons of innovation, social impact, and technological advancement. From clean energy solutions that combat climate change to transformative transportation technologies that revolutionize mobility, and from breakthrough medical treatments that save lives to digital health platforms that enhance access to care, our supported projects are making a difference in their respective domains. "),e("br")],-1)),z=t(()=>e("br",null,null,-1)),H={class:"block",id:"Top 5 relevant projects"},M={class:"block",id:"Projects by area"},Q={class:"buttons"},G=t(()=>e("br",null,null,-1)),J=t(()=>e("h2",null,"All our projects",-1)),K={class:"block",id:"All our projects"},X=t(()=>e("br",null,null,-1)),Y=t(()=>e("br",null,null,-1)),Z={class:"search-container"},ee={class:"projects"},te=["href"],oe=t(()=>e("br",null,null,-1)),se=["src"],ae=t(()=>e("p",null,null,-1)),re={__name:"index",async setup(c){let l,h;const{data:m}=([l,h]=I(()=>R(F().baseURL+"/server/projects","$olQ4jpDRvq")),l=await l,h(),l),s=P(""),b=A(()=>{if(s.value==0||s.value=="")return m.value;const u=[];for(let a of m.value)a.project_name.toLowerCase().includes(s.value)&&u.push(a);return u});return(u,a)=>{const d=y,j=w,g=k,v=x;return _(),p(f,null,[D,e("main",null,[e("ol",W,[e("li",q,[o(d,{to:"/projects"},{default:n(()=>[E]),_:1})])]),o(j,{class:"overview",sections:["What are our projects about?","Top 5 relevant projects","Projects by area","All our projects"]}),o(g),e("div",U,[$,z,e("div",H,[e("div",M,[e("div",Q,[o(d,{to:"/projects/top5projects/"},{default:n(()=>[o(v,{color:"#679436"},{default:n(()=>[i("Top 5 relevant projects")]),_:1})]),_:1}),i("                 "),o(d,{to:"/areas/projects_by_area/"},{default:n(()=>[o(v,{color:"#679436"},{default:n(()=>[i("Projects by area")]),_:1})]),_:1})])])]),G,J,e("div",K,[i(" Here are all the projects that we helped foster. Browse to your heart's content! "),X,Y,e("div",Z,[B(e("input",{type:"text",class:"search-input",placeholder:"Search projects",id:"age-filter","onUpdate:modelValue":a[0]||(a[0]=r=>s.value=r)},null,512),[[S,s.value]])]),e("div",ee,[(_(!0),p(f,null,V(C(b),r=>(_(),p("div",{key:u.index},[e("a",{class:"project",href:`/projects/${r.id}`},[e("h3",null,L(r.project_name),1),oe,e("img",{src:r.logo,alt:"Project Image"},null,8,se),ae],8,te)]))),128))])])])])],64)}}},de=T(re,[["__scopeId","data-v-56a9eb57"]]);export{de as default};