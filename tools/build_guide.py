"""Build the illustrated participant guide as PDF, HTML, Markdown and SVG.

Run from any folder: python3 tools/build_guide.py
Requires reportlab. No network, credentials, or AI calls. Uses only repository assets.
"""
from pathlib import Path
from html import escape
import json, re
from reportlab.pdfgen import canvas
from reportlab.platypus import Paragraph, Table, TableStyle, Image, Spacer
from reportlab.lib.styles import ParagraphStyle
from reportlab.lib.colors import HexColor
from reportlab.lib.utils import ImageReader
from reportlab.pdfbase import pdfmetrics
from reportlab.pdfbase.ttfonts import TTFont
from reportlab.graphics.shapes import Drawing, Rect, Line, String, Circle, Polygon
from reportlab.graphics import renderPDF, renderSVG

ROOT=Path(__file__).resolve().parents[1]
OUT=ROOT/'guides'; ASSET=OUT/'assets'
BLUE='#307FE2'; ORANGE='#EF8B39'; INK='#0D1219'; NAVY='#121B2B'; MUTED='#5B6675'; PALE='#F3F6FB'; LINE='#D9E0EA'
REPO='https://github.com/mrhinkle/Vibe-Coding-for-Non-Technical-Professionals/blob/main/'
FONT='Helvetica'; BOLD='Helvetica-Bold'
for name,filename in [('Arial','Arial.ttf'),('Arial-Bold','Arial Bold.ttf')]:
    f=Path('/System/Library/Fonts/Supplemental')/filename
    if f.exists(): pdfmetrics.registerFont(TTFont(name,str(f)))
if 'Arial' in pdfmetrics.getRegisteredFontNames():FONT='Arial';BOLD='Arial-Bold'

def page(kicker,title,lead,diagram,blocks,ref):
    return dict(kicker=kicker,title=title,lead=lead,diagram=diagram,blocks=blocks,ref=ref)
def para(t):return ['p',t]
def head(t):return ['h',t]
def steps(*t):return ['steps',list(t)]
def prompt(t):return ['prompt',t]
def note(t):return ['note',t]

