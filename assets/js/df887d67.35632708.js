"use strict";(self.webpackChunkrgbds_www=self.webpackChunkrgbds_www||[]).push([[1164],{3905:function(e,n,a){a.d(n,{Zo:function(){return l},kt:function(){return h}});var t=a(67294);function s(e,n,a){return n in e?Object.defineProperty(e,n,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[n]=a,e}function r(e,n){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),a.push.apply(a,t)}return a}function i(e){for(var n=1;n<arguments.length;n++){var a=null!=arguments[n]?arguments[n]:{};n%2?r(Object(a),!0).forEach((function(n){s(e,n,a[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(a,n))}))}return e}function o(e,n){if(null==e)return{};var a,t,s=function(e,n){if(null==e)return{};var a,t,s={},r=Object.keys(e);for(t=0;t<r.length;t++)a=r[t],n.indexOf(a)>=0||(s[a]=e[a]);return s}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(t=0;t<r.length;t++)a=r[t],n.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(s[a]=e[a])}return s}var c=t.createContext({}),d=function(e){var n=t.useContext(c),a=n;return e&&(a="function"==typeof e?e(n):i(i({},n),e)),a},l=function(e){var n=d(e.components);return t.createElement(c.Provider,{value:n},e.children)},f={inlineCode:"code",wrapper:function(e){var n=e.children;return t.createElement(t.Fragment,{},n)}},p=t.forwardRef((function(e,n){var a=e.components,s=e.mdxType,r=e.originalType,c=e.parentName,l=o(e,["components","mdxType","originalType","parentName"]),p=d(a),h=s,m=p["".concat(c,".").concat(h)]||p[h]||f[h]||r;return a?t.createElement(m,i(i({ref:n},l),{},{components:a})):t.createElement(m,i({ref:n},l))}));function h(e,n){var a=arguments,s=n&&n.mdxType;if("string"==typeof e||s){var r=a.length,i=new Array(r);i[0]=p;var o={};for(var c in n)hasOwnProperty.call(n,c)&&(o[c]=n[c]);o.originalType=e,o.mdxType="string"==typeof e?e:s,i[1]=o;for(var d=2;d<r;d++)i[d]=a[d];return t.createElement.apply(null,i)}return t.createElement.apply(null,a)}p.displayName="MDXCreateElement"},43299:function(e,n,a){a.r(n),a.d(n,{assets:function(){return l},contentTitle:function(){return c},default:function(){return h},frontMatter:function(){return o},metadata:function(){return d},toc:function(){return f}});var t=a(83117),s=a(80102),r=(a(67294),a(3905)),i=["components"],o={},c="rgbds(5) \u2014 object file format documentation",d={unversionedId:"rgbds.5",id:"version-v0.3.3/rgbds.5",title:"rgbds(5) \u2014 object file format documentation",description:"",source:"@site/versioned_docs/version-v0.3.3/rgbds.5.md",sourceDirName:".",slug:"/rgbds.5",permalink:"/docs/v0.3.3/rgbds.5",draft:!1,editUrl:"https://github.com/gbdev/rgbds/edit/master/man/rgbds.5",tags:[],version:"v0.3.3",frontMatter:{},sidebar:"nav",previous:{title:"rgblink(5) \u2014 linkerscript file format",permalink:"/docs/v0.3.3/rgblink.5"},next:{title:"rgbasm(1) \u2014 Game Boy assembler",permalink:"/docs/v0.3.3/rgbasm.1"}},l={},f=[{value:"DESCRIPTION",id:"DESCRIPTION",level:2,children:[]},{value:"FILE STRUCTURE",id:"FILE_STRUCTURE",level:2,children:[{value:"RPN DATA",id:"RPN_DATA",level:3,children:[]}]},{value:"SEE ALSO",id:"SEE_ALSO",level:2,children:[]},{value:"HISTORY",id:"HISTORY",level:2,children:[]}],p={toc:f};function h(e){var n=e.components,a=(0,s.Z)(e,i);return(0,r.kt)("wrapper",(0,t.Z)({},p,a,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"rgbds5--object-file-format-documentation"},"rgbds(5) \u2014 object file format documentation"),(0,r.kt)("div",{className:"manual-text",dangerouslySetInnerHTML:{__html:'<section class="Sh">\n<h2 class="Sh" id="DESCRIPTION"><a class="permalink" href="#DESCRIPTION">DESCRIPTION</a></h2>\n<p class="Pp">This is the description of the object files used by\n    <a class="Xr" href="./rgbasm.1">rgbasm(1)</a> and\n    <a class="Xr" href="./rgblink.1">rgblink(1)</a>. Please, note that the\n    specifications may change. This toolchain is in development and new features\n    may require adding more information to the current format, or modifying some\n    fields, which would break compatibility with older versions.</p>\n</section>\n<section class="Sh">\n<h2 class="Sh" id="FILE_STRUCTURE"><a class="permalink" href="#FILE_STRUCTURE">FILE\n  STRUCTURE</a></h2>\n<p class="Pp">The following types are used:</p>\n<p class="Pp"><var class="Ar">LONG</var> is a 32&#x2010;bit integer stored in\n    little&#x2010;endian format (Intel). <var class="Ar">BYTE</var> is an\n    8&#x2010;bit integer. <var class="Ar">STRING</var> is a 0&#x2010;terminated\n    string of <var class="Ar">BYTE</var>.</p>\n<div class="Bd Pp Li">\n<pre>; Header\n\nBYTE    ID[4]            ; &quot;RGB5&quot;\nLONG    NumberOfSymbols  ; The number of symbols used in this file\nLONG    NumberOfSections ; The number of sections used in this file\n\n; Symbols\n\nREPT    NumberOfSymbols   ; Number of symbols defined in this object file.\n\n    STRING  Name          ; The name of this symbol. Local symbols are stored\n                          ; as &quot;Scope.Symbol&quot;.\n\n    BYTE    Type          ; 0 = LOCAL symbol only used in this file.\n                          ; 1 = IMPORT this symbol from elsewhere (unused).\n                          ; 2 = EXPORT this symbol to other objects.\n\n    IF      Type != 1     ; If symbol is defined in this object file.\n\n        STRING  FileName  ; File where the symbol is defined.\n\n        LONG    LineNum   ; Line number in the file where the symbol is defined.\n\n        LONG    SectionID ; The section number (of this object file) in which\n                          ; this symbol is defined.\n\n        LONG    Value     ; The symbols value. It\'s the offset into that\n                          ; symbol\'s section.\n\n    ENDC\n\nENDR\n\n; Sections\n\nREPT NumberOfSections\n    STRING  Name  ; Name of the section\n\n    LONG    Size  ; Size in bytes of this section\n\n    BYTE    Type  ; 0 = WRAM0\n                  ; 1 = VRAM\n                  ; 2 = ROMX\n                  ; 3 = ROM0\n                  ; 4 = HRAM\n                  ; 5 = WRAMX\n                  ; 6 = SRAM\n                  ; 7 = OAM\n\n    LONG    Org   ; Address to fix this section at. -1 if the linker should\n                  ; decide (floating address).\n\n    LONG    Bank  ; Bank to load this section into. -1 if the linker should\n                  ; decide (floating bank). This field is only valid for ROMX,\n                  ; VRAM, WRAMX and SRAM sections.\n\n    LONG    Align ; Alignment of this section (expressed as number of low bits\n                  ; to leave as 0). -1 if not defined.\n\n    IF      (Type == ROMX) || (Type == ROM0) ; Sections that can contain data.\n\n        BYTE    Data[Size]      ; Raw data of the section.\n\n        LONG    NumberOfPatches ; Number of patches to apply.\n\n        ; These types of sections may have patches\n\n        REPT    NumberOfPatches\n\n            STRING  SourceFile   ; Name of the source file (for printing error\n                                 ; messages).\n\n            LONG    Line         ; The line of the source file.\n\n            LONG    Offset       ; Offset into the section where patch should\n                                 ; be applied (in bytes).\n\n            BYTE    Type         ; 0 = BYTE patch.\n                                 ; 1 = little endian WORD patch.\n                                 ; 2 = little endian LONG patch.\n\n            LONG    RPNSize      ; Size of the buffer with the RPN.\n                                 ; expression.\n\n            BYTE    RPN[RPNSize] ; RPN expression. Definition below.\n\n        ENDR\n\n    ENDC\n\nENDR</pre>\n</div>\n<section class="Ss">\n<h3 class="Ss" id="RPN_DATA"><a class="permalink" href="#RPN_DATA">RPN\n  DATA</a></h3>\n<p class="Pp">Expressions in the object file are stored as RPN. This is an\n    expression of the form &#x201C;2 5 +&#x201D;. This will first push the value\n    &#x201C;2&#x201D; to the stack. Then &#x201C;5&#x201D;. The\n    &#x201C;+&#x201D; operator pops two arguments from the stack, adds them, and\n    then pushes the result on the stack, effectively replacing the two top\n    arguments with their sum. In the RGB format, RPN expressions are stored as\n    BYTEs with some bytes being special prefixes for integers and symbols.</p>\n<table class="Bl-column Bd-indent">\n  <tr id="Value">\n    <td><a class="permalink" href="#Value"><b class="Sy">Value</b></a></td>\n    <td><a class="permalink" href="#Meaning"><b class="Sy" id="Meaning">Meaning</b></a></td>\n  </tr>\n  <tr id="$00">\n    <td><a class="permalink" href="#$00"><code class="Li">$00</code></a></td>\n    <td><a class="permalink" href="#+"><code class="Li" id="+">+\n      operator</code></a></td>\n  </tr>\n  <tr id="$01">\n    <td><a class="permalink" href="#$01"><code class="Li">$01</code></a></td>\n    <td><code class="Li">- operator</code></td>\n  </tr>\n  <tr id="$02">\n    <td><a class="permalink" href="#$02"><code class="Li">$02</code></a></td>\n    <td><a class="permalink" href="#*"><code class="Li" id="*">*\n      operator</code></a></td>\n  </tr>\n  <tr id="$03">\n    <td><a class="permalink" href="#$03"><code class="Li">$03</code></a></td>\n    <td><a class="permalink" href="#/"><code class="Li" id="/">/\n      operator</code></a></td>\n  </tr>\n  <tr id="$04">\n    <td><a class="permalink" href="#$04"><code class="Li">$04</code></a></td>\n    <td><a class="permalink" href="#_"><code class="Li" id="_">%\n      operator</code></a></td>\n  </tr>\n  <tr id="$05">\n    <td><a class="permalink" href="#$05"><code class="Li">$05</code></a></td>\n    <td><code class="Li">unary -</code></td>\n  </tr>\n  <tr id="$06">\n    <td><a class="permalink" href="#$06"><code class="Li">$06</code></a></td>\n    <td>|\n      <a class="permalink" href="#operator"><code class="Li" id="operator">operator</code></a></td>\n  </tr>\n  <tr id="$07">\n    <td><a class="permalink" href="#$07"><code class="Li">$07</code></a></td>\n    <td><a class="permalink" href="#&amp;"><code class="Li" id="&amp;">&amp;\n      operator</code></a></td>\n  </tr>\n  <tr id="$08">\n    <td><a class="permalink" href="#$08"><code class="Li">$08</code></a></td>\n    <td><a class="permalink" href="#_~2"><code class="Li" id="_~2">^\n      operator</code></a></td>\n  </tr>\n  <tr id="$09">\n    <td><a class="permalink" href="#$09"><code class="Li">$09</code></a></td>\n    <td><code class="Li">unary ~</code></td>\n  </tr>\n  <tr id="$0A">\n    <td><a class="permalink" href="#$0A"><code class="Li">$0A</code></a></td>\n    <td><a class="permalink" href="#&amp;&amp;"><code class="Li" id="&amp;&amp;">&amp;&amp;\n      comparison</code></a></td>\n  </tr>\n  <tr id="$0B">\n    <td><a class="permalink" href="#$0B"><code class="Li">$0B</code></a></td>\n    <td><a class="permalink" href="#__"><code class="Li" id="__">||\n      comparison</code></a></td>\n  </tr>\n  <tr id="$0C">\n    <td><a class="permalink" href="#$0C"><code class="Li">$0C</code></a></td>\n    <td><a class="permalink" href="#unary"><code class="Li" id="unary">unary</code></a>!</td>\n  </tr>\n  <tr id="$0D">\n    <td><a class="permalink" href="#$0D"><code class="Li">$0D</code></a></td>\n    <td><a class="permalink" href="#=="><code class="Li" id="==">==\n      comparison</code></a></td>\n  </tr>\n  <tr id="$0E">\n    <td><a class="permalink" href="#$0E"><code class="Li">$0E</code></a></td>\n    <td><a class="permalink" href="#!="><code class="Li" id="!=">!=\n      comparison</code></a></td>\n  </tr>\n  <tr id="$0F">\n    <td><a class="permalink" href="#$0F"><code class="Li">$0F</code></a></td>\n    <td><a class="permalink" href="#_~3"><code class="Li" id="_~3">&gt;\n      comparison</code></a></td>\n  </tr>\n  <tr id="$10">\n    <td><a class="permalink" href="#$10"><code class="Li">$10</code></a></td>\n    <td><a class="permalink" href="#_~4"><code class="Li" id="_~4">&lt;\n      comparison</code></a></td>\n  </tr>\n  <tr id="$11">\n    <td><a class="permalink" href="#$11"><code class="Li">$11</code></a></td>\n    <td><a class="permalink" href="#_="><code class="Li" id="_=">&gt;=\n      comparison</code></a></td>\n  </tr>\n  <tr id="$12">\n    <td><a class="permalink" href="#$12"><code class="Li">$12</code></a></td>\n    <td><a class="permalink" href="#_=~2"><code class="Li" id="_=~2">&lt;=\n      comparison</code></a></td>\n  </tr>\n  <tr id="$13">\n    <td><a class="permalink" href="#$13"><code class="Li">$13</code></a></td>\n    <td><a class="permalink" href="#__~2"><code class="Li" id="__~2">&lt;&lt;\n      comparison</code></a></td>\n  </tr>\n  <tr id="$14">\n    <td><a class="permalink" href="#$14"><code class="Li">$14</code></a></td>\n    <td><a class="permalink" href="#__~3"><code class="Li" id="__~3">&gt;&gt;\n      comparison</code></a></td>\n  </tr>\n  <tr id="$15">\n    <td><a class="permalink" href="#$15"><code class="Li">$15</code></a></td>\n    <td><a class="permalink" href="#BANK()"><code class="Li" id="BANK()">BANK()</code></a>\n      function. A symbol ID follows.</td>\n  </tr>\n  <tr id="$16">\n    <td><a class="permalink" href="#$16"><code class="Li">$16</code></a></td>\n    <td><a class="permalink" href="#HRAMCheck."><code class="Li" id="HRAMCheck.">HRAMCheck.</code></a>\n      Check if the value is in HRAM, AND it with 0xFF.</td>\n  </tr>\n  <tr id="$80">\n    <td><a class="permalink" href="#$80"><code class="Li">$80</code></a></td>\n    <td><var class="Ar">LONG</var> integer follows.</td>\n  </tr>\n  <tr id="$81">\n    <td><a class="permalink" href="#$81"><code class="Li">$81</code></a></td>\n    <td><var class="Ar">LONG</var> Symbol ID follows.</td>\n  </tr>\n</table>\n</section>\n</section>\n<section class="Sh">\n<h2 class="Sh" id="SEE_ALSO"><a class="permalink" href="#SEE_ALSO">SEE\n  ALSO</a></h2>\n<p class="Pp"><a class="Xr" href="./rgbasm.1">rgbasm(1)</a>,\n    <a class="Xr" href="./rgblink.1">rgblink(1)</a>,\n    <a class="Xr" href="./rgbds.7">rgbds(7)</a>,\n    <a class="Xr" href="./gbz80.7">gbz80(7)</a></p>\n</section>\n<section class="Sh">\n<h2 class="Sh" id="HISTORY"><a class="permalink" href="#HISTORY">HISTORY</a></h2>\n<p class="Pp"><code class="Nm">rgbds</code> was originally written by Carsten\n    S&#x00F8;rensen as part of the ASMotor package, and was later packaged in\n    RGBDS by Justin Lloyd. It is now maintained by a number of contributors at\n    <a class="Lk" href="https://github.com/rednex/rgbds">https://github.com/rednex/rgbds</a>.</p>\n</section>\n'}}))}h.isMDXComponent=!0}}]);