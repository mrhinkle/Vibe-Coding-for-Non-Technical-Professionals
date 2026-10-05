// Vibe Coding, Take Two: the six-hour class. Five hours of class, one hour of live hacking in three sprints.
// Expanded from the three-hour "Get Unstuck" workshop (echo, Durham, Sept 11 2026) and the Sept 15 Lunch and Learn.
// Brand: All Things AI light, with The AIE Network. Rebuild: node build.js  (from this folder)
const pptxgen = require('pptxgenjs');
const pres = new pptxgen();
pres.layout = 'LAYOUT_WIDE'; // 13.33 x 7.5
pres.author = 'Mark Hinkle'; pres.title = 'Vibe Coding, Take Two: The Six-Hour Class';

// All Things AI brand tokens (references/brand-ata.md). Names kept from the AIE build so slide code reads the same.
const BG='FFFFFF', CARD='F3F6FB', CARD2='E8EEF7', NAVY='121B2B', LINE='D9E0EA', ORANGE='EF8B39', BLUE='307FE2', WHITE='FFFFFF', INK='0D1219', MUTED='5B6675', DIM='7B8594', GREEN='22C55E', RED='EF4444';
const SANS='Arial', MONO='Courier New';
const W=13.33, H=7.5, M=0.7;
const ASSETS = 'assets/';
let n = 0; const TOTAL = '__TOTAL__';

function slide(opts={}){
  const s = pres.addSlide();
  n++;
  s._dark = !!opts.dark;
  if (opts.dark) s.background = { path: ASSETS+'space.jpg' }; else s.background = { color: BG };
  if (!opts.noFooter){
    s.addImage({ path: ASSETS+(opts.dark?'logo-h-white.png':'logo-h.png'), x:M, y:H-0.55, w:1.56, h:0.2 });
    s.addText(String(n).padStart(2,'0')+' / '+TOTAL, { x:W-M-1.4, y:H-0.6, w:1.4, h:0.34, fontFace:MONO, fontSize:9, color:DIM, align:'right', margin:0 });
  }
  if (opts.notes) s.addNotes(opts.notes);
  return s;
}
const ink = (s, c) => c || (s._dark ? WHITE : INK);
function eyebrow(s, t, o={}){
  s.addText('// '+t.toUpperCase(), { x:o.x??M, y:o.y??0.55, w:o.w??(W-2*M), h:0.3, fontFace:MONO, fontSize:o.size||12, bold:true, color:o.color||(s._dark?ORANGE:BLUE), charSpacing:2, margin:0, isTextBox:true });
}
function sectionHeader(s, t){ eyebrow(s, t); }
function title(s, t, o={}){
  const auto = t.length>72?23 : t.length>60?25 : t.length>48?27 : 30;
  s.addText(t, { x:o.x??M, y:o.y??0.9, w:o.w??(W-2*M), h:o.h??0.9, fontFace:SANS, fontSize:o.size||auto, bold:true, color:ink(s,o.color), margin:0, isTextBox:true, valign:'top' });
}
function sub(s, t, o={}){
  s.addText(t, { x:o.x??M, y:o.y??1.75, w:o.w??(W-2*M), h:o.h??0.5, fontFace:SANS, fontSize:o.size||14, color:o.color||MUTED, margin:0, isTextBox:true, valign:'top', italic:!!o.italic });
}
function body(s, lines, o={}){
  const arr = Array.isArray(lines) ? lines : [lines];
  s.addText(arr.map((t,i)=>({ text:t, options:{ bullet: o.bullets ? { indent:14 } : false, breakLine: i<arr.length-1, paraSpaceAfter: o.gap??6 } })),
    { x:o.x??M, y:o.y??2.3, w:o.w??(W-2*M), h:o.h??3.5, fontFace:SANS, fontSize:o.size||14, color:o.color||(s._dark?'D6DEEA':MUTED), margin:0, isTextBox:true, valign:o.valign||'top', lineSpacingMultiple:1.15 });
}
function card(s, x, y, w, h, o={}){
  s.addShape(pres.ShapeType.rect, { x, y, w, h, fill:{ color:o.fill||CARD }, line:{ color:o.line||LINE, width:o.lw??0.75 } });
  if (o.accent) s.addShape(pres.ShapeType.rect, { x, y, w:0.06, h, fill:{ color:o.accent }, line:{ color:o.accent, width:0 } });
}
function label(s, t, x, y, w, o={}){
  s.addText(t.toUpperCase(), { x, y, w, h:0.26, fontFace:MONO, fontSize:o.size||8.5, bold:true, color:o.color||ORANGE, charSpacing:1.5, margin:0, isTextBox:true });
}
function head(s, t, x, y, w, o={}){
  s.addText(t, { x, y, w, h:o.h??0.4, fontFace:SANS, fontSize:o.size||15, bold:true, color:ink(s,o.color), margin:0, isTextBox:true, valign:'top' });
}
function text(s, t, x, y, w, h, o={}){
  s.addText(t, { x, y, w, h, fontFace:o.mono?MONO:SANS, fontSize:o.size||11.5, color:o.color||MUTED, bold:!!o.bold, italic:!!o.italic, align:o.align||'left', margin:0, isTextBox:true, valign:o.valign||'top', lineSpacingMultiple:o.lsm||1.15 });
}
function pill(s, t, x, y, w, o={}){
  s.addShape(pres.ShapeType.roundRect, { x, y, w, h:o.h??0.34, rectRadius:0.17, fill:{ color:o.fill||ORANGE }, line:{ color:o.fill||ORANGE, width:0 } });
  s.addText(t, { x, y, w, h:o.h??0.34, fontFace:MONO, fontSize:o.size||9.5, color:o.color||WHITE, align:'center', valign:'middle', margin:0, bold:true });
}
function arrow(s, x, y, w, o={}){
  s.addShape(pres.ShapeType.rightArrow, { x, y, w, h:o.h??0.3, fill:{ color:o.color||ORANGE }, line:{ color:o.color||ORANGE, width:0 } });
}
function bigStat(s, x, y, w, num, lab, o={}){
  s.addText(num, { x, y, w, h:0.85, fontFace:SANS, fontSize:o.size||40, bold:true, color:o.color||BLUE, margin:0, isTextBox:true });
  s.addText(lab, { x, y:y+0.88, w, h:o.lh??0.7, fontFace:SANS, fontSize:o.lsize||12, color:MUTED, margin:0, isTextBox:true, valign:'top', lineSpacingMultiple:1.15 });
}
function quoteCard(s, q, who, o={}){
  const x=o.x??M, y=o.y??2.2, w=o.w??(W-2*M), h=o.h??2.6;
  card(s, x, y, w, h, { fill:CARD, line:ORANGE, lw:1.25 });
  s.addText('“', { x:x+0.3, y:y+0.05, w:1, h:1, fontFace:'Georgia', fontSize:64, color:ORANGE, margin:0, isTextBox:true });
  s.addText(q, { x:x+0.6, y:y+0.55, w:w-1.2, h:h-1.3, fontFace:SANS, fontSize:o.size||20, color:INK, margin:0, isTextBox:true, valign:'middle', lineSpacingMultiple:1.2 });
  s.addText(who, { x:x+0.6, y:y+h-0.65, w:w-1.2, h:0.4, fontFace:MONO, fontSize:10, color:DIM, margin:0, isTextBox:true });
}
function table(s, rows, x, y, colW, o={}){
  const data = rows.map((r,ri)=> r.map((c,ci)=>({ text:String(c), options:{
    fontFace: (ri===0)?MONO:(o.monoCols&&o.monoCols.includes(ci)?MONO:SANS),
    fontSize: ri===0?(o.hsize||8.5):(o.size||11),
    bold: ri===0 || (o.boldCols&&o.boldCols.includes(ci)),
    color: ri===0?WHITE:(ci===0&&!o.plainFirst?INK:MUTED),
    fill:{ color: ri===0?BLUE:(ri%2?CARD:WHITE) },
    valign:'middle', margin:[4,6,4,6], charSpacing: ri===0?1.2:0 } })));
  s.addTable(data, { x, y, w: colW.reduce((a,b)=>a+b,0), colW, border:{ type:'solid', color:LINE, pt:0.5 }, rowH:o.rowH||0.42, autoPage:false });
}
function timeChip(s, t, o={}){
  s.addText(t, { x:o.x??(W-M-2.2), y:o.y??0.55, w:2.2, h:0.3, fontFace:MONO, fontSize:9.5, color:DIM, align:'right', margin:0, isTextBox:true });
}

// ---- lifecycle strip + exercise helpers ----
const STAGES = ['SPEC','BUILD','TEST','REVIEW','SHIP','MONITOR'];
function lifecycle(s, active){
  const w = 0.98, gap = 0.08, x0 = (W - (STAGES.length*w + (STAGES.length-1)*gap))/2, y = H-0.62;
  STAGES.forEach((st,i)=>{
    const on = active && st===active.toUpperCase();
    s.addShape(pres.ShapeType.roundRect, { x:x0+i*(w+gap), y, w, h:0.3, rectRadius:0.06, fill:{ color: on?ORANGE:(s._dark?NAVY:CARD) }, line:{ color: on?ORANGE:LINE, width:0.5 } });
    s.addText(st, { x:x0+i*(w+gap), y, w, h:0.3, fontFace:MONO, fontSize:8, color: on?WHITE:DIM, align:'center', valign:'middle', margin:0, bold:on });
  });
}
function promptCard(s, txt, x, y, w, h, o={}){
  s.addShape(pres.ShapeType.rect, { x, y, w, h, fill:{ color:NAVY }, line:{ color:o.line||ORANGE, width:1 } });
  s.addText((o.label||'TYPE THIS, VERBATIM'), { x:x+0.2, y:y+0.12, w:w-0.4, h:0.25, fontFace:MONO, fontSize:8, bold:true, color:ORANGE, charSpacing:1.5, margin:0 });
  s.addText(txt, { x:x+0.2, y:y+0.42, w:w-0.4, h:h-0.55, fontFace:MONO, fontSize:o.size||10.5, color:'E6EBF2', margin:0, isTextBox:true, valign:'top', lineSpacingMultiple:1.2 });
}
function steps(s, arr, o={}){
  const x=o.x??M, y=o.y??2.0, w=o.w??(W-2*M), h=o.h??3.0;
  s.addText(arr.map((t,i)=>({ text:`${i+1}  ${t}`, options:{ breakLine:i<arr.length-1, paraSpaceAfter:o.gap??7 } })),
    { x, y, w, h, fontFace:SANS, fontSize:o.size||12, color:o.color||INK, margin:0, isTextBox:true, valign:'top', lineSpacingMultiple:1.15 });
}
function blockHeader(s, num, name, mins, kind){
  s.addText(`BLOCK ${num}  ·  ${name.toUpperCase()}  ·  ${mins} MIN  ·  ${kind.toUpperCase()}`, { x:M, y:0.55, w:W-2*M-2.4, h:0.3, fontFace:MONO, fontSize:10.5, bold:true, color:BLUE, charSpacing:2, margin:0 });
}
function stickyRule(s, y=H-1.15){
  s.addShape(pres.ShapeType.rect, { x:M, y, w:0.28, h:0.28, fill:{ color:GREEN }, line:{ color:GREEN, width:0 } });
  s.addText('Green sticky = done', { x:M+0.38, y, w:2.6, h:0.28, fontFace:SANS, fontSize:11, color:MUTED, margin:0, valign:'middle' });
  s.addShape(pres.ShapeType.rect, { x:M+3.1, y, w:0.28, h:0.28, fill:{ color:RED }, line:{ color:RED, width:0 } });
  s.addText('Red sticky = a helper comes to you', { x:M+3.48, y, w:4.5, h:0.28, fontFace:SANS, fontSize:11, color:MUTED, margin:0, valign:'middle' });
}
const STARTER = 'github.com/mrhinkle/unstuck-starter';
const DEPLOY = 'vercel.com/new/clone?repository-url=https://' + STARTER;

function hackHeader(s, k, time){
  s.addText(`LIVE HACKING  ·  SPRINT ${k} OF 3  ·  20 MIN  ·  YOUR TOOL, YOUR KEYBOARD`, { x:M, y:0.55, w:W-2*M-2.4, h:0.3, fontFace:MONO, fontSize:10.5, bold:true, color:ORANGE, charSpacing:2, margin:0 });
  timeChip(s, time);
}

let s;

// 1 Title
s = slide({ dark:true, noFooter:true, notes:'Before 0:00. This slide sits on the screen while people arrive; do not start talking until the room is at the Deploy Button on the Land slide. Six hours: five of class, one of live hacking in three twenty-minute sprints. Room path: Claude Desktop app, GitHub Desktop, a browser. No terminal. DECIDE BEFORE STAGE: date, venue, seat count, price, and whether lunch is inside the six hours (this deck assumes it is, 30 minutes at 2:45).' });
s.addImage({ path:ASSETS+'art-title.jpg', x:W-M-4.2, y:1.0, w:4.2, h:4.2 });
s.addImage({ path:ASSETS+'logo-h-white.png', x:M, y:0.6, w:3.2, h:0.41 });
eyebrow(s, 'All Things AI · with The AIE Network · A six-hour hands-on class', { y:1.55, color:ORANGE });
s.addText('Vibe Coding, Take Two', { x:M, y:1.95, w:7.6, h:1.3, fontFace:SANS, fontSize:54, bold:true, color:'FFFFFF', margin:0, isTextBox:true });
s.addText('Drop the vibes. Ship a production app you own.', { x:M, y:3.25, w:7.4, h:0.9, fontFace:SANS, fontSize:24, color:'D6DEEA', margin:0, isTextBox:true });
body(s, ['Five hours of class. One hour of live hacking on your own tool, in three sprints.','You leave with a repo, a live site, a test, a rollback you have used, a database, an email alert, and a skill. All in accounts with your name on them.'], { y:4.3, w:7.4, size:14, gap:4, h:1.4, color:'B9C3D1' });
s.addText('MARK HINKLE · CEO, PERIPETY LABS · PUBLISHER, THE AIE NETWORK · CO-ORGANIZER, ALL THINGS AI', { x:M, y:H-0.8, w:W-2*M, h:0.3, fontFace:MONO, fontSize:8.5, color:'B9C3D1', charSpacing:1.5, margin:0 });

