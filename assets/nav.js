/* Shared left sidebar: course navigation + mark-completed progress.
 * Include on every page (lessons and reference), after course.css:
 *   <script src="../assets/nav.js" defer></script>
 * When a new lesson is added, add one entry to LESSONS below; nothing else.
 * Progress lives in localStorage under 'isaiah-study-progress'.
 */
(function () {
  var LESSONS = [
    { f: '0001-how-to-study-scripture.html',          t: 'How to Study Scripture' },
    { f: '0002-isaiah-big-picture.html',              t: 'The Big Picture of Isaiah' },
    { f: '0003-isaiah-1-1-20-the-lawsuit.html',       t: '1:1-20 · The Lawsuit' },
    { f: '0004-isaiah-1-21-31-the-faithful-city.html',t: '1:21-31 · The Faithful City' },
    { f: '0005-isaiah-2-1-5-the-mountain-of-the-lord.html', t: '2:1-5 · Mountain of the LORD' },
    { f: '0006-isaiah-2-6-22-the-day-against-pride.html',   t: '2:6-22 · Day Against Pride' },
    { f: '0007-isaiah-3-1-4-1-judgment-on-leaders.html',    t: '3:1-4:1 · Judgment on Leaders' },
    { f: '0008-isaiah-4-2-6-the-branch-of-the-lord.html',   t: '4:2-6 · The Branch' },
    { f: '0009-isaiah-5-1-7-the-vineyard-song.html',        t: '5:1-7 · The Vineyard Song' },
    { f: '0010-isaiah-5-8-30-six-woes.html',                t: '5:8-30 · Six Woes' },
    { f: '0011-isaiah-6-1-7-holy-holy-holy.html',           t: '6:1-7 · Holy, Holy, Holy' },
    { f: '0012-isaiah-6-8-13-the-commission.html',          t: '6:8-13 · The Commission' },
    { f: '0013-isaiah-7-1-9-stand-firm-in-faith.html',      t: '7:1-9 · Firm in Faith' },
    { f: '0014-isaiah-7-10-25-the-immanuel-sign.html',      t: '7:10-25 · The Immanuel Sign' },
    { f: '0015-isaiah-8-1-22-the-stone-of-stumbling.html',  t: '8:1-22 · Stone of Stumbling' },
    { f: '0016-isaiah-9-1-7-unto-us-a-child.html',          t: '9:1-7 · Unto Us a Child' },
    { f: '0017-isaiah-9-8-10-4-the-outstretched-hand.html', t: '9:8-10:4 · Outstretched Hand' },
    { f: '0018-isaiah-10-5-19-assyria-the-axe.html',        t: '10:5-19 · Assyria the Axe' },
    { f: '0019-isaiah-10-20-34-a-remnant-will-return.html', t: '10:20-34 · A Remnant Returns' },
    { f: '0020-isaiah-11-1-10-the-shoot-from-the-stump.html', t: '11:1-10 · Shoot from the Stump' },
    { f: '0021-isaiah-11-11-16-the-second-exodus.html',      t: '11:11-16 · The Second Exodus' },
    { f: '0022-isaiah-12-1-6-the-wells-of-salvation.html',   t: '12:1-6 · Wells of Salvation' },
    { f: '0023-isaiah-13-1-22-the-oracle-against-babylon.html', t: '13:1-22 · Oracle: Babylon' },
    { f: '0024-isaiah-14-1-23-the-fall-of-the-tyrant.html',  t: '14:1-23 · Fall of the Tyrant' },
    { f: '0025-isaiah-14-24-32-assyria-broken-philistia-warned.html', t: '14:24-32 · Assyria and Philistia' },
    { f: '0026-isaiah-15-1-16-14-the-oracle-against-moab.html', t: '15-16 · Oracle: Moab' },
    { f: '0027-isaiah-17-18-damascus-and-cush.html',         t: '17-18 · Damascus and Cush' },
    { f: '0028-isaiah-19-1-15-egypt-undone.html',            t: '19:1-15 · Egypt Undone' },
    { f: '0029-isaiah-19-16-20-6-egypt-my-people.html',      t: '19:16-20:6 · Egypt My People' },
    { f: '0030-isaiah-21-fallen-fallen-is-babylon.html',     t: '21 · Fallen Is Babylon' },
    { f: '0031-isaiah-22-the-valley-of-vision.html',         t: '22 · The Valley of Vision' },
    { f: '0032-isaiah-23-the-oracle-against-tyre.html',      t: '23 · Oracle: Tyre' },
    { f: '0033-isaiah-24-the-earth-laid-waste.html',         t: '24 · Earth Laid Waste' },
    { f: '0034-isaiah-25-the-feast-on-the-mountain.html',    t: '25 · Feast on the Mountain' },
    { f: '0035-isaiah-26-perfect-peace.html',                t: '26 · Perfect Peace' }
  ];
  var REFS = [
    { f: 'inductive-method.html', t: 'Inductive Method' },
    { f: 'isaiah-book-map.html',  t: 'Isaiah Book Map' },
    { f: 'glossary.html',         t: 'Glossary' },
    { f: 'memory-verses.html',    t: 'Memory Verses' },
    { f: 'macarthur-notes.html',  t: 'MacArthur Notes (Isaiah)' }
  ];

  var KEY = 'isaiah-study-progress';
  var here = location.pathname.split('/').pop();
  var inLessons = location.pathname.indexOf('/lessons/') !== -1;
  var lessonPrefix = inLessons ? '' : '../lessons/';
  var refPrefix = inLessons ? '../reference/' : '';

  function load() {
    try { return JSON.parse(localStorage.getItem(KEY)) || {}; } catch (e) { return {}; }
  }
  function save(p) {
    try { localStorage.setItem(KEY, JSON.stringify(p)); } catch (e) { /* private mode etc. */ }
  }
  var progress = load();

  function doneCount() {
    return LESSONS.filter(function (l) { return progress[l.f]; }).length;
  }

  function toggle(file) {
    if (progress[file]) delete progress[file]; else progress[file] = true;
    save(progress);
    refresh();
  }

  var aside, pageBtn;

  function refresh() {
    var n = doneCount();
    aside.querySelector('.nav-count').textContent = n + ' / ' + LESSONS.length + ' complete';
    aside.querySelector('.nav-bar-fill').style.width = (n / LESSONS.length * 100) + '%';
    LESSONS.forEach(function (l) {
      var li = aside.querySelector('[data-file="' + l.f + '"]');
      li.classList.toggle('done', !!progress[l.f]);
      li.querySelector('.done-toggle').setAttribute('aria-label',
        (progress[l.f] ? 'Mark lesson not completed: ' : 'Mark lesson completed: ') + l.t);
    });
    if (pageBtn) {
      pageBtn.textContent = progress[here] ? 'Completed ✓ (click to undo)' : 'Mark this lesson complete';
      pageBtn.classList.toggle('is-done', !!progress[here]);
    }
  }

  function buildItem(l) {
    var li = document.createElement('li');
    li.setAttribute('data-file', l.f);
    if (l.f === here) li.classList.add('current');

    var btn = document.createElement('button');
    btn.className = 'done-toggle';
    btn.type = 'button';
    btn.addEventListener('click', function () { toggle(l.f); });
    li.appendChild(btn);

    var a = document.createElement('a');
    a.href = lessonPrefix + l.f;
    a.textContent = l.t;
    li.appendChild(a);
    return li;
  }

  function build() {
    aside = document.createElement('aside');
    aside.className = 'sidenav';
    aside.innerHTML =
      '<div class="nav-head">' +
      '  <div class="nav-title">Isaiah Study</div>' +
      '  <div class="nav-count"></div>' +
      '  <div class="nav-bar"><div class="nav-bar-fill"></div></div>' +
      '</div>' +
      '<div class="nav-section">Lessons</div>' +
      '<ul class="nav-lessons"></ul>' +
      '<div class="nav-section">Reference</div>' +
      '<ul class="nav-refs"></ul>';

    var ul = aside.querySelector('.nav-lessons');
    LESSONS.forEach(function (l) { ul.appendChild(buildItem(l)); });

    var rul = aside.querySelector('.nav-refs');
    REFS.forEach(function (r) {
      var li = document.createElement('li');
      li.className = 'ref';
      if (r.f === here) li.classList.add('current');
      var a = document.createElement('a');
      a.href = refPrefix + r.f;
      a.textContent = r.t;
      li.appendChild(a);
      rul.appendChild(li);
    });

    document.body.insertBefore(aside, document.body.firstChild);
    document.body.classList.add('has-sidenav');

    var burger = document.createElement('button');
    burger.className = 'nav-burger';
    burger.type = 'button';
    burger.setAttribute('aria-label', 'Toggle course navigation');
    burger.textContent = '☰';
    burger.addEventListener('click', function () { aside.classList.toggle('open'); });
    document.body.appendChild(burger);

    // On lesson pages, add a completion button at the end of the content.
    var isLessonPage = LESSONS.some(function (l) { return l.f === here; });
    var main = document.querySelector('main');
    if (isLessonPage && main) {
      pageBtn = document.createElement('button');
      pageBtn.className = 'mark-complete';
      pageBtn.type = 'button';
      pageBtn.addEventListener('click', function () { toggle(here); });
      var nav = main.querySelector('.lesson-nav');
      main.insertBefore(pageBtn, nav || null);
    }

    var cur = aside.querySelector('.current');
    if (cur && cur.scrollIntoView) cur.scrollIntoView({ block: 'center' });
    refresh();
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', build);
  } else {
    build();
  }
})();
