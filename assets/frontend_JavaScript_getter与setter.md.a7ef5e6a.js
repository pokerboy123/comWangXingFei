import{_ as s,c as n,o as a,a as l}from"./app.d69f0574.js";const u=JSON.parse('{"title":"getter\u4E0Esetter","description":"","frontmatter":{},"headers":[{"level":2,"title":"\u63CF\u8FF0","slug":"\u63CF\u8FF0","link":"#\u63CF\u8FF0","children":[]},{"level":2,"title":"\u5B57\u9762\u91CF\u58F0\u660E","slug":"\u5B57\u9762\u91CF\u58F0\u660E","link":"#\u5B57\u9762\u91CF\u58F0\u660E","children":[]},{"level":2,"title":"Object.defineProperty","slug":"object-defineproperty","link":"#object-defineproperty","children":[]}],"relativePath":"frontend/JavaScript/getter\u4E0Esetter.md","lastUpdated":1661928310000}'),e={name:"frontend/JavaScript/getter\u4E0Esetter.md"},p=l(`<h1 id="getter\u4E0Esetter" tabindex="-1">getter\u4E0Esetter <a class="header-anchor" href="#getter\u4E0Esetter" aria-hidden="true">#</a></h1><p><code>getter</code>\u662F\u4E00\u4E2A\u83B7\u53D6\u67D0\u4E2A\u5C5E\u6027\u7684\u503C\u7684\u65B9\u6CD5\uFF0C<code>setter</code>\u662F\u4E00\u4E2A\u8BBE\u5B9A\u67D0\u4E2A\u5C5E\u6027\u7684\u503C\u7684\u65B9\u6CD5\u3002</p><h2 id="\u63CF\u8FF0" tabindex="-1">\u63CF\u8FF0 <a class="header-anchor" href="#\u63CF\u8FF0" aria-hidden="true">#</a></h2><ul><li>\u901A\u8FC7<code>getter</code>\u4E0E<code>setter</code>\u53EF\u4EE5\u5B9E\u73B0\u6570\u636E\u53D6\u503C\u4E0E\u8D4B\u503C\u7684\u62E6\u622A\u64CD\u4F5C\uFF0C\u5F53\u60F3\u76D1\u63A7\u67D0\u4E2A\u503C\u7684\u53D8\u5316\u7684\u65F6\u5019\uFF0C\u901A\u8FC7<code>getter</code>\u4E0E<code>setter</code>\u5373\u53EF\u5B9E\u73B0\u76D1\u542C\uFF0C\u800C\u4E0D\u9700\u8981\u627E\u5230\u5E76\u4FEE\u6539\u6BCF\u4E00\u4E2A\u64CD\u4F5C\u8FD9\u4E2A\u503C\u7684\u4EE3\u7801\u3002</li><li>\u6709\u65F6\u9700\u8981\u5141\u8BB8\u8BBF\u95EE\u8FD4\u56DE\u52A8\u6001\u8BA1\u7B97\u503C\u7684\u5C5E\u6027\uFF0C\u6216\u8005\u9700\u8981\u53CD\u6620\u5185\u90E8\u53D8\u91CF\u7684\u72B6\u6001\uFF0C\u800C\u4E0D\u9700\u8981\u4F7F\u7528\u663E\u5F0F\u65B9\u6CD5\u8C03\u7528\uFF0C\u53EF\u4EE5\u4F7F\u7528<code>getter</code>\u4E0E<code>setter</code>\u6765\u5B9E\u73B0\u3002</li><li>\u5C3D\u7BA1\u53EF\u4EE5\u7ED3\u5408\u4F7F\u7528<code>getter</code>\u548C<code>setter</code>\u6765\u521B\u5EFA\u4E00\u4E2A\u4F2A\u5C5E\u6027\uFF0C\u4F46\u662F\u4E0D\u80FD\u5C06<code>getter</code>\u4E0E<code>setter</code>\u7ED1\u5B9A\u5230\u4E00\u4E2A\u5C5E\u6027\u5E76\u4E14\u8BE5\u5C5E\u6027\u5B9E\u9645\u4E0A\u5177\u6709\u4E00\u4E2A\u503C\u3002</li></ul><h2 id="\u5B57\u9762\u91CF\u58F0\u660E" tabindex="-1">\u5B57\u9762\u91CF\u58F0\u660E <a class="header-anchor" href="#\u5B57\u9762\u91CF\u58F0\u660E" aria-hidden="true">#</a></h2><p>\u53EF\u4EE5\u76F4\u63A5\u901A\u8FC7\u5B57\u9762\u503C\u521B\u5EFA\u5BF9\u8C61\u65F6\u58F0\u660E<code>get</code>\u4E0E<code>set</code>\u65B9\u6CD5\u3002</p><div class="language-javascript line-numbers-mode"><button class="copy"></button><span class="lang">javascript</span><pre><code><span class="line"><span style="color:#FF7B72;">var</span><span style="color:#C9D1D9;"> obj  </span><span style="color:#FF7B72;">=</span><span style="color:#C9D1D9;"> {</span></span>
<span class="line"><span style="color:#C9D1D9;">    __x:</span><span style="color:#79C0FF;">1</span><span style="color:#C9D1D9;">,</span></span>
<span class="line"><span style="color:#C9D1D9;">    </span><span style="color:#FF7B72;">get</span><span style="color:#C9D1D9;"> </span><span style="color:#D2A8FF;">x</span><span style="color:#C9D1D9;">(){</span></span>
<span class="line"><span style="color:#C9D1D9;">        console.</span><span style="color:#D2A8FF;">log</span><span style="color:#C9D1D9;">(</span><span style="color:#A5D6FF;">&quot;\u53D6\u503C\u64CD\u4F5C&quot;</span><span style="color:#C9D1D9;">);</span></span>
<span class="line"><span style="color:#C9D1D9;">        </span><span style="color:#FF7B72;">return</span><span style="color:#C9D1D9;"> </span><span style="color:#79C0FF;">this</span><span style="color:#C9D1D9;">.__x;</span></span>
<span class="line"><span style="color:#C9D1D9;">    },</span></span>
<span class="line"><span style="color:#C9D1D9;">    </span><span style="color:#FF7B72;">set</span><span style="color:#C9D1D9;"> </span><span style="color:#D2A8FF;">x</span><span style="color:#C9D1D9;">(</span><span style="color:#FFA657;">v</span><span style="color:#C9D1D9;">){</span></span>
<span class="line"><span style="color:#C9D1D9;">        console.</span><span style="color:#D2A8FF;">log</span><span style="color:#C9D1D9;">(</span><span style="color:#A5D6FF;">&quot;\u8D4B\u503C\u64CD\u4F5C\uFF0C\u4F8B\u5982\u66F4\u65B0\u89C6\u56FE&quot;</span><span style="color:#C9D1D9;">);</span></span>
<span class="line"><span style="color:#C9D1D9;">        </span><span style="color:#79C0FF;">this</span><span style="color:#C9D1D9;">.__x</span><span style="color:#FF7B72;">=</span><span style="color:#C9D1D9;">v;</span></span>
<span class="line"><span style="color:#C9D1D9;">    }</span></span>
<span class="line"><span style="color:#C9D1D9;">}</span></span>
<span class="line"><span style="color:#C9D1D9;">console.</span><span style="color:#D2A8FF;">log</span><span style="color:#C9D1D9;">(obj.x); </span><span style="color:#8B949E;">// 1</span></span>
<span class="line"><span style="color:#C9D1D9;">obj.x </span><span style="color:#FF7B72;">=</span><span style="color:#C9D1D9;"> </span><span style="color:#79C0FF;">11</span><span style="color:#C9D1D9;">;</span></span>
<span class="line"><span style="color:#C9D1D9;">console.</span><span style="color:#D2A8FF;">log</span><span style="color:#C9D1D9;">(obj.x); </span><span style="color:#8B949E;">// 11</span></span>
<span class="line"><span style="color:#8B949E;">/*</span></span>
<span class="line"><span style="color:#8B949E;">  \u5B9A\u4E49__x\u662F\u4EE5\u53CC\u4E0B\u5212\u7EBF\u5F00\u5934\u7684\uFF0C\u662F\u4E0D\u5E0C\u671B\u76F4\u63A5\u8BBF\u95EE\u7684\u5C5E\u6027</span></span>
<span class="line"><span style="color:#8B949E;">  \u5F53\u7136\u53EF\u4EE5\u76F4\u63A5\u4F7F\u7528obj.__x\u5BF9\u5C5E\u6027\u8FDB\u884C\u8D4B\u503C\u4E0E\u53D6\u503C\u64CD\u4F5C\uFF0C\u4F46\u8FD9\u6837\u5C31\u5931\u53BB\u4E86get\u4E0Eset\u7684\u610F\u4E49</span></span>
<span class="line"><span style="color:#8B949E;"> */</span></span>
<span class="line"><span style="color:#8B949E;">/*</span></span>
<span class="line"><span style="color:#8B949E;">  \u53E6\u5916\u5173\u4E8E\u63CF\u8FF0\u4E2D\u7684\u7B2C\u4E09\u70B9\uFF0C\u4E0D\u80FD\u5C06getter\u4E0Esetter\u7ED1\u5B9A\u5230\u4E00\u4E2A\u5C5E\u6027\u5E76\u4E14\u8BE5\u5C5E\u6027\u5B9E\u9645\u4E0A\u5177\u6709\u4E00\u4E2A\u503C\uFF0C\u5426\u5219\u4F1A\u65E0\u9650\u9012\u5F52\u5806\u6808\u6EA2\u51FA\u4EA7\u751F\u5F02\u5E38</span></span>
<span class="line"><span style="color:#8B949E;">  var obj  = {</span></span>
<span class="line"><span style="color:#8B949E;">      x:1,</span></span>
<span class="line"><span style="color:#8B949E;">      get x(){</span></span>
<span class="line"><span style="color:#8B949E;">          return this.x;</span></span>
<span class="line"><span style="color:#8B949E;">      },</span></span>
<span class="line"><span style="color:#8B949E;">      set x(v){</span></span>
<span class="line"><span style="color:#8B949E;">          this.x=v;</span></span>
<span class="line"><span style="color:#8B949E;">      }</span></span>
<span class="line"><span style="color:#8B949E;">  }</span></span>
<span class="line"><span style="color:#8B949E;">  console.log(obj.x); // Uncaught RangeError: Maximum call stack size exceeded</span></span>
<span class="line"><span style="color:#8B949E;">/*</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br></div></div><h2 id="object-defineproperty" tabindex="-1">Object.defineProperty <a class="header-anchor" href="#object-defineproperty" aria-hidden="true">#</a></h2><p>\u4F7F\u7528<code>Object.defineProperty()</code>\u7CBE\u786E\u5730\u6DFB\u52A0\u6216\u4FEE\u6539\u5BF9\u8C61\u7684\u5C5E\u6027\u3002</p><div class="language-javascript line-numbers-mode"><button class="copy"></button><span class="lang">javascript</span><pre><code><span class="line"><span style="color:#FF7B72;">var</span><span style="color:#C9D1D9;"> obj  </span><span style="color:#FF7B72;">=</span><span style="color:#C9D1D9;"> {</span></span>
<span class="line"><span style="color:#C9D1D9;">    __x:</span><span style="color:#79C0FF;">1</span></span>
<span class="line"><span style="color:#C9D1D9;">}</span></span>
<span class="line"><span style="color:#C9D1D9;">Object.</span><span style="color:#D2A8FF;">defineProperty</span><span style="color:#C9D1D9;">(obj, </span><span style="color:#A5D6FF;">&quot;x&quot;</span><span style="color:#C9D1D9;">, {</span></span>
<span class="line"><span style="color:#C9D1D9;">    </span><span style="color:#D2A8FF;">get</span><span style="color:#C9D1D9;">: </span><span style="color:#FF7B72;">function</span><span style="color:#C9D1D9;">(){</span></span>
<span class="line"><span style="color:#C9D1D9;">        console.</span><span style="color:#D2A8FF;">log</span><span style="color:#C9D1D9;">(</span><span style="color:#A5D6FF;">&quot;\u53D6\u503C\u64CD\u4F5C&quot;</span><span style="color:#C9D1D9;">);</span></span>
<span class="line"><span style="color:#C9D1D9;">        </span><span style="color:#FF7B72;">return</span><span style="color:#C9D1D9;"> </span><span style="color:#79C0FF;">this</span><span style="color:#C9D1D9;">.__x;</span></span>
<span class="line"><span style="color:#C9D1D9;">    },</span></span>
<span class="line"><span style="color:#C9D1D9;">    </span><span style="color:#D2A8FF;">set</span><span style="color:#C9D1D9;">: </span><span style="color:#FF7B72;">function</span><span style="color:#C9D1D9;">(</span><span style="color:#FFA657;">v</span><span style="color:#C9D1D9;">){</span></span>
<span class="line"><span style="color:#C9D1D9;">        console.</span><span style="color:#D2A8FF;">log</span><span style="color:#C9D1D9;">(</span><span style="color:#A5D6FF;">&quot;\u8D4B\u503C\u64CD\u4F5C\uFF0C\u4F8B\u5982\u66F4\u65B0\u89C6\u56FE&quot;</span><span style="color:#C9D1D9;">);</span></span>
<span class="line"><span style="color:#C9D1D9;">        </span><span style="color:#79C0FF;">this</span><span style="color:#C9D1D9;">.__x</span><span style="color:#FF7B72;">=</span><span style="color:#C9D1D9;">v;</span></span>
<span class="line"><span style="color:#C9D1D9;">    }</span></span>
<span class="line"><span style="color:#C9D1D9;">});</span></span>
<span class="line"><span style="color:#C9D1D9;">console.</span><span style="color:#D2A8FF;">log</span><span style="color:#C9D1D9;">(obj.x); </span><span style="color:#8B949E;">// 1</span></span>
<span class="line"><span style="color:#C9D1D9;">obj.x </span><span style="color:#FF7B72;">=</span><span style="color:#C9D1D9;"> </span><span style="color:#79C0FF;">11</span><span style="color:#C9D1D9;">;</span></span>
<span class="line"><span style="color:#C9D1D9;">console.</span><span style="color:#D2A8FF;">log</span><span style="color:#C9D1D9;">(obj.x); </span><span style="color:#8B949E;">// 11</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br></div></div>`,10),o=[p];function r(c,t,i,D,y,b){return a(),n("div",null,o)}const F=s(e,[["render",r]]);export{u as __pageData,F as default};
