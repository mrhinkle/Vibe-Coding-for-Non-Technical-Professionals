// AI Agents & Vibe Coding: the All Things Open 2026 extended workshop. Monday October 19, 2026, Raleigh Convention Center, 9:00–5:30.
// Instructor deck for the course in this repository. Schedule: instructor/ato-2026-run-of-show.md. Prompts are copied verbatim from docs/.
// Brand tokens from presentations/reference-six-hour-class/build.js (All Things AI light). Rebuild: node build.js  (from this folder)
// Design rules (the Tufte pass, October 15): one idea and one visual per slide; boxes only where 2–3 parallel items need alignment;
// body text 16pt, nothing under 11pt except the footer counter; at most one prompt card per slide and its text at 14pt or larger.
const fs = require('fs');
const pptxgen = require('pptxgenjs');
const pres = new pptxgen();
pres.layout = 'LAYOUT_WIDE'; // 13.33 x 7.5
pres.author = 'Mark Hinkle'; pres.title = 'AI Agents & Vibe Coding: All Things Open 2026 Workshop';

// All Things AI brand tokens (unchanged).
const BG='FFFFFF', CARD='F3F6FB', CARD2='E8EEF7', NAVY='121B2B', LINE='D9E0EA', ORANGE='EF8B39', BLUE='307FE2', WHITE='FFFFFF', INK='0D1219', MUTED='5B6675', DIM='7B8594', GREEN='22C55E', RED='EF4444';
const SANS='Arial', MONO='Courier New';
const W=13.33, H=7.5, M=0.7, CW=W-2*M;
const ASSETS = 'assets/';
let n = 0; const TOTAL = '__TOTAL__';
const NOTES = []; // collected for speaker-notes.md

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
  NOTES.push({ n, name: opts.name || '', notes: opts.notes || '' });
  return s;
}
const ink = (s, c) => c || (s._dark ? WHITE : INK);

// ---- typography ----
// kicker: one mono line at the top that says where we are (block, step) and, on the right, the clock window.
function kicker(s, t, time, o={}){
  s.addText(t.toUpperCase(), { x:M, y:0.5, w:CW-2.6, h:0.3, fontFace:MONO, fontSize:11, bold:true, color:o.color||(s._dark?ORANGE:BLUE), charSpacing:1.5, margin:0, isTextBox:true });
  if (time) s.addText(time, { x:W-M-2.6, y:0.5, w:2.6, h:0.3, fontFace:MONO, fontSize:11, color:s._dark?'B9C3D1':DIM, align:'right', margin:0, isTextBox:true });
}
function title(s, t, o={}){
  const auto = t.length>66?26 : t.length>52?28 : 32;
  s.addText(t, { x:o.x??M, y:o.y??0.9, w:o.w??CW, h:o.h??0.8, fontFace:SANS, fontSize:o.size||auto, bold:true, color:ink(s,o.color), margin:0, isTextBox:true, valign:'top' });
}
// lede: the one supporting line under the title.
function lede(s, t, o={}){
  s.addText(t, { x:o.x??M, y:o.y??1.7, w:o.w??CW, h:o.h??0.5, fontFace:SANS, fontSize:o.size||16, color:o.color||(s._dark?'D6DEEA':MUTED), margin:0, isTextBox:true, valign:'top', lineSpacingMultiple:1.15 });
}
// para: plain lines with air, no bullets, no boxes. Max four on a teaching slide.
function para(s, lines, o={}){
  const arr = Array.isArray(lines) ? lines : [lines];
  s.addText(arr.map((t,i)=>({ text:t, options:{ breakLine:i<arr.length-1, paraSpaceAfter:o.gap??10 } })),
    { x:o.x??M, y:o.y??2.3, w:o.w??CW, h:o.h??3.4, fontFace:SANS, fontSize:o.size||16, color:o.color||ink(s), bold:!!o.bold, margin:0, isTextBox:true, valign:o.valign||'top', lineSpacingMultiple:1.2 });
}
// numbered: steps as "1  Do this." lines.
function numbered(s, arr, o={}){
  s.addText(arr.map((t,i)=>({ text:`${i+1}   ${t}`, options:{ breakLine:i<arr.length-1, paraSpaceAfter:o.gap??12 } })),
    { x:o.x??M, y:o.y??2.3, w:o.w??CW, h:o.h??3.4, fontFace:SANS, fontSize:o.size||16, color:o.color||ink(s), margin:0, isTextBox:true, valign:'top', lineSpacingMultiple:1.2 });
}
// defs: a term on the left, one line on the right, aligned, no boxes.
function defs(s, items, o={}){
  const x=o.x??M, w=o.w??CW, y0=o.y??2.3, pitch=o.pitch??0.9, tw=o.tw??3.6;
  items.forEach((it,i)=>{ const y=y0+i*pitch;
    s.addText(it[0], { x, y, w:tw-0.2, h:pitch-0.1, fontFace:o.mono?MONO:SANS, fontSize:o.tsize||18, bold:true, color:o.tcolor||ink(s), margin:0, isTextBox:true, valign:'top' });
    s.addText(it[1], { x:x+tw, y:y+0.03, w:w-tw, h:pitch-0.1, fontFace:SANS, fontSize:o.size||16, color:o.color||ink(s), margin:0, isTextBox:true, valign:'top', lineSpacingMultiple:1.15 }); });
}
// cols: two or three parallel columns of plain text, each with a small mono heading. No boxes.
function cols(s, items, o={}){
  const k=items.length, gap=o.gap??0.5, w=(CW-(k-1)*gap)/k, y=o.y??2.3;
  items.forEach((it,i)=>{ const x=M+i*(w+gap);
    s.addText(it[0].toUpperCase(), { x, y, w, h:0.3, fontFace:MONO, fontSize:11, bold:true, color:it[2]||ORANGE, charSpacing:1.5, margin:0, isTextBox:true });
    if (it[1]) s.addText(it[1], { x, y:y+0.38, w, h:o.hh??0.5, fontFace:SANS, fontSize:o.hsize||18, bold:true, color:ink(s), margin:0, isTextBox:true, valign:'top' });
    const lines = Array.isArray(it[3]) ? it[3] : (it[3] ? [it[3]] : []);
    if (lines.length) s.addText(lines.map((t,j)=>({ text:t, options:{ breakLine:j<lines.length-1, paraSpaceAfter:o.gap2??8 } })), { x, y:y+0.38+(it[1]?(o.hh??0.5)+0.12:0), w, h:o.h??2.6, fontFace:SANS, fontSize:o.size||15, color:ink(s), margin:0, isTextBox:true, valign:'top', lineSpacingMultiple:1.2 }); });
}
function text(s, t, x, y, w, h, o={}){
  s.addText(t, { x, y, w, h, fontFace:o.mono?MONO:SANS, fontSize:o.size||14, color:o.color||ink(s), bold:!!o.bold, italic:!!o.italic, align:o.align||'left', margin:0, isTextBox:true, valign:o.valign||'top', lineSpacingMultiple:o.lsm||1.15, charSpacing:o.cs||0 });
}
function label(s, t, x, y, w, o={}){ text(s, t.toUpperCase(), x, y, w, o.h||0.3, { mono:true, size:11, bold:true, color:o.color||ORANGE, cs:1.5, align:o.align }); }

// ---- shapes ----
function box(s, x, y, w, h, o={}){
  s.addShape(pres.ShapeType[o.shape||'rect'], { x, y, w, h, rectRadius:o.r??0, fill:{ color:o.fill||CARD }, line:{ color:o.line||LINE, width:o.lw??0.75 } });
}
function arrowLine(s, x1, y1, x2, y2, o={}){
  const x=Math.min(x1,x2), y=Math.min(y1,y2), w=Math.abs(x2-x1), h=Math.abs(y2-y1);
  const line = { color:o.color||DIM, width:o.width||1.5 }; if (o.head!==false) line.endArrowType='triangle';
  s.addShape(pres.ShapeType.line, { x, y, w, h, flipH:x2<x1, flipV:y2<y1, line });
}
function arrow(s, x, y, w, o={}){ s.addShape(pres.ShapeType.rightArrow, { x, y, w, h:o.h??0.3, fill:{ color:o.color||ORANGE }, line:{ color:o.color||ORANGE, width:0 } }); }
// node: a labeled shape used by the flow drawings.
function node(s, t, x, y, w, h, o={}){
  box(s, x, y, w, h, { shape:o.shape||'roundRect', r:o.r??0.1, fill:o.fill||BLUE, line:o.line||o.fill||BLUE, lw:o.lw??1 });
  s.addText(t, { x, y, w, h, fontFace:o.mono?MONO:SANS, fontSize:o.size||16, bold:true, color:o.color||WHITE, align:'center', valign:'middle', margin:0 });
}
function promptCard(s, txt, x, y, w, h, o={}){
  box(s, x, y, w, h, { fill:NAVY, line:o.line||ORANGE, lw:1 });
  s.addText((o.label||'TYPE THIS, VERBATIM'), { x:x+0.25, y:y+0.14, w:w-0.5, h:0.28, fontFace:MONO, fontSize:11, bold:true, color:ORANGE, charSpacing:1.5, margin:0 });
  s.addText(txt, { x:x+0.25, y:y+0.5, w:w-0.5, h:h-0.65, fontFace:MONO, fontSize:o.size||14, color:'E6EBF2', margin:0, isTextBox:true, valign:'top', lineSpacingMultiple:1.2 });
}
function table(s, rows, x, y, colW, o={}){
  const data = rows.map((r,ri)=> r.map((c,ci)=>({ text:String(c), options:{
    fontFace: (ri===0)?MONO:(o.monoCols&&o.monoCols.includes(ci)?MONO:SANS),
    fontSize: ri===0?11:(o.size||13),
    bold: ri===0 || (o.boldCols&&o.boldCols.includes(ci)),
    color: ri===0?WHITE:(ci===0&&!o.plainFirst?INK:MUTED),
    fill:{ color: ri===0?BLUE:(ri%2?CARD:WHITE) },
    valign:'middle', margin:[4,8,4,8], charSpacing: ri===0?1.2:0 } })));
  s.addTable(data, { x, y, w: colW.reduce((a,b)=>a+b,0), colW, border:{ type:'solid', color:LINE, pt:0.5 }, rowH:o.rowH||0.46, autoPage:false });
}
// dayTable: the two reference schedules. ★ rows are the day's deliverables (blue); LIVE HACKING rows are the sprints (orange).
function dayTable(s, rows, x){
  const data = rows.map((r,ri)=> r.map((c,ci)=>{ const hack = /^LIVE HACKING/.test(r[1]); const rest = /^(Break|Lunch|Doors|End)$/.test(r[1]); const deliv = /^★/.test(r[1]); return { text:String(c), options:{
    fontFace: (ri===0||ci===0)?MONO:SANS, fontSize: ri===0?11:12.5, bold: ri===0 || ci===1,
    color: ri===0?WHITE:(hack||deliv?WHITE:(rest?DIM:(ci<2?INK:MUTED))),
    fill:{ color: ri===0?BLUE:(hack?ORANGE:(deliv?BLUE:(ri%2?CARD:WHITE))) }, valign:'middle', margin:[3,8,3,8], charSpacing: ri===0?1.2:0 } }; }));
  s.addTable(data, { x, y:1.85, w:7.6, colW:[0.95,3.05,3.6], border:{ type:'solid', color:LINE, pt:0.5 }, rowH:0.42, autoPage:false });
}

// ---- the loop ----
const STAGES = ['DESCRIBE','PLAN','BUILD','CHECK','SAVE','PUBLISH'];
// here(): the footer "you are here" line. Text only, and only when a step is active; otherwise nothing is drawn.
function here(s, active){
  if (!active) return;
  const runs = [];
  STAGES.forEach((st,i)=>{ const on = st===active.toUpperCase(); runs.push({ text:st, options:{ color:on?ORANGE:(s._dark?'B9C3D1':DIM), bold:on } }); if (i<5) runs.push({ text:'   ·   ', options:{ color:s._dark?'B9C3D1':DIM } }); });
  s.addText(runs, { x:2.5, y:H-0.6, w:W-5, h:0.3, fontFace:MONO, fontSize:11, align:'center', valign:'middle', margin:0 });
}
// loopHero(): the six steps as one horizontal strip with a return arrow, drawn large. The active step is filled.
function loopHero(s, active, o={}){
  const y=o.y??2.3, h=o.h??0.9, gap=0.36, w=(CW-5*gap)/6, sub=o.sub||[];
  STAGES.forEach((st,i)=>{ const x=M+i*(w+gap); const on = active && st===active.toUpperCase();
    box(s, x, y, w, h, { shape:'roundRect', r:0.08, fill:on?ORANGE:WHITE, line:on?ORANGE:(o.line||INK), lw:on?1:1.25 });
    s.addText(st, { x, y, w, h:sub[i]?h-0.3:h, fontFace:SANS, fontSize:o.size||18, bold:true, color:on?WHITE:INK, align:'center', valign:'middle', margin:0 });
    if (sub[i]) s.addText(sub[i], { x, y:y+h-0.38, w, h:0.3, fontFace:MONO, fontSize:11, color:on?WHITE:DIM, align:'center', valign:'middle', margin:0 });
    if (i<5) arrowLine(s, x+w+0.04, y+h/2, x+w+gap-0.04, y+h/2, { color:INK, width:1.5 });
  });
  // the return: publish goes back to describe
  const yr = y+h+0.3;
  arrowLine(s, W-M-w/2, y+h+0.02, W-M-w/2, yr, { color:INK, head:false });
  arrowLine(s, W-M-w/2, yr, M+w/2, yr, { color:INK, head:false });
  arrowLine(s, M+w/2, yr, M+w/2, y+h+0.08, { color:INK, width:1.5 });
  s.addText(o.again||'and again, for the next increment', { x:M+w, y:yr+0.04, w:CW-2*w, h:0.3, fontFace:MONO, fontSize:11, color:DIM, align:'center', valign:'middle', margin:0 });
}
// stickies(): the room's done/stuck legend, once per hands-on slide.
function stickies(s){
  const y=H-1.0;
  s.addShape(pres.ShapeType.rect, { x:M, y:y+0.03, w:0.22, h:0.22, fill:{ color:GREEN }, line:{ color:GREEN, width:0 } });
  text(s, 'Green sticky on your lid = done', M+0.32, y, 3.6, 0.28, { size:12, color:MUTED, valign:'middle' });
  s.addShape(pres.ShapeType.rect, { x:M+3.9, y:y+0.03, w:0.22, h:0.22, fill:{ color:RED }, line:{ color:RED, width:0 } });
  text(s, 'Red sticky = a helper comes to you', M+4.22, y, 4.5, 0.28, { size:12, color:MUTED, valign:'middle' });
}
function breakSlide(name, big, back, haveList, notes){
  const s = slide({ dark:true, name, notes });
  kicker(s, name);
  s.addText(big, { x:M, y:1.5, w:CW, h:1.2, fontFace:SANS, fontSize:54, bold:true, color:WHITE, margin:0, isTextBox:true });
  s.addText(back, { x:M, y:2.75, w:CW, h:0.6, fontFace:MONO, fontSize:18, color:ORANGE, margin:0, isTextBox:true });
  label(s, 'When you sit back down, have this', M, 3.9, 8);
  numbered(s, haveList, { y:4.3, w:9.5, h:2.0, size:18, color:WHITE, gap:10 });
  return s;
}
const NOTE = (clock, script, watch, gate) => `${clock}. ${script} Watch for: ${watch} Gate: ${gate}`;

let s;

// 1 Hold slide (dark, while people arrive)
s = slide({ dark:true, noFooter:true, name:'Hold slide: doors open',
  notes: NOTE('7:30–9:00', 'This slide stays up until 9:00 and I don’t start talking before then. I walk the tables with the helpers. Every laptop gets the laptop check on the big screen, prep/laptop-check.html, and a helper confirms two things per person: signed in to GitHub, signed in to Vercel with GitHub. Wi-Fi goes on this slide and on the whiteboard before anyone walks in. My laptop has ChatGPT, Claude, and v0 tabs signed in, so the demo matches whichever chatbot most people brought.', 'people who skipped the prework. Don’t debug one laptop for more than five minutes; sit them next to a partner and put them on the list for the setup block.', 'by 9:00 every seat shows a green check on the laptop check, or is on the helper list.') });
s.addImage({ path:ASSETS+'logo-h-white.png', x:M, y:0.5, w:3.2, h:0.41 });
text(s, 'ALL THINGS OPEN 2026 · EXTENDED WORKSHOP · RALEIGH CONVENTION CENTER', M, 1.1, CW, 0.3, { mono:true, size:11, bold:true, color:ORANGE, cs:1.5 });
s.addText('AI Agents & Vibe Coding', { x:M, y:1.5, w:10, h:1.2, fontFace:SANS, fontSize:54, bold:true, color:WHITE, margin:0, isTextBox:true });
s.addText('Doors 7:30  ·  We start at 9:00', { x:M, y:2.7, w:8, h:0.6, fontFace:MONO, fontSize:20, color:ORANGE, margin:0, isTextBox:true });
label(s, 'Three things to do right now', M, 3.7, 6);
numbered(s, ['Open github.com and make sure you’re signed in.','Open vercel.com and sign in with GitHub.','Open prep/laptop-check.html from the course folder. Green check means you’re ready.'], { y:4.1, w:7.3, h:1.9, size:17, color:WHITE, gap:8 });
label(s, 'Wi-Fi', 8.9, 3.7, 3.5, { color:BLUE });
text(s, 'Network:   ________________', 8.9, 4.15, 3.9, 0.4, { mono:true, size:14, color:WHITE });
text(s, 'Password:  ________________', 8.9, 4.7, 3.9, 0.4, { mono:true, size:14, color:WHITE });
text(s, 'Slides and all course materials: github.com/mrhinkle/Vibe-Coding-for-Non-Technical-Professionals', M, 6.2, CW, 0.3, { mono:true, size:11, color:'D6DEEA' });
text(s, 'MARK HINKLE · CEO, PERIPETY LABS · PUBLISHER, THE AIE NETWORK · CO-ORGANIZER, ALL THINGS AI', M, 6.65, CW, 0.3, { mono:true, size:11, color:'B9C3D1', cs:1.5 });

// 2 Welcome: the day as one line with two deliverables on it
s = slide({ name:'Welcome',
  notes: NOTE('9:00–9:04', 'The promise first, then one minute on me. By 5:30 you have two live URLs: a website about you and a game you can hand to a friend. And one loop you can run again on Monday. The listing promised a working, deployed application. That’s the website, and it ships before lunch. If you’re thinking this is a lot, it is. Every stage has a tested file you can download and continue from. Everyone here gets stuck today, me included. That’s the plan, not the exception. Nobody is judging your code.', 'anyone who thinks they need to code. Nobody types code by hand today. You describe, the chatbot builds, you check.', 'everyone can say the two deliverables and the time each is due.') });
