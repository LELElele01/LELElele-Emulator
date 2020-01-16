var head_negative = {
    sc: [
        "#N算什么？",
        "胡说八道！",
        "#N#B无耻！",
        "#N#B是原则性问题，怎么能讨论呢！",
        "我要打#N！",
        "我就不信了，#N敢#B！"
    ],
    tc: [
	"#N算什麼？",
    "胡說八道！",
    "#N#B無恥！",
    "#N#B是原則性問題，怎麼能討論呢！",
    "我要打#N！",
    "我就不信了，#N敢#B！"
    ]
}

var sentence_negative = {
    sc: [
	"规则不是人定的，#N#B的行为是在乱定规则。",
        "我的政敌越来越多。",
        "看来#N既不唯心也不唯物。",
        "我请#N记住，真理是不能讨论的。",
        "#N怎么能按人数#B呢？",
        "#N就像国企一样剥削人民。",
	"规则不是人定的，#N#B的行为是在乱定规则。",
        "我的政敌越来越多。",
        "看来#N既不唯心也不唯物。",
        "我请#N记住，真理是不能讨论的。",
        "#N怎么能按人数#B呢？",
        "#N就像国企一样剥削人民。",
	"#N是国家的走狗。",
	"#N是国家的走狗。"
    ],
    tc: [
        "規則不是人定的，#N#B的行為是在亂定規則。",
    "我的政敵越來越多。",
    "看來#N既不唯心也不唯物。",
    "我請#N記住，真理是不能討論的。",
    "#N怎麼能按人數#B呢？",
    "#N就像國企一樣剝削人民。",
    "規則不是人定的，#N#B的行為是在亂定規則。",
    "我的政敵越來越多。",
    "看來#N既不唯心也不唯物。",
    "我請#N記住，真理是不能討論的。",
    "#N怎麼能按人數#B呢？",
    "#N就像國企一樣剝削人民。",
    "#N是國家的走狗。",
    "#N是國家的走狗。"
    ]
}

var head_positive = {
    sc: [
        "对于#N#B的行为，说不好吧,也不太好。说好吧，也不太好。所以就说好了。",
        "#N现在是#B啊，我怎么能不支持。",
        "对于#N#B的行为，说不好吧,也不太好。说好吧，也不太好。所以就说好了。",
        "#N现在是#B啊，我怎么能不支持。",
	"#N#B，已经被#N政府的人民钦定了！",
	"#N#B，已经被#N政府的人民钦定了！"
    ],
    tc: [
	"對於#N#B的行為，說不好吧,也不太好。說好吧，也不太好。所以就說好了。",
   	 "#N現在是#B啊，我怎麼能不支持。",
	"對於#N#B的行為，說不好吧,也不太好。說好吧，也不太好。所以就說好了。",
   	 "#N現在是#B啊，我怎麼能不支持。",
	 "#N#B，已經被#N政府的人民欽定了！",
	 "#N#B，已經被#N政府的人民欽定了！"
    ]
}

var sentence_positive = {
    sc: [
        "#N不#B，大陆与台湾就无法和平统一。",
        "#B越多#B越快越好。",
        "#N#B说明他们没有生产资料公有制，很好。",
        "#B是战略。",
        "只有#N可以#B。",
        "#N像毛一样死了。",
        "#N不#B，大陆与台湾就无法和平统一。",
        "#B越多#B越快越好。",
        "#N#B说明他们没有生产资料公有制，很好。",
        "#B是战略。",
        "只有#N可以#B。",
        "#N像毛一样死了。",
	"没有资产阶级，也没有#N#B。",
	"没有资产阶级，也没有#N#B。"
    ],
    tc: [
        "#N不#B，大陸與台灣就無法和平統一。",
    	"#B越多#B越快越好。",
   	 "#N#B說明他們沒有生產資料公有製，很好。",
   	 "#B是戰略。",
   	 "只有#N可以#B。",
   	 "#N像毛一樣死了。",
         "#N不#B，大陸與台灣就無法和平統一。",
    	"#B越多#B越快越好。",
   	 "#N#B說明他們沒有生產資料公有製，很好。",
   	 "#B是戰略。",
   	 "只有#N可以#B。",
   	 "#N像毛一樣死了。",
	 "沒有資產階級，也沒有#N#B。",
	 "沒有資產階級，也沒有#N#B。"
    ]
}

var verb = {
    sc: [
        "通过", "签署", "开放", "承认", "否认", "推出", "退出", "拒绝", "谴责", "支持", "宣称", "表彰", "煽动", "组织", "公然挑衅", "成立", "模糊",
        "退出"
    ],
    tc: [
	
    ]
}

