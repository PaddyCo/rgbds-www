"use strict";(self.webpackChunkrgbds_www_2=self.webpackChunkrgbds_www_2||[]).push([[1128],{3905:function(e,n,t){t.d(n,{Zo:function(){return d},kt:function(){return u}});var r=t(7294);function s(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){s(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function c(e,n){if(null==e)return{};var t,r,s=function(e,n){if(null==e)return{};var t,r,s={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(s[t]=e[t]);return s}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(s[t]=e[t])}return s}var o=r.createContext({}),l=function(e){var n=r.useContext(o),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},d=function(e){var n=l(e.components);return r.createElement(o.Provider,{value:n},e.children)},p={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},f=r.forwardRef((function(e,n){var t=e.components,s=e.mdxType,a=e.originalType,o=e.parentName,d=c(e,["components","mdxType","originalType","parentName"]),f=l(t),u=s,b=f["".concat(o,".").concat(u)]||f[u]||p[u]||a;return t?r.createElement(b,i(i({ref:n},d),{},{components:t})):r.createElement(b,i({ref:n},d))}));function u(e,n){var t=arguments,s=n&&n.mdxType;if("string"==typeof e||s){var a=t.length,i=new Array(a);i[0]=f;var c={};for(var o in n)hasOwnProperty.call(n,o)&&(c[o]=n[o]);c.originalType=e,c.mdxType="string"==typeof e?e:s,i[1]=c;for(var l=2;l<a;l++)i[l]=t[l];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}f.displayName="MDXCreateElement"},1936:function(e,n,t){t.r(n),t.d(n,{assets:function(){return d},contentTitle:function(){return o},default:function(){return u},frontMatter:function(){return c},metadata:function(){return l},toc:function(){return p}});var r=t(3117),s=t(102),a=(t(7294),t(3905)),i=["components"],c={},o="rgblink(5) \u2014 linker script file format",l={unversionedId:"rgblink.5",id:"version-v0.5.0/rgblink.5",title:"rgblink(5) \u2014 linker script file format",description:"",source:"@site/versioned_docs/version-v0.5.0/rgblink.5.md",sourceDirName:".",slug:"/rgblink.5",permalink:"/docs/v0.5.0/rgblink.5",draft:!1,editUrl:"https://github.com/gbdev/rgbds-www2/edit/master/versioned_docs/version-v0.5.0/rgblink.5.md",tags:[],version:"v0.5.0",frontMatter:{},sidebar:"nav",previous:{title:"gbz80(7) \u2014 CPU opcode reference",permalink:"/docs/v0.5.0/gbz80.7"},next:{title:"rgbds(5) \u2014 object file format documentation",permalink:"/docs/v0.5.0/rgbds.5"}},d={},p=[{value:"DESCRIPTION",id:"DESCRIPTION",level:2,children:[]},{value:"SEE ALSO",id:"SEE_ALSO",level:2,children:[]},{value:"HISTORY",id:"HISTORY",level:2,children:[]}],f={toc:p};function u(e){var n=e.components,t=(0,s.Z)(e,i);return(0,a.kt)("wrapper",(0,r.Z)({},f,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"rgblink5--linker-script-file-format"},"rgblink(5) \u2014 linker script file format"),(0,a.kt)("div",{className:"manual-text",dangerouslySetInnerHTML:{__html:'<section class="Sh">\n<h2 class="Sh" id="DESCRIPTION"><a class="permalink" href="#DESCRIPTION">DESCRIPTION</a></h2>\n<p class="Pp">The linker script is an external file that allows the user to\n    specify the order of sections at link time and in a centralized manner.</p>\n<p class="Pp">A linker script consists on a series of banks followed by a list\n    of sections and, optionally, commands. They can be lowercase or uppercase,\n    it is ignored. Any line can contain a comment starting with\n    &#x2018;<code class="Li">;</code>&#x2019; that ends at the end of the\n  line:</p>\n<div class="Bd Pp Bd-indent Li">\n<pre>ROMX $F ; This is a comment\n  &quot;Functions to read array&quot;\n  ALIGN 8\n  &quot;Array aligned to 256 bytes&quot;\n\nWRAMX 2\n  &quot;Some variables&quot;</pre>\n</div>\n<p class="Pp">Numbers can be in decimal or hexadecimal format (the prefix is\n    &#x2018;<code class="Li">$</code>&#x2019;). It is an error if any section\n    name or command is found before setting a bank.</p>\n<p class="Pp">Files can be included by using the <code class="Ic">INCLUDE</code>\n    keyword, followed by a string with the path of the file that has to be\n    included.</p>\n<p class="Pp">The possible bank types are: <code class="Cm">ROM0</code>,\n    <code class="Cm">ROMX</code>, <code class="Cm">VRAM</code>,\n    <code class="Cm">SRAM</code>, <code class="Cm">WRAM0</code>,\n    <code class="Cm">WRAMX</code>, <code class="Cm">OAM</code> and\n    <code class="Cm">HRAM</code>. Unless there is a single bank, which can occur\n    with types <code class="Cm">ROMX</code>, <code class="Cm">VRAM</code>,\n    <code class="Cm">SRAM</code> and <code class="Cm">WRAMX</code>, it is needed\n    to specify a bank number after the type.</p>\n<p class="Pp">When a new bank statement is found, sections found after it will\n    be placed right from the beginning of that bank. If the linker script\n    switches to a different bank and then comes back to a previous one, it will\n    continue from the last address that was used.</p>\n<p class="Pp">The only two commands are <code class="Ic">ORG</code> and\n    <code class="Ic">ALIGN</code>:</p>\n<ul class="Bl-bullet">\n  <li id="ORG"><a class="permalink" href="#ORG"><code class="Ic">ORG</code></a>\n      sets the address in which new sections will be placed. It can not be lower\n      than the current address.</li>\n  <li id="ALIGN"><a class="permalink" href="#ALIGN"><code class="Ic">ALIGN</code></a>\n      will increase the address until it is aligned to the specified boundary\n      (it tries to set to 0 the number of bits specified after the command:\n      &#x2018;<code class="Li">ALIGN 8</code>&#x2019; will align to $100).</li>\n</ul>\n<p class="Pp" id="Note:"><a class="permalink" href="#Note:"><b class="Sy">Note:</b></a>\n    The bank, alignment, address and type of sections can be specified both in\n    the source code and in the linker script. For a section to be able to be\n    placed with the linker script, the bank, address and alignment must be left\n    unassigned in the source code or be compatible with what is specified in the\n    linker script. For example, &#x2018;<code class="Li">ALIGN[8]</code>&#x2019;\n    in the source code is compatible with &#x2018;<code class="Li">ORG\n    $F00</code>&#x2019; in the linker script.</p>\n</section>\n<section class="Sh">\n<h2 class="Sh" id="SEE_ALSO"><a class="permalink" href="#SEE_ALSO">SEE\n  ALSO</a></h2>\n<p class="Pp"><a class="Xr" href="./rgbasm.1">rgbasm(1)</a>,\n    <a class="Xr" href="./rgblink.1">rgblink(1)</a>,\n    <a class="Xr" href="./rgbfix.1">rgbfix(1)</a>,\n    <a class="Xr" href="./rgbds.5">rgbds(5)</a>,\n    <a class="Xr" href="./rgbds.7">rgbds(7)</a></p>\n</section>\n<section class="Sh">\n<h2 class="Sh" id="HISTORY"><a class="permalink" href="#HISTORY">HISTORY</a></h2>\n<p class="Pp"><code class="Nm">rgblink</code> was originally written by Carsten\n    S&#x00F8;rensen as part of the ASMotor package, and was later packaged in\n    RGBDS by Justin Lloyd. It is now maintained by a number of contributors at\n    <a class="Lk" href="https://github.com/gbdev/rgbds">https://github.com/gbdev/rgbds</a>.</p>\n</section>\n'}}))}u.isMDXComponent=!0}}]);