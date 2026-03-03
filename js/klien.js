document.addEventListener("DOMContentLoaded", () => {
    
    const sleep = (ms) => new Promise(resolve => setTimeout(resolve, ms));

    async function runRomanticIntro() {
        const introContainer = document.getElementById('linear-intro');
        const astrolabe = document.getElementById('master-astrolabe');
        const drawLines = document.querySelectorAll('.draw-line');
        const rosettaLayers = document.querySelectorAll('.linear-layer');
        const cipherFocus = document.getElementById('cipher-focus');
        const mainContent = document.getElementById('tribute-content');

        // ==========================================
        // 0.0s - 4.0s: 星盘与语法树的唯美流光线稿生成
        // ==========================================
        await sleep(300);
        // 激活 CSS 的 stroke-dashoffset，开始长达 8 秒的华丽画线
        drawLines.forEach(line => line.classList.add('drawing'));
        astrolabe.classList.add('spin-slow');

        // ==========================================
        // 4.0s - 7.0s: 罗塞塔文明碑文的温柔浮现
        // ==========================================
        await sleep(4000);
        // 线稿已经画出大半，古老的文字开始作为点缀出现
        for (let i = 0; i < rosettaLayers.length; i++) {
            rosettaLayers[i].classList.add('show');
            await sleep(1000); // 每层文字间隔1秒出现
        }

        // ==========================================
        // 7.0s - 10.0s: 解密向导之名（专属克莱因蓝）
        // ==========================================
        await sleep(1500);
        cipherFocus.style.opacity = '1';
        
        // 执行乱码破译特效，最终解出她的名字
        startCipherEffect(cipherFocus, "学语言的克莱因", 2500);

        await sleep(3500);

        // ==========================================
        // 10.5s - 12.5s: 完美的消散与信件揭幕
        // ==========================================
        // 星盘与文字如同魔法般放大、变淡，融化在白色的背景中
        astrolabe.style.transform = 'scale(1.8) rotate(20deg)';
        astrolabe.style.opacity = '0';
        
        document.getElementById('rosetta-linear-text').style.transform = 'scale(1.2)';
        document.getElementById('rosetta-linear-text').style.opacity = '0';

        cipherFocus.style.transform = 'scale(1.5)';
        cipherFocus.style.opacity = '0';

        await sleep(1800);

        // 移除动画容器，解放滚动
        introContainer.style.display = 'none';
        document.body.classList.add('is-scrollable');
        
        // 显示谢鸣正文
        mainContent.style.display = 'block';
        
        // 触发正文的一连串优雅上浮入场
        triggerLetterReveal();
    }

    // ---------------------------------------------------------
    // 密码破译机：为了契合氛围，加入音标和希腊字母乱码
    // ---------------------------------------------------------
    function startCipherEffect(element, targetText, duration) {
        // 乱码库包含了音标、卢恩字母、符号
        const glyphs = "Λόγοςæŋθðʃʒᚠᚢᚦᚨᚱ⍙⎈⍣⍨∑∆Ω"; 
        const intervalTime = 50; 
        const totalFrames = duration / intervalTime;
        let frame = 0;

        const interval = setInterval(() => {
            let currentText = "";
            for (let i = 0; i < targetText.length; i++) {
                const lockFrame = (i / targetText.length) * totalFrames;
                if (frame >= lockFrame) {
                    currentText += targetText[i];
                } else {
                    currentText += glyphs[Math.floor(Math.random() * glyphs.length)];
                }
            }
            element.innerText = currentText;
            frame++;

            if (frame >= totalFrames) {
                clearInterval(interval);
                element.innerText = targetText; 
            }
        }, intervalTime);
    }

    // ---------------------------------------------------------
    // 触发信件正文的逐段显示
    // ---------------------------------------------------------
    function triggerLetterReveal() {
        // 为了让信件出现得更顺滑，直接给所有段落加上 visible 类
        // CSS 里的 transition-delay 会自动处理层级延时
        setTimeout(() => {
            const elements = document.querySelectorAll('.fade-in-up');
            elements.forEach(el => el.classList.add('visible'));
        }, 100); // 略微延迟让 DOM 渲染完成
    }

    // ==========================================
    // 启动浪漫的献词流
    // ==========================================
    runRomanticIntro();
});