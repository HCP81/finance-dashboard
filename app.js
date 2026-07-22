// ----------------------------------------------------
// 智財經 Finance Hub - Interactive Logic & Data Engine
// Updated Automatically at: 2026年07月23日 星期四
// ----------------------------------------------------

const currentReportDate = "2026年07月23日 星期四";

// 1. Data Store: Market Overview Cards
const marketData = [
  {
    "symbol": "台股加權指數",
    "ticker": "TAIEX",
    "val": "23,920.80",
    "change": "+210.15 (+0.88%)",
    "isUp": true,
    "tag": "台股主板"
  },
  {
    "symbol": "納斯達克指數",
    "ticker": "NASDAQ",
    "val": "18,710.45",
    "change": "+145.20 (+0.78%)",
    "isUp": true,
    "tag": "美股科技"
  },
  {
    "symbol": "輝達 (NVIDIA)",
    "ticker": "NVDA",
    "val": "$131.20",
    "change": "+$2.70 (+2.10%)",
    "isUp": true,
    "tag": "AI領航"
  },
  {
    "symbol": "台積電 ADR",
    "ticker": "TSM",
    "val": "$179.50",
    "change": "+$2.70 (+1.53%)",
    "isUp": true,
    "tag": "晶片龍頭"
  },
  {
    "symbol": "台灣六都房價指數",
    "ticker": "TW-HOUSING",
    "val": "348.0",
    "change": "-0.05% (量縮盤整)",
    "isUp": false,
    "tag": "台灣房市"
  },
  {
    "symbol": "美元 / 新台幣",
    "ticker": "USD/TWD",
    "val": "32.42",
    "change": "-0.03 (-0.09%)",
    "isUp": false,
    "tag": "外匯"
  },
  {
    "symbol": "黃金 (Gold)",
    "ticker": "XAU/USD",
    "val": "$2,450.60",
    "change": "+$18.40 (+0.76%)",
    "isUp": true,
    "tag": "避險資產"
  },
  {
    "symbol": "布蘭特原油",
    "ticker": "BRENT",
    "val": "$84.30",
    "change": "-$0.65 (-0.77%)",
    "isUp": false,
    "tag": "能源大宗"
  }
];

// 2. Data Store: 30-Second Digest Highlights
const digestHighlights = [
  {
    "num": "01",
    "title": "🤖 AI 晶片需求持續火熱，台美科技股共振走揚",
    "desc": "台積電 3 奈米與 CoWoS 高階封裝產能供不應求，輝達與美系雲端巨頭（CSP）追加資本支出，直接挹注廣達、緯創、奇鋐等台灣供應鏈營收亮眼。"
  },
  {
    "num": "02",
    "title": "🏠 央行信用管制與成數限制，台灣房市呈現「價平量縮」",
    "desc": "第七波信用管制與銀行放款比率限縮發揮效果。預售屋交屋潮排隊辦貸款，首購族青安專案相對受惠，投資型買盤明顯退場。"
  },
  {
    "num": "03",
    "title": "💵 美聯儲利率維持高檔，大盤呈現結構性輪動",
    "desc": "市場預估美聯儲將視降息時機而定，資金集中流向具有實質盈利支撐的 AI 科技與高股息龍頭，防禦型資產吸引力升。"
  },
  {
    "num": "04",
    "title": "⚡ 數據中心電力需求爆發，重電與綠能儲能概念股受矚目",
    "desc": "AI 數據中心吃電大增，美日台相繼加大電力網升級力道，重電設備與潔淨能源產業獲中長期長單保證。"
  },
  {
    "num": "05",
    "title": "🇯🇵 日圓匯率區間震盪，日本央行政策影響投資與旅遊趨勢",
    "desc": "日本央行緩步推動貨幣正常化，日圓匯率出現止跌回升跡象，赴日旅遊消費與台日供應鏈合作持續升溫。"
  }
];

