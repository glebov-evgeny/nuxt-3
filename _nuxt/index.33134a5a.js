import{H as L,$ as M,I as V,_ as N,o as S,c as F,a as d,t as T,r as A,D as R,J as q,d as z,w as j,F as U,f as X,K as Y,u as J,g as K}from"./entry.a79d38f2.js";function G(a,b,o,c){const i=L();return a.params.createElements&&Object.keys(c).forEach(u=>{if(!o[u]&&o.auto===!0){let f=a.$el.children(`.${c[u]}`)[0];f||(f=i.createElement("div"),f.className=c[u],a.$el.append(f)),o[u]=f,b[u]=f}}),o}function W({swiper:a,extendParams:b,on:o,emit:c}){b({navigation:{nextEl:null,prevEl:null,hideOnClick:!1,disabledClass:"swiper-button-disabled",hiddenClass:"swiper-button-hidden",lockClass:"swiper-button-lock",navigationDisabledClass:"swiper-navigation-disabled"}}),a.navigation={nextEl:null,$nextEl:null,prevEl:null,$prevEl:null};function i(e){let l;return e&&(l=M(e),a.params.uniqueNavElements&&typeof e=="string"&&l.length>1&&a.$el.find(e).length===1&&(l=a.$el.find(e))),l}function u(e,l){const t=a.params.navigation;e&&e.length>0&&(e[l?"addClass":"removeClass"](t.disabledClass),e[0]&&e[0].tagName==="BUTTON"&&(e[0].disabled=l),a.params.watchOverflow&&a.enabled&&e[a.isLocked?"addClass":"removeClass"](t.lockClass))}function f(){if(a.params.loop)return;const{$nextEl:e,$prevEl:l}=a.navigation;u(l,a.isBeginning&&!a.params.rewind),u(e,a.isEnd&&!a.params.rewind)}function _(e){e.preventDefault(),!(a.isBeginning&&!a.params.loop&&!a.params.rewind)&&(a.slidePrev(),c("navigationPrev"))}function v(e){e.preventDefault(),!(a.isEnd&&!a.params.loop&&!a.params.rewind)&&(a.slideNext(),c("navigationNext"))}function m(){const e=a.params.navigation;if(a.params.navigation=G(a,a.originalParams.navigation,a.params.navigation,{nextEl:"swiper-button-next",prevEl:"swiper-button-prev"}),!(e.nextEl||e.prevEl))return;const l=i(e.nextEl),t=i(e.prevEl);l&&l.length>0&&l.on("click",v),t&&t.length>0&&t.on("click",_),Object.assign(a.navigation,{$nextEl:l,nextEl:l&&l[0],$prevEl:t,prevEl:t&&t[0]}),a.enabled||(l&&l.addClass(e.lockClass),t&&t.addClass(e.lockClass))}function h(){const{$nextEl:e,$prevEl:l}=a.navigation;e&&e.length&&(e.off("click",v),e.removeClass(a.params.navigation.disabledClass)),l&&l.length&&(l.off("click",_),l.removeClass(a.params.navigation.disabledClass))}o("init",()=>{a.params.navigation.enabled===!1?x():(m(),f())}),o("toEdge fromEdge lock unlock",()=>{f()}),o("destroy",()=>{h()}),o("enable disable",()=>{const{$nextEl:e,$prevEl:l}=a.navigation;e&&e[a.enabled?"removeClass":"addClass"](a.params.navigation.lockClass),l&&l[a.enabled?"removeClass":"addClass"](a.params.navigation.lockClass)}),o("click",(e,l)=>{const{$nextEl:t,$prevEl:n}=a.navigation,s=l.target;if(a.params.navigation.hideOnClick&&!M(s).is(n)&&!M(s).is(t)){if(a.pagination&&a.params.pagination&&a.params.pagination.clickable&&(a.pagination.el===s||a.pagination.el.contains(s)))return;let r;t?r=t.hasClass(a.params.navigation.hiddenClass):n&&(r=n.hasClass(a.params.navigation.hiddenClass)),c(r===!0?"navigationShow":"navigationHide"),t&&t.toggleClass(a.params.navigation.hiddenClass),n&&n.toggleClass(a.params.navigation.hiddenClass)}});const B=()=>{a.$el.removeClass(a.params.navigation.navigationDisabledClass),m(),f()},x=()=>{a.$el.addClass(a.params.navigation.navigationDisabledClass),h()};Object.assign(a.navigation,{enable:B,disable:x,update:f,init:m,destroy:h})}function P(a=""){return`.${a.trim().replace(/([\.:!\/])/g,"\\$1").replace(/ /g,".")}`}function Q({swiper:a,extendParams:b,on:o,emit:c}){const i="swiper-pagination";b({pagination:{el:null,bulletElement:"span",clickable:!1,hideOnClick:!1,renderBullet:null,renderProgressbar:null,renderFraction:null,renderCustom:null,progressbarOpposite:!1,type:"bullets",dynamicBullets:!1,dynamicMainBullets:1,formatFractionCurrent:t=>t,formatFractionTotal:t=>t,bulletClass:`${i}-bullet`,bulletActiveClass:`${i}-bullet-active`,modifierClass:`${i}-`,currentClass:`${i}-current`,totalClass:`${i}-total`,hiddenClass:`${i}-hidden`,progressbarFillClass:`${i}-progressbar-fill`,progressbarOppositeClass:`${i}-progressbar-opposite`,clickableClass:`${i}-clickable`,lockClass:`${i}-lock`,horizontalClass:`${i}-horizontal`,verticalClass:`${i}-vertical`,paginationDisabledClass:`${i}-disabled`}}),a.pagination={el:null,$el:null,bullets:[]};let u,f=0;function _(){return!a.params.pagination.el||!a.pagination.el||!a.pagination.$el||a.pagination.$el.length===0}function v(t,n){const{bulletActiveClass:s}=a.params.pagination;t[n]().addClass(`${s}-${n}`)[n]().addClass(`${s}-${n}-${n}`)}function m(){const t=a.rtl,n=a.params.pagination;if(_())return;const s=a.virtual&&a.params.virtual.enabled?a.virtual.slides.length:a.slides.length,r=a.pagination.$el;let g;const y=a.params.loop?Math.ceil((s-a.loopedSlides*2)/a.params.slidesPerGroup):a.snapGrid.length;if(a.params.loop?(g=Math.ceil((a.activeIndex-a.loopedSlides)/a.params.slidesPerGroup),g>s-1-a.loopedSlides*2&&(g-=s-a.loopedSlides*2),g>y-1&&(g-=y),g<0&&a.params.paginationType!=="bullets"&&(g=y+g)):typeof a.snapIndex<"u"?g=a.snapIndex:g=a.activeIndex||0,n.type==="bullets"&&a.pagination.bullets&&a.pagination.bullets.length>0){const p=a.pagination.bullets;let C,k,D;if(n.dynamicBullets&&(u=p.eq(0)[a.isHorizontal()?"outerWidth":"outerHeight"](!0),r.css(a.isHorizontal()?"width":"height",`${u*(n.dynamicMainBullets+4)}px`),n.dynamicMainBullets>1&&a.previousIndex!==void 0&&(f+=g-(a.previousIndex-a.loopedSlides||0),f>n.dynamicMainBullets-1?f=n.dynamicMainBullets-1:f<0&&(f=0)),C=Math.max(g-f,0),k=C+(Math.min(p.length,n.dynamicMainBullets)-1),D=(k+C)/2),p.removeClass(["","-next","-next-next","-prev","-prev-prev","-main"].map(O=>`${n.bulletActiveClass}${O}`).join(" ")),r.length>1)p.each(O=>{const E=M(O),$=E.index();$===g&&E.addClass(n.bulletActiveClass),n.dynamicBullets&&($>=C&&$<=k&&E.addClass(`${n.bulletActiveClass}-main`),$===C&&v(E,"prev"),$===k&&v(E,"next"))});else{const O=p.eq(g),E=O.index();if(O.addClass(n.bulletActiveClass),n.dynamicBullets){const $=p.eq(C),H=p.eq(k);for(let I=C;I<=k;I+=1)p.eq(I).addClass(`${n.bulletActiveClass}-main`);if(a.params.loop)if(E>=p.length){for(let I=n.dynamicMainBullets;I>=0;I-=1)p.eq(p.length-I).addClass(`${n.bulletActiveClass}-main`);p.eq(p.length-n.dynamicMainBullets-1).addClass(`${n.bulletActiveClass}-prev`)}else v($,"prev"),v(H,"next");else v($,"prev"),v(H,"next")}}if(n.dynamicBullets){const O=Math.min(p.length,n.dynamicMainBullets+4),E=(u*O-u)/2-D*u,$=t?"right":"left";p.css(a.isHorizontal()?$:"top",`${E}px`)}}if(n.type==="fraction"&&(r.find(P(n.currentClass)).text(n.formatFractionCurrent(g+1)),r.find(P(n.totalClass)).text(n.formatFractionTotal(y))),n.type==="progressbar"){let p;n.progressbarOpposite?p=a.isHorizontal()?"vertical":"horizontal":p=a.isHorizontal()?"horizontal":"vertical";const C=(g+1)/y;let k=1,D=1;p==="horizontal"?k=C:D=C,r.find(P(n.progressbarFillClass)).transform(`translate3d(0,0,0) scaleX(${k}) scaleY(${D})`).transition(a.params.speed)}n.type==="custom"&&n.renderCustom?(r.html(n.renderCustom(a,g+1,y)),c("paginationRender",r[0])):c("paginationUpdate",r[0]),a.params.watchOverflow&&a.enabled&&r[a.isLocked?"addClass":"removeClass"](n.lockClass)}function h(){const t=a.params.pagination;if(_())return;const n=a.virtual&&a.params.virtual.enabled?a.virtual.slides.length:a.slides.length,s=a.pagination.$el;let r="";if(t.type==="bullets"){let g=a.params.loop?Math.ceil((n-a.loopedSlides*2)/a.params.slidesPerGroup):a.snapGrid.length;a.params.freeMode&&a.params.freeMode.enabled&&!a.params.loop&&g>n&&(g=n);for(let y=0;y<g;y+=1)t.renderBullet?r+=t.renderBullet.call(a,y,t.bulletClass):r+=`<${t.bulletElement} class="${t.bulletClass}"></${t.bulletElement}>`;s.html(r),a.pagination.bullets=s.find(P(t.bulletClass))}t.type==="fraction"&&(t.renderFraction?r=t.renderFraction.call(a,t.currentClass,t.totalClass):r=`<span class="${t.currentClass}"></span> / <span class="${t.totalClass}"></span>`,s.html(r)),t.type==="progressbar"&&(t.renderProgressbar?r=t.renderProgressbar.call(a,t.progressbarFillClass):r=`<span class="${t.progressbarFillClass}"></span>`,s.html(r)),t.type!=="custom"&&c("paginationRender",a.pagination.$el[0])}function B(){a.params.pagination=G(a,a.originalParams.pagination,a.params.pagination,{el:"swiper-pagination"});const t=a.params.pagination;if(!t.el)return;let n=M(t.el);n.length!==0&&(a.params.uniqueNavElements&&typeof t.el=="string"&&n.length>1&&(n=a.$el.find(t.el),n.length>1&&(n=n.filter(s=>M(s).parents(".swiper")[0]===a.el))),t.type==="bullets"&&t.clickable&&n.addClass(t.clickableClass),n.addClass(t.modifierClass+t.type),n.addClass(a.isHorizontal()?t.horizontalClass:t.verticalClass),t.type==="bullets"&&t.dynamicBullets&&(n.addClass(`${t.modifierClass}${t.type}-dynamic`),f=0,t.dynamicMainBullets<1&&(t.dynamicMainBullets=1)),t.type==="progressbar"&&t.progressbarOpposite&&n.addClass(t.progressbarOppositeClass),t.clickable&&n.on("click",P(t.bulletClass),function(r){r.preventDefault();let g=M(this).index()*a.params.slidesPerGroup;a.params.loop&&(g+=a.loopedSlides),a.slideTo(g)}),Object.assign(a.pagination,{$el:n,el:n[0]}),a.enabled||n.addClass(t.lockClass))}function x(){const t=a.params.pagination;if(_())return;const n=a.pagination.$el;n.removeClass(t.hiddenClass),n.removeClass(t.modifierClass+t.type),n.removeClass(a.isHorizontal()?t.horizontalClass:t.verticalClass),a.pagination.bullets&&a.pagination.bullets.removeClass&&a.pagination.bullets.removeClass(t.bulletActiveClass),t.clickable&&n.off("click",P(t.bulletClass))}o("init",()=>{a.params.pagination.enabled===!1?l():(B(),h(),m())}),o("activeIndexChange",()=>{(a.params.loop||typeof a.snapIndex>"u")&&m()}),o("snapIndexChange",()=>{a.params.loop||m()}),o("slidesLengthChange",()=>{a.params.loop&&(h(),m())}),o("snapGridLengthChange",()=>{a.params.loop||(h(),m())}),o("destroy",()=>{x()}),o("enable disable",()=>{const{$el:t}=a.pagination;t&&t[a.enabled?"removeClass":"addClass"](a.params.pagination.lockClass)}),o("lock unlock",()=>{m()}),o("click",(t,n)=>{const s=n.target,{$el:r}=a.pagination;if(a.params.pagination.el&&a.params.pagination.hideOnClick&&r&&r.length>0&&!M(s).hasClass(a.params.pagination.bulletClass)){if(a.navigation&&(a.navigation.nextEl&&s===a.navigation.nextEl||a.navigation.prevEl&&s===a.navigation.prevEl))return;const g=r.hasClass(a.params.pagination.hiddenClass);c(g===!0?"paginationShow":"paginationHide"),r.toggleClass(a.params.pagination.hiddenClass)}});const e=()=>{a.$el.removeClass(a.params.pagination.paginationDisabledClass),a.pagination.$el&&a.pagination.$el.removeClass(a.params.pagination.paginationDisabledClass),B(),h(),m()},l=()=>{a.$el.addClass(a.params.pagination.paginationDisabledClass),a.pagination.$el&&a.pagination.$el.addClass(a.params.pagination.paginationDisabledClass),x()};Object.assign(a.pagination,{enable:e,disable:l,render:h,update:m,init:B,destroy:x})}function Z({swiper:a,extendParams:b,on:o,emit:c}){let i;a.autoplay={running:!1,paused:!1},b({autoplay:{enabled:!1,delay:3e3,waitForTransition:!0,disableOnInteraction:!0,stopOnLastSlide:!1,reverseDirection:!1,pauseOnMouseEnter:!1}});function u(){if(!a.size){a.autoplay.running=!1,a.autoplay.paused=!1;return}const t=a.slides.eq(a.activeIndex);let n=a.params.autoplay.delay;t.attr("data-swiper-autoplay")&&(n=t.attr("data-swiper-autoplay")||a.params.autoplay.delay),clearTimeout(i),i=V(()=>{let s;a.params.autoplay.reverseDirection?a.params.loop?(a.loopFix(),s=a.slidePrev(a.params.speed,!0,!0),c("autoplay")):a.isBeginning?a.params.autoplay.stopOnLastSlide?_():(s=a.slideTo(a.slides.length-1,a.params.speed,!0,!0),c("autoplay")):(s=a.slidePrev(a.params.speed,!0,!0),c("autoplay")):a.params.loop?(a.loopFix(),s=a.slideNext(a.params.speed,!0,!0),c("autoplay")):a.isEnd?a.params.autoplay.stopOnLastSlide?_():(s=a.slideTo(0,a.params.speed,!0,!0),c("autoplay")):(s=a.slideNext(a.params.speed,!0,!0),c("autoplay")),(a.params.cssMode&&a.autoplay.running||s===!1)&&u()},n)}function f(){return typeof i<"u"||a.autoplay.running?!1:(a.autoplay.running=!0,c("autoplayStart"),u(),!0)}function _(){return!a.autoplay.running||typeof i>"u"?!1:(i&&(clearTimeout(i),i=void 0),a.autoplay.running=!1,c("autoplayStop"),!0)}function v(t){a.autoplay.running&&(a.autoplay.paused||(i&&clearTimeout(i),a.autoplay.paused=!0,t===0||!a.params.autoplay.waitForTransition?(a.autoplay.paused=!1,u()):["transitionend","webkitTransitionEnd"].forEach(n=>{a.$wrapperEl[0].addEventListener(n,h)})))}function m(){const t=L();t.visibilityState==="hidden"&&a.autoplay.running&&v(),t.visibilityState==="visible"&&a.autoplay.paused&&(u(),a.autoplay.paused=!1)}function h(t){!a||a.destroyed||!a.$wrapperEl||t.target===a.$wrapperEl[0]&&(["transitionend","webkitTransitionEnd"].forEach(n=>{a.$wrapperEl[0].removeEventListener(n,h)}),a.autoplay.paused=!1,a.autoplay.running?u():_())}function B(){a.params.autoplay.disableOnInteraction?_():(c("autoplayPause"),v()),["transitionend","webkitTransitionEnd"].forEach(t=>{a.$wrapperEl[0].removeEventListener(t,h)})}function x(){a.params.autoplay.disableOnInteraction||(a.autoplay.paused=!1,c("autoplayResume"),u())}function e(){a.params.autoplay.pauseOnMouseEnter&&(a.$el.on("mouseenter",B),a.$el.on("mouseleave",x))}function l(){a.$el.off("mouseenter",B),a.$el.off("mouseleave",x)}o("init",()=>{a.params.autoplay.enabled&&(f(),L().addEventListener("visibilitychange",m),e())}),o("beforeTransitionStart",(t,n,s)=>{a.autoplay.running&&(s||!a.params.autoplay.disableOnInteraction?a.autoplay.pause(n):_())}),o("sliderFirstMove",()=>{a.autoplay.running&&(a.params.autoplay.disableOnInteraction?_():v())}),o("touchEnd",()=>{a.params.cssMode&&a.autoplay.paused&&!a.params.autoplay.disableOnInteraction&&u()}),o("destroy",()=>{l(),a.autoplay.running&&_(),L().removeEventListener("visibilitychange",m)}),Object.assign(a.autoplay,{pause:v,run:u,start:f,stop:_})}const w={},aa={class:"s-intro"},ta={class:"s-intro__container"},na={class:"s-intro__block"},ea={class:"s-intro__content"},la={class:"s-intro__subtitle"},sa={class:"s-intro__title s-title"},ia={class:"s-intro__text"},oa={class:"s-intro__text"};function ra(a,b){return S(),F("section",aa,[d("div",ta,[d("div",na,[d("div",ea,[d("p",la,T(a.$t("intro.subtitle")),1),d("h2",sa,T(a.$t("intro.title")),1),d("p",ia,T(a.$t("intro.description")),1),d("p",oa,T(a.$t("intro.description_2")),1)])])])])}const da=N(w,[["render",ra]]);const ca={},ua={class:"s-photo"},fa=d("div",{class:"s-photo__container"},[d("div",{class:"s-photo__block"},[d("div",{class:"s-photo__image"})])],-1),ga=[fa];function pa(a,b){return S(),F("section",ua,ga)}const ma=N(ca,[["render",pa]]);const _a={class:"s-swiper"},va={class:"s-swiper__container"},ba={class:"s-swiper__block"},ha={class:"s-swiper__title s-title"},ya=["src"],Ca=["href"],$a=d("svg",{width:"29",height:"30",viewBox:"0 0 29 30",fill:"none",xmlns:"http://www.w3.org/2000/svg"},[d("line",{x1:"27.5816",y1:"16.0606",x2:"13.4395",y2:"1.91844",stroke:"black","stroke-width":"4"}),d("line",{x1:"12.7323",y1:"28.0814",x2:"26.8744",y2:"13.9393",stroke:"black","stroke-width":"4"})],-1),xa=[$a],ka=d("div",{class:"s-swiper__pagination"},null,-1),Ea={class:"s-swiper__navigation"},Ba=d("svg",{width:"29",height:"30",viewBox:"0 0 29 30",fill:"none",xmlns:"http://www.w3.org/2000/svg"},[d("line",{x1:"27.5816",y1:"16.0606",x2:"13.4395",y2:"1.91844",stroke:"black","stroke-width":"4"}),d("line",{x1:"12.7323",y1:"28.0814",x2:"26.8744",y2:"13.9393",stroke:"black","stroke-width":"4"})],-1),Oa=[Ba],Ma=d("svg",{width:"29",height:"30",viewBox:"0 0 29 30",fill:"none",xmlns:"http://www.w3.org/2000/svg"},[d("line",{x1:"27.5816",y1:"16.0606",x2:"13.4395",y2:"1.91844",stroke:"black","stroke-width":"4"}),d("line",{x1:"12.7323",y1:"28.0814",x2:"26.8744",y2:"13.9393",stroke:"black","stroke-width":"4"})],-1),Ia=[Ma],Pa={__name:"s-swiper",props:{presentations:{type:Array,required:!0}},setup(a){const b=A(null),o=A(null),c=R({slidesPerView:1,spaceBetween:16,grabCursor:!0,loop:!1,autoplay:{delay:2e3,disableOnInteraction:!1},navigation:{prevEl:b,nextEl:o},breakpoints:{550:{slidesPerView:2.2},1200:{slidesPerView:3.2}},modules:[Q,W,Z],pagination:{el:".s-swiper__pagination",clickable:!0}});return(i,u)=>{const f=q("swiper-slide"),_=q("swiper");return S(),F("section",_a,[d("div",va,[d("div",ba,[d("h2",ha,T(i.$t("swiper.title")),1),z(_,Y({class:"s-swiper__slider"},J(c)),{default:j(()=>[(S(!0),F(U,null,X(a.presentations,(v,m)=>(S(),K(f,{key:m,class:"s-swiper__item"},{default:j(()=>[d("img",{src:`/nuxt-3/images/swiper/${v.label}.png`,class:"s-swiper__item-img"},null,8,ya),d("a",{href:`${v.link}`,target:"_blank",class:"s-swiper__item-link"},xa,8,Ca)]),_:2},1024))),128))]),_:1},16),ka,d("div",Ea,[d("div",{ref_key:"sliderPrev",ref:b,class:"s-swiper__navigation-prev s-swiper__navigation-item"},Oa,512),d("div",{ref_key:"sliderNext",ref:o,class:"s-swiper__navigation-next s-swiper__navigation-item"},Ia,512)])])])])}}};const Sa={class:"s-main"},Da={class:"column l-wide"},Ta={__name:"index",setup(a){const b=[{label:"start",link:"https://synergystart.ru/"},{label:"care",link:"https://www.samsung.com/ru/support/samsung-care-plus/"},{label:"design",link:"https://synergy.ru/lp/design/"},{label:"synergyproduction",link:"https://synergyproduction.ru/"},{label:"webinar",link:"https://akademia-triz.ru/lp/webinar/"},{label:"marketplaces",link:"https://synergydigital.com/lp/marketplaces/"},{label:"management",link:"https://synergy.ru/lp/openday/management/"},{label:"programiss",link:"https://programiss.ru/"},{label:"brain",link:"https://synergyglobal.ru/forums/brain2023/"}];return(o,c)=>{const i=da,u=ma,f=Pa;return S(),F("main",Sa,[d("div",Da,[z(i),z(u),z(f,{presentations:b})])])}}},La=N(Ta,[["__scopeId","data-v-70e1b7e0"]]);export{La as default};
