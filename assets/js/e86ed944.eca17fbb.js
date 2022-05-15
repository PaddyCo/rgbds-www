"use strict";(self.webpackChunkrgbds_www_2=self.webpackChunkrgbds_www_2||[]).push([[9100],{3905:function(e,a,s){s.d(a,{Zo:function(){return d},kt:function(){return h}});var n=s(7294);function r(e,a,s){return a in e?Object.defineProperty(e,a,{value:s,enumerable:!0,configurable:!0,writable:!0}):e[a]=s,e}function t(e,a){var s=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);a&&(n=n.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),s.push.apply(s,n)}return s}function l(e){for(var a=1;a<arguments.length;a++){var s=null!=arguments[a]?arguments[a]:{};a%2?t(Object(s),!0).forEach((function(a){r(e,a,s[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(s)):t(Object(s)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(s,a))}))}return e}function o(e,a){if(null==e)return{};var s,n,r=function(e,a){if(null==e)return{};var s,n,r={},t=Object.keys(e);for(n=0;n<t.length;n++)s=t[n],a.indexOf(s)>=0||(r[s]=e[s]);return r}(e,a);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);for(n=0;n<t.length;n++)s=t[n],a.indexOf(s)>=0||Object.prototype.propertyIsEnumerable.call(e,s)&&(r[s]=e[s])}return r}var c=n.createContext({}),i=function(e){var a=n.useContext(c),s=a;return e&&(s="function"==typeof e?e(a):l(l({},a),e)),s},d=function(e){var a=i(e.components);return n.createElement(c.Provider,{value:a},e.children)},m={inlineCode:"code",wrapper:function(e){var a=e.children;return n.createElement(n.Fragment,{},a)}},p=n.forwardRef((function(e,a){var s=e.components,r=e.mdxType,t=e.originalType,c=e.parentName,d=o(e,["components","mdxType","originalType","parentName"]),p=i(s),h=r,f=p["".concat(c,".").concat(h)]||p[h]||m[h]||t;return s?n.createElement(f,l(l({ref:a},d),{},{components:s})):n.createElement(f,l({ref:a},d))}));function h(e,a){var s=arguments,r=a&&a.mdxType;if("string"==typeof e||r){var t=s.length,l=new Array(t);l[0]=p;var o={};for(var c in a)hasOwnProperty.call(a,c)&&(o[c]=a[c]);o.originalType=e,o.mdxType="string"==typeof e?e:r,l[1]=o;for(var i=2;i<t;i++)l[i]=s[i];return n.createElement.apply(null,l)}return n.createElement.apply(null,s)}p.displayName="MDXCreateElement"},4183:function(e,a,s){s.r(a),s.d(a,{assets:function(){return d},contentTitle:function(){return c},default:function(){return h},frontMatter:function(){return o},metadata:function(){return i},toc:function(){return m}});var n=s(3117),r=s(102),t=(s(7294),s(3905)),l=["components"],o={},c="rgblink(1) \u2014 Game Boy linker",i={unversionedId:"rgblink.1",id:"rgblink.1",title:"rgblink(1) \u2014 Game Boy linker",description:"",source:"@site/docs/rgblink.1.md",sourceDirName:".",slug:"/rgblink.1",permalink:"/docs/master/rgblink.1",draft:!1,editUrl:"https://github.com/gbdev/rgbds-www2/edit/master/docs/rgblink.1.md",tags:[],version:"current",frontMatter:{},sidebar:"nav",previous:{title:"rgbasm(1) \u2014 Game Boy assembler",permalink:"/docs/master/rgbasm.1"},next:{title:"rgbfix(1) \u2014 Game Boy header utility and checksum fixer",permalink:"/docs/master/rgbfix.1"}},d={},m=[{value:"SYNOPSIS",id:"SYNOPSIS",level:2,children:[]},{value:"DESCRIPTION",id:"DESCRIPTION",level:2,children:[{value:"Scrambling algorithm",id:"Scrambling_algorithm",level:3,children:[]}]},{value:"EXAMPLES",id:"EXAMPLES",level:2,children:[]},{value:"BUGS",id:"BUGS",level:2,children:[]},{value:"SEE ALSO",id:"SEE_ALSO",level:2,children:[]},{value:"HISTORY",id:"HISTORY",level:2,children:[]}],p={toc:m};function h(e){var a=e.components,s=(0,r.Z)(e,l);return(0,t.kt)("wrapper",(0,n.Z)({},p,s,{components:a,mdxType:"MDXLayout"}),(0,t.kt)("h1",{id:"rgblink1--game-boy-linker"},"rgblink(1) \u2014 Game Boy linker"),(0,t.kt)("div",{className:"manual-text",dangerouslySetInnerHTML:{__html:'<section class="Sh">\n<h2 class="Sh" id="SYNOPSIS"><a class="permalink" href="#SYNOPSIS">SYNOPSIS</a></h2>\n<table class="Nm">\n  <tr>\n    <td><code class="Nm">rgblink</code></td>\n    <td>[<code class="Fl"><a href="#d">-d</a><a href="#t">t</a><a href="#V">V</a><a href="#v">v</a><a href="#w">w</a><a href="#x">x</a></code>] [<code class="Fl"><a href="#l">-l</a></code>\n      <var class="Ar">linker_script</var>] [<code class="Fl"><a href="#m">-m</a></code>\n      <var class="Ar">map_file</var>] [<code class="Fl"><a href="#n">-n</a></code>\n      <var class="Ar">sym_file</var>] [<code class="Fl"><a href="#O">-O</a></code>\n      <var class="Ar">overlay_file</var>] [<code class="Fl"><a href="#o">-o</a></code>\n      <var class="Ar">out_file</var>] [<code class="Fl"><a href="#p">-p</a></code>\n      <var class="Ar">pad_value</var>] [<code class="Fl"><a href="#S">-S</a></code>\n      <var class="Ar">spec</var>] [<code class="Fl"><a href="#s">-s</a></code>\n      <var class="Ar">symbol</var>] <var class="Ar">file ...</var></td>\n  </tr>\n</table>\n</section>\n<section class="Sh">\n<h2 class="Sh" id="DESCRIPTION"><a class="permalink" href="#DESCRIPTION">DESCRIPTION</a></h2>\n<p class="Pp">The <code class="Nm">rgblink</code> program links RGB object\n    files, typically created by <a class="Xr" href="./rgbasm.1">rgbasm(1)</a>,\n    into a single Game Boy ROM file. The format is documented in\n    <a class="Xr" href="./rgbds.5">rgbds(5)</a>.</p>\n<p class="Pp">ROM0 sections are placed in the first 16 KiB of the output ROM,\n    and ROMX sections are placed in any 16 KiB &#x201C;bank&#x201D; except the\n    first. If your ROM will only be 32 KiB, you can use the\n    <code class="Fl">-t</code> option to change this.</p>\n<p class="Pp">Similarly, WRAM0 sections are placed in the first 4 KiB of WRAM\n    (&#x201C;bank 0&#x201D;), and WRAMX sections are placed in any bank of the\n    last 4 KiB. If your ROM doesn\'t use banked WRAM, you can use the\n    <code class="Fl">-w</code> option to change this.</p>\n<p class="Pp">Also, if your ROM is designed for a monochrome Game Boy, you can\n    make sure that you don\'t use any incompatible section by using the\n    <code class="Fl">-d</code> option, which implies <code class="Fl">-w</code>\n    but also prohibits the use of banked VRAM.</p>\n<p class="Pp">Note that options can be abbreviated as long as the abbreviation\n    is unambiguous: <code class="Fl">--verb</code> is\n    <code class="Fl">--verbose</code>, but <code class="Fl">--ver</code> is\n    invalid because it could also be <code class="Fl">--version</code>. The\n    arguments are as follows:</p>\n<dl class="Bl-tag">\n  <dt id="d"><a class="permalink" href="#d"><code class="Fl">-d</code></a>,\n    <code class="Fl">--dmg</code></dt>\n  <dd>Enable DMG mode. Prohibit the use of sections that doesn\'t exist on a DMG,\n      such as VRAM bank 1. This option automatically enables\n      <code class="Fl">-w</code>.</dd>\n  <dt id="l"><a class="permalink" href="#l"><code class="Fl">-l</code></a>\n    <var class="Ar">linker_script</var>, <code class="Fl">--linkerscript</code>\n    <var class="Ar">linker_script</var></dt>\n  <dd>Specify a linker script file that tells the linker how sections must be\n      placed in the ROM. The attributes assigned in the linker script must be\n      consistent with any assigned in the code. See\n      <a class="Xr" href="./rgblink.5">rgblink(5)</a> for more information about\n      the linker script format.</dd>\n  <dt id="m"><a class="permalink" href="#m"><code class="Fl">-m</code></a>\n    <var class="Ar">map_file</var>, <code class="Fl">--map</code>\n    <var class="Ar">map_file</var></dt>\n  <dd>Write a map file to the given filename, listing how sections and symbols\n      were assigned.</dd>\n  <dt id="n"><a class="permalink" href="#n"><code class="Fl">-n</code></a>\n    <var class="Ar">sym_file</var>, <code class="Fl">--sym</code>\n    <var class="Ar">sym_file</var></dt>\n  <dd>Write a symbol file to the given filename, listing the address of all\n      exported symbols. Several external programs can use this information, for\n      example to help debugging ROMs.</dd>\n  <dt id="O"><a class="permalink" href="#O"><code class="Fl">-O</code></a>\n    <var class="Ar">overlay_file</var>, <code class="Fl">--overlay</code>\n    <var class="Ar">overlay_file</var></dt>\n  <dd>If specified, sections will be overlaid &quot;on top&quot; of the provided\n      ROM image. In that case, all sections must be fixed. This may be used to\n      patch an existing binary.</dd>\n  <dt id="o"><a class="permalink" href="#o"><code class="Fl">-o</code></a>\n    <var class="Ar">out_file</var>, <code class="Fl">--output</code>\n    <var class="Ar">out_file</var></dt>\n  <dd>Write the ROM image to the given file.</dd>\n  <dt id="p"><a class="permalink" href="#p"><code class="Fl">-p</code></a>\n    <var class="Ar">pad_value</var>, <code class="Fl">--pad</code>\n    <var class="Ar">pad_value</var></dt>\n  <dd>When inserting padding between sections, pad with this value. Has no\n      effect if <code class="Fl">-O</code> is specified. The default is 0.</dd>\n  <dt id="S"><a class="permalink" href="#S"><code class="Fl">-S</code></a>\n    <var class="Ar">spec</var>, <code class="Fl">--scramble</code>\n    <var class="Ar">spec</var></dt>\n  <dd>Enables a different &#x201C;scrambling&#x201D; algorithm for placing\n      sections. See <a class="Sx" href="#Scrambling_algorithm">Scrambling\n      algorithm</a> below for an explanation and a description of\n      <var class="Ar">spec</var>.</dd>\n  <dt id="s"><a class="permalink" href="#s"><code class="Fl">-s</code></a>\n    <var class="Ar">symbol</var>, <code class="Fl">--smart</code>\n    <var class="Ar">symbol</var></dt>\n  <dd>This option is ignored. It was supposed to perform smart linking but fell\n      into disrepair, and so has been removed. It will be reimplemented at some\n      point.</dd>\n  <dt id="t"><a class="permalink" href="#t"><code class="Fl">-t</code></a>,\n    <code class="Fl">--tiny</code></dt>\n  <dd>Expand the ROM0 section size from 16 KiB to the full 32 KiB assigned to\n      ROM. ROMX sections that are fixed to a bank other than 1 become errors,\n      other ROMX sections are treated as ROM0. Useful for ROMs that fit in 32\n      KiB.</dd>\n  <dt id="V"><a class="permalink" href="#V"><code class="Fl">-V</code></a>,\n    <code class="Fl">--version</code></dt>\n  <dd>Print the version of the program and exit.</dd>\n  <dt id="v"><a class="permalink" href="#v"><code class="Fl">-v</code></a>,\n    <code class="Fl">--verbose</code></dt>\n  <dd>Verbose: enable printing more information to standard error.</dd>\n  <dt id="w"><a class="permalink" href="#w"><code class="Fl">-w</code></a>,\n    <code class="Fl">--wramx</code></dt>\n  <dd>Expand the WRAM0 section size from 4 KiB to the full 8 KiB assigned to\n      WRAM. WRAMX sections that are fixed to a bank other than 1 become errors,\n      other WRAMX sections are treated as WRAM0.</dd>\n  <dt id="x"><a class="permalink" href="#x"><code class="Fl">-x</code></a>,\n    <code class="Fl">--nopad</code></dt>\n  <dd>Disables padding the end of the final file. This option automatically\n      enables <code class="Fl">-t</code>. You can use this when not not making a\n      ROM. When making a ROM, be careful that not using this is not a\n      replacement for <a class="Xr" href="./rgbfix.1">rgbfix(1)</a>\'s\n      <code class="Fl">-p</code> option!</dd>\n</dl>\n<section class="Ss">\n<h3 class="Ss" id="Scrambling_algorithm"><a class="permalink" href="#Scrambling_algorithm">Scrambling\n  algorithm</a></h3>\n<p class="Pp">The default section placement algorithm tries to minimize the\n    number of banks used; &#x201C;scrambling&#x201D; instead places sections\n    into a given pool of banks, trying to minimize the number of sections\n    sharing a given bank. This is useful to catch broken bank assumptions, such\n    as expecting two different sections to land in the same bank (that is not\n    guaranteed unless both are manually assigned the same bank number).</p>\n<p class="Pp">A scrambling spec is a comma-separated list of region specs. A\n    trailing comma is allowed, as well as whitespace between all specs and their\n    components. Each region spec has the following form:</p>\n<div class="Bd\n  Bd-indent"><var class="Ar">region</var>[=<var class="Ar">size</var>]</div>\n<var class="Ar">region</var> must be one of the following (case-insensitive),\n  while <var class="Ar">size</var> must be a positive decimal integer between 1\n  and the corresponding maximum. Certain regions allow omitting the size, in\n  which case it defaults to its max value.\n<table class="Bl-column">\n  <tr>\n    <td>Region name</td>\n    <td>Max size</td>\n    <td>Size optional</td>\n  </tr>\n  <tr id="romx">\n    <td><a class="permalink" href="#romx"><code class="Cm">romx</code></a></td>\n    <td>65535</td>\n    <td>No</td>\n  </tr>\n  <tr id="sram">\n    <td><a class="permalink" href="#sram"><code class="Cm">sram</code></a></td>\n    <td>255</td>\n    <td>No</td>\n  </tr>\n  <tr id="wramx">\n    <td><a class="permalink" href="#wramx"><code class="Cm">wramx</code></a></td>\n    <td>7</td>\n    <td>Yes</td>\n  </tr>\n</table>\n<p class="Pp">A <var class="Ar">size</var> of 0 disables scrambling for that\n    region.</p>\n<p class="Pp">For example,\n    &#x2018;<code class="Li">romx=64,wramx=4</code>&#x2019; will scramble\n    <code class="Ic">ROMX</code> sections among ROM banks 1 to 64,\n    <code class="Ic">WRAMX</code> sections among RAM banks 1 to 4, and will not\n    scramble <code class="Ic">SRAM</code> sections.</p>\n<p class="Pp">Later region specs override earlier ones; for example,\n    &#x2018;<code class="Li">romx=42, Romx=0</code>&#x2019; disables scrambling\n    for <code class="Cm">romx</code>.</p>\n<p class="Pp"><code class="Cm">wramx</code> scrambling is silently ignored if\n    <code class="Fl">-w</code> is passed (including if implied by\n    <code class="Fl">-d</code>), as <code class="Ic">WRAMX</code> sections will\n    be treated as <code class="Ic">WRAM0</code>.</p>\n</section>\n</section>\n<section class="Sh">\n<h2 class="Sh" id="EXAMPLES"><a class="permalink" href="#EXAMPLES">EXAMPLES</a></h2>\n<p class="Pp">All you need for a basic ROM is an object file, which can be made\n    into a ROM image like so:</p>\n<p class="Pp"></p>\n<div class="Bd Bd-indent"><code class="Li">$ rgblink -o bar.gb\n  foo.o</code></div>\n<p class="Pp">The resulting <var class="Ar">bar.gb</var> will not have correct\n    checksums (unless you put them in the assembly source). You should use\n    <a class="Xr" href="./rgbfix.1">rgbfix(1)</a> to fix these so that the\n    program will actually run in a Game Boy:</p>\n<p class="Pp"></p>\n<div class="Bd Bd-indent"><code class="Li">$ rgbfix -v bar.gb</code></div>\n<p class="Pp">Here is a more complete example:</p>\n<p class="Pp"></p>\n<div class="Bd Bd-indent"><code class="Li">$ rgblink -o bin/game.gb -n\n  bin/game.sym -p 0xFF obj/title.o obj/engine.o</code></div>\n</section>\n<section class="Sh">\n<h2 class="Sh" id="BUGS"><a class="permalink" href="#BUGS">BUGS</a></h2>\n<p class="Pp">Please report bugs on\n    <a class="Lk" href="https://github.com/gbdev/rgbds/issues">GitHub</a>.</p>\n</section>\n<section class="Sh">\n<h2 class="Sh" id="SEE_ALSO"><a class="permalink" href="#SEE_ALSO">SEE\n  ALSO</a></h2>\n<p class="Pp"><a class="Xr" href="./rgbasm.1">rgbasm(1)</a>,\n    <a class="Xr" href="./rgblink.5">rgblink(5)</a>,\n    <a class="Xr" href="./rgbfix.1">rgbfix(1)</a>,\n    <a class="Xr" href="./rgbds.5">rgbds(5)</a>,\n    <a class="Xr" href="./rgbds.7">rgbds(7)</a></p>\n</section>\n<section class="Sh">\n<h2 class="Sh" id="HISTORY"><a class="permalink" href="#HISTORY">HISTORY</a></h2>\n<p class="Pp"><code class="Nm">rgblink</code> was originally written by Carsten\n    S&#x00F8;rensen as part of the ASMotor package, and was later packaged in\n    RGBDS by Justin Lloyd. It is now maintained by a number of contributors at\n    <a class="Lk" href="https://github.com/gbdev/rgbds">https://github.com/gbdev/rgbds</a>.</p>\n</section>\n'}}))}h.isMDXComponent=!0}}]);