PAGES=[
page('YOUR FIELD GUIDE','Vibe Coding for Non-Technical Professionals','Your first website. Your first game. Your next idea.','cover',[
    para('A website. A game. A repeatable way to turn an idea into working software.'),
    para('No programming experience required. Bring your favorite chatbot and learn to describe, build, check, save, and publish.'),
    note('Six teaching hours, plus lunch and breaks.\nMark Hinkle | All Things AI\nParticipant edition | October 2026')],'START-HERE.md'),
page('01 / YOUR ROUTE','Two projects. One useful process.','Use this guide as a map. The repository holds the detailed instructions and recovery steps.','route',[
    steps('FOUNDATIONS - 60 minutes. Understand the software lifecycle, then prepare GitHub, Vercel, and your chatbot.',
          'WEBSITE - 90 minutes. Define one page, build it, test its main action, and publish it.',
          'GAME - 195 minutes. Choose a pattern, write rules, build a playable loop, improve it, playtest, and publish.',
          'HANDOFF - 15 minutes. Demonstrate both projects and save your next action.'),
    note('Go at your own pace outside class. A checkpoint is a visible result, not a number of prompts sent.'),
    para('Quick page finder: AI handoff 3; lifecycle 4; tools 5; setup 6; website 7-9; game 10-12; troubleshooting 13; agents 14-15; resume 16; checklist 17; resources 18.')],'instructor-guide.md'),
page('02 / HAND THE COURSE TO YOUR AI','Start with the right context.','A chatbot can help only with the material and tools it can actually access.','handoff',[
    steps('Open START-HERE.md. If your assistant can read the authorized repository, direct it to AI-START.md.',
          'If it cannot read the private link, download AI-COURSE-PACK.md and attach it. If file upload fails, paste AI-START.md and the current lesson.',
          'Ask it to identify the files it received, both projects, and your next checkpoint. A vague summary is not proof of access.'),
    prompt('Be my patient course guide. Read AI-START.md and tell me which files you actually received. I am starting fresh / continuing / stuck. Give me one next action and tell me what success will look like.'),
    note('The course repo is private. Your instructor must grant access or supply a copy. Never share a password or access token to make a link work. ZIP uploads are not supported by every chatbot.')],'START-HERE.md'),
page('03 / THE FIRST 30 MINUTES','How software gets made.','The software development lifecycle is a set of questions you revisit as you learn.','lifecycle',[
    para('Discover the user and purpose. Define the smallest useful result. Design the experience and plan small steps. Build one increment. Test the actual behavior. Release the checked version. Maintain it as needs change.'),
    head('Make each stage concrete'),
    para('Website: a visitor should find event details and open a directions link. Game: a player should answer five questions, see an accurate score, and play again. Those promises become tests.'),
    prompt('Explain our current stage using my project. What decision do I need to make, what file should we produce, and what can a person do to check the result?'),
    note('You can return to an earlier stage. A confusing result may need a better rule or clearer wording, not more code.')],'instructor-guide.md'),
page('04 / THE TOOL MAP','Know what each tool does.','The chatbot helps create files. Your browser shows what those files actually do.','tools',[
    para('HTML gives a page structure. CSS controls its appearance. JavaScript supplies behavior, such as answering a quiz or restarting a game. Both core projects can run as plain static files.'),
    steps('CHATBOT: creates or changes project files. Its response is a proposal until checked.',
          'GITHUB: stores your files and their saved history. A commit is a named checkpoint; a branch is a separate line of changes.',
          'VERCEL: hosts a deployed version at a URL. Your browser opens that URL; the local copy may differ.'),
    note('A repository is not the same thing as a live website. A private repository also does not prove that its deployed website is private.'),
    para('A pull request proposes a branch change for review. A preview deployment helps you inspect a change before a later production release.')],'docs/glossary.md'),
page('05 / GET READY','Choose the route that works.','Start with complete runnable files. Add connected tools only when they help.','files',[
    steps('Create or sign in to GitHub and Vercel using setup-guide.md. Keep your account recovery details private.',
          'Choose your chatbot. Ask it for a downloadable index.html, or complete plain-text contents you can save.',
          'Create a website folder and learner-owned repository. Keep the game in a second folder and repository later.',
          'Open the exported file in your browser. Confirm the filename ends in .html, not .html.txt, and that it is plain text.'),
    prompt('Confirm whether you can return complete files, edit my project, run checks, and access GitHub or Vercel. Mark each verified, unavailable, or not tried. Use the portable route for anything you cannot do here.'),
    note('No API key, database, or paid integration is needed for the core projects. Confirm hosting suitability before class: Vercel Hobby is for noncommercial personal use. Native skills and multiple agents are optional.')],'setup-guide.md'),
page('06 / WEBSITE BRIEF','Give the page one clear job.','Start with a small, specific promise to one kind of visitor.','website',[
    para('Example: a fictional community event page. A visitor can learn what the event is, find when and where it takes place, and follow a real directions link. No registration system or payment is needed.'),
    steps('Write the audience and desired outcome in one sentence.',
          'Choose a heading, two or three sections, a visual treatment, and the main link or button.',
          'Name five checks: clear purpose, correct content, main action, navigation, and phone layout.'),
    prompt('Use vc-project-brief and vc-project-plan. Interview me about my page, then write a small brief and three build increments. Include the exact destination or behavior of the main action.'),
    note('Save project-brief.md. Use content and images you have permission to use. Fictional examples should be visibly fictional; do not invent testimonials or working services.')],'docs/website-walkthrough.md'),
page('07 / WEBSITE BUILD','Build small. Look. Then improve.','A specific change is easier to check than an instruction to make everything better.','prompt',[
    steps('Ask for the smallest complete page. A single index.html can contain its styles and behavior.',
          'Save and open the actual exported file. If separate images or scripts are supplied, keep their paths intact.',
          'Try the main action. Save a working copy before asking for one improvement.',
          'Repeat the same check after the change and inspect anything that should have stayed the same.'),
    prompt('Build the first increment from my brief. Return the complete runnable file. Then change only the heading and button placement for phone readers. Preserve my content, destinations, and working links.'),
    note('An image of a page is a design reference. It is not a runnable website. If the assistant only gives a screenshot, ask for the complete project files.')],'docs/website-walkthrough.md'),
page('08 / WEBSITE RELEASE','Check before you share.','Publishing and verification are two separate steps.','release',[
    steps('Have another person explain the page and follow its main action. Try all links, keyboard navigation, and a narrow screen. Record real observations.',
          'Upload the checked files, not the ZIP, to your own website repository. Confirm index.html is at the selected project root.',
          'Import that repository into the correct Vercel account/project. For plain static files, follow the Other / empty build command setup in setup-guide.md.',
          'Confirm the intended publication, deploy, and repeat the main checks at the actual URL. Record that URL and the released version.'),
    note('The first Vercel deployment is production. Later updates to the configured production branch can publish automatically. Use branches and previews for later changes.'),
    para('If deployment fails, keep your working files and record the exact error. A green build indicator is not evidence that the main button works.')],'setup-guide.md'),
page('09 / GAME BRIEF','Choose one action and a short round.','Use a familiar pattern, then make the theme your own.','game',[
    para('Three starter patterns: a small puzzle, a one-button obstacle game, or a paddle game. These draw on Promptle, Flappy Brains, and Brain Pong in the All Things AI Arcade.'),
    head('The simplest worked example'),
    para('Create a five-question quiz. One submitted answer per question. A correct answer earns one point. After five questions, show a score from 0 to 5 and a Play again button. Replay resets the score and question index.'),
    prompt('Use vc-game-brief and vc-game-rules. Write the player goal, main action, keyboard and touch controls, score rule, round ending, and restart behavior. Give me five observable checks.'),
    note('Keep the first version small. Accounts, multiplayer, global rankings, daily locks, and remote score services can wait. Educational facts need reliable sources; a game can simply be fun.')],'docs/game-walkthrough.md'),
page('10 / GAME STATE','Make the whole loop work.','State is what the game remembers: where you are, the score, and whether the round is over.','loop',[
    steps('START: show short instructions and one clear way to begin.',
          'PLAY: accept the intended input and update progress or score once.',
          'RESULT: end the round, explain the outcome, and stop inappropriate input.',
          'RESTART: reset the agreed state and begin a fresh round without duplicated timers or actions.'),
    prompt('Build the complete start, play, result, and restart loop with plain visuals first. Keep rules separate from drawing where practical. Explain how I can test one round and three restarts.'),
    note('Try rapid double-clicks or taps where relevant. A quiz should not award points twice; an animated game should not run faster after every restart. Make controls match the instructions.')],'game-skills-guide.md'),
page('11 / GAME PLAYTEST','Watch a new player.','Two minutes without coaching can reveal what your own testing misses.','evidence',[
    steps('Give the current version to a partner. Let them start, play, finish, and restart without hints.',
          'Record hesitation, control errors, unfair outcomes, and scoring surprises. Ask whether they would replay and why.',
          'Fix the biggest issue. Tune only one setting, such as speed or time, then repeat the same test.',
          'Publish to a separate game repository and Vercel project. Repeat a round and restart at the deployed URL.'),
    prompt('Review this exact version against game-rules.md. Separate observed failures from suspicions. Help me repair the biggest problem and retest it. Do not mark a phone test Passed if we only resized a desktop browser.'),
    note('Use Passed, Failed, and Not tested. If you include local best scores, test refresh and unavailable storage. Sound is optional; gameplay should remain understandable without it.')],'docs/game-walkthrough.md'),
page('12 / GET UNSTUCK','Diagnose one thing at a time.','Keep the last working version. Avoid turning a small failure into a full rewrite.','triage',[
    steps('NAME THE SYMPTOM: exact click or input, expected result, actual result, error text, file or URL, and browser/device.',
          'CHECK THE CONTEXT: correct project, latest file, filename, folder path, branch, and deployment.',
          'TRY ONE REPAIR: make the smallest reversible change and repeat the same check.',
          'ESCALATE WITH EVIDENCE: after two unsuccessful focused repairs, summarize what happened and ask for help.'),
    prompt('I expected [result] after [steps]. I observed [result/error] in [file/URL]. The last change was [change]. Help me test one likely cause. Preserve the working parts and say how we will know the fix worked.'),
    note('Use docs/troubleshooting.md for symptom-by-symptom recovery, including blank pages, .html.txt, missing files, stale deployments, broken controls, agent conflicts, and lost chat context.')],'docs/troubleshooting.md'),
page('13 / OPTIONAL MULTIPLE AGENTS','Give every helper a clear job.','Start with one builder and one reviewer. More agents are useful only when the work can be separated.','agents',[
    steps('TWO CHATS: let one assistant build. Give another chat the same brief and a frozen copy to review read-only. Send useful findings back to the builder.',
          'NATIVE SUBAGENTS: where supported, ask for one bounded helper, such as drafting acceptance checks. Keep one writer on the application files.',
          'ISOLATED WORKTREES: advanced coding work can use separate folders and branches. A coordinator integrates the results and repeats the tests.'),
    prompt('Use one helper to review this exact saved version read-only. Give it the brief and test criteria. Do not let it edit or publish. Return concrete issues with reproduction steps, then propose a small fix.'),
    note('Different role names are not independent reviewers. Separate agents can still share a model or provider. A second provider is optional and requires a deliberate data-sharing choice. Extra agents consume extra usage; keep this outside the core timebox if it slows you down.')],'docs/multiple-agents.md'),
page('14 / YOUR PROJECT INSTRUCTIONS','Give your AI a working agreement.','AGENTS.md is a short instruction file for your own project, not a magic installation command.','instructions',[
    steps('Copy templates/AGENTS.md into your learner project as AGENTS.md. Fill in the project identity, intended user, and scope.',
          'Add your expected behavior, how to open the project, how to test it, and where to record progress.',
          'Ask your assistant to read and summarize the rules before making changes. In ordinary chat, paste or attach the file.',
          'Use templates/CLAUDE.md only as described in the optional agent guide. Product discovery differs by client and version.'),
    prompt('Read AGENTS.md and my current files. Tell me which project you are working in, the next allowed change, how you will test it, and what would require my decision. Do not claim you read instructions you could not access.'),
    note('Use the sample inside templates/. The course root AGENTS.md routes assistants through the course; it is not the learner-project template. Instruction files guide behavior but do not replace platform permissions or tests.')],'templates/AGENTS.md'),
page('15 / PAUSE AND RESUME','Save context outside the chat.','Your files and a short state record make it easier to switch assistants or continue tomorrow.','handoff',[
    steps('Save the latest working project files and name the checkpoint or commit.',
          'Update project-state.md: goal, scope, folder/repository, current stage, tested behavior, unresolved issue, and one next action.',
          'Give the next assistant both the state record and the actual files. Include the relevant course lesson or skill.',
          'Ask it to identify the version and missing evidence before continuing. Keep publication permission tied to the intended destination.'),
    prompt('Read my project-state.md and attached files. Summarize what works, what failed or was not tested, and the next action. Ask for missing files. Continue from the saved state without rebuilding everything.'),
    note('Keep the website and game state records separate. Do not rely on an assistant remembering another chat or accessing a private conversation link.')],'templates/project-state.md'),
page('16 / FINISH WITH EVIDENCE','What does done look like?','Show the result, identify the version, and state the limits.','evidence',[
    head('Website'),
    para('A visitor understands the purpose, reads accurate content, follows the primary action, uses navigation, and can read the page on a phone-sized screen. The published URL has been checked, or the deployment blocker is recorded.'),
    head('Game'),
    para('A new player understands the instructions, uses the supported controls, receives correct scoring and a clear result, and can restart repeatedly. The deployed version has been played, or working files and the blocker are retained.'),
    head('Your handoff'),
    para('Name the owner, files, repository, version, URL, test report, known limits, and next improvement. Demonstrate the website action and a full game round. Explain one assumption you corrected using evidence.'),
    note('Published and checked; published but verification incomplete; or working files with deployment blocked. Use the statement that matches your evidence.')],'handouts/student-workbook.md'),
page('17 / KEEP THIS REFERENCE','The right help, one click away.','All core instructions are readable as text, so your chatbot can use them alongside you.',None,[
    steps('START-HERE.md - access the course, choose a route, and give your AI the starting prompt.',
          'AI-COURSE-PACK.md - a single text file containing the current learning instructions, templates, and skills.',
          'docs/website-walkthrough.md and docs/game-walkthrough.md - worked examples and stage prompts.',
          'docs/troubleshooting.md - symptom-led recovery. templates/help-request.md - an evidence-based request for help.',
          'docs/multiple-agents.md and templates/AGENTS.md - optional collaboration and project instructions.',
          'handouts/student-workbook.md and templates/project-state.md - records you can reuse in both projects.'),
    head('Sources and edition notes'),
    para('The setup guide cites official GitHub, Vercel, OpenAI, and Claude documentation. Product guidance was checked October 5, 2026; screens and account availability may change. The source map records the original website course, existing presentation, and Arcade research.'),
    para('Brand palette and logo come from the existing All Things AI class presentation. Diagrams in this guide are conceptual illustrations, not screenshots of provider interfaces. The detailed Markdown is the living reference.'),
    note('The guide is a learning aid. Starter applications and full classroom rehearsal remain preparation tasks. A documented workflow is not a claim that every provider or device has been exercised.')],'repository-map.md')]

