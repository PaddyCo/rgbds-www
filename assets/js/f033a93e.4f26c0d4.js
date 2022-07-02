"use strict";(self.webpackChunkrgbds_www=self.webpackChunkrgbds_www||[]).push([[2155],{3905:function(e,t,r){r.d(t,{Zo:function(){return c},kt:function(){return d}});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=n.createContext({}),f=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},c=function(e){var t=f(e.components);return n.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},p=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),p=f(r),d=a,b=p["".concat(l,".").concat(d)]||p[d]||u[d]||i;return r?n.createElement(b,o(o({ref:t},c),{},{components:r})):n.createElement(b,o({ref:t},c))}));function d(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,o=new Array(i);o[0]=p;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:a,o[1]=s;for(var f=2;f<i;f++)o[f]=r[f];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}p.displayName="MDXCreateElement"},79456:function(e,t,r){r.r(t),r.d(t,{assets:function(){return c},contentTitle:function(){return l},default:function(){return d},frontMatter:function(){return s},metadata:function(){return f},toc:function(){return u}});var n=r(83117),a=r(80102),i=(r(67294),r(3905)),o=["components"],s={},l="Release information",f={unversionedId:"index",id:"version-v0.4.0/index",title:"Release information",description:"GitHub links",source:"@site/versioned_docs/version-v0.4.0/index.md",sourceDirName:".",slug:"/",permalink:"/docs/v0.4.0/",draft:!1,editUrl:"https://github.com/gbdev/rgbds-www/edit/master/versioned_docs/version-v0.4.0/index.md",tags:[],version:"v0.4.0",frontMatter:{},sidebar:"nav",next:{title:"rgbasm(5) \u2014 language documentation",permalink:"/docs/v0.4.0/rgbasm.5"}},c={},u=[{value:"GitHub links",id:"github-links",level:2},{value:"Table of contents",id:"table-of-contents",level:2}],p={toc:u};function d(e){var t=e.components,s=(0,a.Z)(e,o);return(0,i.kt)("wrapper",(0,n.Z)({},p,s,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"release-information"},"Release information"),(0,i.kt)("h2",{id:"github-links"},"GitHub links"),(0,i.kt)("p",null,"The ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/gbdev/rgbds/releases/v0.4.0"},"release page")," contains the full changelog, as well as pre-built downloads."),(0,i.kt)("h2",{id:"table-of-contents"},"Table of contents"),(0,i.kt)("p",null,"These pages are HTML renders of the various ",(0,i.kt)("inlineCode",{parentName:"p"},"man")," pages provided with RGBDS.\nPDFs are also offered for offline reading, and maybe printing."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Language reference"),": documentation of the various languages used throughout RGBDS.",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/v0.4.0/rgbasm.5"},"Assembly syntax"),": how to write RGBASM-flavored Game Boy assembly, and what the various directives do. (",(0,i.kt)("a",{target:"_blank",href:r(97027).Z},"PDF"),")"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/v0.4.0/gbz80.7"},"CPU instructions"),": a list of CPU instructions, as well as quick descriptions of their various effects. (",(0,i.kt)("a",{target:"_blank",href:r(11867).Z},"PDF"),")"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/v0.4.0/rgblink.5"},"Linkerscript format"),": how to write a linker script for RGBLINK. (",(0,i.kt)("a",{target:"_blank",href:r(66756).Z},"PDF"),")"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/v0.4.0/rgbds.5"},"Object file format"),": a description of the format of files emitted by RGBASM and expected by RGBLINK; useful for integrating custom tooling with RGBDS. (",(0,i.kt)("a",{target:"_blank",href:r(63099).Z},"PDF"),")"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Command-line options"),": how to write the command lines to invoke RGBDS programs.",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/v0.4.0/rgbasm.1"},"RGBASM"),", the assembler; (",(0,i.kt)("a",{target:"_blank",href:r(19664).Z},"PDF"),")"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/v0.4.0/rgblink.1"},"RGBLINK"),", the linker; (",(0,i.kt)("a",{target:"_blank",href:r(44671).Z},"PDF"),")"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/v0.4.0/rgbfix.1"},"RGBFIX"),", the header manipulator; (",(0,i.kt)("a",{target:"_blank",href:r(62616).Z},"PDF"),")"),(0,i.kt)("li",{parentName:"ul"},"and ",(0,i.kt)("a",{parentName:"li",href:"/docs/v0.4.0/rgbgfx.1"},"RGBGFX"),", the image converter. (",(0,i.kt)("a",{target:"_blank",href:r(16762).Z},"PDF"),")"))),(0,i.kt)("li",{parentName:"ul"},"The ",(0,i.kt)("a",{parentName:"li",href:"/docs/v0.4.0/rgbds.7"},"history")," of RGBDS is also available for the curious. (",(0,i.kt)("a",{target:"_blank",href:r(30665).Z},"PDF"),")")))}d.isMDXComponent=!0},11867:function(e,t,r){t.Z=r.p+"assets/files/gbz80.7-44c02aa1fbe73d8983f48ca9072a1db6.pdf"},19664:function(e,t,r){t.Z=r.p+"assets/files/rgbasm.1-f25fa4b1f24c5edafb7c2eda829ef4fe.pdf"},97027:function(e,t,r){t.Z=r.p+"assets/files/rgbasm.5-877a2c0575d0cab8baa3383104cdf7c1.pdf"},63099:function(e,t,r){t.Z=r.p+"assets/files/rgbds.5-405c32447051fd356f50a6e7205a934b.pdf"},30665:function(e,t,r){t.Z=r.p+"assets/files/rgbds.7-a3e05a80b36ccac08c16d77d9f34226e.pdf"},62616:function(e,t,r){t.Z=r.p+"assets/files/rgbfix.1-14b1ae3fe2fbe95a6392cb14490c0501.pdf"},16762:function(e,t,r){t.Z=r.p+"assets/files/rgbgfx.1-a7ae8142a2570caf3c3e43005adb2624.pdf"},44671:function(e,t,r){t.Z=r.p+"assets/files/rgblink.1-cf9d1daef2287286c43a3256cb257f83.pdf"},66756:function(e,t,r){t.Z=r.p+"assets/files/rgblink.5-9625f6bdb12cc05e06b005bd54f88cb3.pdf"}}]);