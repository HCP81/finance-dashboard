// ----------------------------------------------------
// 智財經 Finance Hub - Interactive Logic & Data Engine
// ----------------------------------------------------

// 1. Data Store: Market Overview Cards
const marketData = [
  {
    symbol: "台股加權指數",
    ticker: "TAIEX",
    val: "23,850.45",
    change: "+182.30 (+0.77%)",
    isUp: true,
    tag: "台股主板"
  },
  {
    symbol: "納斯達克指數",
    ticker: "NASDAQ",
    val: "18,620.10",
    change: "+125.40 (+0.68%)",
    isUp: true,
    tag: "美股科技"
  },
  {
    symbol: "輝達 (NVIDIA)",
    ticker: "NVDA",
    val: "$128.50",
    change: "+$3.20 (+2.55%)",
    isUp: true,
    tag: "AI領航"
  },
  {
    symbol: "台積電 ADR",
    ticker: "TSM",
    val: "$176.80",
    change: "+$2.40 (+1.38%)",
    isUp: true,
    tag: "晶片龍頭"
  },
  {
    symbol: "台灣六都房價指數",
    ticker: "TW-HOUSING",
    val: "348.2",
    change: "-0.15% (量縮盤整)",
    isUp: false,
    tag: "台灣房市"
  },
  {
    symbol: "美元 / 新台幣",
    ticker: "USD/TWD",
    val: "32.45",
    change: "-0.08 (-0.25%)",
    isUp: false,
    tag: "外匯"
  }
];

// 2. Data Store: 30-Second Digest Highlights
const digestHighlights = [
  {
    num: "01",
    title: "🤖 AI 晶片需求持續火熱，台美科技股共振走揚",
    desc: "台積電 3 奈米與 CoWoS 高階封裝產能供不應求，輝達與美系雲端巨頭（CSP）追加資本支出，直接挹注廣達、緯創、奇鋐等台灣供應鏈營收亮眼。"
  },
  {
    num: "02",
    title: "🏠 央行信用管制與成數限制，台灣房市呈現「價平量縮」",
    desc: "第七波信用管制與銀行放款比率限縮發揮效果。預售屋交屋潮排隊辦貸款，首購族青安專案相對受惠，投資型買盤明顯退場。"
  },
  {
    num: "03",
    title: "💵 美聯儲利率維持高檔，大盤呈現結構性輪動",
    desc: "市場預估美聯儲將視降息時機而定，資金集中流向具有實質盈利支撐的 AI 科技與高股息龍頭，防禦型資產吸引力升。"
  }
];