kicker(s, 'Welcome');
title(s, 'By 5:30 you’ll have two live URLs.');
lede(s, 'One loop all day: describe, plan, build, check, save, publish. Both projects.');
{ // a day line from 9:00 to 5:30 with the two deliverables marked
  const x0=M+0.3, x1=W-M-0.3, y=4.0, span=8.5; const px = h => x0 + (h-9)/span*(x1-x0);
  arrowLine(s, x0, y, x1, y, { color:INK, width:2, head:false });
  [['9:00','Start'],['12:00','Lunch'],['5:30','End']].forEach(([h,t])=>{ const hh = h==='5:30'?17.5:(h==='12:00'?12:9); const x=px(hh); arrowLine(s, x, y-0.12, x, y+0.12, { color:INK, width:2, head:false }); text(s, h, x-0.6, y+0.2, 1.2, 0.3, { mono:true, size:12, color:DIM, align:'center' }); });
  [[11.5,'11:30','A website about you, built from your LinkedIn, live on Vercel.',BLUE],[16.58,'4:35','A themed tic-tac-toe battle game, live at its own URL.',ORANGE]].forEach(([hh,lab,t,c],i)=>{ const x=px(hh);
    s.addShape(pres.ShapeType.ellipse, { x:x-0.17, y:y-0.17, w:0.34, h:0.34, fill:{ color:c }, line:{ color:c, width:0 } });
    arrowLine(s, x, y-0.2, x, 2.75, { color:c, width:1.5, head:false });
    text(s, lab, x-1.6+ (i?0:0), 2.3, 3.2, 0.4, { size:26, bold:true, color:c, align:'center' });
    text(s, t, x-1.9, 4.65, 3.8, 0.9, { size:15, color:INK, align:'center' }); });
}

// 3 Who is talking (bio, 60 seconds)
s = slide({ name:'Who is talking',
  notes: NOTE('9:00–9:04', 'The gray hair is the credential. I started my first company in 1995 and I’ve been in enterprise software through open source, cloud, and now AI. I’ve shipped every mistake I’m about to show you, some of them more than once. I’m not a daily coder. I direct the people, and now the agents, who build. That’s the seat you’re in today, so if that’s you, you’re in the right room.', 'me talking about myself past sixty seconds.', 'none; move.') });
kicker(s, 'Who is talking');
title(s, 'Who’s talking, and why trust me with your Monday.');
s.addImage({ path:ASSETS+'headshot.jpg', x:M, y:2.0, w:3.2, h:3.2 });
text(s, 'MARK HINKLE', M, 5.3, 3.2, 0.3, { mono:true, size:11, color:ORANGE, cs:1.5 });
para(s, ['CEO and founder of Peripety Labs. Co-founder of All Things AI.','Founding publisher of The AIE Network, read by about 90,000 business leaders.','25-plus years in enterprise software, from open source to cloud to AI.','VP at Cloud.com. Executive Director of the Node.js Foundation. First company, 1995.'], { x:4.4, y:2.0, w:8.2, h:3.4, size:17, gap:14 });

// 4 What you'll learn (the listing's four promises)
s = slide({ name:'What you will learn',
  notes: NOTE('9:04–9:05', 'The listing made four promises and this is them. How software actually gets built. GitHub as your system of record: every change tracked, reviewed, reversible. Vercel and v0 build and deploy, with nothing installed on your laptop. And the big one, directing agents instead of coding. You write the specification, not the syntax, and the pull request is where a human says yes or no. Three kinds of people are here today. If you don’t code, you leave with two live things you made and a loop you can repeat. Developers get a disciplined agent process with a review gate. Leaders, you get what to put in GitHub first and where agents still need supervision.', 'developers checking out during the basics. The review and rollback material at 11:30 is for them.', 'none; talk slide.') });
kicker(s, 'What you will learn');
title(s, 'The listing promised four things. Here they are.');
defs(s, [['How software gets built','The lifecycle in plain words, and a six-step loop you run a dozen times.'],['GitHub as your system of record','Every change tracked, reviewed, and reversible. Nothing is lost.'],['Vercel and v0 build and deploy','v0 writes the code. Vercel ships it live on every push.'],['Directing agents instead of coding','You write the spec, not the syntax. The pull request is your checkpoint.']], { tw:4.6, pitch:0.95 });

// 5 Fluid day
s = slide({ name:'How today works: behind, ahead, stuck',
  notes: '9:05–9:07. The schedule is a plan, not a contract. We go as fast as the slowest table still working; every 30 minutes I check in and move the schedule out loud. Checkpoints are tested files you continue from; grabbing one is smart. Help? One sentence: “I clicked X, expected Y, saw Z.” Nobody here is judging your code. Feedback at the close earns you my book’s preview edition. If we run late, the cuts, in order: 1) drop sprint 1 at 11:45; a live URL by 11:45 is the gate; 2) everyone continues from game checkpoint 2 at 2:15; 3) everyone continues from checkpoint 3 at 3:00, straight to theme and publish; 4) drop sprints 2 and 3 to publish the game; 5) never cut the handoff. Watch for: people hiding they’re behind. Gate: everyone can say the help sentence.' });
kicker(s, 'How today works');
title(s, 'Behind? Grab a checkpoint. Stuck? Say one sentence.');
para(s, ['We go as fast as the slowest table still working. I check in every 30 minutes and move the schedule out loud.','Behind: every stage has a tested file you can continue from. Using one is smart, not cheating.','Ahead: ten skills for your site and four game extensions. One at a time.'], { y:2.1, h:2.2, gap:10 });
label(s, 'When you need help, raise a hand and say one sentence', M, 4.55, CW);
text(s, '“I clicked X, expected Y, saw Z.”', M, 4.9, CW, 0.9, { size:34, bold:true, color:ORANGE });

// 6 Day at a glance: morning (reference slide)
const am = [['CLOCK','BLOCK','YOU LEAVE WITH'],['7:30','Doors','Laptop check, sign-ins'],['9:00','How software gets built; the map of tools','You can name the loop'],['9:30','Setup: GitHub tour, v0, Vercel, the secrets rule','A repo with two commits'],['10:00','Website: export → build','index.html with your content'],['10:45','Break',''],['11:00','★ Colors, check, publish','LIVE WEBSITE URL by 11:30'],['11:30','Reading what the agent wrote','Diff, PR, rollback'],['11:45','LIVE HACKING 1','Skills, then one skill loaded'],['12:00','Lunch','']];
const pm = [['CLOCK','BLOCK','YOU LEAVE WITH'],['12:45','Choose a track, theme, sketches','Theme table, three sketches'],['1:20','Brief and rules','game-brief.md with checks'],['1:40','Build: board, battle, connect','A playable round'],['2:45','Break',''],['3:00','Look and feel','Theme applied, fits a phone'],['3:30','Playtest, one fix','One observed issue repaired'],['4:10','★ Publish the game','LIVE GAME URL by 4:35'],['4:35','LIVE HACKING 2 + 3','Show and tell at 5:05'],['5:15','Tuesday, handoff, LinkedIn','Two URLs, two state files'],['5:30','End','']];
s = slide({ name:'The day at a glance: morning',
  notes: NOTE('9:07–9:08', 'Reference slide, point at it, don’t read it. Thirty seconds. Morning is the website: setup, build, publish by 11:30, then fifteen minutes on reading what the agent wrote: diffs, pull requests, rollback. The blue row is deliverable one. The orange row is live hacking: you pick one skill from the menu and build it, and I build one on the projector. Break at 10:45, lunch at noon for forty-five minutes.', 'the people doing the math on 8.5 hours. It’s 360 teaching minutes plus 55 of sprints; the rest is breaks and lunch.', 'nothing to check; move on.') });
kicker(s, 'The day at a glance · morning');
title(s, 'The morning: website before lunch.');
dayTable(s, am, (W-7.6)/2);
text(s, 'Blue row: deliverable one. Orange row: you pick one skill from the menu and build it yourself.', M, 6.25, CW, 0.4, { size:14, color:MUTED, align:'center' });

// 7 Day at a glance: afternoon (reference slide)
s = slide({ name:'The day at a glance: afternoon',
  notes: NOTE('9:07–9:08', 'Reference slide, point at it, don’t read it. Afternoon is the game, or your own one-screen project on Track B: choose, sketch, brief, build in three increments, polish, playtest, publish by 4:35. That’s deliverable two, the blue row. Orange rows are sprints two and three, then show and tell at 5:05. Break at 2:45. The handoff at 5:15 never gets cut.', 'questions about Track B now. Hold them; the track slide comes after lunch.', 'nothing to check; move on.') });
kicker(s, 'The day at a glance · afternoon');
title(s, 'The afternoon: the game, or your own project.');
dayTable(s, pm, (W-7.6)/2);
text(s, 'Blue row: deliverable two. Orange rows: sprints two and three.', M, 6.5, CW, 0.4, { size:14, color:MUTED, align:'center' });

// 8 Room rules
s = slide({ name:'Room rules',
  notes: NOTE('9:08–9:10', 'Four rules. Pairs: the more nervous person types, the other reads the prompt out loud; swap after each break. Stickies: green on your lid when the step’s done, red when you’re stuck and a helper comes to you, so I can see from the front who needs a helper. Nothing secret goes into a chat: no passwords, no API keys, no form endpoints with secrets. You create accounts yourself in the provider’s own window. And everything lands in your account, not mine: your GitHub, your Vercel, your chatbot. You own the repo. I never touch it. My course repo is a source of materials, not a destination.', 'somebody pasting a password into the chatbot “to save time.” Stop it on the spot.', 'every table has stickies and a pair.') });
kicker(s, 'Four rules');
title(s, 'Four rules for the day.');
defs(s, [['Pairs','The nervous one types. The other reads the prompt out loud. Swap after each break.'],['Stickies, not hands','Green on your lid when the step is done. Red when you are stuck; a helper comes to you.'],['No passwords in chats','No passwords, keys, or tokens in any chatbot. Make accounts in the provider’s own window.'],['Your account, not mine','Your GitHub, your Vercel, your chatbot. My repo is materials, not the destination.']], { tw:4.0, pitch:0.9 });
stickies(s);

// 9 The loop: our six steps over the professional six, as one strip
s = slide({ name:'The loop: describe, plan, build, check, save, publish',
  notes: NOTE('9:10–9:12', 'This is the whole course on one slide. The strip is what you do: describe the outcome, plan before anything gets built, build the smallest version, check it with your own eyes, save the version that passed, publish only that. The small words under each box are the same loop in the words the listing uses: prompt, generate, commit, review, deploy, repeat. Review happens in a pull request, where you say yes or no. Both projects run this a dozen times, and the line at the bottom of every working slide shows which step we’re on. Next six slides: one step each, thirty seconds apiece.', 'people who want to describe everything at once. One increment, one check.', 'everyone can say either row in order.') });
kicker(s, 'The loop', '9:00 – 9:20');
title(s, 'Same loop, two sets of words.');
lede(s, 'Big words: what you do today. Small words: what the listing calls it.');
loopHero(s, null, { y:2.6, h:1.3, sub:['PROMPT','GENERATE','COMMIT','REVIEW','DEPLOY','REPEAT'] });
defs(s, [['Describe','The outcome, in one sentence. You write the spec, not the syntax.'],['Plan','Files, order, three hand checks, before it touches a file.'],['Build, check','The smallest version that works. Open it, click it, phone it.'],['Save, publish','A named checkpoint in GitHub, then a URL someone else can open.']], { y:4.75, pitch:0.42, tw:2.4, tsize:14, size:14 });

// ---- Block 1: how software actually gets built (9:00–9:20) ----
const B1 = (s, time) => kicker(s, 'Block 1 · How software gets built', time||'9:00 – 9:20');
// 10 Three kinds of file
s = slide({ name:'Block 1: a website, a game, and three kinds of file',
  notes: NOTE('9:12–9:14', 'Show the two finished examples: Jordan Rivera’s site and the space-theme game. Ask who’d use each. Then the three kinds of file. Back in ’95 I was doing tech support at an ISP, and a web page was a text file you typed by hand. It still is. HTML is structure: headings, sections, buttons. CSS is appearance: colors, spacing, fonts. JavaScript is behavior: what happens when you click. Your browser reads them off your laptop; hosting puts the same files where everyone else’s browser can. Backends and databases exist; neither project needs them today. The AI helps write the files; the finished site and game never call one.', 'the word “backend” causing panic. One sentence and move on.', 'everyone can point at the heading in the file and the same heading on screen.') });
B1(s);
title(s, 'Both are a few plain files in a folder.');
s.addImage({ path:ASSETS+'slate-375-crop.png', x:M, y:1.95, w:1.2, h:4.0 });
s.addImage({ path:ASSETS+'game-space-crop.png', x:2.1, y:1.95, w:1.75, h:2.72 });
text(s, 'A website about you', M, 6.0, 1.9, 0.3, { mono:true, size:11, color:ORANGE });
text(s, 'A game you can hand to a friend', 2.1, 4.75, 2.6, 0.3, { mono:true, size:11, color:ORANGE });
defs(s, [['HTML','Structure. Headings, sections, links, buttons: what is on the page.'],['CSS','Appearance. Colors, spacing, fonts, how it fits a phone.'],['JavaScript','Behavior. What happens when you click: health goes down, a square is claimed.']], { x:4.7, w:W-M-4.7, y:2.1, pitch:1.05, tw:2.2, mono:true, tcolor:ORANGE, tsize:17 });
text(s, 'The AI helps write the files. The finished site and game never call an AI.', 4.7, 5.4, W-M-4.7, 0.5, { size:16, color:MUTED });

// 11–16 The loop, one step per slide: the strip is the hero, the active step is filled
function stepSlide(stage, name, ttl, example, question, notes, extra){
  const s = slide({ name:'The loop, one step: '+name, notes });
  B1(s, '9:14 – 9:17');
  title(s, ttl);
  loopHero(s, stage, { y:1.95, h:0.95 });
  para(s, example.split('\n'), { y:3.75, w:6.6, h:1.6, size:15, gap:8 });
  label(s, 'The question you ask yourself', 7.7, 3.75, 4.9);
  text(s, question, 7.7, 4.1, 4.93, 1.3, { size:20, bold:true, color:INK });
  if (extra) extra(s);
  here(s, stage);
  return s;
}
stepSlide('DESCRIBE', 'Describe', 'Describe: say what you want, like briefing a contractor.',
  'Website: “A one-page site about me, from my resume, with a working email link.”\nGame: “Tic-tac-toe where each square is won in a short battle.”',
  'What would I show a friend to prove it works?',
  NOTE('9:14–9:17', 'Describe. One sentence, the way you’d brief a contractor: what it is, who it’s for, what done looks like. Not how to build it. If you can’t say what you’d show a friend to prove it works, you’re not ready to type.', 'paragraphs. One sentence.', 'none; thirty seconds.'));
stepSlide('PLAN', 'Plan', 'Plan: make it tell you before touching a file.',
  'Website: one index.html, three hand checks.\nGame: board, then battle, then connected. Three checks each.',
  'Does the file list match my sketch? Is anything in it I didn’t ask for?',
  NOTE('9:14–9:17', 'Plan, the new step. Before it writes a file, make it list the files, the order, and three checks you can do by hand. Read it like a contractor’s quote: anything you didn’t ask for? Biggest thinking model for the plan, middle model to build. A bad plan costs an hour; reading one costs three minutes.', 'the chatbot already typing code. Stop it; ask for the plan.', 'none; thirty seconds.'),
  (s)=>{ promptCard(s, 'Before you write any code, give me the plan: the files you will create or change, one line on what each does, the order you\'ll do them in, and three checks I can perform by hand to know it worked. Flag anything in my brief that is bigger than one screen, one input, one result. Do not build yet.', M, 4.9, CW, 1.6, { label:'THE PLAN PROMPT · docs/plan-first-and-models.md · VERBATIM' }); });
stepSlide('BUILD', 'Build', 'Build: ask for the smallest version that could work.',
  'Website: the whole page, with your words in it. Nothing else yet.\nGame: the board alone, with two stand-in buttons for the battle.',
  'What is the smallest thing I can check in five minutes?',
  NOTE('9:14–9:17', 'Build. Ask for the smallest version that could work, one file, and nothing you can’t check in five minutes. The website is the whole page with your words. The game starts as a board with two stand-in buttons. Small builds make small diffs, and small diffs are the ones you can read.', 'asking for the whole game at once. Board first.', 'none; thirty seconds.'));
stepSlide('CHECK', 'Check', 'Check: open it, click it, phone it.',
  'Website: every link, fits a phone, print preview, no “Jordan” anywhere.\nGame: win, lose, draw, and Restart, each seen once.',
  'What did I actually see, not what did the chatbot say?',
  NOTE('9:14–9:17', 'Check. Open it, click it, open it on your phone, and write down what you saw. The chatbot saying “done” is not a check. For the website: every link, fits a phone, prints, no Jordan left. For the game: win, lose, draw, restart, each one seen with your own eyes.', 'trusting the chatbot’s summary. Your eyes, every time.', 'none; thirty seconds.'));
stepSlide('SAVE', 'Save', 'Save: keep the version that passed, with a name.',
  'Website: commit to GitHub, “First version of my site.”\nGame: “First playable version.” Increment 2 goes through a pull request.',
  'If the next change breaks it, where do I go back to?',
  NOTE('9:14–9:17', 'Save. Keep the version that passed, in GitHub, with a message that says what it is. “First version of my site.” Now when the next change breaks it, and one will, you have a place to go back to. Nothing in GitHub is lost.', 'saving only at the end of the day. Save every time a check passes.', 'none; thirty seconds.'));
stepSlide('PUBLISH', 'Publish', 'Publish: put it where someone else can open it.',
  'Website: a vercel.app URL on a classmate’s phone by 11:30.\nGame: a second vercel.app URL by 4:35.',
  'Does it open on someone else’s phone, not just mine?',
  NOTE('9:14–9:17', 'Publish. Put it where someone else can open it: a vercel.app URL, on a classmate’s phone, not yours. Only the version that passed its checks. The website by 11:30, the game by 4:35. Then back to describe for the next increment.', 'publishing before the checks. Only what passed.', 'none; thirty seconds.'));

// 17 The lifecycle, first three questions
s = slide({ name:'Block 1: the lifecycle, before you build',
  notes: NOTE('9:17–9:18', 'Walk the first three with both projects. Discover: who’s this for? For the site, a recruiter on a phone. For the game, a friend with ninety seconds. Define: what must the first version do? Three sections and a working email link; one playable round with a restart that works. Design: what will they see? A page outline; three sketched screens. These three happen before anyone types a prompt, and they prevent most of the afternoon’s trouble.', 'people treating this as theory. Every one of these becomes a slide this afternoon.', 'none; this is a talk slide.') });
B1(s);
title(s, 'Before you build: three questions.');
cols(s, [['Discover','Who is this for?',ORANGE,['Website: a recruiter on a phone.','Game: a friend with 90 seconds.']],['Define','What must version one do?',ORANGE,['Website: three sections, a working email link.','Game: one playable round, restart works.']],['Design and plan','What will the person see?',ORANGE,['Website: a centered or sidebar wireframe.','Game: three screens, sketched.']]], { y:2.2, hh:0.9, hsize:20, size:15 });

// 18 The lifecycle, build through maintain
s = slide({ name:'Block 1: the lifecycle, build through maintain',
  notes: NOTE('9:17–9:18', 'Build: the smallest useful version. One index.html for the site; board, then battle, then connected for the game. Test: does the behavior match the promise? Six checks before the site goes public; win, lose, draw, and restart observed for the game. Release: which version did we actually publish? A vercel.app URL open on a phone. Maintain: what should change after people use it? One skill from the menu, one game extension, each with its own check. It’s a loop. A game that feels unfair needs a rule change. A confusing site needs a clearer purpose. And you’re saving the whole way through.', 'people treating this as theory. Every row becomes a slide this afternoon.', 'none; this is a talk slide.') });