// 2 Bio
s = slide({ notes:'0:20–0:25. Keep it to a minute. The credential that matters today is that I have shipped the mistakes I am about to show you. Part One recap in one breath: what vibe coding is, brief the AI like a contractor, describe-look-react, GitHub plus Vercel for free. Today goes deeper on every one of those.' });
eyebrow(s, 'Credentials, briefly');
title(s, 'Who’s this guy?');
s.addImage({ path:ASSETS+'headshot.png', x:M, y:1.95, w:2.6, h:2.6 });
text(s, 'MARK HINKLE', M, 4.65, 2.6, 0.3, { mono:true, size:8.5, color:ORANGE });
head(s, 'Peripety Labs', 3.7, 1.95, 4.6); text(s, 'CEO. AI consulting and products.', 3.7, 2.33, 4.6, 0.4);
head(s, 'The AIE Network', 3.7, 2.85, 4.6); text(s, 'Publisher. Newsletters on practical AI for business, every weekday.', 3.7, 3.23, 4.6, 0.5);
head(s, 'All Things AI', 3.7, 3.85, 4.6); text(s, 'Co-organizer. The Triangle’s AI-for-business conference and community.', 3.7, 4.23, 4.6, 0.5);
card(s, 8.7, 1.95, 3.93, 2.9, { fill:CARD, accent:ORANGE });
label(s, 'Part One, in August', 8.95, 2.1, 3.5);
body(s, ['What vibe coding is','Brief the AI like a contractor','Describe → look → react','GitHub + Vercel, for free'], { x:8.95, y:2.45, w:3.5, h:2.3, size:12, bullets:true, gap:4 });
text(s, 'Thirty years of betting early: BBSs → Linux → open source → cloud → AI. Every time, the “toy” got good faster than the serious people expected.', M, 5.2, 8, 0.8, { italic:true, size:11.5 });

// 3 Promise + honest money line
s = slide({ notes:'0:20–0:25. Say the money line out loud before anyone asks. The tool you leave with has no subscription to a builder. The AI you build it with is $20 a month while you use it, and a business site on Vercel is $20 a month by Vercel’s own rules. That is the whole bill, and it is less than any builder once you count what it costs to get your code out of them.' });
eyebrow(s, 'The promise for the day');
title(s, 'Today: one working tool, in accounts with your name on them.', { size:26 });
const leave = [['A repository','in your GitHub, with every change recorded'],['A live site','on your Vercel, with a preview for every change'],['A test','that runs on every push, whether you remember or not'],['A rollback','you have used once, so it is not scary the day it matters'],['A skill','a file in the repo that makes the AI ship it your way, every time']];
leave.forEach((p,i)=>{ const x=M+i*2.42; card(s, x, 2.05, 2.3, 2.3, { fill:CARD, accent:ORANGE }); text(s, String(i+1).padStart(2,'0'), x+0.22, 2.2, 1, 0.3, { mono:true, size:9, color:ORANGE }); head(s, p[0], x+0.22, 2.5, 1.95, { size:14 }); text(s, p[1], x+0.22, 2.95, 1.95, 1.3, { size:10.5 }); });
card(s, M, 4.65, W-2*M, 1.55, { fill:CARD2, line:ORANGE, lw:1 });
label(s, 'The money, said plainly', M+0.25, 4.8, 6);
text(s, 'The tool you leave with has no builder subscription. The AI you build with is Claude Pro, $20 a month, cancel any time. A site that makes money belongs on Vercel Pro, $20 a month, by Vercel’s own rules. A .com is about $11 a year. That is the whole bill.', M+0.25, 5.1, W-2*M-0.5, 1.0, { size:12.5, color:INK });

// RS The day at a glance
s = slide({ notes:'0:20–0:25. Thirty seconds on this slide, no more. The shape: we build before we talk, we ship before the first break, the tool goes through a gate before lunch, and the afternoon makes it real with a database, an email, the bill, and a skill. The orange rows are live hacking: three twenty-minute sprints where you work on your own tool and I hack on mine on the projector. Sprint one is on a branch with no merge. Sprint two goes through the gate. Sprint three ships and demos. If lunch is outside the six hours at your venue, give those thirty minutes to sprints two and three, fifteen each.' });
eyebrow(s, 'The day at a glance');
title(s, 'Six hours. Five of class, one of live hacking, in three sprints.', { size:26 });
const am = [['CLOCK','BLOCK','YOU WALK AWAY WITH'],['0:00','Land','A repo and a live URL'],['0:25','One year later','Why the other half is your job'],['0:40','Spec','spec.md and a plan'],['1:00','First ship','One change in production'],['1:25','Break',''],['1:35','Build the one thing','Your tool, on a branch'],['2:00','LIVE HACKING 1','Your columns, your prices'],['2:20','Test is the gate','One green check, one red X'],['2:45','Lunch','']];
const pm = [['CLOCK','BLOCK','YOU WALK AWAY WITH'],['3:15','Ship and own it','A rollback, clean secrets, a review'],['3:35','Give it a memory','A database in your account'],['4:05','LIVE HACKING 2','A feature through the gate'],['4:25','Break',''],['4:35','Hear about it','An email when a customer submits'],['4:55','Own it','The bill, and when to call a pro'],['5:10','Skills','A checklist the AI runs'],['5:30','LIVE HACKING 3','A demo on your production URL'],['5:50','What you own','The Monday list']];
function dayTable(rows, x){
  const data = rows.map((r,ri)=> r.map((c,ci)=>{ const hack = /^LIVE HACKING/.test(r[1]); const rest = /^(Break|Lunch)$/.test(r[1]); return { text:String(c), options:{
    fontFace: (ri===0||ci===0)?MONO:SANS, fontSize: ri===0?8.5:10.5, bold: ri===0 || ci===1,
    color: ri===0?WHITE:(hack?WHITE:(rest?DIM:(ci<2?INK:MUTED))),
    fill:{ color: ri===0?BLUE:(hack?ORANGE:(ri%2?CARD:WHITE)) }, valign:'middle', margin:[3,6,3,6], charSpacing: ri===0?1.2:0 } }; }));
  s.addTable(data, { x, y:1.95, w:5.85, colW:[0.8,2.2,2.85], border:{ type:'solid', color:LINE, pt:0.5 }, rowH:0.4, autoPage:false });
}
dayTable(am, M); dayTable(pm, M+6.08);
text(s, 'Orange rows are yours: your tool, your keyboard. I hack on mine on the projector at the same time, mistakes included.', M, 6.1, W-2*M, 0.4, { size:12.5, color:INK });

// 4 Room rules
s = slide({ notes:'0:20–0:25. Carpentries rules. Red and green stickies so I can see the state of the room from the front and nobody has to hold a hand up. Pairs: the more nervous person types, the confident one reads. One path: Claude Desktop app, GitHub Desktop, a browser. No terminal today. I will build live on the projector at about twice your speed, and my mistakes are the lesson.' });
eyebrow(s, 'How the room works');
title(s, 'Four rules for the next six hours');
const rules = [['Stickies, not hands','Green on your lid when the step is done. Red when you are stuck: a helper comes to you.'],['Pairs','The nervous one types. The confident one reads the plan out loud. Swap after every break.'],['One path','Claude Desktop app, GitHub Desktop, a browser. No terminal. No Node. No installs during class.'],['Watch the mistakes','I build live at about twice your speed. When the AI gets it wrong on my screen, good. That is what you got stuck on at home.']];
rules.forEach((r,i)=>{ const x=M+(i%2)*6.05, y=2.05+Math.floor(i/2)*1.95; card(s, x, y, 5.85, 1.75, { fill:CARD, accent: i===3?ORANGE:BLUE }); head(s, r[0], x+0.25, y+0.2, 5.4, { size:15 }); text(s, r[1], x+0.25, y+0.62, 5.4, 1.05, { size:11.5 }); });

// 5 Block 1 exercise: Land
s = slide({ notes:'0:00–0:20. In practice this slide is up while people arrive. I budget the first twenty minutes for setup because it happens whether I plan for it or not, and the people who most needed the prework are the ones who did not get to it. The one thing I want by 0:20: every person owns a repository and a live URL. That is the whole day in miniature. The code landed in your account, not mine. Starter repo and Deploy Button link: create github.com/mrhinkle/unstuck-starter as a Template repo before the class, with spec.md, CLAUDE.md, AGENTS.md, .gitignore excluding .env.local, a placeholder tool page, and checkpoint branches, including checkpoint-5-database and checkpoint-6-email for the two afternoon blocks.' });
blockHeader(s, 1, 'Land', 20, 'hands-on'); timeChip(s, '0:00 – 0:20');
title(s, 'Own a repo and a live URL before you install anything.');
promptCard(s, 'https://' + DEPLOY, M, 1.95, W-2*M, 0.95, { label:'OPEN THIS LINK (ALSO ON THE PRINTED CARD AND THE QR BY THE DOOR)', size:13 });
steps(s, ['Open the link. Sign in to GitHub, then Vercel, when asked. Signing in to Vercel with GitHub is what puts the repo in YOUR account.','Name the repository after your business. Letters, digits, dashes. Click Create and wait for the build.','Click Visit. Paste your new vercel.app URL in the shared doc next to your name.','Open GitHub Desktop → File → Clone repository → pick the one you just made. Note where it saved.','Open the Claude Desktop app, choose Code, and open that folder. Green sticky when Claude can see your repo.'], { x:M, y:3.15, w:W-2*M, h:2.6 });
stickyRule(s);

// 6 Fallback
s = slide({ notes:'0:00–0:20. Helpers carry the triage card and stop after step three. Anyone failing the OS check goes straight to the browser and loses nothing, because every session at claude.ai/code clones their repo into a cloud machine and pushes a branch back to their GitHub. That is also a nice proof of ownership. Do not debug a laptop for more than five minutes in a full room.' });
blockHeader(s, 1, 'Land', 20, 'fallback'); timeChip(s, 'STILL RED AT 0:15?');
title(s, 'Still red at 0:15? Move to the browser. You lose nothing.');
card(s, M, 1.95, 5.9, 3.9, { fill:CARD2, accent:GREEN });
label(s, 'The zero-install path', M+0.25, 2.1, 5);
body(s, ['Open claude.ai/code in any browser (paid Claude plan + GitHub).','Pick the repository the Deploy Button just created.','Every prompt today works there too. Claude clones your repo into a cloud machine and pushes a branch to YOUR GitHub.','Second fallback: GitHub → “Use this template” → “Open in a codespace”. Publish before you leave or the work is deleted.'], { x:M+0.25, y:2.45, w:5.4, h:3.3, size:11.5, bullets:true, gap:6 });
card(s, 6.85, 1.95, 5.78, 3.9, { fill:CARD, accent:RED });
label(s, 'Helper triage card (stop after step 3)', 7.1, 2.1, 5);
steps(s, ['Does the Claude Desktop app open and sign in? Free plan fails here: it needs Pro.','Windows: is Git for Windows installed? Mac: is it macOS 13 or newer?','If either answer is no → browser path. Do not debug further.','GitHub Desktop signed in? If it was installed today on Windows, sign out of Windows and back in.','Vercel signed in with GitHub (not email)? Otherwise the repo lands in the wrong place.'], { x:7.1, y:2.45, w:5.3, h:3.3, size:11, gap:5 });

// 7 History timeline
s = slide({ notes:'0:25–0:40. Fifteen minutes, and it is deliberately a second setup window while helpers clear reds. The arc: the man who coined the term walked it back inside a year and picked a new word, engineering, with oversight as the defining idea. Feb 2 2025, the post: fully give in to the vibes, forget the code exists. Nov 6 2025, Collins word of the year. Feb 4 2026, he calls the original a shower-of-thoughts throwaway tweet and says his current favorite term is agentic engineering: you orchestrate agents and act as oversight. Apr 30 2026 at Sequoia: vibe coding raises the floor for everyone, agentic engineering preserves the quality bar. I am not here to talk you out of vibe coding. Part One got you a working thing. This is the other half.' });
blockHeader(s, 2, 'One year later', 15, 'talk'); timeChip(s, '0:25 – 0:40');
title(s, 'The man who coined it picked a new word within a year.');
const tl = [['FEB 2, 2025','“Fully give in to the vibes… forget that the code even exists.”','Karpathy coins “vibe coding.”'],['NOV 6, 2025','Collins Dictionary Word of the Year.','“AI prompted by natural language to write code.”'],['FEB 4, 2026','“A shower-of-thoughts throwaway tweet.”','His new term: agentic engineering. You orchestrate. You are the oversight.'],['APR 30, 2026','“Vibe coding is about raising the floor for everyone.”','“Agentic engineering is about preserving the quality bar.”']];
s.addShape(pres.ShapeType.line, { x:M, y:2.75, w:W-2*M, h:0, line:{ color:LINE, width:1 } });
tl.forEach((t,i)=>{ const x=M+i*2.98; s.addShape(pres.ShapeType.ellipse, { x:x+0.02, y:2.64, w:0.22, h:0.22, fill:{ color: i===3?ORANGE:BLUE }, line:{ color:BG, width:1 } }); text(s, t[0], x, 2.05, 2.8, 0.3, { mono:true, size:9.5, color:ORANGE }); text(s, t[1], x, 3.05, 2.75, 1.2, { size:12, color:INK }); text(s, t[2], x, 4.2, 2.75, 1.1, { size:10.5 }); });
card(s, M, 5.35, W-2*M, 0.85, { fill:CARD2, line:ORANGE, lw:1 });
text(s, 'Oversight is the word. Vibe for the proof of concept. Engineering for production. That is the whole day.', M+0.25, 5.5, W-2*M-0.5, 0.6, { size:14, color:INK, valign:'middle' });
lifecycle(s);