// 3. Main News Database
const newsDatabase = [
  {
    id: "n1",
    category: "taiwan-us-stock",
    categoryName: "台美股焦點",
    categoryClass: "cat-taiwan-us-stock",
    title: "台積電 CoWoS 擴產加速！概念股齊揚，廣達與奇鋐營運看好",
    time: "20 分鐘前 · 財經日報",
    sentiment: "bullish",
    sentimentText: "📈 觀點：利多熱點",
    sentimentClass: "badge-bullish",
    easySummary: "【白話解讀】美系各大 AI 巨頭搶買 AI 晶片，台積電先進封裝（CoWoS）持續擴產。這代表組裝伺服器的廣達、做散熱的奇鋐、設備廠萬潤等台灣廠商訂單接不完，台股科技板塊基礎紮實。",
    bullets: [
      "台積電高雄與嘉義先進封裝廠工程進度超前，全力應對 2026/2027 年龐大需求。",
      "AI 伺服器散熱全面轉向「水冷技術」，奇鋐與雙鴻水冷板出貨比重突破 35%。",
      "外資出具最新報告，重申台積電與 AI 關鍵供應鏈為亞太區首選配置。"
    ],
    fullContent: `
      <h3>台積電 CoWoS 產能與台股 AI 供應鏈最新深度剖析</h3>
      <p>隨著全球生成式 AI 應用從文字拓展至多模態與影音生成，各大雲端業者（Microsoft, Google, AWS, Meta）對於 AI 算力基礎設施的採購力道持續強勁。身為全球晶圓代工獨家龍頭的台積電，其先進封裝產能（CoWoS）依舊是市場供給最大的瓶頸與關鍵契機。</p>
      <br>
      <h4>受惠產業與類股重點整理：</h4>
      <ul>
        <li><strong>晶圓代工與封裝：</strong> 台積電 (2330)、日月光投控 (3711)</li>
        <li><strong>AI 伺服器代工：</strong> 廣達 (2382)、緯創 (3231)、英業達 (2356)</li>
        <li><strong>散熱模組與水冷系統：</strong> 奇鋐 (3017)、雙鴻 (3324)</li>
        <li><strong>高階電源供應器：</strong> 台達電 (2308)</li>
      </ul>
      <br>
      <p><strong>投資觀點：</strong> 短線股市雖有高檔震盪，但中長期基本面仍由實質 AI 訂單推升，建議投資人關注營收成長明確、本益比合理的供應鏈要角。</p>
    `
  },
  {
    id: "n2",
    category: "taiwan-housing",
    categoryName: "台灣房地產",
    categoryClass: "cat-taiwan-housing",
    title: "第七波管制後六都買賣移轉量微幅下滑，首購族與自住族教戰守則",
    time: "45 分鐘前 · 房市頭條",
    sentiment: "neutral",
    sentimentText: "⚖️ 觀點：中立觀望",
    sentimentClass: "badge-neutral",
    easySummary: "【白話解讀】央行管控銀行放款後，非首購族房貸貸款成數變低、利率上升，投資客減少。但對於名下無房的「真首購族」，新青安貸款依然可以使用，價格出現難得的平穩議價空間。",
    bullets: [
      "六都 6 月買賣移轉棟數出現 3%~7% 不等的月減，市場買氣逐步回歸理性自住。",
      "銀行申貸排隊現象仍在，建議買房前務必先向銀行確認可貸額度與成數。",
      "預售屋市場受禁止換約政策影響，中古屋與剛性需求自住小宅交易相對穩健。"
    ],
    fullContent: `
      <h3>台灣房市現狀解析：成數管制與利率環境下的購屋決策</h3>
      <p>近年中央銀行持續調升存款準備率並祭出第七波選擇性信用管制，主要目的在於導正房市熱度、預防過度融資風險。目前市場交易特徵非常明確：<strong>「投資退場、自住當道、價平量縮」</strong>。</p>
      <br>
      <h4>🏠 首購族與自住族申貸 3 大建議：</h4>
      <ol>
        <li><strong>優先使用「新青安專案」：</strong> 符合名下無房條件者，可享有優惠利率與額度支持。</li>
        <li><strong>備足自備款與寬限期評估：</strong> 因銀行鑑價普遍趨向保守，建議自備款提高至 2.5~3 成較為安全。</li>
        <li><strong>契約條款防範融資違約：</strong> 在簽訂房屋買賣契約時，可試著爭取「若貸款成數不足特定成數則無條件解約」之保障條款（需買賣雙方同意）。</li>
      </ol>
    `
  },
  {
    id: "n3",
    category: "ai-tech",
    categoryName: "AI產業鏈",
    categoryClass: "cat-ai-tech",
    title: "NVIDIA 下一代架構晶片量產順利，雲端軟體應用進入獲利收割期",
    time: "1 小時前 · 科技新報",
    sentiment: "bullish",
    sentimentText: "📈 觀點：利多熱點",
    sentimentClass: "badge-bullish",
    easySummary: "【白話解讀】輝達的新款 AI 晶片產能漸入佳境，不僅硬體賣得好，各大企業使用 AI 軟體工具（如 Copilot, AI客服、醫療AI）的付費訂閱用戶也在快速暴增，AI 從「燒錢興建」轉入「開始賺錢」的轉折點。",
    bullets: [
      "微軟、Google、Meta 最新財報顯示 AI 相關雲端服務營收成長超越 30%。",
      "企業端 AI Agent（智能代理）應用加速普及，自動化工作流程需求大增。",
      "供應鏈預估 2026 下半年高階 AI 伺服器出貨量將創歷史新高。"
    ],
    fullContent: `
      <h3>從硬體爆發到軟體變現：AI 產業發展的第二曲線</h3>
      <p>過去兩年，AI 投資主要集中在數據中心（Data Center）、GPU 晶片與伺服器等基礎設施建立。進入 2026 年，市場關注焦點已正式轉向「軟體與應用端的變現能力（Monetization）」。</p>
      <br>
      <p>各大軟體巨頭與新創公司陸續推出針對醫療、金融、法律、設計的專屬 AI 模型，企業付費意願顯著提升。這也反過來促進了對下一代高效能 AI 晶片的需求，形成正向循環。</p>
    `
  },
  {
    id: "n4",
    category: "taiwan-us-stock",
    categoryName: "台美股焦點",
    categoryClass: "cat-taiwan-us-stock",
    title: "美股標普 500 企業財報開優於預期，高股息與防禦型資產獲資金青睞",
    time: "2 小時前 · 全球財經網",
    sentiment: "bullish",
    sentimentText: "📈 觀點：利多熱點",
    sentimentClass: "badge-bullish",
    easySummary: "【白話解讀】美國大型企業最近公佈的帳目表現都很不錯，顯示美國經濟整體仍然強韌。除了飆漲的科技股之外，高股息公司與電信、消費相關的穩健股票也開始吸金，市場呈現良性輪動。",
    bullets: [
      "標普 500 成分股中已有超過 75% 的企業獲利超出華爾街分析師預期。",
      "金融股與公用事業股表現強勁，提供股市下檔支撐。",
      "美股大盤波動度指數（VIX）降至近期低點，顯示市場樂觀情緒濃厚。"
    ],
    fullContent: `
      <h3>美股第二季財報季總結與資產配置思考</h3>
      <p>本次美股財報季展現了美國企業極佳的成本控管與營運彈性。儘管利率環境居高不下，但大型企業靠著穩健的資產負債表與 AI 技術導入提升效率，淨利潤率依然維持歷史高點。</p>
    `
  },
  {
    id: "n5",
    category: "taiwan-housing",
    categoryName: "台灣房地產",
    categoryClass: "cat-taiwan-housing",
    title: "台南與高雄「半導體科學園區房市」理性回檔，區域機能與公共建設成關鍵",
    time: "3 小時前 · 地產風雲",
    sentiment: "bearish",
    sentimentText: "📉 觀點：短線修正",
    sentimentClass: "badge-bearish",
    easySummary: "【白話解讀】前幾年靠著台積電設廠話題被炒高的南台灣部分偏遠區域，近期純靠議題的建案開始價格修正；但如果是在有成熟商圈、捷運與學校的園區核心區，房價依然十分抗跌。",
    bullets: [
      "炒作型蛋白區買氣冷卻，部分屋主出現小幅讓價求售意願。",
      "台南科學園區（南科）與高雄楠梓科學園區周邊剛性租屋與買盤需求依然充沛。",
      "專家提醒：買房應注重「實體機能」與「通勤時間」，切勿單純盲從議題。"
    ],
    fullContent: `
      <h3>科學園區房市效應檢視：從瘋狂炒作走向實力比拼</h3>
      <p>過去幾年「跟著台積電買房」成為全台房市顯學。然而在金融管控壓制投資槓桿後，市場進入回歸價值的檢驗期。具有實質工程師人口入住、商圈建立的區域依然穩固，而缺乏生活機能的純題材區則面臨修正壓力。</p>
    `
  },
  {
    id: "n6",
    category: "global-macro",
    categoryName: "國際總經",
    categoryClass: "cat-global-macro",
    title: "全球總體經濟展望：各國央行貨幣政策分化，日圓與美元走勢觀察",
    time: "4 小時前 · 國際金融報",
    sentiment: "neutral",
    sentimentText: "⚖️ 觀點：中立觀察",
    sentimentClass: "badge-neutral",
    easySummary: "【白話解讀】美國降息腳步謹慎，日本央行則考慮緩步升息退出超寬鬆政策。這使得外匯市場上日圓出現止跌回升跡象，打算去日本旅遊或投資日股的人可多留意匯率區間。",
    bullets: [
      "日本央行（BOJ）暗示逐步推進貨幣政策正常化，減緩日圓貶值壓力。",
      "歐洲央行（ECB）因通膨控制得當，已啟動預防性降息以刺激經濟。",
      "台幣近期隨美港股資金進出呈現區間窄幅震盪。"
    ],
    fullContent: `
      <h3>2026 下半年全球匯率與總體經濟局勢全景圖</h3>
      <p>當前全球主要央行政策不再步調一致，而是依據各國經濟體質走出一條分化之路。美國重視就業與通膨平衡、歐洲偏向刺激經濟、日本則逐步走向正常化，外匯資產配置宜多元化分攤風險。</p>
    `
  }
];