def color(s):return HexColor(s)
def diagram(kind):
    d=Drawing(504,158)
    def rect(x,y,w,h,fill=PALE,stroke=LINE):d.add(Rect(x,y,w,h,rx=7,ry=7,fillColor=color(fill),strokeColor=color(stroke),strokeWidth=.8))
    def txt(x,y,t,size=10,bold=False,fill=INK):d.add(String(x,y,t,fontName=BOLD if bold else FONT,fontSize=size,fillColor=color(fill)))
    def arrow(x1,y1,x2,y2):
        d.add(Line(x1,y1,x2,y2,strokeColor=color(BLUE),strokeWidth=1.5))
        if x2>x1:d.add(Polygon([x2,y2,x2-5,y2+3,x2-5,y2-3],fillColor=color(BLUE),strokeColor=None))
        elif x2<x1:d.add(Polygon([x2,y2,x2+5,y2+3,x2+5,y2-3],fillColor=color(BLUE),strokeColor=None))
        elif y2<y1:d.add(Polygon([x2,y2,x2-3,y2+5,x2+3,y2+5],fillColor=color(BLUE),strokeColor=None))
        elif y2>y1:d.add(Polygon([x2,y2,x2-3,y2-5,x2+3,y2-5],fillColor=color(BLUE),strokeColor=None))
    if kind in ('route','tools'):
        labels=[('60 MIN','Foundations'),('90 MIN','Website'),('195 MIN','Game'),('15 MIN','Handoff')] if kind=='route' else [('CHATBOT','Creates files'),('BROWSER','Tests the files'),('GITHUB','Saves versions'),('VERCEL','Hosts the result')]
        for i,(a,b) in enumerate(labels):
            x=i*130;rect(x,44,114,82);txt(x+12,96,a,10,True,BLUE);txt(x+12,70,b,10)
            if i<3:arrow(x+116,85,x+127,85)
        txt(0,20,'A small checked result becomes the starting point for the next step.',10,False,MUTED)
    elif kind=='lifecycle':
        labels=['Discover','Define','Design + plan','Build','Test','Release','Maintain']
        for i,label in enumerate(labels):
            x=i*128 if i<4 else (7-i)*128;y=90 if i<4 else 18
            rect(x,y,116,50);txt(x+10,y+29,str(i+1).zfill(2),9,True,BLUE);txt(x+10,y+12,label,10,True)
            if i<3:arrow(x+117,y+25,x+126,y+25)
            if i in (4,5):arrow(x-2,y+25,x-11,y+25)
        arrow(442,87,442,71)
        txt(10,44,'Repeat as',10,False,MUTED);txt(10,28,'you learn.',10,False,MUTED)
    elif kind=='website':
        rect(1,4,502,149,'#FFFFFF');rect(1,128,502,25,PALE);txt(15,137,'YOUR EVENT PAGE',9,True,BLUE);txt(325,137,'ABOUT     DETAILS     DIRECTIONS',8)
        txt(20,105,'An afternoon for curious people.',19,True);txt(20,85,'What it is. Who it is for. Why come along.',10,False,MUTED)
        for x,t in [(20,'What to expect'),(180,'When and where'),(340,'Useful details')]:rect(x,20,145,49);txt(x+10,48,t,10,True)
        rect(350,78,134,28,BLUE,BLUE);txt(363,87,'Get directions',10,True,'#FFFFFF')
    elif kind=='game':
        rect(1,4,502,149,'#FFFFFF');txt(20,128,'YOUR FIVE-QUESTION QUIZ',11,True,BLUE);txt(385,128,'Score: 0 / 5',10,True)
        txt(20,98,'Question 1: choose one answer.',15,True)
        for x,t in [(20,'Answer A'),(260,'Answer B')]:rect(x,48,222,32);txt(x+14,59,t,11,True)
        txt(20,23,'One submission. One score update. Clear feedback.',10,False,MUTED)
    elif kind=='loop':
        labels=[('START','Instructions + begin'),('PLAY','Action + score'),('RESULT','Outcome + explanation'),('RESTART','Reset round state')]
        for i,(a,b) in enumerate(labels):
            x=i*130;rect(x,52,114,87);txt(x+10,112,a,10,True,BLUE)
            for j,line in enumerate(b.split(' + ')):txt(x+10,88-j*15,line,9)
            if i<3:arrow(x+116,95,x+127,95)
        d.add(Line(446,48,446,24,strokeColor=color(ORANGE),strokeWidth=1.5));d.add(Line(446,24,56,24,strokeColor=color(ORANGE),strokeWidth=1.5));d.add(Line(56,24,56,48,strokeColor=color(ORANGE),strokeWidth=1.5));txt(187,7,'Play again returns to a fresh round.',9,False,MUTED)
    elif kind=='release':
        for x,label in [(0,'Checked files'),(178,'GitHub'),(356,'Vercel URL')]:rect(x,88,148,54);txt(x+14,117,label,12,True,BLUE)
        arrow(151,115,175,115);arrow(329,115,353,115)
        rect(0,10,242,57);txt(12,45,'FIRST DEPLOYMENT',9,True,BLUE);txt(12,26,'Production: confirm before sharing.',10)
        rect(260,10,244,57);txt(272,45,'LATER CHANGES',9,True,BLUE);txt(272,26,'Branch > preview > review > release',9.5)
    elif kind in ('handoff','files'):
        left=['COURSE MATERIAL','AI-START.md','Current lesson + skill','Your question'] if kind=='handoff' else ['my-first-site','index.html','project-brief.md','project-state.md']
        right=['PROJECT CONTEXT','Actual current files','Version + observations','Next small action'] if kind=='handoff' else ['my-first-game','index.html','game-rules.md','project-state.md']
        for x,arr in [(0,left),(266,right)]:
            rect(x,8,238,140);txt(x+15,122,arr[0],11,True,BLUE)
            for j,t in enumerate(arr[1:]):txt(x+25,94-j*27,t,10)
        if kind=='files':txt(194,0,'Keep both projects separate.',9,False,MUTED)
    elif kind=='prompt':
        for x,title,lines in [(0,'VAGUE',['Make it better.','No clear scope.','No completion check.']),(266,'SPECIFIC',['Make the button easy to tap.','Keep the link destination.','Check it on a phone.'])]:
            rect(x,8,238,140);txt(x+15,122,title,11,True,BLUE)
            for j,t in enumerate(lines):txt(x+15,92-j*25,t,10)
    elif kind=='evidence':
        for i,(a,b,c) in enumerate([('PASSED','Observed the expected result.','#19764C'),('FAILED','Tried it; the result was wrong.','#B54735'),('NOT TESTED','No observation yet.',MUTED)]):
            y=106-i*48;rect(0,y,504,42);d.add(Circle(17,y+21,5,fillColor=color(c),strokeColor=None));txt(33,y+17,a,10,True,c);txt(160,y+17,b,10)
    elif kind=='triage':
        for i,(a,b) in enumerate([('1  CAPTURE','Steps, expected result, actual result'),('2  LOCATE','Right file, project, version, and URL'),('3  REPAIR','One reversible change; repeat the check'),('4  HAND OFF','Two failed repairs? Share the evidence')]):
            y=120-i*38;rect(0,y,504,32);txt(12,y+11,a,9,True,BLUE);txt(135,y+11,b,10)
    elif kind=='agents':
        for x,a,b in [(0,'BUILDER','Only writer'),(178,'SAVED VERSION','Frozen review input'),(356,'REVIEWER','Read-only findings')]:rect(x,60,148,82);txt(x+12,113,a,10,True,BLUE);txt(x+12,87,b,9)
        arrow(150,101,175,101);arrow(330,101,353,101)
        d.add(Line(425,55,425,26,strokeColor=color(ORANGE),strokeWidth=1.5));d.add(Line(425,26,70,26,strokeColor=color(ORANGE),strokeWidth=1.5));txt(118,7,'Builder fixes > reviewer rechecks > learner approves release',9,False,MUTED)
    elif kind=='instructions':
        rect(0,8,504,140);txt(18,124,'AGENTS.md',14,True,BLUE)
        for i,t in enumerate(['Project + audience       |  What we are making','Scope + files            |  What can change','Checks + evidence        |  How we know it works','State + next action      |  How another chat resumes']):txt(18,96-i*24,t,10)
    return d