B1(s);
title(s, 'Then build, test, release, maintain. And repeat.');
defs(s, [['Build','The smallest useful version. One index.html; board, then battle, then connected.'],['Test','Does it do what you promised? Six checks; win, lose, draw, restart.'],['Release','Which version did we publish? A vercel.app URL on a phone.'],['Maintain','What changes after people use it? One skill; one extension, one check.']], { tw:2.6, pitch:0.9 });

// 19 Four tools, drawn as the flow between them
s = slide({ name:'Block 1: four tools, four jobs',
  notes: NOTE('9:18–9:19', 'Four tools, four jobs. The chatbot drafts and changes the files. Git tracks changes underneath; you won’t type a Git command today. GitHub stores the project and its history in your account. Vercel hosts the published version. People mix up Git and GitHub all day: GitHub is the website that stores it, Git is the tracking underneath. Today you only touch GitHub.', 'confusing GitHub with Git. GitHub is the website that stores it; Git is the tracking underneath. Today you only touch GitHub.', 'everyone can say what GitHub is for and what Vercel is for.') });
B1(s);
title(s, 'Four tools, four jobs.');
{ const y=2.5, h=1.1, w=3.3, g=(CW-3*w)/2;
  node(s, 'Your chatbot', M, y, w, h, { fill:WHITE, line:INK, color:INK, size:20 });
  node(s, 'GitHub', M+w+g, y, w, h, { fill:BLUE, size:20 });
  node(s, 'Vercel', M+2*(w+g), y, w, h, { fill:BLUE, size:20 });
  arrowLine(s, M+w+0.05, y+h/2, M+w+g-0.05, y+h/2, { color:INK, width:1.5 });
  arrowLine(s, M+2*w+g+0.05, y+h/2, M+2*w+2*g-0.05, y+h/2, { color:INK, width:1.5 });
  text(s, 'you upload, or v0 pushes', M+w, y-0.4, g, 0.3, { size:12, color:DIM, align:'center' });
  text(s, 'every push', M+2*w+g, y-0.4, g, 0.3, { size:12, color:DIM, align:'center' });
  text(s, 'Drafts and changes the files. ChatGPT, Claude, Gemini, or v0.', M, y+h+0.2, w, 0.9, { size:15 });
  text(s, 'Stores the project and its history, in your account.', M+w+g, y+h+0.2, w, 0.9, { size:15 });
  text(s, 'Hosts the published version at a URL anyone can open.', M+2*(w+g), y+h+0.2, w, 0.9, { size:15 });
  // Git sits underneath GitHub
  box(s, M+w+g-0.9, y+h+1.2, w+1.8, 0.6, { fill:CARD2, line:CARD2 });
  text(s, 'Git', M+w+g-0.7, y+h+1.2, 0.8, 0.6, { mono:true, size:15, bold:true, color:INK, valign:'middle' });
  text(s, 'tracks every change underneath GitHub. You won’t type a Git command today.', M+w+g-0.0, y+h+1.2, w+0.8, 0.6, { size:13, color:MUTED, valign:'middle' });
}
here(s, 'SAVE');

// 20 Four words
s = slide({ name:'Block 1: four words you will hear all day',
  notes: NOTE('9:18–9:19', 'Four words. Repository: the project folder and its whole history. Commit: a named checkpoint, like “Added my About section.” Branch: a separate line of changes you can try without touching the live one. Pull request: a proposed change for review, with a preview, before it goes live. Now I show one small heading change on the projector and the difference from the earlier version. That’s the whole mechanism. Everything else today is this, repeated.', 'eyes glazing at vocabulary. The projector demo is the fix; don’t skip it.', 'everyone can say what GitHub is for and what Vercel is for.') });
B1(s);
title(s, 'Four words you’ll hear all day.');
defs(s, [['Repository','The project folder and its whole history.'],['Commit','A named checkpoint. “Added my About section.”'],['Branch','A separate line of changes that never touches the live one.'],['Pull request','A proposed change for review, with a preview, before it goes live.']], { tw:3.4, pitch:0.85, mono:true, tcolor:ORANGE, tsize:18 });
text(s, 'On the projector: one heading change, and the difference from the earlier version.', M, 5.8, CW, 0.4, { size:14, color:MUTED, italic:true });
here(s, 'SAVE');

// 21 Place four actions
s = slide({ name:'Block 1: where do these four go?',
  notes: NOTE('9:19–9:20', 'One minute of participation. Put four actions on the loop: choose the website’s audience, describe what its button does, test the game’s restart, publish a checked version. Call on four tables. Don’t wait for hands; pick a table and ask.', 'nobody answering. Pick a table by name; don’t wait for volunteers.', 'everyone can place “test the restart” and “publish a checked version” on the loop.') });
B1(s);
title(s, 'Where do these four go on the loop?');
numbered(s, ['Choose the website’s audience','Describe what its button does','Test the game’s Restart','Publish a checked version'], { y:1.9, h:2.2, size:18, gap:6 });
loopHero(s, null, { y:4.35, h:0.9 });

// 22 Is it finished?
s = slide({ name:'Block 1: is it finished?',
  notes: NOTE('9:19–9:20', 'Then the question: a beautiful game with incorrect scoring, is it finished? No. Working beats pretty, every time today. I’ve shipped pretty things that didn’t work, and I’d rather not do it again in front of you. Close the block with the sentence on the slide, out loud, and we go look at the map of tools.', 'someone arguing for pretty. Pretty is this afternoon at 3:00; working comes first.', 'everyone can place “test the restart” and “publish a checked version” on the loop.') });
B1(s);
title(s, 'Is a beautiful game with wrong scoring finished?');
label(s, 'The sentence for the day', M, 2.6, CW);
text(s, 'Describe the outcome, build in small steps, check the evidence, save progress.', M, 3.0, CW, 2.0, { size:34, bold:true, color:INK });

// ---- 9:20 The map of tools (docs/platform-landscape.md) ----
// 23 The spectrum: where your code lives afterward
s = slide({ name:'The map of tools: where your code lives afterward',
  notes: NOTE('9:20–9:25', 'Every tool on this line turns a sentence into a working app. The demo is never the difference; where your code lives afterward is. Left end: the builder keeps code and data on its servers. Right end: a repository you own, deployed to your Vercel. Emergent and Base44 sit left: code comes out, data and backend stay. Lovable, Bolt, and Replit sync two ways with a repository you own. v0, today’s tool, commits to a branch, opens a pull request, and deploys to your Vercel. Claude Code, Codex, and Cursor: it’s your folder. None is a bad tool. Read the line before you pay.', 'people asking which one is best. Ask them where they want the code to live next month.', 'everyone can point at the spot on the line where their code would live.') });
kicker(s, 'The map of tools · docs/platform-landscape.md', '9:20 – 9:30');
title(s, 'Eight tools, one line: where does your code live afterward?');
lede(s, 'Placed by the “Your GitHub?” column of the landscape doc. Prices and menus drift; the line doesn’t.');
{ const y=4.35, x0=M+0.5, x1=W-M-0.5;
  arrowLine(s, x0, y, x1, y, { color:INK, width:2.5 });
  text(s, '◀  HOSTED BUILDER · their code, their servers', M, 2.2, 6, 0.3, { mono:true, size:11, bold:true, color:MUTED });
  text(s, 'YOUR REPO · your Vercel  ▶', W-M-6, 2.2, 6, 0.3, { mono:true, size:11, bold:true, color:MUTED, align:'right' });
  const tools = [[0.04,'Emergent','GitHub only on paid plans; which way it syncs is unverified'],[0.17,'Base44','Code syncs; your data and backend stay on Base44'],[0.31,'Google AI Studio','Push, import, or download a ZIP'],[0.45,'Lovable','Two-way sync, one branch, every plan'],[0.58,'Bolt.new','Two-way sync; imports a repo you already have'],[0.70,'Replit','Two-way through its own Git pane'],[0.84,'v0','Branch and pull request into your repo; deploys to your Vercel'],[0.97,'Claude Code\nCodex · Cursor','It is your folder. You make the commit.']];
  tools.forEach(([p,name,why],i)=>{ const x=x0+p*(x1-x0), up=i%2===0, c=name==='v0'?ORANGE:BLUE, lw=2.5;
    s.addShape(pres.ShapeType.ellipse, { x:x-0.13, y:y-0.13, w:0.26, h:0.26, fill:{ color:c }, line:{ color:WHITE, width:1 } });
    arrowLine(s, x, up?y-0.16:y+0.16, x, up?y-0.55:y+0.55, { color:LINE, width:1, head:false });
    const two = name.includes('\n'), nh = two?0.6:0.34, ty = up ? y-1.75 : y+0.6;
    text(s, name, x-lw/2, ty, lw, nh, { size:name.length>12?13:15, bold:true, color:c, align:'center', valign:up?'bottom':'top', lsm:1.0 });
    text(s, why, x-lw/2, ty+nh+0.02, lw, 0.85, { size:11.5, color:MUTED, align:'center', valign:up?'bottom':'top' });
  });
}

// 24 The one question, and three cautionary facts
s = slide({ name:'The map of tools: the one question and three facts',
  notes: NOTE('9:25–9:30', 'One question to ask any tool, any sales rep, any demo: where does my code live afterward, and can I take it with me? Three facts, all verified, with dates. July 2025: Replit’s agent deleted a production database during a code freeze; rollback worked, the CEO called it unacceptable, and Replit now separates development and production. May 2025: one in ten scanned Lovable apps had a database anyone could read; Lovable added a pre-publish scan. June 2025: Wix bought Base44 six months after launch. None of these is a reason to avoid the tools. They’re the reasons for GitHub, your own secrets, and reading the diff, which is the rest of today. docs/platform-landscape.md has the prices and the sources.', 'this turning into a vendor fight. Receipts, then move on.', 'everyone can say the question out loud.') });
kicker(s, 'The map of tools · docs/platform-landscape.md', '9:20 – 9:30');
title(s, 'The one question to ask any tool.');
text(s, '“Where does my code live afterward, and can I take it with me?”', M, 1.8, CW, 1.3, { size:32, bold:true, color:ORANGE });
label(s, 'Three cautionary facts, verified, with dates', M, 3.5, CW);
defs(s, [['July 18, 2025','Replit’s agent deleted a production database during a code freeze. Rollback worked. Replit now separates development and production databases.'],['May 30, 2025','CVE-2025-48757: one in ten scanned Lovable apps had a database anyone could read or write. Lovable added a pre-publish scan.'],['June 18, 2025','Wix bought Base44, six months after launch, for about $80 million. The product you build on can change owners.']], { y:3.9, pitch:0.78, tw:2.6, mono:true, tsize:14, size:14 });

// ---- Block 2: Setup (9:30–9:55) ----
const B2 = (s, time) => kicker(s, 'Block 2 · Setup', time||'9:30 – 9:55');
// 25 Three accounts, one loop: three nodes, labeled arrows, and the return
s = slide({ name:'Setup: your three accounts, one loop',
  notes: NOTE('9:30–9:32', 'Three accounts, and they chain together. GitHub is the system of record: every version of every file, in your name. v0 writes the code: you describe, it generates a working app, and it comes with a free Vercel account, so sign in with GitHub and you’ve got it. Vercel ships: every push to GitHub becomes a live URL. The arrow runs left to right and loops back: v0 pushes to GitHub, GitHub triggers Vercel, you look at the URL and describe the next change. Most of you made these accounts in the prework; the next slides confirm each one works.', 'people with a Vercel account under a different email than GitHub. Sign in to Vercel with GitHub so the two are linked.', 'everyone can point at the three tabs in their browser.') });
B2(s);
title(s, 'Three accounts, one loop.');
lede(s, 'v0 writes, GitHub remembers, Vercel ships. Nothing is installed on your laptop.');
{ const d=1.9, y=2.55, cx=[2.9, 6.665, 10.43];
  [['v0',ORANGE,'Writes the code you describe','v0.app · sign in with GitHub'],['GitHub',BLUE,'Remembers every version of every file','github.com · free'],['Vercel',BLUE,'Ships every push as a live URL','vercel.com · sign in with GitHub']].forEach(([nm,c,job,where],i)=>{ const x=cx[i]-d/2;
    s.addShape(pres.ShapeType.ellipse, { x, y, w:d, h:d, fill:{ color:c }, line:{ color:c, width:0 } });
    s.addText(nm, { x, y, w:d, h:d, fontFace:SANS, fontSize:26, bold:true, color:WHITE, align:'center', valign:'middle', margin:0 });
    text(s, job, x-0.5, y+d+0.15, d+1.0, 0.6, { size:15, align:'center' });
    text(s, where, x-0.7, y+d+0.8, d+1.4, 0.3, { mono:true, size:11, color:DIM, align:'center' }); });
  arrowLine(s, cx[0]+d/2+0.1, y+d/2, cx[1]-d/2-0.1, y+d/2, { color:INK, width:2 });
  arrowLine(s, cx[1]+d/2+0.1, y+d/2, cx[2]-d/2-0.1, y+d/2, { color:INK, width:2 });
  text(s, 'pushes the code', cx[0]+d/2, y+d/2-0.45, cx[1]-cx[0]-d, 0.3, { size:12, color:DIM, align:'center' });
  text(s, 'deploys every push', cx[1]+d/2, y+d/2-0.45, cx[2]-cx[1]-d, 0.3, { size:12, color:DIM, align:'center' });
  const yr = y+d+1.25;
  arrowLine(s, cx[2], y+d+1.15, cx[2], yr, { color:INK, head:false }); arrowLine(s, cx[2], yr, cx[0], yr, { color:INK, head:false }); arrowLine(s, cx[0], yr, cx[0], y+d+1.15, { color:INK, width:2 });
  text(s, 'you open the URL on your phone and describe the next change', cx[0]+0.5, yr+0.05, cx[2]-cx[0]-1.0, 0.3, { mono:true, size:11, color:DIM, align:'center' });
}

// 26 GitHub repository
s = slide({ name:'Setup: GitHub repository',
  notes: NOTE('9:32–9:36', 'Everyone makes one empty repository now. Plus, New repository. You’re the owner. Name it my-first-site. Initialize it with a README so there’s a first saved file. Pick public or private on purpose; private doesn’t make the website private, Vercel decides that. Copy the URL into your notes. The game gets its own repository this afternoon, my-first-game. Don’t put the game in this one.', 'two-factor prompts and organization accounts. Use a personal account. If GitHub wants a code, that’s normal; the student types it, not the helper.', 'you can open your repository, read the README, and the owner is your account.') });
B2(s);
title(s, 'GitHub: one empty repository with your name on it.');
lede(s, 'Done when: you open your repository, read the README, and the owner shown is you, not me.');
numbered(s, ['Open github.com, signed in. Click “+” then “New repository.”','Owner: you. Name: my-first-site. Public or private, on purpose.','Tick “Add a README.” Click “Create repository.”','Copy the repository URL into your notes. This is your project.'], { y:2.4, h:2.8, size:18, gap:14 });
text(s, 'This afternoon the game gets its own repository, my-first-game. Never this one.', M, 5.5, CW, 0.4, { size:15, color:MUTED });
stickies(s); here(s, 'SAVE');

// 27 A ten-minute tour of GitHub: six screens
s = slide({ name:'A ten-minute tour of GitHub: the six screens',
  notes: NOTE('9:36–9:38', 'Six screens, in the order you’ll meet them, on the projector in my own repository. Home is the Code tab: the file list, the README, Add file. Commits is the history, one row per saved change. Click a row and you get the diff: green added, red removed. The branch dropdown says main; type a new name and GitHub offers to make a branch. Pull requests is where a branch gets reviewed and merged. Settings holds visibility and collaborators; nothing in there asks for your password except delete, and you’ll never need delete today. That’s the whole interface you need.', 'people clicking Clone or the Actions tab. Not today.', 'everyone can name the six screens.') });
B2(s);
title(s, 'A ten-minute tour of GitHub: six screens, in this order.');
{ const tiles = [['Home · the Code tab','The file list, the README, the green Code button, Add file.'],['Commits','The history: one row per saved change, with its message.'],['A commit','The diff: green lines added, red lines removed.'],['Branches','The dropdown that says main. Type a name to make a safe copy.'],['Pull requests','Review a branch, then merge it. Or close it: no.'],['Settings','Public or private. Collaborators. Nothing asks for your password except delete.']];
  const w=3.78, h=1.75, g=(CW-3*w)/2, y0=2.0;
  tiles.forEach(([nm,what],i)=>{ const x=M+(i%3)*(w+g), y=y0+Math.floor(i/3)*(h+0.4);
    box(s, x, y, w, h, { fill:WHITE, line:INK, lw:1 });
    box(s, x, y, w, 0.34, { fill:CARD2, line:INK, lw:1 });
    [0.18,0.36,0.54].forEach(dx=> s.addShape(pres.ShapeType.ellipse, { x:x+dx, y:y+0.11, w:0.12, h:0.12, fill:{ color:DIM }, line:{ color:DIM, width:0 } }));
    text(s, String(i+1), x+w-0.5, y+0.02, 0.4, 0.3, { mono:true, size:11, bold:true, color:ORANGE, align:'right' });
    text(s, nm, x+0.2, y+0.5, w-0.4, 0.4, { size:17, bold:true });
    text(s, what, x+0.2, y+0.95, w-0.4, 0.75, { size:13, color:MUTED }); });
}

// 28 The tour as a guided exercise
s = slide({ name:'A ten-minute tour of GitHub: do it once yourself',
  notes: NOTE('9:38–9:41', 'Now you. Five steps. You already made my-first-site with a README; that’s step one done. Upload one of the website starters from website-starters/ with the message “Add starter page.” Open Commits, open that commit, find your file in the diff. Edit the README in the browser: one line that says what the site will be. Commit it. Open Commits again. Two rows. You just ran the loop with no chatbot: change, save, history. If every message in Commits says “Update index.html,” that’s a lesson for your prompts later: ask for a message that says what changed.', 'the upload landing in a folder, or the commit message left blank.', 'two commits in your own repository, and you have opened the diff of one.') });
B2(s);
title(s, 'Do the tour once yourself. Five steps.');
lede(s, 'Done when: Commits shows two rows in your repository and you have opened one diff.');
numbered(s, ['Create my-first-site with a README. You just did this.','Upload one starter from website-starters/ with “Add file” → “Upload files.” Message: “Add starter page.”','Open Commits, open that commit, find your file in the diff.','Edit the README in the browser: one line that says what the site will be. Commit it.','Open Commits again. Two rows. That was the loop with no chatbot: change, save, history.'], { y:2.4, h:3.2, size:16, gap:11 });
stickies(s); here(s, 'SAVE');

// 29 The one rule that never bends
s = slide({ name:'The one rule that never bends',
  notes: NOTE('9:41–9:42', 'Say it with me: nothing that unlocks an account goes into a chat window. Ever. Not your password, not a key, not a token. Chats get logged, summarized, shared, and trained on. An agent that read your key may write it into a file, that file may land in GitHub, and bots read GitHub for exactly that within minutes. Today needs almost no secrets; GitHub, Vercel, and v0 sign you in through Authorize screens, which is the safe pattern. You approve, they swap tokens between themselves, and you never touch one.', 'someone who already pasted a key into a chatbot this year. Rotate it tonight.', 'everyone can say the rule in one sentence.') });
