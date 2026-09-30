import assert from 'node:assert/strict';
import fs from 'node:fs';
import {units,lessons,stages,curriculum} from '../dist/course.js';
import {readings} from '../dist/readings.js';
assert.equal(units.length,12);assert.equal(lessons.length,48);assert.equal(new Set(lessons.map(l=>l.id)).size,48);
assert.equal(curriculum.totalMinutes,4200);assert.equal(stages.reduce((s,a)=>s+a[2],0),70);
let questions=0,words=0;
for(const u of units){assert.equal(lessons.filter(l=>l.unit===u.id).length,4);assert.ok(u.vocab.length>=24);assert.ok(u.dialogue.length>=4);assert.equal(u.readQ.length,4);assert.ok(u.mission.length>100);assert.ok(u.missionModel.length>80);for(const w of u.vocab){assert.ok(w.de&&w.en);words++;}}
for(const l of lessons){assert.equal(l.notes.length,3);assert.ok(l.notes.join(' ').split(/\s+/).length>=130,l.id);assert.equal(l.examples.length,6,l.id);assert.equal(l.drills.length,4,l.id);assert.ok(l.writing.length>80);assert.ok(l.speaking.length>70);assert.ok(l.model.length>75);assert.equal(l.minutes,70);for(const d of l.drills){assert.equal(d.wrong.length,2);assert.equal(new Set([d.a,...d.wrong]).size,3);assert.ok(d.why.length>25);}questions+=l.drills.length+l.examples.slice(0,3).length+units.find(u=>u.id===l.unit).vocab.filter((_,i)=>i%4===lessons.filter(x=>x.unit===l.unit).indexOf(l)).length;}
assert.equal(new Set(lessons.map(l=>l.notes.join(''))).size,48);
assert.equal(readings.length,12);for(const r of readings){assert.ok(r.de.split(/\s+/).length>=50);assert.ok(r.en.length>200);assert.equal(r.questions.length,3);for(const q of r.questions)assert.equal(q.length,4);}
const html=fs.readFileSync('dist/index.html','utf8');for(const f of ['app.js','course.js','style.css','favicon.svg'])assert.ok(fs.existsSync('dist/'+f));assert.match(html,/lang="en"/);
const app=fs.readFileSync('dist/app.js','utf8');assert.ok(app.includes('localStorage'));assert.ok(app.includes('get_learning_progress'));
console.log(`COURSE VERIFIED: ${lessons.length} lessons, ${units.length} missions, ${words} vocabulary entries, ${questions} lesson questions, ${curriculum.totalMinutes} planned minutes.`);