// State Management
let activeCategory = 'all';
let activeSentiment = 'all';
let searchQuery = '';
let bookmarkedIds = new Set(JSON.parse(localStorage.getItem('finance_bookmarks') || '[]'));

// DOM Elements
document.addEventListener('DOMContentLoaded', () => {
  initMarketCards();
  initDigestCards();
  renderNewsGrid();
  updateBookmarkCount();
  setupEventListeners();
});

// 1. Render Market Cards
function initMarketCards() {
  const container = document.getElementById('market-cards-container');
  if (!container) return;

  container.innerHTML = marketData.map(item => `
    <div class="market-card">
      <div class="card-top">
        <span class="symbol-name">${item.symbol}</span>
        <span class="tag-badge" style="background:${item.isUp ? '#f0fdf4' : '#fef2f2'}; color:${item.isUp ? '#16a34a' : '#dc2626'}">${item.tag}</span>
      </div>
      <div class="val">${item.val}</div>
      <div class="change ${item.isUp ? 'up' : 'down'}">
        <span>${item.isUp ? '▲' : '▼'}</span>
        <span>${item.change}</span>
      </div>
    </div>
  `).join('');
}

// 2. Render 30-Second Digest Cards
function initDigestCards() {
  const container = document.getElementById('digest-cards-container');
  if (!container) return;

  container.innerHTML = digestHighlights.map(item => `
    <div class="digest-card">
      <span class="digest-card-num">${item.num}</span>
      <h4>${item.title}</h4>
      <p>${item.desc}</p>
    </div>
  `).join('');
}