kicker(s, 'The one rule · docs/secrets-tokens-and-the-clipboard.md', '9:41 – 9:43');
s.addText('Nothing that unlocks an account goes into a chat window. Ever.', { x:M, y:2.1, w:CW, h:3.0, fontFace:SANS, fontSize:44, bold:true, color:INK, margin:0, isTextBox:true, valign:'middle', lineSpacingMultiple:1.1 });

// 30 Where secrets live: Yes and Never, the clipboard move, the prompt
s = slide({ name:'The one rule: where secrets live, and the clipboard move',
  notes: NOTE('9:42–9:43', 'Where secrets live: your password manager, your Vercel project’s environment variables, a .env.local file that’s in .gitignore. Where they never go: a chat window, the code, a README, a commit message, a screenshot. The first time you need one today is the skills-menu contact form. The clipboard move: copy the key from your password manager, and one command moves it from the clipboard into Vercel. Your eyes see it; the agent never does. Don’t type that command from memory; ask for it with the prompt on the screen. If the agent says “paste your key here,” say no. Composio, authorize-don’t-paste for Slack and Gmail, is the sprint 3 bonus if most tables have published by 4:50.', '“but it’s just a test key.” Same rule.', 'everyone can name one Yes place and one Never place.') });
kicker(s, 'The one rule · docs/secrets-tokens-and-the-clipboard.md', '9:41 – 9:43');
title(s, 'Where a secret lives. Where it never goes.');
cols(s, [['Yes',null,GREEN,['Your password manager: the source of truth.','Vercel → your project → Settings → Environment Variables.','A .env.local file, if .gitignore lists it.']],['Never',null,RED,['A chat window.','The code, a README, a commit message, an issue.','A screenshot, a slide, a shared doc.']]], { y:1.85, size:15, gap2:6, h:1.7 });
label(s, 'The clipboard move: copy the key, then one command moves it. The agent never sees it.', M, 3.75, CW);
text(s, 'pbpaste | vercel env add RESEND_API_KEY production', M, 4.08, CW, 0.4, { mono:true, size:18, bold:true, color:INK });
promptCard(s, 'I have the Resend API key on my clipboard. Give me the one command that saves it into .env.local as RESEND_API_KEY using pbpaste, and the line to add to .gitignore. Do not ask me to paste the key.', M, 4.65, CW, 1.45, { label:'ASK FOR THE COMMAND, NOT THE VALUE · VERBATIM' });

// 31 Vercel + v0
s = slide({ name:'Setup: Vercel and v0',
  notes: NOTE('9:43–9:48', 'Vercel’s the host and v0 comes with it. Sign in to Vercel with GitHub; that links the two and lets Vercel see your repository. Authorize the GitHub integration for my-first-site when it asks. Then open v0.app and sign in with the same account; it’s included with the free Vercel plan. Then stop. Don’t import, don’t deploy, don’t generate anything yet. Vercel Hobby is for noncommercial personal use. A site about you is fine today. A business site needs a paid plan later.', 'Vercel asking for a team name or a plan. Personal account, Hobby, no card. v0 showing a different account than Vercel: sign out and back in with GitHub.', 'signed in to Vercel and v0 with the same GitHub account; my-first-site visible in the import list; nothing deployed.') });
B2(s);
title(s, 'Vercel and v0: sign in with GitHub, then stop.');
lede(s, 'Done when: Vercel and v0 both show your GitHub account, my-first-site is in the import list, nothing is deployed.');
numbered(s, ['vercel.com → “Continue with GitHub.” Authorize it in Vercel’s own window.','Let Vercel see my-first-site. Check it appears under “Add New” → “Project.” Don’t import.','v0.app → sign in. Find the GitHub option, grant “only select repositories,” pick my-first-site.','Stop. Nothing deployed, nothing generated. We build at 10:00.'], { y:2.4, h:3.0, size:17, gap:13 });
stickies(s); here(s, 'PUBLISH');

// 32 Two ways to build today, drawn as two chains
s = slide({ name:'Setup: two ways to build today',
  notes: NOTE('9:48–9:51', 'Two ways to build, same prompts, same checks. v0 is featured: describe in the v0 chat, it generates a React app with a live preview, click Deploy, connect it to GitHub so every version gets pushed there. The portable route is any chatbot that returns files: ChatGPT, Claude, Gemini, Copilot. Save index.html, upload to GitHub in the browser, import in Vercel. The examples and checkpoints are single HTML files; they work as is on the portable route. v0 produces a React app, so you hand it the example as the style reference and your resume template as the content. Claude Code or Codex? Connected portable route; you review the pull request.', 'people switching routes mid-morning. Pick one by 10:00, stay on it until lunch.', 'every pair has written their route at the top of their notes.') });
B2(s);
title(s, 'Two ways to build. Same prompts, same checks.');
lede(s, 'Pick one by 10:00 and write it at the top of your notes. Stay on it until lunch.');
{ const chain = (y, lab, c, steps, note) => { label(s, lab, M, y, CW, { color:c }); const k=steps.length, g=0.45, w=(CW-(k-1)*g)/k; steps.forEach((t,i)=>{ const x=M+i*(w+g); node(s, t, x, y+0.4, w, 0.75, { fill:i===k-1?c:WHITE, line:c, color:i===k-1?WHITE:INK, size:15 }); if(i<k-1) arrowLine(s, x+w+0.05, y+0.775, x+w+g-0.05, y+0.775, { color:c, width:1.5 }); }); text(s, note, M, y+1.25, CW, 0.4, { size:14, color:MUTED }); };
  chain(2.35, 'The v0 route · featured', ORANGE, ['Describe in the v0 chat','Live preview, a React app','Click Deploy','Connect to GitHub: my-first-site'], 'Every version lands in your repository. Hand v0 the example as the style reference and your template as the content.');
  chain(4.25, 'The portable route · any chatbot that returns files', BLUE, ['ChatGPT, Claude, Gemini, Copilot','Save as index.html','Upload to GitHub in the browser','Import in Vercel'], 'Every example and checkpoint is one HTML file; it works here as is. Claude Code or Codex: same route, and you review the pull request.');
}
here(s, 'DESCRIBE');

// 33 Capability check
s = slide({ name:'Setup: the capability check',
  notes: NOTE('9:51–9:55', 'Prove the route works before you need it. Connected route: paste the prompt on the slide. The answer has to separate what it verified from what it hasn’t tried. Then ask it for a one-sentence README improvement, look at the difference, and save it through the pull request. Portable route: ask your chatbot for a one-line index.html that says hello with your name, save it as index.html, double-click it. If your name shows in the browser, your route works. If something fails, write down the exact failure. We don’t fix accounts for twenty minutes.', 'the file saved as index.html.txt on Windows. Save with “All files” type. That’s stuck.md row two.', 'green sticky when your route produced a file you opened, or a saved README change.') });
B2(s);
title(s, 'Prove your route works now, not at 11:30.');
promptCard(s, 'Identify the GitHub account, repository, and branch for this class project. Read the README. Tell me which of these you can actually do here: edit project files, run checks, create a branch or pull request, and inspect Vercel deployments. Distinguish what you verified from what you have not tried. Do not change the repository or deploy anything yet.', M, 1.85, CW, 2.05, { label:'CONNECTED ROUTE (CLAUDE CODE, CODEX) · TYPE THIS, VERBATIM' });
label(s, 'v0 and portable routes: the check', M, 4.1, CW);
numbered(s, ['v0: ask for a one-screen page that says hello with your name. Don’t deploy.','Portable: ask for a one-line index.html that says hello. Save as index.html, “All files” type. Double-click it: your name shows in the browser.','Something fails? Write down the exact message and move on. Helpers fix accounts at the break.'], { y:4.45, h:1.8, size:15, gap:7 });
stickies(s); here(s, 'CHECK');

// 34 Plan with the biggest model, build with the middle, tidy with the smallest
s = slide({ name:'Plan first: the right size model for each job',
  notes: NOTE('9:55–10:00', 'Five minutes, two habits. First, make it tell you the plan before it touches a file. Claude Code: Shift+Tab until the prompt says plan; it can’t change files until you approve. ChatGPT and Claude.ai: pick the thinking model in the selector, then type the plan prompt from the Plan step. Second, spend your best model on the plan and cheaper ones after. Biggest, thinking model: the brief, the plan, reading a diff, getting unstuck. Middle: generate the files, make one change. Smallest: rename things, alt text, commit messages. Only one model on a free plan? Use its thinking option for the plan, off for chores. Names drift; the sizes don’t.', 'people hunting for the toggle for five minutes. The prompt alone does the job.', 'everyone knows where the thinking toggle is in their own chatbot.') });
kicker(s, 'Plan first · docs/plan-first-and-models.md', '9:55 – 10:00');
title(s, 'Plan with the biggest model, build with the middle, tidy with the smallest.');
{ const rungs = [['PLAN','The biggest, thinking model',CW,'The brief, the scope, the plan, reviewing a diff, deciding what to cut, getting unstuck after ten minutes.','Claude Opus-class · ChatGPT thinking or pro · Gemini Pro'],['BUILD','The middle model',CW*0.66,'Generate the files, make one change, add one feature from a skill.','Claude Sonnet-class · the standard ChatGPT model · Gemini Flash with thinking on'],['TIDY','The smallest, fastest model',CW*0.36,'Rename things, write alt text, summarize an error message, draft a commit message, reformat a list.','Claude Haiku-class · the ChatGPT mini tier · Gemini Flash-Lite']];
  rungs.forEach(([k,sz,w,jobs,ex],i)=>{ const y=2.0+i*1.4;
    box(s, M, y, w, 0.62, { fill:BLUE, line:BLUE });
    s.addText([{ text:k+'   ', options:{ bold:true, fontSize:16 } },{ text:sz, options:{ fontSize:14 } }], { x:M+0.25, y, w:w-0.5, h:0.62, fontFace:SANS, color:WHITE, valign:'middle', margin:0 });
    text(s, jobs, M, y+0.7, CW*0.62, 0.6, { size:14 });
    text(s, ex, M+CW*0.64, y+0.7, CW*0.36, 0.6, { size:11.5, color:DIM }); });
}
text(s, 'Claude Code: Shift+Tab until the prompt says plan. ChatGPT and Claude.ai: the thinking model in the selector, then the plan prompt.', M, 6.1, CW, 0.45, { size:14, color:MUTED });
here(s, 'PLAN');

// ---- Project 1: personal website (10:00–11:45) ----
const P1 = (s, k, name, time) => kicker(s, `Project 1 · Personal website · Step ${k} · ${name}`, time);
// 35 What done looks like
s = slide({ name:'Project 1: what done looks like',
  notes: NOTE('10:00–10:03', 'This is Jordan Rivera. Jordan doesn’t exist. This is the tested example in examples/personal-website, and by 11:45 every word on it is yours and it’s live. Six color themes and two layouts are built in; the picker’s in the footer. It prints as a resume, and the ADD-ON SLOT comments mark where the afternoon features go. Click through the themes on the big screen so people see the range. Time inside this block: export 10, content 20, build 30, colors 10, publish 20. Then we go get your content out of LinkedIn.', 'people wanting a different design. Today you change the words, the colors, and the layout. The structure is tested; keep it.', 'everyone has opened the example index.html from the course folder.') });
P1(s, 0, 'What done looks like', '10:00 – 11:45');
title(s, 'Meet Jordan Rivera. Jordan isn’t real.');
s.addImage({ path:ASSETS+'slate-centered-crop.png', x:M, y:1.95, w:3.9, h:3.9 });
s.addImage({ path:ASSETS+'ocean-sidebar-crop.png', x:4.8, y:1.95, w:3.9, h:3.9 });
text(s, 'slate · centered', M, 5.9, 3.9, 0.3, { mono:true, size:11, color:ORANGE });
text(s, 'ocean · sidebar', 4.8, 5.9, 3.9, 0.3, { mono:true, size:11, color:ORANGE });
text(s, 'examples/personal-website/index.html', 9.1, 1.95, 3.6, 0.6, { mono:true, size:11, color:ORANGE });
para(s, ['One file. Opens by double-click.','Six color themes, two layouts, a picker in the footer.','Prints as a tidy resume.','By 11:45 every word on it is yours.'], { x:9.1, y:2.5, w:3.55, h:3.4, size:16, gap:12 });
here(s, 'DESCRIBE');

// 36 Step 1: export LinkedIn
s = slide({ name:'Step 1: get your content out of LinkedIn',
  notes: NOTE('10:03–10:13', 'Ten minutes. Route A is the quick one: your own profile, the More button, sometimes labeled Resources, then Save to PDF. A file called Profile.pdf downloads. That’s your resume for today. Route B is the full export from Settings and Privacy; it emails you a link in about ten minutes, so start it now if you want your skills as text, and keep working on Route A meanwhile. No LinkedIn, or it won’t export? Open resume-template.md and type. Fifteen minutes of typing beats fifteen minutes of fighting a menu.', 'the menu label moving. Look for the words, not the position. Helpers have done this on a current account.', 'you can open the PDF or the template and see your name, headline, and at least two roles.') });
P1(s, 1, 'Export', '10:03 – 10:13');
title(s, 'Get your content out of LinkedIn.');
lede(s, 'Done when: you can see your name, headline, and at least two roles in the PDF or the template.');
cols(s, [['Route A · the quick PDF',null,BLUE,['1   Your own profile. Below the headline, “More” (sometimes “Resources”).','2   Choose “Save to PDF.” Profile.pdf downloads.','3   That’s your resume for today.']],['Route B · the full export',null,BLUE,['1   Your photo → Settings & Privacy → Data privacy → “Get a copy of your data.”','2   Choose the smaller option: profile, positions, education, skills.','3   LinkedIn emails a link in about ten minutes. Start it now.']],['No LinkedIn, or it won’t export?',null,ORANGE,['Open examples/personal-website/resume-template.md and type your details in.','Fifteen minutes of typing beats fifteen minutes of fighting a menu.']]], { y:2.4, size:15, gap2:9, h:3.2 });
stickies(s); here(s, 'DESCRIBE');

// 37 Step 2: privacy pass
s = slide({ name:'Step 2: decide what stays private',
  notes: NOTE('10:13–10:18', 'Five minutes, and it matters. The site is public and so is the chat you’re about to paste into. Before the chatbot sees your content, take out: phone number, street address, birth date, ID numbers, salary, anything about health or family, email addresses you don’t want strangers using, anything a former employer would call confidential. Keep: name, city, headline, work history with outcomes, skills, education, public links. Can’t edit the PDF? The next prompt leaves those out; check anyway. This is the step where people feel exposed. That’s fair. You decide what the world sees, and you can take anything down later.', 'the phone number sitting in the PDF header. LinkedIn puts it there. Check.', 'everyone has read their export once with the red list in hand.') });
P1(s, 2, 'Privacy pass', '10:13 – 10:18');
title(s, 'The site is public. So is the chat.');
lede(s, 'Can’t edit the PDF? The next prompt leaves these out. Check its output anyway.');
cols(s, [['Remove before the chatbot sees it',null,RED,['Phone number, street address, birth date.','ID numbers, salary, anything about health or family.','Email addresses you don’t want strangers using.','Anything a former employer would call confidential.']],['Keep',null,GREEN,['Name, city, and headline.','Work history, with outcomes.','Skills and education.','Public links.']]], { y:2.4, size:17, gap2:12, h:3.2 });
here(s, 'DESCRIBE');

// 38 Step 3: content prompt
s = slide({ name:'Step 3: turn the export into site content',
  notes: NOTE('10:18–10:38', 'Twenty minutes. Open the vc-project-brief skill, attach your resume PDF or the typed template, attach resume-template.md for the shape, and type the prompt exactly. It fills the template; it doesn’t build the site yet. Then you read every line. Think of the chatbot as a new hire on day one: smart, fast, and it has never met you. You’d read everything they wrote about you before it went out. Fix dates. Fix titles. Cut anything that sounds like a press release. This is the one step today where you’re the expert and the chatbot is not.', 'invented jobs and dates. Stuck.md row five: “Use only facts from my resume. Leave blanks blank. Do not invent.”', 'a completed resume-template.md with no placeholders and nothing you would not say to a stranger.') });
P1(s, 3, 'Content', '10:18 – 10:38');
title(s, 'Turn your export into site content.');
lede(s, 'Done when: resume-template.md is filled, with no placeholders and nothing you wouldn’t say to a stranger.');
promptCard(s, 'Read my attached resume and fill in resume-template.md with my real information only. Do not invent anything. Leave a field blank if the resume does not say. Rewrite each job as a title, employer, dates, and two or three bullets that state what changed because of my work, in plain English. Draft a three-paragraph About section in first person that sounds like a person, not a brochure. Leave out my phone number, street address, and birth date. Show me the result; do not build the site yet.', M, 2.3, CW, 2.5, { label:'ATTACH YOUR RESUME PDF + resume-template.md · TYPE THIS, VERBATIM' });
label(s, 'Then you do the expert part', M, 5.0, CW);
para(s, ['Read every line. Fix dates. Fix titles. Cut anything that sounds like a press release.','If it invented something, say so and ask again.'], { y:5.35, h:1.0, size:15, gap:4 });
stickies(s); here(s, 'DESCRIBE');

// 39 Step 4: build prompt
s = slide({ name:'Step 4: build the first version',
  notes: NOTE('10:38–10:45, continues at 11:00', 'Now the build. Use vc-build-small. Attach the example index.html and your completed template. Type the prompt exactly. The point of “keep every id, every CUSTOMIZE comment, every ADD-ON SLOT comment” is that the file stays compatible with the themes, the print stylesheet, and the afternoon features. Open the result by double-clicking it. Send it to your phone if you can. We break at 10:45; if your file isn’t open yet, that’s the first thing after the break.', 'a fragment instead of a whole file. Stuck.md row one: “Return the complete index.html file, every line, nothing omitted.”', 'your name in the browser tab, three roles visible, every link goes where it should, and nothing says “Jordan.”') });
P1(s, 4, 'Build', '10:38 – 10:45 · 11:00');
title(s, 'One prompt, one complete file back.');
lede(s, 'Done when: your name is in the tab, three roles are visible, every link works, and nothing says “Jordan.”');
promptCard(s, 'Using the attached index.html as the exact structure and style, replace all of Jordan Rivera\'s content with mine from resume-template.md. Keep every id, every CUSTOMIZE comment, every ADD-ON SLOT comment, the theme and layout system, and the print stylesheet. Delete the Projects section if my template has nothing for it. Return the complete file.', M, 2.3, CW, 2.1, { label:'ATTACH THE EXAMPLE index.html + YOUR resume-template.md · VERBATIM' });
label(s, 'Then check it', M, 4.6, CW);
numbered(s, ['Save as index.html. Double-click it.','Send it to your phone and open it there.','Search the page for “Jordan.” Find nothing.'], { y:4.95, h:1.4, size:15, gap:5 });
stickies(s); here(s, 'BUILD');

// 40 Step 4 on v0
s = slide({ name:'Step 4 on the v0 route: first generation',
  notes: NOTE('10:38–10:45, continues at 11:00', 'v0 route. v0 needs content, not a PDF, so steps 1 to 3 were the same. Attach your completed resume-template.md and, as a style reference, the example index.html. Type the prompt exactly. v0 writes a React app and shows a preview. Look at the preview: your name, your three roles, every link. Fix facts before you fix looks. The CSS variables line lets you change colors in one request at 11:00. Don’t press Deploy yet; that’s the 11:20 slide.', 'v0 inventing a quote or a testimonial. “Remove everything not in resume-template.md. Use only my facts.” And v0 adding a form or sign-in: “Version 1 has no form, no database, no sign-in.”', 'a preview with your name, three roles, and every link right. Same gate as the portable route.') });