// 8 How big
s = slide({ notes:'0:25–0:40. Three numbers so nobody thinks this is a hobbyist thing. Lovable raised at $13.3 billion in August on $500 million of annualized revenue, 60 million projects. Replit at $9 billion in March. Wix paid about $80 million for Base44 when it was six months old and had one founder. Then the pivot: the same Lovable that is worth $13 billion told the researcher who found the CVE that security is the customer’s responsibility. Hold that thought.' });
blockHeader(s, 2, 'One year later', 15, 'talk'); timeChip(s, '0:25 – 0:40');
title(s, 'It is not a toy. It is a $13 billion category.');
bigStat(s, M, 2.1, 3.8, '$13.3B', 'Lovable, Aug 2026. $500M annualized revenue, 60 million projects, a million new ones a week.');
bigStat(s, M+4.1, 2.1, 3.8, '$9B', 'Replit, Mar 2026. Up from $3B six months earlier.');
bigStat(s, M+8.2, 2.1, 3.8, '$80M', 'What Wix paid for Base44 in June 2025. Six months old. One founder.');
card(s, M, 4.45, W-2*M, 1.7, { fill:CARD2, accent:ORANGE });
label(s, 'And the same company’s answer when a researcher found 1 in 10 of its apps wide open', M+0.25, 4.6, 11);
text(s, 'Customers are responsible for protecting their application data.', M+0.25, 4.95, W-2*M-0.5, 0.5, { size:18, color:INK });
text(s, 'Lovable, disputing CVE-2025-48757. Which is fair. And it is exactly why the rest of today is your job.', M+0.25, 5.5, W-2*M-0.5, 0.5, { size:11.5 });
lifecycle(s);

// 9 Receipts
s = slide({ notes:'0:25–0:40. Great for proof of concept, bad for production. The receipts, all primary sources. July 2025: Replit’s agent deleted a founder’s production database during a declared code freeze, records on more than 1,200 executives. The CEO called it unacceptable, and Replit’s docs now say the agent is not able to modify the production database. They changed their architecture because a non-engineer lost his data. May 2025: CVE on Lovable apps, 170 of 1,645 scanned, about one in ten, database open to anyone because a checkbox called row level security was off. Feb 2026: Moltbook, founder said he did not write a single line, 1.5 million API keys exposed, same checkbox. May 2026: RedAccess found about 5,000 of 380,000 vibe-coded apps leaking data, including pediatric records, with no exploit, just Google. Do NOT put the Tea app on this slide; that was a legacy Firebase bucket from before 2024 and Simon Willison is confident vibe coding was not to blame. If someone raises it, say so.' });
blockHeader(s, 2, 'One year later', 15, 'talk'); timeChip(s, '0:25 – 0:40');
title(s, 'Great for proof of concept. Documented-bad for production.');
const rec = [['JUL 2025','Replit’s agent deleted a production database','During a declared code freeze. 1,200+ executives’ records. Replit’s docs now read: “Agent is not able to modify the production database.”'],['MAY 2025','1 in 10 Lovable apps open to anyone','CVE-2025-48757: 170 of 1,645 scanned apps. Row Level Security off. Emails, addresses, payment details readable without logging in.'],['FEB 2026','Moltbook: “I didn’t write a single line of code”','1.5 million API keys and 35,000 emails exposed. A Supabase key in the browser plus the same unchecked box.'],['MAY 2026','~5,000 of 380,000 apps leaking','RedAccess. Vessel schedules, clinical trials, pediatric records. No exploit. Public by default, indexed by Google.']];
rec.forEach((r,i)=>{ const x=M+(i%2)*6.05, y=1.95+Math.floor(i/2)*2.05; card(s, x, y, 5.85, 1.9, { fill:CARD, accent:RED }); text(s, r[0], x+0.25, y+0.15, 2, 0.25, { mono:true, size:9, color:ORANGE }); head(s, r[1], x+0.25, y+0.42, 5.4, { size:13.5 }); text(s, r[2], x+0.25, y+0.85, 5.4, 1.0, { size:10.5 }); });
lifecycle(s);

// 10 Veracode
s = slide({ notes:'0:25–0:40. Here is the number that kills “the next model will fix it.” Veracode, March 2026, 150-plus models, 80 tasks: 45 percent of AI-written code carries a known vulnerability when no security guidance is given. That number has not moved in two years. In the same two years, the code got dramatically better at simply running: roughly 50 percent to 95 percent syntactically correct. Better at working, not safer. The phrase that matters is “when no security guidance is given.” You are the guidance. That is what a spec, a test, and a skill are.' });
blockHeader(s, 2, 'One year later', 15, 'talk'); timeChip(s, '0:25 – 0:40');
title(s, 'The code got better at running. Not at being safe.');
// simple two-bar comparison drawn with shapes
const cx=M+0.3, cy=2.1, cw=6.4, ch=3.4;
s.addShape(pres.ShapeType.rect, { x:cx, y:cy, w:cw, h:ch, fill:{ color:CARD }, line:{ color:LINE, width:0.75 } });
label(s, 'Veracode, 150+ models, 2024 → 2026', cx+0.2, cy+0.12, 6);
// syntax line: 50 -> 95
s.addShape(pres.ShapeType.line, { x:cx+0.9, y:cy+0.8, w:4.9, h:1.75, line:{ color:BLUE, width:3 }, flipV:true });
s.addShape(pres.ShapeType.line, { x:cx+0.9, y:cy+1.85, w:4.9, h:0.02, line:{ color:ORANGE, width:3 } });
text(s, 'Code that runs: ~50% → 95%', cx+0.9, cy+0.45, 4.9, 0.3, { size:11, color:BLUE, bold:true });
text(s, 'Code that passes a security check: flat at ~55%', cx+0.9, cy+2.0, 4.9, 0.3, { size:11, color:ORANGE, bold:true });
text(s, '2024', cx+0.9, cy+2.85, 1, 0.3, { mono:true, size:8.5 }); text(s, '2026', cx+4.9, cy+2.85, 1, 0.3, { mono:true, size:8.5, align:'right' });
bigStat(s, 7.9, 2.1, 4.7, '45%', 'of AI-generated code contains a known vulnerability when no security guidance is given. Unchanged for two years.', { color:ORANGE });
card(s, 7.9, 4.35, 4.73, 1.15, { fill:CARD2, line:ORANGE, lw:1 });
text(s, '“When no security guidance is given.” You are the guidance.', 8.1, 4.5, 4.4, 0.9, { size:14, color:INK, valign:'middle' });
lifecycle(s);

// 11 Vendors' answer
s = slide({ notes:'0:25–0:40. The vendors have told you, in writing, that the other half is your job. Lovable: customers are responsible for their application data. Replit’s CEO on 380,000 public apps: public apps being accessible on the internet is expected behavior. He is right. On a hosted builder, public is the default and the vendor calls that expected. On your own Vercel project you decide. So the lifecycle is not a nice-to-have. It is the part of the product they are not selling you.' });
blockHeader(s, 2, 'One year later', 15, 'talk'); timeChip(s, '0:25 – 0:40');
title(s, 'The vendors already told you whose job the other half is.');
quoteCard(s, 'Public apps being accessible on the internet is expected behavior.', 'Amjad Masad, CEO of Replit, May 2026, on ~5,000 leaking apps', { x:M, y:1.95, w:5.9, h:2.6, size:17 });
quoteCard(s, 'Customers are responsible for protecting their application data.', 'Lovable, disputing CVE-2025-48757', { x:6.75, y:1.95, w:5.88, h:2.6, size:17 });
text(s, 'They are not wrong. On a hosted builder, public is the default and the backend is theirs. On a repo and a Vercel project with your name on them, you decide. The rest of today is the part of the product they are not selling you.', M, 4.85, W-2*M, 1.1, { size:13.5, color:INK });
lifecycle(s);

// 12 Five failures -> five practices
s = slide({ notes:'0:25–0:40. The map for the day. Every way vibe-coded apps break in production has one plain practice that prevents it, and you will do every one of them on your own repo before you leave. Deleted database → every change on a branch, in GitHub, with a rollback. Silent bug → one test that runs on every push. Leaked key → environment variables, never the code. Vanished platform → your host, your domain; Google shut down its own vibe-coding IDE inside a year. Inconsistent AI → a skill file. Point at the strip at the bottom: spec, build, test, review, ship, monitor. It will be in the footer of every slide from here on, with the stage we are in lit up.' });
blockHeader(s, 2, 'One year later', 15, 'talk'); timeChip(s, '0:25 – 0:40');
title(s, 'Five ways it breaks. Five plain practices. All today.');
const ff = [['A deleted database','Every change on a branch, in GitHub, with a one-click rollback'],['A bug that shipped silently','One test that runs on every push, whether you remember or not'],['A key in the browser','Secrets live in environment variables, never in the code'],['A platform that vanished','Your host, your domain, your repo. Google sunset its own vibe IDE in a year'],['An AI that does it differently every time','A skill: the checklist, written once, in the repo']];
ff.forEach((f,i)=>{ const y=1.95+i*0.8; card(s, M, y, 5.2, 0.7, { fill:CARD, accent:RED }); text(s, f[0], M+0.25, y, 4.8, 0.7, { size:12.5, color:INK, valign:'middle' }); arrow(s, M+5.35, y+0.2, 0.5); card(s, M+6.0, y, 5.93, 0.7, { fill:CARD, accent:GREEN }); text(s, f[1], M+6.25, y, 5.5, 0.7, { size:12, valign:'middle' }); });
lifecycle(s);

// 13 Lifecycle strip explained
s = slide({ notes:'0:25–0:40. Six words. A spec says what to build. Build on a branch, never on the live site. Test with a check the machine can run. Review by a fresh reader, human or model, never the author. Ship by merging, with a rollback in reach. Monitor so you hear about the breakage before your customer does. That is a development lifecycle, and none of it needs a terminal.' });
blockHeader(s, 2, 'One year later', 15, 'talk'); timeChip(s, '0:25 – 0:40');
title(s, 'A development lifecycle is six words. You will do all six today.');
const lc = [['Spec','Write down what it does, who uses it, and how you will know it works.'],['Build','On a branch, never on the live site. Every push gets a preview URL.'],['Test','One check the machine can run on every change. Red or green.'],['Review','A fresh reader looks at it. Never the author, human or model.'],['Ship','Merge to main. It goes live. Rollback is one click away.'],['Monitor','Hear about breakage before your customer does.']];
lc.forEach((l,i)=>{ const x=M+(i%3)*4.02, y=1.95+Math.floor(i/3)*1.95; card(s, x, y, 3.85, 1.75, { fill:CARD, accent: ORANGE }); text(s, String(i+1).padStart(2,'0'), x+0.25, y+0.15, 1, 0.3, { mono:true, size:9, color:ORANGE }); head(s, l[0], x+0.25, y+0.42, 3.4, { size:16 }); text(s, l[1], x+0.25, y+0.85, 3.4, 0.85, { size:11 }); });
lifecycle(s);

// 14 Spec: the brief becomes a file
s = slide({ notes:'0:40–1:00. In Part One you learned to brief the AI like a contractor. Now the brief lives in the repo, where the AI reads it every session, so you stop re-explaining your business every morning. GitHub open-sourced Spec Kit a year ago and their own words were: vibe coding is great for quick prototypes, less reliable for serious applications. The spec is, in their phrase, a binding contract for code behavior. Five headings. Plain English. Fifteen lines max. The last heading, how we know it works, becomes your test before lunch.' });
blockHeader(s, 3, 'Spec', 20, 'hands-on'); timeChip(s, '0:40 – 1:00');
title(s, 'The brief becomes a file in the repo. The AI reads it every session.');
card(s, M, 1.95, 5.6, 4.0, { fill:CARD2, accent:ORANGE });
label(s, 'spec.md · five headings · 15 lines max', M+0.25, 2.1, 5);
body(s, ['Who uses it','What they type in','What comes out','What must never happen','How we know it works'], { x:M+0.25, y:2.5, w:5.1, h:3.2, size:15, color:INK, bullets:true, gap:9 });
card(s, 6.55, 1.95, 6.08, 4.0, { fill:CARD, line:LINE });
label(s, 'Filled in: a quote calculator for a lawn service', 6.8, 2.1, 5.5);
text(s, 'Who uses it: a homeowner on a phone, and me.\nWhat they type in: address, lawn size, which services.\nWhat comes out: a price on screen, and an email to me with what they picked.\nWhat must never happen: a quote below my minimum; a form that submits with a blank address.\nHow we know it works: enter 5,000 sq ft, mowing + cleanup, see $195, and I get the email.', 6.8, 2.45, 5.6, 3.3, { mono:true, size:10.5, color:'1F2937', lsm:1.3 });
lifecycle(s, 'SPEC');

