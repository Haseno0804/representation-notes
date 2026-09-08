document.addEventListener('DOMContentLoaded', function () {

  // 只修改首页
  if (window.location.pathname !== '/') return;

  const contentInner = document.querySelector('#content-inner');
  const recentPosts = document.querySelector('#recent-posts');

  if (!contentInner || !recentPosts) return;

  // 防止重复插入
  if (document.querySelector('.home-portal')) return;


  /* ==============================
     三个主要入口
     ============================== */

  const portal = document.createElement('section');

  portal.className = 'home-portal';

  portal.innerHTML = `
    <div class="home-portal-heading">从这里开始</div>

    <div class="home-portal-lead">
      无论你是为了研究、阅读，还是正在准备日本大学院，
      都可以从下面找到适合自己的入口。
    </div>

    <div class="home-portal-grid">

      <a class="home-portal-card"
         href="/research/">

        <div class="home-portal-number">01 · RESEARCH</div>

        <h2>研究与批评</h2>

        <p>
          从宅文化批评出发，进入动画、漫画、游戏、
          表象文化与相关理论研究。
        </p>

        <div class="home-portal-link">
          开始阅读 →
        </div>

      </a>


      <a class="home-portal-card"
         href="/library/">

        <div class="home-portal-number">02 · LIBRARY</div>

        <h2>兴趣与阅读</h2>

        <p>
          浏览书籍、人物与研究资料，
          从感兴趣的作品或理论继续向下阅读。
        </p>

        <div class="home-portal-link">
          浏览资料 →
        </div>

      </a>


      <a class="home-portal-card"
         href="/graduate/">

        <div class="home-portal-number">03 · GRADUATE</div>

        <h2>大学院考学</h2>

        <p>
          面向日本表象文化相关方向 DIY 考生的
          流程、择校、教授与研究计划书资料。
        </p>

        <div class="home-portal-link">
          考学入门 →
        </div>

      </a>

    </div>
  `;


  /*
   * 关键修改：
   * 不再把入口塞进 #content-inner，
   * 而是放在整个文章+侧栏区域的前面。
   */
  contentInner.parentNode.insertBefore(portal, contentInner);


  /* ==============================
     最近更新标题
     ============================== */

  const latestTitle = document.createElement('div');

  latestTitle.className = 'home-latest-title';
  latestTitle.textContent = '最近更新';

  // 放进文章栏里面，而不是 content-inner 外面
  recentPosts.insertBefore(latestTitle, recentPosts.firstChild);

});