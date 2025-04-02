import{_ as Q,o as e,c as a,k as t,a as o,Q as s}from"./chunks/framework.1a91c06a.js";const Q2=JSON.parse('{"title":"Submitting data blobs to Celestia","description":"","frontmatter":{"prev":{"text":"Blobstream rollups","link":"/how-to-guides/blobstream-rollups"},"head":[["meta",{"property":"og:title","content":"Submitting data blobs to Celestia | Celestia Docs"}],["meta",{"property":"og:description","content":"The first modular blockchain network."}]]},"headers":[],"relativePath":"how-to-guides/submit-data.md","filePath":"how-to-guides/submit-data.md","lastUpdated":1739323664000}'),n={name:"how-to-guides/submit-data.md"},l=s("",21),T={class:"MathJax",jax:"SVG",style:{direction:"ltr",position:"relative"}},i={style:{overflow:"visible","min-height":"1px","min-width":"1px","vertical-align":"-0.186ex"},xmlns:"http://www.w3.org/2000/svg",width:"34.471ex",height:"1.781ex",role:"img",focusable:"false",viewBox:"0 -705 15236 787","aria-hidden":"true"},r=s("",1),d=[r],c=t("mjx-assistive-mml",{unselectable:"on",display:"inline",style:{top:"0px",left:"0px",clip:"rect(1px, 1px, 1px, 1px)","-webkit-touch-callout":"none","-webkit-user-select":"none","-khtml-user-select":"none","-moz-user-select":"none","-ms-user-select":"none","user-select":"none",position:"absolute",padding:"1px 0px 0px 0px",border:"0px",display:"block",width:"auto",overflow:"hidden"}},[t("math",{xmlns:"http://www.w3.org/1998/Math/MathML"},[t("mtext",null,"Total Fee"),t("mo",null,"="),t("mtext",null,"Gas Limit"),t("mo",null,"×"),t("mtext",null,"Gas Price")])],-1),p=t("p",null,"The gas limit for a transaction is the maximum amount of gas that a user is willing to spend on a transaction. It is determined by both a static fixed cost (FC) and a variable dynamic cost based on the size of each blob involved in the transaction:",-1),h={class:"MathJax",jax:"SVG",style:{direction:"ltr",position:"relative"}},m={style:{overflow:"visible","min-height":"1px","min-width":"1px","vertical-align":"-0.777ex"},xmlns:"http://www.w3.org/2000/svg",width:"50.774ex",height:"2.563ex",role:"img",focusable:"false",viewBox:"0 -789.6 22442.1 1132.9","aria-hidden":"true"},u=s("",1),g=[u],b=t("mjx-assistive-mml",{unselectable:"on",display:"inline",style:{top:"0px",left:"0px",clip:"rect(1px, 1px, 1px, 1px)","-webkit-touch-callout":"none","-webkit-user-select":"none","-khtml-user-select":"none","-moz-user-select":"none","-ms-user-select":"none","user-select":"none",position:"absolute",padding:"1px 0px 0px 0px",border:"0px",display:"block",width:"auto",overflow:"hidden"}},[t("math",{xmlns:"http://www.w3.org/1998/Math/MathML"},[t("mtext",null,"Gas Limit"),t("mo",null,"="),t("mi",null,"F"),t("mi",null,"C"),t("mo",null,"+"),t("munderover",null,[t("mo",{"data-mjx-texclass":"OP"},"∑"),t("mrow",{"data-mjx-texclass":"ORD"},[t("mi",null,"i"),t("mo",null,"="),t("mn",null,"1")]),t("mrow",{"data-mjx-texclass":"ORD"},[t("mi",null,"n")])]),t("mi",null,"S"),t("mi",null,"S"),t("mi",null,"N"),t("mo",{stretchy:"false"},"("),t("msub",null,[t("mi",null,"B"),t("mi",null,"i")]),t("mo",{stretchy:"false"},")"),t("mo",null,"×"),t("mi",null,"S"),t("mi",null,"S"),t("mo",null,"×"),t("mi",null,"G"),t("mi",null,"C"),t("mi",null,"P"),t("mi",null,"B"),t("mi",null,"B")])],-1),y=t("p",null,"Where:",-1),f={class:"MathJax",jax:"SVG",style:{direction:"ltr",position:"relative"}},H={style:{overflow:"visible","min-height":"1px","min-width":"1px","vertical-align":"-0.05ex"},xmlns:"http://www.w3.org/2000/svg",width:"3.414ex",height:"1.645ex",role:"img",focusable:"false",viewBox:"0 -705 1509 727","aria-hidden":"true"},w=s("",1),x=[w],V=t("mjx-assistive-mml",{unselectable:"on",display:"inline",style:{top:"0px",left:"0px",clip:"rect(1px, 1px, 1px, 1px)","-webkit-touch-callout":"none","-webkit-user-select":"none","-khtml-user-select":"none","-moz-user-select":"none","-ms-user-select":"none","user-select":"none",position:"absolute",padding:"1px 0px 0px 0px",border:"0px",display:"block",width:"auto",overflow:"hidden"}},[t("math",{xmlns:"http://www.w3.org/1998/Math/MathML"},[t("mi",null,"F"),t("mi",null,"C")])],-1),L={class:"MathJax",jax:"SVG",style:{direction:"ltr",position:"relative"}},k={style:{overflow:"visible","min-height":"1px","min-width":"1px","vertical-align":"-0.777ex"},xmlns:"http://www.w3.org/2000/svg",width:"14.695ex",height:"2.563ex",role:"img",focusable:"false",viewBox:"0 -789.6 6495.3 1132.9","aria-hidden":"true"},_=s("",1),M=[_],E=t("mjx-assistive-mml",{unselectable:"on",display:"inline",style:{top:"0px",left:"0px",clip:"rect(1px, 1px, 1px, 1px)","-webkit-touch-callout":"none","-webkit-user-select":"none","-khtml-user-select":"none","-moz-user-select":"none","-ms-user-select":"none","user-select":"none",position:"absolute",padding:"1px 0px 0px 0px",border:"0px",display:"block",width:"auto",overflow:"hidden"}},[t("math",{xmlns:"http://www.w3.org/1998/Math/MathML"},[t("munderover",null,[t("mo",{"data-mjx-texclass":"OP"},"∑"),t("mrow",{"data-mjx-texclass":"ORD"},[t("mi",null,"i"),t("mo",null,"="),t("mn",null,"1")]),t("mrow",{"data-mjx-texclass":"ORD"},[t("mi",null,"n")])]),t("mi",null,"S"),t("mi",null,"S"),t("mi",null,"N"),t("mo",{stretchy:"false"},"("),t("msub",null,[t("mi",null,"B"),t("mi",null,"i")]),t("mo",{stretchy:"false"},")")])],-1),v={class:"MathJax",jax:"SVG",style:{direction:"ltr",position:"relative"}},Z={style:{overflow:"visible","min-height":"1px","min-width":"1px","vertical-align":"-0.025ex"},xmlns:"http://www.w3.org/2000/svg",width:"0.781ex",height:"1.52ex",role:"img",focusable:"false",viewBox:"0 -661 345 672","aria-hidden":"true"},C=t("g",{stroke:"currentColor",fill:"currentColor","stroke-width":"0",transform:"scale(1,-1)"},[t("g",{"data-mml-node":"math"},[t("g",{"data-mml-node":"mi"},[t("path",{"data-c":"1D456",d:"M184 600Q184 624 203 642T247 661Q265 661 277 649T290 619Q290 596 270 577T226 557Q211 557 198 567T184 600ZM21 287Q21 295 30 318T54 369T98 420T158 442Q197 442 223 419T250 357Q250 340 236 301T196 196T154 83Q149 61 149 51Q149 26 166 26Q175 26 185 29T208 43T235 78T260 137Q263 149 265 151T282 153Q302 153 302 143Q302 135 293 112T268 61T223 11T161 -11Q129 -11 102 10T74 74Q74 91 79 106T122 220Q160 321 166 341T173 380Q173 404 156 404H154Q124 404 99 371T61 287Q60 286 59 284T58 281T56 279T53 278T49 278T41 278H27Q21 284 21 287Z",style:{"stroke-width":"3"}})])])],-1),F=[C],B=t("mjx-assistive-mml",{unselectable:"on",display:"inline",style:{top:"0px",left:"0px",clip:"rect(1px, 1px, 1px, 1px)","-webkit-touch-callout":"none","-webkit-user-select":"none","-khtml-user-select":"none","-moz-user-select":"none","-ms-user-select":"none","user-select":"none",position:"absolute",padding:"1px 0px 0px 0px",border:"0px",display:"block",width:"auto",overflow:"hidden"}},[t("math",{xmlns:"http://www.w3.org/1998/Math/MathML"},[t("mi",null,"i")])],-1),D={class:"MathJax",jax:"SVG",style:{direction:"ltr",position:"relative"}},P={style:{overflow:"visible","min-height":"1px","min-width":"1px","vertical-align":"-0.025ex"},xmlns:"http://www.w3.org/2000/svg",width:"0.781ex",height:"1.52ex",role:"img",focusable:"false",viewBox:"0 -661 345 672","aria-hidden":"true"},S=t("g",{stroke:"currentColor",fill:"currentColor","stroke-width":"0",transform:"scale(1,-1)"},[t("g",{"data-mml-node":"math"},[t("g",{"data-mml-node":"mi"},[t("path",{"data-c":"1D456",d:"M184 600Q184 624 203 642T247 661Q265 661 277 649T290 619Q290 596 270 577T226 557Q211 557 198 567T184 600ZM21 287Q21 295 30 318T54 369T98 420T158 442Q197 442 223 419T250 357Q250 340 236 301T196 196T154 83Q149 61 149 51Q149 26 166 26Q175 26 185 29T208 43T235 78T260 137Q263 149 265 151T282 153Q302 153 302 143Q302 135 293 112T268 61T223 11T161 -11Q129 -11 102 10T74 74Q74 91 79 106T122 220Q160 321 166 341T173 380Q173 404 156 404H154Q124 404 99 371T61 287Q60 286 59 284T58 281T56 279T53 278T49 278T41 278H27Q21 284 21 287Z",style:{"stroke-width":"3"}})])])],-1),A=[S],q=t("mjx-assistive-mml",{unselectable:"on",display:"inline",style:{top:"0px",left:"0px",clip:"rect(1px, 1px, 1px, 1px)","-webkit-touch-callout":"none","-webkit-user-select":"none","-khtml-user-select":"none","-moz-user-select":"none","-ms-user-select":"none","user-select":"none",position:"absolute",padding:"1px 0px 0px 0px",border:"0px",display:"block",width:"auto",overflow:"hidden"}},[t("math",{xmlns:"http://www.w3.org/1998/Math/MathML"},[t("mi",null,"i")])],-1),I={class:"MathJax",jax:"SVG",style:{direction:"ltr",position:"relative"}},j={style:{overflow:"visible","min-height":"1px","min-width":"1px","vertical-align":"-0.05ex"},xmlns:"http://www.w3.org/2000/svg",width:"2.919ex",height:"1.645ex",role:"img",focusable:"false",viewBox:"0 -705 1290 727","aria-hidden":"true"},z=s("",1),G=[z],N=t("mjx-assistive-mml",{unselectable:"on",display:"inline",style:{top:"0px",left:"0px",clip:"rect(1px, 1px, 1px, 1px)","-webkit-touch-callout":"none","-webkit-user-select":"none","-khtml-user-select":"none","-moz-user-select":"none","-ms-user-select":"none","user-select":"none",position:"absolute",padding:"1px 0px 0px 0px",border:"0px",display:"block",width:"auto",overflow:"hidden"}},[t("math",{xmlns:"http://www.w3.org/1998/Math/MathML"},[t("mi",null,"S"),t("mi",null,"S")])],-1),R={class:"MathJax",jax:"SVG",style:{direction:"ltr",position:"relative"}},O={style:{overflow:"visible","min-height":"1px","min-width":"1px","vertical-align":"-0.05ex"},xmlns:"http://www.w3.org/2000/svg",width:"8.631ex",height:"1.645ex",role:"img",focusable:"false",viewBox:"0 -705 3815 727","aria-hidden":"true"},J=s("",1),U=[J],X=t("mjx-assistive-mml",{unselectable:"on",display:"inline",style:{top:"0px",left:"0px",clip:"rect(1px, 1px, 1px, 1px)","-webkit-touch-callout":"none","-webkit-user-select":"none","-khtml-user-select":"none","-moz-user-select":"none","-ms-user-select":"none","user-select":"none",position:"absolute",padding:"1px 0px 0px 0px",border:"0px",display:"block",width:"auto",overflow:"hidden"}},[t("math",{xmlns:"http://www.w3.org/1998/Math/MathML"},[t("mi",null,"G"),t("mi",null,"C"),t("mi",null,"P"),t("mi",null,"B"),t("mi",null,"B")])],-1),$=s("",32);function K(W,Y,t2,e2,a2,s2){return e(),a("div",null,[l,t("p",null,[t("mjx-container",T,[(e(),a("svg",i,d)),c])]),p,t("p",null,[t("mjx-container",h,[(e(),a("svg",m,g)),b])]),y,t("ul",null,[t("li",null,[t("mjx-container",f,[(e(),a("svg",H,x)),V]),o(" = Fixed Cost, is a static value (65,000 gas)")]),t("li",null,[t("mjx-container",L,[(e(),a("svg",k,M)),E]),o(" = SparseSharesNeeded for the "),t("mjx-container",v,[(e(),a("svg",Z,F)),B]),o("th Blob, is the number of shares needed for the "),t("mjx-container",D,[(e(),a("svg",P,A)),q]),o("th blob in the transaction")]),t("li",null,[t("mjx-container",I,[(e(),a("svg",j,G)),N]),o(" = Share Size, is the size of each share")]),t("li",null,[t("mjx-container",R,[(e(),a("svg",O,U)),X]),o(" = Gas Cost Per Blob Byte, is a parameter that could potentially be adjusted through the system's governance mechanisms.")])]),$])}const n2=Q(n,[["render",K]]);export{Q2 as __pageData,n2 as default};
