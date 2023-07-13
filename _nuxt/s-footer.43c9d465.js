import{r as v,b as M,u as a,o as n,c as l,e as m,a as e,_ as k,F as V,f as O,g as y,w as b,h as R,t as d,n as f,i as B,j as F,k as S,l as K,m as W,p as D,q as j,s as z,d as g,v as Y}from"./entry.a79d38f2.js";import{_ as E,a as G,u as J}from"./m-form-registration.92cd821d.js";import{u as Q}from"./user.cf91f0ac.js";const X={key:0,class:"preloader"},ee=e("div",{class:"spinner"},[e("div",{class:"dot1"}),e("div",{class:"dot2"})],-1),se=[ee],Qe={__name:"s-loader",setup(s){const c=v(!0),o=()=>{const i=document.querySelector("html");i.style.overflowY="hidden",c.value=!0},t=()=>{const i=document.querySelector("html");i.style.overflowY="visible",c.value=!1};return M(()=>{o(),setTimeout(()=>t(),1e3)}),(i,_)=>a(c)?(n(),l("div",X,se)):m("",!0)}},oe=""+globalThis.__publicAssetsURL("images/icons/logo.png"),te={name:"AIconLogo"},ne={src:oe,class:"s-header__logo-image",alt:"github-icon"};function ae(s,c,o,t,i,_){return n(),l("img",ne)}const le=k(te,[["render",ae]]);const ie={};function ce(s,c){const o=B;return n(),l("nav",{class:f(["m-menu",s.classes])},[(n(!0),l(V,null,O(s.$tm("header.nav"),(t,i)=>(n(),y(o,{key:i,class:f([{active:s.$route.name===t.name},"m-menu__link"]),to:t.name},{default:b(()=>[R(d(t.title),1)]),_:2},1032,["class","to"]))),128))],2)}const _e=k(ie,[["render",ce]]),re=""+globalThis.__publicAssetsURL("images/icons/phone.svg"),de={name:"AIconPhone"},ue={src:re,class:"s-header__phone-image",alt:"phone-icon"};function pe(s,c,o,t,i,_){return n(),l("img",ue)}const he=k(de,[["render",pe]]),me={__name:"m-popup-auth",emits:["onSend"],setup(s,{emit:c}){let o=v("login");const t=()=>{c("onSend")},i=_=>{o.value=_};return(_,p)=>{const h=E,$=G;return n(),l(V,null,[a(o)==="login"?(n(),y(h,{key:0,onFormBtnClick:i,onOnSend:t})):m("",!0),a(o)==="registration"?(n(),y($,{key:1,onFormBtnClick:i,onOnSend:t})):m("",!0)],64)}}};const ge=["onKeydown"],fe=["onKeydown"],ve=e("svg",{viewBox:"0 0 32 32",class:"a-popup__close-img"},[e("line",{class:"cls-1",x1:"7",x2:"25",y1:"7",y2:"25"}),e("line",{class:"cls-1",x1:"7",x2:"25",y1:"25",y2:"7"})],-1),$e=[ve],ye={key:0,class:"a-popup__content"},be={key:1,class:"a-popup__iframe"},ke=["src"],we={__name:"a-popup",props:{visible:{type:Boolean,default:!1},type:{type:String,validator:s=>["iframe","content"].indexOf(s)!==-1,default:"content"},link:{type:String,default:"#"},width:{type:String,default:"100%"},fullscreen:{type:Boolean,default:!1,required:!1}},emits:["close"],setup(s,{emit:c}){const o=s,t=()=>c("close"),i=F(()=>({["a-popup--fullscreen"]:o.fullscreen}));return(_,p)=>s.visible?(n(),l("div",{key:0,class:f(["a-popup",a(i)])},[e("div",{class:"a-popup__backdrop",onClick:t,onKeydown:S(t,["esc"])},null,40,ge),e("div",{class:"a-popup__container",style:W(`max-width: ${s.width}`)},[e("div",{class:"a-popup__close",onClick:t,onKeydown:S(t,["esc"])},$e,40,fe),s.type!=="iframe"?(n(),l("div",ye,[K(_.$slots,"default")])):(n(),l("div",be,[e("iframe",{title:"",src:s.link,frameborder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowfullscreen:""},null,8,ke)]))],4)],2)):m("",!0)}},Ce=D({id:"device-store",state:()=>({width:0}),actions:{updateWidth(s){this.width=s}},getters:{isDesktop:s=>s.width>1140,isTablet:s=>s.width>=768&&s.width<=1140,isMobile:s=>s.width<768}});const Le={class:"s-header"},xe={class:"s-header__container l-wide"},Se={class:"s-header__actions"},Me={href:"tel:+79162176557",class:"s-header__phone"},Ve=e("span",{class:"s-header__phone-number","aria-label":"Позвоните нам: +7 916 217 65 57"},"+7 916 217 65 57",-1),Be=Y('<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" class="s-header__theme-icon"><g clip-path="url(#clip0_578_178)"><path d="M12 18C10.4087 18 8.88258 17.3679 7.75736 16.2426C6.63214 15.1174 6 13.5913 6 12C6 10.4087 6.63214 8.88258 7.75736 7.75736C8.88258 6.63214 10.4087 6 12 6C13.5913 6 15.1174 6.63214 16.2426 7.75736C17.3679 8.88258 18 10.4087 18 12C18 13.5913 17.3679 15.1174 16.2426 16.2426C15.1174 17.3679 13.5913 18 12 18ZM11 1H13V4H11V1ZM11 20H13V23H11V20ZM3.515 4.929L4.929 3.515L7.05 5.636L5.636 7.05L3.515 4.93V4.929ZM16.95 18.364L18.364 16.95L20.485 19.071L19.071 20.485L16.95 18.364ZM19.071 3.514L20.485 4.929L18.364 7.05L16.95 5.636L19.071 3.515V3.514ZM5.636 16.95L7.05 18.364L4.929 20.485L3.515 19.071L5.636 16.95ZM23 11V13H20V11H23ZM4 11V13H1V11H4Z"></path></g><defs><clipPath id="clip0_578_178"><rect width="24" height="24"></rect></clipPath></defs></svg>',1),Fe=[Be],Ye=e("path",{class:"line top",d:"m 70,33 h -40 c 0,0 -8.5,-0.149796 -8.5,8.5 0,8.649796 8.5,8.5 8.5,8.5 h 20 v -20"},null,-1),He=e("path",{class:"line middle",d:"m 70,50 h -40"},null,-1),Te=e("path",{class:"line bottom",d:"m 30,67 h 40 c 0,0 8.5,0.149796 8.5,-8.5 0,-8.649796 -8.5,-8.5 -8.5,-8.5 h -20 v 20"},null,-1),Ze=[Ye,He,Te],Xe={__name:"s-header",emits:["handler-change-themes"],setup(s,{emit:c}){const o=Q(),t=Ce(),i=j(),_=J("userInformation"),p=v(!1),h=v(!1),$=()=>h.value=!h.value,H=()=>{c("handler-change-themes")},w=()=>{h.value=!1},C=()=>{p.value=!0},L=()=>{o.$reset(),_.value=null,i.push({path:"/"})},T=r=>{r.locale=r.locale==="ru"?"en":"ru"},Z=()=>{_.value&&o.setUser(_.value.email,_.value.id)};return z(()=>{const r=document.querySelector("html"),u=document.querySelector("body");p.value===!0?(r.style.overflowY="hidden",u.style.overflowY="hidden"):(r.style.overflowY="initial",u.style.overflowY="initial")},{immediate:!0}),M(()=>{Z()}),(r,u)=>{const P=le,U=B,A=_e,q=he,I=me,N=we;return n(),l("header",Le,[e("div",xe,[g(U,{to:"/",class:"s-header__logo","aria-label":"Перейти на главную"},{default:b(()=>[g(P,{onClick:w})]),_:1}),e("div",{class:f(["s-header__nav",[{active:a(h)&&a(t).isMobile}]]),onClick:w},[g(A),a(t).isMobile&&!a(o).uid?(n(),l("button",{key:0,class:"s-header__login",onClick:C},d(r.$t("header.login")),1)):a(t).isMobile&&a(o).uid?(n(),l("button",{key:1,class:"s-header__login",onClick:L},d(r.$t("header.logout")),1)):m("",!0)],2),e("div",Se,[e("a",Me,[g(q),Ve]),e("button",{class:"s-header__theme",type:"button",onClick:H},Fe),e("button",{class:"s-header__lang",onClick:u[0]||(u[0]=x=>T(r.$i18n))},[e("span",null,d(r.$t("header.language")),1)]),!a(t).isMobile&&!a(o).uid?(n(),l("button",{key:0,class:"s-header__login",onClick:C},d(r.$t("header.login")),1)):!a(t).isMobile&&a(o).uid?(n(),l("button",{key:1,class:"s-header__login",onClick:L},d(r.$t("header.logout")),1)):m("",!0)]),a(t).isMobile?(n(),l("div",{key:0,class:"s-header__menu",onClick:$},[(n(),l("svg",{class:f(["s-header__menu-burger",[{active:a(h)}]]),viewBox:"0 0 100 100",width:"40"},Ze,2))])):m("",!0)]),g(N,{visible:a(p),class:"s-header__popup",onClose:u[2]||(u[2]=x=>p.value=!1)},{default:b(()=>[g(I,{onOnSend:u[1]||(u[1]=x=>p.value=!1)})]),_:1},8,["visible"])])}}},Pe=""+globalThis.__publicAssetsURL("images/icons/social/gh.svg"),Ue=""+globalThis.__publicAssetsURL("images/icons/social/tg.svg"),Ae=""+globalThis.__publicAssetsURL("images/icons/social/wa.svg");const qe={class:"s-footer"},Ie={class:"s-footer__container l-wide"},Ne={class:"s-footer__block"},Oe={class:"s-footer__box"},Re={class:"s-footer__title"},Ke=e("div",{class:"s-footer__box-content"},[e("a",{href:"tel:+79162176557",class:"s-footer__link"},[e("span",null,"+7 916 217 65 57")]),e("a",{href:"mailto:egoji@mail.ru",class:"s-footer__link"},[e("span",null,"egoji@mail.ru")])],-1),We={class:"s-footer__box"},De={class:"s-footer__title"},je=Y('<div class="s-footer__social"><a href="https://github.com/glebov-evgeny" class="s-footer__social-link" target="_blank"><img class="s-footer__social-image" src="'+Pe+'" alt="social-link"></a><a href="https://t.me/eaglebov" class="s-footer__social-link" target="_blank"><img class="s-footer__social-image" src="'+Ue+'" alt="social-link"></a><a href="https://wa.me/79162176557" class="s-footer__social-link" target="_blank"><img class="s-footer__social-image" src="'+Ae+'" alt="social-link"></a></div>',1),ze={class:"s-footer__rights"},es={__name:"s-footer",setup(s){const c=F(()=>new Date().getFullYear());return(o,t)=>(n(),l("footer",qe,[e("div",Ie,[e("div",Ne,[e("div",Oe,[e("p",Re,d(o.$t("footer.contacts")),1),Ke]),e("div",We,[e("p",De,d(o.$t("footer.useful")),1),je])]),e("p",ze,d(a(c))+" © "+d(o.$t("footer.rights")),1)])]))}};export{Qe as _,Xe as a,es as b,Ce as u};