// 3. Main News Database
const newsDatabase = [
  {
    "id": "n1",
    "category": "taiwan-us-stock",
    "categoryName": "台美股焦點",
    "categoryClass": "cat-taiwan-us-stock",
    "title": "台積電 CoWoS 擴產加速！概念股齊揚，廣達與奇鋐營運看好",
    "time": "15 分鐘前 · 財經日報",
    "sentiment": "bullish",
    "sentimentText": "📈 觀點：利多熱點",
    "sentimentClass": "badge-bullish",
    "easySummary": "【白話解讀】美系各大 AI 巨頭搶買 AI 晶片，台積電先進封裝（CoWoS）持續擴產。這代表組裝伺服器的廣達、做散熱的奇鋐、設備廠萬潤等台灣廠商訂單接不完，台股科技板塊基礎紮實。",
    "bullets": [
      "台積電高雄與嘉義先進封裝廠工程進度超前，全力應對龐大需求。",
      "AI 伺服器散熱全面轉向「水冷技術」，奇鋐與雙鴻水冷板出貨比重突破 35%。",
      "外資出具最新報告，重申台積電與 AI 關鍵供應鏈為亞太區首選配置。"
    ],
    "fullContent": "<h3>台積電 CoWoS 產能與台股 AI 供應鏈最新深度剖析</h3><p>隨著全球生成式 AI 應用成長，各大雲端業者對於 AI 算力採購力道持續強勁。台積電先進封裝產能（CoWoS）依舊是市場供給最大的瓶頸與關鍵契機。</p>"
  },
  {
    "id": "n2",
    "category": "ai-tech",
    "categoryName": "AI產業鏈",
    "categoryClass": "cat-ai-tech",
    "title": "NVIDIA 下一代架構晶片量產順利，雲端軟體應用進入獲利收割期",
    "time": "30 分鐘前 · 科技新報",
    "sentiment": "bullish",
    "sentimentText": "📈 觀點：利多熱點",
    "sentimentClass": "badge-bullish",
    "easySummary": "【白話解讀】輝達的新款 AI 晶片產能漸入佳境，不僅硬體賣得好，各大企業使用 AI 軟體工具的付費訂閱用戶也在快速暴增，AI 從「燒錢興建」轉入「開始賺錢」的轉折點。",
    "bullets": [
      "微軟、Google、Meta 最新財報顯示 AI 相關雲端服務營收成長超越 30%。",
      "企業端 AI Agent（智能代理）應用加速普及，自動化工作流程需求大增。",
      "供應鏈預估高階 AI 伺服器出貨量將創歷史新高。"
    ],
    "fullContent": "<h3>從硬體爆發到軟體變現：AI 產業發展的第二曲線</h3><p>過去兩年，AI 投資集中在數據中心與 GPU。市場關注焦點已轉向軟體與應用端的變現能力（Monetization）。</p>"
  },
  {
    "id": "n3",
    "category": "taiwan-us-stock",
    "categoryName": "台美股焦點",
    "categoryClass": "cat-taiwan-us-stock",
    "title": "廣達、緯創 AI 伺服器水冷機櫃出貨量倍增，毛利率顯著向上躍升",
    "time": "45 分鐘前 · 工商時報",
    "sentiment": "bullish",
    "sentimentText": "📈 觀點：利多熱點",
    "sentimentClass": "badge-bullish",
    "easySummary": "【白話解讀】以前伺服器用風扇吹，現在高階 AI 伺服器發熱量太大必須「用水冷系統」。廣達與緯創不僅賣伺服器主板，連水冷機櫃整箱幫客人組好，平均產品單價（ASP）與利潤大大提升。",
    "bullets": [
      "水冷伺服器機櫃（Liquid Cooling Rack）平均單價為傳統伺服器的 3~5 倍。",
      "廣達北美新廠產能開出，順利接獲微軟與 Meta 最新大單。",
      "緯創在 AI 晶片基板（Baseboard）市佔率高達七成，獲利看俏。"
    ],
    "fullContent": "<h3>水冷革命帶動台灣代工廠毛利率升級</h3><p>高功率 AI 伺服器的普及帶動了機房散熱設計的深刻變革。台灣代工大廠從單純代工邁向高附加價值的系統整合服務商。</p>"
  },
  {
    "id": "n4",
    "category": "ai-tech",
    "categoryName": "AI產業鏈",
    "categoryClass": "cat-ai-tech",
    "title": "聯發科強攻客製化晶片（ASIC）市場，攜手美系大廠拓展新藍海",
    "time": "1 小時前 · 電子時報",
    "sentiment": "bullish",
    "sentimentText": "📈 觀點：利多熱點",
    "sentimentClass": "badge-bullish",
    "easySummary": "【白話解讀】除了買輝達的通用晶片，各大雲端巨頭也想「自己設計最省電的專屬 AI 晶片」。聯發科靠著頂尖的 IC 設計實力與先進製程經驗，成功拿下大廠客製晶片訂單，開啟第二成長曲線。",
    "bullets": [
      "聯發科於高階 ASIC 設計服務領域展現極強競爭力。",
      "智慧型手機 AI 晶片天璣系列在國際市場市佔率穩定成長。",
      "市場看好聯發科在車用晶片與 AI PC 領域的長遠佈局。"
    ],
    "fullContent": "<h3>ASIC 客製化趨勢：聯發科的戰略轉型</h3><p>雲端服務商自研晶片趨勢明確，聯發科憑藉豐富的 IP 庫與先進製程整合能力，成功在 ASIC 市場取得重要戰果。</p>"
  },
  {
    "id": "n5",
    "category": "taiwan-us-stock",
    "categoryName": "台美股焦點",
    "categoryClass": "cat-taiwan-us-stock",
    "title": "美股七雄（Big 7）資本支出合計破 2000 億美元，台股概念股直接受惠",
    "time": "1.5 小時前 · 華爾街日報",
    "sentiment": "bullish",
    "sentimentText": "📈 觀點：利多熱點",
    "sentimentClass": "badge-bullish",
    "easySummary": "【白話解讀】美國七大科技巨頭宣布今年將砸超過 2000 億美元興建 AI 數據中心與買設備。這筆錢大部分最終都會流向台灣半導體、伺服器、散熱、電源與連接器產業。",
    "bullets": [
      "Amazon、Microsoft、Google、Meta 資本支出年增率高達 40%。",
      "數據中心建置需求從北美延燒至歐洲與亞太地區。",
      "台股重電與電力設備廠亦受惠於北美電網更新訂單。"
    ],
    "fullContent": "<h3>美系巨頭資本支出浪潮：台股電子供應鏈大解密</h3><p>巨頭之間的算力軍備競賽並未停歇，資本支出的持續成長為台股相關概念股提供了極高的營運能見度。</p>"
  },
  {
    "id": "n6",
    "category": "ai-tech",
    "categoryName": "AI產業鏈",
    "categoryClass": "cat-ai-tech",
    "title": "AI PC 與 AI 手機換機潮正式啟動，記憶體與散熱規格大幅升級",
    "time": "2 小時前 · 經濟日報",
    "sentiment": "neutral",
    "sentimentText": "⚖️ 觀點：穩健成長",
    "sentimentClass": "badge-neutral",
    "easySummary": "【白話解讀】新買的電腦與手機開始內建 AI 助手功能，要求記憶體必須加大（從 8GB/16GB 升級到 32GB 以上），帶動記憶體廠（南亞科、威剛）與散熱組件需求穩定上升。",
    "bullets": [
      "各大品牌品牌電腦（ASUS、Acer、Dell）全力推廣 AI PC。",
      "DDR5 與 LPDDR5X 高速記憶體滲透率快速拉升。",
      "使用者體驗提升帶動下半年終端消費性電子復甦。"
    ],
    "fullContent": "<h3>邊緣 AI（Edge AI）時代的硬體規格大升級</h3><p>隨著 AI 模型輕量化，裝置端（On-device AI）運行成為可能，進一步推升了終端硬體的硬體配置需求。</p>"
  },
  {
    "id": "n7",
    "category": "taiwan-housing",
    "categoryName": "台灣房地產",
    "categoryClass": "cat-taiwan-housing",
    "title": "第七波管制後六都買賣移轉量微幅下滑，首購族與自住族教戰守則",
    "time": "30 分鐘前 · 房市頭條",
    "sentiment": "neutral",
    "sentimentText": "⚖️ 觀點：中立觀望",
    "sentimentClass": "badge-neutral",
    "easySummary": "【白話解讀】央行管控銀行放款後，非首購族房貸貸款成數變低、利率上升，投資客減少。但對於名下無房的「真首購族」，新青安貸款依然可以使用，價格出現難得的平穩議價空間。",
    "bullets": [
      "六都買賣移轉棟數出現 3%~7% 不等的月減，市場買氣逐步回歸理性自住。",
      "銀行申貸排隊現象仍在，建議買房前務必先向銀行確認可貸額度與成數。",
      "預售屋市場受禁止換約政策影響，中古屋與剛性需求自住小宅交易相對穩健。"
    ],
    "fullContent": "<h3>台灣房市現狀解析：成數管制與利率環境下的購屋決策</h3><p>中央銀行第七波選擇性信用管制主要目的在於導正房市熱度。目前市場交易特徵：投資退場、自住當道、價平量縮。</p>"
  },
  {
    "id": "n8",
    "category": "taiwan-housing",
    "categoryName": "台灣房地產",
    "categoryClass": "cat-taiwan-housing",
    "title": "台南與高雄「半導體科學園區房市」理性回檔，區域機能與公共建設成關鍵",
    "time": "1 小時前 · 地產風雲",
    "sentiment": "bearish",
    "sentimentText": "📉 觀點：短線修正",
    "sentimentClass": "badge-bearish",
    "easySummary": "【白話解讀】前幾年靠著台積電設廠話題被炒高的南台灣部分偏遠區域，近期純靠議題的建案開始價格修正；但如果是在有成熟商圈、捷運與學校的園區核心區，房價依然十分抗跌。",
    "bullets": [
      "炒作型蛋白區買氣冷卻，部分屋主出現小幅讓價求售意願。",
      "台南科學園區（南科）與高雄楠梓科學園區周邊剛性租屋與買盤需求依然充沛。",
      "專家提醒：買房應注重「實體機能」與「通勤時間」，切勿單純盲從議題。"
    ],
    "fullContent": "<h3>科學園區房市效應檢視：從瘋狂炒作走向實力比拼</h3><p>過去幾年跟著台積電買房成為顯學。但在金融管控壓制投資槓桿後，市場進入回歸價值的檢驗期。</p>"
  },
  {
    "id": "n9",
    "category": "taiwan-housing",
    "categoryName": "台灣房地產",
    "categoryClass": "cat-taiwan-housing",
    "title": "銀行房貸放款水位逼近滿載，核貸排隊時間延長至 2~3 個月",
    "time": "2 小時前 · 金融觀察",
    "sentiment": "bearish",
    "sentimentText": "⚠️ 觀點：申貸注意",
    "sentimentClass": "badge-bearish",
    "easySummary": "【白話解讀】依銀行法第 72 條之 2 限制，多家國陸銀行房貸放款金額接近警戒線。現在申請房屋貸款審核變嚴格、撥款時間拉長，剛簽合約的買家請務必寬留交屋撥款時間。",
    "bullets": [
      "部分銀行暫緩受理非首購族新案件，或提高房貸利率至 2.5%~3% 以上。",
      "首購族與青安專案仍享有優先撥款權利，但審核流程較往常嚴謹。",
      "買賣合約建議註明「貸款撥放時間彈性條款」以避免交屋違約糾紛。"
    ],
    "fullContent": "<h3>銀行房貸水位於限貸令下的市場衝擊</h3><p>銀行法 72-2 條規定不動產放款不得超過總存款的 30%。隨近年房價飆升，多家銀行已達 28% 以上之警戒水位。</p>"
  },
  {
    "id": "n10",
    "category": "taiwan-housing",
    "categoryName": "台灣房地產",
    "categoryClass": "cat-taiwan-housing",
    "title": "新青安房貸開辦至今突破 8 萬戶，財政部加強查核人頭戶與轉租違規",
    "time": "3 小時前 · 財政新聞",
    "sentiment": "neutral",
    "sentimentText": "⚖️ 觀點：政策健全",
    "sentimentClass": "badge-neutral",
    "easySummary": "【白話解讀】政府提供給無房族的優惠房貸「新青安」申請非常踴躍。財政部正在積極抓出買來偷偷出租或借名字買房的人，確保優惠真正照顧到真正要買房自己住的新婚與年輕家庭。",
    "bullets": [
      "簽署切結書：新申辦者須切結房屋為自住使用，違者取消利率補貼並追討。",
      "青安貸款利率 1.775% 起，貸款年限最長 40 年，對首購負擔大減。",
      "健全市場秩序，讓剛性自住買盤獲得實質保障。"
    ],
    "fullContent": "<h3>新青安政策查核與首購權益保障</h3><p>財政部會同八大公股銀行落實自住查核，防止政策資源被不當利用，讓健全房市政策發揮效益。</p>"
  },
  {
    "id": "n11",
    "category": "taiwan-housing",
    "categoryName": "台灣房地產",
    "categoryClass": "cat-taiwan-housing",
    "title": "大台北軌道房市盤點：捷運三鶯線與萬大線沿線蛋白區受到自住客青睞",
    "time": "4 小時前 · 好房網",
    "sentiment": "bullish",
    "sentimentText": "📈 觀點：潛力看好",
    "sentimentClass": "badge-bullish",
    "easySummary": "【白話解讀】台北市房價高昂，許多小資上班族轉往新北三峽、鶯歌、樹林或土城買房。隨著捷運建設陸續完工，通車補漲與通勤便利性讓這些區域成為首購自住的新熱點。",
    "bullets": [
      "三峽、鶯歌房價相對台北核心區平易近人，吸引年輕首購族移居。",
      "軌道經濟學效益發酵，捷運站周邊中古大樓與小宅保值性佳。",
      "公共建設帶動區域生活機能與商圈快速升級。"
    ],
    "fullContent": "<h3>大台北軌道交通建設與自住移居趨勢</h3><p>軌道交通縮短了城鄉通勤時間，為首購族提供了兼具預算與生活品質的購屋選擇。</p>"
  },
  {
    "id": "n12",
    "category": "taiwan-housing",
    "categoryName": "台灣房地產",
    "categoryClass": "cat-taiwan-housing",
    "title": "商用地產與辦公大樓需求強勁，台北信義區與南港頂級辦公室租金創新高",
    "time": "5 小時前 · 商業周刊",
    "sentiment": "bullish",
    "sentimentText": "📈 觀點：利多熱點",
    "sentimentClass": "badge-bullish",
    "easySummary": "【白話解讀】雖然住宅受管控，但跨國科技公司與外商極力搶進台北信義計畫區與南港車站周邊的高級辦公大樓，頂級辦公室每坪租金再創歷史新高，商用不動產熱度居高不下。",
    "bullets": [
      "外商科技業與金融業對綠建築認證辦公室需求強烈。",
      "南港展覽館與軟體園區周邊辦公大樓空置率降至歷史低點。",
      "建商轉向布局商辦與複合式商業大樓開發開發案。"
    ],
    "fullContent": "<h3>台北頂級辦公室市場走勢與外商投資佈局</h3><p>強勁的產業基本面帶動了頂級商辦的需求，優質商業地產成為法人與壽險機構的配置首選。</p>"
  },
  {
    "id": "n13",
    "category": "global-macro",
    "categoryName": "國際總經",
    "categoryClass": "cat-global-macro",
    "title": "全球總體經濟展望：各國央行貨幣政策分化，日圓與美元走勢觀察",
    "time": "1 小時前 · 國際金融報",
    "sentiment": "neutral",
    "sentimentText": "⚖️ 觀點：中立觀察",
    "sentimentClass": "badge-neutral",
    "easySummary": "【白話解讀】美國降息腳步謹慎，日本央行則考慮緩步升息退出超寬鬆政策。這使得外匯市場上日圓出現止跌回升跡象，打算去日本旅遊或投資日股的人可多留意匯率區間。",
    "bullets": [
      "日本央行（BOJ）暗示逐步推進貨幣政策正常化，減緩日圓貶值壓力。",
      "歐洲央行（ECB）因通膨控制得當，已啟動預防性降息以刺激經濟。",
      "台幣近期隨美港股資金進出呈現區間窄幅震盪。"
    ],
    "fullContent": "<h3>全球匯率與總體經濟局勢全景圖</h3><p>當前全球主要央行政策不再步調一致，而是依據各國經濟體質走出一條分化之路。</p>"
  },
  {
    "id": "n14",
    "category": "global-macro",
    "categoryName": "國際總經",
    "categoryClass": "cat-global-macro",
    "title": "美國最新 CPI 物價指數持續降溫，美聯儲降息預期逐漸明朗",
    "time": "2 小時前 · Bloomberg",
    "sentiment": "bullish",
    "sentimentText": "📈 觀點：市場利多",
    "sentimentClass": "badge-bullish",
    "easySummary": "【白話解讀】美國最新公布的消費者物價指數（CPI）顯示物價上漲速度放緩，租金與二手車價格回落。這讓市場對於美聯儲降息的預期大增，為全球股市與債市注入強心針。",
    "bullets": [
      "美國核心 CPI 年增率低於市場預期，通膨壓力大幅減輕。",
      "美國十年期國債收益率應聲回落，資金重回風險性資產。",
      "投資人密切關注主席鮑爾於全球央行年會上的政策發言。"
    ],
    "fullContent": "<h3>美聯儲貨幣政策轉向與全球債市布局</h3><p>通膨數據回落為央行提供了降息空間，債券市場迎來歷史性的配置機會。</p>"
  },
  {
    "id": "n15",
    "category": "global-macro",
    "categoryName": "國際總經",
    "categoryClass": "cat-global-macro",
    "title": "國際金價創下歷史新高！全球央行持續購金，避險需求強勁",
    "time": "3 小時前 · 路透社",
    "sentiment": "bullish",
    "sentimentText": "📈 觀點：避險需求",
    "sentimentClass": "badge-bullish",
    "easySummary": "【白話解讀】由於地緣政治局勢與各國央行去美元化戰略，國際黃金價格突破新高。許多國家央行持續大舉買進黃金作為儲備，讓金價獲得堅實支撐。",
    "bullets": [
      "黃金現貨價格突破每盎司 2450 美元新高記錄。",
      "亞洲各國央行連數月增加官方黃金儲備量。",
      "實體黃金與黃金 ETF 吸引大批長線避險資金流入。"
    ],
    "fullContent": "<h3>黃金創歷史新高背後的結構性買盤分析</h3><p>除了傳統避險需求，各國央行資產配置多元化是支撐金價走強的最關鍵推手。</p>"
  },
  {
    "id": "n16",
    "category": "global-macro",
    "categoryName": "國際總經",
    "categoryClass": "cat-global-macro",
    "title": "國際原油價格小幅回落，地緣政治影響與全球能源需求博弈",
    "time": "4 小時前 · Energy World",
    "sentiment": "neutral",
    "sentimentText": "⚖️ 觀點：價格震盪",
    "sentimentClass": "badge-neutral",
    "easySummary": "【白話解讀】中東與烏克蘭地緣政局雖有波動，但由於中國與全球工業能源需求成長平緩，布蘭特原油價格維持在每桶 80~85 美元震盪，國內汽柴油價格短期趨於平穩。",
    "bullets": [
      "OPEC+ 減產協議延長至年底以維持原油供需平衡。",
      "美國頁岩油產量維持歷史高位，有效壓制油價飆漲。",
      "汽柴油與航空燃油價格平穩，有助於控制全球通膨。"
    ],
    "fullContent": "<h3>全球原油供需格局與通膨連動效應</h3><p>原油價格維持平穩區間，減輕了航空業與運輸業的成本壓力。</p>"
  },
  {
    "id": "n17",
    "category": "global-macro",
    "categoryName": "國際總經",
    "categoryClass": "cat-global-macro",
    "title": "歐洲央行啟動第二次降息，提振歐洲製造業與企業投資信心",
    "time": "5 小時前 · 歐洲時報",
    "sentiment": "bullish",
    "sentimentText": "📈 觀點：經濟刺激",
    "sentimentClass": "badge-bullish",
    "easySummary": "【白話解讀】因為歐洲通膨已順利降至 2% 目標附近，歐洲央行（ECB）宣佈降息一碼，以減輕企業借貸負擔並刺激德國與法國的製造業復甦。",
    "bullets": [
      "歐洲央行下調基準利率 25 個基點，市場反應正面。",
      "歐洲股市 STOXX 600 指數接近歷史高點震盪。",
      "汽車與高端機械製造業借貸成本下降，有利營運改善。"
    ],
    "fullContent": "<h3>歐洲央行降息政策與歐洲市場投資展望</h3><p>預防性降息有助於舒緩歐洲企業融資壓力，帶動歐元區經濟回溫。</p>"
  },
  {
    "id": "n18",
    "category": "global-macro",
    "categoryName": "國際總經",
    "categoryClass": "cat-global-macro",
    "title": "全球晶片法案與補貼競爭加劇，美日歐台半導體聚落成型",
    "time": "6 小時前 · 科技洞察",
    "sentiment": "neutral",
    "sentimentText": "⚖️ 觀點：長線佈局",
    "sentimentClass": "badge-neutral",
    "easySummary": "【白話解讀】美國、日本、歐盟紛紛拿出數百億美元補貼吸引晶片廠設廠。雖然增加了在地設廠成本，但也促進了台積電在熊本、德州與德勒斯登的全球戰略佈局。",
    "bullets": [
      "日本熊本一廠量產順利，熊本二廠與高階製程規劃展開。",
      "台積電美國亞利桑那州廠 4 奈米試產良率超乎預期。",
      "台灣作為最核心研發與高階製程基地地位依然不可撼動。"
    ],
    "fullContent": "<h3>全球半導體戰略地緣政治與台廠全球化戰略</h3><p>先進製程全球佈局分散了單一地緣風險，也進一步鞏固了台灣半導體的不可替代性。</p>"
  }
];