STYLES={
    'p':ParagraphStyle('p',fontName=FONT,fontSize=10.8,leading=15.4,textColor=color(INK),spaceAfter=9),
    'h':ParagraphStyle('h',fontName=BOLD,fontSize=12,leading=16,textColor=color(INK),spaceBefore=4,spaceAfter=6),
    'prompt':ParagraphStyle('prompt',fontName=FONT,fontSize=10.1,leading=14.4,textColor=color('#FFFFFF')),
    'note':ParagraphStyle('note',fontName=FONT,fontSize=10.1,leading=14.4,textColor=color(INK)),
    'step':ParagraphStyle('step',fontName=FONT,fontSize=10.5,leading=15.1,textColor=color(INK),spaceAfter=8),
}

def put(c,paragraph,x,y,w,style='p'):
    p=Paragraph(escape(paragraph).replace('\n','<br/>'),STYLES[style]);pw,ph=p.wrap(w,720);p.drawOn(c,x,y-ph);return y-ph-STYLES[style].spaceAfter

def box(c,text,x,y,w,prompt=False):
    sty=STYLES['prompt' if prompt else 'note'];label='TRY THIS PROMPT' if prompt else 'KEEP IN MIND'
    p=Paragraph(escape(text).replace('\n','<br/>'),sty);_,h=p.wrap(w-28,720);bh=h+45
    c.setFillColor(color(NAVY if prompt else PALE));c.roundRect(x,y-bh,w,bh,7,stroke=0,fill=1)
    c.setFillColor(color(ORANGE if prompt else BLUE));c.setFont(BOLD,8);c.drawString(x+14,y-16,label)
    p.drawOn(c,x+14,y-31-h)
    return y-bh-11