// 15 Spec exercise
s = slide({ notes:'0:40–1:00. Scope rule: one screen, one form, one result. No login, no database today. That is the spreadsheet you brought. Plan mode is the discipline I skipped in Part One: make it tell you what it is going to do before it touches a file. Read the plan like a contractor’s quote. If the plan has more than one screen, cut it. Helpers: anyone whose spec has six screens gets cut down now, not in the build block.' });
blockHeader(s, 3, 'Spec', 20, 'hands-on'); timeChip(s, '0:40 – 1:00');
title(s, 'Fill in spec.md for the thing you brought. Then ask for a plan, not code.');
steps(s, ['Open spec.md in your repo (it is in the starter). Fill in the five headings for the spreadsheet or tool you brought. Plain English. 15 lines.','Scope rule: one screen, one form, one result. No login. No database. If you wrote more, cut it.','Type the prompt on the right. Read the plan out loud to your partner. Argue with it in plain English until it matches how you actually work.','Green sticky when the plan fits on one screen and you both agree with it.'], { x:M, y:1.95, w:6.0, h:3.6, size:12 });
promptCard(s, 'Read spec.md. Use plan mode. Plan how to build what it describes as ONE page in this app, using the starter’s form and table. Do not write any code yet. Show me the plan.', 7.0, 1.95, 5.63, 2.2);
card(s, 7.0, 4.35, 5.63, 1.2, { fill:CARD2, line:LINE });
text(s, 'Ask for the plan. Argue with the plan. Then let it build.', 7.2, 4.5, 5.3, 0.9, { size:14, color:INK, valign:'middle' });
stickyRule(s);
lifecycle(s, 'SPEC');

// 16 GitHub four words
s = slide({ notes:'1:00–1:25. Four words and you know GitHub. A repository is the folder and its whole history. A branch is a photocopy you can scribble on. A commit is a saved snapshot with a note. A pull request is asking to merge the photocopy back. You will never type a git command today. Claude runs them; you read what it did on github.com. GitHub Free is zero dollars, unlimited private repos, and 2,000 minutes a month of the test runner we use later.' });
blockHeader(s, 4, 'First ship', 25, 'hands-on'); timeChip(s, '1:00 – 1:25');
title(s, 'GitHub in four words. You will never type a git command today.');
const gw = [['Repository','The folder and its entire history. It lives in your account. Delete Claude tomorrow and it is still yours.'],['Branch','A photocopy you can scribble on. The live site never sees it until you say so.'],['Commit','A saved snapshot with a note: what changed and why. Undo to any of them.'],['Pull request','Asking to merge the photocopy back. It gets a preview URL and a check before anything goes live.']];
gw.forEach((g,i)=>{ const x=M+(i%2)*6.05, y=1.95+Math.floor(i/2)*1.85; card(s, x, y, 5.85, 1.65, { fill:CARD, accent:BLUE }); head(s, g[0], x+0.25, y+0.18, 5.4, { size:16 }); text(s, g[1], x+0.25, y+0.62, 5.4, 0.95, { size:11.5 }); });
text(s, 'GitHub Free: $0. Unlimited private repositories. 2,000 minutes a month of the test runner we set up at 2:20.', M, 5.7, W-2*M, 0.4, { size:11, mono:true, color:DIM });
lifecycle(s, 'BUILD');

// 17 The loop diagram
s = slide({ notes:'1:00–1:25. This loop is the whole method from here on. Branch, pull request, preview URL, merge, live. And the arrow back: rollback. Vercel deploys every push and posts the preview as a comment on the pull request. The preview is the thing you never had in a builder: a copy of the app you can hand to someone before it is real. Only main gets the domain.' });
blockHeader(s, 4, 'First ship', 25, 'hands-on'); timeChip(s, '1:00 – 1:25');
title(s, 'Every push gets a URL. Only main gets the domain.');
const loop = ['Branch','Pull request','Preview URL','Merge','Live'];
loop.forEach((t,i)=>{ const x=M+i*2.45; s.addShape(pres.ShapeType.roundRect, { x, y:2.55, w:2.1, h:0.95, rectRadius:0.1, fill:{ color: i===4?ORANGE:CARD2 }, line:{ color: i===4?ORANGE:LINE, width:1 } }); s.addText(t, { x, y:2.55, w:2.1, h:0.95, fontFace:SANS, fontSize:15, bold:true, color: i===4?WHITE:INK, align:'center', valign:'middle', margin:0 }); if(i<4) arrow(s, x+2.13, 2.88, 0.28); });
s.addShape(pres.ShapeType.roundRect, { x:M+4.9, y:4.0, w:2.1, h:0.7, rectRadius:0.1, fill:{ color:CARD }, line:{ color:RED, width:1 } });
s.addText('Rollback', { x:M+4.9, y:4.0, w:2.1, h:0.7, fontFace:SANS, fontSize:13, bold:true, color:RED, align:'center', valign:'middle', margin:0 });
text(s, '← one click, in Vercel. You will do it after lunch.', M+7.15, 4.0, 4.5, 0.7, { size:11, valign:'middle' });
card(s, M, 5.0, W-2*M, 1.1, { fill:CARD2, line:LINE });
text(s, 'The preview is what you never had in a builder: a copy of the app you can hand to someone before it is real. Vercel posts it as a comment on the pull request, every push.', M+0.25, 5.15, W-2*M-0.5, 0.8, { size:12.5, color:INK, valign:'middle' });
lifecycle(s, 'BUILD');

// 18 First ship exercise
s = slide({ notes:'1:00–1:25. Participatory live coding: I type this on the projector, you type it on yours, and we watch Claude make the branch, the commit, and the pull request. I go about twice your speed. When the PR exists, open it on github.com, wait for the Vercel bot comment, click Visit Preview. Then merge. By 1:25 everyone in this room has shipped a change to a production site in their own account. Whatever happens after the break, you have already done the thing.' });
blockHeader(s, 4, 'First ship', 25, 'hands-on'); timeChip(s, '1:00 – 1:25');
title(s, 'Ship one change to production. A small one, on purpose.');
promptCard(s, 'Create a branch called first-change. Change the site title to “[your business name]”. Commit with a clear message, push the branch, and open a pull request.', M, 1.95, 5.9, 2.0);
steps(s, ['Type the prompt. Watch what Claude does, not just what it says.','Open the pull request on github.com. Wait for the Vercel bot comment. Click Visit Preview. Your name is on the preview.','Click Merge pull request, then Confirm merge.','Open your production vercel.app URL. Your name is live. Green sticky: you have shipped.'], { x:6.85, y:1.95, w:5.78, h:3.0, size:12 });
card(s, M, 4.2, 5.9, 1.4, { fill:CARD2, accent:ORANGE });
text(s, 'The first deploy on a Vercel project is always production. From now on, main is live and branches are previews. That is the rule for the rest of the day.', M+0.25, 4.32, 5.4, 1.15, { size:11.5, color:INK, valign:'middle' });
stickyRule(s);
lifecycle(s, 'SHIP');

// 19 Break 1
s = slide({ notes:'1:25–1:35. Two stickies each on the front table: one thing you learned, one thing that is still confusing. I read every one during the break and I will re-teach at 1:35 if half the room writes “what is a branch.” Helpers use the ten minutes to get any red sticky to a merged title change.' });
eyebrow(s, 'Break one · 10 minutes'); timeChip(s, '1:25 – 1:35');
title(s, 'Ticket to the break: two stickies on the front table.');
card(s, M, 2.1, 5.9, 2.6, { fill:CARD, accent:GREEN }); head(s, 'One thing you learned', M+0.3, 2.35, 5.3, { size:18 }); text(s, 'On the green one.', M+0.3, 2.85, 5.3, 0.5, { size:13 });
card(s, 6.85, 2.1, 5.78, 2.6, { fill:CARD, accent:RED }); head(s, 'One thing still confusing', 7.15, 2.35, 5.3, { size:18 }); text(s, 'On the red one. I read them all and change the next hour if you tell me to.', 7.15, 2.85, 5.3, 0.9, { size:13 });
text(s, 'Not merged yet? Grab a helper now, not after the break. Back at 1:35.', M, 5.1, W-2*M, 0.5, { size:14, color:INK });
lifecycle(s);

// 20 Build the one thing
s = slide({ notes:'1:35–2:00. Here is where the day pays off. You have a repo, a live site, and a merge behind you, so you can afford to let the AI try things. The prompt is constrained on purpose: one page, the starter’s form and table, do not change anything else. That constraint is what keeps a room of fifteen from wandering into a room full of different messes. The plan you argued with in the spec block is the brief. The live-hacking sprint that follows is where they make it theirs, so hold the line on scope here. Fallback: anyone behind re-templates from checkpoint-2 and builds from there.' });
blockHeader(s, 5, 'Build the one thing', 25, 'hands-on'); timeChip(s, '1:35 – 2:00');
title(s, 'Build the spreadsheet you came here to replace. One page. On a branch.', { size:23 });
promptCard(s, 'Read spec.md and the plan we agreed on. On a new branch called my-tool, build it as ONE page in this app: a form to add a row and a table to see the rows, using the starter’s sample data. Do not change anything else. Run the build and fix any errors before you tell me it is done. Then commit, push, and open a pull request.', M, 1.95, 6.3, 2.6);
steps(s, ['Type the prompt. Do not touch the code while it works. Read the diff it shows you.','When the PR exists, wait for the Vercel comment and open the preview on your PHONE. Add a row.','Send the preview link to your partner. They have two minutes to break it. One bug on a sticky.','Do NOT merge. Live hacking is next, then the gate.'], { x:7.25, y:1.95, w:5.38, h:3.2, size:12 });
card(s, M, 4.75, 6.3, 0.85, { fill:CARD2, accent:ORANGE });
text(s, 'Test it where your customers will use it: on a phone, on a preview, before it is real.', M+0.25, 4.85, 5.85, 0.65, { size:12, color:INK, valign:'middle' });
stickyRule(s);
lifecycle(s, 'BUILD');

// 21 Watch the mistake
s = slide({ notes:'1:35–2:00. While Claude works on the projector, narrate. When it does something surprising, that is the lesson. Wrong file, an unrequested refactor, a broken build: I diagnose it out loud. Close the PR, roll back, point at plan mode. The real risk in this room is not the AI making a mistake. It is me going ten times your speed with slides instead of twice your speed with a keyboard.' });
blockHeader(s, 5, 'Build the one thing', 25, 'demo'); timeChip(s, '1:35 – 2:00');
s.addImage({ path:ASSETS+'art-loop.jpg', x:W-M-4.0, y:1.6, w:4.0, h:4.0 });
title(s, 'Watch the mistake. That is the lesson.', { w:7.5 });
body(s, ['I build mine live, at about twice your speed, on purpose.','When Claude gets it wrong on my screen: good. That is what you got stuck on at home.','The moves, in order: read what it did → paste the error back → “fix it, do not change the test” → if it wanders, close the PR and start the branch again.','Nothing it does on a branch can touch your live site.'], { y:2.25, w:7.3, h:3.4, size:13.5, bullets:true, gap:8, color:INK });
lifecycle(s, 'BUILD');

// H1 Live hacking, sprint one
s = slide({ notes:'2:00–2:20. First sprint. They have a working page on the my-tool branch and a preview URL; now it becomes theirs. Twenty minutes, their keyboard. I hack on my own tool on the projector at the same time and narrate only when something goes wrong, because that is the part they cannot get from a slide. Rules that matter: stay on the branch, one change per prompt, look at the preview before the next prompt, and if a change alters what the form does, spec.md changes first, because the test in the next block is written from the spec. Nobody merges. Helpers: anyone without a preview URL at 2:00 re-templates from checkpoint-3-tool and hacks from there. At 2:17 call time: commit and push whatever works; close the PR on anything that does not.' });
hackHeader(s, 1, '2:00 – 2:20');
title(s, 'Live hacking, sprint one. Make it yours, on the branch.');
card(s, M, 1.95, 5.9, 2.75, { fill:CARD, accent:BLUE });
label(s, 'The rules', M+0.25, 2.1, 5.4);
body(s, ['Stay on the my-tool branch. Nothing you do here can touch your live site.','One change per prompt. Open the preview before you ask for the next one.','Changing what the form does? Change spec.md first. The spec is the contract.','Do NOT merge. The gate is the next block.'], { x:M+0.25, y:2.45, w:5.4, h:2.2, size:12, bullets:true, gap:6, color:INK });
card(s, 6.85, 1.95, 5.78, 2.75, { fill:CARD, accent:ORANGE });
label(s, 'Pick one from the menu', 7.1, 2.1, 5.3);
body(s, ['Your real columns and your real prices, from the spreadsheet you brought','One calculated field: a total, a margin, a due date','Your business name, colours and logo','The “what must never happen” line from your spec, enforced on the form'], { x:7.1, y:2.45, w:5.3, h:2.2, size:12, bullets:true, gap:6, color:INK });
card(s, M, 4.9, W-2*M, 0.95, { fill:CARD2, line:LINE });
text(s, 'I hack on mine on the projector while you hack on yours. When it goes wrong up here, stop and watch: read what it did, paste the error back, and close the pull request if it wanders.', M+0.25, 4.98, W-2*M-0.5, 0.8, { size:12, color:INK, valign:'middle' });
stickyRule(s);
lifecycle(s, 'BUILD');

