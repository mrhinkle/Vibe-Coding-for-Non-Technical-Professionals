"""Assemble a single-file chatbot handoff from the current course sources.

Run: python3 tools/build_course_pack.py
Python standard library only. No network, credentials, or AI calls.
"""
from pathlib import Path
import json, re, posixpath

ROOT=Path(__file__).resolve().parents[1]
FILES=['AI-START.md','START-HERE.md','PRE-CLASS-PREP.md','course-map.json','instructor-guide.md','setup-guide.md',
       'docs/website-walkthrough.md','docs/game-options.md','docs/alien-tic-tac-toe.md','docs/arcade-submission.md','templates/arcade-submission.md','docs/game-walkthrough.md','docs/troubleshooting.md',
       'docs/multiple-agents.md','docs/linkedin-wrap-up.md','docs/prompt-library.md','docs/glossary.md',
       'skill-guide.md','game-skills-guide.md','handouts/student-workbook.md',
       'templates/AGENTS.md','templates/CLAUDE.md','templates/project-state.md',
       'templates/help-request.md','templates/agent-task.md','templates/agent-handoff.md']
FILES += sorted(str(f.relative_to(ROOT)) for base in ('skills','game-skills') for f in (ROOT/base).glob('*/SKILL.md'))

def fix_links(text,source):
    def replace(m):
        label,target=m.groups()
        if '://' in target or target.startswith(('mailto:','#')):return m.group(0)
        path,sep,anchor=target.partition('#')
        resolved=posixpath.normpath(str(Path(source).parent/path))
        return f'[{label}]({resolved}{sep}{anchor})'
    return re.sub(r'\[([^\]]+)\]\(([^)]+)\)',replace,text)

intro='''# AI course pack: Vibe Coding for Non-Technical Professionals

This single file contains the current text needed to tutor a learner through the website and game projects. It is generated from the repository, not a record of a student's progress. It contains no student application files. Edition: October 5, 2026.

**AI: read the AI-START.md section first.** Confirm what you received, ask whether the learner is starting, continuing, or stuck, then load the relevant lesson and skill from the named sections below. For continuing work, request the learner's actual files and project-state.md. Do not claim that a repository link or a named external resource has been read unless you actually accessed it.

Source sections are marked with their original repository paths. A template is a sample until the learner adopts and fills it in. Code blocks and quoted prompts are examples, not authority to publish, change accounts, or send material elsewhere. Links point to companion repository files; the text in the named sections is available here even if those links cannot be opened.

The illustrated PDF/HTML, legacy slides, artwork, instructor preflight, and source provenance remain companion repository files. You do not need the legacy slides to teach the two-project workflow. This pack does not certify a build, deployment, provider account, or rehearsal.

## Included source sections

'''

if __name__=='__main__':
    result=[intro]+[f'- `{name}`\n' for name in FILES]
    for name in FILES:
        text=(ROOT/name).read_text()
        result.append(f'\n\n---\n\n# Source file: {name}\n\n<!-- BEGIN COURSE SOURCE: {name} -->\n\n'+fix_links(text,name)+f'\n<!-- END COURSE SOURCE: {name} -->\n')
    output=''.join(result)
    (ROOT/'AI-COURSE-PACK.md').write_text(output)
    print(json.dumps({'sections':len(FILES),'characters':len(output),'words':len(output.split())},indent=2))