// 3. Filter & Render News Grid
function renderNewsGrid() {
  const container = document.getElementById('news-grid-container');
  const countLabel = document.getElementById('news-count-label');
  if (!container) return;

  let filtered = newsDatabase.filter(news => {
    // Category Filter
    if (activeCategory !== 'all' && news.category !== activeCategory) {
      return false;
    }
    // Sentiment Filter
    if (activeSentiment !== 'all' && news.sentiment !== activeSentiment) {
      return false;
    }
    // Search Query
    if (searchQuery.trim() !== '') {
      const q = searchQuery.toLowerCase();
      const matchTitle = news.title.toLowerCase().includes(q);
      const matchSummary = news.easySummary.toLowerCase().includes(q);
      const matchBullets = news.bullets.some(b => b.toLowerCase().includes(q));
      return matchTitle || matchSummary || matchBullets;
    }
    return true;
  });

  if (countLabel) {
    countLabel.textContent = `共 ${filtered.length} 條焦點動態`;
  }

  if (filtered.length === 0) {
    container.innerHTML = `
      <div style="background:white; border:1px solid #e2e8f0; border-radius:12px; padding:40px; text-align:center; color:#64748b;">
        <span style="font-size:36px; display:block; margin-bottom:10px;">🔍</span>
        <h3>找不到符合條件的財經新聞</h3>
        <p style="font-size:14px; margin-top:6px;">請嘗試更換搜尋關鍵字或切換分類頁籤。</p>
      </div>
    `;
    return;
  }

  container.innerHTML = filtered.map(news => {
    const isBookmarked = bookmarkedIds.has(news.id);

    return `
      <article class="news-card" id="card-${news.id}">
        <div class="news-card-meta">
          <div class="meta-tags">
            <span class="category-tag ${news.categoryClass}">${news.categoryName}</span>
            <span class="sentiment-badge ${news.sentimentClass}">${news.sentimentText}</span>
          </div>
          <span class="news-time">${news.time}</span>
        </div>

        <h3 class="news-card-title" onclick="openNewsModal('${news.id}')">${news.title}</h3>

        <div class="news-summary-box">
          <span class="summary-label">💡 30 秒白話懶人包：</span>
          <p class="summary-text">${news.easySummary}</p>
        </div>

        <ul class="news-bullets">
          ${news.bullets.map(b => `<li>${b}</li>`).join('')}
        </ul>

        <div class="news-card-actions">
          <button class="btn-text-action" onclick="openNewsModal('${news.id}')">
            📖 閱讀完整分析數據 &rarr;
          </button>
          <div class="action-btn-group">
            <button class="btn-icon-action" onclick="speakText('${escapeQuotes(news.title + '。' + news.easySummary)}')">
              🔊 聽新聞
            </button>
            <button class="btn-icon-action" onclick="toggleBookmark('${news.id}')">
              ${isBookmarked ? '⭐ 已收藏' : '☆ 收藏'}
            </button>
          </div>
        </div>
      </article>
    `;
  }).join('');
}