// 22 Test = the gate
s = slide({ notes:'2:20–2:45. Anthropic’s own line for working with Claude Code: give it a check it can run. Tests, a build, a screenshot. If you cannot verify it, do not ship it. Your spec already has the check: the last heading, how we know it works. That sentence becomes one automated test, and GitHub runs it on every push and every pull request, for free, whether or not you remember. That is most of what a development lifecycle is.' });
blockHeader(s, 6, 'Test is the gate', 25, 'hands-on'); timeChip(s, '2:20 – 2:45');
title(s, 'If you can’t verify it, don’t ship it.');
sub(s, 'Anthropic’s own guidance for Claude Code: give it a check it can run.', { y:1.7 });
const chk = [['Tests','One check that does what your spreadsheet does. Runs on every push.'],['Build','Does it compile? Vercel refuses to deploy if not.'],['Screenshot','Does it look like the spec? Claude can compare.']];
chk.forEach((c,i)=>{ const x=M+i*4.02; card(s, x, 2.4, 3.85, 1.6, { fill:CARD, accent:GREEN }); head(s, c[0], x+0.25, 2.58, 3.4, { size:16 }); text(s, c[1], x+0.25, 3.0, 3.4, 0.9, { size:11.5 }); });
card(s, M, 4.25, W-2*M, 1.4, { fill:CARD2, accent:ORANGE });
label(s, 'You already wrote the test', M+0.25, 4.4, 5);
text(s, 'The last heading in spec.md, “How we know it works,” is the test. Playwright turns that sentence into a check. GitHub Actions runs it on every pull request. 2,000 free minutes a month; unlimited on public repos.', M+0.25, 4.7, W-2*M-0.5, 0.9, { size:12.5, color:INK });
lifecycle(s, 'TEST');

// 23 Test exercise
s = slide({ notes:'2:20–2:45. The check goes yellow, then green or red, on the my-tool PR you left open. If red, paste the failure to Claude and say fix the code so the test passes, do not change the test. That last clause matters: an AI will happily make a test pass by deleting the test. When it is green, merge. Now your tool is live, and it went live through a gate. If Playwright’s browser download stalls on the Wi-Fi, checkpoint-4-tests already has the test and the workflow written.' });
blockHeader(s, 6, 'Test is the gate', 25, 'hands-on'); timeChip(s, '2:20 – 2:45');
title(s, 'One test, from your spec. Then the merge waits for green.');
promptCard(s, 'Add Playwright to this project. Write ONE test that loads my-tool, fills in the form with the example under “How we know it works” in spec.md, submits it, and checks that the result described under “What comes out” appears. Add the GitHub Actions workflow so the test runs on every push and pull request to main. Run the test locally and show me the output. Commit and push to the my-tool branch.', M, 1.95, 6.3, 2.75);
steps(s, ['Type the prompt. Push. Open the my-tool PR on github.com.','Watch the check: yellow, then green or red.','Red? Paste the failure and say: “Fix the code so the test passes. Do not change the test.”','Green? Merge. Your tool is live, and it went through a gate. Green sticky.'], { x:7.25, y:1.95, w:5.38, h:3.0, size:12 });
card(s, M, 4.9, 6.3, 0.75, { fill:CARD2, accent:RED });
text(s, '“Do not change the test.” An AI will happily pass a test by deleting it.', M+0.25, 4.95, 5.85, 0.65, { size:11.5, color:INK, valign:'middle' });
stickyRule(s);
lifecycle(s, 'TEST');

// 24 Break it on purpose
s = slide({ notes:'2:20–2:45. Now the part that makes the gate real. Break it on purpose. A branch called break-it that renames a form field label. Push, open the PR, and watch the red X. Do not merge. Close the PR. A red X on a pull request is the cheapest bug you will ever find. The red one you just made on purpose is what a production incident looks like when nobody has this. Everyone should have seen one green and one red on their own repo before lunch.' });
blockHeader(s, 6, 'Test is the gate', 25, 'hands-on'); timeChip(s, '2:20 – 2:45');
title(s, 'Now break it on purpose, and watch the gate close.');
promptCard(s, 'On a new branch called break-it, rename the first form field label to something else. Commit, push, and open a pull request.', M, 1.95, 5.9, 1.7);
steps(s, ['Type the prompt. Open the PR.','Watch the check turn red. Do not merge.','Close the pull request. The live site never saw it.','Green sticky when you have seen one green and one red check on your own repository.'], { x:6.85, y:1.95, w:5.78, h:2.6, size:12 });
card(s, M, 3.95, W-2*M, 1.65, { fill:CARD2, line:ORANGE, lw:1 });
text(s, 'A red X on a pull request is the cheapest bug you will ever find.', M+0.3, 4.1, W-2*M-0.6, 0.7, { size:20, color:INK });
text(s, 'The one you just made on purpose is what a production incident looks like when nobody has this. Later, if you want it as a hard gate: Vercel Deployment Checks can refuse to promote a build until this check passes. Confirm it is on your plan before relying on it.', M+0.3, 4.8, W-2*M-0.6, 0.75, { size:11 });
stickyRule(s);
lifecycle(s, 'TEST');

// 25 Dependencies age
s = slide({ notes:'2:20–2:45. One more reason the check matters: code ages. In May 2026, Next.js, the framework almost every AI tool writes, shipped a high-severity fix for a login bypass in middleware. The advisory’s own workaround is to check login in the page, not only in middleware. On your own Vercel project, Vercel now refuses to deploy versions with a known-bad Next.js from the December 2025 advisory. A hosted sandbox may not. Monthly chore, on the calendar: ask Claude to run npm audit and update. Two minutes.' });
blockHeader(s, 6, 'Test is the gate', 25, 'talk'); timeChip(s, '2:20 – 2:45');
title(s, 'Code ages. Put one chore on the calendar.');
card(s, M, 1.95, 5.9, 3.65, { fill:CARD, accent:RED });
label(s, 'May 6, 2026 · Next.js · CVE-2026-44575 · High', M+0.25, 2.1, 5.4);
text(s, 'A login check that only lives in middleware could be bypassed. Patched in 15.5.16 and 16.2.5. The advisory’s own workaround: enforce authorization in the page or route, not middleware alone.', M+0.25, 2.45, 5.4, 1.6, { size:12, color:INK });
text(s, 'Since Dec 2025, Vercel automatically fails deployments of Next.js versions vulnerable to CVE-2025-66478. Owning the Vercel project means the host refuses known-bad code for you.', M+0.25, 4.1, 5.4, 1.4, { size:11 });
promptCard(s, 'Run npm audit. Update Next.js and any dependency with a known vulnerability to a safe version. Run the build and the Playwright test. Open a pull request with what changed and why.', 6.85, 1.95, 5.78, 2.3, { label:'THE MONTHLY CHORE · FIRST OF THE MONTH · TWO MINUTES' });
card(s, 6.85, 4.45, 5.78, 1.15, { fill:CARD2, line:LINE });
text(s, 'Green check, merge, done. That is what maintenance looks like when a test exists.', 7.1, 4.6, 5.3, 0.85, { size:12.5, color:INK, valign:'middle' });
lifecycle(s, 'MONITOR');

// 26 Lunch (replaces the workshop's second break)
s = slide({ notes:'2:45–3:15. Thirty minutes. Every tool should be merged and live, and it went live through a green check. Anyone who is not merged eats with a helper: the first block after lunch rolls production back, and you cannot roll back what you have not shipped. Helpers: anyone without a merged my-tool gets checkpoint-4-tests. Read the break-one stickies again over lunch and decide whether the afternoon needs a five-minute re-teach at 3:15.' });
eyebrow(s, 'Lunch · 30 minutes'); timeChip(s, '2:45 – 3:15');
title(s, 'Lunch. Your tool is live, and it went through a gate.');
text(s, 'Not merged yet? Find a helper before you find a sandwich. The afternoon starts by breaking production on purpose, and you cannot roll back what you have not shipped.', M, 2.2, W-2*M, 1, { size:16, color:INK });
text(s, 'After lunch: rollback, secrets, review. Then a database, a second sprint, an email alert, the bill, a skill, and a demo. Back at 3:15.', M, 3.45, W-2*M, 0.8, { size:13 });
lifecycle(s);

// 27 Rollback
s = slide({ notes:'3:15–3:35. Rollback is the feature nobody in the builders showed you: one click and yesterday’s site is back. I want you to see it work on your own project. Three gotchas that strand beginners, all on the cheat sheet: the first deploy is always production; on the free Hobby plan Instant Rollback only reaches the immediately previous deployment, Pro reaches any; and after a rollback, new merges do not go live until you click Undo Rollback. The exercise includes the Undo step so nobody leaves with a frozen site.' });
blockHeader(s, 7, 'Ship and own it', 20, 'hands-on'); timeChip(s, '3:15 – 3:35');
title(s, 'Break production on purpose. Put it back in one click.');
promptCard(s, 'On a new branch called oops, change the headline on the home page to OOPS. Commit, push, and open a pull request.', M, 1.95, 5.9, 1.55);
steps(s, ['Merge the oops PR. Confirm OOPS is live on your production URL. Feel that for a second.','In Vercel: Deployments → the previous deployment → Instant Rollback. Refresh the site. Fixed.','Click Undo Rollback, or nothing you merge later goes live.','Tell Claude: “Put the headline back on a branch, push, open a PR.” Merge it. Green sticky.'], { x:6.85, y:1.95, w:5.78, h:2.7, size:12 });
card(s, M, 3.75, 5.9, 1.85, { fill:CARD2, accent:ORANGE });
label(s, 'Three gotchas, all on the cheat sheet', M+0.25, 3.88, 5.4);
body(s, ['The first deploy on a project is always production.','Hobby rolls back one deployment. Pro rolls back to any.','After a rollback, nothing goes live until Undo Rollback.'], { x:M+0.25, y:4.18, w:5.4, h:1.4, size:11, bullets:true, gap:3 });
stickyRule(s);
lifecycle(s, 'SHIP');

// 28 Secrets
s = slide({ notes:'3:15–3:35. Live demo, on MY deliberately broken demo repo, never a stranger’s app: open DevTools on the site, search the JavaScript for sk_ or supabase. There is the key, sitting in the browser where anyone can read it. Escape.tech did exactly this, read-only, across 5,600 live vibe-coded apps: 400-plus exposed secrets, 2,000-plus high-impact vulnerabilities, medical records, bank accounts. Where keys go instead: .env.local, which the starter already ignores, and Vercel environment variables, encrypted, scoped to Production, Preview, or Development, marked Sensitive. Leave your real keys in your password manager today; the exercise uses a placeholder.' });
blockHeader(s, 7, 'Ship and own it', 20, 'hands-on'); timeChip(s, '3:15 – 3:35');
title(s, 'The thing almost every vibe-coded app ships with: a key in the browser.', { size:23 });
card(s, M, 1.95, 5.9, 2.15, { fill:CARD, accent:RED });
label(s, 'Escape.tech, Oct 2025 · read-only scan of the front-end code', M+0.25, 2.1, 5.4);
bigStat(s, M+0.25, 2.4, 1.9, '5,600', 'live apps scanned', { size:26, lsize:10 });
bigStat(s, M+2.15, 2.4, 1.9, '400+', 'exposed secrets', { size:26, lsize:10 });
bigStat(s, M+4.0, 2.4, 1.8, '2,000+', 'high-impact holes', { size:26, lsize:10 });
card(s, M, 4.3, 5.9, 1.3, { fill:CARD2, line:LINE });
text(s, 'Where keys live: .env.local on your laptop (already ignored by git in the starter) and Vercel → Settings → Environment Variables, scoped to Production / Preview / Development, marked Sensitive.', M+0.25, 4.4, 5.4, 1.1, { size:11, color:INK });
promptCard(s, 'Confirm .env.local is listed in .gitignore. Search the whole project for anything that looks like an API key, token, or password and list every place you find one. Move any real value into an environment variable and tell me which Vercel environment it belongs in.', 6.85, 1.95, 5.78, 2.35);
steps(s, ['Type the prompt. Read the list.','Vercel → Settings → Environment Variables → add DEMO_KEY = not-a-real-key, scope Production, tick Sensitive.','Real keys stay in your password manager today.'], { x:6.85, y:4.45, w:5.78, h:1.2, size:11, gap:4 });
lifecycle(s, 'REVIEW');

// 29 Fresh reader review
s = slide({ notes:'3:15–3:35. Whoever wrote it does not review it. That rule holds for people and it holds for the model, so we ask a fresh Claude to read what the first one wrote. Slash code-review runs in a fresh session, reads the diff, and lists what it found. Fix the one that matches the bug your partner wrote on the sticky in the build block. And the line for the database you add in the next block: Supabase’s own docs say a table without Row Level Security is readable and writable by any role. That one checkbox is the Lovable CVE, Moltbook, and RedAccess. The prompt is in the next block.' });
blockHeader(s, 7, 'Ship and own it', 20, 'hands-on'); timeChip(s, '3:15 – 3:35');
title(s, 'Whoever wrote it does not review it. Same rule for people and models.');
promptCard(s, '/code-review', M, 1.95, 5.9, 1.2, { label:'IN A FRESH CLAUDE SESSION, ON YOUR MERGED my-tool CHANGE', size:16 });
steps(s, ['Read the top three findings out loud to your partner.','Fix the one that matches the bug on their sticky from the build block. Branch, PR, green check, merge.','Green sticky when the fix is live.'], { x:M, y:3.35, w:5.9, h:1.6, size:12 });
card(s, 6.85, 1.95, 5.78, 3.65, { fill:CARD2, accent:ORANGE });
label(s, 'For the database you add in the next block', 7.1, 2.1, 5.3);
text(s, '“A table without Row Level Security is readable and writable by any role.”', 7.1, 2.45, 5.3, 0.9, { size:14, color:INK });
text(s, 'Supabase’s own docs. That one unchecked box is the Lovable CVE (May 2025), Moltbook (Feb 2026), and RedAccess (May 2026). If you pick Supabase, the prompt: “enable RLS on every table and write policies so users only see their own rows.” Then read the policy out loud.', 7.1, 3.4, 5.3, 2.1, { size:11 });
stickyRule(s);
lifecycle(s, 'REVIEW');

