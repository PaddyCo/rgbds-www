"use strict";(self.webpackChunkrgbds_www_2=self.webpackChunkrgbds_www_2||[]).push([[9170],{3905:function(e,a,s){s.d(a,{Zo:function(){return d},kt:function(){return m}});var n=s(7294);function r(e,a,s){return a in e?Object.defineProperty(e,a,{value:s,enumerable:!0,configurable:!0,writable:!0}):e[a]=s,e}function c(e,a){var s=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);a&&(n=n.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),s.push.apply(s,n)}return s}function l(e){for(var a=1;a<arguments.length;a++){var s=null!=arguments[a]?arguments[a]:{};a%2?c(Object(s),!0).forEach((function(a){r(e,a,s[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(s)):c(Object(s)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(s,a))}))}return e}function t(e,a){if(null==e)return{};var s,n,r=function(e,a){if(null==e)return{};var s,n,r={},c=Object.keys(e);for(n=0;n<c.length;n++)s=c[n],a.indexOf(s)>=0||(r[s]=e[s]);return r}(e,a);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(n=0;n<c.length;n++)s=c[n],a.indexOf(s)>=0||Object.prototype.propertyIsEnumerable.call(e,s)&&(r[s]=e[s])}return r}var o=n.createContext({}),i=function(e){var a=n.useContext(o),s=a;return e&&(s="function"==typeof e?e(a):l(l({},a),e)),s},d=function(e){var a=i(e.components);return n.createElement(o.Provider,{value:a},e.children)},p={inlineCode:"code",wrapper:function(e){var a=e.children;return n.createElement(n.Fragment,{},a)}},h=n.forwardRef((function(e,a){var s=e.components,r=e.mdxType,c=e.originalType,o=e.parentName,d=t(e,["components","mdxType","originalType","parentName"]),h=i(s),m=r,f=h["".concat(o,".").concat(m)]||h[m]||p[m]||c;return s?n.createElement(f,l(l({ref:a},d),{},{components:s})):n.createElement(f,l({ref:a},d))}));function m(e,a){var s=arguments,r=a&&a.mdxType;if("string"==typeof e||r){var c=s.length,l=new Array(c);l[0]=h;var t={};for(var o in a)hasOwnProperty.call(a,o)&&(t[o]=a[o]);t.originalType=e,t.mdxType="string"==typeof e?e:r,l[1]=t;for(var i=2;i<c;i++)l[i]=s[i];return n.createElement.apply(null,l)}return n.createElement.apply(null,s)}h.displayName="MDXCreateElement"},3559:function(e,a,s){s.r(a),s.d(a,{assets:function(){return d},contentTitle:function(){return o},default:function(){return m},frontMatter:function(){return t},metadata:function(){return i},toc:function(){return p}});var n=s(3117),r=s(102),c=(s(7294),s(3905)),l=["components"],t={},o="rgbfix(1) \u2014 Game Boy header utility and checksum fixer",i={unversionedId:"rgbfix.1",id:"version-v0.5.2/rgbfix.1",title:"rgbfix(1) \u2014 Game Boy header utility and checksum fixer",description:"",source:"@site/versioned_docs/version-v0.5.2/rgbfix.1.md",sourceDirName:".",slug:"/rgbfix.1",permalink:"/docs/v0.5.2/rgbfix.1",draft:!1,editUrl:"https://github.com/gbdev/rgbds-www2/edit/master/versioned_docs/version-v0.5.2/rgbfix.1.md",tags:[],version:"v0.5.2",frontMatter:{},sidebar:"nav",previous:{title:"rgblink(1) \u2014 Game Boy linker",permalink:"/docs/v0.5.2/rgblink.1"},next:{title:"rgbgfx(1) \u2014 Game Boy graphics converter",permalink:"/docs/v0.5.2/rgbgfx.1"}},d={},p=[{value:"SYNOPSIS",id:"SYNOPSIS",level:2,children:[]},{value:"DESCRIPTION",id:"DESCRIPTION",level:2,children:[]},{value:"EXAMPLES",id:"EXAMPLES",level:2,children:[]},{value:"TPP1",id:"TPP1",level:2,children:[{value:"MBC name",id:"MBC_name",level:3,children:[]},{value:"Special considerations",id:"Special_considerations",level:3,children:[]}]},{value:"BUGS",id:"BUGS",level:2,children:[]},{value:"SEE ALSO",id:"SEE_ALSO",level:2,children:[]},{value:"HISTORY",id:"HISTORY",level:2,children:[]}],h={toc:p};function m(e){var a=e.components,s=(0,r.Z)(e,l);return(0,c.kt)("wrapper",(0,n.Z)({},h,s,{components:a,mdxType:"MDXLayout"}),(0,c.kt)("h1",{id:"rgbfix1--game-boy-header-utility-and-checksum-fixer"},"rgbfix(1) \u2014 Game Boy header utility and checksum fixer"),(0,c.kt)("div",{className:"manual-text",dangerouslySetInnerHTML:{__html:'<section class="Sh">\n<h2 class="Sh" id="SYNOPSIS"><a class="permalink" href="#SYNOPSIS">SYNOPSIS</a></h2>\n<table class="Nm">\n  <tr>\n    <td><code class="Nm">rgbfix</code></td>\n    <td>[<code class="Fl"><a href="#j">-j</a><a href="#O">O</a><a href="#s">s</a><a href="#V">V</a><a href="#v">v</a></code>] [<code class="Fl"><a href="#C">-C</a></code> |\n      <code class="Fl"><a href="#c">-c</a></code>] [<code class="Fl"><a href="#f">-f</a></code>\n      <var class="Ar">fix_spec</var>] [<code class="Fl"><a href="#i">-i</a></code>\n      <var class="Ar">game_id</var>] [<code class="Fl"><a href="#k">-k</a></code>\n      <var class="Ar">licensee_str</var>] [<code class="Fl"><a href="#l">-l</a></code>\n      <var class="Ar">licensee_id</var>] [<code class="Fl"><a href="#m">-m</a></code>\n      <var class="Ar">mbc_type</var>] [<code class="Fl"><a href="#n">-n</a></code>\n      <var class="Ar">rom_version</var>] [<code class="Fl"><a href="#p">-p</a></code>\n      <var class="Ar">pad_value</var>] [<code class="Fl"><a href="#r">-r</a></code>\n      <var class="Ar">ram_size</var>] [<code class="Fl"><a href="#t">-t</a></code>\n      <var class="Ar">title_str</var>] [<var class="Ar">file ...</var>]</td>\n  </tr>\n</table>\n</section>\n<section class="Sh">\n<h2 class="Sh" id="DESCRIPTION"><a class="permalink" href="#DESCRIPTION">DESCRIPTION</a></h2>\n<p class="Pp">The <code class="Nm">rgbfix</code> program changes headers of Game\n    Boy ROM images, typically generated by\n    <a class="Xr" href="./rgblink.1">rgblink(1)</a>, though it will work with\n    <a class="permalink" href="#any"><i class="Em" id="any">any</i></a> Game Boy\n    ROM. It also performs other correctness operations, such as padding.\n    <code class="Nm">rgbfix</code> only changes the fields for which it has\n    values specified. Developers are advised to fill those fields with 0x00\n    bytes in their source code before running <code class="Nm">rgbfix</code>,\n    and to have already populated whichever fields they don\'t specify using\n    <code class="Nm">rgbfix</code>.</p>\n<p class="Pp">Note that options can be abbreviated as long as the abbreviation\n    is unambiguous: <code class="Fl">--color-o</code> is\n    <code class="Fl">--color-only</code>, but <code class="Fl">--color</code> is\n    invalid because it could also be <code class="Fl">--color-compatible</code>.\n    Options later in the command line override those set earlier. Accepted\n    options are as follows:</p>\n<dl class="Bl-tag">\n  <dt id="C"><a class="permalink" href="#C"><code class="Fl">-C</code></a>,\n    <code class="Fl">--color-only</code></dt>\n  <dd>Set the Game Boy Color&#x2013;only flag (<span class="Ad">0x143</span>) to\n      0xC0. This overrides <code class="Fl">-c</code> if it was set prior.</dd>\n  <dt id="c"><a class="permalink" href="#c"><code class="Fl">-c</code></a>,\n    <code class="Fl">--color-compatible</code></dt>\n  <dd>Set the Game Boy Color&#x2013;compatible flag:\n      (<span class="Ad">0x143</span>) to 0x80. This overrides\n      <code class="Fl">-c</code> if it was set prior.</dd>\n  <dt id="f"><a class="permalink" href="#f"><code class="Fl">-f</code></a>\n    <var class="Ar">fix_spec</var>, <code class="Fl">--fix-spec</code>\n    <var class="Ar">fix_spec</var></dt>\n  <dd>Fix certain header values that the Game Boy checks for correctness.\n      Alternatively, intentionally trash these values by writing their binary\n      inverse instead. <var class="Ar">fix_spec</var> is a string containing any\n      combination of the following characters:\n    <p class="Pp"></p>\n    <dl class="Bl-tag Bl-compact">\n      <dt id="l"><a class="permalink" href="#l"><code class="Cm">l</code></a></dt>\n      <dd>Fix the Nintendo logo\n          (<span class="Ad">0x104</span>&#x2013;<span class="Ad">0x133</span>).</dd>\n      <dt id="L"><a class="permalink" href="#L"><code class="Cm">L</code></a></dt>\n      <dd>Trash the Nintendo logo.</dd>\n      <dt id="h"><a class="permalink" href="#h"><code class="Cm">h</code></a></dt>\n      <dd>Fix the header checksum (<span class="Ad">0x14D</span>).</dd>\n      <dt id="H"><a class="permalink" href="#H"><code class="Cm">H</code></a></dt>\n      <dd>Trash the header checksum.</dd>\n      <dt id="g"><a class="permalink" href="#g"><code class="Cm">g</code></a></dt>\n      <dd>Fix the global checksum\n          (<span class="Ad">0x14E</span>&#x2013;<span class="Ad">0x14F</span>).</dd>\n      <dt id="G"><a class="permalink" href="#G"><code class="Cm">G</code></a></dt>\n      <dd>Trash the global checksum.</dd>\n    </dl>\n  </dd>\n  <dt id="i"><a class="permalink" href="#i"><code class="Fl">-i</code></a>\n    <var class="Ar">game_id</var>, <code class="Fl">--game-id</code>\n    <var class="Ar">game_id</var></dt>\n  <dd>Set the game ID string\n      (<span class="Ad">0x13F</span>&#x2013;<span class="Ad">0x142</span>) to a\n      given string. If it\'s longer than 4 chars, it will be truncated, and a\n      warning emitted.</dd>\n  <dt id="j"><a class="permalink" href="#j"><code class="Fl">-j</code></a>,\n    <code class="Fl">--non-japanese</code></dt>\n  <dd>Set the non-Japanese region flag (<span class="Ad">0x14A</span>) to\n    0x01.</dd>\n  <dt id="k"><a class="permalink" href="#k"><code class="Fl">-k</code></a>\n    <var class="Ar">licensee_str</var>, <code class="Fl">--new-licensee</code>\n    <var class="Ar">licensee_str</var></dt>\n  <dd>Set the new licensee string\n      (<span class="Ad">0x144</span>&#x2013;<span class="Ad">0x145</span>) to a\n      given string. If it\'s longer than 2 chars, it will be truncated, and a\n      warning emitted.</dd>\n  <dt id="l~2"><a class="permalink" href="#l~2"><code class="Fl">-l</code></a>\n    <var class="Ar">licensee_id</var>, <code class="Fl">--old-licensee</code>\n    <var class="Ar">licensee_id</var></dt>\n  <dd>Set the old licensee code (<span class="Ad">0x14B</span>) to a given value\n      from 0 to 0xFF. This value is deprecated and should be set to 0x33 in all\n      new software.</dd>\n  <dt id="m"><a class="permalink" href="#m"><code class="Fl">-m</code></a>\n    <var class="Ar">mbc_type</var>, <code class="Fl">--mbc-type</code>\n    <var class="Ar">mbc_type</var></dt>\n  <dd>Set the MBC type (<span class="Ad">0x147</span>) to a given value from 0\n      to 0xFF.\n    <p class="Pp">This value may also be an MBC name. The list of accepted names\n        can be obtained by passing\n        &#x2018;<code class="Li"><code class="Cm">help</code></code>&#x2019; as\n        the argument. Any amount of whitespace (space and tabs) is allowed\n        around plus signs, and the order of &quot;components&quot; is free, as\n        long as the MBC name is first. There are special considerations to take\n        for the TPP1 mapper; see the <a class="Sx" href="#TPP1">TPP1</a> section\n        below.</p>\n  </dd>\n  <dt id="n"><a class="permalink" href="#n"><code class="Fl">-n</code></a>\n    <var class="Ar">rom_version</var>, <code class="Fl">--rom-version</code>\n    <var class="Ar">rom_version</var></dt>\n  <dd>Set the ROM version (<span class="Ad">0x14C</span>) to a given value from\n      0 to 0xFF.</dd>\n  <dt id="O"><a class="permalink" href="#O"><code class="Fl">-O</code></a>,\n    <code class="Fl">--overwrite</code></dt>\n  <dd>Allow overwriting different non-zero bytes in the header without a warning\n      being emitted.</dd>\n  <dt id="p"><a class="permalink" href="#p"><code class="Fl">-p</code></a>\n    <var class="Ar">pad_value</var>, <code class="Fl">--pad-value</code>\n    <var class="Ar">pad_value</var></dt>\n  <dd>Pad the ROM image to a valid size with a given pad value from 0 to 255\n      (0xFF). <code class="Nm">rgbfix</code> will automatically pick a size from\n      32 KiB, 64 KiB, 128 KiB, ..., 8192 KiB. The cartridge size byte\n      (<span class="Ad">0x148</span>) will be changed to reflect this new size.\n      The recommended padding value is 0xFF, to speed up writing the ROM to\n      flash chips, and to avoid &quot;nop slides&quot; into VRAM.</dd>\n  <dt id="r"><a class="permalink" href="#r"><code class="Fl">-r</code></a>\n    <var class="Ar">ram_size</var>, <code class="Fl">--ram-size</code>\n    <var class="Ar">ram_size</var></dt>\n  <dd>Set the RAM size (<span class="Ad">0x149</span>) to a given value from 0\n      to 0xFF.</dd>\n  <dt id="s"><a class="permalink" href="#s"><code class="Fl">-s</code></a>,\n    <code class="Fl">--sgb-compatible</code></dt>\n  <dd>Set the SGB flag (<span class="Ad">0x146</span>) to 0x03. This flag will\n      be ignored by the SGB unless the old licensee code is 0x33! If this is\n      given as well as <code class="Fl">-l</code>, but is not set to 0x33, a\n      warning will be printed.</dd>\n  <dt id="t"><a class="permalink" href="#t"><code class="Fl">-t</code></a>\n    <var class="Ar">title</var>, <code class="Fl">--title</code>\n    <var class="Ar">title</var></dt>\n  <dd>Set the title string\n      (<span class="Ad">0x134</span>&#x2013;<span class="Ad">0x143</span>) to a\n      given string. If the title is longer than the max length, it will be\n      truncated, and a warning emitted. The max length is 11 characters if the\n      game ID (<code class="Fl">-i</code>) is specified, 15 characters if the\n      CGB flag (<code class="Fl">-c</code> or <code class="Fl">-C</code>) is\n      specified but the game ID is not, and 16 characters otherwise.</dd>\n  <dt id="V"><a class="permalink" href="#V"><code class="Fl">-V</code></a>,\n    <code class="Fl">--version</code></dt>\n  <dd>Print the version of the program and exit.</dd>\n  <dt id="v"><a class="permalink" href="#v"><code class="Fl">-v</code></a>,\n    <code class="Fl">--validate</code></dt>\n  <dd>Equivalent to <code class="Fl">-f</code> <code class="Cm">lhg</code>.</dd>\n</dl>\n</section>\n<section class="Sh">\n<h2 class="Sh" id="EXAMPLES"><a class="permalink" href="#EXAMPLES">EXAMPLES</a></h2>\n<p class="Pp">Most values in the ROM header do not matter to the actual console,\n    and most are seldom useful anyway. The bare minimum requirements for a\n    workable program are the header checksum, the Nintendo logo, and (if needed)\n    the CGB/SGB flags. It is a good idea to pad the image to a valid size as\n    well (&#x201C;valid&#x201D; meaning a power of 2, times 32 KiB).</p>\n<p class="Pp">The following will make a plain, non-color Game Boy game without\n    checking for a valid size:</p>\n<p class="Pp"></p>\n<div class="Bd Bd-indent">$ rgbfix -v foo.gb</div>\n<p class="Pp">The following will make a SGB-enabled, color-enabled game with a\n    title of &#x201C;foobar&#x201D;, and pad it to a valid size. (The Game Boy\n    itself does not use the title, but some emulators or ROM managers do.)</p>\n<p class="Pp"></p>\n<div class="Bd Bd-indent">$ rgbfix -vcs -l 0x33 -p 255 -t foobar baz.gb</div>\n<p class="Pp">The following will duplicate the header of the game\n    &#x201C;Survival Kids&#x201D;, sans global checksum:</p>\n<p class="Pp"></p>\n<div class="Bd Bd-indent">$ rgbfix -cjsv -k A4 -l 0x33 -m 0x1B -p 0xFF -r 3 -t\n  SURVIVALKIDAVKE SurvivalKids.gbc</div>\n</section>\n<section class="Sh">\n<h2 class="Sh" id="TPP1"><a class="permalink" href="#TPP1">TPP1</a></h2>\n<p class="Pp">TPP1 is a homebrew mapper designed as a functional superset of the\n    common traditional MBCs, allowing larger ROM and RAM sizes combined with\n    other hardware features. Its specification, as well as more resources, can\n    be found online at\n    <a class="Lk" href="https://github.com/TwitchPlaysPokemon/tpp1">https://github.com/TwitchPlaysPokemon/tpp1</a>.</p>\n<section class="Ss">\n<h3 class="Ss" id="MBC_name"><a class="permalink" href="#MBC_name">MBC\n  name</a></h3>\n<p class="Pp">The MBC name for TPP1 is more complex than standard mappers. It\n    must be followed with the revision number, of the form\n    &#x2018;<code class="Li">major.minor</code>&#x2019;, where both\n    &#x2018;<code class="Li">major</code>&#x2019; and\n    &#x2018;<code class="Li">minor</code>&#x2019; are decimal, 8-bit integers.\n    There may be any amount of spaces or underscores between\n    &#x2018;<code class="Li">TPP1</code>&#x2019; and the revision number.\n    <code class="Nm">rgbfix</code> only supports 1.x revisions, and will reject\n    everything else.</p>\n<p class="Pp">Like other mappers, the name may be followed with a list of\n    optional, &#x2018;<code class="Li">+</code>&#x2019;-separated features;\n    however, &#x2018;<code class="Li">RAM</code>&#x2019; should not be\n    specified, as the TPP1 mapper implicitly requests RAM if a non-zero RAM size\n    is specified. Therefore, <code class="Nm">rgbfix</code> will ignore the\n    &#x2018;<code class="Li">RAM</code>&#x2019; feature on a TPP1 mapper with a\n    warning.</p>\n</section>\n<section class="Ss">\n<h3 class="Ss" id="Special_considerations"><a class="permalink" href="#Special_considerations">Special\n  considerations</a></h3>\n<p class="Pp">TPP1 overwrites the byte at <span class="Ad">0x14A</span>, usually\n    indicating the region destination (see <code class="Fl">-j</code>), with one\n    of its three identification bytes. Therefore, <code class="Nm">rgbfix</code>\n    will warn about and ignore <code class="Fl">-j</code> if used in combination\n    with TPP1.</p>\n</section>\n</section>\n<section class="Sh">\n<h2 class="Sh" id="BUGS"><a class="permalink" href="#BUGS">BUGS</a></h2>\n<p class="Pp">Please report bugs on\n    <a class="Lk" href="https://github.com/gbdev/rgbds/issues">GitHub</a>.</p>\n</section>\n<section class="Sh">\n<h2 class="Sh" id="SEE_ALSO"><a class="permalink" href="#SEE_ALSO">SEE\n  ALSO</a></h2>\n<p class="Pp"><a class="Xr" href="./rgbasm.1">rgbasm(1)</a>,\n    <a class="Xr" href="./rgblink.1">rgblink(1)</a>,\n    <a class="Xr" href="./rgbds.7">rgbds(7)</a></p>\n</section>\n<section class="Sh">\n<h2 class="Sh" id="HISTORY"><a class="permalink" href="#HISTORY">HISTORY</a></h2>\n<p class="Pp"><code class="Nm">rgbfix</code> was originally released by Carsten\n    S&#x00F8;rensen as a standalone program called gbfix, and was later packaged\n    in RGBDS by Justin Lloyd. It is now maintained by a number of contributors\n    at\n    <a class="Lk" href="https://github.com/gbdev/rgbds">https://github.com/gbdev/rgbds</a>.</p>\n</section>\n'}}))}m.isMDXComponent=!0}}]);