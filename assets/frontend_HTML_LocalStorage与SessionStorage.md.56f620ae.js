import{_ as s,c as a,o as n,a as e}from"./app.d69f0574.js";const b=JSON.parse('{"title":"localStorage\u4E0EsessionStorage","description":"","frontmatter":{},"headers":[{"level":2,"title":"\u76F8\u540C\u70B9","slug":"\u76F8\u540C\u70B9","link":"#\u76F8\u540C\u70B9","children":[]},{"level":2,"title":"\u4E0D\u540C\u70B9","slug":"\u4E0D\u540C\u70B9","link":"#\u4E0D\u540C\u70B9","children":[]},{"level":2,"title":"\u5E38\u7528\u64CD\u4F5C","slug":"\u5E38\u7528\u64CD\u4F5C","link":"#\u5E38\u7528\u64CD\u4F5C","children":[]}],"relativePath":"frontend/HTML/LocalStorage\u4E0ESessionStorage.md","lastUpdated":1661926357000}'),l={name:"frontend/HTML/LocalStorage\u4E0ESessionStorage.md"},o=e(`<h1 id="localstorage\u4E0Esessionstorage" tabindex="-1">localStorage\u4E0EsessionStorage <a class="header-anchor" href="#localstorage\u4E0Esessionstorage" aria-hidden="true">#</a></h1><p><code>localStorage</code>\u548C<code>sessionStorage</code>\u662F<code>HTML5</code>\u63D0\u4F9B\u7684\u5BF9\u4E8E<code>Web</code>\u5B58\u50A8\u7684\u89E3\u51B3\u65B9\u6848\u3002</p><h2 id="\u76F8\u540C\u70B9" tabindex="-1">\u76F8\u540C\u70B9 <a class="header-anchor" href="#\u76F8\u540C\u70B9" aria-hidden="true">#</a></h2><ul><li>\u90FD\u4E0E<code>HTTP</code>\u65E0\u5173\uFF0C\u662F<code>HTML5</code>\u63D0\u4F9B\u7684\u6807\u51C6\uFF0C\u5F53\u53D1\u8D77<code>HTTP</code>\u8BF7\u6C42\u65F6\u4E0D\u4F1A\u4E0E<code>Cookie</code>\u4E00\u6837\u81EA\u52A8\u643A\u5E26\u3002</li><li>\u90FD\u662F\u4EE5\u952E\u503C\u5BF9\u7684\u5F62\u5F0F\u5B58\u5728\uFF0C\u5373<code>Key-Value</code>\u5F62\u5F0F\uFF0C\u5E38\u7528\u7684<code>Api</code>\u4E5F\u76F8\u540C\u3002</li><li>\u5B58\u50A8\u7C7B\u578B\u90FD\u662F<code>String</code>\u7C7B\u578B\uFF0C\u5F53\u8FDB\u884C\u5B58\u50A8\u65F6\uFF0C\u4F1A\u8C03\u7528<code>toString()</code>\u65B9\u6CD5\u8F6C\u4E3A<code>String</code>\u7C7B\u578B\u3002</li><li>\u5BF9\u4E8E\u6BCF\u4E2A\u57DF\u5BB9\u91CF\u662F\u6709\u9650\u7684\uFF0C\u4E0D\u540C\u6D4F\u89C8\u5668\u4E0D\u4E00\u6837\uFF0C\u5927\u90E8\u5206\u5B58\u50A8\u4E3A<code>5M</code>\u5DE6\u53F3\u3002</li></ul><h2 id="\u4E0D\u540C\u70B9" tabindex="-1">\u4E0D\u540C\u70B9 <a class="header-anchor" href="#\u4E0D\u540C\u70B9" aria-hidden="true">#</a></h2><ul><li><code>localStorage</code>\u7528\u4E8E\u6301\u4E45\u5316\u7684\u672C\u5730\u5B58\u50A8\uFF0C\u9664\u975E\u4E3B\u52A8\u5220\u9664\u6570\u636E\uFF0C\u5426\u5219\u6570\u636E\u662F\u6C38\u8FDC\u4E0D\u4F1A\u8FC7\u671F\u7684\u3002</li><li><code>SessionStorage</code>\u4F1A\u5728\u7528\u6237\u5173\u95ED\u6D4F\u89C8\u5668\u540E\uFF0C\u5373\u4F1A\u8BDD\u7ED3\u675F\u540E\uFF0C\u6570\u636E\u5931\u6548\uFF1B<code>SessionStorage</code>\u4E0E\u670D\u52A1\u7AEF<code>Session</code>\u65E0\u5173\u3002</li></ul><h2 id="\u5E38\u7528\u64CD\u4F5C" tabindex="-1">\u5E38\u7528\u64CD\u4F5C <a class="header-anchor" href="#\u5E38\u7528\u64CD\u4F5C" aria-hidden="true">#</a></h2><ul><li>\u50A8\u5B58\u6570\u636E</li></ul><div class="language-javascript line-numbers-mode"><button class="copy"></button><span class="lang">javascript</span><pre><code><span class="line"><span style="color:#C9D1D9;">localStorage.</span><span style="color:#D2A8FF;">setItem</span><span style="color:#C9D1D9;">(</span><span style="color:#A5D6FF;">&#39;key&#39;</span><span style="color:#C9D1D9;">, </span><span style="color:#A5D6FF;">&#39;value&#39;</span><span style="color:#C9D1D9;">);</span></span>
<span class="line"><span style="color:#C9D1D9;">sessionStorage.</span><span style="color:#D2A8FF;">setItem</span><span style="color:#C9D1D9;">(</span><span style="color:#A5D6FF;">&#39;key&#39;</span><span style="color:#C9D1D9;">, </span><span style="color:#A5D6FF;">&#39;value&#39;</span><span style="color:#C9D1D9;">);</span></span>
<span class="line"><span style="color:#8B949E;">/**</span></span>
<span class="line"><span style="color:#8B949E;"> * \u7531\u4E8E\u5B58\u50A8\u6570\u636E\u4F1A\u8C03\u7528 toString() \u65B9\u6CD5</span></span>
<span class="line"><span style="color:#8B949E;"> * Object \u7C7B\u578B\u4F1A\u5B58\u50A8\u4E3A [object Object] \u5B57\u7B26\u4E32</span></span>
<span class="line"><span style="color:#8B949E;"> * \u6240\u4EE5\u8FDB\u884C\u5B58\u50A8\u65F6\u9700\u8C03\u7528 JSON.stringify() \u8F6C\u5316\u4E3A\u5B57\u7B26\u4E32</span></span>
<span class="line"><span style="color:#8B949E;"> * \u53D6\u51FA\u65F6\u8C03\u7528 JSON.parse() \u5C06\u5B57\u7B26\u4E32\u8F6C\u56DE\u5BF9\u8C61</span></span>
<span class="line"><span style="color:#8B949E;"> */</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br></div></div><ul><li>\u8BFB\u53D6\u6570\u636E</li></ul><div class="language-javascript line-numbers-mode"><button class="copy"></button><span class="lang">javascript</span><pre><code><span class="line"><span style="color:#C9D1D9;">localStorage.</span><span style="color:#D2A8FF;">getItem</span><span style="color:#C9D1D9;">(</span><span style="color:#A5D6FF;">&#39;key&#39;</span><span style="color:#C9D1D9;">);</span></span>
<span class="line"><span style="color:#C9D1D9;">sessionStorage.</span><span style="color:#D2A8FF;">getItem</span><span style="color:#C9D1D9;">(</span><span style="color:#A5D6FF;">&#39;key&#39;</span><span style="color:#C9D1D9;">);</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><ul><li>\u5220\u9664\u6570\u636E</li></ul><div class="language-javascript line-numbers-mode"><button class="copy"></button><span class="lang">javascript</span><pre><code><span class="line"><span style="color:#C9D1D9;">localStorage.</span><span style="color:#D2A8FF;">removeItem</span><span style="color:#C9D1D9;">(</span><span style="color:#A5D6FF;">&#39;key&#39;</span><span style="color:#C9D1D9;">);</span></span>
<span class="line"><span style="color:#C9D1D9;">sessionStorage.</span><span style="color:#D2A8FF;">removeItem</span><span style="color:#C9D1D9;">(</span><span style="color:#A5D6FF;">&#39;key&#39;</span><span style="color:#C9D1D9;">);</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><ul><li>\u6E05\u7A7A\u6570\u636E</li></ul><div class="language-javascript line-numbers-mode"><button class="copy"></button><span class="lang">javascript</span><pre><code><span class="line"><span style="color:#C9D1D9;">localStorage.</span><span style="color:#D2A8FF;">clear</span><span style="color:#C9D1D9;">();</span></span>
<span class="line"><span style="color:#C9D1D9;">sessionStorage.</span><span style="color:#D2A8FF;">clear</span><span style="color:#C9D1D9;">();</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div>`,15),p=[o];function c(r,t,i,d,D,u){return n(),a("div",null,p)}const g=s(l,[["render",c]]);export{b as __pageData,g as default};