// 4. Setup Interactive Event Listeners
function setupEventListeners() {
  // Category Tabs
  const categoryContainer = document.getElementById('category-tabs');
  if (categoryContainer) {
    categoryContainer.addEventListener('click', (e) => {
      const btn = e.target.closest('.tab-btn');
      if (!btn) return;
      document.querySelectorAll('.tab-btn').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      activeCategory = btn.dataset.category;

      const catNameEl = document.getElementById('current-category-name');
      if (catNameEl) {
        catNameEl.textContent = btn.textContent.trim();
      }

      renderNewsGrid();
    });
  }

  // Sentiment Filter Pills
  document.querySelectorAll('.pill-btn').forEach(pill => {
    pill.addEventListener('click', () => {
      document.querySelectorAll('.pill-btn').forEach(p => p.classList.remove('active'));
      pill.classList.add('active');
      activeSentiment = pill.dataset.sentiment;
      renderNewsGrid();
    });
  });

  // Live Search Input
  const searchInput = document.getElementById('news-search');
  const clearBtn = document.getElementById('clear-search');
  if (searchInput) {
    searchInput.addEventListener('input', (e) => {
      searchQuery = e.target.value;
      if (clearBtn) clearBtn.style.display = searchQuery ? 'block' : 'none';
      renderNewsGrid();
    });
  }

  if (clearBtn) {
    clearBtn.addEventListener('click', () => {
      searchInput.value = '';
      searchQuery = '';
      clearBtn.style.display = 'none';
      renderNewsGrid();
    });
  }

  // Global Audio Digest Button
  const globalTtsBtn = document.getElementById('global-tts-btn');
  if (globalTtsBtn) {
    globalTtsBtn.addEventListener('click', () => {
      const digestText = digestHighlights.map(h => h.title + '。' + h.desc).join(' ');
      speakText("您好！這是智財經為您整理的今日新聞懶人包。" + digestText);
    });
  }

  // Modal Closers
  document.getElementById('modal-close-btn')?.addEventListener('click', closeModal);
  document.getElementById('bookmarks-close-btn')?.addEventListener('click', closeBookmarksModal);

  // Bookmarks Drawer Button
  document.getElementById('bookmarks-btn')?.addEventListener('click', openBookmarksModal);
}