P1(s, 4, 'Build · v0 route', '10:38 – 10:45 · 11:00');
title(s, 'On v0: one generation, then check facts before looks.');
promptCard(s, 'Build a one-page personal website from the attached resume-template.md. Use only the facts in it; invent nothing and leave blank fields out. Match the structure and restraint of the attached index.html: header with name and nav, hero with name, headline, city, and three link buttons, About, Experience, Skills, Education, optional Projects, Contact with a mailto link, footer. Use the "slate" palette from the reference as CSS variables so I can change colors later. No contact form yet. No images. Fits a phone. Readable code with short comments.', M, 1.85, CW, 2.75, { label:'ATTACH resume-template.md + THE EXAMPLE index.html AS STYLE REFERENCE · VERBATIM' });
label(s, 'Then check the preview', M, 4.8, CW);
numbered(s, ['Your name, your three roles, every link. Fix facts before you fix looks.','Something you didn’t ask for? “Version 1 has no form, no database, no sign-in.”','Don’t press Deploy yet. That’s 11:20.'], { y:5.15, h:1.3, size:15, gap:5 });
stickies(s); here(s, 'BUILD');

// 41 Break
breakSlide('Break', '10:45 – 11:00', 'Back at 11:00 sharp. Stickies up when you sit down.', ['index.html open in your browser with your name in the tab','Nothing on the page says “Jordan”','If not: the first ten minutes after the break are yours, helpers circulate'],
  NOTE('10:45–11:00', 'Fifteen minutes. Helpers go to every red sticky and every laptop that failed setup. Anyone without a file open yet gets the fallback: download the finished example, replace only the hero and About sections with your own words, and we publish that. A live page with three sections beats a perfect page still on your laptop.', 'people skipping the break to fight the chatbot. Send them out; the helper takes the laptop.', 'at 11:00 every pair has an index.html that opens.'));

// 42 Step 5: six themes as six color chips
s = slide({ name:'Step 5: choose your colors',
  notes: NOTE('11:00–11:08', 'Eight minutes, and it’s the fun part. Six themes are built in; the chips are the real colors, point at them. Use the picker in the footer, or add ?theme=forest to the end of the address. Try three. Pick one. Want a palette that’s actually yours? Pick one color, ask for a background, text, and accent that pass contrast checks, and write the three hex codes in project-state.md so the next chat doesn’t drift.', 'people spending the whole eight minutes picking. Two minutes to choose; the prompt two slides on locks it in.', 'everyone can say their theme id and layout out loud.') });
P1(s, 5, 'Colors', '11:00 – 11:08');
title(s, 'Six themes built in. Try three, pick one.');
lede(s, 'Use the picker in the footer, or add this to the end of the address:   ?theme=forest&layout=sidebar');
{ const themes = [['slate','F6F3EE','1C2333','1F3A93','Most professions; the safe default'],['forest','F1F5EF','1B2A1F','2F6B3F','Health, education, sustainability'],['sunset','FFF6EE','3A2318','C2410C','Creative and people-facing roles'],['ocean','0F1B2D','E8EEF8','5CC8FF','Technology, consulting'],['mono','FFFFFF','111111','D6336C','Design, writing, anyone who wants it quiet'],['plum','F8F3FA','2A1A30','6D2A7C','Marketing, events, speakers']];
  const w=1.75, g=(CW-6*w)/5, y=2.45, h=1.75;
  themes.forEach(([id,bg,tx,ac,good],i)=>{ const x=M+i*(w+g);
    box(s, x, y, w, h, { fill:bg, line:LINE, lw:1 });
    box(s, x+0.2, y+0.2, w-0.4, 0.22, { fill:ac, line:ac });
    s.addText('Your Name', { x:x+0.2, y:y+0.5, w:w-0.4, h:0.4, fontFace:SANS, fontSize:14, bold:true, color:tx, margin:0 });
    s.addText('Headline, city', { x:x+0.2, y:y+0.85, w:w-0.4, h:0.3, fontFace:SANS, fontSize:11, color:tx, margin:0 });
    box(s, x+0.2, y+1.25, 0.8, 0.3, { fill:ac, line:ac, r:0.04, shape:'roundRect' });
    s.addText('Email', { x:x+0.2, y:y+1.25, w:0.8, h:0.3, fontFace:SANS, fontSize:11, bold:true, color: id==='ocean'?'06243A':WHITE, align:'center', valign:'middle', margin:0 });
    text(s, id, x, y+h+0.12, w, 0.35, { mono:true, size:15, bold:true, color:INK, align:'center' });
    text(s, good, x-0.1, y+h+0.5, w+0.2, 0.8, { size:12, color:MUTED, align:'center' }); });
}
text(s, 'Want a palette that is yours? Pick one color, ask for background, text, and accent that pass contrast checks, and write the three hex codes in project-state.md.', M, 5.75, CW, 0.6, { size:14, color:MUTED });
here(s, 'BUILD');

// 43 Step 5: two layouts
s = slide({ name:'Step 5: two layouts',
  notes: NOTE('11:08–11:12', 'Two layouts, drawn as boxes and labels in docs/wireframes. Centered reads top to bottom and looks the same on a phone and a laptop. Sidebar keeps your name, links, and skills visible on a laptop and collapses to centered on a phone. If you want to change more than the palette, sketch on one of these first and paste the sketch into your prompt. Most of you won’t; you’ll pick one and lock it in on the next slide.', 'people redesigning. Two layouts, both tested. Pick one.', 'the page looks the same after a reload with no ?theme= in the address, and the footer picker is gone.') });
P1(s, 5, 'Layout', '11:08 – 11:12');
title(s, 'Two layouts. Centered or sidebar.');
s.addImage({ path:ASSETS+'wireframes/site-centered.png', x:M+0.4, y:1.95, w:2.1, h:3.73 });
s.addImage({ path:ASSETS+'wireframes/site-sidebar.png', x:4.6, y:1.95, w:3.05, h:2.0 });
text(s, 'centered', M+0.4, 5.75, 2.1, 0.3, { mono:true, size:13, bold:true, align:'center' });
text(s, 'Reads top to bottom. Same on a phone and a laptop.', M, 6.05, 2.9, 0.6, { size:12, color:MUTED, align:'center' });
text(s, 'sidebar', 4.6, 4.0, 3.05, 0.3, { mono:true, size:13, bold:true, align:'center' });
text(s, 'Name, links, and skills stay visible on a laptop. Centered on a phone.', 4.4, 4.3, 3.45, 0.6, { size:12, color:MUTED, align:'center' });
para(s, ['Pick one. Both are tested.','Want to change more than the palette? Sketch on one of these first and paste the sketch into your prompt.'], { x:8.6, y:2.0, w:4.05, h:3.0, size:16, gap:12 });
here(s, 'PLAN');

// 44 Step 5: lock it in, portable route
s = slide({ name:'Step 5: the lock-in prompt, portable route',
  notes: NOTE('11:08–11:12', 'One prompt locks your theme and layout in. Portable route: replace the three bracketed parts and type it. “Change nothing else” is the important sentence; it’s the difference between one edit and a rewrite.', 'the chatbot rewriting the whole file. Stuck.md row three: go back to the saved copy, ask for one change, add “Change nothing else.”', 'the page looks the same after a reload with no ?theme= in the address, and the footer picker is gone.') });
P1(s, 5, 'Lock it in', '11:08 – 11:12');
title(s, 'One prompt locks your choice in.');
lede(s, 'Done when: you reload with no ?theme= in the address, the look is the same, and the footer picker is gone.');
promptCard(s, 'Set the theme to [ocean] and the layout to [sidebar] permanently, remove the footer picker, and change the accent color to [#0B6E4F]. Change nothing else. Return the complete file.', M, 2.5, CW, 1.6, { label:'PORTABLE ROUTE · REPLACE THE THREE BRACKETS · VERBATIM', size:16 });
text(s, '“Change nothing else” is the sentence that matters. It is the difference between one edit and a rewrite.', M, 4.4, CW, 0.5, { size:16 });
here(s, 'BUILD');

// 45 Step 5: lock it in, v0 route
s = slide({ name:'Step 5: the lock-in prompt, v0 route',
  notes: NOTE('11:08–11:12', 'v0 route, same idea: your three hex codes in one request. “Change nothing else” does the same job here; without it v0 restyles the layout along with the colors. Check the preview, then move on.', 'v0 changing the layout along with the colors. Go back one version and ask again with the sentence.', 'the colors are yours in the preview and nothing else moved.') });
P1(s, 5, 'Lock it in · v0 route', '11:08 – 11:12');
title(s, 'On v0: your three hex codes, one request.');
lede(s, 'Done when: the preview shows your colors and nothing else moved.');
promptCard(s, 'Change only the colors: background #F6F3EE, text #1C2330, accent #0B6E4F. Change nothing else.', M, 2.5, CW, 1.3, { label:'v0 ROUTE · YOUR THREE HEX CODES · VERBATIM', size:16, line:BLUE });
here(s, 'BUILD');

// 46–47 Step 6: six checks, drawn as a checklist
const chk = ['Every link opens the right place, including the mailto link.','The page fits a phone with no sideways scrolling.','Print preview shows a tidy resume with no buttons.','Search the file for “Jordan”, “Bright Harbor”, and “example”. Find nothing.','Nothing private is in the file, including in comments.','It opens on a classmate’s phone, not just yours.'];
function checklist(s, items, start, y0=2.4){
  items.forEach((c,i)=>{ const y=y0+i*1.05;
    s.addShape(pres.ShapeType.rect, { x:M, y:y+0.08, w:0.42, h:0.42, fill:{ color:WHITE }, line:{ color:start+i===6?ORANGE:INK, width:1.5 } });
    text(s, String(start+i), M+0.65, y+0.08, 0.5, 0.42, { mono:true, size:14, color:ORANGE, valign:'middle' });
    text(s, c, M+1.2, y, CW-1.2, 0.6, { size:20, color:INK, valign:'middle', bold:start+i===6 }); });
}
s = slide({ name:'Step 6: check before you publish, first three',
  notes: NOTE('11:12–11:20', 'Run vc-quality-check, but do these six with your own eyes first. The chatbot’s word is not a check. Every link opens the right place, including the mailto. The page fits a phone with no sideways scrolling. Print preview shows a tidy resume with no buttons. Three more on the next slide.', 'sideways scrolling on a phone. Stuck.md row eight: “Make it fit a 375 pixel wide screen with no sideways scrolling. Change nothing else.”', 'six green checks on your sheet, or the failed one written down with what you saw.') });
P1(s, 6, 'Check', '11:12 – 11:20');
title(s, 'Six checks before it goes public. First three.');
lede(s, 'Your eyes, not the chatbot’s word. Tick each one only when you saw it.');
checklist(s, chk.slice(0,3), 1);
stickies(s); here(s, 'CHECK');

s = slide({ name:'Step 6: check before you publish, last three',
  notes: NOTE('11:12–11:20', 'Search the file for Jordan, Bright Harbor, and example, and find nothing. Nothing private is in the file, including in the comments. And the sixth, the one that counts: it opens on someone else’s phone. Pairs swap phones. If one fails, say exactly what you saw, ask for the smallest fix, and re-check that one thing. Publish only what passed.', 'people skipping the phone swap. That one is the real check.', 'six green checks on your sheet, or the failed one written down with what you saw.') });
P1(s, 6, 'Check', '11:12 – 11:20');
title(s, 'Six checks before it goes public. Last three.');
lede(s, 'One fails? Say exactly what you saw, ask for the smallest fix, re-check that one thing.');
checklist(s, chk.slice(3), 4);
stickies(s); here(s, 'CHECK');

// 48 Step 6: save to GitHub
s = slide({ name:'Step 6: save to GitHub',
  notes: NOTE('11:20–11:30', 'Ten minutes and deliverable one. v0 route: click Deploy, then connect the project to GitHub, and you’re done with this slide. Portable route: follow the setup guide, don’t improvise. Open my-first-site. Add file, Upload files. Choose index.html itself, not a ZIP, not a folder. Commit message like “First version of my site,” commit to main. Refresh and make sure index.html sits at the top level, lowercase. That’s the save.', 'a ZIP or a folder uploaded instead of the file. index.html itself, at the top level.', 'a live *.vercel.app address open on someone else’s phone, recorded in project-state.md.') });
P1(s, 6, 'Save', '11:20 – 11:30');
title(s, 'Save it: upload index.html to GitHub.');
lede(s, 'v0 route: click Deploy, then connect the project to GitHub. Every version is pushed to my-first-site. Skip the steps below.');
numbered(s, ['Open my-first-site. “Add file” → “Upload files.”','Choose index.html itself. Not a ZIP. Not a folder.','Commit message: “First version of my site.” Commit to main.','Refresh. index.html is at the top level, lowercase.'], { y:2.5, h:3.0, size:18, gap:14 });
stickies(s); here(s, 'SAVE');

// 49 Step 6: publish on Vercel
s = slide({ name:'Step 6: publish on Vercel',
  notes: NOTE('11:20–11:30', 'Vercel: Add New, Project, import my-first-site. Framework preset Other. Turn on the Build Command override and leave it empty. Output is the repository root. Deploy. Wait for the green check and click Visit. Open the URL and hand your phone to the person next to you. Write the URL in project-state.md. That’s the gate for lunch. If we’re behind, I drop sprint 1; a live URL by 11:45 is what matters.', 'Vercel 404. Stuck.md: index.html must be at the top level, lowercase. Old version showing: refresh GitHub, wait a minute, hard refresh.', 'a live *.vercel.app address open on someone else’s phone, recorded in project-state.md.') });
P1(s, 6, 'Publish', '11:20 – 11:30');
title(s, 'Publish it: import my-first-site in Vercel.');
lede(s, 'Deliverable one: a live *.vercel.app address that opens on someone else’s phone.', { color:ORANGE });
numbered(s, ['“Add New” → “Project” → Import my-first-site.','Framework preset: Other. Build Command: override on, leave empty. Output: repository root.','Deploy. Wait for the green check. Click Visit.','Open the URL on a classmate’s phone. Record it in project-state.md.'], { y:2.5, h:3.0, size:18, gap:14 });
stickies(s); here(s, 'PUBLISH');

// ---- Mini-lesson: Reading what the agent wrote (11:30–11:45) ----
const RA = (s, k, time) => kicker(s, `Reading what the agent wrote · ${k} of 3 · 15 min total`, time);
// 50 A commit and a diff
s = slide({ name:'Reading what the agent wrote 1: a commit and a diff',
  notes: NOTE('11:30–11:35', 'Your site’s live and GitHub holds at least one commit. Open it on the projector. A commit is a named checkpoint; a diff is what changed between two checkpoints. Green added, red removed. Read it in this order: the message first, does it say what you asked for; the file names second, did it touch only the files you expected; the lines last, and only the red ones closely, because deletions are where the surprises hide. You don’t need to understand every line. You need to notice when the shape of the change doesn’t match the size of your request.', 'developers skimming. Ask one of them to read a diff aloud to everyone.', 'everyone has opened one commit in their own repository and found the green and red.') });
RA(s, 1, '11:30 – 11:35');
title(s, 'A diff shows what the agent changed.');
box(s, M, 1.95, 6.3, 3.5, { fill:NAVY, line:NAVY });
s.addText([
  { text:'  <h1>Jordan Rivera</h1>\n', options:{ color:'E6EBF2' } },
  { text:'- <p>Operations Manager who turns messy…</p>\n', options:{ color:'FCA5A5' } },
  { text:'+ <p>Project lead for community programs…</p>\n', options:{ color:'86EFAC' } },
  { text:'  <p>Durham, North Carolina</p>\n', options:{ color:'E6EBF2' } },
  { text:'- <a href="mailto:jordan@example.com">Email</a>\n', options:{ color:'FCA5A5' } },
  { text:'+ <a href="mailto:you@yourdomain.com">Email</a>', options:{ color:'86EFAC' } }],
  { x:M+0.3, y:2.2, w:5.8, h:3.0, fontFace:MONO, fontSize:13, margin:0, isTextBox:true, valign:'top', lineSpacingMultiple:1.4 });
label(s, 'Read it in this order', 7.4, 1.95, 5.2);
defs(s, [['1  The message','Does it say what you asked for? Not “Refactor site.”'],['2  The file names','Only the files you expected. One index.html, not six.'],['3  The lines','Green added, red removed. Read the red closely.']], { x:7.4, w:W-M-7.4, y:2.35, pitch:1.05, tw:2.5, tsize:16, size:15 });
here(s, 'CHECK');

// 51 The pull request, drawn with the "no" exit
s = slide({ name:'Reading what the agent wrote 2: the pull request',
  notes: NOTE('11:35–11:40', 'The pull request is the human checkpoint in the agent loop. The agent works on a branch, a separate line of changes. It opens a pull request: here’s what I propose. You review the diff, Vercel shows you a preview URL, and you merge or you say no. This afternoon you practice it: increment 2 of the game, the battle, is done on a branch and merged through a pull request. Everyone, including the v0 route.', 'people merging without opening the Files changed tab. The green button is not the review.', 'everyone can name the four red flags.') });
RA(s, 2, '11:35 – 11:40');
title(s, 'The pull request is the human checkpoint.');
lede(s, 'This afternoon: increment 2 of the game goes through a pull request. Every route.');
{ const y=2.6, h=0.8, w=2.4, g=(CW-4*w)/3, names=['Branch','Pull request','Review','Merge'], under=['The agent works on a separate line. The live site is untouched.','“Here is what I propose.” The diff, the message, a preview URL.','You read it: message, files, lines. You click the preview.','Yes: it goes live in about a minute.'];
  names.forEach((nm,i)=>{ const x=M+i*(w+g); node(s, nm, x, y, w, h, { fill:i===2?ORANGE:BLUE, size:17 }); text(s, under[i], x, y+h+0.2, w, 1.1, { size:14 }); if(i<3){ arrowLine(s, x+w+0.05, y+h/2, x+w+g-0.05, y+h/2, { color:INK, width:2 }); } });
  text(s, 'yes', M+3*w+2*g, y-0.35, g, 0.3, { mono:true, size:12, bold:true, color:GREEN, align:'center' });
  const rx = M+2*(w+g)+w/2;
  arrowLine(s, rx, y+h+1.35, rx, y+h+1.95, { color:RED, width:2 });
  text(s, 'no', rx+0.15, y+h+1.4, 0.8, 0.3, { mono:true, size:12, bold:true, color:RED });
  box(s, rx-1.9, y+h+2.0, 3.8, 0.8, { fill:WHITE, line:RED, lw:1.5 });
  text(s, 'Close it. Ask for a smaller change. The branch and its files are still there.', rx-1.75, y+h+2.0, 3.5, 0.8, { size:13, valign:'middle' });
}
here(s, 'CHECK');

// 52 Four red flags
s = slide({ name:'Reading what the agent wrote 2: four red flags',
  notes: NOTE('11:35–11:40', 'Four red flags that mean no. Files changed that you didn’t ask about. Tests or checks deleted. Secrets or keys in the code; that one stops everything, it must never be in a repository. A scope bigger than the prompt. Any one of them and you say no. Saying no feels rude the first time. It isn’t. It’s the job, and the agent has no feelings about it. Ask for a smaller change, or restore the previous version.', 'people merging without opening the Files changed tab. The green button is not the review.', 'everyone can name the four red flags.') });