var ob = {
    sc: [
        "贸易保护主义政策", "新法案", "互惠贸易协议", "工作签证", "全民公投", "独立公投", "网络空间主权", "罢工运动", "互联网自由运动", "言论自由共识", "全民免费医保",
        "高等教育学费", "在历史课本中新增章节", "删除敏感信息", "更新隐私协议", "减弱文化审查力度", "间接民主制度", "社会主义理论基础","再次全票当选"
    ],
    tc: [

    ]
}

var countries = {
    sc: "蔡英文、韩国瑜、宋楚瑜、习近平、邓小平、毛泽东、江泽民、希特勒、墨索里尼、马克思、恩格斯、安倍晋三、普京、川普、林郑月娥、赵紫阳、林彪"
    .split("、"),
    tc: "蔡英文、韓國瑜、宋楚瑜、習近平、鄧小平、毛澤東、江澤民、希特勒、墨索里尼、馬克思、恩格斯、安倍晉三、普京、川普、林鄭月娥、趙紫陽、林彪"
    .split("、")
}

var head, sentences, lang;

function shuffle(sentences){
    for (var i =sentences.length;i>0;i--){
        var random_pos=Math.floor(Math.random()*i)
        var tmp=sentences[i-1]
        sentences[i-1]=sentences[random_pos]
        sentences[random_pos]=tmp
    }
}


function LELElele01(n, b) {
    paragraphs = Math.floor((Math.random() + 3))
    var i
    var answer = "<b>王佳乐主席：</b>"+"先让我组织一下语言……"+"<br/><br/>"
    var index = Math.floor((Math.random() * head.length))
    answer += head[index]
    shuffle(sentences)
    index=0
    for (i = 0; i < paragraphs; i++) {
        length = Math.floor((Math.random() + 3))
        for (j = 0; j < length; j++) {
            answer += sentences[index++]
        }
        answer += "<br><br>"
    }
    answer = answer.replace(/#N/g, n)
    answer = answer.replace(/#B/g, b)
    return answer
}

function generate() {
    var text = document.getElementById("text")
    var n = document.getElementById("1").value
    var b = document.getElementById("2").value
    var attitude = getRadioButtonCheckedValue("attitude")
    if(attitude == "support") {
        head = head_positive[lang]
        sentences = sentence_positive[lang]
    }
    else if(attitude == "condemn") {
        head = head_negative[lang]
        sentences = sentence_negative[lang]
    }

    if (n.length === 0 || b.length === 0) {

    } else {
        while (text.hasChildNodes()) {
            text.removeChild(text.firstChild)
        }
        var s = document.createElement("p")
        s.innerHTML = lang === "sc" ? "<b>香港记者：</b>" + n + b + "，王佳乐主席你觉得好不好啊？" : "<b>香港記者：</b>" + n + b + "，王佳乐主席你覺得好不好啊？"
        document.getElementById("text").appendChild(s)
        var t = document.createElement("p")
        t.innerHTML = LELElele01(n, b)
        document.getElementById("text").appendChild(t)
    }
}

function pick(items) {
    return items[Math.floor(Math.random() * items.length)]
}

function random() {
    document.getElementById("2").value = pick(verb[lang]) + pick(ob[lang])
    document.getElementById("1").value = pick(countries[lang])
    generate()
}

function getRadioButtonCheckedValue(tagNameAttr) {
    var radio_tag = document.getElementsByName(tagNameAttr);
    for(var i=0;i<radio_tag.length;i++) {
        if(radio_tag[i].checked) {
            var checkvalue = radio_tag[i].value;            
            return checkvalue;
        }
    }
}

function changeLang(value) {
    lang = value;
    localStorage.setItem("lang", lang);
    random()
    renderText()
}

function renderText() {
    var labelLang = document.getElementById("label-lang")
    labelLang.innerText = (lang === "sc") ? "语言" : "語言"

    var labelN = document.getElementById("label-n")
    labelN.innerText = (lang === "sc") ? "发言对象：" : "發言對象："

    var labelB = document.getElementById("label-b")
    labelB.innerText = (lang === "sc") ? "对方干了什么事情：" : "對方幹了什麼事情："

    var labelAttitude = document.getElementById("label-attitude")
    labelAttitude.innerText = (lang === "sc") ? "态度：" : "態度："

    var labelSupport = document.getElementById("label-support")
    labelSupport.innerText = (lang === "sc") ? "支持" : "支持"

    var labelCondemn = document.getElementById("label-condemn")
    labelCondemn.innerText = (lang === "sc") ? "谴责" : "譴責"

    var btnGenerate = document.getElementById("btn-generate")
    btnGenerate.innerText = (lang === "sc") ? "王主席怒斥香港记者" : "王主席怒斥香港記者"
}

lang = localStorage.getItem("lang") ? localStorage.getItem("lang") : "sc"
document.querySelectorAll("#lang option[value='"+lang+"']")[0].setAttribute("selected", true)

renderText()
random()