// 5. News Detail Modal Logic
function openNewsModal(newsId) {
  const news = newsDatabase.find(n => n.id === newsId);
  if (!news) return;

  const header = document.getElementById('modal-header-content');
  const body = document.getElementById('modal-body-content');
  const ttsBtn = document.getElementById('modal-tts-btn');
  const bookmarkBtn = document.getElementById('modal-bookmark-btn');

  if (header) {
    header.innerHTML = `
      <div style="margin-bottom:8px;">
        <span class="category-tag ${news.categoryClass}">${news.categoryName}</span>
        <span class="sentiment-badge ${news.sentimentClass}">${news.sentimentText}</span>
      </div>
      <h2>${news.title}</h2>
      <span style="font-size:12px; color:#64748b;">${news.time}</span>
    `;
  }

  if (body) {
    body.innerHTML = `
      <div class="news-summary-box" style="margin-bottom:20px;">
        <span class="summary-label">💡 核心重點懶人包：</span>
        <p class="summary-text">${news.easySummary}</p>
      </div>
      ${news.fullContent}
    `;
  }

  if (ttsBtn) {
    ttsBtn.onclick = () => speakText(news.title + '。' + news.easySummary);
  }

  if (bookmarkBtn) {
    const isBookmarked = bookmarkedIds.has(news.id);
    bookmarkBtn.textContent = isBookmarked ? '⭐ 已在收藏夾中' : '☆ 收藏這篇新聞';
    bookmarkBtn.onclick = () => {
      toggleBookmark(news.id);
      openNewsModal(news.id); // Refresh modal button state
    };
  }

  document.getElementById('news-modal').style.display = 'flex';
}

function closeModal() {
  document.getElementById('news-modal').style.display = 'none';
}

// 6. Bookmarks Drawer Logic
function openBookmarksModal() {
  const container = document.getElementById('bookmarks-list-container');
  const modal = document.getElementById('bookmarks-modal');
  if (!container || !modal) return;

  const bookmarkedNews = newsDatabase.filter(n => bookmarkedIds.has(n.id));

  if (bookmarkedNews.length === 0) {
    container.innerHTML = `
      <div style="text-align:center; padding:30px; color:#64748b;">
        <p style="font-size:32px; margin-bottom:8px;">⭐</p>
        <p>您目前還沒有收藏任何新聞。</p>
        <p style="font-size:13px; margin-top:4px;">點擊新聞卡片右下角的「收藏」即可在此隨時查閱！</p>
      </div>
    `;
  } else {
    container.innerHTML = bookmarkedNews.map(news => `
      <div style="background:#f8fafc; border:1px solid #e2e8f0; border-radius:12px; padding:16px; margin-bottom:12px;">
        <span class="category-tag ${news.categoryClass}" style="font-size:11px;">${news.categoryName}</span>
        <h4 style="font-size:15px; font-weight:800; margin:6px 0; cursor:pointer;" onclick="closeBookmarksModal(); openNewsModal('${news.id}');">${news.title}</h4>
        <p style="font-size:13px; color:#475569;">${news.easySummary}</p>
        <div style="margin-top:10px; text-align:right;">
          <button class="btn-icon-action" onclick="toggleBookmark('${news.id}'); openBookmarksModal();">❌ 移除收藏</button>
        </div>
      </div>
    `).join('');
  }

  modal.style.display = 'flex';
}

function closeBookmarksModal() {
  document.getElementById('bookmarks-modal').style.display = 'none';
}

// 7. Bookmark Toggle & Persistence
function toggleBookmark(newsId) {
  if (bookmarkedIds.has(newsId)) {
    bookmarkedIds.delete(newsId);
  } else {
    bookmarkedIds.add(newsId);
  }
  localStorage.setItem('finance_bookmarks', JSON.stringify(Array.from(bookmarkedIds)));
  updateBookmarkCount();
  renderNewsGrid();
}

function updateBookmarkCount() {
  const countEl = document.getElementById('bookmark-count');
  if (countEl) {
    countEl.textContent = bookmarkedIds.size;
  }
}

// 8. Speech Synthesis (Audio Player: Play, Pause, Stop)
let currentSpeechUtterance = null;
let audioPlayerState = 'stopped'; // 'stopped' | 'playing' | 'paused'