RA(s, 2, '11:35 – 11:40');
title(s, 'Four red flags. Any one of them means no.');
lede(s, 'Saying no costs one sentence: “Redo this with only what I asked for.”');
['Changed files you did not ask about','Deleted tests or checks','Secrets or keys in the code','A scope bigger than the prompt'].forEach((f,i)=>{ const y=2.5+i*0.9; s.addShape(pres.ShapeType.rect, { x:M, y:y+0.1, w:0.36, h:0.36, fill:{ color:RED }, line:{ color:RED, width:0 } }); text(s, f, M+0.65, y, CW-0.65, 0.56, { size:22, bold:true, valign:'middle' }); });
here(s, 'CHECK');

// 53 Rollback, three ways
s = slide({ name:'Reading what the agent wrote 3: rollback',
  notes: NOTE('11:40–11:45', 'Nothing is lost if it’s in GitHub. A merge that broke the site is one commit. Revert it: GitHub opens a new pull request that undoes it; merge it and Vercel ships the previous version. On v0, every generation is a version; open the history and restore the one that worked. Third way: promote an earlier good deploy in Vercel. The rule for the day: never fix a broken file by hand. Go back to the last good version and ask for a smaller change. I demonstrate one revert on the projector, on my own site, now.', 'people who “fixed it” by editing the live file in the chat until it half works. Back to the last good commit.', 'everyone can find the Revert button on a merged pull request and the version history in v0.') });
RA(s, 3, '11:40 – 11:45');
title(s, 'Nothing is lost if it’s in GitHub.');
lede(s, 'Never fix a broken file by hand. Go back to the last good version and ask for a smaller change.');
cols(s, [['GitHub · Revert',null,BLUE,['1   Open the merged pull request that broke it.','2   Click “Revert.” Merge the new pull request.','3   Vercel ships the previous version.']],['v0 · restore a version',null,ORANGE,['1   Every generation is a version. Open the history.','2   Restore the one that worked.','3   Push; GitHub and the live URL follow.']],['Vercel · promote',null,ORANGE,['1   Open the Deployments list.','2   Pick an earlier successful deploy.','3   Promote it while you fix the new one.']]], { y:2.4, size:15, gap2:9, h:3.0 });
here(s, 'SAVE');

// ---- 11:45 Skills (docs/skills-guide.md), then sprint 1 ----
const SK = (s, time) => kicker(s, 'Skills · docs/skills-guide.md', time);
// 54 What a skill is: a folder with one file, and the six parts of its body
s = slide({ name:'Skills 1: what a skill is',
  notes: NOTE('11:45–11:47', 'You’ve been using skills all morning without the word. A skill is instructions you’d otherwise retype, saved once in a file, so the next session, the next model, and your colleague get the same behavior. No code, no account. It’s a folder with one file in it, SKILL.md. Front matter at the top: a name and a description with the trigger phrases, because a skill nobody triggers is a skill nobody uses. Then the body, in this order: who you’re helping and the job, when it applies, steps that each end in something you can see, the never-do-this rules, one worked example, and the checks. Open skills/vc-plan-first/SKILL.md and you’ll see exactly that shape.', 'people hearing “plugin” and expecting an install wizard. It’s a text file.', 'everyone can say what a skill is in one sentence.') });
SK(s, '11:45 – 11:51');
title(s, 'A skill is a folder with one file in it: SKILL.md.');
lede(s, 'Instructions you’d otherwise retype, saved once, so the next session and the next model behave the same.');
{ const x=M, y=2.4, w=5.2, h=3.9;
  box(s, x, y-0.3, 1.6, 0.3, { fill:CARD2, line:INK, lw:1 }); text(s, 'vc-plan-first/', x+0.12, y-0.3, 1.6, 0.3, { mono:true, size:11, valign:'middle' });
  box(s, x, y, w, h, { fill:WHITE, line:INK, lw:1 });
  text(s, 'SKILL.md', x+0.2, y+0.1, 2, 0.3, { mono:true, size:12, bold:true, color:ORANGE });
  box(s, x+0.2, y+0.45, w-0.4, 0.62, { fill:CARD, line:CARD });
  text(s, '---\nname: vc-plan-first\ndescription: what it does, and the trigger phrases\n---', x+0.3, y+0.47, w-0.6, 0.6, { mono:true, size:11, color:MUTED, lsm:1.0 });
  ['Who you’re helping and what the job is','When this applies, and when it doesn’t','Steps, each ending in something you can see','Rules: the short never-do-this list','One worked example','Checks that it worked'].forEach((t,i)=>{ const yy=y+1.2+i*0.44; text(s, String(i+1), x+0.25, yy, 0.4, 0.4, { mono:true, size:13, bold:true, color:ORANGE, valign:'middle' }); text(s, t, x+0.65, yy, w-0.9, 0.4, { size:14, valign:'middle' }); });
}
para(s, ['The front matter: a name, and a description that says when to use it. Put the trigger phrases in.','The body: six parts, in this order.','Open skills/vc-plan-first/SKILL.md. That exact shape. Copy it from templates/SKILL-template.md.'], { x:6.5, y:2.4, w:W-M-6.5, h:3.6, size:16, gap:14 });

// 55 What makes one good
s = slide({ name:'Skills 2: what makes a skill good',
  notes: NOTE('11:47–11:48', 'What makes one good. One job: “write the brief,” not “handle the project.” Triggers in the description. Steps that end in something you can see, not “ensure quality.” A rules list with the three ways it goes wrong. One worked example. Under about 300 lines; a novel gets skimmed. The test: hand the skill and the same request to two different chatbots. Same shape of answer from both? The skill’s doing the work. Different answers? The skill’s relying on the model to guess. In sprint 2 or 3 you can write one in ten minutes with the prompt in docs/skills-guide.md.', 'twenty rules and no example.', 'everyone can name two of the six.') });
SK(s, '11:45 – 11:51');
title(s, 'What makes a skill good: six things.');
lede(s, 'The test: hand it and the same request to two different chatbots. Same shape of answer? It’s working.');
numbered(s, ['One job. “Write the brief.”','Triggers in the description.','Steps end in something you can see.','A rules list with the three ways it goes wrong.','One worked example.','Under about 300 lines.'], { y:2.4, h:3.6, size:20, gap:8 });

// 56 Install it where you work: Claude and ChatGPT
s = slide({ name:'Skills 3: install it where you work (the live demo)',
  notes: NOTE('11:48–11:51', 'Three minutes, live, both chatbots. Claude first: I attach skills/vc-project-brief/SKILL.md, type the brief prompt from the walkthrough, and you see the shape: brief, scope, checks, no code. Fresh chat, no skill, same prompt, and you see the difference; that gap is what a skill buys. ChatGPT: same prompt three ways. Plain chat, no skill. Plain chat with the skill pasted after the one-line instruction. A Project with the skill uploaded and one line in its instructions. The Project version didn’t need the paste. Pick the row that matches the chatbot you actually use; the paste route works everywhere, including free plans, and lasts one conversation.', 'menu names that moved since this morning. Describe the shape, not the pixel.', 'one skill installed in your own chatbot.') });
SK(s, '11:45 – 11:51');
title(s, 'Install it where you work. Three ways in each.');
lede(s, 'A skill is text. Any chatbot that can read a file or a paste can use one. The rows differ in how automatically it loads.');
{ const colx=[M, M+CW/2+0.25], cw=CW/2-0.25;
  [['Claude',[['Claude.ai, any plan','Open a Project. Add SKILL.md to its knowledge. One line in the project instructions: “Follow the attached skills when their trigger phrases apply.”'],['Claude.ai, plans with Skills','Settings → Capabilities → Skills. Upload the skill folder as a ZIP. Toggle it on. It loads itself when the description matches.'],['Claude Code and Cowork','Put the folder at .claude/skills/<name>/SKILL.md in your project. It appears as /<name>. Nothing to upload.']]],
   ['ChatGPT',[['Any chat, any plan','Paste SKILL.md after the one-line instruction on the next slide. Lasts one conversation.'],['A Project','Create a Project. Upload the SKILL.md files. In the instructions: “Follow the attached skills when their trigger phrases apply. Say which one you are using.”'],['A custom GPT','Create a GPT. Upload the skills as Knowledge. Same line in its instructions. Share it with your team.']]]].forEach(([nm,rows],c)=>{ const x=colx[c];
    text(s, nm, x, 2.35, cw, 0.4, { size:22, bold:true, color:c?INK:INK });
    rows.forEach(([wh,how],i)=>{ const y=2.85+i*1.15; text(s, wh, x, y, cw, 0.3, { mono:true, size:11, bold:true, color:ORANGE, cs:1 }); text(s, how, x, y+0.3, cw, 0.85, { size:13 }); }); });
}

// 57 Sprint 1: skills menu (reference table)
s = slide({ name:'Live hacking sprint 1: the skills menu',
  notes: NOTE('11:51–12:00', 'Nine minutes, your keyboard. You just saw what a skill is; now load one. Ten of them, from my public repositories, open source. The table is a reference, point at it. Pick one row. Load it with the prompt on the right: open the raw link, select all, copy, paste it in with that line first. Then attach your index.html and give the task prompt from the menu. Do the check in the table. Save a copy before the change. One skill, one task, one complete file back. Start the change now; it finishes in sprint 2. If I called cut one, we skip this and keep publishing.', 'loading three skills at once. The chatbot tries to do all three. One row.', 'one skill loaded and its change started, or the blocker written in project-state.md.') });
kicker(s, 'Live hacking · Sprint 1 · your chatbot, your keyboard', '11:51 – 12:00', { color:ORANGE });
title(s, 'Pick one row. Load one skill. Check it.');
lede(s, 'Open source, use them after class: github.com/mrhinkle/aienterprise-skills · github.com/mrhinkle/VibeCoding-a-Website');
table(s, [['#','FEATURE YOU GET','SKILL'],['1','Your own colors, fonts, and look, recorded so they never drift','site-customizer'],['2','A headline and About section that sell without sounding salesy','copy-editor'],['3','Writing that sounds like a person, not a chatbot','ai-slop-killer'],['4','A prompt for a hero or background image','brand-to-images'],['5','A contact form that actually delivers','aie-web-forms'],['6','Your name finds your site in Google and in AI answers','aie-web-seo'],['7','Every link, image, and anchor works','aie-web-links'],['8','A usability review from a stranger’s point of view','aie-web-ux'],['9','The “does it actually work” gate before you share it','aie-web-qa'],['10','A LinkedIn post that announces the site in your voice','aie-social-linkedin']], M, 2.3, [0.45, 5.15, 2.2], { size:11.5, rowH:0.37, monoCols:[2], plainFirst:true });
promptCard(s, 'Use the following instructions as a skill for my next request. Read them, confirm what you will and will not do, then wait for my task.', 8.75, 2.3, W-M-8.75, 2.2, { label:'PASTE THE SKILL BELOW THIS' });
text(s, 'Raw links and task prompts: docs/website-skills-menu.md. Save a copy of index.html first. One skill, one task, one complete file.', 8.75, 4.7, W-M-8.75, 1.4, { size:14, color:MUTED });
here(s, 'BUILD');

// 58 Lunch
breakSlide('Lunch', '12:00 – 12:45', 'Back at 12:45. The afternoon is the game.', ['Your website URL in project-state.md','examples/alien-tic-tac-toe/checkpoint-3-complete/index.html open; play one round','Think about two emoji that are easy to tell apart'],
  NOTE('12:00–12:45', 'Forty-five minutes. Before I let them go: play the space-theme game on the big screen once, so they come back knowing what they’re building. Helpers use lunch to fix the accounts that failed this morning. Put the ?theme=space URL on the screen while they eat.', 'anyone who did not publish. They publish during lunch with a helper, not during the game.', 'at 12:45 everyone has played one round of the example game.'));

// ---- Project 2: the game (12:45–4:35) ----
const G = (s, name, time) => kicker(s, `Project 2 · The game · ${name}`, time);
// 59 Two tracks after lunch
s = slide({ name:'Two tracks after lunch',
  notes: NOTE('12:45–12:50', 'Two tracks this afternoon, same gates. Track A is the guided game: checkpoints at every stage, every prompt on the screen. Pick it if you want to be sure you ship. Track B is the thing you brought: a tool for your team, a dashboard, a prototype. One screen, one input, one result. Built with v0, one pull request per increment. Track B sits together at the back; helpers rotate. Same gates: a brief with checks by 1:40, a PR per increment, live by 4:35. Track B stalls at 3:00? Game checkpoint 3. Nobody leaves without a second URL.', 'Track B scopes that need a database or a login. One screen, one input, one result. The rest goes under “later.”', 'every pair has chosen a track; Track B has written their one-screen scope.') });
G(s, 'Choose a track', '12:45 – 12:50');
title(s, 'Two tracks after lunch. Same gates, same deadline.');
lede(s, 'Both tracks: a brief with checks by 1:40, a pull request per increment, live by 4:35.');
cols(s, [['Track A · the guided game','Themed tic-tac-toe battle game',BLUE,['Tested checkpoints at every stage. Eight themes.','Board, then battle, then connected. Theme, playtest, publish.','Pick it if you want to be sure you ship.']],['Track B · your own small project','The thing you brought',ORANGE,['A tool for your team, a dashboard, a prototype.','One screen, one input, one result. Nothing more today.','Built with v0, one pull request per increment. Back tables.']]], { y:2.4, hsize:20, size:16, gap2:10, h:2.6 });
here(s, 'DESCRIBE');

// 60 Track B: the scope rule
s = slide({ name:'Track B: one screen, one input, one result',
  notes: NOTE('12:50–1:40 for Track B', 'Track B, while Track A tours the Arcade and picks a theme. The scope rule is the whole lesson: one screen where someone types or picks something and sees a useful result. A meeting-cost calculator. A which-form-do-I-need chooser. A checklist. A paste-in dashboard. A pitch page with a mailto button. Sign-in, a database, payments, email, anything that calls another company’s system, anything that stores other people’s data: all of it goes under “later.” Half of it you won’t need. When the thing you brought stalls, scope is almost always why, and cutting scope isn’t giving up. It’s how it ships.', 'scope creep in the plan. If the plan lists more files than you understand, cut.', 'a brief with three observable checks and a plan with a file list you understand.') });
G(s, 'Track B · your own project · docs/your-own-project.md', '12:50 – 4:35');
title(s, 'Track B: one screen, one input, one result.');
lede(s, 'Write the “later” list in project-state.md. Half of it you will not need.');
cols(s, [['Fits version one',null,GREEN,['A meeting-cost calculator.','A which-form-do-I-need chooser for your team.','A checklist, or a dashboard you paste numbers into.','A pitch page with a signup button that is a mailto link.']],['Waits for later, no matter how reasonable',null,RED,['Sign-in.','A database, payments, or email sending.','Anything that calls another company’s system.','Anything that stores other people’s data.']]], { y:2.4, size:17, gap2:12, h:3.2 });
here(s, 'DESCRIBE');

// 61 Track B: the plan prompt
s = slide({ name:'Track B: the plan prompt',
  notes: NOTE('12:50–1:40 for Track B', 'Plan mode again, from scratch, on your biggest model. Fill the scope template, draw one wireframe, type the plan prompt. Read the plan; cut anything not on the wireframe. If the plan lists more files than you understand, cut.', 'scope creep in the plan. If the plan lists more files than you understand, cut.', 'a brief with three observable checks and a plan with a file list you understand.') });
G(s, 'Track B · your own project · docs/your-own-project.md', '12:50 – 1:40');
title(s, 'Track B: plan mode again, from scratch.');
lede(s, 'Biggest model. Fill the scope template, draw one wireframe, type this. Cut anything not on the wireframe.');
promptCard(s, 'Here is my brief, scope, and a wireframe. Version 1 is one screen, one input, one result, no sign-in, no database, no external services. Tell me the plan: which files you will create, what each does, and three checks I can perform by hand to know it works. Do not build yet.', M, 2.5, CW, 1.9, { label:'12:50 · BRIEF AND PLAN · ATTACH SCOPE + WIREFRAME · VERBATIM' });
here(s, 'PLAN');

// 62 Track B: the build prompt and the afternoon
s = slide({ name:'Track B: the build prompt, and the afternoon',
  notes: NOTE('1:40–4:35 for Track B', '1:40, the build prompt: increment 1, and get it live. 3:00, one improvement through a pull request, then a two-minute stranger test and one fix through another PR. 4:10, publish with a five-line README. 3:30 and nothing live? Game checkpoint 3, and come back to your idea with the materials after class.', 'a plan that grew since 12:50. Build only the files it listed.', 'a live URL with three checks passing on it, or checkpoint 3 open.') });
G(s, 'Track B · your own project · docs/your-own-project.md', '1:40 – 4:35');
title(s, 'Track B: build increment 1, then the afternoon.');
promptCard(s, 'Build the plan as described. Keep it to the files you listed. Plain, readable code with short comments. Fits a phone. Return the complete files.', M, 1.85, CW, 1.4, { label:'1:40 · BUILD INCREMENT 1 · VERBATIM', line:BLUE });
defs(s, [['1:40','Increment 1. Deploy. Three checks pass on the live URL.'],['3:00','One improvement through a pull request. A two-minute stranger test. One fix through another PR.'],['4:10','Publish. Five-line README. The “later” list in project-state.md.'],['3:30, nothing live?','Switch to game checkpoint 3 and ship that. Come back to your idea after class.']], { y:3.55, pitch:0.68, tw:3.2, mono:true, tsize:16, size:15 });
here(s, 'BUILD');

// 63 Arcade tour + three choices
s = slide({ name:'Arcade tour and the three game choices',
  notes: NOTE('12:50–12:58', 'Eight minutes. Show the All Things AI Arcade: short instructions, clear results, replay. Every game in it runs the same loop you ran this morning. Three choices for your game; pick one. The featured one is Alien Tic-Tac-Toe: choose a square, win or lose a short battle, claim it. It’s mine, it’s new, and the rest of this deck follows it. The quiz is the simplest complete game and a good scope cut if you’re behind. The dodger has the most motion to debug. Same seven skills for all three. No accounts, databases, or leaderboards in class.', 'pairs splitting across two games. One game per pair.', 'every pair has written their choice in game-brief.md.') });
G(s, 'Arcade tour and choose', '12:50 – 12:58');
title(s, 'Pick one of three games.');
lede(s, 'The rest of this deck follows the featured game. No accounts, databases, leaderboards, or downloaded art in class.');
cols(s, [['Featured','Alien Tic-Tac-Toe',ORANGE,['The player chooses a board cell and wins or loses a short alien battle to claim it.','Why: a familiar board plus a small battle system.','Test: a battle awards exactly one cell and the board ends correctly.']],['Simplest','Five-question quiz',BLUE,['The player answers one question at a time, sees feedback, and tries again.','Why: the simplest complete game, no movement. A good scope cut if you are behind.','Test: one answer scores once; final score and replay are right.']],['Most motion','One-button space dodger',BLUE,['The player taps or presses a key to rise between obstacles.','Why: one control and a theme you can customize. The most motion to debug.','Test: motion, collisions, scoring, and restart work every time.']]], { y:2.45, hsize:19, size:14, gap2:8, h:3.0 });
here(s, 'DESCRIBE');