// D1 Give it a memory (concept)
s = slide({ notes:'3:35–4:05. Thirty minutes, the longest afternoon block, and the one that turns a demo into a tool. Until now the rows were the starter’s sample data and they vanish on refresh. The database is created from inside their own Vercel project, so the account, the data, and the bill are theirs. Neon is plain Postgres on a free tier that sleeps when idle and wakes on the next request. Vercel writes the connection string into the project’s environment variables as DATABASE_URL, which is the secrets lesson from twenty minutes ago paying off: nobody ever sees the string in a file. If someone insists on Supabase, same steps plus the Row Level Security rule from the review slide, and that is not optional. VERIFY BEFORE STAGE: click through Vercel → Storage → Create Database → Neon on a fresh Hobby account the day before; the Marketplace flow and the variable names change. Dry-run this whole block end to end on the starter repo, including the test in GitHub Actions.' });
blockHeader(s, 8, 'Give it a memory', 30, 'hands-on'); timeChip(s, '3:35 – 4:05');
title(s, 'Sample data forgets. A database in your account remembers.');
const dbc = [['Your database','Neon Postgres, created from inside your Vercel project. Free tier. It sleeps when idle and wakes on the next request.'],['Your connection string','Vercel stores it as DATABASE_URL in your environment variables. It never appears in the code. You learned why twenty minutes ago.'],['Your exit','It is plain Postgres. Any host can run it, and every row exports when you say so.']];
dbc.forEach((c,i)=>{ const x=M+i*4.02; card(s, x, 1.95, 3.85, 2.3, { fill:CARD, accent: i===2?ORANGE:BLUE }); head(s, c[0], x+0.25, 2.15, 3.4, { size:16 }); text(s, c[1], x+0.25, 2.6, 3.4, 1.6, { size:11.5 }); });
card(s, M, 4.5, W-2*M, 1.2, { fill:CARD2, accent:RED });
label(s, 'Picking Supabase instead', M+0.25, 4.62, 6);
text(s, 'Same steps, one more rule: enable Row Level Security on every table before anything goes live. That unchecked box is the Lovable CVE, Moltbook, and RedAccess.', M+0.25, 4.92, W-2*M-0.5, 0.7, { size:12.5, color:INK });
lifecycle(s, 'BUILD');

// D2 Give it a memory (exercise)
s = slide({ notes:'3:35–4:05. Participatory again: I do it on the projector, they do it on theirs. The Vercel clicks come first so DATABASE_URL exists before Claude goes looking for it. Plan mode first, because this is the first change that touches more than one file. The prompt makes Claude say out loud whether the test needs the database and which GitHub secret to add; if it does, that is Settings → Secrets and variables → Actions on github.com, pasted straight from Vercel, never through the chat. Proof is on the phone: add a row on the preview, refresh, still there. Helpers: anyone stuck at 3:55 takes checkpoint-5-database, connects the database in Vercel, and redeploys. VERIFY BEFORE STAGE: for a class it is acceptable that preview and production share one database; say so, and put “separate preview database” on their Monday list if they will hold customer data.' });
blockHeader(s, 8, 'Give it a memory', 30, 'hands-on'); timeChip(s, '3:35 – 4:05');
title(s, 'Create the database in Vercel. Let Claude move the rows in.');
promptCard(s, 'Read spec.md. Use plan mode first. On a new branch called add-database, replace the sample data in my-tool with a Postgres table, using the DATABASE_URL environment variable that Vercel provides. Create the table if it does not exist. Never put the connection string in the code or in any file that git tracks. Keep the Playwright test passing; if the test needs the database, tell me exactly which secret to add in GitHub and where. Commit, push, and open a pull request.', M, 1.95, 6.3, 3.0);
steps(s, ['Vercel → your project → Storage → Create Database → Neon. Take the free plan. Connect it to Production and Preview.','Settings → Environment Variables: DATABASE_URL is there, and you never saw it in a file.','Type the prompt. Read the plan: one table, the columns in your spec.','Open the preview on your PHONE. Add a row. Refresh. Still there.','Green check, merge, add one row on production. Green sticky.'], { x:7.25, y:1.95, w:5.38, h:3.5, size:11.5 });
card(s, M, 5.15, 6.3, 0.75, { fill:CARD2, accent:ORANGE });
text(s, 'Behind at 3:55? Ask a helper for checkpoint-5-database.', M+0.25, 5.2, 5.85, 0.65, { size:12, color:INK, valign:'middle' });
stickyRule(s);
lifecycle(s, 'BUILD');

// H2 Live hacking, sprint two
s = slide({ notes:'4:05–4:25. Second sprint, and the rule changes: every change goes through the gate. New branch, pull request, preview, green check, merge. The habit I want them to leave with is the one in the prompt: a new feature is one new sentence under “How we know it works” in spec.md and one more check in the test. CSV export is on the menu on purpose; it is the ownership lesson in one button. I hack on the projector again and deliberately let one check go red so they see me fix the code, not the test. Anyone whose database block did not land spends this sprint on that with a helper instead. At 4:22 call time: merge what is green, close what is not.' });
hackHeader(s, 2, '4:05 – 4:25');
title(s, 'Live hacking, sprint two. Every change goes through the gate.');
card(s, M, 1.95, 5.9, 2.35, { fill:CARD, accent:BLUE });
label(s, 'The rules', M+0.25, 2.08, 5.4);
body(s, ['A new branch for each feature. Pull request, preview, green check, merge.','One new sentence in spec.md, one new check in the test. Never loosen a test to get green.','Stuck for five minutes? Red sticky. Close the pull request and start the branch again.','A merge broke the live site? Roll back. Then Undo Rollback.'], { x:M+0.25, y:2.4, w:5.4, h:1.85, size:11.5, bullets:true, gap:4, color:INK });
card(s, 6.85, 1.95, 5.78, 2.35, { fill:CARD, accent:ORANGE });
label(s, 'Pick one from the menu', 7.1, 2.08, 5.3);
body(s, ['Edit and delete a row','Search or filter the table','Export to CSV: your data leaves when you say so','Totals by month, by customer, or by job'], { x:7.1, y:2.4, w:5.3, h:1.85, size:12, bullets:true, gap:5, color:INK });
promptCard(s, 'On a new branch called [feature-name], add [one feature] to my-tool. Add one sentence for it under “How we know it works” in spec.md, and extend the Playwright test to check that sentence. Run the build and the tests. Commit, push, and open a pull request.', M, 4.5, W-2*M, 1.45, { label:'THE SPRINT PROMPT · FILL IN THE BRACKETS' });
stickyRule(s);
lifecycle(s, 'TEST');

// B2 Break two
s = slide({ notes:'4:25–4:35. Ten minutes and the same two stickies as the morning: one thing learned since lunch, one thing still confusing. These decide whether Own it gets trimmed for a re-teach. Helpers: anyone without a working database takes checkpoint-5-database now, because the email block writes on top of it.' });
eyebrow(s, 'Break two · 10 minutes'); timeChip(s, '4:25 – 4:35');
title(s, 'Ten minutes. Two stickies on the front table again.');
card(s, M, 2.1, 5.9, 2.2, { fill:CARD, accent:GREEN }); head(s, 'One thing you learned since lunch', M+0.3, 2.35, 5.3, { size:18 }); text(s, 'On the green one.', M+0.3, 2.85, 5.3, 0.5, { size:13 });
card(s, 6.85, 2.1, 5.78, 2.2, { fill:CARD, accent:RED }); head(s, 'One thing still confusing', 7.15, 2.35, 5.3, { size:18 }); text(s, 'On the red one. I read them all and change the last ninety minutes if you tell me to.', 7.15, 2.85, 5.3, 0.9, { size:13 });
text(s, 'No database yet? Ask a helper for checkpoint-5-database now. The next block builds on it. Back at 4:35.', M, 4.7, W-2*M, 0.5, { size:14, color:INK });
lifecycle(s);

// E1 Hear about it (concept)
s = slide({ notes:'4:35–4:55. Monitor is the sixth word and the one everybody skips. The spec example this morning ended with “and I get the email,” so we build that line. Resend’s free tier is 100 emails a day. Until the domain is verified, which needs DNS and is on the Monday list, Resend only delivers to the address on the account, which is exactly what an owner alert needs. Logs: Vercel shows every request and error, and Hobby keeps one hour, so look the same day. Sentry I add live on my own tool in two minutes with one prompt so they see it done; they do it Monday. VERIFY BEFORE STAGE: confirm Resend’s free-tier limit and the send-to-own-address restriction on resend.com the day before, and confirm the onboarding@resend.dev sender still works for unverified accounts.' });
blockHeader(s, 9, 'Hear about it', 20, 'hands-on'); timeChip(s, '4:35 – 4:55');
title(s, 'Your spec said “and I get the email.” Build that line.');
const hr = [['An email when it matters','Resend, free tier, 100 emails a day. One API key, stored as an environment variable. Until you verify your domain on Monday, it delivers to your own address only.'],['Logs when it breaks','Vercel → Logs shows every request and every error. Hobby keeps one hour, so look the same day.'],['Alerts before the customer calls','Sentry Developer, $0, 5,000 errors a month. I add it live on the projector. You add it Monday with the same prompt.']];
hr.forEach((c,i)=>{ const x=M+i*4.02; card(s, x, 1.95, 3.85, 2.5, { fill:CARD, accent: i===0?ORANGE:BLUE }); head(s, c[0], x+0.25, 2.15, 3.4, { size:15 }); text(s, c[1], x+0.25, 2.6, 3.4, 1.8, { size:11.5 }); });
card(s, M, 4.7, W-2*M, 0.95, { fill:CARD2, line:LINE });
text(s, 'Monitor is the sixth word in the lifecycle. Today it is one email and one log page. That is enough to hear about a problem before your customer tells you.', M+0.25, 4.78, W-2*M-0.5, 0.8, { size:12.5, color:INK, valign:'middle' });
lifecycle(s, 'MONITOR');

// E2 Hear about it (exercise)
s = slide({ notes:'4:35–4:55. Second time through the secrets drill, and this time the key is real. The move I am teaching is the path the key takes: from Resend’s page to Vercel’s environment variable form, and nowhere else. Not the chat, not the code, not a notes file. The prompt tells Claude the test must not send real email, because an AI will happily mail you on every push. Save-the-row-even-if-the-email-fails is the first piece of real error handling they have asked for; point at it. Helpers: checkpoint-6-email for anyone behind at 4:50, and they still add their own key in Vercel.' });
blockHeader(s, 9, 'Hear about it', 20, 'hands-on'); timeChip(s, '4:35 – 4:55');
title(s, 'One key, one environment variable, one email to yourself.');
promptCard(s, 'On a new branch called notify-me, when the my-tool form is submitted, send an email to [my email address] with what was entered. Use Resend with the RESEND_API_KEY environment variable, sending from onboarding@resend.dev. If the email fails, still save the row and log the error. Never put the key in the code. The Playwright test must not send real email. Commit, push, and open a pull request.', M, 1.95, 6.3, 2.85);
steps(s, ['resend.com → sign up with the address you want alerts at → API Keys → Create. Copy it once.','Vercel → Settings → Environment Variables → RESEND_API_KEY, Production and Preview, tick Sensitive. Paste. Close the Resend tab.','Type the prompt. Open the preview, submit the form, check your inbox.','Green check, merge, submit once on production. Green sticky when the email lands.'], { x:7.25, y:1.95, w:5.38, h:3.3, size:11.5 });
card(s, M, 5.0, 6.3, 0.85, { fill:CARD2, accent:RED });
text(s, 'The key goes from Resend to Vercel. It never goes into the chat, the code, or a file.', M+0.25, 5.05, 5.85, 0.75, { size:12, color:INK, valign:'middle' });
stickyRule(s);
lifecycle(s, 'MONITOR');

// 30 The bill
s = slide({ notes:'4:55–5:10. The bill, vendor numbers as of September 7. Left column is yours. A .com is ten to twelve dollars: $11.25 inside Vercel, which also skips the DNS step; Porkbun $11.08 and renews at the same price. Watch the $6.98-then-$15.88 first-year bait. Verisign raises .com wholesale about 71 cents on November 1, so renewals tick up. Vercel Hobby is free but non-commercial; Pro is $20 and includes $20 of usage and a terabyte of transfer. GitHub, database, email, error tracking: zero. Claude Pro $20, or ChatGPT Plus $20 gives you Codex. Right column: Lovable Pro $25, Bolt Pro $25 to get export and a domain, Replit Core $20 plus metered hosting since August, Base44 Builder $50 a month just to get GitHub sync. The math is not close, and the right column still does not own the runtime.' });
blockHeader(s, 10, 'Own it', 15, 'talk'); timeChip(s, '4:55 – 5:10');
title(s, 'The bill. Vendor prices, checked September 7, 2026.');
table(s, [['YOURS','PRICE','NOTE'],['.com domain','$10–12 / yr','$11.25 in Vercel (no DNS step). Porkbun $11.08, same on renewal. Wholesale +$0.71 on Nov 1.'],['Vercel','$0 or $20 / mo','Hobby is free, non-commercial. Pro $20 includes $20 usage credit + 1 TB transfer.'],['GitHub','$0','Unlimited private repos. 2,000 Actions minutes.'],['Database','$0','Neon Free (wakes on request) or Supabase Free (pauses after 7 idle days; Pro $25).'],['Email · errors','$0','Resend 100/day. Sentry Developer 5k errors/mo.'],['The AI you build with','$20 / mo','Claude Pro → Claude Code. Or ChatGPT Plus → Codex. Cancel any time.']], M, 1.95, [2.0, 1.35, 3.9], { size:9.5, rowH:0.5 });
table(s, [['THE BUILDERS','PRICE','WHAT YOU STILL DON’T OWN'],['Lovable Pro','$25 / mo','The backend. No one-click migration off Lovable Cloud; secrets never export.'],['Bolt Pro','$25 / mo','Needed for export and a domain. Version history and the bolt.host URL stay.'],['Replit Core','$20 + metered','Hosting usage-billed since Aug 2026. Cancel: “published apps may go offline.”'],['Base44 Builder','$50 / mo','The tier where GitHub sync begins. Backend functions need Base44’s runtime.']], 8.05, 1.95, [1.55, 1.05, 2.03], { size:9.5, rowH:0.5 });
text(s, 'Most sites: $20 a month, max, plus a domain. And every line on the left is an account with your name on it.', M, 5.55, W-2*M, 0.5, { size:13, color:INK });
lifecycle(s);