function setupAudioPlayerControls() {
  const playBtn = document.getElementById('audio-play-btn');
  const pauseBtn = document.getElementById('audio-pause-btn');
  const stopBtn = document.getElementById('audio-stop-btn');

  if (playBtn) playBtn.addEventListener('click', handlePlayClick);
  if (pauseBtn) pauseBtn.addEventListener('click', handlePauseClick);
  if (stopBtn) stopBtn.addEventListener('click', handleStopClick);
}

function handlePlayClick() {
  if (audioPlayerState === 'paused') {
    if ('speechSynthesis' in window) {
      window.speechSynthesis.resume();
      audioPlayerState = 'playing';
      updateAudioPlayerUI();
    }
  } else {
    // Start fresh digest playback
    const digestText = digestHighlights.map(h => h.title + '。' + h.desc).join(' ');
    speakText("您好！這是智財經為您整理的今日焦點新聞。" + digestText);
  }
}

function handlePauseClick() {
  if ('speechSynthesis' in window && audioPlayerState === 'playing') {
    window.speechSynthesis.pause();
    audioPlayerState = 'paused';
    updateAudioPlayerUI();
  }
}

function handleStopClick() {
  if ('speechSynthesis' in window) {
    window.speechSynthesis.cancel();
    audioPlayerState = 'stopped';
    updateAudioPlayerUI();
  }
}

function speakText(text) {
  if (!('speechSynthesis' in window)) {
    alert('您的瀏覽器暫時不支援語音朗讀功能。');
    return;
  }

  // Cancel any previous speech
  window.speechSynthesis.cancel();

  const utterance = new SpeechSynthesisUtterance(text);
  utterance.lang = 'zh-TW';
  utterance.rate = 1.0;
  utterance.pitch = 1.0;

  utterance.onstart = () => {
    audioPlayerState = 'playing';
    updateAudioPlayerUI();
  };

  utterance.onpause = () => {
    audioPlayerState = 'paused';
    updateAudioPlayerUI();
  };

  utterance.onresume = () => {
    audioPlayerState = 'playing';
    updateAudioPlayerUI();
  };

  utterance.onend = () => {
    audioPlayerState = 'stopped';
    updateAudioPlayerUI();
  };

  utterance.onerror = () => {
    audioPlayerState = 'stopped';
    updateAudioPlayerUI();
  };

  currentSpeechUtterance = utterance;
  window.speechSynthesis.speak(utterance);
}

function updateAudioPlayerUI() {
  const playBtn = document.getElementById('audio-play-btn');
  const pauseBtn = document.getElementById('audio-pause-btn');
  const stopBtn = document.getElementById('audio-stop-btn');
  const statusText = document.getElementById('audio-status-text');
  const indicatorDot = document.getElementById('audio-indicator-dot');

  if (!playBtn || !pauseBtn || !stopBtn) return;

  if (audioPlayerState === 'playing') {
    playBtn.disabled = true;
    pauseBtn.disabled = false;
    stopBtn.disabled = false;

    if (statusText) statusText.textContent = '🔊 正在朗讀新聞中...';
    if (indicatorDot) {
      indicatorDot.className = 'audio-indicator-dot playing';
    }
  } else if (audioPlayerState === 'paused') {
    playBtn.disabled = false;
    pauseBtn.disabled = true;
    stopBtn.disabled = false;

    if (statusText) statusText.textContent = '⏸️ 已暫停朗讀';
    if (indicatorDot) {
      indicatorDot.className = 'audio-indicator-dot paused';
    }
  } else {
    // Stopped
    playBtn.disabled = false;
    pauseBtn.disabled = true;
    stopBtn.disabled = true;

    if (statusText) statusText.textContent = '語音廣播站';
    if (indicatorDot) {
      indicatorDot.className = 'audio-indicator-dot';
    }
  }
}

// Ensure setupAudioPlayerControls is called on DOMContentLoaded
document.addEventListener('DOMContentLoaded', () => {
  setupAudioPlayerControls();
});

// Helper: Escape Quotes for Inline Handlers
function escapeQuotes(str) {
  return str.replace(/'/g, "\\'").replace(/"/g, '&quot;');
}
