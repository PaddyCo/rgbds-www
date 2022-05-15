"use strict";(self.webpackChunkrgbds_www_2=self.webpackChunkrgbds_www_2||[]).push([[2082],{3905:function(e,a,t){t.d(a,{Zo:function(){return c},kt:function(){return f}});var n=t(7294);function s(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}function r(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);a&&(n=n.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,n)}return t}function l(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?r(Object(t),!0).forEach((function(a){s(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}function i(e,a){if(null==e)return{};var t,n,s=function(e,a){if(null==e)return{};var t,n,s={},r=Object.keys(e);for(n=0;n<r.length;n++)t=r[n],a.indexOf(t)>=0||(s[t]=e[t]);return s}(e,a);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)t=r[n],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(s[t]=e[t])}return s}var o=n.createContext({}),d=function(e){var a=n.useContext(o),t=a;return e&&(t="function"==typeof e?e(a):l(l({},a),e)),t},c=function(e){var a=d(e.components);return n.createElement(o.Provider,{value:a},e.children)},p={inlineCode:"code",wrapper:function(e){var a=e.children;return n.createElement(n.Fragment,{},a)}},h=n.forwardRef((function(e,a){var t=e.components,s=e.mdxType,r=e.originalType,o=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),h=d(t),f=s,u=h["".concat(o,".").concat(f)]||h[f]||p[f]||r;return t?n.createElement(u,l(l({ref:a},c),{},{components:t})):n.createElement(u,l({ref:a},c))}));function f(e,a){var t=arguments,s=a&&a.mdxType;if("string"==typeof e||s){var r=t.length,l=new Array(r);l[0]=h;var i={};for(var o in a)hasOwnProperty.call(a,o)&&(i[o]=a[o]);i.originalType=e,i.mdxType="string"==typeof e?e:s,l[1]=i;for(var d=2;d<r;d++)l[d]=t[d];return n.createElement.apply(null,l)}return n.createElement.apply(null,t)}h.displayName="MDXCreateElement"},6486:function(e,a,t){t.r(a),t.d(a,{assets:function(){return c},contentTitle:function(){return o},default:function(){return f},frontMatter:function(){return i},metadata:function(){return d},toc:function(){return p}});var n=t(3117),s=t(102),r=(t(7294),t(3905)),l=["components"],i={},o="rgbgfx(1) \u2014 Game Boy graphics converter",d={unversionedId:"rgbgfx.1",id:"version-v0.5.0/rgbgfx.1",title:"rgbgfx(1) \u2014 Game Boy graphics converter",description:"",source:"@site/versioned_docs/version-v0.5.0/rgbgfx.1.md",sourceDirName:".",slug:"/rgbgfx.1",permalink:"/docs/v0.5.0/rgbgfx.1",draft:!1,editUrl:"https://github.com/gbdev/rgbds-www2/edit/master/versioned_docs/version-v0.5.0/rgbgfx.1.md",tags:[],version:"v0.5.0",frontMatter:{},sidebar:"nav",previous:{title:"rgbfix(1) \u2014 Game Boy header utility and checksum fixer",permalink:"/docs/v0.5.0/rgbfix.1"},next:{title:"rgbds(7) \u2014 Rednex Game Boy Development System",permalink:"/docs/v0.5.0/rgbds.7"}},c={},p=[{value:"SYNOPSIS",id:"SYNOPSIS",level:2,children:[]},{value:"DESCRIPTION",id:"DESCRIPTION",level:2,children:[]},{value:"ARGUMENTS",id:"ARGUMENTS",level:2,children:[]},{value:"EXAMPLES",id:"EXAMPLES",level:2,children:[]},{value:"BUGS",id:"BUGS",level:2,children:[]},{value:"SEE ALSO",id:"SEE_ALSO",level:2,children:[]},{value:"HISTORY",id:"HISTORY",level:2,children:[]}],h={toc:p};function f(e){var a=e.components,t=(0,s.Z)(e,l);return(0,r.kt)("wrapper",(0,n.Z)({},h,t,{components:a,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"rgbgfx1--game-boy-graphics-converter"},"rgbgfx(1) \u2014 Game Boy graphics converter"),(0,r.kt)("div",{className:"manual-text",dangerouslySetInnerHTML:{__html:'<section class="Sh">\n<h2 class="Sh" id="SYNOPSIS"><a class="permalink" href="#SYNOPSIS">SYNOPSIS</a></h2>\n<table class="Nm">\n  <tr>\n    <td><code class="Nm">rgbgfx</code></td>\n    <td>[<code class="Fl"><a href="#C">-C</a><a href="#D">D</a><a href="#h">h</a><a href="#m">m</a><a href="#u">u</a><a href="#V">V</a><a href="#v">v</a></code>] [<code class="Fl"><a href="#f">-f</a></code> |\n      <code class="Fl"><a href="#F">-F</a></code>] [<code class="Fl"><a href="#a">-a</a></code>\n      <var class="Ar">attrmap</var> | <code class="Fl"><a href="#A">-A</a></code>]\n      [<code class="Fl"><a href="#d">-d</a></code> <var class="Ar">depth</var>]\n      [<code class="Fl"><a href="#o">-o</a></code> <var class="Ar">out_file</var>]\n      [<code class="Fl"><a href="#p">-p</a></code> <var class="Ar">pal_file</var> |\n      <code class="Fl"><a href="#P">-P</a></code>] [<code class="Fl"><a href="#t">-t</a></code>\n      <var class="Ar">tilemap</var> | <code class="Fl"><a href="#T">-T</a></code>]\n      [<code class="Fl"><a href="#x">-x</a></code> <var class="Ar">tiles</var>]\n      <var class="Ar">file</var></td>\n  </tr>\n</table>\n</section>\n<section class="Sh">\n<h2 class="Sh" id="DESCRIPTION"><a class="permalink" href="#DESCRIPTION">DESCRIPTION</a></h2>\n<p class="Pp">The <code class="Nm">rgbgfx</code> program converts PNG images\n    into the Nintendo Game Boy\'s planar tile format.</p>\n<p class="Pp">The resulting colors and their palette indices are determined\n    differently depending on the input PNG file:</p>\n<ul class="Bl-dash">\n  <li>If the file has an embedded palette, that palette\'s color and order are\n      used.</li>\n  <li>If not, and the image only contains shades of gray, rgbgfx maps them to\n      the indices appropriate for each shade. Any undetermined indices are set\n      to respective default shades of gray. For example: if the bit depth is 2\n      and the image contains light gray and black, they become the second and\n      fourth colors, and the first and third colors get set to default white and\n      dark gray. If the image has multiple shades that map to the same index,\n      the palette is instead determined as if the image had color.</li>\n  <li>If the image has color (or the grayscale method failed), the colors are\n      sorted from lightest to darkest.</li>\n</ul>\n<p class="Pp">The input image may not contain more colors than the selected bit\n    depth allows. Transparent pixels are set to palette index 0.</p>\n</section>\n<section class="Sh">\n<h2 class="Sh" id="ARGUMENTS"><a class="permalink" href="#ARGUMENTS">ARGUMENTS</a></h2>\n<p class="Pp">Note that options can be abbreviated as long as the abbreviation\n    is unambiguous: <code class="Fl">--verb</code> is\n    <code class="Fl">--verbose</code>, but <code class="Fl">--ver</code> is\n    invalid because it could also be <code class="Fl">--version</code>. The\n    arguments are as follows:</p>\n<dl class="Bl-tag">\n  <dt id="a"><a class="permalink" href="#a"><code class="Fl">-a</code></a>\n    <var class="Ar">attrmap</var>, <code class="Fl">--attr-map</code>\n    <var class="Ar">attrmap</var></dt>\n  <dd>Generate a file of tile mirroring attributes for OAM or (CGB-only)\n      background tiles. For each tile in the input file, a byte is written\n      representing the dimensions that the associated tile in the output file\n      should be mirrored. Useful in combination with <code class="Fl">-m</code>\n      to keep track the mirror direction of mirrored duplicate tiles.</dd>\n  <dt id="A"><a class="permalink" href="#A"><code class="Fl">-A</code></a>,\n    <code class="Fl">--output-attr-map</code></dt>\n  <dd>Same as <code class="Fl">-a</code>, but the attrmap file output name is\n      made by taking the input filename, removing the file extension, and\n      appending <span class="Pa">.attrmap</span>.</dd>\n  <dt id="C"><a class="permalink" href="#C"><code class="Fl">-C</code></a>,\n    <code class="Fl">--color-curve</code></dt>\n  <dd>Use the color curve of the Game Boy Color when generating palettes.</dd>\n  <dt id="D"><a class="permalink" href="#D"><code class="Fl">-D</code></a>,\n    <code class="Fl">--debug</code></dt>\n  <dd>Debug features are enabled.</dd>\n  <dt id="d"><a class="permalink" href="#d"><code class="Fl">-d</code></a>\n    <var class="Ar">depth</var>, <code class="Fl">--depth</code>\n    <var class="Ar">depth</var></dt>\n  <dd>The bit depth of the output image (either 1 or 2). By default, the bit\n      depth is 2 (two bits per pixel).</dd>\n  <dt id="f"><a class="permalink" href="#f"><code class="Fl">-f</code></a>,\n    <code class="Fl">--fix</code></dt>\n  <dd>Fix the input PNG file to be a correctly indexed image.</dd>\n  <dt id="F"><a class="permalink" href="#F"><code class="Fl">-F</code></a>,\n    <code class="Fl">--fix-and-save</code></dt>\n  <dd>Same as <code class="Fl">-f</code>, but additionally, the supplied command\n      line parameters are saved within the PNG and will be loaded and\n      automatically used next time.</dd>\n  <dt id="h"><a class="permalink" href="#h"><code class="Fl">-h</code></a>,\n    <code class="Fl">--horizontal</code></dt>\n  <dd>Lay out tiles in column-major order (column by column), instead of the\n      default row-major order (line by line). Especially useful for\n      &quot;8x16&quot; OBJ mode, if the input image is 16 pixels tall.</dd>\n  <dt id="m"><a class="permalink" href="#m"><code class="Fl">-m</code></a>,\n    <code class="Fl">--mirror-tiles</code></dt>\n  <dd>Truncate tiles by checking for tiles that are mirrored versions of others\n      and omitting these from the output file. Useful with tilemaps and attrmaps\n      together to keep track of the duplicated tiles and the dimension mirrored.\n      Tiles are checked for horizontal, vertical, and horizontal-vertical\n      mirroring. Implies <code class="Fl">-u</code>.</dd>\n  <dt id="o"><a class="permalink" href="#o"><code class="Fl">-o</code></a>\n    <var class="Ar">out_file</var>, <code class="Fl">--output</code>\n    <var class="Ar">out_file</var></dt>\n  <dd>The name of the output file.</dd>\n  <dt id="p"><a class="permalink" href="#p"><code class="Fl">-p</code></a>\n    <var class="Ar">pal_file</var>, <code class="Fl">--palette</code>\n    <var class="Ar">pal_file</var></dt>\n  <dd>Output the image\'s palette in standard GBC palette format: bytes (8 bytes\n      for two bits per pixel, 4 bytes for one bit per pixel) containing the\n      RGB15 values in little-endian byte order. If the palette contains too few\n      colors, the remaining entries are set to black.</dd>\n  <dt id="P"><a class="permalink" href="#P"><code class="Fl">-P</code></a>,\n    <code class="Fl">--output-palette</code></dt>\n  <dd>Same as <code class="Fl">-p</code>, but the palette file output name is\n      made by taking the input PNG file\'s filename, removing the file extension,\n      and appending <span class="Pa">.pal</span>.</dd>\n  <dt id="t"><a class="permalink" href="#t"><code class="Fl">-t</code></a>\n    <var class="Ar">tilemap</var>, <code class="Fl">--tilemap</code>\n    <var class="Ar">tilemap</var></dt>\n  <dd>Generate a file of tile indices. For each tile in the input file, a byte\n      is written representing the index of the associated tile in the output\n      file. Useful in combination with <code class="Fl">-u</code> or\n      <code class="Fl">-m</code> to keep track of duplicate tiles.</dd>\n  <dt id="T"><a class="permalink" href="#T"><code class="Fl">-T</code></a>,\n    <code class="Fl">--output-tilemap</code></dt>\n  <dd>Same as <code class="Fl">-t</code>, but the tilemap file output name is\n      made by taking the input filename, removing the file extension, and\n      appending <span class="Pa">.tilemap</span>.</dd>\n  <dt id="u"><a class="permalink" href="#u"><code class="Fl">-u</code></a>,\n    <code class="Fl">--unique-tiles</code></dt>\n  <dd>Truncate tiles by checking for tiles that are exact duplicates of others\n      and omitting these from the output file. Useful with tilemaps to keep\n      track of the duplicated tiles.</dd>\n  <dt id="V"><a class="permalink" href="#V"><code class="Fl">-V</code></a>,\n    <code class="Fl">--version</code></dt>\n  <dd>Print the version of the program and exit.</dd>\n  <dt id="v"><a class="permalink" href="#v"><code class="Fl">-v</code></a>,\n    <code class="Fl">--verbose</code></dt>\n  <dd>Verbose. Print errors when the command line parameters and the parameters\n      in the PNG file don\'t match.</dd>\n  <dt id="x"><a class="permalink" href="#x"><code class="Fl">-x</code></a>\n    <var class="Ar">tiles</var>, <code class="Fl">--trim-end</code>\n    <var class="Ar">tiles</var></dt>\n  <dd>Trim the end of the output file by this many tiles.</dd>\n</dl>\n</section>\n<section class="Sh">\n<h2 class="Sh" id="EXAMPLES"><a class="permalink" href="#EXAMPLES">EXAMPLES</a></h2>\n<p class="Pp">The following will take a PNG file with a bit depth of 1, 2, or 8,\n    and output planar 2bpp data:</p>\n<p class="Pp"></p>\n<div class="Bd Bd-indent">$ rgbgfx -o out.2bpp in.png</div>\n<p class="Pp">The following creates a planar 2bpp file with only unique tiles,\n    and its tilemap <span class="Pa">out.tilemap</span>:</p>\n<p class="Pp"></p>\n<div class="Bd Bd-indent">$ rgbgfx -T -u -o out.2bpp in.png</div>\n<p class="Pp">The following creates a planar 2bpp file with only unique tiles\n    <span class="Pa">accounting for tile mirroring</span> and its associated\n    tilemap <span class="Pa">out.tilemap</span> and attrmap\n    <span class="Pa">out.attrmap</span>:</p>\n<p class="Pp"></p>\n<div class="Bd Bd-indent">$ rgbgfx -A -T -m -o out.2bpp in.png</div>\n<p class="Pp">The following will do nothing:</p>\n<p class="Pp"></p>\n<div class="Bd Bd-indent">$ rgbgfx in.png</div>\n</section>\n<section class="Sh">\n<h2 class="Sh" id="BUGS"><a class="permalink" href="#BUGS">BUGS</a></h2>\n<p class="Pp">Please report bugs on\n    <a class="Lk" href="https://github.com/gbdev/rgbds/issues">GitHub</a>.</p>\n</section>\n<section class="Sh">\n<h2 class="Sh" id="SEE_ALSO"><a class="permalink" href="#SEE_ALSO">SEE\n  ALSO</a></h2>\n<p class="Pp"><a class="Xr" href="./rgbds.7">rgbds(7)</a>,\n    <a class="Xr" href="./rgbasm.1">rgbasm(1)</a>,\n    <a class="Xr" href="./rgblink.1">rgblink(1)</a>,\n    <a class="Xr" href="./rgbfix.1">rgbfix(1)</a>,\n    <a class="Xr" href="./gbz80.7">gbz80(7)</a></p>\n</section>\n<section class="Sh">\n<h2 class="Sh" id="HISTORY"><a class="permalink" href="#HISTORY">HISTORY</a></h2>\n<p class="Pp"><code class="Nm">rgbgfx</code> was created by\n    <span class="An">stag019</span> to be included in RGBDS. It is now\n    maintained by a number of contributors at\n    <a class="Lk" href="https://github.com/gbdev/rgbds">https://github.com/gbdev/rgbds</a>.</p>\n</section>\n'}}))}f.isMDXComponent=!0}}]);