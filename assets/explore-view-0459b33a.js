import{_ as m}from"./base-chip-dropdown.vue_vue_type_script_setup_true_lang-2d34f783.js";import{d as k,u as w,a as _,b as $,r as C,c as u,s as h,e as p,f as y,g as b,h as c,i as r,j as d,F as g,k as B,o as l,l as P,m as N}from"./index-c711218b.js";import{_ as U}from"./stations-list.vue_vue_type_script_setup_true_lang-ba0dc7ad.js";import"./index-94b4daef.js";const F={class:"chips__container"},I=k({__name:"explore-view",setup(L){const s=w();_();const i=$(),v=C([{name:"exploreViewSections.mostPopular",params:{order:"clickcount",reverse:!0}},{name:"exploreViewSections.gainingPopularity",params:{order:"clicktrend",reverse:!0}},{name:"exploreViewSections.mostLiked",params:{order:"votes",reverse:!0}},{name:"exploreViewSections.nowPlaying",params:{order:"clicktimestamp",reverse:!0}},{name:"exploreViewSections.lastChanged",params:{order:"changetimestamp",reverse:!0}},{name:"exploreViewSections.random",params:{order:"random"}}]),V=u(()=>[{text:i.t("all"),value:"all"},...s.countries.map(e=>({text:`${N(e.code.toUpperCase())} [${e.code.toUpperCase()}] ${e.name}`,value:e.code}))]),f=u(()=>[{text:i.t("all"),value:void 0},...s.languages.map(e=>({text:e.name,value:e.name}))]),{exploreViewCountry:t,exploreViewLanguage:n}=h(s);function x(e){const o=t.value==="all"?void 0:t.value,a=n.value==="all"?void 0:n.value;return{...e.params,limit:12,hideBroken:!0,countryCode:o,languageName:a}}return(e,o)=>(l(),p(g,null,[y("",!0),b("div",F,[c(r(m),{icon:"language",label:e.$t("station.country"),modelValue:r(t),"onUpdate:modelValue":o[0]||(o[0]=a=>d(t)?t.value=a:null),options:V.value},null,8,["label","modelValue","options"]),c(r(m),{icon:"translate",label:e.$t("station.language"),modelValue:r(n),"onUpdate:modelValue":o[1]||(o[1]=a=>d(n)?n.value=a:null),options:f.value},null,8,["label","modelValue","options"])]),(l(!0),p(g,null,B(v.value,(a,S)=>(l(),P(r(U),{key:S,name:e.$t(a.name),params:x(a),noStationsIcon:"explore",noStationsText:e.$t("noStationsRegion"),style:{height:"inherit !important"}},null,8,["name","params","noStationsText"]))),128))],64))}});export{I as default};
