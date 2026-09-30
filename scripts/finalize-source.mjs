import fs from 'node:fs';
const path='dist/app.js';let s=fs.readFileSync(path,'utf8');
const replacements=[
 ["function homeView(){const next=lessons.find(l=>!state.completed.includes(l.id))||lessons[0];", "function homeView(){const next=lessons.find(l=>l.id===state.lastLesson&&!state.completed.includes(l.id))||lessons.find(l=>!state.completed.includes(l.id))||lessons[0];"],
 ["if(quiz.index>=quiz.questions.length){state.scores??={};", "if(quiz.index>=quiz.questions.length&&quiz.round===1){state.scores??={};"],
 ["for(const k of ['cards','notes','drafts'])Object.assign", "for(const k of ['cards','notes','drafts'])Object.assign"],
 ["<span>${completeCount(u.id)}/4 lessons · ${state.missions.includes(u.id)?'✓ Mission':'Mission open'}</span>", "<span>${completeCount(u.id)}/4 lessons · ${state.missions.includes(u.id)?'✓ Mission':'Mission open'}${state.scores?.['checkpoint:'+u.id]?' · First attempt '+state.scores['checkpoint:'+u.id].correct+'/'+state.scores['checkpoint:'+u.id].total:''}</span>"],
 ["<p class=\"lead\">A practice checkpoint, not a certified exam. Read the unit mission’s exchange before its comprehension question.</p>", "<p class=\"lead\">A practice checkpoint, not a certified exam. Use the reading texts below for the comprehension questions. Your first-attempt score is saved separately from retries.</p>"],
 ["<h2>You have a feedback loop.</h2>", "<h2>Read more than single sentences.</h2><p>Each unit mission includes an original graded reading passage, a dialogue, English support and comprehension questions in its checkpoint. First read for the situation, then scan for the exact information a question asks for. On a second pass, listen with the text hidden and retell the story.</p><h2>You have a feedback loop.</h2>"]
];
for(const [from,to]of replacements){if(!s.includes(from)&&!s.includes(to))throw Error('Expected source text not found');s=s.replace(from,to);}
fs.writeFileSync(path,s);
let readme=fs.readFileSync('README.md','utf8').replace('12 original dialogues and practical missions, 12 mixed checkpoints.','12 original graded reading passages, 12 dialogues and practical missions, and 12 mixed checkpoints with 36 additional reading questions.');fs.writeFileSync('README.md',readme);
console.log('Source refinements saved.');
