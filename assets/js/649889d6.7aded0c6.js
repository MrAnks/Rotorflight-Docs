"use strict";(self.webpackChunkrotorflight_docs=self.webpackChunkrotorflight_docs||[]).push([[6004],{3905:(e,t,i)=>{i.d(t,{Zo:()=>u,kt:()=>m});var o=i(67294);function r(e,t,i){return t in e?Object.defineProperty(e,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[t]=i,e}function n(e,t){var i=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),i.push.apply(i,o)}return i}function a(e){for(var t=1;t<arguments.length;t++){var i=null!=arguments[t]?arguments[t]:{};t%2?n(Object(i),!0).forEach((function(t){r(e,t,i[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(i)):n(Object(i)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(i,t))}))}return e}function s(e,t){if(null==e)return{};var i,o,r=function(e,t){if(null==e)return{};var i,o,r={},n=Object.keys(e);for(o=0;o<n.length;o++)i=n[o],t.indexOf(i)>=0||(r[i]=e[i]);return r}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(o=0;o<n.length;o++)i=n[o],t.indexOf(i)>=0||Object.prototype.propertyIsEnumerable.call(e,i)&&(r[i]=e[i])}return r}var l=o.createContext({}),c=function(e){var t=o.useContext(l),i=t;return e&&(i="function"==typeof e?e(t):a(a({},t),e)),i},u=function(e){var t=c(e.components);return o.createElement(l.Provider,{value:t},e.children)},d="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},h=o.forwardRef((function(e,t){var i=e.components,r=e.mdxType,n=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),d=c(i),h=r,m=d["".concat(l,".").concat(h)]||d[h]||p[h]||n;return i?o.createElement(m,a(a({ref:t},u),{},{components:i})):o.createElement(m,a({ref:t},u))}));function m(e,t){var i=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var n=i.length,a=new Array(n);a[0]=h;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[d]="string"==typeof e?e:r,a[1]=s;for(var c=2;c<n;c++)a[c]=i[c];return o.createElement.apply(null,a)}return o.createElement.apply(null,i)}h.displayName="MDXCreateElement"},98168:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>l,contentTitle:()=>a,default:()=>p,frontMatter:()=>n,metadata:()=>s,toc:()=>c});var o=i(87462),r=(i(67294),i(3905));const n={sidebar_position:70},a="Motorised Tail and TTA",s={unversionedId:"Tuning/Motorised-Tail-and-TTA",id:"Tuning/Motorised-Tail-and-TTA",title:"Motorised Tail and TTA",description:"Torque Tail Assist (TTA) - This is a feature used for helicopters with motorised tails. A motorised tail can provide high control authority in one direction. In the other it is greatly reduced as the motor can only turn in one direction. TTA is ised to add control authority in the other direction. It does this by rapidly accelerating the main motor. This acceleration provides torque in the oposite direction to the tail motor.",source:"@site/docs/Tuning/Motorised-Tail-and-TTA.md",sourceDirName:"Tuning",slug:"/Tuning/Motorised-Tail-and-TTA",permalink:"/docs/Tuning/Motorised-Tail-and-TTA",draft:!1,editUrl:"https://github.com/pkaig/Rotorflight-Docs/tree/main/docs/Tuning/Motorised-Tail-and-TTA.md",tags:[],version:"current",sidebarPosition:70,frontMatter:{sidebar_position:70},sidebar:"tuningSidebar",previous:{title:"Cyclic Cross Coupling",permalink:"/docs/Tuning/Cyclic-Cross-Coupling"},next:{title:"Rescue mode settings",permalink:"/docs/Tuning/Rescue-mode-settings"}},l={},c=[],u={toc:c},d="wrapper";function p(e){let{components:t,...i}=e;return(0,r.kt)(d,(0,o.Z)({},u,i,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"motorised-tail-and-tta"},"Motorised Tail and TTA"),(0,r.kt)("admonition",{type:"info"},(0,r.kt)("p",{parentName:"admonition"},(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("em",{parentName:"strong"},"Torque Tail Assist (TTA)"))," - This is a feature used for helicopters with motorised tails. A motorised tail can provide high control authority in one direction. In the other it is greatly reduced as the motor can only turn in one direction. TTA is ised to add control authority in the other direction. It does this by rapidly accelerating the main motor. This acceleration provides torque in the oposite direction to the tail motor. ")),(0,r.kt)("p",null,"Tuning TTA is best performed by pushing your heli into a flight envelope in which you loose tail authority.   A simple flight pattern is to fly backawards as fast as possible.. with the tail going into the wind.   If you notice the heli suddently doing a sharp rotation.. sometimes up to 180 degrees; then your TTA needs to be higher.  Simply raise the value in increments of 10 until the problem starts to go away."),(0,r.kt)("p",null,"Sometimes you will find that your heli will be find with flying backwards; but flip out in agressive manouvers.   For example a 'tail slide' or 'backwards loop' will trigger it.  As above.. raise the gain until the issue is largely mitigated."),(0,r.kt)("p",null,"Note.  Its possible you will never 100% clear the swing that can occur.     The original 'OMP M2' for example will still show the issue at times with even the maximum TTA gain.   In the end the issue is that the main motor is not beefy enough to provide enough torque to control the swing that can occationally occur."))}p.isMDXComponent=!0}}]);