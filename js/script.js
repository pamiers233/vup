document.addEventListener("DOMContentLoaded", () => {
    const introScreen = document.getElementById('intro-screen');
    const mainContent = document.getElementById('main-content');

    // 1. 开场动画时序控制 (6秒)
    setTimeout(() => {
        introScreen.style.opacity = '0';
        setTimeout(() => {
            introScreen.style.display = 'none';
            document.body.style.overflowY = 'auto'; // 允许滚动
            mainContent.style.opacity = '1';
            
            // 初始化观察器
            initObservers();
        }, 1500);
    }, 6000);

    // 2. 滚动观察器
    function initObservers() {
        const fadeElements = document.querySelectorAll('.fade-up');
        const examCards = document.querySelectorAll('.exam-card');

        const options = { threshold: 0.2 };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible');
                    
                    // 针对手机端：如果滚动到科目卡片，自动播放画线动画
                    if (window.innerWidth <= 768 && entry.target.classList.contains('exam-card')) {
                        const icon = entry.target.querySelector('.icon-svg');
                        if (icon) {
                            icon.style.stroke = "var(--accent-color)";
                            icon.style.strokeDashoffset = "0";
                        }
                    }
                    observer.unobserve(entry.target);
                }
            });
        }, options);

        fadeElements.forEach(el => observer.observe(el));
        examCards.forEach(el => observer.observe(el));
    }
	
	// 在你的 DOMContentLoaded 事件监听器内添加以下内容
	let idleTime = 0;
	let snakeActive = false;

	// 1. 监听活跃状态
	const resetIdle = () => {
		idleTime = 0;
		if (snakeActive) location.reload(); // 如果蛇已经出来了，动一下就刷新恢复
	};

	document.addEventListener('mousemove', resetIdle);
	document.addEventListener('scroll', resetIdle);
	document.addEventListener('touchstart', resetIdle);
	document.addEventListener('keypress', resetIdle);

	// 每秒增加一次静止时间
	setInterval(() => {
		idleTime++;
		if (idleTime >= 30 && !snakeActive) {
			startInkSnake();
		}
	}, 1000);

	function startInkSnake() {
		snakeActive = true;
		
		// 创建蛇
		const snake = document.createElement('div');
		snake.id = 'ink-snake';
		document.body.appendChild(snake);
		snake.style.display = 'block';

		// 找到所有可以被“吃掉”的元素
		const targets = Array.from(document.querySelectorAll('.fade-up, .exam-card, .site-title, .journal-header, .abstract, .journal-footer'));
		
		// 随机打乱进食顺序
		targets.sort(() => Math.random() - 0.5);

		let currentTargetIndex = 0;

		async function moveToNextTarget() {
			if (currentTargetIndex >= targets.length) {
				// 吃完了，显示空白提示
				const msg = document.createElement('div');
				msg.id = 'archive-cleared';
				msg.innerText = "— 档案已被吞噬 —\n( 移动或点击以重建知识 )";
				document.body.appendChild(msg);
				setTimeout(() => msg.style.opacity = 1, 500);
				return;
			}

			const target = targets[currentTargetIndex];
			const rect = target.getBoundingClientRect();
			
			// 蛇移动到元素中心
			const targetX = rect.left + window.scrollX + rect.width / 2;
			const targetY = rect.top + window.scrollY + rect.height / 2;

			snake.style.left = `${targetX}px`;
			snake.style.top = `${targetY}px`;
			snake.style.transition = `all ${Math.random() * 0.5 + 0.3}s ease-in-out`;

			// 等蛇到了，就把元素“吃掉”
			setTimeout(() => {
				target.classList.add('eaten');
				currentTargetIndex++;
				moveToNextTarget();
			}, 600);
		}

		moveToNextTarget();
	}
	});

// 给所有的科目卡片添加跳转逻辑
// 给所有的科目卡片添加跳转逻辑
document.querySelectorAll('.exam-card').forEach(card => {
    card.addEventListener('click', () => {
        const subName = card.querySelector('span').innerText;
        // 直接写文件名，不要再加 html/ 了
        window.location.href = `subject.html?sub=${encodeURIComponent(subName)}`;
    });
});