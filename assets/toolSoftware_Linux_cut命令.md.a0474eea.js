import{_ as s,c as n,o as a,a as l}from"./app.d69f0574.js";const h=JSON.parse('{"title":"cut\u547D\u4EE4","description":"","frontmatter":{},"headers":[{"level":2,"title":"\u8BED\u6CD5","slug":"\u8BED\u6CD5","link":"#\u8BED\u6CD5","children":[]},{"level":2,"title":"\u53C2\u6570","slug":"\u53C2\u6570","link":"#\u53C2\u6570","children":[]},{"level":2,"title":"\u793A\u4F8B","slug":"\u793A\u4F8B","link":"#\u793A\u4F8B","children":[]},{"level":2,"title":"\u53C2\u8003","slug":"\u53C2\u8003","link":"#\u53C2\u8003","children":[]}],"relativePath":"toolSoftware/Linux/cut\u547D\u4EE4.md","lastUpdated":1662709914000}'),e={name:"toolSoftware/Linux/cut\u547D\u4EE4.md"},p=l(`<h1 id="cut\u547D\u4EE4" tabindex="-1">cut\u547D\u4EE4 <a class="header-anchor" href="#cut\u547D\u4EE4" aria-hidden="true">#</a></h1><p><code>cut</code>\u547D\u4EE4\u7528\u6765\u663E\u793A\u884C\u4E2D\u7684\u6307\u5B9A\u90E8\u5206\uFF0C\u5176\u4ECE\u6587\u4EF6\u7684\u6BCF\u4E00\u884C\u526A\u5207\u5B57\u8282\u3001\u5B57\u7B26\u548C\u5B57\u6BB5\u5E76\u5C06\u8FD9\u4E9B\u5B57\u8282\u3001\u5B57\u7B26\u548C\u5B57\u6BB5\u5199\u81F3\u6807\u51C6\u8F93\u51FA\uFF0C\u5982\u679C\u4E0D\u6307\u5B9A<code>File</code>\u53C2\u6570\uFF0C<code>cut</code>\u547D\u4EE4\u5C06\u8BFB\u53D6\u6807\u51C6\u8F93\u5165\uFF0C\u8BE5\u547D\u4EE4\u5E38\u7528\u7684\u4E24\u9879\u529F\u80FD\uFF0C\u4E00\u662F\u7528\u6765\u663E\u793A\u6587\u4EF6\u7684\u5185\u5BB9\uFF0C\u5B83\u4F9D\u6B21\u8BFB\u53D6\u7531\u53C2\u6570<code>file</code>\u6240\u6307\u660E\u7684\u6587\u4EF6\uFF0C\u5C06\u5B83\u4EEC\u7684\u5185\u5BB9\u8F93\u51FA\u5230\u6807\u51C6\u8F93\u51FA\u4E0A\uFF0C\u5176\u4E8C\u662F\u8FDE\u63A5\u4E24\u4E2A\u6216\u591A\u4E2A\u6587\u4EF6\uFF0C\u5982<code>cut f1 f2 &gt; f3</code>\u5C06\u628A\u6587\u4EF6<code>f1</code>\u548C\u51E0\u7684\u5185\u5BB9\u5408\u5E76\u8D77\u6765\uFF0C\u7136\u540E\u901A\u8FC7\u8F93\u51FA\u91CD\u5B9A\u5411\u7B26<code>&gt;</code>\u7684\u4F5C\u7528\uFF0C\u5C06\u5B83\u4EEC\u653E\u5165\u6587\u4EF6<code>f3</code>\u4E2D\uFF0C\u5F53\u6587\u4EF6\u8F83\u5927\u65F6\uFF0C\u6587\u672C\u5728\u5C4F\u5E55\u4E0A\u8FC5\u901F\u95EA\u8FC7\uFF0C\u4E5F\u5C31\u662F\u6EDA\u5C4F\u73B0\u8C61\uFF0C\u4E3A\u4E86\u63A7\u5236\u6EDA\u5C4F\uFF0C\u53EF\u4EE5\u6267\u884C<code>Ctrl+S</code>\u6309\u952E\u505C\u6B62\u6EDA\u5C4F\uFF0C\u6309<code>Ctrl+Q</code>\u952E\u53EF\u4EE5\u6062\u590D\u6EDA\u5C4F\uFF0C\u6309<code>Ctrl+C</code>\u952E\u7EC8\u6B62\u8BE5\u547D\u4EE4\u7684\u6267\u884C\u7B49\u64CD\u4F5C\u3002</p><h2 id="\u8BED\u6CD5" tabindex="-1">\u8BED\u6CD5 <a class="header-anchor" href="#\u8BED\u6CD5" aria-hidden="true">#</a></h2><div class="language-shell line-numbers-mode"><button class="copy"></button><span class="lang">shell</span><pre><code><span class="line"><span style="color:#C9D1D9;">cut [OPTION]... [FILE]...</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br></div></div><h2 id="\u53C2\u6570" tabindex="-1">\u53C2\u6570 <a class="header-anchor" href="#\u53C2\u6570" aria-hidden="true">#</a></h2><ul><li><code>-b</code>: \u4EC5\u663E\u793A\u884C\u4E2D\u6307\u5B9A\u76F4\u63A5\u8303\u56F4\u7684\u5185\u5BB9\u3002</li><li><code>-c</code>: \u4EC5\u663E\u793A\u884C\u4E2D\u6307\u5B9A\u8303\u56F4\u7684\u5B57\u7B26\u3002</li><li><code>-d</code>: \u6307\u5B9A\u5B57\u6BB5\u7684\u5206\u9694\u7B26\uFF0C\u9ED8\u8BA4\u7684\u5B57\u6BB5\u5206\u9694\u7B26\u4E3A<code>TAB</code>\u3002</li><li><code>-f</code>: \u663E\u793A\u6307\u5B9A\u5B57\u6BB5\u7684\u5185\u5BB9\u3002</li><li><code>-n</code>: \u4E0E<code>-b</code>\u9009\u9879\u8FDE\u7528\uFF0C\u4E0D\u5206\u5272\u591A\u5B57\u8282\u5B57\u7B26\u3002</li><li><code>--complement</code>: \u8865\u8DB3\u88AB\u9009\u62E9\u7684\u5B57\u8282\u3001\u5B57\u7B26\u6216\u5B57\u6BB5\u3002</li><li><code>--out-delimiter=&lt;delimiter&gt;</code>: \u6307\u5B9A\u8F93\u51FA\u5185\u5BB9\u662F\u7684\u5B57\u6BB5\u5206\u5272\u7B26\u3002</li><li><code>--help</code>: \u663E\u793A\u6307\u4EE4\u7684\u5E2E\u52A9\u4FE1\u606F\u3002</li><li><code>--version</code>: \u663E\u793A\u6307\u4EE4\u7684\u7248\u672C\u4FE1\u606F\u3002</li></ul><h2 id="\u793A\u4F8B" tabindex="-1">\u793A\u4F8B <a class="header-anchor" href="#\u793A\u4F8B" aria-hidden="true">#</a></h2><p>\u622A\u53D6<code>/tmp/file.txt</code>\u6587\u4EF6\u6BCF\u4E00\u884C\u7684\u7B2C<code>3</code>\u4E2A\u5B57\u7B26\u3002</p><div class="language-shell line-numbers-mode"><button class="copy"></button><span class="lang">shell</span><pre><code><span class="line"><span style="color:#C9D1D9;">cat /tmp/file.txt </span><span style="color:#FF7B72;">|</span><span style="color:#C9D1D9;"> cut -c 3</span></span>
<span class="line"><span style="color:#8B949E;"># 3</span></span>
<span class="line"><span style="color:#8B949E;"># 4</span></span>
<span class="line"><span style="color:#8B949E;"># 5</span></span>
<span class="line"><span style="color:#8B949E;"># 6</span></span>
<span class="line"><span style="color:#8B949E;"># 7</span></span>
<span class="line"><span style="color:#8B949E;"># 8</span></span>
<span class="line"><span style="color:#8B949E;"># 9</span></span>
<span class="line"><span style="color:#8B949E;"># 0</span></span>
<span class="line"><span style="color:#8B949E;"># 1</span></span>
<span class="line"><span style="color:#8B949E;"># 2</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br></div></div><p>\u622A\u53D6<code>/tmp/file.txt</code>\u6587\u4EF6\u6BCF\u4E00\u884C\u7684\u7B2C<code>3-6</code>\u4E2A\u5B57\u7B26\u3002</p><div class="language-shell line-numbers-mode"><button class="copy"></button><span class="lang">shell</span><pre><code><span class="line"><span style="color:#C9D1D9;">cat /tmp/file.txt </span><span style="color:#FF7B72;">|</span><span style="color:#C9D1D9;"> cut -c 3-6</span></span>
<span class="line"><span style="color:#8B949E;"># 3456</span></span>
<span class="line"><span style="color:#8B949E;"># 4567</span></span>
<span class="line"><span style="color:#8B949E;"># 5678</span></span>
<span class="line"><span style="color:#8B949E;"># 6789</span></span>
<span class="line"><span style="color:#8B949E;"># 7890</span></span>
<span class="line"><span style="color:#8B949E;"># 8901</span></span>
<span class="line"><span style="color:#8B949E;"># 9012</span></span>
<span class="line"><span style="color:#8B949E;"># 0123</span></span>
<span class="line"><span style="color:#8B949E;"># 1234</span></span>
<span class="line"><span style="color:#8B949E;"># 2345</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br></div></div><p>\u622A\u53D6<code>/tmp/file.txt</code>\u6587\u4EF6\u6BCF\u4E00\u884C\u7684\u7B2C<code>3</code>\u4E2A\u5B57\u7B26\u5230\u7ED3\u5C3E\u5B57\u7B26\u3002</p><div class="language-shell line-numbers-mode"><button class="copy"></button><span class="lang">shell</span><pre><code><span class="line"><span style="color:#C9D1D9;">cat /tmp/file.txt </span><span style="color:#FF7B72;">|</span><span style="color:#C9D1D9;"> cut -c 3-</span></span>
<span class="line"><span style="color:#8B949E;"># 34567890</span></span>
<span class="line"><span style="color:#8B949E;"># 45678901</span></span>
<span class="line"><span style="color:#8B949E;"># 56789012</span></span>
<span class="line"><span style="color:#8B949E;"># 67890123</span></span>
<span class="line"><span style="color:#8B949E;"># 78901234</span></span>
<span class="line"><span style="color:#8B949E;"># 89012345</span></span>
<span class="line"><span style="color:#8B949E;"># 90123456</span></span>
<span class="line"><span style="color:#8B949E;"># 01234567</span></span>
<span class="line"><span style="color:#8B949E;"># 12345678</span></span>
<span class="line"><span style="color:#8B949E;"># 23456789</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br></div></div><h2 id="\u53C2\u8003" tabindex="-1">\u53C2\u8003 <a class="header-anchor" href="#\u53C2\u8003" aria-hidden="true">#</a></h2><div class="language- line-numbers-mode"><button class="copy"></button><span class="lang"></span><pre><code><span class="line"><span style="color:#c9d1d9;">https://man.linuxde.net/cut</span></span>
<span class="line"><span style="color:#c9d1d9;">https://www.runoob.com/linux/linux-comm-cut.html</span></span>
<span class="line"><span style="color:#c9d1d9;">https://www.tutorialspoint.com/unix_commands/cut.htm</span></span>
<span class="line"><span style="color:#c9d1d9;"></span></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div>`,15),c=[p];function o(r,i,t,d,u,b){return a(),n("div",null,c)}const y=s(e,[["render",o]]);export{h as __pageData,y as default};
