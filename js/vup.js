document.addEventListener("DOMContentLoaded", () => {
    // 【档案数据库】以后要加人，直接按格式复制一行即可
    const vupData = [
        {
            name: "君士坦丁-欧乌米Oumi",
            avatar: "../img/js.jpg", // 建议放张头像在 assets 文件夹
            tags: ["心理学", "神学", "历史"],
            desc: "心理学学生，研究者，爱好者，大众心理学研究者",
            links: [
                { label: "Bilibili 主页", url: "https://space.bilibili.com/579861015?spm_id_from=333.337.0.0" },
            ]
        },
        {
            name: "某位新VUP",
            avatar: "https://via.placeholder.com/150", // 占位图
            tags: ["计算语言学", "NLP"],
            desc: "研究方向为大型语言模型与虚拟情感交互的边界。",
            links: [
                { label: "Bilibili", url: "#" }
            ]
        },
        // 下面可以继续加...
    ];

    const listContainer = document.getElementById('vup-list');

    // 动态生成函数
    function renderVUPs() {
        listContainer.innerHTML = vupData.map(vup => `
            <article class="vup-card fade-up visible">
                <div class="vup-sidebar">
                    <div class="vup-avatar-frame">
                        <img src="${vup.avatar}" alt="${vup.name}">
                    </div>
                    <div class="vup-status">FELLOW</div>
                </div>
                <div class="vup-info">
                    <div class="vup-meta">Field: ${vup.tags.join(" / ")}</div>
                    <h2 class="vup-name">${vup.name}</h2>
                    <p class="vup-abstract">${vup.desc}</p>
                    <div class="vup-actions">
                        ${vup.links.map(link => `<a href="${link.url}" target="_blank">${link.label}</a>`).join("")}
                    </div>
                </div>
            </article>
        `).join('');
    }

    renderVUPs();

});
