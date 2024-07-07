import{_ as s,c as n,o as a,a as e}from"./app.d69f0574.js";const h=JSON.parse('{"title":"awk\u547D\u4EE4","description":"","frontmatter":{},"headers":[{"level":2,"title":"\u8BED\u6CD5","slug":"\u8BED\u6CD5","link":"#\u8BED\u6CD5","children":[]},{"level":2,"title":"\u53C2\u6570","slug":"\u53C2\u6570","link":"#\u53C2\u6570","children":[]},{"level":2,"title":"\u793A\u4F8B","slug":"\u793A\u4F8B","link":"#\u793A\u4F8B","children":[]},{"level":2,"title":"\u53C2\u8003","slug":"\u53C2\u8003","link":"#\u53C2\u8003","children":[]}],"relativePath":"toolSoftware/Linux/awk\u547D\u4EE4.md","lastUpdated":1662709914000}'),l={name:"toolSoftware/Linux/awk\u547D\u4EE4.md"},p=e(`<h1 id="awk\u547D\u4EE4" tabindex="-1">awk\u547D\u4EE4 <a class="header-anchor" href="#awk\u547D\u4EE4" aria-hidden="true">#</a></h1><p><code>Awk</code>\u662F\u4E00\u79CD\u7528\u4E8E\u9AD8\u7EA7\u6587\u672C\u5904\u7406\u7684\u901A\u7528\u811A\u672C\u8BED\u8A00\uFF0C\u5176\u4E3B\u8981\u7528\u4F5C\u62A5\u544A\u548C\u5206\u6790\u5DE5\u5177\uFF0C\u4E0E\u5927\u591A\u6570\u5176\u4ED6\u7A0B\u5E8F\u6027\u7F16\u7A0B\u8BED\u8A00\u4E0D\u540C\uFF0C<code>Awk</code>\u662F\u6570\u636E\u9A71\u52A8\u7684\uFF0C\u4E5F\u5C31\u662F\u8BF4\u9700\u8981\u5B9A\u4E49\u4E00\u7EC4\u9488\u5BF9\u8F93\u5165\u6587\u672C\u8981\u6267\u884C\u7684\u64CD\u4F5C\uFF0C\u7136\u540E\u5176\u83B7\u53D6\u8F93\u5165\u6570\u636E\uFF0C\u5BF9\u5176\u8FDB\u884C\u8F6C\u6362\uFF0C\u7136\u540E\u5C06\u7ED3\u679C\u53D1\u9001\u5230\u6807\u51C6\u8F93\u51FA\u3002</p><h2 id="\u8BED\u6CD5" tabindex="-1">\u8BED\u6CD5 <a class="header-anchor" href="#\u8BED\u6CD5" aria-hidden="true">#</a></h2><div class="language-shell line-numbers-mode"><button class="copy"></button><span class="lang">shell</span><pre><code><span class="line"><span style="color:#C9D1D9;">awk [ -F fs ] [ -v var</span><span style="color:#FF7B72;">=</span><span style="color:#C9D1D9;">value ] [ </span><span style="color:#A5D6FF;">&#39;prog&#39;</span><span style="color:#C9D1D9;"> </span><span style="color:#FF7B72;">|</span><span style="color:#C9D1D9;"> </span><span style="color:#FF7B72;">-f</span><span style="color:#C9D1D9;"> progfile ] [ file ... ]</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br></div></div><h2 id="\u53C2\u6570" tabindex="-1">\u53C2\u6570 <a class="header-anchor" href="#\u53C2\u6570" aria-hidden="true">#</a></h2><ul><li><code>-F fs</code>: \u5C06\u8F93\u5165\u5B57\u6BB5\u5206\u9694\u7B26\u8BBE\u7F6E\u4E3A\u6B63\u5219\u8868\u8FBE\u5F0F<code>fs</code>\u3002</li><li><code>-v var=value</code>: \u5728\u6267\u884C<code>awk</code>\u7A0B\u5E8F\u4E4B\u524D\uFF0C\u5C06\u503C\u8D4B\u503C\u7ED9\u53D8\u91CF<code>var</code>\u3002</li><li><code>&#39;prog&#39;</code>: <code>awk</code>\u7A0B\u5E8F\u3002</li><li><code>-f progfile</code>: \u6307\u5B9A\u6587\u4EF6<code>progfile</code>\uFF0C\u5176\u4E2D\u5305\u542B\u8981\u6267\u884C\u7684<code>awk</code>\u7A0B\u5E8F\u3002</li><li><code>file ...</code>: \u7531\u6307\u5B9A\u7684<code>awk</code>\u7A0B\u5E8F\u5904\u7406\u7684\u6587\u4EF6\u3002</li></ul><h2 id="\u793A\u4F8B" tabindex="-1">\u793A\u4F8B <a class="header-anchor" href="#\u793A\u4F8B" aria-hidden="true">#</a></h2><p>\u793A\u4F8B\u6587\u4EF6<code>example.txt</code>\u6587\u4EF6\u5185\u5BB9\u5982\u4E0B\uFF1A</p><div class="language- line-numbers-mode"><button class="copy"></button><span class="lang"></span><pre><code><span class="line"><span style="color:#c9d1d9;">Bucks Milwaukee    60 22 0.732 </span></span>
<span class="line"><span style="color:#c9d1d9;">Raptors Toronto    55 24 0.707 </span></span>
<span class="line"><span style="color:#c9d1d9;">76ers Philadelphia 51 31 0.622</span></span>
<span class="line"><span style="color:#c9d1d9;">Celtics Boston     33 33 0.598</span></span>
<span class="line"><span style="color:#c9d1d9;">Pacers Indiana     30 34 0.585</span></span>
<span class="line"><span style="color:#c9d1d9;"></span></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><p>\u8F93\u51FA<code>example.txt</code>\u7684\u7B2C<code>3</code>\u4E2A\u5B57\u6BB5\u3002</p><div class="language-shell line-numbers-mode"><button class="copy"></button><span class="lang">shell</span><pre><code><span class="line"><span style="color:#C9D1D9;">awk </span><span style="color:#A5D6FF;">&#39;{ print $3 }&#39;</span><span style="color:#C9D1D9;"> example.txt</span></span>
<span class="line"><span style="color:#8B949E;"># 60</span></span>
<span class="line"><span style="color:#8B949E;"># 55</span></span>
<span class="line"><span style="color:#8B949E;"># 51</span></span>
<span class="line"><span style="color:#8B949E;"># 33</span></span>
<span class="line"><span style="color:#8B949E;"># 30</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div><p>\u4F7F\u7528\u6B63\u5219\u8868\u8FBE\u5F0F\u5339\u914D\u51FA\u4EE5<code>R</code>\u5F00\u5934\u7684\u7EC4\u3002</p><div class="language-shell line-numbers-mode"><button class="copy"></button><span class="lang">shell</span><pre><code><span class="line"><span style="color:#C9D1D9;">awk </span><span style="color:#A5D6FF;">&#39;/^R/ { print $1,$2,$3,$4 }&#39;</span><span style="color:#C9D1D9;"> example.txt</span></span>
<span class="line"><span style="color:#8B949E;"># Raptors Toronto 55 24</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><p>\u4F7F\u7528<code>BEGIN</code>\u4EE5\u53CA<code>END</code>\u8F93\u51FA\u5728\u5904\u7406\u8BB0\u5F55\u4E4B\u524D\u4E0E\u4E4B\u540E\u6267\u884C\u7684\u64CD\u4F5C\uFF0C\u5904\u7406\u8FC7\u7A0B\u4E3A\u8F93\u51FA\u7B2C\u4E8C\u4E2A\u5B57\u6BB5\u5305\u542B<code>Tor</code>\u7684\u7EC4\u3002</p><div class="language-shell line-numbers-mode"><button class="copy"></button><span class="lang">shell</span><pre><code><span class="line"><span style="color:#C9D1D9;">awk </span><span style="color:#A5D6FF;">&#39;BEGIN { print &quot;Start Processing&quot; }; $2 ~ /Tor/ {print $1,$2,$3,$4 }; END { print &quot;End Processing&quot; }&#39;</span><span style="color:#C9D1D9;"> example.txt</span></span>
<span class="line"><span style="color:#8B949E;"># Start Processing</span></span>
<span class="line"><span style="color:#8B949E;"># Raptors Toronto 55 24</span></span>
<span class="line"><span style="color:#8B949E;"># End Processing</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><h2 id="\u53C2\u8003" tabindex="-1">\u53C2\u8003 <a class="header-anchor" href="#\u53C2\u8003" aria-hidden="true">#</a></h2><div class="language- line-numbers-mode"><button class="copy"></button><span class="lang"></span><pre><code><span class="line"><span style="color:#c9d1d9;">https://linuxize.com/post/awk-command/</span></span>
<span class="line"><span style="color:#c9d1d9;">https://www.computerhope.com/unix/uawk.htm</span></span>
<span class="line"><span style="color:#c9d1d9;">https://www.runoob.com/linux/linux-comm-awk.html</span></span>
<span class="line"><span style="color:#c9d1d9;"></span></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div>`,17),c=[p];function o(r,i,t,d,u,b){return a(),n("div",null,c)}const y=s(l,[["render",o]]);export{h as __pageData,y as default};