def build_pdf():
    c=canvas.Canvas(str(OUT/'participant-guide.pdf'),pagesize=(612,792))
    c.setTitle('Vibe Coding for Non-Technical Professionals | Participant Guide');c.setAuthor('Mark Hinkle | All Things AI');c.setSubject('Two projects, practical troubleshooting, AI handoff, and optional agent collaboration')
    measurements=[]
    for i,p in enumerate(PAGES,1):
        c.setFillColor(color('#FFFFFF'));c.rect(0,0,612,792,stroke=0,fill=1)
        c.drawImage(str(ASSET/'allthingsai-logo.png'),44,747,width=167,height=21.55,mask='auto')
        c.setStrokeColor(color(LINE));c.line(44,733,568,733)
        c.setFont(BOLD,8);c.setFillColor(color(BLUE));c.drawString(44,713,p['kicker'])
        y=699
        title=Paragraph(escape(p['title']),ParagraphStyle('title',fontName=BOLD,fontSize=31 if i==1 else 25,leading=35 if i==1 else 29,textColor=color(INK)))
        _,h=title.wrap(524,100);title.drawOn(c,44,y-h);y-=h+12
        lead=Paragraph(escape(p['lead']),ParagraphStyle('lead',fontName=FONT,fontSize=12.4,leading=17.4,textColor=color(MUTED)))
        _,h=lead.wrap(510,100);lead.drawOn(c,44,y-h);y-=h+16
        if i==1:
            c.drawImage(str(ASSET/'course-art.jpg'),306,y-246,width=246,height=246,mask='auto')
            c.setFillColor(color(BLUE));c.roundRect(44,y-246,242,246,8,stroke=0,fill=1)
            words=[('01','UNDERSTAND'),('02','MAKE A WEBSITE'),('03','MAKE A GAME')]
            for j,(n,t) in enumerate(words):
                yy=y-48-j*75;c.setFillColor(color('#FFFFFF'));c.setFont(BOLD,24);c.drawString(62,yy,n);c.setFont(BOLD,10);c.drawString(110,yy+5,t)
            y-=269
        elif p['diagram']:
            d=diagram(p['diagram']);renderPDF.draw(d,c,54,y-158);y-=174
        for kind,value in p['blocks']:
            if kind in ('p','h'):y=put(c,value,44,y,524,kind)
            elif kind=='steps':
                for n,t in enumerate(value,1):
                    c.setFillColor(color(BLUE));c.setFont(BOLD,10);c.drawString(44,y-11,str(n).zfill(2))
                    y=put(c,t,69,y,499,'step')
            else:y=box(c,value,44,y,524,kind=='prompt')
        assert y>=63,f'Page {i} overflows: bottom {y}'
        measurements.append({'page':i,'bottom':round(y,1),'title':p['title']})
        c.setStrokeColor(color(LINE));c.line(44,49,568,49)
        c.setFillColor(color(MUTED));c.setFont(FONT,8);c.drawString(44,34,'VIBE CODING / PARTICIPANT GUIDE');c.drawRightString(568,34,f'{i:02d} / {len(PAGES):02d}')
        c.setFillColor(color(BLUE));c.setFont(FONT,8);c.drawString(44,20,'Open the detailed lesson: '+p['ref']);c.linkURL(REPO+p['ref'],(44,16,540,29),relative=0)
        c.showPage()
    c.save();return measurements

