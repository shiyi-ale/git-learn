import{o as d,c as f,a as t,r as w,u as A,b as _,d as $,i as S,e as C,n as h,t as N,f as k,g,h as o,_ as P,j as R,k as L,l as H,m as I,p as D,q as j,s as E,v as F,w as U,x as p,y as T,z as W,A as V,B as z,C as q,D as O,E as Y,F as Z,G,H as y,I as J,J as K,K as Q,L as X,M as tt,N as B,O as et,P as ot,Q as st,R as nt,S as at,T as it,U as rt,V as lt,W as ct}from"./index.45f6b04f.js";import dt from"./DrawingControls.f1f79ee5.js";const ut={class:"slidev-icon",preserveAspectRatio:"xMidYMid meet",viewBox:"0 0 32 32",width:"1.2em",height:"1.2em"},mt=t("path",{fill:"currentColor",d:"M12 10H6.78A11 11 0 0 1 27 16h2A13 13 0 0 0 6 7.68V4H4v8h8zm8 12h5.22A11 11 0 0 1 5 16H3a13 13 0 0 0 23 8.32V28h2v-8h-8z"},null,-1),pt=[mt];function vt(e,n){return d(),f("svg",ut,pt)}var ft={name:"carbon-renew",render:vt};const gt={class:"slidev-icon",preserveAspectRatio:"xMidYMid meet",viewBox:"0 0 32 32",width:"1.2em",height:"1.2em"},_t=t("path",{fill:"currentColor",d:"M16 30a14 14 0 1 1 14-14a14 14 0 0 1-14 14Zm0-26a12 12 0 1 0 12 12A12 12 0 0 0 16 4Z"},null,-1),ht=t("path",{fill:"currentColor",d:"M20.59 22L15 16.41V7h2v8.58l5 5.01L20.59 22z"},null,-1),xt=[_t,ht];function bt(e,n){return d(),f("svg",gt,xt)}var yt={name:"carbon-time",render:bt},wt="/assets/logo-title-horizontal.96c3c915.png";function kt(){const e=w(Date.now()),n=A({interval:1e3}),u=_(()=>{const s=(n.value-e.value)/1e3,i=Math.floor(s%60).toString().padStart(2,"0");return`${Math.floor(s/60).toString().padStart(2,"0")}:${i}`});function r(){e.value=n.value}return{timer:u,resetTimer:r}}const $t=["innerHTML"],St=["textContent"],Ct=$({__name:"NoteViewer",props:{class:null,noteHtml:null,note:null},emits:["click"],setup(e){const n=e;return S(C),(u,r)=>e.noteHtml?(d(),f("div",{key:0,class:h(["prose overflow-auto outline-none",n.class]),onClick:r[0]||(r[0]=s=>u.$emit("click")),innerHTML:e.noteHtml},null,10,$t)):(d(),f("div",{key:1,class:h(["prose overflow-auto outline-none",n.class]),onClick:r[1]||(r[1]=s=>u.$emit("click")),textContent:N(e.note)},null,10,St))}}),Mt=$({__name:"NoteStatic",props:{class:null},setup(e){const n=e;S(C);const u=_(()=>{var s,i,a;return(a=(i=(s=k.value)==null?void 0:s.meta)==null?void 0:i.slide)==null?void 0:a.note}),r=_(()=>{var s,i,a;return(a=(i=(s=k.value)==null?void 0:s.meta)==null?void 0:i.slide)==null?void 0:a.notesHTML});return(s,i)=>(d(),g(Ct,{class:h(n.class),note:o(u),"note-html":o(r)},null,8,["class","note","note-html"]))}});const x=e=>(X("data-v-68130f49"),e=e(),tt(),e),Ht={class:"bg-main h-full slidev-presenter"},Tt={class:"grid-container"},Vt={class:"grid-section top flex"},zt=x(()=>t("img",{src:wt,class:"ml-2 my-auto h-10 py-1 lg:h-14 lg:py-2"},null,-1)),Bt=x(()=>t("div",{class:"flex-auto"},null,-1)),Nt={class:"text-2xl pl-2 pr-6 my-auto"},At=x(()=>t("div",{class:"context"}," current ",-1)),Pt={class:"relative grid-section next flex flex-col p-2 lg:p-4"},Rt=x(()=>t("div",{class:"context"}," next ",-1)),Lt={class:"grid-section note overflow-auto"},It={class:"grid-section bottom"},Dt={class:"progress-bar"},jt=$({__name:"Presenter",setup(e){S(C);const n=w();R(),L(n);const u=H.titleTemplate.replace("%s",H.title||"Slidev");I({title:`Presenter - ${u}`});const{timer:r,resetTimer:s}=kt(),i=w([]),a=_(()=>B.value<et.value?{route:k.value,clicks:B.value+1}:ot.value?{route:st.value,clicks:0}:null);return D(()=>{const M=n.value.querySelector("#slide-content"),c=j(E()),b=F();U(()=>{if(!b.value||at.value||!it.value)return;const m=M.getBoundingClientRect(),l=(c.x-m.left)/m.width*100,v=(c.y-m.top)/m.height*100;if(!(l<0||l>100||v<0||v>100))return{x:l,y:v}},m=>{nt.cursor=m})}),(M,c)=>{const b=yt,m=ft;return d(),f(Q,null,[t("div",Ht,[t("div",Tt,[t("div",Vt,[zt,Bt,t("div",{class:"timer-btn my-auto relative w-22px h-22px cursor-pointer text-lg",opacity:"50 hover:100",onClick:c[0]||(c[0]=(...l)=>o(s)&&o(s)(...l))},[p(b,{class:"absolute"}),p(m,{class:"absolute opacity-0"})]),t("div",Nt,N(o(r)),1)]),t("div",{ref_key:"main",ref:n,class:"relative grid-section main flex flex-col p-2 lg:p-4",style:T(o(W))},[p(z,{key:"main",class:"h-full w-full"},{default:V(()=>[p(rt,{context:"presenter"})]),_:1}),At],4),t("div",Pt,[o(a)?(d(),g(z,{key:"next",class:"h-full w-full"},{default:V(()=>{var l;return[p(o(ct),{is:(l=o(a).route)==null?void 0:l.component,"clicks-elements":i.value,"onUpdate:clicks-elements":c[1]||(c[1]=v=>i.value=v),clicks:o(a).clicks,"clicks-disabled":!1,class:h(o(lt)(o(a).route)),route:o(a).route,context:"previewNext"},null,8,["is","clicks-elements","clicks","class","route"])]}),_:1})):q("v-if",!0),Rt]),t("div",Lt,[(d(),g(Mt,{key:1,class:"w-full h-full overflow-auto p-2 lg:p-4"}))]),t("div",It,[p(O,{persist:!0})]),(d(),g(dt,{key:0}))]),t("div",Dt,[t("div",{class:"progress h-2px bg-primary transition-all",style:T({width:`${(o(Y)-1)/(o(Z)-1)*100}%`})},null,4)])]),p(G),p(K,{modelValue:o(y),"onUpdate:modelValue":c[2]||(c[2]=l=>J(y)?y.value=l:null)},null,8,["modelValue"])],64)}}});var Ut=P(jt,[["__scopeId","data-v-68130f49"]]);export{Ut as default};
