const toast = document.querySelector(".toast");

const chineseText = {
  "Real Chinese": "真实中文",
  "New": "新建学习",
  "My Chinese": "我的中文",
  "Review": "复习",
  "How it works": "使用方式",
  "New lesson": "新建学习",
  "Exit review": "退出复习",
  "LEARN FROM REAL CHINESE": "从真实中文中学习",
  "Learn from real Chinese": "从真实中文中学习",
  "Turn the Chinese you scroll into Chinese you can use.": "把你刷到的中文，变成你真正会用的中文。",
  "Paste a post, comment, screenshot or clip. Get the meaning, the context, and the three expressions worth learning next.": "粘贴帖子、评论、截图或视频片段。获得含义、语境，以及你接下来最值得学习的三个表达。",
  "Paste Chinese content": "粘贴中文内容",
  "Upload screenshot": "上传截图",
  "Try an example": "试试示例",
  "Explain it": "开始解析",
  "Text": "文本",
  "Screenshot": "截图",
  "Video": "视频",
  "Post": "帖子",
  "Comments": "评论区",
  "ONE SIMPLE LOOP": "一个简单闭环",
  "One simple loop": "一个简单闭环",
  "Not every unknown word deserves your attention.": "不是每一个生词，都值得你花时间。",
  "Real Chinese finds the few expressions that unlock the content and fit what you are ready to learn.": "真实中文会筛选出既能看懂内容、又最适合你当前学习阶段的少量表达。",
  "Understand the moment": "理解当下的语境",
  "Translate the post and its comments together, including tone, slang and cultural context.": "把帖子和评论放在一起理解，包括语气、网络词和文化背景。",
  "Pick the right three": "挑出最对的三个",
  "Skip the overwhelming word list. Learn only what is useful for your level and interests.": "跳过让人疲惫的生词清单，只学习适合你水平和兴趣的内容。",
  "Meet it again": "在之后再次遇见",
  "Save the expression, review it later and use it in a short real-life conversation.": "保存表达，之后复习，并在一段简短的真实对话中使用它。",
  "Original post": "原始帖子",
  "Top comment": "高赞评论",
  "3 things worth learning": "3 个值得学习的表达",
  "To have a disappointing experience after choosing something that looked promising.": "原本看起来不错，实际体验却令人失望。",
  "To understand and control something very effectively; often playful online slang.": "对某件事理解或把控得很到位；常见于轻松的网络表达。",
  "“It is hard to even describe”—usually because the situation is complicated or bad.": "“一两句话很难说清楚”，通常因为情况复杂、尴尬或糟糕。",
  "Open full lesson": "查看完整学习内容",
  "Real Chinese prototype": "真实中文产品原型",
  "Content → Context → Memory → Use": "内容 → 语境 → 记忆 → 使用",
  "/ Social post": "/ 社交媒体帖子",
  "Here is what is really going on.": "这里真正发生了什么。",
  "A popular shop, a disappointing visit, and a comment section making fun of its marketing.": "一家网上很火的店、一次失望的到访，以及评论区对它营销手法的调侃。",
  "Source and comments": "原内容与评论区",
  "Screenshot · Lifestyle": "截图 · 生活方式",
  "12.8k likes · 842 comments": "1.28 万点赞 · 842 条评论",
  "3.2k likes": "3,200 个赞",
  "1.8k likes": "1,800 个赞",
  "@cityfoodie · creator": "@cityfoodie · 创作者",
  "Top comments": "高赞评论",
  "“I’m dead—this was a textbook case of walking straight into a bad choice.”": "“笑死，这简直是教科书级的精准踩雷。”",
  "playful": "玩笑语气",
  "笑死 is an internet reaction similar to “LOL”. It does not literally describe dying.": "“笑死”是类似“哈哈哈 / LOL”的网络反应，并不是真的指死亡。",
  "Author reply": "作者回复",
  "“Don’t remind me—my wallet is already hurting.”": "“别提了，我的钱包已经在心痛了。”",
  "self-mocking": "自我调侃",
  "A light, humorous way to admit regret about spending money.": "一种轻松幽默地承认自己花钱后悔的说法。",
  "“The owner really knows how to work the algorithm, but the real thing is… hard to describe.”": "“老板是真懂怎么拿捏流量，但实物嘛……一言难尽。”",
  "slang": "网络口语",
  "拿捏 means handling or controlling something with confidence; here it is mildly sarcastic.": "“拿捏”指把控或理解得很到位；在这里带有轻微反讽。",
  "Your lesson": "你的学习内容",
  "Learn 3": "学 3 个",
  "Meaning": "整体含义",
  "Context": "语境",
  "Why these three?": "为什么选这三个？",
  "They unlock the post and comments, appear often in everyday online Chinese, and are useful beyond this one example.": "它们能帮助你理解这篇帖子和评论，常见于日常网络中文，也能迁移到其他场景使用。",
  "internet speech": "网络表达",
  "cǎi léi · verb": "cǎi léi · 动词",
  "To choose or try something that turns out to be disappointing, unreliable or poor quality.": "选择或尝试某物后，发现它令人失望、不可靠或质量很差。",
  "Worth learning:": "值得学习：",
  "common in reviews, shopping, restaurants and entertainment.": "常见于评价、购物、餐厅和娱乐内容。",
  "Save": "保存",
  "I know this": "我已经会了",
  "ná niē · verb": "ná niē · 动词",
  "playful slang": "轻松网络语",
  "To handle, understand or control something with confidence. Online it often sounds playful or teasing.": "对某事处理、理解或把控得很有分寸。网络上常带轻松、打趣的感觉。",
  "In this comment:": "这条评论中：",
  "the owner knows how to attract online attention, even if the product is bad.": "老板很懂得吸引网络注意力，即使产品本身不好。",
  "yī yán nán jìn · idiom": "yī yán nán jìn · 成语",
  "colloquial": "口语化",
  "There is too much to explain in a few words—usually because a situation is complicated, awkward or bad.": "一两句话说不清楚，通常因为情况复杂、尴尬或糟糕。",
  "Natural use:": "自然用法：",
  "a softer, more expressive alternative to simply saying 很差.": "相比直接说“很差”，更委婉也更有表现力。",
  "Natural translation": "自然翻译",
  "“This place looked really popular online, but after going once, I realized I’d fallen for the hype and made a terrible choice.”": "“这家店网上看着很火，但我去了一次后发现自己被热度骗了，体验很糟。”",
  "The post is not only saying the shop was bad. It implies that its online popularity created expectations that the real experience failed to meet.": "这篇帖子不只是说店不好，它还暗示：网上的热度抬高了期待，而真实体验没有达到期待。",
  "Tone and culture": "语气与文化",
  "The creator uses self-mocking language rather than making a formal complaint. The comments join the joke and criticize the shop’s ability to market itself.": "作者没有正式投诉，而是用自嘲的方式表达失望。评论区顺着这个玩笑，批评店家只会营销。",
  "sarcasm": "反讽",
  "“太会拿捏流量了” sounds like praise on the surface, but here it criticizes the gap between marketing and reality.": "“太会拿捏流量了”表面像夸奖，但这里是在讽刺营销和实际体验之间的落差。",
  "Save all 3": "保存这 3 个",
  "Practice now": "立即练习",
  "YOUR LEARNING MEMORY": "你的学习记忆",
  "Everything you saved, with the original context still attached.": "你保存的所有内容，原始语境也会一并保留。",
  "Add new content": "添加新内容",
  "Learning overview": "学习概览",
  "Learning now": "正在学习",
  "Recognized in context": "能在语境中识别",
  "Used actively": "已经主动使用",
  "Today": "今天",
  "Three expressions are ready to review.": "有 3 个表达可以复习了。",
  "About 3 minutes. One comes from yesterday’s comment section.": "大约需要 3 分钟，其中一个来自昨天的评论区。",
  "Start today’s review": "开始今天的复习",
  "Recently saved": "最近保存",
  "54 total": "共 54 个",
  "All": "全部",
  "Videos": "视频",
  "Slang": "网络语",
  "Active use": "主动使用",
  "To try something that turns out disappointing.": "尝试后发现令人失望。",
  "From a restaurant post · yesterday": "来自餐厅帖子 · 昨天",
  "learning": "学习中",
  "To handle or control something confidently.": "有把握地处理或把控某事。",
  "From a top comment · yesterday": "来自高赞评论 · 昨天",
  "recognized": "已识别",
  "Too complicated or awkward to explain briefly.": "太复杂或尴尬，难以简短解释。",
  "active use": "主动使用",
  "To become intensely excited, absorbed or emotionally carried away.": "变得非常兴奋、投入或情绪上头。",
  "From a drama clip · 4 days ago": "来自影视片段 · 4 天前",
  "1 of 3 · about 3 minutes": "第 1 / 3 个 · 约 3 分钟",
  "RECOGNIZE IT IN CONTEXT": "在语境中识别",
  "What does": "这里的",
  "mean here?": "是什么意思？",
  "Show answer": "显示答案",
  "To choose or try something that turns out disappointing.": "选择或尝试某件事后，发现结果令人失望。",
  "Here the speaker expected a popular shop to be good, but the real experience was poor.": "这里说话者以为热门店会很好，结果真实体验很差。",
  "Again": "再复习",
  "Hard": "有点难",
  "Got it": "记住了",
  "I can use it": "我会用了",
  "After review · active use": "复习后 · 主动使用",
  "Try it yourself": "自己试着说说看",
  "Describe a disappointing restaurant, movie or purchase using 踩雷.": "用“踩雷”描述一次令你失望的餐厅、电影或购物经历。",
  "Saved": "已保存",
  "Analyzing…": "正在解析…"
};

