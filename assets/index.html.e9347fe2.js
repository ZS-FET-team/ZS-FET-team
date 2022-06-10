import{_ as e,o as n,c as s,a}from"./app.9a51ed2e.js";const i={},l=a(`<h2 id="\u53D8\u91CF\u547D\u540D" tabindex="-1"><a class="header-anchor" href="#\u53D8\u91CF\u547D\u540D" aria-hidden="true">#</a> \u53D8\u91CF\u547D\u540D</h2><ul><li><p>\u4EE3\u7801\u4E2D\u7684\u547D\u540D\u4E3A\u9A7C\u5CF0\u5F0F\u547D\u540D\uFF08constiableName\uFF09</p></li><li><p>\u65B9\u6CD5\u540D\u3001\u53C2\u6570\u540D\u3001\u6210\u5458\u53D8\u91CF\u3001\u5C40\u90E8\u53D8\u91CF\u90FD\u9075\u4ECE\u9A7C\u5CF0\u5F62\u5F0F</p></li><li><p>\u5176\u4E2D method \u65B9\u6CD5\u547D\u540D\u5FC5\u987B\u662F \u52A8\u8BCD \u6216\u8005 \u52A8\u8BCD+\u540D\u8BCD \u5F62\u5F0F</p></li><li><p>\u589E\u5220\u67E5\u6539\uFF0Cadd / update / delete / detail / get 5 \u4E2A\u5355\u8BCD\uFF0C\u4E0D\u5F97\u4F7F\u7528\u5176\u4ED6</p></li></ul><details class="custom-container details"><summary>\u51FD\u6570\u65B9\u6CD5\u5E38\u7528\u7684\u52A8\u8BCD</summary><div class="language-hash ext-hash line-numbers-mode"><pre class="language-hash"><code>get \u83B7\u53D6/set \u8BBE\u7F6E,
add \u589E\u52A0/remove \u5220\u9664,
create \u521B\u5EFA/destory \u9500\u6BC1,
start \u542F\u52A8/stop \u505C\u6B62,
open \u6253\u5F00/close \u5173\u95ED,
read \u8BFB\u53D6/write \u5199\u5165,
load \u8F7D\u5165/save \u4FDD\u5B58,
begin \u5F00\u59CB/end \u7ED3\u675F,
backup \u5907\u4EFD/restore \u6062\u590D,
import \u5BFC\u5165/export \u5BFC\u51FA,
split \u5206\u5272/merge \u5408\u5E76,
inject \u6CE8\u5165/extract \u63D0\u53D6,
attach \u9644\u7740/detach \u8131\u79BB,
bind \u7ED1\u5B9A/separate \u5206\u79BB,
view \u67E5\u770B/browse \u6D4F\u89C8,
edit \u7F16\u8F91/modify \u4FEE\u6539,
select \u9009\u53D6/mark \u6807\u8BB0,
copy \u590D\u5236/paste \u7C98\u8D34,
undo \u64A4\u9500/redo \u91CD\u505A,
insert \u63D2\u5165/delete \u79FB\u9664,
add \u52A0\u5165/append \u6DFB\u52A0,
clean \u6E05\u7406/clear \u6E05\u9664,
index \u7D22\u5F15/sort \u6392\u5E8F,
find \u67E5\u627E/search \u641C\u7D22,
increase \u589E\u52A0/decrease \u51CF\u5C11,
play \u64AD\u653E/pause \u6682\u505C,
launch \u542F\u52A8/run \u8FD0\u884C,
compile \u7F16\u8BD1/execute \u6267\u884C,
debug \u8C03\u8BD5/trace \u8DDF\u8E2A,
observe \u89C2\u5BDF/listen \u76D1\u542C,
build \u6784\u5EFA/publish \u53D1\u5E03,
input \u8F93\u5165/output \u8F93\u51FA,
encode \u7F16\u7801/decode \u89E3\u7801,
encrypt \u52A0\u5BC6/decrypt \u89E3\u5BC6,
compress \u538B\u7F29/decompress \u89E3\u538B\u7F29,
pack \u6253\u5305/unpack \u89E3\u5305,
parse \u89E3\u6790/emit \u751F\u6210,
connect \u8FDE\u63A5/disconnect \u65AD\u5F00,
send \u53D1\u9001/receive \u63A5\u6536,
download \u4E0B\u8F7D/upload \u4E0A\u4F20,
refresh \u5237\u65B0/synchronize \u540C\u6B65,
update \u66F4\u65B0/revert \u590D\u539F,
lock \u9501\u5B9A/unlock \u89E3\u9501,
check out \u7B7E\u51FA/check in \u7B7E\u5165,
submit \u63D0\u4EA4/commit \u4EA4\u4ED8,
push \u63A8/pull \u62C9,
expand \u5C55\u5F00/collapse \u6298\u53E0,
enter \u8FDB\u5165/exit \u9000\u51FA,
abort \u653E\u5F03/quit \u79BB\u5F00,
obsolete \u5E9F\u5F03/depreciate \u5E9F\u65E7,
collect \u6536\u96C6/aggregate \u805A\u96C6
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></details><ul><li>\u5E38\u91CF\u547D\u540D\u5168\u90E8\u5927\u5199\uFF0C\u5355\u8BCD\u95F4\u7528\u4E0B\u5212\u7EBF\u9694\u5F00\uFF0C\u529B\u6C42\u8BED\u4E49\u8868\u8FBE\u5B8C\u6574\u6E05\u695A\uFF0C \u4E0D\u8981\u5ACC\u540D\u5B57\u957F</li></ul><p>\u63A8\u8350\uFF1AMAX_STOCK_COUNT</p><p>\u4E0D\u63A8\u8350\uFF1AMAX_COUNT</p><h2 id="\u4EE3\u7801\u683C\u5F0F" tabindex="-1"><a class="header-anchor" href="#\u4EE3\u7801\u683C\u5F0F" aria-hidden="true">#</a> \u4EE3\u7801\u683C\u5F0F</h2><ul><li><p>\u4F7F\u7528 2 \u4E2A\u7A7A\u683C\u8FDB\u884C\u7F29\u8FDB</p></li><li><p>\u4E0D\u540C\u903B\u8F91\u3001\u4E0D\u540C\u8BED\u4E49\u3001\u4E0D\u540C\u4E1A\u52A1\u7684\u4EE3\u7801\u4E4B\u95F4\u63D2\u5165\u4E00\u4E2A\u7A7A\u884C\u5206\u9694\u5F00\u6765\u4EE5 \u63D0\u5347\u53EF\u8BFB\u6027</p></li></ul><p>\u8BF4\u660E\uFF1A\u4EFB\u4F55\u60C5\u5F62\uFF0C\u6CA1\u6709\u5FC5\u8981\u63D2\u5165\u591A\u4E2A\u7A7A\u884C\u8FDB\u884C\u9694\u5F00\u3002</p><h2 id="\u5B57\u7B26\u4E32" tabindex="-1"><a class="header-anchor" href="#\u5B57\u7B26\u4E32" aria-hidden="true">#</a> \u5B57\u7B26\u4E32</h2><p>\u7EDF\u4E00\u4F7F\u7528\u5355\u5F15\u53F7(\u2018)\uFF0C\u4E0D\u4F7F\u7528\u53CC\u5F15\u53F7(\u201C)\u3002\u8FD9\u5728\u521B\u5EFA HTML \u5B57\u7B26\u4E32\u975E\u5E38\u6709\u597D\u5904\uFF1A</p><p>\u63A8\u8350\uFF1A</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">let</span> str <span class="token operator">=</span> <span class="token string">&#39;foo&#39;</span><span class="token punctuation">;</span>
<span class="token keyword">let</span> testDiv <span class="token operator">=</span> <span class="token string">&#39;&lt;div id=&quot;test&quot;&gt;&lt;/div&gt;&#39;</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>\u907F\u514D\uFF1A</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">let</span> str <span class="token operator">=</span> <span class="token string">&quot;foo&quot;</span><span class="token punctuation">;</span>
<span class="token keyword">let</span> testDiv <span class="token operator">=</span> <span class="token string">&quot;&lt;div id=&#39;test&#39;&gt;&lt;/div&gt;&quot;</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="\u5BF9\u8C61\u58F0\u660E" tabindex="-1"><a class="header-anchor" href="#\u5BF9\u8C61\u58F0\u660E" aria-hidden="true">#</a> \u5BF9\u8C61\u58F0\u660E</h2><h3 id="\u4F7F\u7528\u5B57\u9762\u503C\u521B\u5EFA\u5BF9\u8C61" tabindex="-1"><a class="header-anchor" href="#\u4F7F\u7528\u5B57\u9762\u503C\u521B\u5EFA\u5BF9\u8C61" aria-hidden="true">#</a> \u4F7F\u7528\u5B57\u9762\u503C\u521B\u5EFA\u5BF9\u8C61</h3><p>\u63A8\u8350\uFF1A <code>let user = {};</code></p><p>\u907F\u514D\uFF1A <code>let user = new Object();</code></p><h3 id="\u4F7F\u7528\u5B57\u9762\u91CF\u6765\u4EE3\u66FF\u5BF9\u8C61\u6784\u9020\u5668" tabindex="-1"><a class="header-anchor" href="#\u4F7F\u7528\u5B57\u9762\u91CF\u6765\u4EE3\u66FF\u5BF9\u8C61\u6784\u9020\u5668" aria-hidden="true">#</a> \u4F7F\u7528\u5B57\u9762\u91CF\u6765\u4EE3\u66FF\u5BF9\u8C61\u6784\u9020\u5668</h3><p>\u63A8\u8350\uFF1A <code>var user = { age: 0, name: 1, city: 3 };</code></p><p>\u907F\u514D\uFF1A</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">var</span> user <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Object</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
user<span class="token punctuation">.</span>age <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
user<span class="token punctuation">.</span>name <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
user<span class="token punctuation">.</span>city <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="\u4F7F\u7528-es6" tabindex="-1"><a class="header-anchor" href="#\u4F7F\u7528-es6" aria-hidden="true">#</a> \u4F7F\u7528 ES6+</h2><p>\u5FC5\u987B\u4F18\u5148\u4F7F\u7528 ES6 + \u4E2D\u65B0\u589E\u7684\u8BED\u6CD5\u7CD6\u548C\u51FD\u6570\u3002</p><p>\u6BD4\u5982\uFF1A\u7BAD\u5934\u51FD\u6570\u3001await/async \u3001\u89E3\u6784\u3001let\u3001for...of \u7B49\u7B49</p><h2 id="\u6761\u4EF6\u5224\u65AD\u548C\u5FAA\u73AF\u6700\u591A\u4E09\u5C42" tabindex="-1"><a class="header-anchor" href="#\u6761\u4EF6\u5224\u65AD\u548C\u5FAA\u73AF\u6700\u591A\u4E09\u5C42" aria-hidden="true">#</a> \u6761\u4EF6\u5224\u65AD\u548C\u5FAA\u73AF\u6700\u591A\u4E09\u5C42</h2><ul><li>\u6761\u4EF6\u5224\u65AD\u80FD\u4F7F\u7528\u4E09\u5143\u8FD0\u7B97\u7B26\u548C\u903B\u8F91\u8FD0\u7B97\u7B26\u89E3\u51B3\u7684\uFF0C\u5C31\u4E0D\u7528\u4F7F\u7528\u6761\u4EF6\u5224\u65AD</li></ul><h2 id="this-\u7684\u8F6C\u6362\u547D\u540D" tabindex="-1"><a class="header-anchor" href="#this-\u7684\u8F6C\u6362\u547D\u540D" aria-hidden="true">#</a> this \u7684\u8F6C\u6362\u547D\u540D</h2><p>\u5BF9\u4E0A\u4E0B\u6587 this \u7684\u5F15\u7528\u53EA\u80FD\u4F7F\u7528&quot;that&quot;\u6765\u547D\u540D</p><h2 id="\u614E\u7528-console-log" tabindex="-1"><a class="header-anchor" href="#\u614E\u7528-console-log" aria-hidden="true">#</a> \u614E\u7528 console.log</h2><p>console.log \u4F7F\u7528\u5B8C\u8BB0\u5F97\u8981\u5220\u9664</p>`,32),d=[l];function r(c,t){return n(),s("div",null,d)}var o=e(i,[["render",r],["__file","index.html.vue"]]);export{o as default};