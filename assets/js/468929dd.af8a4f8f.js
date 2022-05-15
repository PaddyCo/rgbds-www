"use strict";(self.webpackChunkrgbds_www_2=self.webpackChunkrgbds_www_2||[]).push([[963],{3905:function(e,a,n){n.d(a,{Zo:function(){return i},kt:function(){return f}});var s=n(7294);function r(e,a,n){return a in e?Object.defineProperty(e,a,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[a]=n,e}function t(e,a){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);a&&(s=s.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),n.push.apply(n,s)}return n}function l(e){for(var a=1;a<arguments.length;a++){var n=null!=arguments[a]?arguments[a]:{};a%2?t(Object(n),!0).forEach((function(a){r(e,a,n[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):t(Object(n)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(n,a))}))}return e}function c(e,a){if(null==e)return{};var n,s,r=function(e,a){if(null==e)return{};var n,s,r={},t=Object.keys(e);for(s=0;s<t.length;s++)n=t[s],a.indexOf(n)>=0||(r[n]=e[n]);return r}(e,a);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);for(s=0;s<t.length;s++)n=t[s],a.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var d=s.createContext({}),o=function(e){var a=s.useContext(d),n=a;return e&&(n="function"==typeof e?e(a):l(l({},a),e)),n},i=function(e){var a=o(e.components);return s.createElement(d.Provider,{value:a},e.children)},p={inlineCode:"code",wrapper:function(e){var a=e.children;return s.createElement(s.Fragment,{},a)}},h=s.forwardRef((function(e,a){var n=e.components,r=e.mdxType,t=e.originalType,d=e.parentName,i=c(e,["components","mdxType","originalType","parentName"]),h=o(n),f=r,m=h["".concat(d,".").concat(f)]||h[f]||p[f]||t;return n?s.createElement(m,l(l({ref:a},i),{},{components:n})):s.createElement(m,l({ref:a},i))}));function f(e,a){var n=arguments,r=a&&a.mdxType;if("string"==typeof e||r){var t=n.length,l=new Array(t);l[0]=h;var c={};for(var d in a)hasOwnProperty.call(a,d)&&(c[d]=a[d]);c.originalType=e,c.mdxType="string"==typeof e?e:r,l[1]=c;for(var o=2;o<t;o++)l[o]=n[o];return s.createElement.apply(null,l)}return s.createElement.apply(null,n)}h.displayName="MDXCreateElement"},5003:function(e,a,n){n.r(a),n.d(a,{assets:function(){return i},contentTitle:function(){return d},default:function(){return f},frontMatter:function(){return c},metadata:function(){return o},toc:function(){return p}});var s=n(3117),r=n(102),t=(n(7294),n(3905)),l=["components"],c={},d="rgbfix(1) \u2014 Game Boy checksum fixer",o={unversionedId:"rgbfix.1",id:"version-v0.3.6/rgbfix.1",title:"rgbfix(1) \u2014 Game Boy checksum fixer",description:"",source:"@site/versioned_docs/version-v0.3.6/rgbfix.1.md",sourceDirName:".",slug:"/rgbfix.1",permalink:"/docs/v0.3.6/rgbfix.1",draft:!1,editUrl:"https://github.com/gbdev/rgbds-www2/edit/master/versioned_docs/version-v0.3.6/rgbfix.1.md",tags:[],version:"v0.3.6",frontMatter:{},sidebar:"nav",previous:{title:"rgblink(1) \u2014 Game Boy linker",permalink:"/docs/v0.3.6/rgblink.1"},next:{title:"rgbgfx(1) \u2014 Game Boy graphics converter",permalink:"/docs/v0.3.6/rgbgfx.1"}},i={},p=[{value:"SYNOPSIS",id:"SYNOPSIS",level:2,children:[]},{value:"DESCRIPTION",id:"DESCRIPTION",level:2,children:[]},{value:"EXAMPLES",id:"EXAMPLES",level:2,children:[]},{value:"SEE ALSO",id:"SEE_ALSO",level:2,children:[]},{value:"HISTORY",id:"HISTORY",level:2,children:[]}],h={toc:p};function f(e){var a=e.components,n=(0,r.Z)(e,l);return(0,t.kt)("wrapper",(0,s.Z)({},h,n,{components:a,mdxType:"MDXLayout"}),(0,t.kt)("h1",{id:"rgbfix1--game-boy-checksum-fixer"},"rgbfix(1) \u2014 Game Boy checksum fixer"),(0,t.kt)("div",{className:"manual-text",dangerouslySetInnerHTML:{__html:'<section class="Sh">\n<h2 class="Sh" id="SYNOPSIS"><a class="permalink" href="#SYNOPSIS">SYNOPSIS</a></h2>\n<table class="Nm">\n  <tr>\n    <td><code class="Nm">rgbfix</code></td>\n    <td>[<code class="Fl"><a href="#C">-C</a><a href="#c">c</a><a href="#j">j</a><a href="#s">s</a><a href="#V">V</a><a href="#v">v</a></code>] [<code class="Fl"><a href="#f">-f</a></code>\n      <var class="Ar">fix_spec</var>] [<code class="Fl"><a href="#i">-i</a></code>\n      <var class="Ar">game_id</var>] [<code class="Fl"><a href="#k">-k</a></code>\n      <var class="Ar">licensee_str</var>] [<code class="Fl"><a href="#l">-l</a></code>\n      <var class="Ar">licensee_id</var>] [<code class="Fl"><a href="#m">-m</a></code>\n      <var class="Ar">mbc_type</var>] [<code class="Fl"><a href="#n">-n</a></code>\n      <var class="Ar">rom_version</var>] [<code class="Fl"><a href="#p">-p</a></code>\n      <var class="Ar">pad_value</var>] [<code class="Fl"><a href="#r">-r</a></code>\n      <var class="Ar">ram_size</var>] [<code class="Fl"><a href="#t">-t</a></code>\n      <var class="Ar">title_str</var>] <var class="Ar">file</var></td>\n  </tr>\n</table>\n</section>\n<section class="Sh">\n<h2 class="Sh" id="DESCRIPTION"><a class="permalink" href="#DESCRIPTION">DESCRIPTION</a></h2>\n<p class="Pp">The <code class="Nm">rgbfix</code> program changes headers of Game\n    Boy ROM images. It also performs other filetype operations, such as\n    truncation. The arguments are as follows:</p>\n<dl class="Bl-tag">\n  <dt id="C"><a class="permalink" href="#C"><code class="Fl">-C</code></a></dt>\n  <dd>Set the Game Boy Color&#x2013;only flag: <span class="Ad">0x143</span> =\n      0xC0. If both this and the <code class="Fl">-c</code> flag are set, this\n      takes precedence.</dd>\n  <dt id="c"><a class="permalink" href="#c"><code class="Fl">-c</code></a></dt>\n  <dd>Set the Game Boy Color&#x2013;compatible flag:\n      <span class="Ad">0x143</span> = 0x80. If both this and the\n      <code class="Fl">-C</code> flag are set, <code class="Fl">-C</code> takes\n      precedence.</dd>\n  <dt id="f"><a class="permalink" href="#f"><code class="Fl">-f</code></a>\n    <var class="Ar">fix_spec</var></dt>\n  <dd>Fix certain header values that the Game Boy checks for correctness.\n      Alternatively, intentionally trash these values by writing their binary\n      inverse instead. <var class="Ar">fix_spec</var> is a string containing any\n      combination of the following characters:\n    <p class="Pp"></p>\n    <dl class="Bl-tag Bl-compact">\n      <dt id="l"><a class="permalink" href="#l"><code class="Cm">l</code></a></dt>\n      <dd>Fix the Nintendo logo\n          (<span class="Ad">0x104</span>&#x2013;<span class="Ad">0x133</span>).</dd>\n      <dt id="L"><a class="permalink" href="#L"><code class="Cm">L</code></a></dt>\n      <dd>Trash the Nintendo logo.</dd>\n      <dt id="h"><a class="permalink" href="#h"><code class="Cm">h</code></a></dt>\n      <dd>Fix the header checksum (<span class="Ad">0x14D</span>).</dd>\n      <dt id="H"><a class="permalink" href="#H"><code class="Cm">H</code></a></dt>\n      <dd>Trash the header checksum.</dd>\n      <dt id="g"><a class="permalink" href="#g"><code class="Cm">g</code></a></dt>\n      <dd>Fix the global checksum\n          (<span class="Ad">0x14E</span>&#x2013;<span class="Ad">0x14F</span>).</dd>\n      <dt id="G"><a class="permalink" href="#G"><code class="Cm">G</code></a></dt>\n      <dd>Trash the global checksum.</dd>\n    </dl>\n  </dd>\n  <dt id="i"><a class="permalink" href="#i"><code class="Fl">-i</code></a>\n    <var class="Ar">game_id</var></dt>\n  <dd>Set the game ID string\n      (<span class="Ad">0x13F</span>&#x2013;<span class="Ad">0x142</span>) to a\n      given string of exactly 4 characters. If both this and the title are set,\n      the game ID will overwrite the overlapping portion of the title.</dd>\n  <dt id="j"><a class="permalink" href="#j"><code class="Fl">-j</code></a></dt>\n  <dd>Set the non-Japanese region flag: <span class="Ad">0x14A</span> = 1.</dd>\n  <dt id="k"><a class="permalink" href="#k"><code class="Fl">-k</code></a>\n    <var class="Ar">licensee_str</var></dt>\n  <dd>Set the new licensee string\n      (<span class="Ad">0x144</span>&#x2013;<span class="Ad">0x145</span>) to a\n      given string, truncated to at most two characters.</dd>\n  <dt id="l~2"><a class="permalink" href="#l~2"><code class="Fl">-l</code></a>\n    <var class="Ar">licensee_id</var></dt>\n  <dd>Set the old licensee code, <span class="Ad">0x14B</span>, to a given value\n      from 0 to 0xFF. This value is deprecated and should be set to 0x33 in all\n      new software.</dd>\n  <dt id="m"><a class="permalink" href="#m"><code class="Fl">-m</code></a>\n    <var class="Ar">mbc_type</var></dt>\n  <dd>Set the MBC type, <span class="Ad">0x147</span>, to a given value from 0\n      to 0xFF.</dd>\n  <dt id="n"><a class="permalink" href="#n"><code class="Fl">-n</code></a>\n    <var class="Ar">rom_version</var></dt>\n  <dd>Set the ROM version, <span class="Ad">0x14C</span>, to a given value from\n      0 to 0xFF.</dd>\n  <dt id="p"><a class="permalink" href="#p"><code class="Fl">-p</code></a>\n    <var class="Ar">pad_value</var></dt>\n  <dd>Pad the image to a valid size with a given pad value from 0 to 0xFF.\n      <code class="Nm">rgbfix</code> will automatically pick a size from 32KiB,\n      64KiB, 128KiB, ..., 8192KiB and give a warning thereafter. The cartridge\n      size byte (<span class="Ad">0x148</span>) will be changed to reflect this\n      new size.</dd>\n  <dt id="r"><a class="permalink" href="#r"><code class="Fl">-r</code></a>\n    <var class="Ar">ram_size</var></dt>\n  <dd>Set the RAM size, <span class="Ad">0x149</span>, to a given value from 0\n      to 0xFF.</dd>\n  <dt id="s"><a class="permalink" href="#s"><code class="Fl">-s</code></a></dt>\n  <dd>Set the SGB flag: <span class="Ad">0x146</span> = 3.</dd>\n  <dt id="t"><a class="permalink" href="#t"><code class="Fl">-t</code></a>\n    <var class="Ar">title</var></dt>\n  <dd>Set the title string\n      (<span class="Ad">0x134</span>&#x2013;<span class="Ad">0x143</span>) to a\n      given string, truncated to at most 16 characters. It is recommended to use\n      15 characters instead, to avoid clashing with the CGB flag\n      (<code class="Fl">-c</code> or <code class="Fl">-C</code>). If both this\n      and the game ID are set, the game ID will overwrite the overlapping\n      portion of the title.</dd>\n  <dt id="V"><a class="permalink" href="#V"><code class="Fl">-V</code></a></dt>\n  <dd>Print the version of the program and exit.</dd>\n  <dt id="v"><a class="permalink" href="#v"><code class="Fl">-v</code></a></dt>\n  <dd>Equivalent to <code class="Fl">-f</code> <code class="Cm">lhg</code>.</dd>\n</dl>\n</section>\n<section class="Sh">\n<h2 class="Sh" id="EXAMPLES"><a class="permalink" href="#EXAMPLES">EXAMPLES</a></h2>\n<p class="Pp">Most values in the ROM header are only cosmetic. The bare minimum\n    requirements for a workable image are checksums, the Nintendo logo, and (if\n    needed) the CGB/SGB flags. It is a good idea to pad the image to a valid\n    size as well (&#x201C;valid&#x201D; meaning a multiple of 32KiB).</p>\n<p class="Pp">The following will make a plain, no-color Game Boy game without\n    checking for a valid size:</p>\n<p class="Pp"></p>\n<div class="Bd Bd-indent">$ rgbfix -v foo.gb</div>\n<p class="Pp">The following will make a SGB-enabled, color-enabled game with a\n    title of &#x201C;foobar&#x201D;, and pad it to a multiple of 32KiB. (The\n    Game Boy itself does not use the title, but some emulators or ROM managers\n    might.)</p>\n<p class="Pp"></p>\n<div class="Bd Bd-indent">$ rgbfix -vcs -l 0x33 -p 0 -t foobar baz.gb</div>\n<p class="Pp">The following will duplicate the header (sans global checksum) of\n    the game &#x201C;Survival Kids&#x201D;:</p>\n<p class="Pp"></p>\n<div class="Bd Bd-indent">$ rgbfix -cjsv -k A4 -l 0x33 -m 0x1B -p 0xFF -r 3 -t\n  SURVIVALKIDAVKE SurvivalKids.gbc</div>\n</section>\n<section class="Sh">\n<h2 class="Sh" id="SEE_ALSO"><a class="permalink" href="#SEE_ALSO">SEE\n  ALSO</a></h2>\n<p class="Pp"><a class="Xr" href="./rgbasm.1">rgbasm(1)</a>,\n    <a class="Xr" href="./rgblink.1">rgblink(1)</a>,\n    <a class="Xr" href="./rgbds.7">rgbds(7)</a></p>\n</section>\n<section class="Sh">\n<h2 class="Sh" id="HISTORY"><a class="permalink" href="#HISTORY">HISTORY</a></h2>\n<p class="Pp"><code class="Nm">rgbfix</code> was originally released by Carsten\n    S&#x00F8;rensen as a standalone program called gbfix, and was later packaged\n    in RGBDS by Justin Lloyd. It is now maintained by a number of contributors\n    at\n    <a class="Lk" href="https://github.com/rednex/rgbds">https://github.com/rednex/rgbds</a>.</p>\n</section>\n'}}))}f.isMDXComponent=!0}}]);