// State Management
let activeCategory = 'all';
let activeSentiment = 'all';
let searchQuery = '';
let bookmarkedIds = new Set(JSON.parse(localStorage.getItem('finance_bookmarks') || '[]'));

// DOM Elements
document.addEventListener('DOMContentLoaded', () => {
  const dateEl = document.getElementById('current-date');
  if (dateEl) {
    dateEl.textContent = currentReportDate;
  }

  initMarketCards();
  initDigestCards();
  renderNewsGrid();
  updateBookmarkCount();
  setupEventListeners();
  setupAudioPlayerControls();
});

// 1. Render Market Cards
function initMarketCards() {
  const container = document.getElementById('market-cards-container');
  if (!container) return;

  container.innerHTML = marketData.map(item => `
    <div class="market-card">
      <div class="card-top">
        <span class="symbol-name">\${item.symbol}</span>
        <span class="tag-badge" style="background:\${item.isUp ? '#f0fdf4' : '#fef2f2'}; color:\${item.isUp ? '#16a34a' : '#dc2626'}">\${item.tag}</span>
      </div>
      <div class="val">\${item.val}</div>
      <div class="change \${item.isUp ? 'up' : 'down'}">
        <span>\${item.isUp ? '▲' : '▼'}</span>
        <span>\${item.change}</span>
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
      <span class="digest-card-num">\${item.num}</span>
      <h4>\${item.title}</h4>
      <p>\${item.desc}</p>
    </div>
  `).join('');
}