const chineseAttributes = {
  "Paste a Chinese sentence, post, comment or link here…": "在这里粘贴中文句子、帖子、评论或链接…",
  "Switch prototype language": "切换原型语言"
};

// Text nodes do not have HTML data attributes. Keep their original English in
// memory so the interface can reliably switch back after a Chinese view.
const originalEnglishText = new WeakMap();
const languageStorageKey = "realChinesePrototypeLanguage";

function getPrototypeLanguage() {
  const languageInUrl = new URLSearchParams(window.location.search).get("lang");
  if (languageInUrl === "zh" || languageInUrl === "en") return languageInUrl;
  try {
    const saved = window.localStorage.getItem(languageStorageKey);
    if (saved === "zh" || saved === "en") return saved;
  } catch {
    // Some file previews block localStorage; window.name below keeps the demo usable.
  }
  return window.name.match(/(?:^|\|)realChineseLanguage=(zh|en)(?:\||$)/)?.[1] || "en";
}

function updateInternalLinks(language) {
  document.querySelectorAll("a[href]").forEach((link) => {
    const href = link.getAttribute("href");
    if (!href || !href.includes(".html") || /^(https?:|mailto:)/.test(href)) return;
    const [pathWithQuery, hash = ""] = href.split("#");
    const path = pathWithQuery.split("?")[0];
    link.setAttribute("href", `${path}?lang=${language}${hash ? `#${hash}` : ""}`);
  });
}

function setPrototypeLanguage(language) {
  try {
    window.localStorage.setItem(languageStorageKey, language);
  } catch {
    // The window.name fallback is intentionally used for restrictive local previews.
  }
  const withoutLanguage = window.name.replace(/(?:^|\|)realChineseLanguage=(?:zh|en)(?=\||$)/g, "").replace(/^\||\|$/g, "");
  window.name = [withoutLanguage, `realChineseLanguage=${language}`].filter(Boolean).join("|");
}

function applyLanguage(language) {
  const isChinese = language === "zh";
  document.documentElement.lang = isChinese ? "zh-CN" : "en";
  document.querySelectorAll("[data-language-toggle]").forEach((button) => {
    button.textContent = isChinese ? "EN" : "中文";
    button.setAttribute("aria-label", isChinese ? "切换为英文" : "切换为中文");
  });

  const walker = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT);
  const nodes = [];
  while (walker.nextNode()) nodes.push(walker.currentNode);
  nodes.forEach((node) => {
    const source = originalEnglishText.get(node) || node.textContent;
    if (!originalEnglishText.has(node)) originalEnglishText.set(node, source);
    const key = source.trim();
    if (!key || !chineseText[key]) return;
    const leading = source.match(/^\s*/)?.[0] || "";
    const trailing = source.match(/\s*$/)?.[0] || "";
    node.textContent = isChinese ? `${leading}${chineseText[key]}${trailing}` : source;
  });

  document.querySelectorAll("[placeholder], [aria-label]").forEach((element) => {
    ["placeholder", "aria-label"].forEach((attribute) => {
      const value = element.getAttribute(attribute);
      if (!value) return;
      const originalAttribute = `data-i18n-original-${attribute}`;
      const source = element.getAttribute(originalAttribute) || value;
      if (!element.getAttribute(originalAttribute)) element.setAttribute(originalAttribute, source);
      if (chineseAttributes[source]) element.setAttribute(attribute, isChinese ? chineseAttributes[source] : source);
    });
  });
  setPrototypeLanguage(language);
  updateInternalLinks(language);
}