// 31 Vercel commercial rule
s = slide({ notes:'4:55–5:10. I will be straight about Vercel’s rule, because it is the one place my Part One cost slide was too generous. Hobby is free for personal, non-commercial use, and Vercel defines commercial broadly: any financial gain for anyone involved, including receiving payment to create, update, or host the site, and including ads. So a marketer building for a client is on Pro from day one. That is still the $20 I promised. Two things to do the day you go Pro: turn on spend management and set the notification lower than the $200 default. And the free first-year domain on .app, .dev, or .site is a nice bonus; .com is not included.' });
blockHeader(s, 10, 'Own it', 15, 'talk'); timeChip(s, '4:55 – 5:10');
title(s, 'The honest line on “free”: budget $20 the day the site is real.');
quoteCard(s, 'Commercial usage… includes receiving payment to create, update, or host the site, and the inclusion of advertisements.', 'Vercel fair-use guidelines, paraphrased from the Hobby plan docs (updated Aug 31, 2026)', { y:1.95, h:2.2, size:16 });
const vp = [['Hobby, $0','Personal, non-commercial. Exceed a limit and, in most cases, you wait 30 days. Rollback reaches one deployment back.'],['Pro, $20 / mo','$20 usage credit and 1 TB transfer included. Rollback to any deployment. One free first-year .app / .dev / .site domain.'],['Day one on Pro','Turn on spend management. Lower the notification from the $200 default. Nobody gets a surprise bill from a bot storm.']];
vp.forEach((v,i)=>{ const x=M+i*4.02; card(s, x, 4.35, 3.85, 1.3, { fill:CARD, accent: i===2?ORANGE:BLUE }); head(s, v[0], x+0.22, 4.47, 3.4, { size:13 }); text(s, v[1], x+0.22, 4.82, 3.45, 0.8, { size:10 }); });
lifecycle(s);

// 32 Rent vs own matrix
s = slide({ notes:'4:55–5:10. I want to be fair to these companies. In 2026 the front-end code exports from almost every builder, so “you can’t get your code out” is no longer a true sentence. Read the columns: ZIP or GitHub, which direction the sync goes, which plan unlocks it, whether the backend comes with you, and what happens to the site when you stop paying. Lovable keeps your site and domain live after cancel. v0’s code is plain Next.js and Vercel says it does not own it. Base44 needs the $50 tier for GitHub and its backend functions only run on Base44. Replit says published apps may go offline. Firebase Studio: Google ended it.' });
blockHeader(s, 10, 'Own it', 15, 'talk'); timeChip(s, '4:55 – 5:10');
title(s, 'Rent versus own, tool by tool. The code is rarely the hostage.');
table(s, [['TOOL','EXPORT','GITHUB SYNC','PLAN GATE','BACKEND PORTABLE?','CANCEL → SITE STAYS UP?'],
 ['Lovable','ZIP (paid) · GitHub','Two-way, one branch','All plans','No. Cloud data exports; secrets and functions do not','Yes, site and domains stay live'],
 ['v0 (Vercel)','ZIP · GitHub','Branch + PR flow','Free','Plain Next.js. Nothing proprietary','n/a, it is your Vercel'],
 ['Bolt','GitHub (Pro)','Two-way, polls every 30s','Pro $25','Rows, logins, uploads, secrets stay','Not stated'],
 ['Replit','ZIP · GitHub panel','Push / pull','Any','DB, auth, secrets are Replit’s','“Published apps may go offline”'],
 ['Base44 (Wix)','GitHub (Builder)','Two-way, main only','Builder $50','Functions need Base44’s runtime','“Apps stay live,” no detail'],
 ['Google AI Studio','ZIP · GitHub','Two-way, conflict UI','Free','Standard React + Node on Cloud Run','Deployed apps keep running'],
 ['Firebase Studio','GitHub, one-way','Publish branch','Free','Ends Mar 22, 2027. Data deleted.','Product is being shut down']],
 M, 1.95, [1.55, 1.55, 1.85, 1.2, 3.05, 2.73], { size:9, hsize:8, rowH:0.44 });
text(s, 'Three questions before your next builder: which pricing row says GitHub, which doc says which way sync goes, and what happens on cancel. If any answer is missing, assume the worst.', M, 5.6, W-2*M, 0.5, { size:11, color:INK });
lifecycle(s);

// 33 The hostages
s = slide({ notes:'4:55–5:10. The code was never the hostage. Your data, your logins, your secrets, your domain, your version history: that is where people got stuck, and it is exactly what the export button leaves behind. Everything you built today sits in accounts with your name on them. Google launched Firebase Studio in April 2025, announced the sunset in March 2026, closed signups in June, and deletes everything on March 22, 2027. Users whose code was in GitHub and whose app was on their own host lost nothing. Your repo does not care.' });
blockHeader(s, 10, 'Own it', 15, 'talk'); timeChip(s, '4:55 – 5:10');
title(s, 'The code was never the hostage.');
const host = ['Your data','Your logins','Your secrets','Your domain','Your history'];
host.forEach((h,i)=>{ const x=M+i*2.42; card(s, x, 2.0, 2.3, 1.1, { fill:CARD, accent:RED }); text(s, h, x, 2.0, 2.3, 1.1, { size:15, color:INK, bold:true, align:'center', valign:'middle' }); });
text(s, 'These are what the export button leaves behind, and what you moved into your own accounts today.', M, 3.25, W-2*M, 0.5, { size:12.5 });
card(s, M, 3.95, W-2*M, 1.7, { fill:CARD2, accent:ORANGE });
label(s, 'Even Google', M+0.25, 4.1, 4);
text(s, 'Firebase Studio: launched Apr 10, 2025 · sunset announced Mar 19, 2026 · signups closed Jun 22, 2026 · all remaining data permanently deleted Mar 22, 2027.', M+0.25, 4.4, W-2*M-0.5, 0.6, { size:12.5, color:INK });
text(s, 'Anyone whose code was in GitHub and whose app ran on their own host lost nothing. Your repo does not care which editor goes out of business.', M+0.25, 5.0, W-2*M-0.5, 0.6, { size:11.5 });
lifecycle(s);

// 34 Exit doors
s = slide({ notes:'4:55–5:10. And the exit door from Vercel itself, so nobody thinks I traded one landlord for another. Netlify: free is 300 credits a month with a hard cap, a production deploy is 15 credits, and when they are gone every site shows “Site not available”; $9 Personal fixes that. Cloudflare: static asset requests are free and unlimited on any plan, and they now steer new sites to Workers rather than Pages; Workers Paid is $5. Either way the code is in GitHub, so moving hosts is a ten-minute reconnect, not a migration.' });
blockHeader(s, 10, 'Own it', 15, 'talk'); timeChip(s, '4:55 – 5:10');
title(s, 'And if Vercel ever annoys you: the code is in GitHub. Moving is a reconnect.');
const ed = [['Netlify','Free: 300 credits / month, hard cap. A production deploy is 15 credits; when they run out, every site shows “Site not available.” Personal $9 / mo.'],['Cloudflare Workers','Static asset requests free and unlimited on any plan. Cloudflare now steers new sites to Workers, not Pages. Workers Paid $5 / mo minimum.'],['Anywhere else','The repo is the product. Connect a new host to GitHub, push, done. Compare that to leaving a builder.']];
ed.forEach((e,i)=>{ const x=M+i*4.02; card(s, x, 2.0, 3.85, 2.6, { fill:CARD, accent: i===2?ORANGE:BLUE }); head(s, e[0], x+0.25, 2.2, 3.4, { size:16 }); text(s, e[1], x+0.25, 2.65, 3.4, 1.9, { size:11 }); });
text(s, 'Ownership all the way down: files on your laptop, history in your GitHub, a site on whichever host you pick this year, a domain with your name on it.', M, 4.95, W-2*M, 0.7, { size:13, color:INK });
lifecycle(s);

// P1 When to call a professional
s = slide({ notes:'4:55–5:10. Last slide of Own it, and the one the Lunch and Learn listing promised. I am not telling them to do everything themselves. The line is risk, not difficulty: money moving through their own code, regulated records, strangers logging in who must never see each other’s data, or downtime that costs more than a developer’s day. Below that line, today’s lifecycle is enough. Above it, hire someone, and be the client they want: a repo they join as a collaborator, a spec, a test, a bug list, and one rule, work on a branch and open pull requests in my accounts. A developer quoting against that is quoting against a known thing, which is a smaller number than quoting against a mystery in somebody’s browser tab.' });
blockHeader(s, 10, 'Own it', 15, 'talk'); timeChip(s, '4:55 – 5:10');
title(s, 'When to call a professional, and how to be a great client.');
card(s, M, 1.95, 5.9, 3.0, { fill:CARD, accent:RED });
label(s, 'Call one when', M+0.25, 2.1, 5.4);
body(s, ['You take card numbers or move money in your own code, instead of sending people to a hosted checkout','You hold health, children’s, or financial records','Strangers log in and must never see each other’s data','An hour of downtime costs more than a day of a developer'], { x:M+0.25, y:2.45, w:5.4, h:2.45, size:12, bullets:true, gap:6, color:INK });
card(s, 6.85, 1.95, 5.78, 3.0, { fill:CARD, accent:GREEN });
label(s, 'What you hand them', 7.1, 2.1, 5.3);
body(s, ['The repo, as a collaborator. Never your password.','spec.md: what it does, and what must never happen','The test, and the list of bugs you have seen','One rule: work on a branch, open pull requests, leave every account in my name'], { x:7.1, y:2.45, w:5.3, h:2.45, size:12, bullets:true, gap:6, color:INK });
card(s, M, 5.15, W-2*M, 0.8, { fill:CARD2, line:LINE });
text(s, 'You are handing over a repo with a spec, a test, and a history. A developer can quote against that.', M+0.25, 5.2, W-2*M-0.5, 0.7, { size:12.5, color:INK, valign:'middle' });
lifecycle(s, 'REVIEW');

// 35 Skills: a folder and one file
s = slide({ notes:'5:10–5:30. Some of you were at the skills talk. A skill is a folder with one file, SKILL.md. The front matter needs only a name and a description; keep the body under 500 lines. Simon Willison called it a deliciously tiny specification. As of this week, agentskills.io lists 46 products that read the same file: Claude Code, the Claude app, ChatGPT and Codex, Cursor, GitHub Copilot, VS Code, Gemini CLI. So the file travels with you, not with a vendor. Same idea as the repo: your process, in a file you own.' });
blockHeader(s, 11, 'Skills', 20, 'hands-on'); timeChip(s, '5:10 – 5:30');
title(s, 'A skill is a folder and one file. 46 tools read it.');
promptCard(s, '---\nname: my-deploy-checklist\ndescription: Run before merging any pull request to main in this project.\n---\n\n1. Run the Playwright test.\n2. Search the project for keys outside environment variables.\n3. Confirm .env.local is in .gitignore.\n4. Open a PR and wait for the green check.\n5. After merge, open the production URL and submit the form once.\n6. If anything is broken: Instant Rollback in Vercel, then Undo Rollback after the fix.', M, 1.95, 6.3, 3.7, { label:'.claude/skills/my-deploy-checklist/SKILL.md', size:10.5, line:BLUE });
card(s, 7.25, 1.95, 5.38, 3.7, { fill:CARD2, accent:ORANGE });
label(s, 'The whole format', 7.5, 2.1, 4.8);
body(s, ['Front matter: name and description. That is all it needs.','Body: plain English, numbered steps, under 500 lines.','Description under 200 characters, so the same folder also uploads to the Claude app and Cowork.','Read by Claude Code, ChatGPT & Codex, Cursor, Copilot, VS Code, Gemini CLI: 46 products on agentskills.io, Sept 2026.'], { x:7.5, y:2.45, w:4.9, h:3.1, size:11.5, bullets:true, gap:6 });
lifecycle(s, 'SHIP');

