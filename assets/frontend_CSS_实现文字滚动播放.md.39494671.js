import{_ as s,c as n,o as a,a as l}from"./app.d69f0574.js";const b=JSON.parse('{"title":"\u5B9E\u73B0\u6587\u5B57\u6EDA\u52A8\u64AD\u653E","description":"","frontmatter":{},"headers":[{"level":2,"title":"\u5B9E\u73B0","slug":"\u5B9E\u73B0","link":"#\u5B9E\u73B0","children":[{"level":3,"title":"CSS Animation","slug":"css-animation","link":"#css-animation","children":[]},{"level":3,"title":"JavaScript","slug":"javascript","link":"#javascript","children":[]}]},{"level":2,"title":"\u53C2\u8003","slug":"\u53C2\u8003","link":"#\u53C2\u8003","children":[]}],"relativePath":"frontend/CSS/\u5B9E\u73B0\u6587\u5B57\u6EDA\u52A8\u64AD\u653E.md","lastUpdated":1661926357000}'),p={name:"frontend/CSS/\u5B9E\u73B0\u6587\u5B57\u6EDA\u52A8\u64AD\u653E.md"},o=l(`<h1 id="\u5B9E\u73B0\u6587\u5B57\u6EDA\u52A8\u64AD\u653E" tabindex="-1">\u5B9E\u73B0\u6587\u5B57\u6EDA\u52A8\u64AD\u653E <a class="header-anchor" href="#\u5B9E\u73B0\u6587\u5B57\u6EDA\u52A8\u64AD\u653E" aria-hidden="true">#</a></h1><p>\u5B9E\u73B0\u6587\u5B57\u6EDA\u52A8\u64AD\u653E\uFF0C\u901A\u8FC7\u4F7F\u7528<code>CSS3</code>\u52A8\u753B\u4E0E<code>Js</code>\u63A7\u5236\u6765\u5B9E\u73B0\uFF0C\u7531\u4E8E\u4F7F\u7528<code>CSS</code>\u52A8\u753B\u6765\u63A7\u5236\u504F\u79FB\u9650\u5236\u8F83\u591A\uFF0C\u56E0\u6B64\u901A\u5E38\u8FD8\u662F\u4F7F\u7528<code>Js</code>\u6765\u5B9E\u73B0\u3002</p><h2 id="\u5B9E\u73B0" tabindex="-1">\u5B9E\u73B0 <a class="header-anchor" href="#\u5B9E\u73B0" aria-hidden="true">#</a></h2><h3 id="css-animation" tabindex="-1">CSS Animation <a class="header-anchor" href="#css-animation" aria-hidden="true">#</a></h3><p>\u4F7F\u7528<code>CSS</code>\u52A8\u753B\u65B9\u6CD5\uFF0C\u4F7F\u7528<code>position: relative</code>\u914D\u5408<code>left</code>\u5C5E\u6027\u6765\u63A7\u5236\u6587\u5B57\u5143\u7D20\u8DDD\u79BB\u5DE6\u4FA7\u76F8\u5BF9\u504F\u79FB\u7684\u8DDD\u79BB\u3002\u6B64\u65B9\u6CD5\u7684\u4E3B\u8981\u95EE\u9898\u5728\u4E8E<code>left</code>\u662F<code>100%</code>\u662F\u76F8\u5BF9\u4E8E\u7236\u7EA7\u5143\u7D20\u7684\u5BBD\u5EA6\u6765\u8BF4\u7684\uFF0C\u56E0\u6B64\u8FD9\u4E2A\u503C\u7684\u8BBE\u5B9A\u8981\u53D6\u51B3\u4E8E\u7236\u7EA7\u5143\u7D20\u7684\u5BBD\u5EA6\u548C\u672C\u8EAB\u5143\u7D20\u5185\u5BB9\u7684\u5BBD\u5EA6\u3002</p><div class="language-html line-numbers-mode"><button class="copy"></button><span class="lang">html</span><pre><code><span class="line"><span style="color:#C9D1D9;">&lt;!</span><span style="color:#7EE787;">DOCTYPE</span><span style="color:#C9D1D9;"> </span><span style="color:#79C0FF;">html</span><span style="color:#C9D1D9;">&gt;</span></span>
<span class="line"><span style="color:#C9D1D9;">&lt;</span><span style="color:#7EE787;">html</span><span style="color:#C9D1D9;">&gt;</span></span>
<span class="line"><span style="color:#C9D1D9;">&lt;</span><span style="color:#7EE787;">head</span><span style="color:#C9D1D9;">&gt;</span></span>
<span class="line"><span style="color:#C9D1D9;">    &lt;</span><span style="color:#7EE787;">title</span><span style="color:#C9D1D9;">&gt;CSS Animation&lt;/</span><span style="color:#7EE787;">title</span><span style="color:#C9D1D9;">&gt;</span></span>
<span class="line"><span style="color:#C9D1D9;">    &lt;</span><span style="color:#7EE787;">style</span><span style="color:#C9D1D9;"> </span><span style="color:#79C0FF;">type</span><span style="color:#C9D1D9;">=</span><span style="color:#A5D6FF;">&quot;text/css&quot;</span><span style="color:#C9D1D9;">&gt;</span></span>
<span class="line"><span style="color:#C9D1D9;">        </span><span style="color:#79C0FF;">.container</span><span style="color:#C9D1D9;">{</span></span>
<span class="line"><span style="color:#C9D1D9;">            </span><span style="color:#79C0FF;">border</span><span style="color:#C9D1D9;">: </span><span style="color:#79C0FF;">1</span><span style="color:#FF7B72;">px</span><span style="color:#C9D1D9;"> </span><span style="color:#79C0FF;">solid</span><span style="color:#C9D1D9;"> </span><span style="color:#79C0FF;">#eee</span><span style="color:#C9D1D9;">;</span></span>
<span class="line"><span style="color:#C9D1D9;">            </span><span style="color:#79C0FF;">overflow</span><span style="color:#C9D1D9;">: </span><span style="color:#79C0FF;">hidden</span><span style="color:#C9D1D9;">;</span></span>
<span class="line"><span style="color:#C9D1D9;">            </span><span style="color:#79C0FF;">display</span><span style="color:#C9D1D9;">: </span><span style="color:#79C0FF;">inline-block</span><span style="color:#C9D1D9;">;</span></span>
<span class="line"><span style="color:#C9D1D9;">        }</span></span>
<span class="line"><span style="color:#C9D1D9;">        </span><span style="color:#FF7B72;">@keyframes</span><span style="color:#C9D1D9;"> </span><span style="color:#FFA657;">text-scroll</span><span style="color:#C9D1D9;"> {</span></span>
<span class="line"><span style="color:#C9D1D9;">            </span><span style="color:#79C0FF;">0%</span><span style="color:#C9D1D9;"> {</span></span>
<span class="line"><span style="color:#C9D1D9;">                </span><span style="color:#79C0FF;">left</span><span style="color:#C9D1D9;">: </span><span style="color:#79C0FF;">100</span><span style="color:#FF7B72;">%</span><span style="color:#C9D1D9;">;</span></span>
<span class="line"><span style="color:#C9D1D9;">            }</span></span>
<span class="line"><span style="color:#C9D1D9;">            </span><span style="color:#79C0FF;">25%</span><span style="color:#C9D1D9;"> {</span></span>
<span class="line"><span style="color:#C9D1D9;">                </span><span style="color:#79C0FF;">left</span><span style="color:#C9D1D9;">: </span><span style="color:#79C0FF;">50</span><span style="color:#FF7B72;">%</span><span style="color:#C9D1D9;">;</span></span>
<span class="line"><span style="color:#C9D1D9;">            }</span></span>
<span class="line"><span style="color:#C9D1D9;">            </span><span style="color:#79C0FF;">50%</span><span style="color:#C9D1D9;"> {</span></span>
<span class="line"><span style="color:#C9D1D9;">                </span><span style="color:#79C0FF;">left</span><span style="color:#C9D1D9;">: </span><span style="color:#79C0FF;">0</span><span style="color:#FF7B72;">%</span><span style="color:#C9D1D9;">;</span></span>
<span class="line"><span style="color:#C9D1D9;">            }</span></span>
<span class="line"><span style="color:#C9D1D9;">            </span><span style="color:#79C0FF;">75%</span><span style="color:#C9D1D9;"> {</span></span>
<span class="line"><span style="color:#C9D1D9;">                </span><span style="color:#79C0FF;">left</span><span style="color:#C9D1D9;">: </span><span style="color:#79C0FF;">-50</span><span style="color:#FF7B72;">%</span><span style="color:#C9D1D9;">;</span></span>
<span class="line"><span style="color:#C9D1D9;">            }</span></span>
<span class="line"><span style="color:#C9D1D9;">            </span><span style="color:#79C0FF;">100%</span><span style="color:#C9D1D9;"> {</span></span>
<span class="line"><span style="color:#C9D1D9;">                </span><span style="color:#79C0FF;">left</span><span style="color:#C9D1D9;">: </span><span style="color:#79C0FF;">-100</span><span style="color:#FF7B72;">%</span><span style="color:#C9D1D9;">;</span></span>
<span class="line"><span style="color:#C9D1D9;">            }</span></span>
<span class="line"><span style="color:#C9D1D9;">        }</span></span>
<span class="line"><span style="color:#C9D1D9;">        </span><span style="color:#79C0FF;">.text</span><span style="color:#C9D1D9;"> {</span></span>
<span class="line"><span style="color:#C9D1D9;">            </span><span style="color:#79C0FF;">position</span><span style="color:#C9D1D9;">: </span><span style="color:#79C0FF;">relative</span><span style="color:#C9D1D9;">;</span></span>
<span class="line"><span style="color:#C9D1D9;">            </span><span style="color:#79C0FF;">animation</span><span style="color:#C9D1D9;">: text-scroll </span><span style="color:#79C0FF;">5</span><span style="color:#FF7B72;">s</span><span style="color:#C9D1D9;"> </span><span style="color:#79C0FF;">linear</span><span style="color:#C9D1D9;"> </span><span style="color:#79C0FF;">infinite</span><span style="color:#C9D1D9;">;</span></span>
<span class="line"><span style="color:#C9D1D9;">        } </span></span>
<span class="line"></span>
<span class="line"><span style="color:#C9D1D9;">    &lt;/</span><span style="color:#7EE787;">style</span><span style="color:#C9D1D9;">&gt;</span></span>
<span class="line"><span style="color:#C9D1D9;">&lt;/</span><span style="color:#7EE787;">head</span><span style="color:#C9D1D9;">&gt;</span></span>
<span class="line"><span style="color:#C9D1D9;">&lt;</span><span style="color:#7EE787;">body</span><span style="color:#C9D1D9;">&gt;</span></span>
<span class="line"><span style="color:#C9D1D9;">    &lt;</span><span style="color:#7EE787;">div</span><span style="color:#C9D1D9;"> </span><span style="color:#79C0FF;">class</span><span style="color:#C9D1D9;">=</span><span style="color:#A5D6FF;">&quot;container&quot;</span><span style="color:#C9D1D9;">&gt;</span></span>
<span class="line"><span style="color:#C9D1D9;">        &lt;</span><span style="color:#7EE787;">div</span><span style="color:#C9D1D9;"> </span><span style="color:#79C0FF;">class</span><span style="color:#C9D1D9;">=</span><span style="color:#A5D6FF;">&quot;text&quot;</span><span style="color:#C9D1D9;">&gt;\u5FAA\u73AF\u6EDA\u52A8\u64AD\u653E\u6EF4\u6EF4\u7B54\u7B54\u6EF4\u6EF4\u7B54\u7B54\u6EF4\u6EF4\u7B54\u7B54&lt;/</span><span style="color:#7EE787;">div</span><span style="color:#C9D1D9;">&gt;</span></span>
<span class="line"><span style="color:#C9D1D9;">    &lt;</span><span style="color:#7EE787;">div</span><span style="color:#C9D1D9;">&gt;</span></span>
<span class="line"><span style="color:#C9D1D9;">&lt;/</span><span style="color:#7EE787;">body</span><span style="color:#C9D1D9;">&gt;</span></span>
<span class="line"><span style="color:#C9D1D9;">&lt;/</span><span style="color:#7EE787;">html</span><span style="color:#C9D1D9;">&gt;</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br></div></div><p>\u4F7F\u7528<code>CSS</code>\u52A8\u753B\u65B9\u6CD5\uFF0C\u4F7F\u7528<code>transform: translateX()</code>\u5C5E\u6027\u6765\u63A7\u5236\u6587\u5B57\u5143\u7D20\u8DDD\u79BB\u5DE6\u4FA7\u76F8\u5BF9\u504F\u79FB\u7684\u8DDD\u79BB\uFF0C\u6B64\u65B9\u6CD5\u540C\u6837\u4E5F\u5B58\u5728\u4E0A\u8FF0\u7684\u95EE\u9898\u3002</p><div class="language-html line-numbers-mode"><button class="copy"></button><span class="lang">html</span><pre><code><span class="line"><span style="color:#C9D1D9;">&lt;!</span><span style="color:#7EE787;">DOCTYPE</span><span style="color:#C9D1D9;"> </span><span style="color:#79C0FF;">html</span><span style="color:#C9D1D9;">&gt;</span></span>
<span class="line"><span style="color:#C9D1D9;">&lt;</span><span style="color:#7EE787;">html</span><span style="color:#C9D1D9;">&gt;</span></span>
<span class="line"><span style="color:#C9D1D9;">&lt;</span><span style="color:#7EE787;">head</span><span style="color:#C9D1D9;">&gt;</span></span>
<span class="line"><span style="color:#C9D1D9;">    &lt;</span><span style="color:#7EE787;">title</span><span style="color:#C9D1D9;">&gt;CSS Animation&lt;/</span><span style="color:#7EE787;">title</span><span style="color:#C9D1D9;">&gt;</span></span>
<span class="line"><span style="color:#C9D1D9;">    &lt;</span><span style="color:#7EE787;">style</span><span style="color:#C9D1D9;"> </span><span style="color:#79C0FF;">type</span><span style="color:#C9D1D9;">=</span><span style="color:#A5D6FF;">&quot;text/css&quot;</span><span style="color:#C9D1D9;">&gt;</span></span>
<span class="line"><span style="color:#C9D1D9;">        </span><span style="color:#79C0FF;">.container</span><span style="color:#C9D1D9;">{</span></span>
<span class="line"><span style="color:#C9D1D9;">            </span><span style="color:#79C0FF;">border</span><span style="color:#C9D1D9;">: </span><span style="color:#79C0FF;">1</span><span style="color:#FF7B72;">px</span><span style="color:#C9D1D9;"> </span><span style="color:#79C0FF;">solid</span><span style="color:#C9D1D9;"> </span><span style="color:#79C0FF;">#eee</span><span style="color:#C9D1D9;">;</span></span>
<span class="line"><span style="color:#C9D1D9;">            </span><span style="color:#79C0FF;">overflow</span><span style="color:#C9D1D9;">: </span><span style="color:#79C0FF;">hidden</span><span style="color:#C9D1D9;">;</span></span>
<span class="line"><span style="color:#C9D1D9;">            </span><span style="color:#79C0FF;">display</span><span style="color:#C9D1D9;">: </span><span style="color:#79C0FF;">inline-block</span><span style="color:#C9D1D9;">;</span></span>
<span class="line"><span style="color:#C9D1D9;">        }</span></span>
<span class="line"><span style="color:#C9D1D9;">        </span><span style="color:#FF7B72;">@keyframes</span><span style="color:#C9D1D9;"> </span><span style="color:#FFA657;">text-scroll</span><span style="color:#C9D1D9;"> {</span></span>
<span class="line"><span style="color:#C9D1D9;">            </span><span style="color:#79C0FF;">0%</span><span style="color:#C9D1D9;"> {</span></span>
<span class="line"><span style="color:#C9D1D9;">                </span><span style="color:#79C0FF;">transform</span><span style="color:#C9D1D9;">: </span><span style="color:#79C0FF;">translateX</span><span style="color:#C9D1D9;">(</span><span style="color:#79C0FF;">100</span><span style="color:#FF7B72;">%</span><span style="color:#C9D1D9;">);</span></span>
<span class="line"><span style="color:#C9D1D9;">            }</span></span>
<span class="line"><span style="color:#C9D1D9;">            </span><span style="color:#79C0FF;">50%</span><span style="color:#C9D1D9;"> {</span></span>
<span class="line"><span style="color:#C9D1D9;">                </span><span style="color:#79C0FF;">transform</span><span style="color:#C9D1D9;">: </span><span style="color:#79C0FF;">translateX</span><span style="color:#C9D1D9;">(</span><span style="color:#79C0FF;">0</span><span style="color:#C9D1D9;">);</span></span>
<span class="line"><span style="color:#C9D1D9;">            }</span></span>
<span class="line"><span style="color:#C9D1D9;">            </span><span style="color:#79C0FF;">100%</span><span style="color:#C9D1D9;"> {</span></span>
<span class="line"><span style="color:#C9D1D9;">                </span><span style="color:#79C0FF;">transform</span><span style="color:#C9D1D9;">: </span><span style="color:#79C0FF;">translateX</span><span style="color:#C9D1D9;">(</span><span style="color:#79C0FF;">-100</span><span style="color:#FF7B72;">%</span><span style="color:#C9D1D9;">);</span></span>
<span class="line"><span style="color:#C9D1D9;">            }</span></span>
<span class="line"><span style="color:#C9D1D9;">        }</span></span>
<span class="line"><span style="color:#C9D1D9;">        </span><span style="color:#79C0FF;">.text</span><span style="color:#C9D1D9;"> {</span></span>
<span class="line"><span style="color:#C9D1D9;">            </span><span style="color:#79C0FF;">animation</span><span style="color:#C9D1D9;">: text-scroll </span><span style="color:#79C0FF;">5</span><span style="color:#FF7B72;">s</span><span style="color:#C9D1D9;"> </span><span style="color:#79C0FF;">linear</span><span style="color:#C9D1D9;"> </span><span style="color:#79C0FF;">infinite</span><span style="color:#C9D1D9;">;</span></span>
<span class="line"><span style="color:#C9D1D9;">        } </span></span>
<span class="line"></span>
<span class="line"><span style="color:#C9D1D9;">    &lt;/</span><span style="color:#7EE787;">style</span><span style="color:#C9D1D9;">&gt;</span></span>
<span class="line"><span style="color:#C9D1D9;">&lt;/</span><span style="color:#7EE787;">head</span><span style="color:#C9D1D9;">&gt;</span></span>
<span class="line"><span style="color:#C9D1D9;">&lt;</span><span style="color:#7EE787;">body</span><span style="color:#C9D1D9;">&gt;</span></span>
<span class="line"><span style="color:#C9D1D9;">    &lt;</span><span style="color:#7EE787;">div</span><span style="color:#C9D1D9;"> </span><span style="color:#79C0FF;">class</span><span style="color:#C9D1D9;">=</span><span style="color:#A5D6FF;">&quot;container&quot;</span><span style="color:#C9D1D9;">&gt;</span></span>
<span class="line"><span style="color:#C9D1D9;">        &lt;</span><span style="color:#7EE787;">div</span><span style="color:#C9D1D9;"> </span><span style="color:#79C0FF;">class</span><span style="color:#C9D1D9;">=</span><span style="color:#A5D6FF;">&quot;text&quot;</span><span style="color:#C9D1D9;">&gt;\u5FAA\u73AF\u6EDA\u52A8\u64AD\u653E\u6EF4\u6EF4\u7B54\u7B54\u6EF4\u6EF4\u7B54\u7B54\u6EF4\u6EF4\u7B54\u7B54&lt;/</span><span style="color:#7EE787;">div</span><span style="color:#C9D1D9;">&gt;</span></span>
<span class="line"><span style="color:#C9D1D9;">    &lt;</span><span style="color:#7EE787;">div</span><span style="color:#C9D1D9;">&gt;</span></span>
<span class="line"><span style="color:#C9D1D9;">&lt;/</span><span style="color:#7EE787;">body</span><span style="color:#C9D1D9;">&gt;</span></span>
<span class="line"><span style="color:#C9D1D9;">&lt;/</span><span style="color:#7EE787;">html</span><span style="color:#C9D1D9;">&gt;</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br></div></div><h3 id="javascript" tabindex="-1">JavaScript <a class="header-anchor" href="#javascript" aria-hidden="true">#</a></h3><p>\u4F7F\u7528<code>Javascript</code>\u6211\u4EEC\u80FD\u591F\u5B9E\u73B0\u65E0\u7F1D\u6EDA\u52A8\uFF0C\u5373\u9700\u8981\u590D\u5236\u4E00\u4EFD\u4E00\u6837\u7684\u5143\u7D20\u81F3\u539F\u5143\u7D20\u7684\u540E\u65B9\uFF0C\u5F53\u7B2C\u4E00\u4E2A\u5143\u7D20\u6EDA\u52A8\u5B8C\u6210\u540E\u6211\u4EEC\u7ACB\u5373\u5C06\u4F4D\u7F6E\u590D\u539F\u3002</p><div class="language-html line-numbers-mode"><button class="copy"></button><span class="lang">html</span><pre><code><span class="line"><span style="color:#C9D1D9;">&lt;!</span><span style="color:#7EE787;">DOCTYPE</span><span style="color:#C9D1D9;"> </span><span style="color:#79C0FF;">html</span><span style="color:#C9D1D9;">&gt;</span></span>
<span class="line"><span style="color:#C9D1D9;">&lt;</span><span style="color:#7EE787;">html</span><span style="color:#C9D1D9;">&gt;</span></span>
<span class="line"><span style="color:#C9D1D9;">&lt;</span><span style="color:#7EE787;">head</span><span style="color:#C9D1D9;">&gt;</span></span>
<span class="line"><span style="color:#C9D1D9;">    &lt;</span><span style="color:#7EE787;">title</span><span style="color:#C9D1D9;">&gt;Javascript&lt;/</span><span style="color:#7EE787;">title</span><span style="color:#C9D1D9;">&gt;</span></span>
<span class="line"><span style="color:#C9D1D9;">    &lt;</span><span style="color:#7EE787;">style</span><span style="color:#C9D1D9;"> </span><span style="color:#79C0FF;">type</span><span style="color:#C9D1D9;">=</span><span style="color:#A5D6FF;">&quot;text/css&quot;</span><span style="color:#C9D1D9;">&gt;</span></span>
<span class="line"><span style="color:#C9D1D9;">        </span><span style="color:#79C0FF;">.container</span><span style="color:#C9D1D9;">{</span></span>
<span class="line"><span style="color:#C9D1D9;">            </span><span style="color:#79C0FF;">display</span><span style="color:#C9D1D9;">: </span><span style="color:#79C0FF;">flex</span><span style="color:#C9D1D9;">;</span></span>
<span class="line"><span style="color:#C9D1D9;">            </span><span style="color:#79C0FF;">border</span><span style="color:#C9D1D9;">: </span><span style="color:#79C0FF;">1</span><span style="color:#FF7B72;">px</span><span style="color:#C9D1D9;"> </span><span style="color:#79C0FF;">solid</span><span style="color:#C9D1D9;"> </span><span style="color:#79C0FF;">#eee</span><span style="color:#C9D1D9;">;</span></span>
<span class="line"><span style="color:#C9D1D9;">            </span><span style="color:#79C0FF;">overflow</span><span style="color:#C9D1D9;">: </span><span style="color:#79C0FF;">hidden</span><span style="color:#C9D1D9;">;</span></span>
<span class="line"><span style="color:#C9D1D9;">            </span><span style="color:#79C0FF;">text-overflow</span><span style="color:#C9D1D9;">: </span><span style="color:#79C0FF;">ellipsis</span><span style="color:#C9D1D9;">;</span></span>
<span class="line"><span style="color:#C9D1D9;">            </span><span style="color:#79C0FF;">width</span><span style="color:#C9D1D9;">: </span><span style="color:#79C0FF;">150</span><span style="color:#FF7B72;">px</span><span style="color:#C9D1D9;">;</span></span>
<span class="line"><span style="color:#C9D1D9;">        }</span></span>
<span class="line"><span style="color:#C9D1D9;">        </span><span style="color:#79C0FF;">.text</span><span style="color:#C9D1D9;">{</span></span>
<span class="line"><span style="color:#C9D1D9;">            </span><span style="color:#79C0FF;">padding</span><span style="color:#C9D1D9;">: </span><span style="color:#79C0FF;">0</span><span style="color:#C9D1D9;"> </span><span style="color:#79C0FF;">5</span><span style="color:#FF7B72;">px</span><span style="color:#C9D1D9;">;</span></span>
<span class="line"><span style="color:#C9D1D9;">            </span><span style="color:#79C0FF;">white-space</span><span style="color:#C9D1D9;">:</span><span style="color:#79C0FF;">nowrap</span><span style="color:#C9D1D9;">;</span></span>
<span class="line"><span style="color:#C9D1D9;">        }</span></span>
<span class="line"><span style="color:#C9D1D9;">    &lt;/</span><span style="color:#7EE787;">style</span><span style="color:#C9D1D9;">&gt;</span></span>
<span class="line"><span style="color:#C9D1D9;">&lt;/</span><span style="color:#7EE787;">head</span><span style="color:#C9D1D9;">&gt;</span></span>
<span class="line"><span style="color:#C9D1D9;">&lt;</span><span style="color:#7EE787;">body</span><span style="color:#C9D1D9;">&gt;</span></span>
<span class="line"><span style="color:#C9D1D9;">    &lt;</span><span style="color:#7EE787;">div</span><span style="color:#C9D1D9;"> </span><span style="color:#79C0FF;">class</span><span style="color:#C9D1D9;">=</span><span style="color:#A5D6FF;">&quot;container&quot;</span><span style="color:#C9D1D9;">&gt;</span></span>
<span class="line"><span style="color:#C9D1D9;">        &lt;</span><span style="color:#7EE787;">div</span><span style="color:#C9D1D9;"> </span><span style="color:#79C0FF;">class</span><span style="color:#C9D1D9;">=</span><span style="color:#A5D6FF;">&quot;text&quot;</span><span style="color:#C9D1D9;">&gt;\u5FAA\u73AF\u6EDA\u52A8\u64AD\u653E\u6EF4\u6EF4\u7B54\u7B54\u6EF4\u6EF4\u7B54\u7B54\u6EF4\u6EF4\u7B54\u7B54&lt;/</span><span style="color:#7EE787;">div</span><span style="color:#C9D1D9;">&gt;</span></span>
<span class="line"><span style="color:#C9D1D9;">    &lt;</span><span style="color:#7EE787;">div</span><span style="color:#C9D1D9;">&gt;</span></span>
<span class="line"><span style="color:#C9D1D9;">&lt;/</span><span style="color:#7EE787;">body</span><span style="color:#C9D1D9;">&gt;</span></span>
<span class="line"><span style="color:#C9D1D9;">&lt;</span><span style="color:#7EE787;">script</span><span style="color:#C9D1D9;"> </span><span style="color:#79C0FF;">type</span><span style="color:#C9D1D9;">=</span><span style="color:#A5D6FF;">&quot;text/javascript&quot;</span><span style="color:#C9D1D9;">&gt;</span></span>
<span class="line"><span style="color:#C9D1D9;">    (</span><span style="color:#FF7B72;">function</span><span style="color:#C9D1D9;">(</span><span style="color:#FFA657;">win</span><span style="color:#C9D1D9;">, </span><span style="color:#FFA657;">doc</span><span style="color:#C9D1D9;">){</span></span>
<span class="line"><span style="color:#C9D1D9;">        </span><span style="color:#FF7B72;">const</span><span style="color:#C9D1D9;"> </span><span style="color:#79C0FF;">container</span><span style="color:#C9D1D9;"> </span><span style="color:#FF7B72;">=</span><span style="color:#C9D1D9;"> doc.</span><span style="color:#D2A8FF;">querySelector</span><span style="color:#C9D1D9;">(</span><span style="color:#A5D6FF;">&quot;.container&quot;</span><span style="color:#C9D1D9;">); </span><span style="color:#8B949E;">// \u5BB9\u5668\u5143\u7D20</span></span>
<span class="line"><span style="color:#C9D1D9;">        </span><span style="color:#FF7B72;">const</span><span style="color:#C9D1D9;"> </span><span style="color:#79C0FF;">textNode</span><span style="color:#C9D1D9;"> </span><span style="color:#FF7B72;">=</span><span style="color:#C9D1D9;"> doc.</span><span style="color:#D2A8FF;">querySelector</span><span style="color:#C9D1D9;">(</span><span style="color:#A5D6FF;">&quot;.container &gt; .text&quot;</span><span style="color:#C9D1D9;">); </span><span style="color:#8B949E;">// \u6587\u5B57\u5143\u7D20</span></span>
<span class="line"><span style="color:#C9D1D9;">        container.</span><span style="color:#D2A8FF;">appendChild</span><span style="color:#C9D1D9;">(textNode.</span><span style="color:#D2A8FF;">cloneNode</span><span style="color:#C9D1D9;">(</span><span style="color:#79C0FF;">true</span><span style="color:#C9D1D9;">)); </span><span style="color:#8B949E;">// \u590D\u5236\u5143\u7D20\u5230\u540E\u65B9</span></span>
<span class="line"><span style="color:#C9D1D9;">        </span><span style="color:#FF7B72;">const</span><span style="color:#C9D1D9;"> </span><span style="color:#79C0FF;">textWidth</span><span style="color:#C9D1D9;"> </span><span style="color:#FF7B72;">=</span><span style="color:#C9D1D9;"> textNode.offsetWidth; </span><span style="color:#8B949E;">// \u83B7\u53D6\u6587\u5B57\u5143\u7D20\u5BBD\u5EA6</span></span>
<span class="line"><span style="color:#C9D1D9;">        </span><span style="color:#FF7B72;">let</span><span style="color:#C9D1D9;"> count </span><span style="color:#FF7B72;">=</span><span style="color:#C9D1D9;"> container.offsetWidth; </span><span style="color:#8B949E;">// \u521D\u59CB\u5316\u5411\u5DE6\u504F\u79FB\u4E3A\u5BB9\u5668\u5927\u5C0F</span></span>
<span class="line"><span style="color:#C9D1D9;">        </span><span style="color:#FF7B72;">const</span><span style="color:#C9D1D9;"> </span><span style="color:#D2A8FF;">loop</span><span style="color:#C9D1D9;"> </span><span style="color:#FF7B72;">=</span><span style="color:#C9D1D9;"> () </span><span style="color:#FF7B72;">=&gt;</span><span style="color:#C9D1D9;"> {</span></span>
<span class="line"><span style="color:#C9D1D9;">            </span><span style="color:#FF7B72;">if</span><span style="color:#C9D1D9;">(count </span><span style="color:#FF7B72;">&lt;=</span><span style="color:#C9D1D9;"> </span><span style="color:#FF7B72;">-</span><span style="color:#C9D1D9;">textWidth) { </span><span style="color:#8B949E;">// \u5982\u679C\u6587\u5B57\u504F\u79FB\u8D85\u51FA\u4E00\u4E2A\u6587\u5B57\u5143\u7D20\u7684\u5BBD\u5EA6\u5219\u590D\u539F</span></span>
<span class="line"><span style="color:#C9D1D9;">                textNode.style[</span><span style="color:#A5D6FF;">&quot;margin-left&quot;</span><span style="color:#C9D1D9;">] </span><span style="color:#FF7B72;">=</span><span style="color:#C9D1D9;"> </span><span style="color:#79C0FF;">0</span><span style="color:#C9D1D9;">; </span><span style="color:#8B949E;">// \u590D\u539F</span></span>
<span class="line"><span style="color:#C9D1D9;">                count </span><span style="color:#FF7B72;">=</span><span style="color:#C9D1D9;"> </span><span style="color:#79C0FF;">0</span><span style="color:#C9D1D9;">; </span><span style="color:#8B949E;">// \u590D\u539F</span></span>
<span class="line"><span style="color:#C9D1D9;">            }</span></span>
<span class="line"><span style="color:#C9D1D9;">            textNode.style[</span><span style="color:#A5D6FF;">&quot;margin-left&quot;</span><span style="color:#C9D1D9;">] </span><span style="color:#FF7B72;">=</span><span style="color:#C9D1D9;"> </span><span style="color:#A5D6FF;">\`\${</span><span style="color:#C9D1D9;">count</span><span style="color:#FF7B72;">--</span><span style="color:#A5D6FF;">}px\`</span><span style="color:#C9D1D9;">; </span><span style="color:#8B949E;">// \u7EE7\u7EED\u5411\u5DE6\u79FB\u52A8</span></span>
<span class="line"><span style="color:#C9D1D9;">            window.</span><span style="color:#D2A8FF;">requestAnimationFrame</span><span style="color:#C9D1D9;">(() </span><span style="color:#FF7B72;">=&gt;</span><span style="color:#C9D1D9;"> </span><span style="color:#D2A8FF;">loop</span><span style="color:#C9D1D9;">()); </span><span style="color:#8B949E;">// \u52A8\u753B\u9012\u5F52\u8C03\u7528</span></span>
<span class="line"><span style="color:#C9D1D9;">        }</span></span>
<span class="line"><span style="color:#C9D1D9;">        window.</span><span style="color:#D2A8FF;">requestAnimationFrame</span><span style="color:#C9D1D9;">(() </span><span style="color:#FF7B72;">=&gt;</span><span style="color:#C9D1D9;"> </span><span style="color:#D2A8FF;">loop</span><span style="color:#C9D1D9;">()); </span><span style="color:#8B949E;">// \u542F\u52A8\u52A8\u753B</span></span>
<span class="line"><span style="color:#C9D1D9;">        </span><span style="color:#8B949E;">// requestAnimationFrame\u5F53\u9875\u9762\u5904\u7406\u672A\u6FC0\u6D3B\u7684\u72B6\u6001\u4E0B\uFF0C\u8BE5\u9875\u9762\u7684\u5C4F\u5E55\u5237\u65B0\u4EFB\u52A1\u4E5F\u4F1A\u88AB\u7CFB\u7EDF\u6682\u505C\uFF0C\u56E0\u6B64\u8DDF\u7740\u7CFB\u7EDF\u6B65\u4F10\u8D70\u7684requestAnimationFrame\u4E5F\u4F1A\u505C\u6B62\u6E32\u67D3\uFF0C\u5F53\u9875\u9762\u88AB\u6FC0\u6D3B\u65F6\uFF0C\u52A8\u753B\u5C31\u4ECE\u4E0A\u6B21\u505C\u7559\u7684\u5730\u65B9\u7EE7\u7EED\u6267\u884C\uFF0CsetInterval\u9700\u8981\u4F7F\u7528\u52A0\u5165visibilitychange\u76D1\u542C\u6765\u6E05\u9664\u4E0E\u91CD\u8BBE\u5B9A\u65F6\u5668</span></span>
<span class="line"><span style="color:#C9D1D9;">    })(window, document);</span></span>
<span class="line"><span style="color:#C9D1D9;">&lt;/</span><span style="color:#7EE787;">script</span><span style="color:#C9D1D9;">&gt;</span></span>
<span class="line"><span style="color:#C9D1D9;">&lt;/</span><span style="color:#7EE787;">html</span><span style="color:#C9D1D9;">&gt;</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br></div></div><h2 id="\u53C2\u8003" tabindex="-1">\u53C2\u8003 <a class="header-anchor" href="#\u53C2\u8003" aria-hidden="true">#</a></h2><div class="language- line-numbers-mode"><button class="copy"></button><span class="lang"></span><pre><code><span class="line"><span style="color:#c9d1d9;">https://zhuanlan.zhihu.com/p/101107612</span></span>
<span class="line"><span style="color:#c9d1d9;"></span></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br></div></div>`,13),e=[o];function c(r,t,D,y,i,C){return a(),n("div",null,e)}const u=s(p,[["render",c]]);export{b as __pageData,u as default};