// 64 Eight themes as eight tiles (reference)
s = slide({ name:'Choose a theme: eight built in',
  notes: NOTE('12:58–13:05', 'Reference slide, point at it, don’t read it. The game is the same under every theme: choose a square, win or lose a battle, claim it. What you choose is the look: who you are, who you fight, what the three attacks and counters are called, the colors. Eight themes are built into the checkpoint, all emoji, so nobody downloads art or worries about licensing. Pick one, or make your own on the next slide. The mechanics never change: three attacks, each with exactly one correct counter, one health point per exchange. Renaming is the only thing a theme does. The attack and counter names are in docs/tic-tac-toe-variants.md.', 'a theme that makes a rule unclear. Pick a different name, not a different rule.', 'every pair can say their two emoji and three attack-counter pairs.') });
G(s, 'Choose a theme', '12:58 – 1:05');
title(s, 'Same game, eight looks. Renaming is all a theme does.');
lede(s, 'Try one on the checkpoint:   checkpoint-3-complete/index.html?theme=ghosts-pumpkins');
{ const T = [['space-invasion','🧑‍🚀','👽','0B1020','7DD3FC'],['cats-dogs','🐱','🐶','1F1410','FDBA74'],['pizza-tacos','🍕','🌮','2A0F0F','FDE047'],['robots-dinos','🤖','🦖','0F1F14','86EFAC'],['ghosts-pumpkins','👻','🎃','140A1F','FB923C'],['sun-moon','☀️','🌙','101A33','FDE68A'],['wizards-dragons','🧙','🐉','1A0F2A','C4B5FD'],['coffee-donuts','☕','🍩','1C120C','F9A8D4']];
  const w=2.75, g=(CW-4*w)/3, h=1.75, y0=2.45;
  T.forEach(([id,a,b,bg,ac],i)=>{ const x=M+(i%4)*(w+g), y=y0+Math.floor(i/4)*(h+0.25);
    box(s, x, y, w, h, { fill:bg, line:bg });
    s.addText(a+'   '+b, { x, y:y+0.15, w, h:0.95, fontSize:34, align:'center', valign:'middle', margin:0, color:WHITE });
    s.addText(id+(i===0?' · default':''), { x, y:y+1.15, w, h:0.45, fontFace:MONO, fontSize:13, bold:true, color:ac, align:'center', valign:'middle', margin:0 }); });
}
here(s, 'DESCRIBE');

// 65 Your own theme
s = slide({ name:'Make your own theme: write it down first',
  notes: NOTE('13:05–13:10', 'Want your own? Pick two emoji that are easy to tell apart at a glance. Name three attacks the opponent does and three counters that obviously beat them. Choose two or three colors. Write it in this table before you prompt. A theme that exists only in your head produces a game that changes every time you ask for a change. Avoid pairs that look alike, pairs where one emoji is mostly the background color, and anything that only reads as mine versus theirs by color. Each board mark also carries a hidden X or O label for screen readers.', 'counters that do not obviously beat the attack. Read the three pairs to your partner; if they hesitate, rename.', 'the table filled in on paper or in a text file.') });
G(s, 'Your own theme', '1:05 – 1:10');
title(s, 'Making your own? Fill this in first.');
table(s, [['FIELD','YOUR ANSWER'],['Theme id (lowercase, hyphens)',''],['You (emoji + name)',''],['Opponent (emoji + name)',''],['Attack 1 → counter 1',''],['Attack 2 → counter 2',''],['Attack 3 → counter 3',''],['Background, accent, and text colors','']], M, 1.95, [3.7, 3.7], { size:13, rowH:0.5 });
label(s, 'Avoid', 8.7, 2.0, 3.9, { color:RED });
para(s, ['Pairs that look alike (🐱 and 🐯).','One emoji that is mostly the background color.','Anything that only reads as “mine” versus “theirs” by color.'], { x:8.7, y:2.4, w:3.93, h:3.0, size:16, gap:12 });
here(s, 'DESCRIBE');

// 66 Wireframe before build
s = slide({ name:'Wireframe before you build: three screens',
  notes: NOTE('13:10–13:20', 'A wireframe is boxes and labels. Five minutes now saves an hour of “that’s not what I meant.” Three screens: instructions with the theme table and a Start button; the board with a status line in words, a Restart button, and Play again when it’s over; the battle with health as text, the attack the opponent uses, three counter buttons, a result line, Next exchange, Return to board. Draw them on paper or copy the text versions from the variants doc. You’ll paste them under your prompts. Low fidelity is the point; the chatbot matches your layout, not your handwriting.', 'people drawing art. Low fidelity is the point; the chatbot matches your layout, not your handwriting.', 'three sketches per pair, photographed or typed.') });
G(s, 'Wireframes', '1:10 – 1:20');
title(s, 'Draw the three screens first. Five minutes.');
s.addImage({ path:ASSETS+'wireframes/game-instructions.png', x:M, y:1.95, w:2.0, h:3.56 });
s.addImage({ path:ASSETS+'wireframes/game-board.png', x:2.9, y:1.95, w:2.0, h:3.56 });
s.addImage({ path:ASSETS+'wireframes/game-battle.png', x:5.1, y:1.95, w:2.0, h:3.56 });
text(s, '1 · Instructions', M, 5.6, 2.0, 0.3, { mono:true, size:12, color:ORANGE, align:'center' });
text(s, '2 · Board', 2.9, 5.6, 2.0, 0.3, { mono:true, size:12, color:ORANGE, align:'center' });
text(s, '3 · Battle', 5.1, 5.6, 2.0, 0.3, { mono:true, size:12, color:ORANGE, align:'center' });
label(s, 'Every sketch has', 7.8, 2.0, 4.8);
para(s, ['A title, a status line in words, one obvious next button.','Health written as text: “You: 2 of 2.”','Nothing that depends on color alone.','A board that fits a phone held upright.'], { x:7.8, y:2.4, w:4.83, h:3.2, size:16, gap:12 });
here(s, 'PLAN');

// 67 Brief
s = slide({ name:'Game brief',
  notes: NOTE('13:20–13:30', 'Open the vc-game-brief skill. Type the prompt with your theme in the brackets. The rules come from alien-tic-tac-toe.md and the prompt says exactly: rename only. The chatbot gives you game-brief.md with observable completion checks, things you can see, like “three of my marks in a row shows You won.” Read the checks. If one isn’t observable, ask for one that is. Don’t build yet.', 'the chatbot adding mechanics: timers, random enemies, upgrades. Say no. Write them under “later.”', 'game-brief.md with your theme and at least five observable checks.') });
G(s, 'Brief · vc-game-brief', '1:20 – 1:30');
title(s, 'Describe the game once, with your theme.');
lede(s, 'Done when: game-brief.md has your theme and at least five checks you could show a partner. Nothing built yet.');
promptCard(s, 'Write game-brief.md for a themed tic-tac-toe battle game using the rules in alien-tic-tac-toe.md exactly. Theme: I am [🐱 Cat], the opponent is [🐶 Dog]. The opponent\'s attacks are [Bark, Pounce, Slobber] and my correct counters are [Hiss, Climb, Shake Off], in that order. Colors: [dark brown background, peach accent, light text]. Rename only; do not change the health, exchange, or board rules. Give me observable completion checks. Do not build yet.', M, 2.4, CW, 2.35, { label:'ATTACH alien-tic-tac-toe.md + vc-game-brief · REPLACE THE BRACKETS · VERBATIM' });
text(s, 'Observable means you can see it on screen: “three of my marks in a row shows You won.” If a check isn’t observable, ask for one that is.', M, 5.0, CW, 0.6, { size:15, color:MUTED });
stickies(s); here(s, 'DESCRIBE');

// 68 Rules
s = slide({ name:'Rules and states',
  notes: NOTE('13:30–13:40', 'Paste your three wireframes under the prompt. The chatbot lists every state and what the player sees and can do in each. Two things it has to confirm: no automatic opponent move after a battle, and Restart game available in every active state. Misses either? Say so. The rules in one breath: pick an empty cell, a battle starts. Two health each; a correct counter costs them one, a wrong one costs you one. The winner marks the cell, exactly once. Three in a line wins; a full board is a draw. This list is what you test against all afternoon.', 'a state list that skips the “board finished” state or forgets Restart during a battle. Ask again for those two.', 'a state list you can read in two minutes with both confirmations in it.') });
G(s, 'Rules · vc-game-rules', '1:30 – 1:40');
title(s, 'List every state the game can be in.');
lede(s, 'This list is what you test against all afternoon.');
promptCard(s, 'Using the brief, list every state the game can be in and what the player sees and can do in each. Use my three wireframes below as the screens. Confirm there is no automatic opponent move after a battle and that Restart game is available in every active state.', M, 2.4, CW, 1.85, { label:'PASTE YOUR THREE WIREFRAMES BELOW IT · TYPE THIS, VERBATIM' });
label(s, 'Two things it must confirm', M, 4.5, CW);
numbered(s, ['No automatic opponent move after a battle.','Restart game is available in every active state.'], { y:4.85, h:1.2, size:17, gap:6 });
here(s, 'PLAN');

// 69 Build 1: board
s = slide({ name:'Build increment 1: the board',
  notes: NOTE('13:40–14:00', 'First increment. Board only. Two buttons, Award to me and Award to opponent, stand in for the battle so you can test the board on its own. One index.html, inline CSS and JavaScript, no external files. Open it. Click three of your marks in a row: it says you won. Three of theirs: you lost. Fill the board with no line: Draw. Play again and Restart both work. Compare with checkpoint 1. If yours doesn’t detect wins by 2:00, download checkpoint 1 and keep going.', 'the diagonal lines not detected. “Detect the eight lines” is in the prompt; test 1-5-9 and 3-5-7 specifically.', 'win, lose, and draw each observed once, with Restart in between.') });
G(s, 'Build 1 of 3 · the board · vc-game-build', '1:40 – 2:00');
title(s, 'Build the board alone.');
lede(s, 'Behind at 2:00? Download checkpoint-1-board/index.html and build the battle next.');
promptCard(s, 'Build only the board screen as one index.html with inline CSS and JavaScript and no external files. Cells show [🐱] for my marks and [🐶] for the opponent\'s, each with a visually hidden "X" or "O" label. For now, two buttons "Award to me" and "Award to opponent" stand in for the battle. Detect the eight lines, a draw, Play again, and Restart game. Return the complete file.', M, 2.4, CW, 2.1, { label:'PASTE THE BOARD WIREFRAME BELOW IT · REPLACE THE BRACKETS · VERBATIM' });
label(s, 'Checkpoint 1 · what you must see', M, 4.7, CW, { color:GREEN });
numbered(s, ['Three of your marks in a row shows “You won.” Three of theirs: you lost.','A full board with no line shows Draw. Play again and Restart both work.','Test the diagonals: 1-5-9 and 3-5-7.'], { y:5.05, h:1.3, size:15, gap:5 });
stickies(s); here(s, 'BUILD');

// 70 Build 2: battle
s = slide({ name:'Build increment 2: the battle',
  notes: NOTE('14:00–14:15', 'Second increment, its own file, and the pull request exercise. Do it on a branch. v0: a new generation, push it, accept GitHub’s offer to open a pull request. Portable: branch dropdown, type battle, create it, upload the file to that branch, “Compare & pull request.” Health is text, two each. Attacks cycle in your order. One answer per exchange. Ends at zero. Test: two correct answers end it in two exchanges. Read the diff: message, files, lines. Merge. At 2:15, if I call cut two, everyone continues from checkpoint 2.', 'health not changing on a correct answer. The exact help sentence from stuck.md: “I click Shield when it shows Laser and the alien’s health does not change.”', 'two correct answers end the battle in two exchanges with no Next exchange button after the win.') });
G(s, 'Build 2 of 3 · the battle · vc-game-build', '2:00 – 2:15');
title(s, 'Build the battle as its own file, on a branch.');
lede(s, 'This one goes through a pull request: branch, upload, “Compare & pull request,” read message, files, lines, then merge.', { color:ORANGE });
promptCard(s, 'Build the battle screen as its own index.html. Both sides start with 2 health shown as text. The opponent\'s attacks cycle [Bark → Pounce → Slobber]. One accepted answer per exchange; disable the answer buttons after I click; show an explicit Next exchange button only while both sides still have health; end immediately when either side reaches zero. Return the complete file.', M, 2.45, CW, 2.1, { label:'PASTE THE BATTLE WIREFRAME BELOW · REPLACE THE BRACKETS · VERBATIM' });
label(s, 'Checkpoint 2 · what you must see', M, 4.75, CW, { color:GREEN });
numbered(s, ['Answer correctly twice: the battle ends in two exchanges, with no Next exchange button after the win.','A wrong answer costs you one health, shown as text.','Buttons disable after one click.'], { y:5.1, h:1.3, size:15, gap:5 });
stickies(s); here(s, 'BUILD');

// 71 Stuck? Grab a checkpoint: the ladder (reference)
s = slide({ name:'Stuck? Grab a checkpoint',
  notes: NOTE('14:15 (and any time)', 'Reference slide, point at it, don’t read it. Say it at 2:15 either way. Being stuck is normal. If you’re thinking “I’m the only one who doesn’t get this,” you’re not; look around. The goal is to be moving again in under five minutes. Say what you see in one sentence. Try the matching fix in stuck.md. Still stuck, jump to the checkpoint for your stage: a tested file you continue from. Write “continued from checkpoint N” in project-state.md. That’s honest and it’s fine. Professionals start from working code every day. Your job today is the loop, not the typing.', 'pride. The person who refuses the checkpoint at 2:15 is the person without a game at 4:35.', 'nobody is more than five minutes stuck without a sticky up.') });
kicker(s, 'Stuck? Start here · docs/stuck.md', 'ANY TIME');
title(s, 'Stuck? Grab the rung for where you are.');
lede(s, 'Say what you see. Try the fix in stuck.md. Grab a checkpoint. Raise a hand. Using one is not cheating.');
{ const rows = [['Website: nothing works yet','personal-website/index.html','Replace Jordan Rivera’s content with yours, section by section.'],['Website: content in, look is broken','the same file, fresh','Paste your text into the fresh file instead of fixing the broken one.'],['Website: looks fine, cannot publish','your own file','Setup guide: recover from common setup failures.'],['Game: board does not detect wins','checkpoint-1-board','Build the battle next.'],['Game: battle logic is wrong','checkpoint-2-battle','Connect it to the board.'],['Game: board and battle will not connect','checkpoint-3-complete','Pick your theme with ?theme= and go straight to look and feel and playtest.'],['Game: everything works but it is 4:30','checkpoint-3-complete','Change the theme, publish it, record the rest as “later.”']];
  const lx=4.55, rx=7.95, y0=2.65, pitch=0.52;
  label(s, 'Where you are', M, y0-0.38, lx-M-0.2, { align:'right' }); label(s, 'Download this', lx, y0-0.38, rx-lx, { align:'center' }); label(s, 'Then continue with', rx+0.25, y0-0.38, W-M-rx);
  arrowLine(s, lx, y0-0.05, lx, y0+rows.length*pitch, { color:INK, width:2.5, head:false }); arrowLine(s, rx, y0-0.05, rx, y0+rows.length*pitch, { color:INK, width:2.5, head:false });
  rows.forEach(([where,file,next],i)=>{ const y=y0+i*pitch+0.1;
    box(s, lx, y, rx-lx, 0.34, { fill:CARD2, line:INK, lw:1 });
    text(s, file, lx, y, rx-lx, 0.34, { mono:true, size:12, bold:true, align:'center', valign:'middle' });
    text(s, where, M, y-0.02, lx-M-0.2, 0.4, { size:13, align:'right', valign:'middle' });
    text(s, next, rx+0.25, y-0.04, W-M-rx-0.25, 0.44, { size:12, color:MUTED, valign:'middle' }); });
}
here(s, 'BUILD');

// 72 Build 3: connect
s = slide({ name:'Build increment 3: connect them',
  notes: NOTE('14:15–14:45', 'Third increment. Attach both files. Selecting an empty cell locks the board and starts a battle for that cell. A win places your mark, a loss places theirs, exactly once, then the board is evaluated. Add the instructions screen from your wireframe with the theme table. Restart available everywhere. Test: win three battles on squares 1, 2, and 3 and it says you won. Restart in the middle of a battle gives an empty board and no battle. Compare with checkpoint 3. At 3:00, if I call cut three, everyone continues from checkpoint 3.', 'a cell resolved twice, or the board not evaluated after a loss. Both are in the prompt; quote it back.', 'a playable round from instructions to “You won,” or checkpoint 3 open and continued from.') });
G(s, 'Build 3 of 3 · connect · vc-game-build', '2:15 – 2:45');
title(s, 'Connect them. Now it’s a game.');
lede(s, 'Compare with checkpoint-3-complete/index.html. At 3:00 everyone may continue from it.');
promptCard(s, 'Connect the board and the battle into one index.html. Selecting an empty cell locks the board and starts a battle for that cell. A battle win places my mark, a loss places the opponent\'s mark, exactly once, then the board is evaluated. Add the instructions screen from my wireframe with the theme table. Keep Restart game available everywhere. Return the complete file.', M, 2.4, CW, 2.1, { label:'ATTACH BOTH FILES + THE INSTRUCTIONS WIREFRAME · TYPE THIS, VERBATIM' });
label(s, 'Checkpoint 3 · what you must see', M, 4.7, CW, { color:GREEN });
numbered(s, ['Win three battles on squares 1, 2, and 3: the game says you won.','Restart in the middle of a battle: empty board, no battle.','One finished battle fills exactly one cell.'], { y:5.05, h:1.3, size:15, gap:5 });
stickies(s); here(s, 'BUILD');

// 73 Break
breakSlide('Break', '2:45 – 3:00', 'Back at 3:00. Then theme, phone fit, and playtest.', ['A playable round, or checkpoint 3 open with your ?theme=','Your three colors written down','Swap who types'],
  NOTE('14:45–15:00', 'Fifteen minutes. Helpers go to every red sticky. Anyone without a connected game downloads checkpoint 3 now, sets their theme with ?theme=, and that’s their game. Nobody debugs through the break.', 'the pair that is “almost there.” Almost there at 2:45 means checkpoint 3 at 3:00; say so kindly.', 'at 3:00 every pair has a game that plays a full round.'));

// 74 Look and feel
s = slide({ name:'Look and feel',
  notes: NOTE('15:00–15:30', 'Thirty minutes. vc-game-look-feel, then vc-game-feedback. Apply your colors. Make the board fit a 375 pixel wide phone. Buttons at least 44 pixels tall. Every status message stays in words. Don’t change any rule. Then feedback: every click should answer you. A correct counter says so. A claimed square shows the mark. A finished board says who won. Open it on a phone, held upright, and play one round with your thumb.', 'the chatbot “improving” a rule while restyling. The prompt says do not change any rule; if health or lines change, go back to the saved copy.', 'theme applied, plays on a phone held upright with no sideways scrolling.') });
