# VLearn — speaking script

25 minutes. Sit. Do not stand. Arrow keys. Leave the last slide up, then Alt-Tab into the real tools.

Talk as the project, not as one person’s feature. If a teammate owns a line, hand it to them.

Rough clock: slides 1–5 about 12 minutes. Slides 6–7 about 8 minutes. Slide 8 plus the tools: the rest. Stop early if they lean in.

---

## 1 · VLearn

We’re VLearn, at VinUni. This is a working session, not a pitch. We’ll spend a few minutes on the problem, then open the actual product.

The short version: a class is quiet, a chatbot only hears the student who already spoke, and a quiz at week 15 is too late to change this course. So we are trying to make one learning day that can adapt while the course is still running.

---

## 2 · Cognitive silence

The problem is not “students need a chatbot.”

At VinUni the official signal is still the end-of-term survey. That lands around week 15. Whatever you learn from it cannot help this cohort.

In the room, a lot of students do not raise a hand. The class chat and Teams stay quiet too. So the lecturer keeps teaching at one speed, and the people who are lost do not announce it.

A chatbot next to the slides only hears the student who already opened it. Silence does not become a question.

And when students do write something, it is usually a pile of open comments. Someone has to read that by hand, often weeks later.

So the gap is time, and it is also who gets heard.

---

## 3 · Close the loop

We already have pieces. Each one, alone, does not adapt the class.

The tutor answers one question, for one student who asked. Tomorrow’s lecture does not change.

A quiz and a knowledge component can tell you there is a gap. They do not tell you which page, or which second of the video, the class got stuck on.

Tracking gives logs. A log is not yet the thing an instructor does the next morning.

What we mean by fully adaptive is the loop on the green card. A signal from the material, then where the class is stuck, then the tutor and the quiz aim at that knowledge component, then a person changes the lesson. The person stays in the decision.

Under that, the signals. These come from the hands, not from the mouth. Time on a page, going back, selecting text, drawing a lasso on the confused region, asking the AI, asking for help, what happens in the codelab, and anonymous feedback.

One caution we learned the hard way: dwell is a weak signal. Reading for a long time can mean the student is actually studying. Asking, and feedback, are stronger. And the heatmap is the cohort. We do not put one student’s name on it.

---

## 4 · The project

This is not one feature, and it is not one person’s work. Five questions sit on the same learning day.

First, the day itself. Instructors author it together: slides, video, lab rooms, quiz. More than one instructor can be in the same draft. You can see who else is editing.

Second, the learner model. Five questions about one student. Not a single score, and not a five-state model copied from a paper. The split is ours. I’ll open that on the next slide.

Third, the profile. A claim about a student needs evidence, a scope, and an expiry. A wish is not an observation. The student should be able to see it and contest it. More clicks do not make a profile.

Fourth, concepts. Knowledge components drawn from the chapter itself. We can find real concepts. Matching someone else’s expert index stalls near 50 percent. That number is a research result, not a product claim.

Fifth, the tutor. It helps on the slide that is on screen, and on the video second. It can propose a teaching move. It does not write mastery. Mastery is a separate estimate, with its own evidence.

---

## 5 · Five questions

This is what an instructor should be able to ask about one student.

Coverage: what did they reach, and what did they finish? Video, document, lab, and quiz stay separate. If we did not measure it, we say unknown. We do not fill the gap.

Process: in what order did they work? Start, answer, hint, finish, retry, resubmit. That is a timeline, not a total of clicks.

Support: where did they need help, and did help arrive? No data means unknown, not “they are fine.”

Mastery: given the evidence, which knowledge components can we estimate? The estimate carries history, source, and which model version produced it.

Evidence confidence: how many tasks, how fresh, what is missing? We do not have one validated confidence score yet. That is still open.

None of the five covers a full lesson in production. We have local audits and replays. Please treat this as the design, not as a finished learner.

---

## 6 · What the research actually found

Four results, and the limits are part of the result.

Concepts. On an offline benchmark, semantic precision sits around 83 to 90 percent. After a cheap filter, purity is about 94 to 100 percent. Matching an expert index stalls near an F1 of 52 to 55 percent, and that ceiling looks structural: experts label the same concept differently across chapters. So downstream we want the real concepts, not a perfect copy of the index.

Profile. Four different things get collapsed too easily. A wish, an observation, an estimate, and the next action. “This student dislikes Socratic tutoring” might just mean they are in a hurry, or the question was too hard, or the tutor repeated itself. We should not freeze that into a permanent label.

Affect. This is a proposal, not a feature on students. Three labels only, read from the dialogue: confusion, frustration, uncertainty. No camera, no voice, no personality score. And affect must not rewrite mastery. Being confused is not the same as not knowing. Saying thank you is not the same as having learned.

Signals. We have a shortlist, not an equation. Time on the material, how much of it they covered, rereading, skipping ahead, how long until the first help request, and in the codelab, runs and public-test failures. Dwell alone stays a weak signal. We have not earned the right to fold all of these into one confusion score.

---

## 7 · Where it stands

Left side is in the classroom. Right side is still research. Both are true.

In the classroom, a learning day is real. Authoring is a shared draft, and presence shows who else is in it. Labs load rooms from the database. A student can raise a hand. A bonus needs a note. The reader knows the slide on screen and the video second, and a student can copy text from a region. Signals are recorded only after consent at login. We do not grant that in silence. The view is the cohort, not a name.

On the right, the learner is not finished. The five states are local slices, not a full lesson, not production. The profile is a design we are still discussing. Concepts are real, and the index match stays near 50 percent. Affect is three labels from dialogue, and it must not edit mastery.

If you remember one sentence: the day is running. The model of the student is not done, and we are not pretending it is.

---

## 8 · Let’s open the hood

We’ll stop the slides here and open the tools. The useful things to click, in this order:

1. A published learning day: slides, then the video, with the tutor on that page.
2. Authoring: a draft, and that another instructor can be present in it.
3. A lab session: rooms, raise hand, a bonus with a note.
4. Only if there is time: where a signal would show up for the cohort, not for one named student.

We can go wherever you want to poke. A honest “that part is still research” is a fine answer.

---

## If they ask

**Is this adaptive yet?**
The day adapts in small ways: the tutor is on the page, practice follows a knowledge component. The full loop — signal, then a changed lesson the next morning — is the goal. It is not closed.

**Can you tell me which student is struggling?**
Not as a name on a heatmap. We can talk about a cohort on a page. A claim about one student needs evidence, a scope, and an expiry, and the student should be able to contest it.

**Why not just use Gemini on the slides?**
A model next to the slides does not know the page, the second, the lab, or what the class did yesterday. It also only helps the student who asks.

**What should we not believe?**
The 50 percent index match. The five states as production. Affect as a running tutor feature. Dwell as proof that someone is lost.
