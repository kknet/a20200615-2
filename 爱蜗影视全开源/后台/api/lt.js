
    new Vue({
        el:"#vue-content",
        data:{
            giftName:"",
            height:"",
            inputValue:"",
            metext:"我",
            inputList:[],
            //announcement:"消息:欢迎来到直播间，请文明发言。"
        },
        methods:{
            handelClick:function(){
                this.inputList.push(this.inputValue);
                this.inputValue="";
                var height1=document.getElementById("inputUl").offsetHeight;
                var height2=document.getElementById("message").offsetHeight;
                var height = height2-height1-24;
//                console.log(height);
                if(height<=0){
                    document.getElementById("inputUl").style.marginTop = height+"px";
                }

            },
            giftClick:function(){
                if(this.giftName==""){
                    this.giftName="active";
                }else{
                    this.giftName="";
                }

            }
        }
    })




    function addMsg (){
        var testData=[
						"<li class='message-list' id='addMsg'><span class='nickname' style='color:#FFA500'>爬爬约炮</span>:好淫啊</li>",
						"<li class='message-list' id='addMsg'><span class='nickname' style='color:#FFA500'>本人很很骚</span>:好??美</li>",
						"<li class='message-list' id='addMsg'><span class='nickname' style='color:#FFA500'>洛尘</span>:可以??撸撸了</li>",
						"<li class='message-list' id='addMsg'><span class='nickname' style='color:#FFA500'>金光一闪</span>:往下一??点可以吗</li>",
						"<li class='message-list' id='addMsg'><span class='nickname' style='color:#FFA500'>魔域</span>:??撩一下吧妹妹</li>",
						"<li class='message-list' id='addMsg'><span class='nickname' style='color:#FEC400'>淫哥</span>:三围??多少</li>",
						"<li class='message-list' id='addMsg'><span class='nickname' style='color:#FEC400'>江西老表</span>:??真想摸下</li>",
						"<li class='message-list' id='addMsg'><span class='nickname' style='color:#FEC400'>飘飘欲仙</span>:??能摸不</li>",
						"<li class='message-list' id='addMsg'><span class='nickname' style='color:#FEC400'>渡神动成</span>:好胸险??</li>",
						"<li class='message-list' id='addMsg'><span class='nickname' style='color:#FFA500'>王思怱他爹</span>:??水多吗</li>",
						"<li class='message-list' id='addMsg'><span class='nickname' style='color:#FFA500'>暖阳~~</span>:撩撩吧??</li>",
						"<li class='message-list' id='addMsg'><span class='nickname' style='color:#009900'>首席团长</span>:大白兔</li>",
						"<li class='message-list' id='addMsg'><span class='nickname' style='color:#FFA500'>虎子妈蛋</span>:??这奶子手感不知咋样！！</li>",
						"<li class='message-list' id='addMsg'><span class='nickname' style='color:#FFA500'>找炮友</span>:手感估计不错</li>",
						"<li class='message-list' id='addMsg'><span class='nickname' style='color:#FFA500'>豪哥</span>:这个保养的好??</li>",
						"<li class='message-list' id='addMsg'><span class='nickname' style='color:#E81010'>大灰狼哥</span>:我淫的一手好湿</li>",
						"<li class='message-list' id='addMsg'><span class='nickname' style='color:#E81010'>念之森蓝</span>:怎样才??能约到</li>",
						"<li class='message-list' id='addMsg'><span class='nickname' style='color:#E81010'>春天的我</span>:可以加VX吗</li>",
						"<li class='message-list' id='addMsg'><span class='nickname' style='color:#E81010'>做好准备了哦</span>:妹子给大爷跳一个呗</li>",
						"<li class='message-list' id='addMsg'><span class='nickname' style='color:#E81010'>范进中举</span>:哪里的??</li>",
						"<li class='message-list' id='addMsg'><span class='nickname' style='color:#E81010'>谁能像风一样自由</span>:奶子刚刚好</li>",
						"<li class='message-list' id='addMsg'><span class='nickname' style='color:#FFA500'>安静先生</span>:妹子??把哥看硬了</li>",
						"<li class='message-list' id='addMsg'><span class='nickname' style='color:#FFA500'>逐鹿九歌</span>:看直播都看??硬了</li>",
						"<li class='message-list' id='addMsg'><span class='nickname' style='color:#FFA500'>VV的亲戚</span>:能打炮不</li>",
						"<li class='message-list' id='addMsg'><span class='nickname' style='color:#FFA500'>花开小可爱</span>:咋约??？？</li>",
						"<li class='message-list' id='addMsg'><span class='nickname' style='color:#8B0279'>流氓三金</span>:妹妹好甜</li>",
						"<li class='message-list' id='addMsg'><span class='nickname' style='color:#FFA500'>风一样的男人</span>:听不清????</li>",
						"<li class='message-list' id='addMsg'><span class='nickname' style='color:#FFA500'>混势摸王</span>:全职还是兼职</li>",
						"<li class='message-list' id='addMsg'><span class='nickname' style='color:#8B0279'>WC哈哈</span>:佛山来约吗</li>",
						"<li class='message-list' id='addMsg'><span class='nickname' style='color:#FFA500'>WEIXLN</span>:脱脱脱</li>",
						"<li class='message-list' id='addMsg'><span class='nickname' style='color:#339900'>贼鸡儿菜</span>:老司机了??</li>",
						"<li class='message-list' id='addMsg'><span class='nickname' style='color:#FFA500'>宝贝放松点</span>:有??人插过你的屁股吗</li>",
						"<li class='message-list' id='addMsg'><span class='nickname' style='color:#FFA500'>这个点还没睡</span>:操屁股</li>",
						"<li class='message-list' id='addMsg'><span class='nickname' style='color:#FFA500'>阿呆哥</span>:插嘴??</li>",
						"<li class='message-list' id='addMsg'><span class='nickname' style='color:#009900'>哥基短腿</span>:BB看看</li>",
						"<li class='message-list' id='addMsg'><span class='nickname' style='color:#FFA500'>本山叔</span>:主播性经验丰富啊</li>",
						"<li class='message-list' id='addMsg'><span class='nickname' style='color:#009900'>两条龙服务</span>:全部脱掉</li>",
						"<li class='message-list' id='addMsg'><span class='nickname' style='color:#FFA500'>好大好深</span>:咪咪应该多出来透透气</li>",
						"<li class='message-list' id='addMsg'><span class='nickname' style='color:#8B0279'>周大福</span>:看看??屁眼</li>",
						"<li class='message-list' id='addMsg'><span class='nickname' style='color:#8B0279'>嗨爆肝儿</span>:看看奶罩</li>",
						"<li class='message-list' id='addMsg'><span class='nickname' style='color:#8B0279'>视而不见Y</span>:福建来??约吗？妹子。</li>",
						"<li class='message-list' id='addMsg'><span class='nickname' style='color:#8B0279'>我是我自己的人生</span>:加微信吗</li>",
						"<li class='message-list' id='addMsg'><span class='nickname' style='color:#FFA500'>深入</span>:妹妹插你??屁股会高潮吗</li>",
						"<li class='message-list' id='addMsg'><span class='nickname' style='color:#009900'>交配交的人</span>:回去了找你插插</li>",
						"<li class='message-list' id='addMsg'><span class='nickname' style='color:#339900'>篱笆外的先生</span>:以后回来家能约你吗</li>",
						"<li class='message-list' id='addMsg'><span class='nickname' style='color:#FFA500'>老衲法号小葡萄</span>:主播好??</li>",
						"<li class='message-list' id='addMsg'><span class='nickname' style='color:#009900'>一哥</span>:哥哥鸡鸡硬了需要插你</li>",
						"<li class='message-list' id='addMsg'><span class='nickname' style='color:#FFA500'>看一下午</span>:主播微信多少</li>",
						"<li class='message-list' id='addMsg'><span class='nickname' style='color:#FEC400'>菜的很逼真</span>:厉害了</li>",
						"<li class='message-list' id='addMsg'><span class='nickname' style='color:#FFA500'>爱贝斯</span>:看看??下面??</li>",
						"<li class='message-list' id='addMsg'><span class='nickname' style='color:#FFA500'>不忘初心</span>:来广州打炮</li>",
						"<li class='message-list' id='addMsg'><span class='nickname' style='color:#FFA500'>嗯老郭子</span>:可约吗</li>",
						"<li class='message-list' id='addMsg'><span class='nickname' style='color:#FFA500'>请叫我黑帅</span>:主播表演点劲爆呢啥</li>",
						"<li class='message-list' id='addMsg'><span class='nickname' style='color:#FFA500'>弑念ン凌龙</span>:主播屁眼小不小</li>",
						"<li class='message-list' id='addMsg'><span class='nickname' style='color:#FFA500'>疾影＠天龙</span>:哥哥鸡鸡??大能满足你哟</li>",
						"<li class='message-list' id='addMsg'><span class='nickname' style='color:#FFA500'>痞性</span>:看看逼</li>",
						"<li class='message-list' id='addMsg'><span class='nickname' style='color:#FEC400'>剩余</span>:被双插过吗</li>",
						"<li class='message-list' id='addMsg'><span class='nickname' style='color:#FEC400'>是谁给你可以自恋的资本-</span>:舔起来</li>",
						"<li class='message-list' id='addMsg'><span class='nickname' style='color:#FEC400'>亲， 奴家不是流氓。</span>:插??进去</li>",
						"<li class='message-list' id='addMsg'><span class='nickname' style='color:#339900'>baby你教我接吻吧</span>:看奶两个</li>",
						"<li class='message-list' id='addMsg'><span class='nickname' style='color:#FEC400'>血色天竺</span>:看奶</li>",
						"<li class='message-list' id='addMsg'><span class='nickname' style='color:#FEC400'>你，讓我無語</span>:露出来呗</li>",
						"<li class='message-list' id='addMsg'><span class='nickname' style='color:#FEC400'>煎饼大侠</span>:来让哥??舔舔逼逼</li>",
						"<li class='message-list' id='addMsg'><span class='nickname' style='color:#FEC400'>浴血魔王</span>:看看胸</li>",
						"<li class='message-list' id='addMsg'><span class='nickname' style='color:#FFA500'>狂扁小朋友</span>:露奶看看呗</li>",
						"<li class='message-list' id='addMsg'><span class='nickname' style='color:#FFA500'>硬汉无敌</span>:来厦门约</li>",
						"<li class='message-list' id='addMsg'><span class='nickname' style='color:#FFA500'>神武★大帝</span>:你喜欢??被插哪里</li>",
						"<li class='message-list' id='addMsg'><span class='nickname' style='color:#FFA500'>南小帝</span>:美女和狗狗玩过吗</li>",
						"<li class='message-list' id='addMsg'><span class='nickname' style='color:#FFA500'>霸气侧漏的小男银</span>:真好看</li>",
						"<li class='message-list' id='addMsg'><span class='nickname' style='color:#FFA500'>谁会陪我一起变老</span>:这奶子可以玩一年</li>",
						"<li class='message-list' id='addMsg'><span class='nickname' style='color:#FFA500'>一天到晚红烧的鱼</span>:看看内裤</li>",
						"<li class='message-list' id='addMsg'><span class='nickname' style='color:#FFA500'>乌鸦也能展翅高飞</span>:让你美丽的乳房暴露在空气中</li>",
						"<li class='message-list' id='addMsg'><span class='nickname' style='color:#FFA500'>飞车妹子雄起</span>:捅一下BB</li>",
						"<li class='message-list' id='addMsg'><span class='nickname' style='color:#FFA500'>无谱-</span>:性感滴屁屁??</li>",
						"<li class='message-list' id='addMsg'><span class='nickname' style='color:#FFA500'>り午夜↘清醒依旧、</span>:哥哥帮你扣扣B</li>",
						"<li class='message-list' id='addMsg'><span class='nickname' style='color:#FEC400'>孤亡灵の梦</span>:露露黑B看看</li>",
						"<li class='message-list' id='addMsg'><span class='nickname' style='color:#FEC400'>芷岸边城恋旧。</span>:真想干你八百遍！</li>",
						"<li class='message-list' id='addMsg'><span class='nickname' style='color:#FEC400'>小屌丝何患无妻</span>:性感的妹儿</li>",
						"<li class='message-list' id='addMsg'><span class='nickname' style='color:#FEC400'>空城琥珀柒少年</span>:主播皮肤好白</li>",
						"<li class='message-list' id='addMsg'><span class='nickname' style='color:#FEC400'>℡中国好男儿゛</span>:看比比好吗??</li>",
						"<li class='message-list' id='addMsg'><span class='nickname' style='color:#339900'>昨天的昨天的昨天丶</span>:??叫两声听听</li>",
						"<li class='message-list' id='addMsg'><span class='nickname' style='color:#FFA500'>站在街边,却感不到那温暖</span>:小姐姐好性感??</li>",
						"<li class='message-list' id='addMsg'><span class='nickname' style='color:#FFA500'>安于此生°</span>:把内裤脱了</li>",
						"<li class='message-list' id='addMsg'><span class='nickname' style='color:#FFA500'>时间消磨人心</span>:主播??一晚几个银子</li>",
						"<li class='message-list' id='addMsg'><span class='nickname' style='color:#009900'>⑧⑦年→僦拽</span>:主播流水了吗</li>",
						"<li class='message-list' id='addMsg'><span class='nickname' style='color:#FFA500'>春花烂漫·</span>:自摸喷水啊</li>",
						"<li class='message-list' id='addMsg'><span class='nickname' style='color:#FFA500'>*当空皓月/</span>:主播??插插半小时多少银子</li>",
						"<li class='message-list' id='addMsg'><span class='nickname' style='color:#FFA500'>My啖莣⒈苆</span>:主播卖B吗</li>",
						"<li class='message-list' id='addMsg'><span class='nickname' style='color:#FFA500'>≠、臭包子</span>:喷个水水看看</li>",
						"<li class='message-list' id='addMsg'><span class='nickname' style='color:#FFA500'>除了我全世界都是猪</span>:找个男人操你B啊</li>",
						"<li class='message-list' id='addMsg'><span class='nickname' style='color:#FFA500'>狗绕道@</span>:看看奶子嘛</li>",
						"<li class='message-list' id='addMsg'><span class='nickname' style='color:#FFA500'>絕版い厷主ヾ</span>:大鸡巴插死你</li>",
						"<li class='message-list' id='addMsg'><span class='nickname' style='color:#FFA500'>老娘比你美、</span>:你的逼逼让人舔过没有</li>",
						"<li class='message-list' id='addMsg'><span class='nickname' style='color:#FFA500'>你祖奶我很ok</span>:好风骚的妹子</li>",
						"<li class='message-list' id='addMsg'><span class='nickname' style='color:#FFA500'>叼根香烟吻迩</span>:??我最喜欢舔逼了</li>",
						"<li class='message-list' id='addMsg'><span class='nickname' style='color:#FFA500'>祖宗味儿</span>:抖抖奶奶</li>",
						"<li class='message-list' id='addMsg'><span class='nickname' style='color:#FFA500'>待我称王带你狂</span>:你现在有男朋友吗？</li>",
						"<li class='message-list' id='addMsg'><span class='nickname' style='color:#FEC400'>猛虎独行</span>:我是??来操你的</li>",
						"<li class='message-list' id='addMsg'><span class='nickname' style='color:#FEC400'>余生颓废</span>:BB生过小孩吗</li>",
						"<li class='message-list' id='addMsg'><span class='nickname' style='color:#FEC400'>野性孤傲</span>:舔你全身</li>",
						"<li class='message-list' id='addMsg'><span class='nickname' style='color:#009900'>年轻人玩的就是心跳</span>:姿色还可以，看看奶子</li>",
						"<li class='message-list' id='addMsg'><span class='nickname' style='color:#009900'>骚年称霸帝王座</span>:约炮吗??？</li>",
						"<li class='message-list' id='addMsg'><span class='nickname' style='color:#FFA500'>狗逼是你</span>:什么都??没看到</li>",
						"<li class='message-list' id='addMsg'><span class='nickname' style='color:#FFA500'>王者为她战天下</span>:没劲爆表演吗？</li>",
						"<li class='message-list' id='addMsg'><span class='nickname' style='color:#009900'>我有一颗帝王心</span>:能飞过来啪啪吗？</li>",
						"<li class='message-list' id='addMsg'><span class='nickname' style='color:#339900'>动我女神全撸倒</span>:主播哪里的？</li>",
						"<li class='message-list' id='addMsg'><span class='nickname' style='color:#FFA500'>小三称霸天下</span>:看你直播真费纸巾</li>",
						"<li class='message-list' id='addMsg'><span class='nickname' style='color:#FFA500'>东西南北客</span>:我舔</li>",
						"<li class='message-list' id='addMsg'><span class='nickname' style='color:#FFA500'>相忘于江湖</span>:给我舔</li>",
						"<li class='message-list' id='addMsg'><span class='nickname' style='color:#339900'>野心教徒</span>:看看B</li>",
						"<li class='message-list' id='addMsg'><span class='nickname' style='color:#FFA500'>斜倚云端</span>:叫啥名字</li>",
						"<li class='message-list' id='addMsg'><span class='nickname' style='color:#FFA500'>笑你浪荡</span>:主播一般什么时候开播</li>",
						"<li class='message-list' id='addMsg'><span class='nickname' style='color:#FFA500'>我的爱情喂了狗</span>:下面紧不紧</li>",
						"<li class='message-list' id='addMsg'><span class='nickname' style='color:#FFA500'>铁石心肠</span>:情??书是我抄的，但爱你是真的</li>",
						"<li class='message-list' id='addMsg'><span class='nickname' style='color:#8B0279'>天生独权</span>:我明天飞过去深度插你</li>",
						"<li class='message-list' id='addMsg'><span class='nickname' style='color:#8B0279'>帝王不怀旧</span>:插爆你的BB</li>",
						"<li class='message-list' id='addMsg'><span class='nickname' style='color:#8B0279'>浪荡街痞</span>:会表??演喷水吗</li>",
						"<li class='message-list' id='addMsg'><span class='nickname' style='color:#8B0279'>手中战场</span>:试过所有姿势吗</li>",
						"<li class='message-list' id='addMsg'><span class='nickname' style='color:#8B0279'>热情狙击手 </span>:啪啪小??屁屁</li>",
						"<li class='message-list' id='addMsg'><span class='nickname' style='color:#8B0279'>野心杀手</span>:主播咬我</li>",
						"<li class='message-list' id='addMsg'><span class='nickname' style='color:#8B0279'>余生继续浪   </span>:插深一点</li>",
						"<li class='message-list' id='addMsg'><span class='nickname' style='color:#FFA500'>闹够了就滚</span>:哥我邪恶的想插你</li>",
						"<li class='message-list' id='addMsg'><span class='nickname' style='color:#FFA500'>傲气稳情场</span>:主播喜欢大鸡巴</li>",
						"<li class='message-list' id='addMsg'><span class='nickname' style='color:#FFA500'>提刀灭情</span>:妹子B??B是少尺寸</li>",
						"<li class='message-list' id='addMsg'><span class='nickname' style='color:#FFA500'>烟笼长安</span>:妹妹喜??欢被后插入吗</li>",
						"<li class='message-list' id='addMsg'><span class='nickname' style='color:#FFA500'>一刀斩乱麻</span>:露逼吗</li>",
						"<li class='message-list' id='addMsg'><span class='nickname' style='color:#FFA500'>共你百年</span>:听你说话都能硬</li>",
						"<li class='message-list' id='addMsg'><span class='nickname' style='color:#FFA500'>久念浪友</span>:奶奶好白</li>",
						"<li class='message-list' id='addMsg'><span class='nickname' style='color:#FEC400'>疯子爱人</span>:你下面??紧吗</li>",
						"<li class='message-list' id='addMsg'><span class='nickname' style='color:#FEC400'>午夜买醉</span>:叫几??下我打飞机</li>",
						"<li class='message-list' id='addMsg'><span class='nickname' style='color:#FEC400'>配角而已,何必入戏</span>:塞得满满的</li>",
						"<li class='message-list' id='addMsg'><span class='nickname' style='color:#FEC400'>玩物雜誌</span>:哎呀，好白白，继续爽</li>",
						"<li class='message-list' id='addMsg'><span class='nickname' style='color:#FFA500'>红颜独憔悴</span>:给哥哥表演??个喷水</li>",
						"<li class='message-list' id='addMsg'><span class='nickname' style='color:#FFA500'>过分依赖.</span>:说得我流口水了</li>",
						"<li class='message-list' id='addMsg'><span class='nickname' style='color:#FFA500'>抱墙一个人睡</span>:女生高??潮的时候下面会吸</li>",
						"<li class='message-list' id='addMsg'><span class='nickname' style='color:#FFA500'>我的马子超正 .</span>:那里能伸进去吗</li>",
						"<li class='message-list' id='addMsg'><span class='nickname' style='color:#FFA500'>懒得爱你</span>:胸怎么样</li>",
						"<li class='message-list' id='addMsg'><span class='nickname' style='color:#FFA500'>敢问姑娘芳名</span>:女司机好专业</li>",
						"<li class='message-list' id='addMsg'><span class='nickname' style='color:#FFA500'>烈酒探戈</span>:用鸡鸡插</li>",
						"<li class='message-list' id='addMsg'><span class='nickname' style='color:#FFA500'>宇宙大爆炸</span>:玩炮友专业户</li>",
						"<li class='message-list' id='addMsg'><span class='nickname' style='color:#FFA500'>爷的范，你学不来！</span>:先舔再插</li>",
						"<li class='message-list' id='addMsg'><span class='nickname' style='color:#FFA500'>时间煮雨我煮粥</span>:主播好会玩</li>",
						"<li class='message-list' id='addMsg'><span class='nickname' style='color:#FFA500'>笑言诋毁</span>:主播喜??欢哪种姿势</li>",
						"<li class='message-list' id='addMsg'><span class='nickname' style='color:#FFA500'>提刀灭热情</span>:主播哪里敏感</li>",
						"<li class='message-list' id='addMsg'><span class='nickname' style='color:#FFA500'>余生罪爱你</span>:主播会??不会毒龙</li>",
						"<li class='message-list' id='addMsg'><span class='nickname' style='color:#FFA500'>始乱终弃</span>:主播叫叫春听听</li>",
						"<li class='message-list' id='addMsg'><span class='nickname' style='color:#FFA500'>挥剑指苍天</span>:你好漂亮??</li>",
						"<li class='message-list' id='addMsg'><span class='nickname' style='color:#FFA500'>浊酒尽欢</span>:胸胸不要凶哦哟</li>",
						"<li class='message-list' id='addMsg'><span class='nickname' style='color:#009900'>不在作践自己</span>:看看粉粉逼呀</li>",
						"<li class='message-list' id='addMsg'><span class='nickname' style='color:#009900'>淡忘 那段情…</span>:是我娶了她可能天天干</li>",
						"<li class='message-list' id='addMsg'><span class='nickname' style='color:#339900'>feel 幸福</span>:看大咪咪</li>",
						"<li class='message-list' id='addMsg'><span class='nickname' style='color:#009900'>浅怀感伤</span>:抽插主播</li>",
						"<li class='message-list' id='addMsg'><span class='nickname' style='color:#009900'>心上一道疤而已</span>:姐姐好</li>",
						"<li class='message-list' id='addMsg'><span class='nickname' style='color:#FFA500'>回不去的梦</span>:插死你逼逼</li>",
						"<li class='message-list' id='addMsg'><span class='nickname' style='color:#FFA500'>独自空忆成欢</span>:喷一个给大??爷看看</li>",
						"<li class='message-list' id='addMsg'><span class='nickname' style='color:#E81010'>记忆伤人心</span>:动作倒是挺多的</li>",
						"<li class='message-list' id='addMsg'><span class='nickname' style='color:#E81010'>你要走，这心里空荡荡的</span>:找操</li>",
						"<li class='message-list' id='addMsg'><span class='nickname' style='color:#E81010'>偷偷拥抱你的影子</span>:??主播舔过多大鸡巴</li>",
						"<li class='message-list' id='addMsg'><span class='nickname' style='color:#E81010'>沩梦想洏萿</span>:好想舔舔你的逼逼</li>",
						"<li class='message-list' id='addMsg'><span class='nickname' style='color:#FFA500'>深知爱人难?</span>:谁娶你没死啦</li>",
						"<li class='message-list' id='addMsg'><span class='nickname' style='color:#FFA500'>盗梦者。</span>:躺下给哥??干两下</li>",
						"<li class='message-list' id='addMsg'><span class='nickname' style='color:#FFA500'>强颜欢笑。</span>:要不要男逼我来和你合作</li>",
						"<li class='message-list' id='addMsg'><span class='nickname' style='color:#009900'>钱女友@</span>:一边动一边玩奶子</li>",
						"<li class='message-list' id='addMsg'><span class='nickname' style='color:#009900'>天台的位置</span>:蓄精待发</li>",
						"<li class='message-list' id='addMsg'><span class='nickname' style='color:#009900'>超负荷</span>:下面水多吗</li>",
						"<li class='message-list' id='addMsg'><span class='nickname' style='color:#FFA500'>心之所向便是光</span>:有没有被你玩死的</li>",
						"<li class='message-list' id='addMsg'><span class='nickname' style='color:#FFA500'>孤单的像条狗</span>:我想捕你</li>",
						"<li class='message-list' id='addMsg'><span class='nickname' style='color:#FFA500'>曲未终人已散</span>:脱光看看</li>",
						"<li class='message-list' id='addMsg'><span class='nickname' style='color:#FFA500'>一个可爱的小仙女</span>:男人被你玩废了</li>",
						"<li class='message-list' id='addMsg'><span class='nickname' style='color:#FFA500'>错觉</span>:回去找??你玩</li>",
						"<li class='message-list' id='addMsg'><span class='nickname' style='color:#009900'>素栀</span>:姿势好骚！欠插插</li>",
						"<li class='message-list' id='addMsg'><span class='nickname' style='color:#009900'>笑弄清风</span>:看看乳头</li>",
						"<li class='message-list' id='addMsg'><span class='nickname' style='color:#FFA500'>何必太在乎你</span>:我要舔</li>",
						"<li class='message-list' id='addMsg'><span class='nickname' style='color:#FFA500'>天涯我独行</span>:有经验的美</li>",
						"<li class='message-list' id='addMsg'><span class='nickname' style='color:#FFA500'>烈酒自由</span>:主播喜??欢哪种尺寸的鸡鸡</li>",
						"<li class='message-list' id='addMsg'><span class='nickname' style='color:#FFA500'>伤痕我心</span>:看看屁??股呗</li>",
						"<li class='message-list' id='addMsg'><span class='nickname' style='color:#E81010'>人海汹涌</span>:快射了，不要停</li>",
						"<li class='message-list' id='addMsg'><span class='nickname' style='color:#E81010'>单身狗的梦</span>:这样有经验??的美女日起来爽</li>",
						"<li class='message-list' id='addMsg'><span class='nickname' style='color:#E81010'>通知家属抬走</span>:插屁股??爽吗</li>",
						"<li class='message-list' id='addMsg'><span class='nickname' style='color:#E81010'>我的高傲，尔等岂懂</span>:叫起来好骚</li>",
						"<li class='message-list' id='addMsg'><span class='nickname' style='color:#E81010'>请叫我霸气超拽哥</span>:莫叫，我要多操会</li>",
						"<li class='message-list' id='addMsg'><span class='nickname' style='color:#FFA500'>斯文小流氓</span>:小骚货，真带劲</li>",
						"<li class='message-list' id='addMsg'><span class='nickname' style='color:#FFA500'>文艺小痞子</span>:我喜欢</li>",
						"<li class='message-list' id='addMsg'><span class='nickname' style='color:#FFA500'>西瓜你个萝卜头</span>:如此??骚</li>",
						"<li class='message-list' id='addMsg'><span class='nickname' style='color:#FFA500'>看着作业唱征服</span>:操翻你，信不</li>",
						"<li class='message-list' id='addMsg'><span class='nickname' style='color:#FFA500'>傲骨</span>:我仿佛错过了什么</li>",
						"<li class='message-list' id='addMsg'><span class='nickname' style='color:#FFA500'>烂、人</span>:看看逼逼</li>",
						"<li class='message-list' id='addMsg'><span class='nickname' style='color:#FFA500'>孤狼</span>:妹妹高潮的声??音动听吗</li>",
						"<li class='message-list' id='addMsg'><span class='nickname' style='color:#FFA500'>逆天</span>:主播能舔??到自己奶子吗</li>",
						"<li class='message-list' id='addMsg'><span class='nickname' style='color:#FEC400'>麻痹所有痛苦</span>:想舔一下</li>",
						"<li class='message-list' id='addMsg'><span class='nickname' style='color:#FFA500'>爱迩赴汤蹈火</span>:主播每天??能干好多次</li>",
						"<li class='message-list' id='addMsg'><span class='nickname' style='color:#FFA500'>心葬深海</span>:奶子看一下??</li>",
						"<li class='message-list' id='addMsg'><span class='nickname' style='color:#339900'>躺在键盘上的烟灰</span>:妹妹??阴道看看</li>",
						"<li class='message-list' id='addMsg'><span class='nickname' style='color:#FFA500'>囚禁自己</span>:主播就是??用来操的</li>",
						"<li class='message-list' id='addMsg'><span class='nickname' style='color:#FEC400'>现实很现实</span>:??白白嫩嫩</li>",
						"<li class='message-list' id='addMsg'><span class='nickname' style='color:#FEC400'>只适合被遗忘</span>:无组织无纪律</li>",
						"<li class='message-list' id='addMsg'><span class='nickname' style='color:#FEC400'>刺骨至深的窒息</span>:看看毛毛</li>",
						"<li class='message-list' id='addMsg'><span class='nickname' style='color:#FEC400'>失望让我堕落</span>:??看看屁股射了！！！</li>",
						"<li class='message-list' id='addMsg'><span class='nickname' style='color:#FEC400'>心已死、勿扰</span>:看看逼~~</li>",
						"<li class='message-list' id='addMsg'><span class='nickname' style='color:#FEC400'>好了伤疤忘了疼</span>:B是什么颜色的</li>",
        ];
        var b =testData.length;
        var a =parseInt(Math.random()*b);
        var testD = testData[a];
        $("#inputUl").append(testD);
        var height1=$("#inputUl").height();
        var height2=$("#message").height();
        var height = height2-height1-24;
//        console.log(height);
        if(height<=0){
            $("#inputUl").css("margin-top",height);
        }
    }
    setInterval(addMsg,500);