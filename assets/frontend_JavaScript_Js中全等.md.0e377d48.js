import{_ as s,c as n,o as a,a as l}from"./app.d69f0574.js";const d=JSON.parse('{"title":"Js\u4E2D==\u4E0E===","description":"","frontmatter":{},"headers":[{"level":2,"title":"==\u76F8\u7B49\u8FD0\u7B97\u7B26","slug":"\u76F8\u7B49\u8FD0\u7B97\u7B26","link":"#\u76F8\u7B49\u8FD0\u7B97\u7B26","children":[]},{"level":2,"title":"===\u4E25\u683C\u76F8\u7B49\u8FD0\u7B97\u7B26","slug":"\u4E25\u683C\u76F8\u7B49\u8FD0\u7B97\u7B26","link":"#\u4E25\u683C\u76F8\u7B49\u8FD0\u7B97\u7B26","children":[]},{"level":2,"title":"if","slug":"if","link":"#if","children":[]},{"level":2,"title":"\u53C2\u8003","slug":"\u53C2\u8003","link":"#\u53C2\u8003","children":[]}],"relativePath":"frontend/JavaScript/Js\u4E2D\u5168\u7B49.md","lastUpdated":1661937245000}'),o={name:"frontend/JavaScript/Js\u4E2D\u5168\u7B49.md"},p=l(`<h1 id="js\u4E2D-\u4E0E" tabindex="-1">Js\u4E2D==\u4E0E=== <a class="header-anchor" href="#js\u4E2D-\u4E0E" aria-hidden="true">#</a></h1><p><code>JavaScript</code>\u4E2D\u63D0\u4F9B<code>==</code>\u76F8\u7B49\u8FD0\u7B97\u7B26\u4E0E<code>===</code>\u4E25\u683C\u76F8\u7B49\u8FD0\u7B97\u7B26\uFF0C\u5EFA\u8BAE\u662F\u53EA\u8981\u53D8\u91CF\u7684\u6570\u636E\u7C7B\u578B\u80FD\u591F\u786E\u5B9A\uFF0C\u4E00\u5F8B\u4F7F\u7528<code>===</code>\uFF0C\u5404\u79CD\u7C7B\u578B\u7684\u503C\u7684\u6BD4\u8F83\u53EF\u4EE5\u53C2\u8003<code>Js</code>\u771F\u503C\u8868</p><h2 id="\u76F8\u7B49\u8FD0\u7B97\u7B26" tabindex="-1">==\u76F8\u7B49\u8FD0\u7B97\u7B26 <a class="header-anchor" href="#\u76F8\u7B49\u8FD0\u7B97\u7B26" aria-hidden="true">#</a></h2><p><code>==</code>\u5728\u5224\u65AD\u76F8\u7B49\u65F6\u4F1A\u8FDB\u884C\u9690\u5F0F\u7684\u7C7B\u578B\u8F6C\u6362\uFF0C \u5176\u6BD4\u8F83\u9075\u5FAA\u4E00\u4E9B\u539F\u5219\uFF0C\u5373\u5148\u8F6C\u6362\u7C7B\u578B\u518D\u6BD4\u8F83\u3002</p><ul><li>\u5982\u679C\u6709\u4E00\u4E2A\u64CD\u4F5C\u6570\u662F\u5E03\u5C14\u503C\uFF0C\u5219\u5728\u6BD4\u8F83\u76F8\u7B49\u6027\u4E4B\u524D\u5148\u5C06\u5176\u8F6C\u6362\u4E3A\u6570\u503C\uFF0C\u5373\u662F\u8C03\u7528<code>Number()</code>\u65B9\u6CD5\u3002</li><li>\u5982\u679C\u4E00\u4E2A\u64CD\u4F5C\u6570\u662F\u5B57\u7B26\u4E32\uFF0C\u53E6\u4E00\u4E2A\u662F\u6570\u503C\uFF0C\u5728\u6BD4\u8F83\u76F8\u7B49\u6027\u4E4B\u524D\u5148\u5C06\u5B57\u7B26\u4E32\u8F6C\u6362\u4E3A\u6570\u503C\uFF0C\u540C\u6837\u8C03\u7528<code>Number()</code>\u65B9\u6CD5\u3002</li><li>\u5982\u679C\u4E00\u4E2A\u64CD\u4F5C\u6570\u662F\u5BF9\u8C61\uFF0C\u53E6\u4E00\u4E2A\u64CD\u4F5C\u6570\u4E0D\u662F\uFF0C\u5219\u8C03\u7528\u5BF9\u8C61\u7684<code>valueOf()</code>\u548C<code>toString()</code>\u65B9\u6CD5\u628A\u5BF9\u8C61\u8F6C\u6362\u6210\u57FA\u7840\u7C7B\u578B\u7684\u503C\u518D\u6BD4\u8F83\uFF0C\u9664<code>Date</code>\u5BF9\u8C61\u5916\uFF0C\u4F1A\u4F18\u5148\u5C1D\u8BD5\u4F7F\u7528<code>valueOf()</code>\u65B9\u6CD5\uFF0C\u7528\u5F97\u5230\u7684\u57FA\u672C\u7C7B\u578B\u6309\u7167\u524D\u9762\u7684\u89C4\u5219\u8FDB\u884C\u6BD4\u8F83\u3002</li><li>\u4EE5\u53CA<code>null == undefined</code>\uFF0C\u6B64\u5916\u4EFB\u4F55\u5176\u4ED6\u7EC4\u5408\uFF0C\u90FD\u4E0D\u76F8\u7B49\u3002</li></ul><div class="language-javascript line-numbers-mode"><button class="copy"></button><span class="lang">javascript</span><pre><code><span class="line"><span style="color:#79C0FF;">1</span><span style="color:#C9D1D9;"> </span><span style="color:#FF7B72;">==</span><span style="color:#C9D1D9;"> </span><span style="color:#79C0FF;">true</span><span style="color:#C9D1D9;"> </span><span style="color:#8B949E;">//true // Number Boolean</span></span>
<span class="line"><span style="color:#79C0FF;">2</span><span style="color:#C9D1D9;"> </span><span style="color:#FF7B72;">==</span><span style="color:#C9D1D9;"> </span><span style="color:#79C0FF;">true</span><span style="color:#C9D1D9;"> </span><span style="color:#8B949E;">//false</span></span>
<span class="line"><span style="color:#79C0FF;">1</span><span style="color:#C9D1D9;"> </span><span style="color:#FF7B72;">==</span><span style="color:#C9D1D9;"> </span><span style="color:#A5D6FF;">&quot;1&quot;</span><span style="color:#C9D1D9;">  </span><span style="color:#8B949E;">//true // Number String</span></span>
<span class="line"><span style="color:#C9D1D9;">[] </span><span style="color:#FF7B72;">==</span><span style="color:#C9D1D9;"> </span><span style="color:#A5D6FF;">&quot;&quot;</span><span style="color:#C9D1D9;">  </span><span style="color:#8B949E;">//true // Object String</span></span>
<span class="line"><span style="color:#C9D1D9;">[] </span><span style="color:#FF7B72;">==</span><span style="color:#C9D1D9;"> </span><span style="color:#79C0FF;">false</span><span style="color:#C9D1D9;"> </span><span style="color:#8B949E;">// true // Object Boolean</span></span>
<span class="line"><span style="color:#C9D1D9;">[] </span><span style="color:#FF7B72;">==</span><span style="color:#C9D1D9;"> </span><span style="color:#79C0FF;">0</span><span style="color:#C9D1D9;">   </span><span style="color:#8B949E;">//true // Object Number</span></span>
<span class="line"><span style="color:#C9D1D9;">[] </span><span style="color:#FF7B72;">==</span><span style="color:#C9D1D9;"> {}  </span><span style="color:#8B949E;">//false</span></span>
<span class="line"><span style="color:#C9D1D9;">[] </span><span style="color:#FF7B72;">==</span><span style="color:#C9D1D9;"> []  </span><span style="color:#8B949E;">//false</span></span>
<span class="line"><span style="color:#C9D1D9;">{} </span><span style="color:#FF7B72;">==</span><span style="color:#C9D1D9;"> {}  </span><span style="color:#8B949E;">//false</span></span>
<span class="line"><span style="color:#79C0FF;">null</span><span style="color:#C9D1D9;"> </span><span style="color:#FF7B72;">==</span><span style="color:#C9D1D9;"> </span><span style="color:#79C0FF;">undefined</span><span style="color:#C9D1D9;"> </span><span style="color:#8B949E;">//true</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br></div></div><p>\u5728\u4F7F\u7528\u7684\u65F6\u5019\u53EF\u80FD\u4F1A\u51FA\u73B0\u4E00\u4E9B\u95EE\u9898\u3002</p><div class="language-javascript line-numbers-mode"><button class="copy"></button><span class="lang">javascript</span><pre><code><span class="line"><span style="color:#79C0FF;">0</span><span style="color:#C9D1D9;"> </span><span style="color:#FF7B72;">==</span><span style="color:#C9D1D9;"> </span><span style="color:#A5D6FF;">&quot;0&quot;</span><span style="color:#C9D1D9;">  </span><span style="color:#8B949E;">//true</span></span>
<span class="line"><span style="color:#79C0FF;">0</span><span style="color:#C9D1D9;"> </span><span style="color:#FF7B72;">==</span><span style="color:#C9D1D9;"> []   </span><span style="color:#8B949E;">//true</span></span>
<span class="line"><span style="color:#A5D6FF;">&quot;0&quot;</span><span style="color:#C9D1D9;"> </span><span style="color:#FF7B72;">==</span><span style="color:#C9D1D9;"> [] </span><span style="color:#8B949E;">// false</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><p>\u5982\u679C\u662F\u76F4\u63A5\u5B9E\u73B0\u4E86<code>valueOf()</code>\u4E0E<code>toString()</code>\u7684\u65B9\u6CD5\uFF0C\u800C\u4E0D\u662F\u8C03\u7528\u539F\u578B\u94FE\u4E0A\u7684<code>Object.prototype.valueOf()</code>\u4E0E<code>Object.prototype.toString()</code>\u65B9\u6CD5\uFF0C\u751A\u81F3\u80FD\u591F\u4EA7\u751F\u5F02\u5E38\u3002</p><div class="language-javascript line-numbers-mode"><button class="copy"></button><span class="lang">javascript</span><pre><code><span class="line"><span style="color:#FF7B72;">var</span><span style="color:#C9D1D9;"> obj </span><span style="color:#FF7B72;">=</span><span style="color:#C9D1D9;"> {</span><span style="color:#D2A8FF;">valueOf</span><span style="color:#C9D1D9;">: </span><span style="color:#FF7B72;">function</span><span style="color:#C9D1D9;">(){ </span><span style="color:#FF7B72;">return</span><span style="color:#C9D1D9;"> {} }, </span><span style="color:#D2A8FF;">toString</span><span style="color:#C9D1D9;">: </span><span style="color:#FF7B72;">function</span><span style="color:#C9D1D9;">(){ </span><span style="color:#FF7B72;">return</span><span style="color:#C9D1D9;"> {}}}</span></span>
<span class="line"><span style="color:#C9D1D9;">console.</span><span style="color:#D2A8FF;">log</span><span style="color:#C9D1D9;">(obj </span><span style="color:#FF7B72;">==</span><span style="color:#C9D1D9;"> </span><span style="color:#79C0FF;">0</span><span style="color:#C9D1D9;">) </span><span style="color:#8B949E;">// Uncaught TypeError: Cannot convert object to primitive value</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><h2 id="\u4E25\u683C\u76F8\u7B49\u8FD0\u7B97\u7B26" tabindex="-1">===\u4E25\u683C\u76F8\u7B49\u8FD0\u7B97\u7B26 <a class="header-anchor" href="#\u4E25\u683C\u76F8\u7B49\u8FD0\u7B97\u7B26" aria-hidden="true">#</a></h2><p><code>===</code>\u5148\u5224\u65AD\u7C7B\u578B\u518D\u6BD4\u8F83\uFF0C\u7C7B\u578B\u4E0D\u540C\u76F4\u63A5\u4E0D\u76F8\u7B49\u3002<br><code>ES6</code>\u6570\u636E\u7C7B\u578B\u6709<code>Number</code>\u3001<code>String</code>\u3001<code>Boolean</code>\u3001 <code>Object</code>\u3001<code>Symbol</code>\u3001<code>null</code>\u548C<code>undefined</code>\u3002</p><div class="language-javascript line-numbers-mode"><button class="copy"></button><span class="lang">javascript</span><pre><code><span class="line"><span style="color:#79C0FF;">1</span><span style="color:#C9D1D9;"> </span><span style="color:#FF7B72;">===</span><span style="color:#C9D1D9;"> </span><span style="color:#79C0FF;">true</span><span style="color:#C9D1D9;"> </span><span style="color:#8B949E;">//false</span></span>
<span class="line"><span style="color:#79C0FF;">1</span><span style="color:#C9D1D9;"> </span><span style="color:#FF7B72;">===</span><span style="color:#C9D1D9;"> </span><span style="color:#A5D6FF;">&quot;1&quot;</span><span style="color:#C9D1D9;">  </span><span style="color:#8B949E;">//false</span></span>
<span class="line"><span style="color:#C9D1D9;">[] </span><span style="color:#FF7B72;">===</span><span style="color:#C9D1D9;"> </span><span style="color:#A5D6FF;">&quot;&quot;</span><span style="color:#C9D1D9;">  </span><span style="color:#8B949E;">//false</span></span>
<span class="line"><span style="color:#79C0FF;">null</span><span style="color:#C9D1D9;"> </span><span style="color:#FF7B72;">===</span><span style="color:#C9D1D9;"> </span><span style="color:#79C0FF;">undefined</span><span style="color:#C9D1D9;"> </span><span style="color:#8B949E;">//false</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><h2 id="if" tabindex="-1">if <a class="header-anchor" href="#if" aria-hidden="true">#</a></h2><p><code>if()</code>\u4E5F\u53EF\u4EE5\u770B\u4F5C\u662F\u4E00\u4E2A\u5355\u72EC\u7684\u8FD0\u7B97\u7B26\u7C7B\u522B\u3002</p><div class="language-javascript line-numbers-mode"><button class="copy"></button><span class="lang">javascript</span><pre><code><span class="line"><span style="color:#FF7B72;">if</span><span style="color:#C9D1D9;">(</span><span style="color:#79C0FF;">true</span><span style="color:#C9D1D9;">) console.</span><span style="color:#D2A8FF;">log</span><span style="color:#C9D1D9;">(</span><span style="color:#A5D6FF;">&quot;exec&quot;</span><span style="color:#C9D1D9;">); </span><span style="color:#8B949E;">//exec</span></span>
<span class="line"><span style="color:#FF7B72;">if</span><span style="color:#C9D1D9;">(</span><span style="color:#79C0FF;">false</span><span style="color:#C9D1D9;">) console.</span><span style="color:#D2A8FF;">log</span><span style="color:#C9D1D9;">(</span><span style="color:#A5D6FF;">&quot;exec&quot;</span><span style="color:#C9D1D9;">);</span></span>
<span class="line"><span style="color:#FF7B72;">if</span><span style="color:#C9D1D9;">(</span><span style="color:#79C0FF;">1</span><span style="color:#C9D1D9;">) console.</span><span style="color:#D2A8FF;">log</span><span style="color:#C9D1D9;">(</span><span style="color:#A5D6FF;">&quot;exec&quot;</span><span style="color:#C9D1D9;">); </span><span style="color:#8B949E;">//exec</span></span>
<span class="line"><span style="color:#FF7B72;">if</span><span style="color:#C9D1D9;">(</span><span style="color:#79C0FF;">0</span><span style="color:#C9D1D9;">) console.</span><span style="color:#D2A8FF;">log</span><span style="color:#C9D1D9;">(</span><span style="color:#A5D6FF;">&quot;exec&quot;</span><span style="color:#C9D1D9;">); </span></span>
<span class="line"><span style="color:#FF7B72;">if</span><span style="color:#C9D1D9;">(</span><span style="color:#FF7B72;">-</span><span style="color:#79C0FF;">1</span><span style="color:#C9D1D9;">) console.</span><span style="color:#D2A8FF;">log</span><span style="color:#C9D1D9;">(</span><span style="color:#A5D6FF;">&quot;exec&quot;</span><span style="color:#C9D1D9;">); </span><span style="color:#8B949E;">//exec</span></span>
<span class="line"><span style="color:#FF7B72;">if</span><span style="color:#C9D1D9;">(</span><span style="color:#A5D6FF;">&quot;true&quot;</span><span style="color:#C9D1D9;">) console.</span><span style="color:#D2A8FF;">log</span><span style="color:#C9D1D9;">(</span><span style="color:#A5D6FF;">&quot;exec&quot;</span><span style="color:#C9D1D9;">); </span><span style="color:#8B949E;">//exec</span></span>
<span class="line"><span style="color:#FF7B72;">if</span><span style="color:#C9D1D9;">(</span><span style="color:#A5D6FF;">&quot;1&quot;</span><span style="color:#C9D1D9;">) console.</span><span style="color:#D2A8FF;">log</span><span style="color:#C9D1D9;">(</span><span style="color:#A5D6FF;">&quot;exec&quot;</span><span style="color:#C9D1D9;">); </span><span style="color:#8B949E;">//exec</span></span>
<span class="line"><span style="color:#FF7B72;">if</span><span style="color:#C9D1D9;">(</span><span style="color:#A5D6FF;">&quot;0&quot;</span><span style="color:#C9D1D9;">) console.</span><span style="color:#D2A8FF;">log</span><span style="color:#C9D1D9;">(</span><span style="color:#A5D6FF;">&quot;exec&quot;</span><span style="color:#C9D1D9;">); </span><span style="color:#8B949E;">//exec</span></span>
<span class="line"><span style="color:#FF7B72;">if</span><span style="color:#C9D1D9;">(</span><span style="color:#A5D6FF;">&quot;&quot;</span><span style="color:#C9D1D9;">) console.</span><span style="color:#D2A8FF;">log</span><span style="color:#C9D1D9;">(</span><span style="color:#A5D6FF;">&quot;exec&quot;</span><span style="color:#C9D1D9;">);</span></span>
<span class="line"><span style="color:#FF7B72;">if</span><span style="color:#C9D1D9;">(</span><span style="color:#79C0FF;">null</span><span style="color:#C9D1D9;">) console.</span><span style="color:#D2A8FF;">log</span><span style="color:#C9D1D9;">(</span><span style="color:#A5D6FF;">&quot;exec&quot;</span><span style="color:#C9D1D9;">);</span></span>
<span class="line"><span style="color:#FF7B72;">if</span><span style="color:#C9D1D9;">(</span><span style="color:#79C0FF;">undefined</span><span style="color:#C9D1D9;">) console.</span><span style="color:#D2A8FF;">log</span><span style="color:#C9D1D9;">(</span><span style="color:#A5D6FF;">&quot;exec&quot;</span><span style="color:#C9D1D9;">);</span></span>
<span class="line"><span style="color:#FF7B72;">if</span><span style="color:#C9D1D9;">(</span><span style="color:#A5D6FF;">&quot;null&quot;</span><span style="color:#C9D1D9;">) console.</span><span style="color:#D2A8FF;">log</span><span style="color:#C9D1D9;">(</span><span style="color:#A5D6FF;">&quot;exec&quot;</span><span style="color:#C9D1D9;">); </span><span style="color:#8B949E;">//exec</span></span>
<span class="line"><span style="color:#FF7B72;">if</span><span style="color:#C9D1D9;">(</span><span style="color:#A5D6FF;">&quot;undefined&quot;</span><span style="color:#C9D1D9;">) console.</span><span style="color:#D2A8FF;">log</span><span style="color:#C9D1D9;">(</span><span style="color:#A5D6FF;">&quot;exec&quot;</span><span style="color:#C9D1D9;">); </span><span style="color:#8B949E;">//exec</span></span>
<span class="line"><span style="color:#FF7B72;">if</span><span style="color:#C9D1D9;">([]) console.</span><span style="color:#D2A8FF;">log</span><span style="color:#C9D1D9;">(</span><span style="color:#A5D6FF;">&quot;exec&quot;</span><span style="color:#C9D1D9;">); </span><span style="color:#8B949E;">//exec</span></span>
<span class="line"><span style="color:#FF7B72;">if</span><span style="color:#C9D1D9;">({}) console.</span><span style="color:#D2A8FF;">log</span><span style="color:#C9D1D9;">(</span><span style="color:#A5D6FF;">&quot;exec&quot;</span><span style="color:#C9D1D9;">); </span><span style="color:#8B949E;">//exec</span></span>
<span class="line"><span style="color:#FF7B72;">if</span><span style="color:#C9D1D9;">([</span><span style="color:#79C0FF;">0</span><span style="color:#C9D1D9;">]) console.</span><span style="color:#D2A8FF;">log</span><span style="color:#C9D1D9;">(</span><span style="color:#A5D6FF;">&quot;exec&quot;</span><span style="color:#C9D1D9;">); </span><span style="color:#8B949E;">//exec</span></span>
<span class="line"><span style="color:#FF7B72;">if</span><span style="color:#C9D1D9;">(</span><span style="color:#79C0FF;">NaN</span><span style="color:#C9D1D9;">) console.</span><span style="color:#D2A8FF;">log</span><span style="color:#C9D1D9;">(</span><span style="color:#A5D6FF;">&quot;exec&quot;</span><span style="color:#C9D1D9;">);</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br></div></div><h2 id="\u53C2\u8003" tabindex="-1">\u53C2\u8003 <a class="header-anchor" href="#\u53C2\u8003" aria-hidden="true">#</a></h2><div class="language- line-numbers-mode"><button class="copy"></button><span class="lang"></span><pre><code><span class="line"><span style="color:#c9d1d9;">https://www.zhihu.com/question/31442029</span></span>
<span class="line"><span style="color:#c9d1d9;">https://thomas-yang.me/projects/oh-my-dear-js/</span></span>
<span class="line"><span style="color:#c9d1d9;">https://dorey.github.io/JavaScript-Equality-Table/#three-equals</span></span>
<span class="line"><span style="color:#c9d1d9;"></span></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div>`,18),e=[p];function c(r,t,D,y,F,i){return a(),n("div",null,e)}const C=s(o,[["render",c]]);export{d as __pageData,C as default};
