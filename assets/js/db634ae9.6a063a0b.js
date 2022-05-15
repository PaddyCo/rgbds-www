"use strict";(self.webpackChunkrgbds_www_2=self.webpackChunkrgbds_www_2||[]).push([[6569],{3905:function(e,t,r){r.d(t,{Zo:function(){return c},kt:function(){return m}});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=n.createContext({}),u=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},c=function(e){var t=u(e.components);return n.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),f=u(r),m=a,d=f["".concat(s,".").concat(m)]||f[m]||p[m]||o;return r?n.createElement(d,i(i({ref:t},c),{},{components:r})):n.createElement(d,i({ref:t},c))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=f;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var u=2;u<o;u++)i[u]=r[u];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},7823:function(e,t,r){r.r(t),r.d(t,{assets:function(){return c},contentTitle:function(){return s},default:function(){return m},frontMatter:function(){return l},metadata:function(){return u},toc:function(){return p}});var n=r(3117),a=r(102),o=(r(7294),r(3905)),i=["components"],l={},s="Release information",u={unversionedId:"index",id:"version-v0.3.8/index",title:"Release information",description:"GitHub links",source:"@site/versioned_docs/version-v0.3.8/index.md",sourceDirName:".",slug:"/",permalink:"/docs/v0.3.8/",draft:!1,editUrl:"https://github.com/gbdev/rgbds-www2/edit/master/versioned_docs/version-v0.3.8/index.md",tags:[],version:"v0.3.8",frontMatter:{},sidebar:"nav",next:{title:"rgbasm(5) \u2014 language documentation",permalink:"/docs/v0.3.8/rgbasm.5"}},c={},p=[{value:"GitHub links",id:"github-links",level:2},{value:"Table of contents",id:"table-of-contents",level:2}],f={toc:p};function m(e){var t=e.components,r=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,n.Z)({},f,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"release-information"},"Release information"),(0,o.kt)("h2",{id:"github-links"},"GitHub links"),(0,o.kt)("p",null,"The ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/gbdev/rgbds/releases/???"},"release page")," contains the full changelog, as well as pre-built downloads."),(0,o.kt)("h2",{id:"table-of-contents"},"Table of contents"),(0,o.kt)("p",null,"These pages are HTML renders of the various ",(0,o.kt)("inlineCode",{parentName:"p"},"man")," pages provided with RGBDS.\nPDFs are also offered for offline reading, and maybe printing."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Language reference"),": documentation of the various languages used throughout RGBDS.",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/docs/v0.3.8/rgbasm.5"},"Assembly syntax"),": how to write RGBASM-flavored Game Boy assembly, and what the various directives do."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/docs/v0.3.8/gbz80.7"},"CPU instructions"),": a list of CPU instructions, as well as quick descriptions of their various effects."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/docs/v0.3.8/rgblink.5"},"Linkerscript format"),": how to write a linker script for RGBLINK."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/docs/v0.3.8/rgbds.5"},"Object file format"),": a description of the format of files emitted by RGBASM and expected by RGBLINK; useful for integrating custom tooling with RGBDS."))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Command-line options"),": how to write the command lines to invoke RGBDS programs.",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/docs/v0.3.8/rgbasm.1"},"RGBASM"),", the assembler;"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/docs/v0.3.8/rgblink.1"},"RGBLINK"),", the linker;"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/docs/v0.3.8/rgbfix.1"},"RGBFIX"),", the header manipulator;"),(0,o.kt)("li",{parentName:"ul"},"and ",(0,o.kt)("a",{parentName:"li",href:"/docs/v0.3.8/rgbgfx.1"},"RGBGFX"),", the image converter."))),(0,o.kt)("li",{parentName:"ul"},"The ",(0,o.kt)("a",{parentName:"li",href:"/docs/v0.3.8/rgbds.7"},"history")," of RGBDS is also available for the curious.")))}m.isMDXComponent=!0}}]);