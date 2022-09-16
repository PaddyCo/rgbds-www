(self.webpackChunkrgbds_www=self.webpackChunkrgbds_www||[]).push([[930],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return p},kt:function(){return h}});var a=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=a.createContext({}),m=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},p=function(e){var t=m(e.components);return a.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},c=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),c=m(n),h=i,u=c["".concat(l,".").concat(h)]||c[h]||d[h]||o;return n?a.createElement(u,r(r({ref:t},p),{},{components:n})):a.createElement(u,r({ref:t},p))}));function h(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,r=new Array(o);r[0]=c;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:i,r[1]=s;for(var m=2;m<o;m++)r[m]=n[m];return a.createElement.apply(null,r)}return a.createElement.apply(null,n)}c.displayName="MDXCreateElement"},66993:function(e,t,n){var a=n(44908),i=a.find((function(e){return-1==e.indexOf("-")}));e.exports={versions:a,latestStable:i}},51906:function(e,t,n){"use strict";n.r(t),n.d(t,{LatestStableLink:function(){return h},contentTitle:function(){return p},default:function(){return f},frontMatter:function(){return m},metadata:function(){return d},toc:function(){return c}});var a=n(83117),i=n(80102),o=(n(67294),n(3905)),r=n(39960),s=n(66993),l=["components"],m={title:"Game Boy symbol format specification"},p=void 0,d={type:"mdx",permalink:"/sym",source:"@site/src/pages/sym.mdx",title:"Game Boy symbol format specification",description:"Purpose & Context",frontMatter:{title:"Game Boy symbol format specification"}},c=[{value:"Purpose &amp; Context",id:"purpose--context",level:2},{value:"File format specification",id:"file-format-specification",level:2},{value:"Tokenization",id:"tokenization",level:3},{value:"Line processing",id:"line-processing",level:3},{value:"Symbols",id:"symbols",level:4},{value:"Location",id:"location",level:5},{value:"Name",id:"name",level:5},{value:"Metadata",id:"metadata",level:5},{value:"Memory regions",id:"memory-regions",level:2},{value:"Pitfalls",id:"pitfalls",level:2},{value:"Auto-loading",id:"auto-loading",level:2}],h=function(e){var t=e.children,n=e.to;return(0,o.kt)(r.Z,{to:"/docs/"+s.latestStable+"/"+n,mdxType:"Link"},t)},u={toc:c,LatestStableLink:h};function f(e){var t=e.components,n=(0,i.Z)(e,l);return(0,o.kt)("wrapper",(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"game-boy-symbol-sym-file-format-specification"},"Game Boy symbol (",(0,o.kt)("inlineCode",{parentName:"h1"},".sym"),") file format specification"),(0,o.kt)("h2",{id:"purpose--context"},"Purpose & Context"),(0,o.kt)("p",null,'Game Boy ROM files contain pure binary data, but no extra info about their contents.\nIn particular, symbol information is lacking when debugging or reverse-engineering such ROMs.\nSymbol files, or "sym files" for short, aim to be companions to Game Boy ROM files that provide exactly that: symbol information.'),(0,o.kt)("p",null,"Sym files have been around for a long time (the ",(0,o.kt)("a",{parentName:"p",href:"http://problemkaputt.de/gmb.htm"},"no$gmb")," emulator supported them, so it is safe to assume since at least the early 2000's), but the format was always loosely defined, leading to subtle incompatibilities.\nThis document aims to propose a standard for the format and usage of sym files.\nModifications, etc. should be suggested by ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/gbdev/rgbds-www/issues"},"opening an issue")," or ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/gbdev/rgbds-www/discussions"},"starting a discussion")," on this website's source repository, whichever is more appropriate."),(0,o.kt)("p",null,"Extensions to this format are known to exist (",(0,o.kt)("a",{parentName:"p",href:"https://github.com/mattcurrie/mgbdis/#symbol-files"},"example"),"), but they tend to be specific to a certain use case, and are generally a backwards-compatible superset of what are described below.\nThe format is kept human-friendly, since some sym files are written manually, for example when disassembling ROMs."),(0,o.kt)("p",null,"Note also that ",(0,o.kt)("a",{parentName:"p",href:"https://wla-dx.readthedocs.io/en/latest/symbols.html"},"wla-dx's sym files")," are much more complex (and complete) than this format.\nRGBDS aims to keep sym files simple, and instead chooses to output other data in different files, such as map files",(0,o.kt)("sup",{parentName:"p",id:"fnref-1"},(0,o.kt)("a",{parentName:"sup",href:"#fn-1",className:"footnote-ref"},"1")),"."),(0,o.kt)("h2",{id:"file-format-specification"},"File format specification"),(0,o.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},'The key words "MUST", "MUST NOT", "REQUIRED", "SHALL", "SHALL NOT", "SHOULD", "SHOULD NOT", "RECOMMENDED", "MAY", and "OPTIONAL" in this document are to be interpreted as described in ',(0,o.kt)("a",{parentName:"p",href:"https://datatracker.ietf.org/doc/html/rfc2119"},"RFC 2119"),"."),(0,o.kt)("p",{parentName:"div"},"Numbers are written in decimal by default, or hexadecimal if prefixed with a ",(0,o.kt)("inlineCode",{parentName:"p"},"$"),", unless otherwise specified."))),(0,o.kt)("p",null,"Throughout this specification, exactly two characters are considered ",(0,o.kt)("strong",{parentName:"p"},"whitespace"),": ASCII spaces (",(0,o.kt)("inlineCode",{parentName:"p"}," "),", U+0020), and tabs (",(0,o.kt)("inlineCode",{parentName:"p"},"\\t"),', U+0009).\nOther Unicode "White Space" characters must ',(0,o.kt)("em",{parentName:"p"},"not")," be treated as whitespace."),(0,o.kt)("h3",{id:"tokenization"},"Tokenization"),(0,o.kt)("p",null,"Line endings can be either LF-only (",(0,o.kt)("inlineCode",{parentName:"p"},"\\n"),", U+000A) or CRLF (",(0,o.kt)("inlineCode",{parentName:"p"},"\\r\\n"),", U+000D U+000A); they need not be consistent throughout the document.\nThe character encoding must be well-formed UTF-8 (without BOM); however, it is strongly encouraged to stick to ASCII characters for portability."),(0,o.kt)("p",null,"Especially since they are intended to be somewhat human-readable, sym files can contain comments.\nComments begin with a semicolon (",(0,o.kt)("inlineCode",{parentName:"p"},";"),", U+003B) anywhere in a line, all the way to the end of that line.\nSemicolons cannot be escaped, as they are not otherwise valid within an entry.\nComments should be ignored by the implementation."),(0,o.kt)("p",null,"After removing the comment (if any), the line shall be split into non-empty ",(0,o.kt)("strong",{parentName:"p"},"tokens"),", separated by one or more consecutive whitespace characters.\nLeading or trailing whitespace must be ignored."),(0,o.kt)("h3",{id:"line-processing"},"Line processing"),(0,o.kt)("p",null,"Unless otherwise specified, if any part of a line cannot be processed by the implementation, the whole line shall be ignored, and a warning should be produced.\nFailure to process a line can be either from a violation of this spec (e.g. an invalid symbol name), or from exceeding internal capacities (e.g. a symbol name too long for an internal buffer)."),(0,o.kt)("p",null,"A line without any tokens shall be silently ignored, to permit empty lines, even if they contain whitespace and/or a comment."),(0,o.kt)("p",null,"A line with only one token shall be ignored, being reserved for future extensions.\nEncountering one may produce a warning."),(0,o.kt)("p",null,"Otherwise, the line defines a single ",(0,o.kt)("strong",{parentName:"p"},"symbol"),": the first token provides its location, the second token provides its name, and further tokens (if any) provide extra metadata."),(0,o.kt)("h4",{id:"symbols"},"Symbols"),(0,o.kt)("p",null,"A symbol is uniquely defined by the combination of its location and its name; symbol names are case-sensitive.\nIf the same symbol (identical name ",(0,o.kt)("em",{parentName:"p"},"and")," identical location) is defined more than once, all but one of the definitions must be silently ignored."),(0,o.kt)("p",null,"Two or more definitions with the same name but different addresses are thus considered to define different symbols.\nNone of these definitions shall be ignored, nor shall they cause parsing to fail in any capacity.\nImplementations may warn about such cases, not necessarily when the sym file is loaded; if a warning is displayed when loading the file, no more than one warning should be produced per unique name.\nImplementations may later handle ambiguous references to symbols by name in any way they see fit, including by producing a warning or an error."),(0,o.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"Rationale")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},'For example, "displaying symbol names instead of memory addresses" accomodates ambiguities just fine, however a "go to symbol by name" feature wouldn\'t.'))),(0,o.kt)("h5",{id:"location"},"Location"),(0,o.kt)("p",null,"A location can have one of the following three forms:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"<number>:<number>"),", with each ",(0,o.kt)("inlineCode",{parentName:"li"},"<number>")," indicating the location's bank and address respectively;"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"BOOT:<number>"),", indicating an address in the boot ROM;"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"<number>"),", indicating an address irrespective of bank, i.e. a location in every possible bank.")),(0,o.kt)("p",null,"Implementations should not accept different forms, as they are reserved for future extensions."),(0,o.kt)("p",null,"All forms are case-insensitive; in all cases, ",(0,o.kt)("inlineCode",{parentName:"p"},"<number>")," is a sequence of hexadecimal digits, without any prefixes indicating the base (like ",(0,o.kt)("inlineCode",{parentName:"p"},"0x")," or ",(0,o.kt)("inlineCode",{parentName:"p"},"$"),").\nSymbols defined with a location in one of the latter two forms may be ignored if such address spaces are not supported by the implementation; a warning may be emitted then.\nFor the first form only, a warning may be issued if the location is nonsensical for the current hardware configuration (e.g. ",(0,o.kt)("inlineCode",{parentName:"p"},"2:9800"),")."),(0,o.kt)("p",null,"The address must be in 16-bit range (0 to $FFFF inclusive), the bank must be in 32-bit range (0 to $FFFFFFFF inclusive); implementations may abandon processing the line if either number is larger than these limits.\nImplementations may accept bank numbers higher than $FFFFFFFF."),(0,o.kt)("p",null,"Two locations are considered identical if they have the same bank (including none) and the same address.\nTwo distinct symbols can have identical locations; in particular, ",(0,o.kt)(h,{to:"rgbasm.5#Unions",mdxType:"LatestStableLink"},"unions")," facilitate this."),(0,o.kt)("p",null,"Sym files may or may not be sorted by location; implementations must be able to handle both.\n(For example, RGBLINK before v0.4.0 output symbols in the same order that it read them from its input files.)"),(0,o.kt)("h5",{id:"name"},"Name"),(0,o.kt)("p",null,"Symbol names must match the regex ",(0,o.kt)("inlineCode",{parentName:"p"},"[A-Za-z_]([A-Za-z0-9_@#$.]|\\\\u[A-Za-z0-9]{4}|\\\\U[A-Za-z0-9]{8})*"),"; the escape sequences ",(0,o.kt)("inlineCode",{parentName:"p"},"\\uYYYY")," or ",(0,o.kt)("inlineCode",{parentName:"p"},"\\UXXXXYYYY")," allow representing otherwise disallowed Unicode characters by their short identifier (",(0,o.kt)("inlineCode",{parentName:"p"},"\\uYYYY")," is a shorthand for ",(0,o.kt)("inlineCode",{parentName:"p"},"\\U0000YYYY"),").\nShort identifiers in the ranges 0000\u2013009F and D800\u2013DFFF are not allowed."),(0,o.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},'See, for example, "Universal character names" (6.4.3 in the C11 standard / ',(0,o.kt)("a",{parentName:"p",href:"https://www.open-std.org/jtc1/sc22/wg14/www/docs/n1570.pdf"},"N1570 draft"),")."))),(0,o.kt)("p",null,"A symbol whose name does not contain any periods (",(0,o.kt)("inlineCode",{parentName:"p"},"."),", U+002E) is a ",(0,o.kt)("strong",{parentName:"p"},"global symbol"),".\nIf a symbol's name contains exactly one period, it is a ",(0,o.kt)("strong",{parentName:"p"},"local symbol"),"; the portion up to but not including the period is the ",(0,o.kt)("strong",{parentName:"p"},"global portion"),", the rest is the ",(0,o.kt)("strong",{parentName:"p"},"local portion"),"; neither shall be empty.\nA symbol with two or more periods in its name shall be processed in an implementation-defined manner, which may include rejecting or ignoring it."),(0,o.kt)("p",null,"A local symbol is ",(0,o.kt)("strong",{parentName:"p"},"attached")," to a global symbol if:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"The global symbol's name is equal to the local symbol's global portion, and"),(0,o.kt)("li",{parentName:"ul"},"Both symbols have the same ",(0,o.kt)("a",{parentName:"li",href:"#location"},"location form"),", and",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"If both symbols are banked (first form), their banks are equal, and"))),(0,o.kt)("li",{parentName:"ul"},"The global symbol's address is lower or equal to the local symbol's.")),(0,o.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"Attached local symbols may have their names shortened in presentation to just the local portion (i.e., the period and everything that follows)."))),(0,o.kt)("h5",{id:"metadata"},"Metadata"),(0,o.kt)("p",null,"Tokens after the symbol's name provide additional metadata for the symbol.\nUnrecognized metadata tokens shall be ignored, but shall not affect the rest of the line's parsing.\nImplementations should raise a warning when encountering unrecognized metadata tokens, except for tokens beginning with ",(0,o.kt)("inlineCode",{parentName:"p"},"@")," (U+0040), which are reserved for private-use semantics and must be silently ignored.\nThis version of the specification defines no standard metadata tokens."),(0,o.kt)("h2",{id:"memory-regions"},"Memory regions"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"This section is non-normative.")),(0,o.kt)("p",null,"Except for ",(0,o.kt)("inlineCode",{parentName:"p"},"BOOT"),", sym files do not carry information about the memory region (ROM0, ROMX, VRAM, SRAM, WRAM0, WRAMX, Echo RAM, OAM, I/O, HRAM, IE) a symbol belongs to, but that can be inferred from the address most of the time.\nThis detection is sometimes ambiguous: for example, ",(0,o.kt)("inlineCode",{parentName:"p"},"0:A000")," could be one past the end of VRAM, or at the beginning of SRAM.\nThe following heuristics are suggested:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"If the symbol's bank is in range of exactly one of the candidate regions, assign it to that one. (",(0,o.kt)("em",{parentName:"li"},"There is no ambiguity, e.g. ",(0,o.kt)("inlineCode",{parentName:"em"},"2:A000"),"."),")"),(0,o.kt)("li",{parentName:"ul"},'If the symbol is local and is "attached" to a global symbol (see ',(0,o.kt)("a",{parentName:"li",href:"#name"},"Name")," above), assign it to the same region as the global symbol. (",(0,o.kt)("em",{parentName:"li"},'Local labels should "follow" the global symbol they are attached to, if any.'),")"),(0,o.kt)("li",{parentName:"ul"},'If the symbol\'s name ends with (case-insensitive) "end", assign it to the earlier region. (',(0,o.kt)("em",{parentName:"li"},'This is a common naming convention, and "one-past-end" labels are typically "end markers".'),")"),(0,o.kt)("li",{parentName:"ul"},"If all else fails, assign it to the later region (e.g. ",(0,o.kt)("inlineCode",{parentName:"li"},"0:A000")," would be assigned to SRAM). (",(0,o.kt)("em",{parentName:"li"},"This is correct more often than not in practice."),")")),(0,o.kt)("h2",{id:"pitfalls"},"Pitfalls"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"This section is non-normative.")),(0,o.kt)("p",null,"Note that banking for addresses $0000-7FFF is defined by the ROM's mapper, so implementations should be flexible: the bank number for $0000-3FFF can be different from 0 (",(0,o.kt)("a",{parentName:"p",href:"https://gbdev.io/pandocs/MBC1#mbc1m-1-mib-multi-game-compilation-carts"},"MBC1M"),", ",(0,o.kt)("a",{parentName:"p",href:"https://gbdev.io/pandocs/MMM01"},"MMM01"),", ...), the bank number for $4000-7FFF may be 0 (",(0,o.kt)("a",{parentName:"p",href:"https://gbdev.io/pandocs/nombc"},"mapper-less ROMs"),"), etc.\nNote also that while most ROMs never have more than 256 banks for anything, at least one commercial GBC game (",(0,o.kt)("a",{parentName:"p",href:"https://github.com/gbdev/awesome-gbdev/blob/b8ead97724757651e393be951bfac238ab1f4d64/CartridgeList.csv#L496"},"Densha De Go! 2"),") has more than 256 ROM banks, and homebrew mappers (such as the ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/TwitchPlaysPokemon/tpp1"},"TPP1"),") may support many more."),(0,o.kt)("p",null,"Sym files generally do not contain symbols for the hardware registers ($FF00-FF7F and $FFFF), so implementations are encouraged to provide separate support for those.\n",(0,o.kt)("a",{parentName:"p",href:"https://github.com/gbdev/hardware.inc"},"hardware.inc")," is a good starting point."),(0,o.kt)("h2",{id:"auto-loading"},"Auto-loading"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"This section is non-normative.")),(0,o.kt)("p",null,'Sym files being non-intrusive "companions" of the ROM, the following common practice is suggested for automatically loading a sym file when a ROM is loaded from a path:'),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"From the provided path, strip the file extension (usually ",(0,o.kt)("inlineCode",{parentName:"li"},".gb"),", ",(0,o.kt)("inlineCode",{parentName:"li"},".gbc")," or sometimes ",(0,o.kt)("inlineCode",{parentName:"li"},".sgb"),"; although ",(0,o.kt)("inlineCode",{parentName:"li"},".dmg")," and ",(0,o.kt)("inlineCode",{parentName:"li"},".bin")," have been observed in the wild)."),(0,o.kt)("li",{parentName:"ul"},"Replace that extension with ",(0,o.kt)("inlineCode",{parentName:"li"},".sym"),"."),(0,o.kt)("li",{parentName:"ul"},"If such a file exists, load it.")),(0,o.kt)("p",null,"Implementations may provide another way to load sym files, to reload a sym file by repeating the above detection process, and to unload the sym file."),(0,o.kt)("div",{className:"footnotes"},(0,o.kt)("hr",{parentName:"div"}),(0,o.kt)("ol",{parentName:"div"},(0,o.kt)("li",{parentName:"ol",id:"fn-1"},"Map files remain thus far unspecified. Very few tools rely on information contained in them, so no specification has been written in order to keep that format extensible.",(0,o.kt)("a",{parentName:"li",href:"#fnref-1",className:"footnote-backref"},"\u21a9")))))}f.isMDXComponent=!0},44908:function(e){"use strict";e.exports=JSON.parse('["v0.6.0-welease-cnyandidayte","v0.5.2","v0.5.1","v0.5.0","v0.5.0-rcCar","v0.4.2","v0.4.1","v0.4.0","v0.3.10","v0.3.9","v0.3.8","v0.3.7","v0.3.6","v0.3.5","v0.3.4","v0.3.3","v0.3.2","v0.3.1","v0.3.0"]')}}]);