G(s, 'Look and feel · vc-game-look-feel · vc-game-feedback', '3:00 – 3:30');
title(s, 'Your colors, and it fits a phone.');
lede(s, 'Then play one round on a phone, held upright, with your thumb.');
promptCard(s, 'Apply my theme colors and make the board fit a 375 pixel wide phone. Buttons at least 44 pixels tall. Keep every status message in words. Do not change any rule.', M, 2.4, CW, 1.5, { label:'ATTACH YOUR CURRENT index.html · TYPE THIS, VERBATIM', size:16 });
label(s, 'Then feedback: every click answers you', M, 4.15, CW);
defs(s, [['Every click answers','“Correct! Dog −1.” “Square 5 is yours.” “You won!” In words, not only color.'],['Health is text','“You: 2 of 2.” Icons may reinforce it; they never replace it.'],['One obvious next button','Next exchange, Return to board, Play again. Never two choices at once.']], { y:4.5, pitch:0.58, tw:3.8, tsize:15, size:14 });
stickies(s); here(s, 'BUILD');

// 75 Playtest
s = slide({ name:'Partner playtest, one fix, re-test',
  notes: NOTE('15:30–16:10', 'Forty minutes. Swap laptops with the pair next to you. Say nothing. Watch them play one full round. Write down the moment they hesitate or click the wrong thing. Watching someone fumble your game is uncomfortable. Don’t talk and don’t point. The moment they hesitate is the one thing you fix, and it’s the input to the prompt on the slide. The single smallest change. Change one thing, then re-test exactly as the chatbot tells you. Then swap back and do it for the other game. One observed issue repaired beats three guesses.', 'coaching the playtester. If you have to explain it, that is the finding.', 'one observed issue, one change, one re-test that passed, written in project-state.md.') });
G(s, 'Playtest · vc-game-playtest', '3:30 – 4:10');
title(s, 'Swap laptops. Say nothing. Watch. Fix one thing.');
lede(s, 'If you have to explain the game to your tester, that is the finding.');
numbered(s, ['Swap with the pair next to you. Hand over the phone or laptop. Say nothing.','Watch one full round. Write the moment they hesitate or click wrong.','Describe that moment in the prompt. Make the one change it proposes.','Re-test exactly as told. Then swap back and do theirs.'], { y:2.35, h:1.9, size:15, gap:6 });
promptCard(s, 'Watch me describe a partner\'s playtest: [what confused them]. Propose the single smallest change that fixes it. Change one thing, then tell me exactly how to re-test it.', M, 4.45, CW, 1.5, { label:'REPLACE THE BRACKET WITH WHAT YOU SAW · TYPE THIS, VERBATIM' });
stickies(s); here(s, 'CHECK');

// 76 Publish the game: second repository
s = slide({ name:'Publish the game: a second repository',
  notes: NOTE('16:10–16:35', 'Deliverable two. Same moves as this morning, new repository. GitHub: New repository, my-first-game, add a README. Upload index.html at the root, lowercase. Commit: “First playable version.” Don’t upload the game into the website repository; that replaces your website. Two projects, two repositories, two URLs.', 'the game uploaded into my-first-site, which replaces the website. Separate repository, always.', 'a second live *.vercel.app address that plays a round on a phone.') });
G(s, 'Publish · vc-game-publish', '4:10 – 4:35');
title(s, 'A second repository: my-first-game.');
lede(s, 'Same moves as this morning. Two projects, two repositories, two URLs. The game never goes in the website repository.');
numbered(s, ['GitHub: “+” → “New repository.” Name: my-first-game. Add a README.','“Add file” → “Upload files.” index.html at the top level, lowercase.','Commit: “First playable version.”','Never upload the game into my-first-site. That replaces your website.'], { y:2.5, h:3.0, size:18, gap:14 });
stickies(s); here(s, 'SAVE');

// 77 Publish the game: second Vercel project
s = slide({ name:'Publish the game: a second Vercel project',
  notes: NOTE('16:10–16:35', 'Vercel: Add New, Project, import my-first-game. Framework Other, Build Command override on and empty, output root. Deploy. Open the URL on a phone and play one round. Try ?theme= on the live address; deep links work. Record the URL in the game’s project-state.md. If we’re behind, sprints 2 and 3 become this.', 'Vercel 404 again. index.html at the top level, lowercase, in the game repository.', 'a second live *.vercel.app address that plays a round on a phone.') });
G(s, 'Publish · vc-game-publish', '4:10 – 4:35');
title(s, 'A second Vercel project, a second live URL.');
lede(s, 'Deliverable two: a second live *.vercel.app address that plays a round on a phone.', { color:ORANGE });
numbered(s, ['“Add New” → “Project” → Import my-first-game.','Framework: Other. Build Command: override on, empty. Output: root.','Deploy. Visit. Play one round on a phone.','Try ?theme=your-theme on the live address. Record the URL in project-state.md.'], { y:2.5, h:3.0, size:18, gap:14 });
stickies(s); here(s, 'PUBLISH');

// 78 Sprints 2 and 3 (reference table)
s = slide({ name:'Live hacking sprints 2 and 3: extensions and the menu',
  notes: NOTE('16:35–17:05', 'Thirty minutes, your keyboard. Two choices. Add one skill to your site from the menu, same rules as this morning. Or one game extension from the list, after the basic loop works, never before. Each one is a separate increment with its own check. Pick at most one. Don’t add accounts, leaderboards, a database, timers, or downloaded art; write them under “later.” I hack on mine on the projector. Show and tell starts at 5:05 whatever state you’re in.', 'the extension that breaks the game. Save a copy first; if the check fails, go back to the saved copy and demo that.', 'something new that passed its check, or the saved copy intact.') });
kicker(s, 'Live hacking · Sprints 2 + 3 · your chatbot, your keyboard', '4:35 – 5:05', { color:ORANGE });
title(s, 'One skill for your site, or one game extension.');
lede(s, 'Skills menu: ten rows, same rules as sprint 1. Suggested: #5, the contact form, or #6, SEO. Or one extension below.');
table(s, [['GAME EXTENSION','WHAT CHANGES','CHECK'],['Random attacks','The opponent picks any attack each exchange instead of cycling.','Over ten exchanges you see all three attacks.'],['Score across boards','Count boards won and lost in the session.','Play again keeps the tally; Restart during a board does not count it.'],['Two themes at once','The player chooses the opponent separately from themselves.','The counter table updates to match.'],['Sound','One short sound on win and one on loss, with a mute button.','Muted stays muted after Play again.']], M, 2.45, [2.4, 5.0, 4.53], { size:13, rowH:0.62 });
text(s, 'Not in class: accounts, leaderboards, a database, timers, downloaded art. Show and tell at 5:05.', M, 5.85, CW, 0.4, { size:14, color:MUTED });
stickies(s); here(s, 'BUILD');

// 79 Show and tell
s = slide({ name:'Show and tell',
  notes: NOTE('17:05–17:15', 'Ten minutes. Sixty seconds each, as many as fit. Your live URL on the big screen, not the file on your laptop; live is the thing that went through your gate. Play one move or scroll one section. Then the one thing that broke and what fixed it. That’s the most useful sentence of the day; everyone else got stuck on it too. I pick volunteers during the sprint so nobody’s surprised. Everyone else: write one thing you noticed about their project on a sticky and hand it over.', 'demos running long. Call time at sixty seconds, kindly, every time.', 'at least five live URLs shown on the big screen.') });
G(s, 'Show and tell', '5:05 – 5:15');
title(s, 'Sixty seconds. Your live URL. One thing that broke.');
lede(s, 'Everyone else: one thing you noticed, on a sticky, handed to them.');
cols(s, [['1','Your live URL on the big screen',ORANGE,'Not the file on your laptop. The URL went through your gate.'],['2','One move or one scroll',ORANGE,'Play one battle, or scroll to your About section.'],['3','One thing that broke, and what fixed it',ORANGE,'The most useful sentence of the day. Everyone got stuck there too.']], { y:2.5, hh:0.95, hsize:20, size:15 });
here(s, 'PUBLISH');

// ---- Handoff (5:15–5:30) ----
const HO = (s, kind) => kicker(s, 'Handoff · '+kind, '5:15 – 5:30');
// 80 Tuesday morning
s = slide({ name:'Tuesday morning: taking this back to your team',
  notes: NOTE('17:15–17:18', 'Tuesday morning, three decisions. Amara’s Law: we overestimate this short term and underestimate it long term, so start small on purpose. First, what goes in GitHub first: the thing your team edits most and backs up least. A checklist, a page everyone copies. Second, what to automate next: one repeatable task, small enough to check by eye. The report you rebuild every Monday. Third, where agents still need adult supervision: secrets and keys, customer data, anything customer-facing, anything you can’t test yourself. Those get a human review every time; that’s the pull request. “Which tool do I use after today?” docs/platform-landscape.md; read the Your GitHub column first.', 'leaders who want to automate the hardest thing first. Smallest task first; earn the trust.', 'everyone has written one answer to each of the three questions.') });
HO(s, 'Tuesday');
title(s, 'Tuesday morning. Three decisions to make before lunch.');
lede(s, 'The pull request is how you supervise. Smallest repeatable task first. Which tool after today: docs/platform-landscape.md.');
cols(s, [['1','What goes in GitHub first',BLUE,'The thing your team edits most and backs up least. A checklist, a process doc. Put it in a repository.'],['2','What to automate next',BLUE,'One repeatable task, small enough to check by eye. The report you rebuild every Monday.'],['3','Where agents still need adult supervision',RED,'Secrets and keys. Customer data. Anything customer-facing. Anything you can’t test yourself.']], { y:2.5, hh:0.95, hsize:20, size:15 });
here(s, 'DESCRIBE');

// 81 Handoff
s = slide({ name:'Handoff: two URLs, two state files, next actions',
  notes: NOTE('17:18–17:23', 'Never cut this. Two URLs and two state files are the deliverable. Fill project-state.md for each project: name and type, repository, version, Vercel URL, what you actually tested and what you saw, the current blocker if any, and one next action with its check. Unfinished is fine; say what works and what doesn’t. Don’t relabel it as done. Attach the actual files when you open a new chat; the new chat knows nothing about the old one. Optional: proud of the game? The Arcade submission guide is in docs; All Things AI and I review before anything is listed.', 'state files that say “in the previous chat” as a file location. Name the actual files.', 'two project-state.md files with URLs and a next action, open on screen.') });
HO(s, 'Wrap-up');
title(s, 'Write it down so Monday-you can continue.');
lede(s, 'Unfinished is fine. Say what works and what doesn’t. Never relabel it as done.');
cols(s, [['project-state.md · one per project',null,BLUE,['Project, repository, branch, and version.','Vercel project and URL.','What you tested and what you saw.','Current blocker, and one next action with its check.']],['You leave with',null,GREEN,['A live website and a live game, in your Vercel.','Two repositories, in your GitHub.','Two state files that let any chat continue.','A loop you can run on Monday: describe, plan, build, check, save, publish.']]], { y:2.4, size:16, gap2:11, h:3.2 });
here(s, 'SAVE');

// 82 LinkedIn close
s = slide({ name:'LinkedIn close: the optional post and endorsement',
  notes: NOTE('17:23–17:26', 'Optional, and it doesn’t affect anything about today. Add Vibe Coding to your LinkedIn skills if the label exists; if not, ask me which accurate label to use. Connect with me; I’ll give you the exact profile, don’t guess it. Publish a post in your own words about something you built, learned, or worked through; honest beats flattering. Send me the profile URL, the post URL, and the exact skill name through the class contact channel and I endorse it personally. It’s recognition of a skill you practiced today, not a certification. The chatbot prompt on the slide drafts it; you decide whether to post.', 'posts that claim more than was built. Describe what you actually completed.', 'none; optional.') });
HO(s, 'Optional');
title(s, 'Optional: post about today and I’ll endorse the skill.');
lede(s, 'Recognition of a skill you practiced today, not a certification. You choose what to publish.');
numbered(s, ['Add “Vibe Coding” in your profile’s Skills section. Can’t find it? Ask me which label to use.','Connect with me on LinkedIn, using the profile I show you now, not a guess.','Publish a post in your own words: something you built, learned, or worked through.','Send me your profile URL, post URL, and the exact skill name. I endorse it personally.'], { y:2.35, h:1.9, size:15, gap:6 });
promptCard(s, 'Help me draft a short LinkedIn post about this class using only these facts: [what I built, what works, what I learned, and a challenge]. Keep my voice. Mention that Mark offered a skill endorsement to participants who post about their experience. Do not invent outcomes, praise, or expertise. Give me a draft to review; do not publish it or message anyone.', M, 4.4, CW, 1.8, { label:'ASK YOUR CHATBOT FOR A DRAFT · VERBATIM' });

// 83 Two offers: everyone gets the slides, reviewers get the book
s = slide({ name:'Two offers: the slides and the book',
  notes: NOTE('17:26–17:28', 'Two offers, open to everyone. First, everyone gets the slides and all the course materials. They’re in the repo on the screen, github.com/mrhinkle/Vibe-Coding-for-Non-Technical-Professionals; the PDF and the PPTX sit in presentations/ato-2026-workshop. The link is also on the hold slide and the thank-you slide. Second, reviewers get the book. Tell me what worked and what didn’t and I send you the preview release edition of Software Development for Non-Programmers: Beyond Vibecoding. Good or bad, specific or short, it all counts, and the critical stuff helps me most; tell me what to cut. Email mrhinkle@allthingsai.org, subject “ATO workshop feedback,” or hand me the printed sheet before you leave. I read every one myself.', 'people writing only nice things. Ask for the one thing to cut.', 'everyone knows the email address and the subject line.') });
HO(s, 'Two offers');
title(s, 'Everyone gets the slides. Reviewers get the book.');
label(s, 'Everyone gets the slides', M, 2.0, 8.6);
text(s, 'The slides and all the course materials are in the repo. PDF and PPTX in presentations/ato-2026-workshop.', M, 2.35, 8.6, 0.6, { size:16 });
text(s, 'github.com/mrhinkle/Vibe-Coding-for-Non-Technical-Professionals', M, 3.0, 8.6, 0.4, { mono:true, size:14, bold:true });
label(s, 'Reviewers get the book', M, 3.85, 8.6);
text(s, 'Send me feedback, good or bad, and you get the preview release edition of Software Development for Non-Programmers: Beyond Vibecoding.', M, 4.2, 8.6, 0.8, { size:16 });
text(s, 'To: mrhinkle@allthingsai.org\nSubject: ATO workshop feedback\nOr hand me the printed sheet before you leave.', M, 5.1, 8.6, 1.1, { mono:true, size:14 });
s.addImage({ path:ASSETS+'book-cover.jpg', x:W-M-2.4, y:1.95, w:2.4, h:3.6 });
text(s, 'Advance Release Edition', W-M-2.4, 5.6, 2.4, 0.3, { mono:true, size:11, color:DIM, align:'center' });

// 84 See you in the spring: All Things AI
s = slide({ name:'See you in the spring: All Things AI',
  notes: NOTE('17:28–17:30', 'One sentence, not a pitch. I co-founded All Things AI. It’s the hands-on conference for people like you, and workshops like today’s are what you’ll find there. April 18 to 20, 2027, in this same building. The 18th is the Agent Hackathon. The 21st is a separate, screened Executive Summit. allthingsai.org. If you want in, you know where to find me.', 'turning this into a sell. One sentence and on to thank you.', 'none.') });
HO(s, 'One invitation');
title(s, 'See you in the spring: All Things AI.');
s.addText('April 18–20, 2027', { x:M, y:2.0, w:CW, h:1.2, fontFace:SANS, fontSize:54, bold:true, color:BLUE, margin:0, isTextBox:true });
para(s, ['All Things AI 2027, in this same building: the Atlantic Union Bank Convention Center.','April 18 is the Agent Hackathon. April 21 is a separate, screened Executive Summit.','allthingsai.org'], { y:3.4, w:9.4, h:2.2, size:17, gap:12 });
s.addImage({ path:ASSETS+'ata-square.png', x:W-M-2.4, y:3.3, w:2.4, h:2.4 });

// 85 Thank you
s = slide({ dark:true, name:'Thank you',
  notes: NOTE('17:28–17:30', 'That’s the day. This morning your résumé lived in a LinkedIn menu. Now a site about you is live, in your Vercel. A game you drew on paper at one o’clock plays on a phone, at a URL you own. And you ran the same six steps both times. If you walked in this morning nervous, look at what you’re walking out with. Run those six steps on Monday on something small at work. The slides and everything else are in the repo on the screen. Feedback sheets on the table on the way out, or mrhinkle@allthingsai.org. Thank you.', 'nothing. Say thank you and stop on time.', 'done at 5:30.') });
kicker(s, 'That’s the day');
title(s, 'Now it’s two URLs you own.', { w:7.8 });
para(s, ['A site about you, live in your Vercel. A game you drew on paper at one o’clock, playing on a phone.','Run the same six steps on Monday, on something at work.'], { y:2.0, w:7.8, h:2.0, size:17, gap:12, color:WHITE });
text(s, 'MARK HINKLE', M, 4.4, 7, 0.3, { mono:true, size:11, color:ORANGE, cs:1.5 });
text(s, 'mrhinkle@allthingsai.org', M, 4.75, 7, 0.5, { mono:true, size:20, color:WHITE });
text(s, 'All Things AI · allthingsai.org     The AIE Network · theaienterprise.io', M, 5.3, 8.4, 0.4, { mono:true, size:12, color:'D6DEEA' });
s.addImage({ path:ASSETS+'ata-square.png', x:9.4, y:2.0, w:2.6, h:2.6 });
s.addImage({ path:ASSETS+'logo-aie-white.png', x:9.1, y:4.9, w:3.2, h:0.8, sizing:{ type:'contain', w:3.2, h:0.8 } });
text(s, 'Feedback sheets on the table on your way out. Subject line: ATO workshop feedback.', M, 5.95, CW, 0.35, { size:14, color:WHITE });
text(s, 'Slides and all course materials: github.com/mrhinkle/Vibe-Coding-for-Non-Technical-Professionals', M, 6.35, CW, 0.3, { mono:true, size:11, color:'D6DEEA' });

// ---- write ----
const total = String(n);
pres.slides.forEach(sl => { (sl._slideObjects||[]).forEach(o => { if (o.text && Array.isArray(o.text)) o.text.forEach(t => { if (typeof t.text==='string') t.text = t.text.replace('__TOTAL__', total); }); if (typeof o.text==='string') o.text = o.text.replace('__TOTAL__', total); }); });

// speaker-notes.md, so the notes can be printed
let md = '# Speaker notes: AI Agents & Vibe Coding, All Things Open 2026\n\nMonday October 19, 2026 · Raleigh Convention Center · 9:00–5:30. Generated by `node build.js`; edit build.js, not this file.\n\nEach note: the clock window from instructor/ato-2026-run-of-show.md, what to say in Mark’s words, "Watch for:" the common failure and its fix, and "Gate:" what every student should have before the next slide.\n\n';
let longest = 0, over = [];
NOTES.forEach(x => { const words = x.notes.split(/\s+/).filter(Boolean).length; longest = Math.max(longest, words); if (words > 140) over.push(`${x.n} (${words})`); md += `## ${String(x.n).padStart(2,'0')} / ${total} · ${x.name}\n\n${x.notes}\n\n`; });
fs.writeFileSync('speaker-notes.md', md);
if (over.length) console.warn('NOTES OVER 140 WORDS:', over.join(', ')); else console.log('all notes <= 140 words; longest', longest);
setImmediate(() => pres.writeFile({ fileName: 'ato-2026-workshop.pptx' }).then(f => console.log('wrote', f, 'slides:', n)));
