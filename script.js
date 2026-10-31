// 料理データ。写真は assets/images/、動画は assets/videos/、音声は assets/audio/ に配置してください。
const recipes = [
  {id:'nikujaga',name:'肉じゃが',subtitle:'お母さんの、いつもの味',emoji:'🥔',image:'assets/images/nikujaga.png',from:'お母さんより',message:'疲れた日には、これを作って食べてね。いつでも応援しているよ。',ingredients:['じゃがいも 3個','にんじん 1本','玉ねぎ 1個','牛こま切れ肉 200g','しょうゆ 大さじ3','みりん 大さじ2','砂糖 大さじ2','水 250ml'],steps:['野菜を食べやすい大きさに切る。','鍋で豚肉と玉ねぎを炒める。','醤油大さじ2、みりん大さじ2を入れる。','残りの野菜を入れる。','水400mlを加え、ふたをして13分程煮る。','じゃがいもが柔らかくなったら完成。'],video:'https://www.youtube-nocookie.com/embed/d1fP2mZQBF4',audio:''},
  {id:'tamagoyaki',name:'卵焼き',subtitle:'朝ごはんの思い出',emoji:'🍳',image:'assets/images/dashimaki.png',from:'お父さんより',message:'少し甘めに作るのが、うちの卵焼き。',ingredients:['卵 3個','砂糖 小さじ2','しょうゆ 少々','油 適量'],steps:['卵と調味料をよく混ぜる。','卵焼き器に油を薄くひく。','卵液を少しずつ流し、巻きながら焼く。'],video:'',audio:''},
  {id:'miso-soup',name:'お味噌汁',subtitle:'ほっとする、家の味',emoji:'🍲',image:'assets/images/misoshiru.png',from:'おばあちゃんより',message:'具は季節の野菜で変えてみてね。',ingredients:['だし汁 400ml','味噌 大さじ2','豆腐 1/2丁','わかめ 適量'],steps:['だし汁を温め、具材を煮る。','火を弱めて味噌を溶く。','沸騰させずに温めて完成。'],video:'',audio:''}
];
const app = document.querySelector('#app');
const escapeHTML = value => String(value).replace(/[&<>"']/g, char => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[char]));

function imageHTML(recipe, className) {
  return `<div class="${className}">${recipe.image
    ? `<img src="${escapeHTML(recipe.image)}" alt="${escapeHTML(recipe.name)}" ${className === 'card-image' ? 'loading="lazy"' : ''}>`
    : `<span class="food-symbol" aria-hidden="true">${recipe.emoji}</span><span class="image-note">写真を準備中</span>`}</div>`;
}

function renderCollection() {
  document.title = '料理のコレクション | 味のおまもり';
  app.innerHTML = `
    <section class="collection-intro" aria-labelledby="collection-title">
      <p class="eyebrow">ひと皿の記憶を、未来へ</p>
      <h1 id="collection-title" class="page-title">味のおまもり</h1>
      <p class="lead">いつもの味が、<br>これからのおまもりになる。</p>
      <p class="intro">一つの家庭料理を、一枚に。<br>大切な人の言葉と作り方を、ここに残しました。</p>
    </section>
    <section aria-labelledby="recipes-title">
      <div class="section-heading"><h2 id="recipes-title">料理のコレクション</h2><span>${recipes.length}品の記録</span></div>
      <p class="section-description">気になる料理を選んで、思い出をひらいてみてください。</p>
      <div class="collection">${recipes.map((recipe, index) => `
        <a class="recipe-card" href="?id=${encodeURIComponent(recipe.id)}">
          ${imageHTML(recipe, 'card-image')}
          <div class="card-body"><span class="card-number">ひと皿 ${String(index + 1).padStart(2, '0')}</span>
            <h3>${escapeHTML(recipe.name)}</h3><p>${escapeHTML(recipe.subtitle)}</p>
            <span class="card-link">この料理を見る <span aria-hidden="true">→</span></span>
          </div>
        </a>`).join('')}</div>
    </section>`;
}

function renderDetail(recipe) {
  document.title = `${recipe.name} | 味のおまもり`;
  app.innerHTML = `
    <a class="back" href="./index.html">← コレクションへ戻る</a>
    <article>
      <header class="recipe-heading"><p class="eyebrow">家族から受け継ぐ、ひと皿</p><h1 class="page-title">${escapeHTML(recipe.name)}</h1></header>
      <div class="detail-layout">
        ${imageHTML(recipe, 'hero-image')}
        <section class="message" aria-labelledby="message-title"><h2 id="message-title">メッセージ</h2><blockquote><p>「${escapeHTML(recipe.message)}」</p><footer>${escapeHTML(recipe.from)}</footer></blockquote></section>
      </div>
      <nav class="recipe-nav" aria-label="料理の掲載項目"><a href="#ingredients">材料</a><a href="#steps">作り方</a>${recipe.video ? '<a href="#video">動画</a>' : ''}${recipe.audio ? '<a href="#audio">声のおたより</a>' : ''}</nav>
      <div class="recipe-content">
        <section id="ingredients" class="section" aria-labelledby="ingredients-title"><div class="section-heading"><h2 id="ingredients-title">材料・分量</h2>${recipe.servings ? `<span>${escapeHTML(recipe.servings)}</span>` : ''}</div><ul class="ingredients">${recipe.ingredients.map(item => `<li>${escapeHTML(item)}</li>`).join('')}</ul></section>
        <section id="steps" class="section" aria-labelledby="steps-title"><h2 id="steps-title">作り方</h2><ol class="steps">${recipe.steps.map(step => `<li>${escapeHTML(step)}</li>`).join('')}</ol></section>
      </div>
      ${recipe.video ? `<section id="video" class="section" aria-labelledby="video-title"><h2 id="video-title">作り方の動画</h2><div class="video-frame"><iframe class="video" src="${escapeHTML(recipe.video)}" title="${escapeHTML(recipe.name)}の作り方" loading="lazy" referrerpolicy="strict-origin-when-cross-origin" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe></div></section>` : ''}
      ${recipe.audio ? `<section id="audio" class="section" aria-labelledby="audio-title"><h2 id="audio-title">声のおたより</h2><audio controls preload="metadata" src="${escapeHTML(recipe.audio)}" aria-label="${escapeHTML(recipe.name)}に添えた音声メッセージ">音声を再生できません。<a href="${escapeHTML(recipe.audio)}">音声を開く</a></audio></section>` : ''}
      <div class="collection-return"><p>ほかのひと皿にも、家族の記憶が詰まっています。</p><a class="button" href="./index.html">コレクションを見る <span aria-hidden="true">→</span></a></div>
    </article>`;
}

const id = new URLSearchParams(location.search).get('id');
const recipe = recipes.find(item => item.id === id || (id === 'misoshiru' && item.id === 'miso-soup'));
if (id === null) {
  renderCollection();
} else if (recipe) {
  renderDetail(recipe);
} else {
  document.title = '料理が見つかりません | 味のおまもり';
  app.innerHTML = `<section class="empty"><p class="eyebrow">味のおまもり</p><h1 class="page-title">この料理は<br>見つかりませんでした</h1><p>リンクが変更されたか、まだ登録されていない料理です。<br>コレクションから、料理を選んでみてください。</p><a class="button" href="./index.html">コレクションを見る →</a></section>`;
}
