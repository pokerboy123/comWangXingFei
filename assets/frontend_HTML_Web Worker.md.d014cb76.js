import{_ as s,c as n,o as a,a as e}from"./app.d69f0574.js";const b=JSON.parse('{"title":"Web Worker","description":"","frontmatter":{},"headers":[{"level":2,"title":"\u63CF\u8FF0","slug":"\u63CF\u8FF0","link":"#\u63CF\u8FF0","children":[]},{"level":2,"title":"\u4E13\u7528worker","slug":"\u4E13\u7528worker","link":"#\u4E13\u7528worker","children":[]},{"level":2,"title":"\u5171\u4EABworker","slug":"\u5171\u4EABworker","link":"#\u5171\u4EABworker","children":[]},{"level":2,"title":"\u53C2\u8003","slug":"\u53C2\u8003","link":"#\u53C2\u8003","children":[]}],"relativePath":"frontend/HTML/Web Worker.md","lastUpdated":1661926357000}'),o={name:"frontend/HTML/Web Worker.md"},l=e(`<h1 id="web-worker" tabindex="-1">Web Worker <a class="header-anchor" href="#web-worker" aria-hidden="true">#</a></h1><p><code>JavaScript</code>\u662F\u5355\u7EBF\u7A0B\u8BED\u8A00\uFF0C\u5982\u679C\u5728<code>Js</code>\u4E3B\u7EBF\u7A0B\u4E0A\u8FDB\u884C\u6BD4\u8F83\u8017\u65F6\u7684\u64CD\u4F5C\uFF0C\u90A3\u4E48\u4E0D\u4EC5\u5F02\u6B65\u7684\u4E8B\u4EF6\u56DE\u8C03\u65E0\u6CD5\u6B63\u5E38\u5B8C\u6210\uFF0C\u6D4F\u89C8\u5668\u7684\u6E32\u67D3\u7EBF\u7A0B\u4E5F\u5C06\u88AB\u963B\u585E\uFF0C\u65E0\u6CD5\u6B63\u5E38\u6E32\u67D3\u9875\u9762\u3002<code>Web Worker</code>\u80FD\u591F\u628A<code>JavaScript</code>\u8BA1\u7B97\u59D4\u6258\u7ED9\u540E\u53F0\u7EBF\u7A0B\uFF0C\u7EBF\u7A0B\u53EF\u4EE5\u6267\u884C\u4EFB\u52A1\u800C\u4E0D\u5E72\u6270\u7528\u6237\u754C\u9762\u3002</p><h2 id="\u63CF\u8FF0" tabindex="-1">\u63CF\u8FF0 <a class="header-anchor" href="#\u63CF\u8FF0" aria-hidden="true">#</a></h2><p><code>worker</code>\u662F\u4F7F\u7528\u6784\u9020\u51FD\u6570\u521B\u5EFA\u7684\u4E00\u4E2A\u5BF9\u8C61\u6765\u8FD0\u884C\u4E00\u4E2A<code>Js</code>\u6587\u4EF6\uFF0C\u8FD9\u4E2A<code>Js</code>\u6587\u4EF6\u4E2D\u5305\u542B\u5C06\u5728<code>worker</code>\u7EBF\u7A0B\u4E2D\u8FD0\u884C\u7684\u4EE3\u7801\uFF0C<code>worker</code>\u8FD0\u884C\u7684\u5168\u5C40\u5BF9\u8C61\u4E0D\u662F\u5F53\u524D<code>window</code>\uFF0C\u4E13\u7528<code>worker</code>\u7EBF\u7A0B\u8FD0\u884C\u73AF\u5883\u7684\u5168\u5C40\u5BF9\u8C61\u4E3A<code>DedicatedWorkerGlobalScope</code>\uFF0C\u5171\u4EAB<code>worker</code>\u7EBF\u7A0B\u8FD0\u884C\u73AF\u5883\u7684\u5168\u5C40\u5BF9\u8C61\u4E3A<code>SharedWorkerGlobalScope</code>\u3002<br> \u5728<code>worker</code>\u53EF\u4EE5\u8FD0\u884C\u4EFB\u610F<code>JavaScript</code>\u4EE3\u7801\uFF0C\u4F46\u4E0D\u80FD\u591F\u76F4\u63A5\u64CD\u4F5C<code>DOM</code>\u8282\u70B9\uFF0C\u4E5F\u4E0D\u80FD\u4F7F\u7528<code>window</code>\u5BF9\u8C61\u7684\u9ED8\u8BA4\u65B9\u6CD5\u548C\u5C5E\u6027\uFF0C\u4F46\u662F\u5728<code>window</code>\u5BF9\u8C61\u4E0B\u7684\u5F88\u591A\u65B9\u6CD5\u5305\u62EC<code>WebSockets</code>\uFF0C<code>IndexedDB</code>\u7B49\u5728<code>worker</code>\u5168\u5C40\u5BF9\u8C61\u4E2D\u90FD\u6709\u5B9E\u73B0\u3002<br><code>worker</code>\u7EBF\u7A0B\u4E0E\u4E3B\u7EBF\u7A0B\u4E4B\u95F4\u7684\u901A\u4FE1\u662F\u901A\u8FC7<code>postMessage</code>\u53D1\u9001\u6D88\u606F\u4EE5\u53CA<code>onmessage</code>\u4E8B\u4EF6\u5904\u7406\u51FD\u6570\u6765\u63A5\u6536\u6D88\u606F\uFF0C\u8FD9\u4E2A\u8FC7\u7A0B\u4E2D\u6570\u636E\u5E76\u4E0D\u662F\u88AB\u5171\u4EAB\u800C\u662F\u88AB\u590D\u5236\u3002<br> \u53EA\u8981\u8FD0\u884C\u5728\u540C\u6E90\u7684\u7236\u9875\u9762\u4E2D\uFF0C<code>worker</code>\u53EF\u4EE5\u4F9D\u6B21\u751F\u6210\u65B0\u7684<code>worker</code>\u3002\u6B64\u5916<code>worker</code>\u8FD8\u53EF\u4EE5\u4F7F\u7528<code>XMLHttpRequest</code>\u8FDB\u884C\u7F51\u7EDC<code>I/O</code>\uFF0C\u4F46\u662F<code>XMLHttpRequest</code>\u7684<code>responseXML</code>\u548C<code>channel</code>\u5C5E\u6027\u603B\u4F1A\u8FD4\u56DE<code>null</code>\u3002</p><h2 id="\u4E13\u7528worker" tabindex="-1">\u4E13\u7528worker <a class="header-anchor" href="#\u4E13\u7528worker" aria-hidden="true">#</a></h2><p>\u4E13\u7528<code>worker</code>\u4EC5\u80FD\u88AB\u751F\u6210\u5B83\u7684\u811A\u672C\u4F7F\u7528\uFF0C\u901A\u8FC7\u6784\u9020\u51FD\u6570\u751F\u6210<code>worker</code>\uFF0C\u7136\u540E\u901A\u8FC7\u6D88\u606F\u4F20\u9012\u673A\u5236\u5C06\u6570\u636E\u4F20\u9012\u5230<code>worker</code>\u7EBF\u7A0B\u8BA1\u7B97\u5B8C\u6BD5\u540E\u518D\u5C06\u6570\u636E\u4F20\u56DE\u8FDB\u884C\u4E0B\u4E00\u6B65\u64CD\u4F5C\uFF0C<code>worker</code>\u7EBF\u7A0B\u7684\u5173\u95ED\u53EF\u4EE5\u5728\u4E3B\u7EBF\u7A0B\u4E2D\u5173\u95ED\u4E5F\u53EF\u4EE5\u5728<code>worker</code>\u7EBF\u7A0B\u4E2D\u5173\u95ED\u3002</p><div class="language-javascript line-numbers-mode"><button class="copy"></button><span class="lang">javascript</span><pre><code><span class="line"><span style="color:#8B949E;">// \u9700\u8981\u5F00\u542F\u4E00\u4E2Aserver</span></span>
<span class="line"><span style="color:#FF7B72;">var</span><span style="color:#C9D1D9;"> worker </span><span style="color:#FF7B72;">=</span><span style="color:#C9D1D9;"> </span><span style="color:#FF7B72;">new</span><span style="color:#C9D1D9;"> </span><span style="color:#D2A8FF;">Worker</span><span style="color:#C9D1D9;">(</span><span style="color:#A5D6FF;">&#39;worker.js&#39;</span><span style="color:#C9D1D9;">); </span><span style="color:#8B949E;">// \u5B9E\u4F8B\u5316worker\u7EBF\u7A0B </span></span>
<span class="line"><span style="color:#C9D1D9;">worker.</span><span style="color:#D2A8FF;">postMessage</span><span style="color:#C9D1D9;">(</span><span style="color:#79C0FF;">1</span><span style="color:#C9D1D9;">); </span><span style="color:#8B949E;">// \u4F20\u9012\u6D88\u606F</span></span>
<span class="line"><span style="color:#C9D1D9;">worker.</span><span style="color:#D2A8FF;">onmessage</span><span style="color:#C9D1D9;"> </span><span style="color:#FF7B72;">=</span><span style="color:#C9D1D9;"> </span><span style="color:#FF7B72;">function</span><span style="color:#C9D1D9;">(</span><span style="color:#FFA657;">e</span><span style="color:#C9D1D9;">){ </span><span style="color:#8B949E;">// \u63A5\u6536\u6D88\u606F\u4E8B\u4EF6</span></span>
<span class="line"><span style="color:#C9D1D9;">    console.</span><span style="color:#D2A8FF;">log</span><span style="color:#C9D1D9;">(e.data); </span><span style="color:#8B949E;">// 2</span></span>
<span class="line"><span style="color:#C9D1D9;">    </span><span style="color:#8B949E;">// worker.terminate(); // \u5173\u95EDworker\u7EBF\u7A0B</span></span>
<span class="line"><span style="color:#C9D1D9;">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div><div class="language-javascript line-numbers-mode"><button class="copy"></button><span class="lang">javascript</span><pre><code><span class="line"><span style="color:#8B949E;">// worker.js worker\u7EBF\u7A0B</span></span>
<span class="line"><span style="color:#D2A8FF;">onmessage</span><span style="color:#C9D1D9;"> </span><span style="color:#FF7B72;">=</span><span style="color:#C9D1D9;"> </span><span style="color:#FF7B72;">function</span><span style="color:#C9D1D9;">(</span><span style="color:#FFA657;">e</span><span style="color:#C9D1D9;">) { </span><span style="color:#8B949E;">// worker\u63A5\u6536\u6D88\u606F</span></span>
<span class="line"><span style="color:#C9D1D9;">    </span><span style="color:#FF7B72;">var</span><span style="color:#C9D1D9;"> v </span><span style="color:#FF7B72;">=</span><span style="color:#C9D1D9;"> e.data; </span></span>
<span class="line"><span style="color:#C9D1D9;">    console.</span><span style="color:#D2A8FF;">log</span><span style="color:#C9D1D9;">(v); </span><span style="color:#8B949E;">// 1</span></span>
<span class="line"><span style="color:#C9D1D9;">    </span><span style="color:#D2A8FF;">postMessage</span><span style="color:#C9D1D9;">(v </span><span style="color:#FF7B72;">*</span><span style="color:#C9D1D9;"> </span><span style="color:#79C0FF;">2</span><span style="color:#C9D1D9;">); </span><span style="color:#8B949E;">// \u4E58\u4EE52\u5E76\u4F20\u9012\u6D88\u606F // \u7B80\u5355\u7684\u8BA1\u7B97</span></span>
<span class="line"><span style="color:#C9D1D9;">    </span><span style="color:#8B949E;">// close(); // \u5173\u95EDworker\u7EBF\u7A0B</span></span>
<span class="line"><span style="color:#C9D1D9;">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div><h2 id="\u5171\u4EABworker" tabindex="-1">\u5171\u4EABworker <a class="header-anchor" href="#\u5171\u4EABworker" aria-hidden="true">#</a></h2><p>\u5171\u4EAB<code>worker</code>\u53EF\u4EE5\u540C\u65F6\u88AB\u591A\u4E2A\u811A\u672C\u4F7F\u7528\uFF0C\u5373\u4F7F\u8FD9\u4E9B\u811A\u672C\u6B63\u5728\u88AB\u4E0D\u540C\u7684<code>window</code>\u3001<code>iframe</code>\u6216\u8005<code>worker</code>\u8BBF\u95EE\uFF0C\u4E5F\u5C31\u662F\u8BF4\u53EF\u4EE5\u4F7F\u7528\u5171\u4EAB<code>worker</code>\u8FDB\u884C\u591A\u4E2A\u6D4F\u89C8\u5668\u7A97\u53E3\u95F4\u901A\u4FE1\uFF0C\u5F53\u7136\u5171\u4EAB<code>worker</code>\u7684\u901A\u4FE1\u5FC5\u987B\u4E3A\u540C\u6E90\uFF0C\u4E0D\u80FD\u8DE8\u57DF\u901A\u4FE1\u3002\u751F\u6210\u5171\u4EAB<code>worker</code>\u4E0E\u751F\u6210\u4E13\u7528<code>worker</code>\u975E\u5E38\u76F8\u4F3C\uFF0C\u53EA\u662F\u6784\u9020\u5668\u7684\u540D\u5B57\u4E0D\u540C\uFF0C\u4ED6\u4EEC\u4E4B\u95F4\u4E00\u4E2A\u5F88\u5927\u7684\u533A\u522B\u5728\u4E8E\uFF1A\u5171\u4EAB<code>worker</code>\u5FC5\u987B\u901A\u8FC7\u4E00\u4E2A\u786E\u5207\u7684\u6253\u5F00\u7684\u7AEF\u53E3\u5BF9\u8C61\u4F9B\u811A\u672C\u4E0E<code>worker</code>\u901A\u4FE1\uFF0C\u5728\u4E13\u7528<code>worker</code>\u4E2D\u8FD9\u4E00\u90E8\u5206\u662F\u9690\u5F0F\u8FDB\u884C\u7684\u3002\u5982\u679C\u7236\u7EA7\u7EBF\u7A0B\u548C<code>worker</code>\u7EBF\u7A0B\u9700\u8981\u53CC\u5411\u901A\u4FE1\uFF0C\u90A3\u4E48\u5B83\u4EEC\u90FD\u9700\u8981\u8C03\u7528<code>start()</code>\u65B9\u6CD5\uFF0C\u5BF9\u4E8E\u6D88\u606F\u7684\u4F20\u9012\u4F9D\u7136\u4F7F\u7528<code>postMessage</code>\u4F46\u662F\u5FC5\u987B\u901A\u8FC7\u8C03\u7528\u7AEF\u53E3\u4E0A\u7684<code>postMessage</code>\u65B9\u6CD5\u6765\u5B9E\u73B0\u6D88\u606F\u901A\u4FE1\u3002</p><div class="language-javascript line-numbers-mode"><button class="copy"></button><span class="lang">javascript</span><pre><code><span class="line"><span style="color:#8B949E;">// \u9700\u8981\u5F00\u542F\u4E00\u4E2Aserver</span></span>
<span class="line"><span style="color:#8B949E;">// \u9875\u9762A \u6D4F\u89C8\u5668\u7A97\u53E3\u95F4\u901A\u4FE1\u5B9E\u4F8B</span></span>
<span class="line"><span style="color:#FF7B72;">var</span><span style="color:#C9D1D9;"> worker </span><span style="color:#FF7B72;">=</span><span style="color:#C9D1D9;"> </span><span style="color:#FF7B72;">new</span><span style="color:#C9D1D9;"> </span><span style="color:#D2A8FF;">SharedWorker</span><span style="color:#C9D1D9;">(</span><span style="color:#A5D6FF;">&#39;worker.js&#39;</span><span style="color:#C9D1D9;">);</span></span>
<span class="line"><span style="color:#C9D1D9;">worker.port.</span><span style="color:#D2A8FF;">start</span><span style="color:#C9D1D9;">();</span></span>
<span class="line"><span style="color:#C9D1D9;">worker.port.</span><span style="color:#D2A8FF;">postMessage</span><span style="color:#C9D1D9;">(</span><span style="color:#79C0FF;">1</span><span style="color:#C9D1D9;">);</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><div class="language-javascript line-numbers-mode"><button class="copy"></button><span class="lang">javascript</span><pre><code><span class="line"><span style="color:#8B949E;">// \u9875\u9762B \u6D4F\u89C8\u5668\u7A97\u53E3\u95F4\u901A\u4FE1\u5B9E\u4F8B</span></span>
<span class="line"><span style="color:#FF7B72;">var</span><span style="color:#C9D1D9;"> worker </span><span style="color:#FF7B72;">=</span><span style="color:#C9D1D9;"> </span><span style="color:#FF7B72;">new</span><span style="color:#C9D1D9;"> </span><span style="color:#D2A8FF;">SharedWorker</span><span style="color:#C9D1D9;">(</span><span style="color:#A5D6FF;">&#39;worker.js&#39;</span><span style="color:#C9D1D9;">);</span></span>
<span class="line"><span style="color:#C9D1D9;">worker.port.</span><span style="color:#D2A8FF;">start</span><span style="color:#C9D1D9;">();</span></span>
<span class="line"><span style="color:#C9D1D9;">worker.port.</span><span style="color:#D2A8FF;">onmessage</span><span style="color:#C9D1D9;"> </span><span style="color:#FF7B72;">=</span><span style="color:#C9D1D9;"> </span><span style="color:#FF7B72;">function</span><span style="color:#C9D1D9;">(</span><span style="color:#FFA657;">event</span><span style="color:#C9D1D9;">){</span></span>
<span class="line"><span style="color:#C9D1D9;">    console.</span><span style="color:#D2A8FF;">log</span><span style="color:#C9D1D9;">(event.data);</span></span>
<span class="line"><span style="color:#C9D1D9;">};</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div><div class="language-javascript line-numbers-mode"><button class="copy"></button><span class="lang">javascript</span><pre><code><span class="line"><span style="color:#8B949E;">// worker.js worker\u7EBF\u7A0B</span></span>
<span class="line"><span style="color:#FF7B72;">var</span><span style="color:#C9D1D9;"> portArr </span><span style="color:#FF7B72;">=</span><span style="color:#C9D1D9;"> [];</span></span>
<span class="line"><span style="color:#D2A8FF;">onconnect</span><span style="color:#C9D1D9;"> </span><span style="color:#FF7B72;">=</span><span style="color:#C9D1D9;"> </span><span style="color:#FF7B72;">function</span><span style="color:#C9D1D9;">(</span><span style="color:#FFA657;">e</span><span style="color:#C9D1D9;">) {</span></span>
<span class="line"><span style="color:#C9D1D9;">  </span><span style="color:#FF7B72;">var</span><span style="color:#C9D1D9;"> port </span><span style="color:#FF7B72;">=</span><span style="color:#C9D1D9;"> e.ports[</span><span style="color:#79C0FF;">0</span><span style="color:#C9D1D9;">];</span></span>
<span class="line"><span style="color:#C9D1D9;">  </span><span style="color:#FF7B72;">if</span><span style="color:#C9D1D9;">(portArr.</span><span style="color:#D2A8FF;">indexOf</span><span style="color:#C9D1D9;">(port) </span><span style="color:#FF7B72;">===</span><span style="color:#C9D1D9;"> </span><span style="color:#FF7B72;">-</span><span style="color:#79C0FF;">1</span><span style="color:#C9D1D9;">) portArr.</span><span style="color:#D2A8FF;">push</span><span style="color:#C9D1D9;">(port);</span></span>
<span class="line"><span style="color:#C9D1D9;">  port.</span><span style="color:#D2A8FF;">onmessage</span><span style="color:#C9D1D9;"> </span><span style="color:#FF7B72;">=</span><span style="color:#C9D1D9;"> </span><span style="color:#FF7B72;">function</span><span style="color:#C9D1D9;">(</span><span style="color:#FFA657;">e</span><span style="color:#C9D1D9;">) {</span></span>
<span class="line"><span style="color:#C9D1D9;">    portArr.</span><span style="color:#D2A8FF;">forEach</span><span style="color:#C9D1D9;">( </span><span style="color:#FFA657;">v</span><span style="color:#C9D1D9;"> </span><span style="color:#FF7B72;">=&gt;</span><span style="color:#C9D1D9;"> {</span></span>
<span class="line"><span style="color:#C9D1D9;">        v.</span><span style="color:#D2A8FF;">postMessage</span><span style="color:#C9D1D9;">(e.data);</span></span>
<span class="line"><span style="color:#C9D1D9;">    })</span></span>
<span class="line"><span style="color:#C9D1D9;">  }</span></span>
<span class="line"><span style="color:#C9D1D9;">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br></div></div><h2 id="\u53C2\u8003" tabindex="-1">\u53C2\u8003 <a class="header-anchor" href="#\u53C2\u8003" aria-hidden="true">#</a></h2><div class="language- line-numbers-mode"><button class="copy"></button><span class="lang"></span><pre><code><span class="line"><span style="color:#c9d1d9;">https://developer.mozilla.org/zh-CN/docs/Web/API/Worker</span></span>
<span class="line"><span style="color:#c9d1d9;">https://developer.mozilla.org/zh-CN/docs/Web/API/SharedWorker</span></span>
<span class="line"><span style="color:#c9d1d9;">https://developer.mozilla.org/zh-CN/docs/Web/API/Web_Workers_API/Using_web_workers</span></span>
<span class="line"><span style="color:#c9d1d9;"></span></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div>`,15),p=[l];function r(c,t,d,D,i,y){return a(),n("div",null,p)}const C=s(o,[["render",r]]);export{b as __pageData,C as default};