// 3. Filter & Render News Grid
function renderNewsGrid() {
  const container = document.getElementById('news-grid-container');
  const countLabel = document.getElementById('news-count-label');
  if (!container) return;

  let filtered = newsDatabase.filter(news => {
    if (activeCategory !== 'all' && news.category !== activeCategory) return false;
    if (activeSentiment !== 'all' && news.sentiment !== activeSentiment) return false;
    if (searchQuery.trim() !== '') {
      const q = searchQuery.toLowerCase();
      const matchTitle = news.title.toLowerCase().includes(q);
      const matchSummary = news.easySummary.toLowerCase().includes(q);
      const matchBullets = news.bullets.some(b => b.toLowerCase().includes(q));
      return matchTitle || matchSummary || matchBullets;
    }
    return true;
  });

  if (countLabel) countLabel.textContent = `共 \${filtered.length} 條焦點動態`;

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
      <article class="news-card" id="card-\${news.id}">
        <div class="news-card-meta">
          <div class="meta-tags">
            <span class="category-tag \${news.categoryClass}">\${news.categoryName}</span>
            <span class="sentiment-badge \${news.sentimentClass}">\${news.sentimentText}</span>
          </div>
          <span class="news-time">\${news.time}</span>
        </div>

        <h3 class="news-card-title" onclick="openNewsModal('\${news.id}')">\${news.title}</h3>

        <div class="news-summary-box">
          <span class="summary-label">💡 30 秒白話懶人包：</span>
          <p class="summary-text">\${news.easySummary}</p>
        </div>

        <ul class="news-bullets">
          \${news.bullets.map(b => `<li>\${b}</li>`).join('')}
        </ul>

        <div class="news-card-actions">
          <button class="btn-text-action" onclick="openNewsModal('\${news.id}')">
            📖 閱讀完整分析數據 &rarr;
          </button>
          <div class="action-btn-group">
            <button class="btn-icon-action" onclick="speakText('\${escapeQuotes(news.title + '。' + news.easySummary)}')">
              🔊 聽新聞
            </button>
            <button class="btn-icon-action" onclick="toggleBookmark('\${news.id}')">
              \${isBookmarked ? '⭐ 已收藏' : '☆ 收藏'}
            </button>
          </div>
        </div>
      </article>
    `;
  }).join('');
}

// 4. Setup Interactive Event Listeners
function setupEventListeners() {
  const categoryContainer = document.getElementById('category-tabs');
  if (categoryContainer) {
    categoryContainer.addEventListener('click', (e) => {
      const btn = e.target.closest('.tab-btn');
      if (!btn) return;
      document.querySelectorAll('.tab-btn').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      activeCategory = btn.dataset.category;

      const catNameEl = document.getElementById('current-category-name');
      if (catNameEl) catNameEl.textContent = btn.textContent.trim();
      renderNewsGrid();
    });
  }

  document.querySelectorAll('.pill-btn').forEach(pill => {
    pill.addEventListener('click', () => {
      document.querySelectorAll('.pill-btn').forEach(p => p.classList.remove('active'));
      pill.classList.add('active');
      activeSentiment = pill.dataset.sentiment;
      renderNewsGrid();
    });
  });

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
      if (searchInput) searchInput.value = '';
      searchQuery = '';
      clearBtn.style.display = 'none';
      renderNewsGrid();
    });
  }

  document.getElementById('modal-close-btn')?.addEventListener('click', closeModal);
  document.getElementById('bookmarks-close-btn')?.addEventListener('click', closeBookmarksModal);
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
        <span class="category-tag \${news.categoryClass}">\${news.categoryName}</span>
        <span class="sentiment-badge \${news.sentimentClass}">\${news.sentimentText}</span>
      </div>
      <h2>\${news.title}</h2>
      <span style="font-size:12px; color:#64748b;">\${news.time}</span>
    `;
  }

  if (body) {
    body.innerHTML = `
      <div class="news-summary-box" style="margin-bottom:20px;">
        <span class="summary-label">💡 核心重點懶人包：</span>
        <p class="summary-text">\${news.easySummary}</p>
      </div>
      \${news.fullContent}
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
      openNewsModal(news.id);
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
        <span class="category-tag \${news.categoryClass}" style="font-size:11px;">\${news.categoryName}</span>
        <h4 style="font-size:15px; font-weight:800; margin:6px 0; cursor:pointer;" onclick="closeBookmarksModal(); openNewsModal('\${news.id}');">\${news.title}</h4>
        <p style="font-size:13px; color:#475569;">\${news.easySummary}</p>
        <div style="margin-top:10px; text-align:right;">
          <button class="btn-icon-action" onclick="toggleBookmark('\${news.id}'); openBookmarksModal();">❌ 移除收藏</button>
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
  if (countEl) countEl.textContent = bookmarkedIds.size;
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
    if (indicatorDot) indicatorDot.className = 'audio-indicator-dot playing';
  } else if (audioPlayerState === 'paused') {
    playBtn.disabled = false;
    pauseBtn.disabled = true;
    stopBtn.disabled = false;

    if (statusText) statusText.textContent = '⏸️ 已暫停朗讀';
    if (indicatorDot) indicatorDot.className = 'audio-indicator-dot paused';
  } else {
    playBtn.disabled = false;
    pauseBtn.disabled = true;
    stopBtn.disabled = true;

    if (statusText) statusText.textContent = '語音廣播站';
    if (indicatorDot) indicatorDot.className = 'audio-indicator-dot';
  }
}

function escapeQuotes(str) {
  return str.replace(/'/g, "\'").replace(/"/g, '&quot;');
}