// 36 CLAUDE.md vs skills
s = slide({ notes:'5:10–5:30. The rule that stops people stuffing everything into skills, from Vercel’s own evals in January: an always-on AGENTS.md scored 100 percent on Next.js tasks; skills scored 79 percent with explicit instructions, because in 56 percent of runs the skill was never invoked. So: what the AI must know every single time goes in CLAUDE.md or AGENTS.md. Never commit .env. Always follow spec.md. Multi-step routines it should run on demand go in skills: the deploy checklist, brand voice, test before merge.' });
blockHeader(s, 11, 'Skills', 20, 'hands-on'); timeChip(s, '5:10 – 5:30');
title(s, 'CLAUDE.md is always on. A skill is on demand.');
card(s, M, 1.95, 5.9, 3.1, { fill:CARD, accent:BLUE });
head(s, 'CLAUDE.md / AGENTS.md', M+0.25, 2.15, 5.4, { size:17 });
text(s, 'What it must know every single time. Short. Advisory.', M+0.25, 2.6, 5.4, 0.5, { size:12 });
promptCard(s, 'Always follow spec.md.\nNever commit .env files.\nBuild on a branch and open a PR; never push to main.\nAsk for a plan before changing more than one file.', M+0.25, 3.15, 5.4, 1.75, { label:'CLAUDE.md, in full', size:10, line:BLUE });
card(s, 6.85, 1.95, 5.78, 3.1, { fill:CARD, accent:ORANGE });
head(s, 'Skills', 7.1, 2.15, 5.3, { size:17 });
text(s, 'Multi-step routines it runs when asked, or when the description matches. Deploy checklist. Brand voice. Test before merge.', 7.1, 2.6, 5.3, 0.9, { size:12 });
bigStat(s, 7.1, 3.35, 2.4, '100%', 'always-on file', { size:26, lsize:9.5, color:BLUE });
bigStat(s, 9.4, 3.35, 3.0, '79%', 'skill, even with “use the skill”', { size:26, lsize:9.5 });
text(s, 'Vercel evals, Jan 2026: in 56% of runs the skill was never invoked. Rules go in the always-on file; workflows go in skills.', M, 5.25, W-2*M, 0.5, { size:11.5, color:INK });
lifecycle(s, 'SHIP');

// 37 Skills exercise
s = slide({ notes:'5:10–5:30. You just wrote down the lifecycle we practised and handed it to the AI. Type the prompt; Claude creates the folder and the file. Then change one line to how YOU actually work, for instance “text Mark the preview link.” Then run it: slash my-deploy-checklist, and watch Claude walk your list against your repo. Last step copies it to .agents/skills, which Codex and Cursor read natively, so the same checklist follows you to whatever tool you use next year.' });
blockHeader(s, 11, 'Skills', 20, 'hands-on'); timeChip(s, '5:10 – 5:30');
title(s, 'Write the day down once. Then make the AI run it.');
promptCard(s, 'Create .claude/skills/my-deploy-checklist/SKILL.md. Front matter: name my-deploy-checklist; description, under 200 characters, saying to run it before merging any pull request to main. Body: a numbered checklist that (1) runs the Playwright test, (2) confirms .env.local is in .gitignore and no key strings are in the code, (3) confirms the PR has a green check and a preview URL I looked at, (4) only then merges, (5) after merge opens the production URL and submits the form once. Under 40 lines.', M, 1.95, 6.3, 2.75);
steps(s, ['Type the prompt. Open the file. Change one line to how YOU actually work.','Type /my-deploy-checklist and watch Claude walk your list against your repo.','Type: “Copy this skill to .agents/skills so Codex and Cursor read it too. Commit, push, open a PR.” Merge.','Green sticky when the skill ran. You will run it for real in the last sprint. Homework skills: my-brand-voice, my-test-before-merge.'], { x:7.25, y:1.95, w:5.38, h:3.3, size:11.5 });
card(s, M, 4.9, 6.3, 0.75, { fill:CARD2, accent:ORANGE });
text(s, 'This is not a Claude feature. It is a file in your repo. It leaves with you.', M+0.25, 4.95, 5.85, 0.65, { size:12, color:INK, valign:'middle' });
stickyRule(s);
lifecycle(s, 'SHIP');

// 38 Mark's examples
s = slide({ notes:'5:10–5:30. What this looks like grown up. I run about a hundred of these. For a small business website, four matter: brand-voice, the interview that produces a living brand bible; deploy-to-vercel, the GitHub-to-Vercel pipeline with the custom domain and the failed-deploy fixes; qa-tester, the “does this site actually work” smoke test before launch; and webmaster, the pre-launch checklist that runs the others in order. Sanitize before projecting; these files reference clients. Two cautions: read a skill before you install it, the way you would read a contract, because skills.sh ranks by installs, not quality. And Vercel’s react-best-practices skill is 70 rules per the file itself; install it in one line and ask Claude to review your app against it.' });
blockHeader(s, 11, 'Skills', 20, 'demo'); timeChip(s, '5:10 – 5:30');
title(s, 'What it looks like grown up: four skills that run a small-business site.');
const sk = [['brand-voice','A guided interview that produces a living brand bible. Every page in your voice.'],['deploy-to-vercel','GitHub → Vercel pipeline, custom domain, and the fixes for every failed deploy I have hit.'],['qa-tester','“Does this site actually work?” The smoke test before launch: forms, links, phones.'],['webmaster','The pre-launch checklist. Runs the other three, in order, and stops on a failure.']];
sk.forEach((k,i)=>{ const x=M+i*3.0; card(s, x, 1.95, 2.85, 2.3, { fill:CARD, accent: i===3?ORANGE:BLUE }); text(s, k[0], x+0.22, 2.12, 2.5, 0.3, { mono:true, size:10.5, color:ORANGE }); text(s, k[1], x+0.22, 2.5, 2.45, 1.7, { size:11 }); });
promptCard(s, 'npx skills add vercel-labs/agent-skills --skill vercel-react-best-practices', M, 4.45, 7.4, 1.15, { label:'ONE LINE INSTALLS VERCEL’S OWN 70-RULE REVIEW SKILL · THEN: “REVIEW MY APP AGAINST IT”', size:10.5, line:BLUE });
card(s, 8.35, 4.45, 4.28, 1.15, { fill:CARD2, accent:RED });
text(s, 'Read a skill before you install it, the way you would read a contract. skills.sh ranks by installs, not quality.', 8.55, 4.52, 3.95, 1.0, { size:10.5, color:INK, valign:'middle' });
lifecycle(s, 'SHIP');

// H3 Live hacking, sprint three + show and tell
s = slide({ notes:'5:30–5:50. Last sprint. Twelve minutes to finish ONE thing and ship it, with the skill they just wrote run for real before the last merge. Then eight minutes of show and tell: three volunteers, two minutes each, production URL on the projector, never a preview, because production is the thing that went through their gate. Ask each the same three questions: what does it replace, what did that cost a month, and what did the AI get wrong that you caught. Pick the volunteers during the sprint so nobody is surprised. If the room is behind, skip to show and tell at 5:42 regardless; the demos are what they will remember.' });
hackHeader(s, 3, '5:30 – 5:50');
title(s, 'Live hacking, sprint three. Ship it, then show it.');
card(s, M, 1.95, 5.9, 2.85, { fill:CARD, accent:BLUE });
label(s, 'Twelve minutes to ship', M+0.25, 2.1, 5.4);
body(s, ['Finish one thing. Not three.','Run /my-deploy-checklist before the last merge.','Open the production URL on your phone and submit the form once.','Paste your production URL in the shared doc.'], { x:M+0.25, y:2.45, w:5.4, h:2.3, size:12.5, bullets:true, gap:7, color:INK });
card(s, 6.85, 1.95, 5.78, 2.85, { fill:CARD, accent:ORANGE });
label(s, 'Eight minutes of show and tell', 7.1, 2.1, 5.3);
body(s, ['Three volunteers, two minutes each, production URL on the projector','What it replaces, and what that cost a month','The one thing the AI got wrong, and how you caught it','Everyone else: one bug on a sticky for the presenter'], { x:7.1, y:2.45, w:5.3, h:2.3, size:12.5, bullets:true, gap:7, color:INK });
card(s, M, 5.0, W-2*M, 0.85, { fill:CARD2, line:LINE });
text(s, 'Demo the production URL, not the preview. Production is the one that went through your gate.', M+0.25, 5.05, W-2*M-0.5, 0.75, { size:13, color:INK, valign:'middle' });
stickyRule(s);
lifecycle(s, 'SHIP');

// 39 What you own now
s = slide({ notes:'5:50–6:00. Read this back against your own screen. Six hours ago your prototype lived in somebody’s browser tab. Now the code is in your GitHub, the site is on your Vercel, you can roll back a mistake in one click, a test runs on every change, secrets are out of the code, the rows live in a database you own, an email tells you when a customer submits, and the AI has a checklist with your name on it. None of that is a subscription to me or to a builder.' });
blockHeader(s, 12, 'What you own now', 10, 'review'); timeChip(s, '5:50 – 6:00');
title(s, 'Read it back against your own screen.');
const own = ['Files on my laptop, and a copy of every version in my GitHub','A live site on my Vercel, with a preview URL for every change','A rollback I have used','Secrets in environment variables, not in the code','A database in my account, with the connection string in an environment variable','An email when a customer submits, and a log page for errors','A test that runs on every pull request, with a red X I made on purpose','A fresh-reader review before merge','A skill in the repo that runs the checklist, in any AI tool'];
own.forEach((o,i)=>{ const y=1.9+i*0.41; s.addShape(pres.ShapeType.rect, { x:M, y:y+0.07, w:0.24, h:0.24, fill:{ color:GREEN }, line:{ color:GREEN, width:0 } }); text(s, o, M+0.45, y, W-2*M-0.5, 0.38, { size:12.5, color:INK, valign:'middle' }); });
text(s, 'None of that is a subscription to me or to a builder.', M, 5.75, W-2*M, 0.5, { size:14, color:ORANGE, bold:true });
lifecycle(s, 'MONITOR');

// 40 Monday list
s = slide({ notes:'5:50–6:00. Monday, in order. The database and the email are done, so Monday is shorter than it was in the three-hour version. Buy the domain if you have not; about $11. Verify that domain in Resend so mail comes from you and can reach customers, not only your own address. Add Sentry with the prompt from the projector, because Vercel Hobby keeps one hour of logs. Move to Vercel Pro the day the site earns money, and turn on spend management that day. Optionally require the Playwright check in Vercel Deployment Checks so a red X physically cannot reach the domain; confirm it is on your plan first. And the monthly npm audit on the first of the month.' });
blockHeader(s, 12, 'What you own now', 10, 'review'); timeChip(s, '5:50 – 6:00');
title(s, 'Monday, in this order. Every line has a free tier.');
const mon = [['1','Buy the domain','~$11 / yr. In Vercel it skips the DNS step. Watch the $6.98-then-$15.88 bait elsewhere.'],['2','Verify your email domain','Add the Resend DNS records so mail comes from your domain, reaches anyone, and stops landing in spam.'],['3','Add error alerts','Sentry Developer, $0, 5k errors a month. Same prompt I used on the projector. Vercel Hobby keeps one hour of logs.'],['4','Go Pro the day it earns','Vercel Pro, $20 a month, the day the site makes money. Turn on spend management first.'],['5','Make the gate hard','Vercel Deployment Checks: require the Playwright check before a build reaches your domain. Confirm it is on your plan.'],['6','First of the month','“Run npm audit and update.” Green check, merge, two minutes.']];
mon.forEach((m,i)=>{ const x=M+(i%3)*4.02, y=1.95+Math.floor(i/3)*1.85; card(s, x, y, 3.85, 1.65, { fill:CARD, accent:ORANGE }); text(s, m[0], x+0.22, y+0.15, 0.5, 0.3, { mono:true, size:10, color:ORANGE }); head(s, m[1], x+0.6, y+0.12, 3.1, { size:13.5 }); text(s, m[2], x+0.22, y+0.55, 3.45, 1.05, { size:10 }); });
lifecycle(s, 'MONITOR');

// 41 Close
s = slide({ dark:true, notes:'5:50–6:00. Two stickies on the table on the way out: one thing you learned, one thing still confusing. They decide what Part Three is. Subscribe at theaienterprise.io. Go run your business.' });
s.addImage({ path:ASSETS+'room.jpg', x:6.9, y:0, w:6.43, h:H, sizing:{ type:'cover', w:6.43, h:H } });
s.addShape(pres.ShapeType.rect, { x:6.9, y:0, w:6.43, h:H, fill:{ color:'0D1219', transparency:35 }, line:{ color:'0D1219', width:0 } });
eyebrow(s, 'That’s the day');
title(s, 'Six hours ago it lived in somebody’s browser tab.', { w:5.9 });
body(s, ['Now the code is in your GitHub. The site is on your Vercel. A mistake rolls back in one click. A test runs on every change. The rows live in your database, and an email tells you when a customer shows up. And the AI has a checklist with your name on it.','Two stickies on the table on your way out. They decide what Part Three is.'], { y:2.2, w:5.9, h:2.7, size:13.5, gap:10 });
card(s, M, 5.1, 5.9, 0.95, { fill:'121B2B', line:ORANGE, lw:1 });
text(s, 'Mark Hinkle · theaienterprise.io · Vibe Coding, Take Two · the six-hour class · All Things AI', M+0.25, 5.1, 5.5, 0.95, { mono:true, size:10, color:ORANGE, valign:'middle' });
s.addText('The Triangle’s AI business community. April 18–20, 2027, Raleigh.', { x:7.2, y:6.55, w:5.8, h:0.4, align:'right', fontFace:SANS, fontSize:12, color:'FFFFFF', isTextBox:true, margin:0 });
lifecycle(s);

// ---- write ----
const total = String(n);
pres.slides.forEach(sl => { (sl._slideObjects||[]).forEach(o => { if (o.text && Array.isArray(o.text)) o.text.forEach(t => { if (typeof t.text==='string') t.text = t.text.replace('__TOTAL__', total); }); if (typeof o.text==='string') o.text = o.text.replace('__TOTAL__', total); }); });
setImmediate(() => pres.writeFile({ fileName: 'vibe-coding-class-ata.pptx' }).then(f => console.log('wrote', f, 'slides:', n)));
