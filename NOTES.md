# Working Notes

## User preferences (from initial interview, 2026-07-17)
- Mission: personal depth, not teaching prep or apologetics mastery
- New to serious study: teach method foundations, define terms, no assumed vocabulary. Glossary adherence matters.
- 20-30 min daily. Keep lessons small: one passage unit, one win.
- ESV quotations throughout. Owned: MacArthur Study Bible + Olive Tree.
- Theological frame: Reformed. Postmil (Durbin) is the home lens for kingdom passages; flag MacArthur (premil) and White (amil) alternatives honestly at Isa 2, 11, 24-27, 60, 65-66.
- Workflow: user reads passage in ESV FIRST, jots observations, then opens lesson. Lessons should open by asking what they observed, then check.
- Retention: memory verses (~15, one per section, listed in reference/memory-verses.html) + spaced recall quiz at the top of each lesson.
- Community prompts: yes, tied to church life.
- User asked for "complete entire lessons": build each lesson fully (no stubs). Course generated in batches as the learner progresses (zone of proximal development requires seeing learning records first); curriculum map in reference/isaiah-book-map.html covers all 66 chapters up front.
- No em dashes in any written content (user global rule).

## Course conventions
- Lesson files: lessons/NNNN-slug.html, numbered sequentially.
- Every lesson links assets/course.css and assets/quiz.js, opens with a recall quiz, ends with: application, memory verse work (when active), primary source recommendation, "ask your teacher" reminder, and links to reference docs.
- Quiz answer options: keep all options the same word count so formatting gives no clue.
- Reference docs are the durable artifacts; lessons point into them.
- reference/macarthur-notes.html = user's personal copy of their owned MacArthur Study Bible Isaiah notes (pasted by user 2026-07-17), per-chapter anchors ch01-ch66. PRIVATE USE ONLY: never publish as an Artifact or share; it is copyrighted material the user owns. Lessons may deep-link (#chNN) and should engage its premil readings critically per the course's postmil home lens (caveat card is in the file header). Quoted text kept verbatim, including its own punctuation.
- Shared left sidebar: assets/nav.js (manifest-driven) + styles in course.css. EVERY page includes `<script src="../assets/nav.js" defer></script>` after the course.css link. When adding a lesson: add one entry to the LESSONS array in nav.js, nothing else. Mark-complete progress persists in localStorage key `isaiah-study-progress` (per browser).

## Pacing ledger
- Lessons 0001-0035 built: orientation (0001-0002), Isaiah 1:1 through 10:34 (0003-0019), Isaiah 11-16 (0020-0026), Isaiah 17-26 (0027-0035). Unit 2 (ch. 7-12) complete at 0022; Unit 3 (ch. 13-23) complete at 0032 (Tyre, with unit recap); Unit 4 (ch. 24-27) open through ch. 26 (lesson 0035).
- Memory verses 1-7 activated (1:18, 6:3, 7:9b, 9:6, 11:9, 25:8, 26:3). Verse 6 card in 0034, verse 7 card in 0035. Next verse: 8 (30:15), activates in Unit 5 (ch. 28-35).
- Eschatology fork #1 at 2:1-5 (lesson 0005); fork #2 at 11:1-10 (lesson 0020); fork #3 at ch. 24 (lesson 0033, how to read apocalyptic, premil/amil/postmil argued from text, held open through ch. 25-27). Next fork checkpoints: ch. 60, 65-66.
- Lucifer question (14:12) handled in 0024: primary referent human king, satanic pride pattern acknowledged, MacArthur engaged.
- Key texts covered in 0027-0035: 19:24-25 (Egypt my people, postmil flagship), 21:9 (Fallen, fallen is Babylon, Rev echo), 22:22 (key of David, Eliakim typology), 23:9 (section thesis), 24:5 (broken everlasting covenant), 25:8 (death swallowed), 26:19 (resurrection).
- Next lesson: 0036, Isaiah 27 (vineyard song returns, Leviathan; 0035 assigns the reading, next-nav is an ask-your-teacher span).
- Estimated full course: ~140 lessons over ~9-12 months at daily cadence.
