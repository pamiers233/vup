document.addEventListener("DOMContentLoaded", () => {
    const seal = document.getElementById('wax-seal');
    const container = document.getElementById('envelope-container');
    const titleNode = document.getElementById('subject-title');
    const questionsContainer = document.getElementById('questions-container');

    const params = new URLSearchParams(window.location.search);
    const subjectName = params.get('sub');

    // 你的题库数据 (保持不变)
    const examDatabase = {
        "语文": [
            { q: "下列词语中，字形全部正确的一组是：", a: "A. 虚怀若谷", b: "B. 默守成规", c: "C. 变幻莫测", d: "D. 穿流不息" },
            { q: "请解释“虚拟”二字在数字时代语境下的含义。", a: "（简答题）", b: "________________________________", c: "", d: "" },
			{ q: "下列词语中，字形全部正确的一组是：", a: "A. 虚怀若谷", b: "B. 默守成规", c: "C. 变幻莫测", d: "D. 穿流不息" },
			{ q: "下列词语中，字形全部正确的一组是：", a: "A. 虚怀若谷", b: "B. 默守成规", c: "C. 变幻莫测", d: "D. 穿流不息" },
			{ q: "下列词语中，字形全部正确的一组是：", a: "A. 虚怀若谷", b: "B. 默守成规", c: "C. 变幻莫测", d: "D. 穿流不息" },
			{ q: "下列词语中，字形全部正确的一组是：", a: "A. 虚怀若谷", b: "B. 默守成规", c: "C. 变幻莫测", d: "D. 穿流不息" },
			{ q: "下列词语中，字形全部正确的一组是：", a: "A. 虚怀若谷", b: "B. 默守成规", c: "C. 变幻莫测", d: "D. 穿流不息" },
			{ q: "下列词语中，字形全部正确的一组是：", a: "A. 虚怀若谷", b: "B. 默守成规", c: "C. 变幻莫测", d: "D. 穿流不息" },
			{ q: "下列词语中，字形全部正确的一组是：", a: "A. 虚怀若谷", b: "B. 默守成规", c: "C. 变幻莫测", d: "D. 穿流不息" }
        ],
        "物理": [
            { q: "当虚拟主播重力参数为 0 时，其运动状态遵循：", a: "A. 牛顿第一定律", b: "B. 胡克定律", c: "C. 万有引力定律", d: "D. 能量守恒定律" }
        ],
        "心理学": [
            { q: "观众对虚拟形象产生的“准社会交互”现象属于：", a: "A. 认知失调", b: "B. 社交退缩", c: "C. 心理补偿机制", d: "D. 斯金纳箱效应" }
        ],
        "数学": [
            { q: "已知皮套渲染帧率为 60fps，求 1 小时直播的总渲染帧数：", a: "A. 216,000", b: "B. 3,600", c: "C. 108,000", d: "D. 60,000" }
        ],
        "计算机": [
            { q: "驱动面部捕捉的核心通常是基于什么算法？", a: "A. 卷积神经网络 (CNN)", b: "B. 冒泡排序", c: "C. 迪杰斯特拉算法", d: "D. 深度优先搜索" }
        ],
        "历史": [
            { q: "简述虚拟主播行业从早期的绊爱（Kizuna AI）至今的发展历程。", a: "（论述题）", b: "________________________________", c: "", d: "" }
        ],
        "地理": [
            { q: "在全球化背景下，虚拟主播的跨区域文化传播受哪些因素影响？", a: "A. 时差与语言限制", b: "B. 地壳运动", c: "C. 洋流规律", d: "D. 降水分布" }
        ],
        "政治": [
            { q: "如何评价虚拟现实技术对现代社会治理的影响？", a: "（申论题）", b: "________________________________", c: "", d: "" }
        ],
        "化学": [
            { q: "若虚拟形象的材质渲染涉及金属反射，对应的着色器公式通常包含：", a: "A. 菲涅尔反射 (Fresnel)", b: "B. 氧化还原反应", c: "C. 酸碱中和", d: "D. 沉淀反应" }
        ],
        "生物": [
            { q: "关于“魂”与“皮”的生物学隐喻，下列说法正确的是：", a: "A. 数字化器官移植", b: "B. 生物电信号模拟", c: "C. 脑机接口设想", d: "D. 以上皆是" }
        ]
        // ... 其他题目自行添加 ...
    };

    // 渲染题目
    if (subjectName) {
        titleNode.innerText = `${subjectName} 考核试卷`;
        const questions = examDatabase[subjectName] || [];
        let htmlContent = "";
        questions.forEach((item, i) => {
            htmlContent += `
                <div class="question-item">
                    <p style="color:red; font-size:0.8rem; margin-bottom:5px;">题目 ${i+1}</p>
                    <p class="q-text">${item.q}</p>
                    <ul class="q-options">
                        ${item.a ? `<li>${item.a}</li>` : ''}
                        ${item.b ? `<li>${item.b}</li>` : ''}
                        ${item.c ? `<li>${item.c}</li>` : ''}
                        ${item.d ? `<li>${item.d}</li>` : ''}
                    </ul>
                </div>`;
        });
        questionsContainer.innerHTML = htmlContent || "<p>暂无题目</p>";
    }

    // 核心点击解锁逻辑
    seal.addEventListener('click', () => {
        container.classList.add('opened');
        
        setTimeout(() => {
            // 终极解锁：给 html 和 body 同时加上允许滚动的类
            document.documentElement.classList.add('is-scrollable');
            document.body.classList.add('is-scrollable');
            
            // 物理删除：动画结束后彻底消失，不留任何隐形挡板
            setTimeout(() => {
                container.style.display = 'none';
            }, 1200);

            window.scrollTo(0, 0);
        }, 1000); 
    });
});