def build_svgs():
    for kind in sorted({p['diagram'] for p in PAGES if p['diagram'] and p['diagram']!='cover'}):
        path=ASSET/(kind+'.svg')
        renderSVG.drawToFile(diagram(kind),str(path))
        svg=path.read_text()
        svg=svg.replace('font-family: Arial-Bold;', 'font-family: Arial, Helvetica, sans-serif; font-weight: bold;')
        svg=svg.replace('font-family: Helvetica-Bold;', 'font-family: Arial, Helvetica, sans-serif; font-weight: bold;')
        svg=svg.replace('font-family: Arial;', 'font-family: Arial, Helvetica, sans-serif;')
        svg=svg.replace('font-family: Helvetica;', 'font-family: Arial, Helvetica, sans-serif;')
        title=next(p['title'] for p in PAGES if p['diagram']==kind)
        svg=svg.replace('<title>...</title>','<title>'+escape(title)+'</title>')
        svg=svg.replace('<desc>...</desc>','<desc>Conceptual teaching diagram. A full text explanation appears in the participant guide beside this illustration.</desc>')
        path.write_text(svg)

def build_text():
    html=[];md=['# Vibe Coding for Non-Technical Professionals\n\nIllustrated participant guide | All Things AI | October 2026\n\n[PDF edition](participant-guide.pdf) · [Start here](../START-HERE.md)\n']
    for i,p in enumerate(PAGES,1):
        html.append(f'<section id="page-{i}" aria-labelledby="title-{i}"><p class="eyebrow">{escape(p["kicker"])}</p><h2 id="title-{i}">{escape(p["title"])}</h2><p class="lead">{escape(p["lead"])}</p>')
        md.append(f'\n## {i:02d}. {p["title"]}\n\n{p["lead"]}\n')
        if i==1:html.append('<img class="cover-art" src="assets/course-art.jpg" alt="Class artwork: a person looking at a digital interface with orange and blue light trails.">')
        elif p['diagram']:
            path='assets/'+p['diagram']+'.svg';caption='Conceptual illustration: '+p['title']
            html.append(f'<figure><img src="{path}" alt="{escape(caption)}"><figcaption>{escape(caption)}. The steps below explain the diagram in text. On narrow screens, swipe the diagram to see all labels.</figcaption></figure>')
            md.append(f'\n![{caption}]({path})\n')
        for kind,value in p['blocks']:
            if kind=='p':html.append('<p>'+escape(value)+'</p>');md.append('\n'+value+'\n')
            elif kind=='h':html.append('<h3>'+escape(value)+'</h3>');md.append('\n### '+value+'\n')
            elif kind=='steps':html.append('<ol>'+''.join('<li>'+escape(t)+'</li>' for t in value)+'</ol>');md.append('\n'+'\n'.join(f'{j}. {t}' for j,t in enumerate(value,1))+'\n')
            else:
                label='Try this prompt' if kind=='prompt' else 'Keep in mind'
                html.append(f'<aside class="{kind}"><strong>{label}</strong><p>{escape(value).replace(chr(10),"<br>")}</p></aside>')
                md.append('\n**'+label+'**\n\n'+ ('> ' if kind=='prompt' else '')+value.replace('\n','\n\n')+'\n')
        html.append(f'<p class="lesson"><a href="../{p["ref"]}">Detailed lesson: {p["ref"]}</a></p></section>')
        md.append(f'\n[Detailed lesson: {p["ref"]}](../{p["ref"]})\n')
    nav=''.join(f'<a href="#page-{i}">{i:02d} {escape(p["title"])}</a>' for i,p in enumerate(PAGES,1))
    css='''*{box-sizing:border-box}html{scroll-behavior:auto}body{margin:0;background:#F3F6FB;color:#0D1219;font:17px/1.65 Arial,sans-serif}a{color:#175DAF}a:focus-visible{outline:3px solid #EF8B39;outline-offset:4px}.skip{position:absolute;left:12px;top:-60px}.skip:focus{top:12px}header{max-width:1180px;margin:auto;padding:35px 32px 22px}header img{width:250px;height:auto}header h1{font-size:clamp(28px,4vw,46px);line-height:1.15;max-width:850px}header p{color:#5B6675}.layout{display:grid;grid-template-columns:245px minmax(0,800px);gap:28px;max-width:1180px;margin:0 auto;padding:0 32px 60px}nav{position:sticky;top:16px;align-self:start;max-height:95vh;overflow:auto;font-size:13px;padding:12px 0}nav a{display:block;padding:7px 10px;text-decoration:none;border-left:2px solid #D9E0EA}section{background:#FFF;border:1px solid #D9E0EA;border-radius:10px;padding:38px;margin:0 0 24px;scroll-margin-top:20px}h2{font-size:31px;line-height:1.2;margin:8px 0 15px}h3{font-size:20px}.eyebrow{color:#175DAF;font-size:12px;font-weight:bold;letter-spacing:.1em}.lead{font-size:19px;color:#5B6675}figure{margin:24px 0}figure img{display:block;width:100%;height:auto}figcaption{font-size:12px;color:#5B6675}.cover-art{width:100%;max-height:380px;object-fit:cover;object-position:center 35%;border-radius:8px}li{padding:0 0 12px 8px}aside{border-radius:7px;padding:18px 22px;margin:20px 0}aside strong{font-size:12px;text-transform:uppercase;letter-spacing:.07em}aside p{margin:8px 0 0}.prompt{background:#121B2B;color:#FFF}.prompt strong{color:#EF8B39}.note{background:#F3F6FB;border-left:4px solid #307FE2}.lesson{font-size:13px;border-top:1px solid #D9E0EA;padding-top:16px;overflow-wrap:anywhere}@media(max-width:800px){.layout{display:block;padding:0 14px}header{padding:25px 22px}nav{position:static;max-height:none;display:grid;grid-template-columns:1fr 1fr;margin-bottom:20px}section{padding:25px}h2{font-size:27px}figure{overflow-x:auto}figure img{min-width:504px}}@media(prefers-reduced-motion:reduce){html{scroll-behavior:auto}}@media print{body{background:white;font-size:11pt}header{padding:0}nav,.skip{display:none}.layout{display:block;padding:0}section{break-before:page;border:0;padding:0;margin:0}h2{font-size:24pt}figure{max-width:500px}aside,figure{break-inside:avoid}}'''
    out='<!doctype html><html lang="en"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><title>Vibe Coding | Participant Guide</title><style>'+css+'</style></head><body><a class="skip" href="#main">Skip to guide</a><header><img src="assets/allthingsai-logo.png" alt="All Things AI"><h1>Vibe Coding for<br>Non-Technical Professionals</h1><p>Participant field guide · Mark Hinkle · October 2026<br>Read offline after downloading the course. No account or network is needed for the guide itself.</p></header><div class="layout"><nav aria-label="Guide chapters">'+nav+'</nav><main id="main">'+''.join(html)+'</main></div></body></html>'
    (OUT/'participant-guide.html').write_text(out);(OUT/'participant-guide.md').write_text('\n'.join(md))

if __name__=='__main__':
    OUT.mkdir(exist_ok=True);ASSET.mkdir(exist_ok=True)
    build_svgs()
    measurements=build_pdf();build_text()
    (OUT/'guide-content.json').write_text(json.dumps(PAGES,indent=2)+'\n')
    print(json.dumps({'pages':len(PAGES),'lowest_content_y':min(p['bottom'] for p in measurements),'outputs':['participant-guide.pdf','participant-guide.html','participant-guide.md']},indent=2))