document.querySelectorAll("[data-language-toggle]").forEach((button) => {
  button.addEventListener("click", () => {
    const current = getPrototypeLanguage();
    applyLanguage(current === "zh" ? "en" : "zh");
  });
});

applyLanguage(getPrototypeLanguage());

function showToast(message) {
  if (!toast) return;
  toast.textContent = message;
  toast.classList.add("visible");
  window.clearTimeout(window.toastTimer);
  window.toastTimer = window.setTimeout(() => toast.classList.remove("visible"), 1800);
}

document.querySelectorAll("[data-save]").forEach((button) => {
  button.addEventListener("click", () => {
    const saved = button.classList.toggle("saved");
    button.setAttribute("aria-pressed", String(saved));
    const isChinese = document.documentElement.lang === "zh-CN";
    button.textContent = saved ? (isChinese ? "已保存" : "Saved") : (isChinese ? "保存" : "Save");
    showToast(saved ? (isChinese ? "已保存到我的中文" : "Saved to My Chinese") : (isChinese ? "已从我的中文移除" : "Removed from My Chinese"));
  });
});

document.querySelectorAll("[data-toast]").forEach((button) => {
  button.addEventListener("click", () => showToast(button.dataset.toast));
});

document.querySelectorAll("[data-example]").forEach((button) => {
  button.addEventListener("click", () => {
    const input = document.querySelector("#content-input");
    if (!input) return;
    input.value = "这家店网上看着挺火，结果我去了一次，算是精准踩雷了。评论区还都说老板太会拿捏流量。";
    input.focus();
  });
});

