"use strict";(self.webpackChunkrgbds_www=self.webpackChunkrgbds_www||[]).push([[1367],{3905:function(e,n,t){t.d(n,{Zo:function(){return l},kt:function(){return m}});var a=t(67294);function s(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function r(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?r(Object(t),!0).forEach((function(n){s(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function o(e,n){if(null==e)return{};var t,a,s=function(e,n){if(null==e)return{};var t,a,s={},r=Object.keys(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||(s[t]=e[t]);return s}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(s[t]=e[t])}return s}var c=a.createContext({}),d=function(e){var n=a.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},l=function(e){var n=d(e.components);return a.createElement(c.Provider,{value:n},e.children)},h={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},f=a.forwardRef((function(e,n){var t=e.components,s=e.mdxType,r=e.originalType,c=e.parentName,l=o(e,["components","mdxType","originalType","parentName"]),f=d(t),m=s,p=f["".concat(c,".").concat(m)]||f[m]||h[m]||r;return t?a.createElement(p,i(i({ref:n},l),{},{components:t})):a.createElement(p,i({ref:n},l))}));function m(e,n){var t=arguments,s=n&&n.mdxType;if("string"==typeof e||s){var r=t.length,i=new Array(r);i[0]=f;var o={};for(var c in n)hasOwnProperty.call(n,c)&&(o[c]=n[c]);o.originalType=e,o.mdxType="string"==typeof e?e:s,i[1]=o;for(var d=2;d<r;d++)i[d]=t[d];return a.createElement.apply(null,i)}return a.createElement.apply(null,t)}f.displayName="MDXCreateElement"},64524:function(e,n,t){t.r(n),t.d(n,{assets:function(){return l},contentTitle:function(){return c},default:function(){return m},frontMatter:function(){return o},metadata:function(){return d},toc:function(){return h}});var a=t(83117),s=t(80102),r=(t(67294),t(3905)),i=["components"],o={},c="rgbds(5) \u2014 object file format documentation",d={unversionedId:"rgbds.5",id:"version-v0.5.0-rcCar/rgbds.5",title:"rgbds(5) \u2014 object file format documentation",description:"",source:"@site/versioned_docs/version-v0.5.0-rcCar/rgbds.5.md",sourceDirName:".",slug:"/rgbds.5",permalink:"/docs/v0.5.0-rcCar/rgbds.5",draft:!1,editUrl:"https://github.com/gbdev/rgbds/edit/master/man/rgbds.5",tags:[],version:"v0.5.0-rcCar",frontMatter:{},sidebar:"nav",previous:{title:"rgblink(5) \u2014 linker script file format",permalink:"/docs/v0.5.0-rcCar/rgblink.5"},next:{title:"rgbasm(1) \u2014 Game Boy assembler",permalink:"/docs/v0.5.0-rcCar/rgbasm.1"}},l={},h=[{value:"DESCRIPTION",id:"DESCRIPTION",level:2,children:[]},{value:"FILE STRUCTURE",id:"FILE_STRUCTURE",level:2,children:[{value:"RPN DATA",id:"RPN_DATA",level:3,children:[]}]},{value:"SEE ALSO",id:"SEE_ALSO",level:2,children:[]},{value:"HISTORY",id:"HISTORY",level:2,children:[]}],f={toc:h};function m(e){var n=e.components,t=(0,s.Z)(e,i);return(0,r.kt)("wrapper",(0,a.Z)({},f,t,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"rgbds5--object-file-format-documentation"},"rgbds(5) \u2014 object file format documentation"),(0,r.kt)("div",{className:"manual-text",dangerouslySetInnerHTML:{__html:'<section class="Sh">\n<h2 class="Sh" id="DESCRIPTION"><a class="permalink" href="#DESCRIPTION">DESCRIPTION</a></h2>\n<p class="Pp">This is the description of the object files used by\n    <a class="Xr" href="./rgbasm.1">rgbasm(1)</a> and\n    <a class="Xr" href="./rgblink.1">rgblink(1)</a>.\n    <a class="permalink" href="#Please"><i class="Em" id="Please">Please note\n    that the specifications may change</i></a>. This toolchain is in development\n    and new features may require adding more information to the current format,\n    or modifying some fields, which would break compatibility with older\n    versions.</p>\n</section>\n<section class="Sh">\n<h2 class="Sh" id="FILE_STRUCTURE"><a class="permalink" href="#FILE_STRUCTURE">FILE\n  STRUCTURE</a></h2>\n<p class="Pp">The following types are used:</p>\n<p class="Pp"><var class="Ar">LONG</var> is a 32-bit integer stored in\n    little-endian format. <var class="Ar">BYTE</var> is an 8-bit integer.\n    <var class="Ar">STRING</var> is a 0-terminated string of\n    <var class="Ar">BYTE</var>.</p>\n<div class="Bd Pp Li">\n<pre>; Header\n\nBYTE    ID[4]            ; &quot;RGB9&quot;\nLONG    RevisionNumber   ; The format\'s revision number this file uses.\nLONG    NumberOfSymbols  ; The number of symbols used in this file.\nLONG    NumberOfSections ; The number of sections used in this file.\n\n; File info\n\nLONG    NumberOfNodes       ; The number of nodes contained in this file.\n\nREPT NumberOfNodes          ; IMPORTANT NOTE: the nodes are actually written in\n                            ; **reverse** order, meaning the node with ID 0 is\n                            ; the last one in the file!\n\n    LONG    ParentID        ; ID of the parent node, -1 means this is the root.\n\n    LONG    ParentLineNo    ; Line at which the parent context was exited.\n                            ; Meaningless on the root node.\n\n    BYTE    Type            ; 0 = REPT node\n                            ; 1 = File node\n                            ; 2 = Macro node\n\n    IF Type != 0            ; If the node is not a REPT...\n\n        STRING  Name        ; The node\'s name: either a file name, or macro name\n                            ; prefixed by its definition file name.\n\n    ELSE                    ; If the node is a REPT, it also contains the iter\n                            ; counts of all the parent REPTs.\n\n        LONG    Depth       ; Size of the array below.\n\n        LONG    Iter[Depth] ; The number of REPT iterations by increasing depth.\n\n    ENDC\n\nENDR\n\n; Symbols\n\nREPT    NumberOfSymbols    ; Number of symbols defined in this object file.\n\n    STRING  Name           ; The name of this symbol. Local symbols are stored\n                           ; as &quot;Scope.Symbol&quot;.\n\n    BYTE    Type           ; 0 = LOCAL symbol only used in this file.\n                           ; 1 = IMPORT this symbol from elsewhere\n                           ; 2 = EXPORT this symbol to other objects.\n\n    IF (Type &amp; 0x7F) != 1  ; If symbol is defined in this object file.\n\n        LONG    SourceFile ; File where the symbol is defined.\n\n        LONG    LineNum    ; Line number in the file where the symbol is defined.\n\n        LONG    SectionID  ; The section number (of this object file) in which\n                           ; this symbol is defined. If it doesn\'t belong to any\n                           ; specific section (like a constant), this field has\n                           ; the value -1.\n\n        LONG    Value      ; The symbols value. It\'s the offset into that\n                           ; symbol\'s section.\n\n    ENDC\n\nENDR\n\n; Sections\n\nREPT NumberOfSections\n    STRING  Name  ; Name of the section\n\n    LONG    Size  ; Size in bytes of this section\n\n    BYTE    Type  ; 0 = WRAM0\n                  ; 1 = VRAM\n                  ; 2 = ROMX\n                  ; 3 = ROM0\n                  ; 4 = HRAM\n                  ; 5 = WRAMX\n                  ; 6 = SRAM\n                  ; 7 = OAM\n                  ; Bits 7 and 6 are independent from the above value:\n                  ; Bit 7 encodes whether the section is unionized\n                  ; Bit 6 encodes whether the section is a fragment\n                  ; Bits 6 and 7 may not be both set at the same time!\n\n    LONG    Org   ; Address to fix this section at. -1 if the linker should\n                  ; decide (floating address).\n\n    LONG    Bank  ; Bank to load this section into. -1 if the linker should\n                  ; decide (floating bank). This field is only valid for ROMX,\n                  ; VRAM, WRAMX and SRAM sections.\n\n    BYTE    Align ; Alignment of this section, as N bits. 0 when not specified.\n\n    LONG    Ofs   ; Offset relative to the alignment specified above.\n                  ; Must be below 1 &lt;&lt; Align.\n\n    IF      (Type == ROMX) || (Type == ROM0) ; Sections that can contain data.\n\n        BYTE    Data[Size]      ; Raw data of the section.\n\n        LONG    NumberOfPatches ; Number of patches to apply.\n\n        REPT    NumberOfPatches\n\n            LONG    SourceFile   ; ID of the source file node (for printing\n                                 ; error messages).\n\n            LONG    LineNo       ; Line at which the patch was created.\n\n            LONG    Offset       ; Offset into the section where patch should\n                                 ; be applied (in bytes).\n\n            LONG    PCSectionID  ; Index within the file of the section in which\n                                 ; PC is located.\n                                 ; This is usually the same section that the\n                                 ; patch should be applied into, except e.g.\n                                 ; with LOAD blocks.\n\n            LONG    PCOffset     ; PC\'s offset into the above section.\n                                 ; Used because the section may be floating, so\n                                 ; PC\'s value is not known to RGBASM.\n\n            BYTE    Type         ; 0 = BYTE patch.\n                                 ; 1 = little endian WORD patch.\n                                 ; 2 = little endian LONG patch.\n                                 ; 3 = JR offset value BYTE patch.\n\n            LONG    RPNSize      ; Size of the buffer with the RPN.\n                                 ; expression.\n\n            BYTE    RPN[RPNSize] ; RPN expression. Definition below.\n\n        ENDR\n\n    ENDC\n\nENDR\n\n; Assertions\n\nLONG  NumberOfAssertions\n\nREPT  NumberOfAssertions\n\n  LONG    SourceFile   ; ID of the source file node (for printing the failure).\n\n  LONG    LineNo       ; Line at which the assertion was created.\n\n  LONG    Offset       ; Offset into the section where the assertion is located.\n\n  LONG    SectionID    ; Index within the file of the section in which PC is\n                       ; located, or -1 if defined outside a section.\n\n  LONG    PCOffset     ; PC\'s offset into the above section.\n                       ; Used because the section may be floating, so PC\'s value\n                       ; is not known to RGBASM.\n\n  BYTE    Type         ; 0 = Prints the message but allows linking to continue\n                       ; 1 = Prints the message and evaluates other assertions,\n                       ;     but linking fails afterwards\n                       ; 2 = Prints the message and immediately fails linking\n\n  LONG    RPNSize      ; Size of the RPN expression\'s buffer.\n\n  BYTE    RPN[RPNSize] ; RPN expression, same as patches. Assert fails if == 0.\n\n  STRING  Message      ; A message displayed when the assert fails. If set to\n                       ; the empty string, a generic message is printed instead.\n\nENDR</pre>\n</div>\n<section class="Ss">\n<h3 class="Ss" id="RPN_DATA"><a class="permalink" href="#RPN_DATA">RPN\n  DATA</a></h3>\n<p class="Pp">Expressions in the object file are stored as RPN. This is an\n    expression of the form &#x201C;2 5 +&#x201D;. This will first push the value\n    &#x201C;2&#x201D; to the stack, then &#x201C;5&#x201D;. The\n    &#x201C;+&#x201D; operator pops two arguments from the stack, adds them, and\n    then pushes the result on the stack, effectively replacing the two top\n    arguments with their sum. In the RGB format, RPN expressions are stored as\n    <var class="Ar">BYTE</var>s with some bytes being special prefixes for\n    integers and symbols.</p>\n<table class="Bl-column Bd-indent">\n  <tr id="Value">\n    <td><a class="permalink" href="#Value"><b class="Sy">Value</b></a></td>\n    <td><a class="permalink" href="#Meaning"><b class="Sy" id="Meaning">Meaning</b></a></td>\n  </tr>\n  <tr id="$00">\n    <td><a class="permalink" href="#$00"><code class="Li">$00</code></a></td>\n    <td><a class="permalink" href="#+"><code class="Li" id="+">+\n      operator</code></a></td>\n  </tr>\n  <tr id="$01">\n    <td><a class="permalink" href="#$01"><code class="Li">$01</code></a></td>\n    <td><code class="Li">- operator</code></td>\n  </tr>\n  <tr id="$02">\n    <td><a class="permalink" href="#$02"><code class="Li">$02</code></a></td>\n    <td><a class="permalink" href="#*"><code class="Li" id="*">*\n      operator</code></a></td>\n  </tr>\n  <tr id="$03">\n    <td><a class="permalink" href="#$03"><code class="Li">$03</code></a></td>\n    <td><a class="permalink" href="#/"><code class="Li" id="/">/\n      operator</code></a></td>\n  </tr>\n  <tr id="$04">\n    <td><a class="permalink" href="#$04"><code class="Li">$04</code></a></td>\n    <td><a class="permalink" href="#_"><code class="Li" id="_">%\n      operator</code></a></td>\n  </tr>\n  <tr id="$05">\n    <td><a class="permalink" href="#$05"><code class="Li">$05</code></a></td>\n    <td><a class="permalink" href="#unary"><code class="Li" id="unary">unary\n      -</code></a></td>\n  </tr>\n  <tr id="$06">\n    <td><a class="permalink" href="#$06"><code class="Li">$06</code></a></td>\n    <td><a class="permalink" href="#**"><code class="Li" id="**">**\n      operator</code></a></td>\n  </tr>\n  <tr id="$10">\n    <td><a class="permalink" href="#$10"><code class="Li">$10</code></a></td>\n    <td>|\n      <a class="permalink" href="#operator"><code class="Li" id="operator">operator</code></a></td>\n  </tr>\n  <tr id="$11">\n    <td><a class="permalink" href="#$11"><code class="Li">$11</code></a></td>\n    <td><a class="permalink" href="#&amp;"><code class="Li" id="&amp;">&amp;\n      operator</code></a></td>\n  </tr>\n  <tr id="$12">\n    <td><a class="permalink" href="#$12"><code class="Li">$12</code></a></td>\n    <td><a class="permalink" href="#_~2"><code class="Li" id="_~2">^\n      operator</code></a></td>\n  </tr>\n  <tr id="$13">\n    <td><a class="permalink" href="#$13"><code class="Li">$13</code></a></td>\n    <td><a class="permalink" href="#unary~2"><code class="Li" id="unary~2">unary\n      ~</code></a></td>\n  </tr>\n  <tr id="$21">\n    <td><a class="permalink" href="#$21"><code class="Li">$21</code></a></td>\n    <td><a class="permalink" href="#&amp;&amp;"><code class="Li" id="&amp;&amp;">&amp;&amp;\n      comparison</code></a></td>\n  </tr>\n  <tr id="$22">\n    <td><a class="permalink" href="#$22"><code class="Li">$22</code></a></td>\n    <td><a class="permalink" href="#__"><code class="Li" id="__">||\n      comparison</code></a></td>\n  </tr>\n  <tr id="$23">\n    <td><a class="permalink" href="#$23"><code class="Li">$23</code></a></td>\n    <td><a class="permalink" href="#unary~3"><code class="Li" id="unary~3">unary&#x00A0;!</code></a></td>\n  </tr>\n  <tr id="$30">\n    <td><a class="permalink" href="#$30"><code class="Li">$30</code></a></td>\n    <td><a class="permalink" href="#=="><code class="Li" id="==">==\n      comparison</code></a></td>\n  </tr>\n  <tr id="$31">\n    <td><a class="permalink" href="#$31"><code class="Li">$31</code></a></td>\n    <td><a class="permalink" href="#!="><code class="Li" id="!=">!=\n      comparison</code></a></td>\n  </tr>\n  <tr id="$32">\n    <td><a class="permalink" href="#$32"><code class="Li">$32</code></a></td>\n    <td><a class="permalink" href="#_~3"><code class="Li" id="_~3">&gt;\n      comparison</code></a></td>\n  </tr>\n  <tr id="$33">\n    <td><a class="permalink" href="#$33"><code class="Li">$33</code></a></td>\n    <td><a class="permalink" href="#_~4"><code class="Li" id="_~4">&lt;\n      comparison</code></a></td>\n  </tr>\n  <tr id="$34">\n    <td><a class="permalink" href="#$34"><code class="Li">$34</code></a></td>\n    <td><a class="permalink" href="#_="><code class="Li" id="_=">&gt;=\n      comparison</code></a></td>\n  </tr>\n  <tr id="$35">\n    <td><a class="permalink" href="#$35"><code class="Li">$35</code></a></td>\n    <td><a class="permalink" href="#_=~2"><code class="Li" id="_=~2">&lt;=\n      comparison</code></a></td>\n  </tr>\n  <tr id="$40">\n    <td><a class="permalink" href="#$40"><code class="Li">$40</code></a></td>\n    <td><a class="permalink" href="#__~2"><code class="Li" id="__~2">&lt;&lt;\n      operator</code></a></td>\n  </tr>\n  <tr id="$41">\n    <td><a class="permalink" href="#$41"><code class="Li">$41</code></a></td>\n    <td><a class="permalink" href="#__~3"><code class="Li" id="__~3">&gt;&gt;\n      operator</code></a></td>\n  </tr>\n  <tr id="$50">\n    <td><a class="permalink" href="#$50"><code class="Li">$50</code></a></td>\n    <td><a class="permalink" href="#BANK(symbol)"><code class="Li" id="BANK(symbol)">BANK(symbol)</code></a>,\n      a <var class="Ar">LONG</var> Symbol ID follows, where -1 means PC</td>\n  </tr>\n  <tr id="$51">\n    <td><a class="permalink" href="#$51"><code class="Li">$51</code></a></td>\n    <td><a class="permalink" href="#BANK(section_name)"><code class="Li" id="BANK(section_name)">BANK(section_name)</code></a>,\n      a null-terminated string follows.</td>\n  </tr>\n  <tr id="$52">\n    <td><a class="permalink" href="#$52"><code class="Li">$52</code></a></td>\n    <td><a class="permalink" href="#Current"><code class="Li" id="Current">Current\n      BANK()</code></a></td>\n  </tr>\n  <tr id="$60">\n    <td><a class="permalink" href="#$60"><code class="Li">$60</code></a></td>\n    <td><a class="permalink" href="#HRAMCheck"><code class="Li" id="HRAMCheck">HRAMCheck</code></a>.\n      Checks if the value is in HRAM, ANDs it with 0xFF.</td>\n  </tr>\n  <tr id="$61">\n    <td><a class="permalink" href="#$61"><code class="Li">$61</code></a></td>\n    <td><a class="permalink" href="#RSTCheck"><code class="Li" id="RSTCheck">RSTCheck</code></a>.\n      Checks if the value is a RST vector, ORs it with 0xC7.</td>\n  </tr>\n  <tr id="$80">\n    <td><a class="permalink" href="#$80"><code class="Li">$80</code></a></td>\n    <td><var class="Ar">LONG</var> integer follows.</td>\n  </tr>\n  <tr id="$81">\n    <td><a class="permalink" href="#$81"><code class="Li">$81</code></a></td>\n    <td><var class="Ar">LONG</var> symbol ID follows.</td>\n  </tr>\n</table>\n</section>\n</section>\n<section class="Sh">\n<h2 class="Sh" id="SEE_ALSO"><a class="permalink" href="#SEE_ALSO">SEE\n  ALSO</a></h2>\n<p class="Pp"><a class="Xr" href="./rgbasm.1">rgbasm(1)</a>,\n    <a class="Xr" href="./rgblink.1">rgblink(1)</a>,\n    <a class="Xr" href="./rgbds.7">rgbds(7)</a>,\n    <a class="Xr" href="./gbz80.7">gbz80(7)</a></p>\n</section>\n<section class="Sh">\n<h2 class="Sh" id="HISTORY"><a class="permalink" href="#HISTORY">HISTORY</a></h2>\n<p class="Pp"><code class="Nm">rgbds</code> was originally written by Carsten\n    S&#x00F8;rensen as part of the ASMotor package, and was later packaged in\n    RGBDS by Justin Lloyd. It is now maintained by a number of contributors at\n    <a class="Lk" href="https://github.com/gbdev/rgbds">https://github.com/gbdev/rgbds</a>.</p>\n</section>\n'}}))}m.isMDXComponent=!0}}]);