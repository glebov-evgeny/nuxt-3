import{_ as m,o as t,c as i,a as s,t as n,F as a,f as l,e as p,m as u,d as x}from"./entry.a79d38f2.js";const h={},$={class:"s-experience"},f={class:"s-experience__container l-wide"},g={class:"s-experience__title s-title"},k={class:"s-experience__block"},v={class:"s-experience__item-top"},b={class:"s-experience__item-title"},y={class:"s-experience__item-date"},B=["href"],N={class:"s-experience__item-content"},V={class:"s-experience__item-middle"},E={key:0,class:"s-experience__item-duties s-experience__item-margin"},F={class:"s-experience__item-subtitle"},S={class:"s-experience__item-list"},w={key:1,class:"s-experience__item-stack s-experience__item-margin"},z={class:"s-experience__item-subtitle"},C={class:"s-experience__item-list"},D={key:0,class:"s-experience__item-examples s-experience__item-margin"},I={class:"s-experience__item-subtitle"},L={class:"s-experience__item-examples-block"},j=["href"];function q(e,d){return t(),i("section",$,[s("div",f,[s("h2",g,n(e.$t("experience.title")),1),s("div",k,[(t(!0),i(a,null,l(e.$tm("experience.info"),(_,c)=>(t(),i("div",{key:c,class:"s-experience__item"},[s("div",v,[s("p",b,n(e.$rt(_.name)),1),s("p",y,n(e.$rt(_.date)),1)]),s("a",{href:e.$rt(_.company.link),target:"_blank",class:"s-experience__item-company"},n(e.$rt(_.company.name)),9,B),s("div",N,[s("div",V,[e.$tm(`experience.info[${c}].duties`).length?(t(),i("div",E,[s("p",F,n(e.$t("experience.responsibilities")),1),s("ul",S,[(t(!0),i(a,null,l(e.$tm(`experience.info[${c}].duties`),(r,o)=>(t(),i("li",{key:o,class:"s-experience__item-point"},n(e.$rt(r)),1))),128))])])):p("",!0),e.$tm(`experience.info[${c}].stack`).length?(t(),i("div",w,[s("p",z,n(e.$t("experience.stack")),1),s("ul",C,[(t(!0),i(a,null,l(e.$tm(`experience.info[${c}].stack`),(r,o)=>(t(),i("li",{key:o,class:"s-experience__item-point"},n(e.$rt(r)),1))),128))])])):p("",!0)]),e.$tm(`experience.info[${c}].links`).length?(t(),i("div",D,[s("p",I,n(e.$t("experience.example")),1),s("div",L,[(t(!0),i(a,null,l(e.$tm(`experience.info[${c}].links`),(r,o)=>(t(),i("a",{key:o,href:e.$rt(r.item),target:"_blank",class:"s-experience__item-examples-link",style:u({backgroundImage:`url(/nuxt-3/images/portfolio/${r.image}.png)`})},null,12,j))),128))])])):p("",!0)])]))),128))])])])}const A=m(h,[["render",q]]),G={},H={class:"s-main"};function J(e,d){const _=A;return t(),i("main",H,[x(_)])}const M=m(G,[["render",J]]);export{M as default};
