import{_ as s,c as n,o as a,a as l}from"./app.d69f0574.js";const b=JSON.parse('{"title":"1. \u6982\u8FF0","description":"","frontmatter":{},"headers":[{"level":2,"title":"\u57FA\u672C\u7C7B\u578B\u8F6C\u6362\u4E3AString","slug":"\u57FA\u672C\u7C7B\u578B\u8F6C\u6362\u4E3Astring","link":"#\u57FA\u672C\u7C7B\u578B\u8F6C\u6362\u4E3Astring","children":[{"level":3,"title":"","slug":"","link":"#","children":[]}]},{"level":2,"title":"String\u8F6C\u6362\u6210\u5BF9\u5E94\u7684\u57FA\u672C\u7C7B\u578B","slug":"string\u8F6C\u6362\u6210\u5BF9\u5E94\u7684\u57FA\u672C\u7C7B\u578B","link":"#string\u8F6C\u6362\u6210\u5BF9\u5E94\u7684\u57FA\u672C\u7C7B\u578B","children":[]}],"relativePath":"backend/JavaSE/\u5305\u88C5\u7C7B.md","lastUpdated":1661996031000}'),p={name:"backend/JavaSE/\u5305\u88C5\u7C7B.md"},e=l(`<h1 id="_1-\u6982\u8FF0" tabindex="-1">1. \u6982\u8FF0 <a class="header-anchor" href="#_1-\u6982\u8FF0" aria-hidden="true">#</a></h1><p>Java\u63D0\u4F9B\u4E86\u4E24\u4E2A\u7C7B\u578B\u7CFB\u7EDF\uFF0C\u57FA\u672C\u7C7B\u578B\u4E0E\u5F15\u7528\u7C7B\u578B\uFF0C\u4F7F\u7528\u57FA\u672C\u7C7B\u578B\u5728\u4E8E\u6548\u7387\uFF0C\u7136\u800C\u5F88\u591A\u60C5\u51B5\uFF0C\u4F1A\u521B\u5EFA\u5BF9\u8C61\u4F7F\u7528\uFF0C\u56E0\u4E3A\u5BF9\u8C61\u53EF\u4EE5\u505A\u66F4\u591A\u7684\u529F\u80FD\uFF0C\u5982\u679C\u60F3\u8981\u6211\u4EEC\u7684\u57FA\u672C\u7C7B\u578B\u50CF\u5BF9\u8C61\u4E00\u6837\u64CD\u4F5C\uFF0C\u5C31\u53EF\u4EE5\u4F7F\u7528\u57FA\u672C\u7C7B\u578B\u5BF9\u5E94\u7684\u5305\u88C5\u7C7B\uFF0C\u5982\u4E0B\uFF1A</p><table><thead><tr><th>\u57FA\u672C\u7C7B\u578B</th><th>\u5BF9\u5E94\u7684\u5305\u88C5\u7C7B\uFF08\u4F4D\u4E8Ejava.lang\u5305\u4E2D\uFF09</th></tr></thead><tbody><tr><td>byte</td><td>Byte</td></tr><tr><td>short</td><td>Short</td></tr><tr><td>int</td><td><strong>Integer</strong></td></tr><tr><td>long</td><td>Long</td></tr><tr><td>float</td><td>Float</td></tr><tr><td>double</td><td>Double</td></tr><tr><td>char</td><td><strong>Character</strong></td></tr><tr><td>boolean</td><td>Boolean</td></tr></tbody></table><h1 id="_2-integer\u7C7B" tabindex="-1">2. Integer\u7C7B <a class="header-anchor" href="#_2-integer\u7C7B" aria-hidden="true">#</a></h1><ul><li><p>Integer\u7C7B\u6982\u8FF0</p><p>\u5305\u88C5\u4E00\u4E2A\u5BF9\u8C61\u4E2D\u7684\u539F\u59CB\u7C7B\u578B int \u7684\u503C</p></li><li><p>Integer\u7C7B\u6784\u9020\u65B9\u6CD5\u53CA\u9759\u6001\u65B9\u6CD5</p></li></ul><table><thead><tr><th>\u65B9\u6CD5\u540D</th><th>\u8BF4\u660E</th></tr></thead><tbody><tr><td>public Integer(int value)</td><td>\u6839\u636E int \u503C\u521B\u5EFA Integer \u5BF9\u8C61(\u8FC7\u65F6)</td></tr><tr><td>public Integer(String s)</td><td>\u6839\u636E String \u503C\u521B\u5EFA Integer \u5BF9\u8C61(\u8FC7\u65F6)</td></tr><tr><td>public static Integer valueOf(int i)</td><td>\u8FD4\u56DE\u8868\u793A\u6307\u5B9A\u7684 int \u503C\u7684 Integer \u5B9E\u4F8B</td></tr><tr><td>public static Integer valueOf(String s)</td><td>\u8FD4\u56DE\u4FDD\u5B58\u6307\u5B9AString\u503C\u7684 Integer \u5BF9\u8C61</td></tr></tbody></table><ul><li>\u793A\u4F8B\u4EE3\u7801</li></ul><div class="language-java line-numbers-mode"><button class="copy"></button><span class="lang">java</span><pre><code><span class="line"><span style="color:#FF7B72;">public</span><span style="color:#C9D1D9;"> </span><span style="color:#FF7B72;">class</span><span style="color:#C9D1D9;"> </span><span style="color:#FFA657;">IntegerDemo</span><span style="color:#C9D1D9;"> {</span></span>
<span class="line"><span style="color:#C9D1D9;">    </span><span style="color:#FF7B72;">public</span><span style="color:#C9D1D9;"> </span><span style="color:#FF7B72;">static</span><span style="color:#C9D1D9;"> </span><span style="color:#FF7B72;">void</span><span style="color:#C9D1D9;"> </span><span style="color:#D2A8FF;">main</span><span style="color:#C9D1D9;">(</span><span style="color:#FF7B72;">String</span><span style="color:#C9D1D9;">[] </span><span style="color:#FFA657;">args</span><span style="color:#C9D1D9;">) {</span></span>
<span class="line"><span style="color:#C9D1D9;">        </span><span style="color:#8B949E;">//public Integer(int value)\uFF1A\u6839\u636E int \u503C\u521B\u5EFA Integer \u5BF9\u8C61(\u8FC7\u65F6)</span></span>
<span class="line"><span style="color:#C9D1D9;">        Integer</span><span style="color:#FFA657;"> </span><span style="color:#C9D1D9;">i1</span><span style="color:#FFA657;"> </span><span style="color:#FF7B72;">=</span><span style="color:#C9D1D9;"> </span><span style="color:#FF7B72;">new</span><span style="color:#C9D1D9;"> </span><span style="color:#D2A8FF;">Integer</span><span style="color:#C9D1D9;">(</span><span style="color:#79C0FF;">100</span><span style="color:#C9D1D9;">);</span></span>
<span class="line"><span style="color:#C9D1D9;">        System.out.</span><span style="color:#D2A8FF;">println</span><span style="color:#C9D1D9;">(i1);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#C9D1D9;">        </span><span style="color:#8B949E;">//public Integer(String s)\uFF1A\u6839\u636E String \u503C\u521B\u5EFA Integer \u5BF9\u8C61(\u8FC7\u65F6)</span></span>
<span class="line"><span style="color:#C9D1D9;">        Integer</span><span style="color:#FFA657;"> </span><span style="color:#C9D1D9;">i2</span><span style="color:#FFA657;"> </span><span style="color:#FF7B72;">=</span><span style="color:#C9D1D9;"> </span><span style="color:#FF7B72;">new</span><span style="color:#C9D1D9;"> </span><span style="color:#D2A8FF;">Integer</span><span style="color:#C9D1D9;">(</span><span style="color:#A5D6FF;">&quot;100&quot;</span><span style="color:#C9D1D9;">);</span></span>
<span class="line"><span style="color:#C9D1D9;">		</span><span style="color:#8B949E;">//Integer i2 = new Integer(&quot;abc&quot;); //NumberFormatException</span></span>
<span class="line"><span style="color:#C9D1D9;">        System.out.</span><span style="color:#D2A8FF;">println</span><span style="color:#C9D1D9;">(i2);</span></span>
<span class="line"><span style="color:#C9D1D9;">        System.out.</span><span style="color:#D2A8FF;">println</span><span style="color:#C9D1D9;">(</span><span style="color:#A5D6FF;">&quot;--------&quot;</span><span style="color:#C9D1D9;">);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#C9D1D9;">        </span><span style="color:#8B949E;">//public static Integer valueOf(int i)\uFF1A\u8FD4\u56DE\u8868\u793A\u6307\u5B9A\u7684 int \u503C\u7684 Integer \u5B9E\u4F8B</span></span>
<span class="line"><span style="color:#C9D1D9;">        Integer</span><span style="color:#FFA657;"> </span><span style="color:#C9D1D9;">i3</span><span style="color:#FFA657;"> </span><span style="color:#FF7B72;">=</span><span style="color:#C9D1D9;"> Integer.</span><span style="color:#D2A8FF;">valueOf</span><span style="color:#C9D1D9;">(</span><span style="color:#79C0FF;">100</span><span style="color:#C9D1D9;">);</span></span>
<span class="line"><span style="color:#C9D1D9;">        System.out.</span><span style="color:#D2A8FF;">println</span><span style="color:#C9D1D9;">(i3);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#C9D1D9;">        </span><span style="color:#8B949E;">//public static Integer valueOf(String s)\uFF1A\u8FD4\u56DE\u4FDD\u5B58\u6307\u5B9AString\u503C\u7684Integer\u5BF9\u8C61 </span></span>
<span class="line"><span style="color:#C9D1D9;">        Integer</span><span style="color:#FFA657;"> </span><span style="color:#C9D1D9;">i4</span><span style="color:#FFA657;"> </span><span style="color:#FF7B72;">=</span><span style="color:#C9D1D9;"> Integer.</span><span style="color:#D2A8FF;">valueOf</span><span style="color:#C9D1D9;">(</span><span style="color:#A5D6FF;">&quot;100&quot;</span><span style="color:#C9D1D9;">);</span></span>
<span class="line"><span style="color:#C9D1D9;">        System.out.</span><span style="color:#D2A8FF;">println</span><span style="color:#C9D1D9;">(i4);</span></span>
<span class="line"><span style="color:#C9D1D9;">    }</span></span>
<span class="line"><span style="color:#C9D1D9;">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br></div></div><h1 id="_3-\u88C5\u7BB1\u4E0E\u62C6\u7BB1" tabindex="-1">3. \u88C5\u7BB1\u4E0E\u62C6\u7BB1 <a class="header-anchor" href="#_3-\u88C5\u7BB1\u4E0E\u62C6\u7BB1" aria-hidden="true">#</a></h1><p>\u57FA\u672C\u7C7B\u578B\u4E0E\u5BF9\u5E94\u7684\u5305\u88C5\u7C7B\u5BF9\u8C61\u4E4B\u95F4\uFF0C\u6765\u56DE\u8F6C\u6362\u7684\u8FC7\u7A0B\u79F0\u4E3A\u201D\u88C5\u7BB1\u201C\u4E0E\u201D\u62C6\u7BB1\u201C\uFF1A</p><ul><li><p><strong>\u88C5\u7BB1</strong>\uFF1A\u4ECE\u57FA\u672C\u7C7B\u578B\u8F6C\u6362\u4E3A\u5BF9\u5E94\u7684\u5305\u88C5\u7C7B\u5BF9\u8C61\u3002</p></li><li><p><strong>\u62C6\u7BB1</strong>\uFF1A\u4ECE\u5305\u88C5\u7C7B\u5BF9\u8C61\u8F6C\u6362\u4E3A\u5BF9\u5E94\u7684\u57FA\u672C\u7C7B\u578B\u3002</p></li></ul><p>\u7528Integer\u4E0E int\u4E3A\u4F8B\uFF1A</p><p>\u57FA\u672C\u6570\u503C----&gt;\u5305\u88C5\u5BF9\u8C61</p><div class="language-java line-numbers-mode"><button class="copy"></button><span class="lang">java</span><pre><code><span class="line"><span style="color:#C9D1D9;">Integer</span><span style="color:#FFA657;"> </span><span style="color:#C9D1D9;">i</span><span style="color:#FFA657;"> </span><span style="color:#FF7B72;">=</span><span style="color:#C9D1D9;"> </span><span style="color:#FF7B72;">new</span><span style="color:#C9D1D9;"> </span><span style="color:#D2A8FF;">Integer</span><span style="color:#C9D1D9;">(</span><span style="color:#79C0FF;">4</span><span style="color:#C9D1D9;">);</span><span style="color:#8B949E;">//\u4F7F\u7528\u6784\u9020\u51FD\u6570\u51FD\u6570</span></span>
<span class="line"><span style="color:#C9D1D9;">Integer</span><span style="color:#FFA657;"> </span><span style="color:#C9D1D9;">iii</span><span style="color:#FFA657;"> </span><span style="color:#FF7B72;">=</span><span style="color:#C9D1D9;"> Integer.</span><span style="color:#D2A8FF;">valueOf</span><span style="color:#C9D1D9;">(</span><span style="color:#79C0FF;">4</span><span style="color:#C9D1D9;">);</span><span style="color:#8B949E;">//\u4F7F\u7528\u5305\u88C5\u7C7B\u4E2D\u7684valueOf\u65B9\u6CD5</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><p>\u5305\u88C5\u5BF9\u8C61----&gt;\u57FA\u672C\u6570\u503C</p><div class="language-java line-numbers-mode"><button class="copy"></button><span class="lang">java</span><pre><code><span class="line"><span style="color:#FF7B72;">int</span><span style="color:#FFA657;"> </span><span style="color:#C9D1D9;">num</span><span style="color:#FFA657;"> </span><span style="color:#FF7B72;">=</span><span style="color:#C9D1D9;"> i.</span><span style="color:#D2A8FF;">intValue</span><span style="color:#C9D1D9;">();</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br></div></div><h1 id="_4-\u81EA\u52A8\u88C5\u7BB1\u4E0E\u81EA\u52A8\u62C6\u7BB1" tabindex="-1">4. \u81EA\u52A8\u88C5\u7BB1\u4E0E\u81EA\u52A8\u62C6\u7BB1 <a class="header-anchor" href="#_4-\u81EA\u52A8\u88C5\u7BB1\u4E0E\u81EA\u52A8\u62C6\u7BB1" aria-hidden="true">#</a></h1><p>\u7531\u4E8E\u6211\u4EEC\u7ECF\u5E38\u8981\u505A\u57FA\u672C\u7C7B\u578B\u4E0E\u5305\u88C5\u7C7B\u4E4B\u95F4\u7684\u8F6C\u6362\uFF0C\u4ECEJava 5\uFF08JDK 1.5\uFF09\u5F00\u59CB\uFF0C\u57FA\u672C\u7C7B\u578B\u4E0E\u5305\u88C5\u7C7B\u7684\u88C5\u7BB1\u3001\u62C6\u7BB1\u52A8\u4F5C\u53EF\u4EE5\u81EA\u52A8\u5B8C\u6210\u3002\u4F8B\u5982\uFF1A</p><div class="language-java line-numbers-mode"><button class="copy"></button><span class="lang">java</span><pre><code><span class="line"><span style="color:#C9D1D9;">Integer</span><span style="color:#FFA657;"> </span><span style="color:#C9D1D9;">i</span><span style="color:#FFA657;"> </span><span style="color:#FF7B72;">=</span><span style="color:#C9D1D9;"> </span><span style="color:#79C0FF;">4</span><span style="color:#C9D1D9;">;</span><span style="color:#8B949E;">//\u81EA\u52A8\u88C5\u7BB1\u3002\u76F8\u5F53\u4E8EInteger i = Integer.valueOf(4);</span></span>
<span class="line"><span style="color:#C9D1D9;">i </span><span style="color:#FF7B72;">=</span><span style="color:#C9D1D9;"> i </span><span style="color:#FF7B72;">+</span><span style="color:#C9D1D9;"> </span><span style="color:#79C0FF;">5</span><span style="color:#C9D1D9;">;</span><span style="color:#8B949E;">//\u7B49\u53F7\u53F3\u8FB9\uFF1A\u5C06i\u5BF9\u8C61\u8F6C\u6210\u57FA\u672C\u6570\u503C(\u81EA\u52A8\u62C6\u7BB1) i.intValue() + 5;</span></span>
<span class="line"><span style="color:#8B949E;">//\u52A0\u6CD5\u8FD0\u7B97\u5B8C\u6210\u540E\uFF0C\u518D\u6B21\u88C5\u7BB1\uFF0C\u628A\u57FA\u672C\u6570\u503C\u8F6C\u6210\u5BF9\u8C61\u3002</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><h1 id="_5-\u57FA\u672C\u7C7B\u578B\u4E0E\u5B57\u7B26\u4E32\u4E4B\u95F4\u7684\u8F6C\u6362" tabindex="-1">5. \u57FA\u672C\u7C7B\u578B\u4E0E\u5B57\u7B26\u4E32\u4E4B\u95F4\u7684\u8F6C\u6362 <a class="header-anchor" href="#_5-\u57FA\u672C\u7C7B\u578B\u4E0E\u5B57\u7B26\u4E32\u4E4B\u95F4\u7684\u8F6C\u6362" aria-hidden="true">#</a></h1><h2 id="\u57FA\u672C\u7C7B\u578B\u8F6C\u6362\u4E3Astring" tabindex="-1">\u57FA\u672C\u7C7B\u578B\u8F6C\u6362\u4E3AString <a class="header-anchor" href="#\u57FA\u672C\u7C7B\u578B\u8F6C\u6362\u4E3Astring" aria-hidden="true">#</a></h2><ul><li>\u8F6C\u6362\u65B9\u5F0F <ul><li>\u65B9\u5F0F\u4E00\uFF1A\u76F4\u63A5\u5728\u6570\u5B57\u540E\u52A0\u4E00\u4E2A\u7A7A\u5B57\u7B26\u4E32</li><li>\u65B9\u5F0F\u4E8C\uFF1A\u901A\u8FC7String\u7C7B\u9759\u6001\u65B9\u6CD5valueOf()</li></ul></li><li>\u793A\u4F8B\u4EE3\u7801</li></ul><div class="language-java line-numbers-mode"><button class="copy"></button><span class="lang">java</span><pre><code><span class="line"><span style="color:#FF7B72;">public</span><span style="color:#C9D1D9;"> </span><span style="color:#FF7B72;">class</span><span style="color:#C9D1D9;"> </span><span style="color:#FFA657;">IntegerDemo</span><span style="color:#C9D1D9;"> {</span></span>
<span class="line"><span style="color:#C9D1D9;">    </span><span style="color:#FF7B72;">public</span><span style="color:#C9D1D9;"> </span><span style="color:#FF7B72;">static</span><span style="color:#C9D1D9;"> </span><span style="color:#FF7B72;">void</span><span style="color:#C9D1D9;"> </span><span style="color:#D2A8FF;">main</span><span style="color:#C9D1D9;">(</span><span style="color:#FF7B72;">String</span><span style="color:#C9D1D9;">[] </span><span style="color:#FFA657;">args</span><span style="color:#C9D1D9;">) {</span></span>
<span class="line"><span style="color:#C9D1D9;">        </span><span style="color:#8B949E;">//int --- String</span></span>
<span class="line"><span style="color:#C9D1D9;">        </span><span style="color:#FF7B72;">int</span><span style="color:#FFA657;"> </span><span style="color:#C9D1D9;">number</span><span style="color:#FFA657;"> </span><span style="color:#FF7B72;">=</span><span style="color:#C9D1D9;"> </span><span style="color:#79C0FF;">100</span><span style="color:#C9D1D9;">;</span></span>
<span class="line"><span style="color:#C9D1D9;">        </span><span style="color:#8B949E;">//\u65B9\u5F0F1</span></span>
<span class="line"><span style="color:#C9D1D9;">        String</span><span style="color:#FFA657;"> </span><span style="color:#C9D1D9;">s1</span><span style="color:#FFA657;"> </span><span style="color:#FF7B72;">=</span><span style="color:#C9D1D9;"> number </span><span style="color:#FF7B72;">+</span><span style="color:#C9D1D9;"> </span><span style="color:#A5D6FF;">&quot;&quot;</span><span style="color:#C9D1D9;">;</span></span>
<span class="line"><span style="color:#C9D1D9;">        System.out.</span><span style="color:#D2A8FF;">println</span><span style="color:#C9D1D9;">(s1);</span></span>
<span class="line"><span style="color:#C9D1D9;">        </span><span style="color:#8B949E;">//\u65B9\u5F0F2</span></span>
<span class="line"><span style="color:#C9D1D9;">        </span><span style="color:#8B949E;">//public static String valueOf(int i)</span></span>
<span class="line"><span style="color:#C9D1D9;">        String</span><span style="color:#FFA657;"> </span><span style="color:#C9D1D9;">s2</span><span style="color:#FFA657;"> </span><span style="color:#FF7B72;">=</span><span style="color:#C9D1D9;"> String.</span><span style="color:#D2A8FF;">valueOf</span><span style="color:#C9D1D9;">(number);</span></span>
<span class="line"><span style="color:#C9D1D9;">        System.out.</span><span style="color:#D2A8FF;">println</span><span style="color:#C9D1D9;">(s2);</span></span>
<span class="line"><span style="color:#C9D1D9;">        System.out.</span><span style="color:#D2A8FF;">println</span><span style="color:#C9D1D9;">(</span><span style="color:#A5D6FF;">&quot;--------&quot;</span><span style="color:#C9D1D9;">);</span></span>
<span class="line"><span style="color:#C9D1D9;">    }</span></span>
<span class="line"><span style="color:#C9D1D9;">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br></div></div><h3 id="" tabindex="-1"><a class="header-anchor" href="#" aria-hidden="true">#</a></h3><h2 id="string\u8F6C\u6362\u6210\u5BF9\u5E94\u7684\u57FA\u672C\u7C7B\u578B" tabindex="-1">String\u8F6C\u6362\u6210\u5BF9\u5E94\u7684\u57FA\u672C\u7C7B\u578B <a class="header-anchor" href="#string\u8F6C\u6362\u6210\u5BF9\u5E94\u7684\u57FA\u672C\u7C7B\u578B" aria-hidden="true">#</a></h2><p>\u9664\u4E86Character\u7C7B\u4E4B\u5916\uFF0C\u5176\u4ED6\u6240\u6709\u5305\u88C5\u7C7B\u90FD\u5177\u6709parseXxx\u9759\u6001\u65B9\u6CD5\u53EF\u4EE5\u5C06\u5B57\u7B26\u4E32\u53C2\u6570\u8F6C\u6362\u4E3A\u5BF9\u5E94\u7684\u57FA\u672C\u7C7B\u578B\uFF1A</p><ul><li><code>public static byte parseByte(String s)</code>\uFF1A\u5C06\u5B57\u7B26\u4E32\u53C2\u6570\u8F6C\u6362\u4E3A\u5BF9\u5E94\u7684byte\u57FA\u672C\u7C7B\u578B\u3002</li><li><code>public static short parseShort(String s)</code>\uFF1A\u5C06\u5B57\u7B26\u4E32\u53C2\u6570\u8F6C\u6362\u4E3A\u5BF9\u5E94\u7684short\u57FA\u672C\u7C7B\u578B\u3002</li><li><code>public static int parseInt(String s)</code>\uFF1A\u5C06\u5B57\u7B26\u4E32\u53C2\u6570\u8F6C\u6362\u4E3A\u5BF9\u5E94\u7684int\u57FA\u672C\u7C7B\u578B\u3002</li><li><code>public static long parseLong(String s)</code>\uFF1A\u5C06\u5B57\u7B26\u4E32\u53C2\u6570\u8F6C\u6362\u4E3A\u5BF9\u5E94\u7684long\u57FA\u672C\u7C7B\u578B\u3002</li><li><code>public static float parseFloat(String s)</code>\uFF1A\u5C06\u5B57\u7B26\u4E32\u53C2\u6570\u8F6C\u6362\u4E3A\u5BF9\u5E94\u7684float\u57FA\u672C\u7C7B\u578B\u3002</li><li><code>public static double parseDouble(String s)</code>\uFF1A\u5C06\u5B57\u7B26\u4E32\u53C2\u6570\u8F6C\u6362\u4E3A\u5BF9\u5E94\u7684double\u57FA\u672C\u7C7B\u578B\u3002</li><li><code>public static boolean parseBoolean(String s)</code>\uFF1A\u5C06\u5B57\u7B26\u4E32\u53C2\u6570\u8F6C\u6362\u4E3A\u5BF9\u5E94\u7684boolean\u57FA\u672C\u7C7B\u578B\u3002</li></ul><p>\u4EE3\u7801\u4F7F\u7528\uFF08\u4EC5\u4EE5Integer\u7C7B\u7684\u9759\u6001\u65B9\u6CD5parseXxx\u4E3A\u4F8B\uFF09\u5982\uFF1A</p><ul><li>\u8F6C\u6362\u65B9\u5F0F <ul><li>\u65B9\u5F0F\u4E00\uFF1A\u5148\u5C06\u5B57\u7B26\u4E32\u6570\u5B57\u8F6C\u6210Integer\uFF0C\u518D\u8C03\u7528valueOf()\u65B9\u6CD5</li><li>\u65B9\u5F0F\u4E8C\uFF1A\u901A\u8FC7Integer\u9759\u6001\u65B9\u6CD5parseInt()\u8FDB\u884C\u8F6C\u6362</li></ul></li><li>\u793A\u4F8B\u4EE3\u7801</li></ul><div class="language-java line-numbers-mode"><button class="copy"></button><span class="lang">java</span><pre><code><span class="line"><span style="color:#FF7B72;">public</span><span style="color:#C9D1D9;"> </span><span style="color:#FF7B72;">class</span><span style="color:#C9D1D9;"> </span><span style="color:#FFA657;">IntegerDemo</span><span style="color:#C9D1D9;"> {</span></span>
<span class="line"><span style="color:#C9D1D9;">    </span><span style="color:#FF7B72;">public</span><span style="color:#C9D1D9;"> </span><span style="color:#FF7B72;">static</span><span style="color:#C9D1D9;"> </span><span style="color:#FF7B72;">void</span><span style="color:#C9D1D9;"> </span><span style="color:#D2A8FF;">main</span><span style="color:#C9D1D9;">(</span><span style="color:#FF7B72;">String</span><span style="color:#C9D1D9;">[] </span><span style="color:#FFA657;">args</span><span style="color:#C9D1D9;">) {</span></span>
<span class="line"><span style="color:#C9D1D9;">        </span><span style="color:#8B949E;">//String --- int</span></span>
<span class="line"><span style="color:#C9D1D9;">        String</span><span style="color:#FFA657;"> </span><span style="color:#C9D1D9;">s</span><span style="color:#FFA657;"> </span><span style="color:#FF7B72;">=</span><span style="color:#C9D1D9;"> </span><span style="color:#A5D6FF;">&quot;100&quot;</span><span style="color:#C9D1D9;">;</span></span>
<span class="line"><span style="color:#C9D1D9;">        </span><span style="color:#8B949E;">//\u65B9\u5F0F1\uFF1AString --- Integer --- int</span></span>
<span class="line"><span style="color:#C9D1D9;">        Integer</span><span style="color:#FFA657;"> </span><span style="color:#C9D1D9;">i</span><span style="color:#FFA657;"> </span><span style="color:#FF7B72;">=</span><span style="color:#C9D1D9;"> Integer.</span><span style="color:#D2A8FF;">valueOf</span><span style="color:#C9D1D9;">(s);</span></span>
<span class="line"><span style="color:#C9D1D9;">        </span><span style="color:#8B949E;">//public int intValue()</span></span>
<span class="line"><span style="color:#C9D1D9;">        </span><span style="color:#FF7B72;">int</span><span style="color:#FFA657;"> </span><span style="color:#C9D1D9;">x</span><span style="color:#FFA657;"> </span><span style="color:#FF7B72;">=</span><span style="color:#C9D1D9;"> i.</span><span style="color:#D2A8FF;">intValue</span><span style="color:#C9D1D9;">();</span></span>
<span class="line"><span style="color:#C9D1D9;">        System.out.</span><span style="color:#D2A8FF;">println</span><span style="color:#C9D1D9;">(x);</span></span>
<span class="line"><span style="color:#C9D1D9;">        </span><span style="color:#8B949E;">//\u65B9\u5F0F2</span></span>
<span class="line"><span style="color:#C9D1D9;">        </span><span style="color:#8B949E;">//public static int parseInt(String s)</span></span>
<span class="line"><span style="color:#C9D1D9;">        </span><span style="color:#FF7B72;">int</span><span style="color:#FFA657;"> </span><span style="color:#C9D1D9;">y</span><span style="color:#FFA657;"> </span><span style="color:#FF7B72;">=</span><span style="color:#C9D1D9;"> Integer.</span><span style="color:#D2A8FF;">parseInt</span><span style="color:#C9D1D9;">(s);</span></span>
<span class="line"><span style="color:#C9D1D9;">        System.out.</span><span style="color:#D2A8FF;">println</span><span style="color:#C9D1D9;">(y);</span></span>
<span class="line"><span style="color:#C9D1D9;">    }</span></span>
<span class="line"><span style="color:#C9D1D9;">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br></div></div><blockquote><p>\u6CE8\u610F:\u5982\u679C\u5B57\u7B26\u4E32\u53C2\u6570\u7684\u5185\u5BB9\u65E0\u6CD5\u6B63\u786E\u8F6C\u6362\u4E3A\u5BF9\u5E94\u7684\u57FA\u672C\u7C7B\u578B\uFF0C\u5219\u4F1A\u629B\u51FA<code>java.lang.NumberFormatException</code>\u5F02\u5E38\u3002</p></blockquote>`,31),o=[e];function t(r,c,i,D,y,F){return a(),n("div",null,o)}const d=s(p,[["render",t]]);export{b as __pageData,d as default};