document.querySelectorAll("[data-analyze]").forEach((button) => {
  button.addEventListener("click", () => {
    button.setAttribute("aria-busy", "true");
    button.textContent = document.documentElement.lang === "zh-CN" ? "正在解析…" : "Analyzing…";
    window.setTimeout(() => {
      window.location.href = "result.html";
    }, 550);
  });
});

document.querySelectorAll("[data-tab]").forEach((tab) => {
  tab.addEventListener("click", () => {
    const tabName = tab.dataset.tab;
    document.querySelectorAll("[data-tab]").forEach((item) => {
      const active = item === tab;
      item.classList.toggle("active", active);
      item.setAttribute("aria-selected", String(active));
    });
    document.querySelectorAll("[data-panel]").forEach((panel) => {
      panel.hidden = panel.dataset.panel !== tabName;
    });
  });
});

const revealButton = document.querySelector("[data-reveal]");
if (revealButton) {
  revealButton.addEventListener("click", () => {
    document.querySelector(".answer")?.classList.add("visible");
    document.querySelector(".rating")?.classList.add("visible");
    revealButton.hidden = true;
    revealButton.style.display = "none";
  });
}

document.querySelectorAll("[data-rating]").forEach((button) => {
  button.addEventListener("click", () => {
    showToast("Learning memory updated");
    button.classList.add("saved");
  });
});
