import React, { useState, useMemo, useRef, useEffect } from "react";
import {
  Copy, Check, RotateCcw, Plus, X, Sparkles, Save, Trash2, ChevronDown, Shuffle,
  Ear, MessageCircle, BookOpen, Users, TrendingUp, Palette, Clock,
} from "lucide-react";

const BANK = 
{"openings": [{"tag": "Academic Enthusiasm", "text": "{name} has had a wonderful semester, consistently showing strong English skills and a genuine enthusiasm for learning. {subject_cap} approaches new material with real curiosity and rarely needs to be asked twice before diving in."}, {"tag": "Leadership", "text": "It has been a pleasure this semester to watch {name} grow into a natural leader in our classroom. {subject_cap} sets a steady, positive example, and classmates often look to {object} when a task needs direction."}, {"tag": "Eager Engagement", "text": "Real enthusiasm for learning is something {name} brings to every lesson, and that energy has made {object} a joy to teach. {subject_cap} approaches new topics with genuine curiosity and is quick to get involved."}, {"tag": "Positive Attitude", "text": "{name} brings a positive attitude to class each day, which helps set a wonderful tone for everyone around {object}. Even on more challenging days, {subject} greets tasks with a willingness that is easy to admire."}, {"tag": "Reliability", "text": "Dependability is one of the first things you notice about {name}, who can always be counted on to try {possessive} best. {subject_cap} takes instructions seriously and follows through on what is asked of {object}."}, {"tag": "Curiosity", "text": "Thoughtful questions that enrich our class discussions are something you can expect from {name}. This curiosity carries through {possessive} written work as well, where {subject} is willing to explore ideas in depth."}, {"tag": "Creativity", "text": "{name} has a creative spark that comes through in {possessive} work, often approaching tasks in original and imaginative ways. {subject_cap} enjoys putting a personal touch on assignments rather than simply following the expected pattern."}, {"tag": "Independence", "text": "Working things out independently is a skill {name} is developing nicely this semester. {subject_cap} shows patience when a task is tricky and is willing to try more than one approach before asking for help."}, {"tag": "Quiet Achiever", "text": "Steady, focused effort has led to real results for {name}, even though {subject} tends to work quietly. {possessive_cap} results speak for themselves, even if {subject} is not always the loudest voice in the room."}, {"tag": "Kindness", "text": "{name} is a kind and considerate classmate, and {possessive} warmth has made a real difference to our classroom community. {subject_cap} is quick to notice when someone needs support and offers it without being asked."}, {"tag": "Growing Confidence", "text": "Growing confidence has been one of the highlights of the semester for {name}, whose progress has been genuinely encouraging to watch. Tasks that once felt daunting are now approached with a much steadier hand."}, {"tag": "Building Confidence", "text": "Taking on new challenges with enthusiasm is something increasingly common for {name} this semester. Where {subject} once hesitated, {subject} now steps forward more readily."}, {"tag": "Hard Work", "text": "{name} is a hardworking student who consistently puts in genuine effort across every part of class, from speaking to writing. Whether the task is easy or difficult, {subject} approaches it with the same steady commitment."}, {"tag": "Determination", "text": "A real sense of determination is something {name} brings to difficult tasks, rarely giving up without a fair attempt. {subject_cap} keeps trying even when the work is hard, which stands out."}, {"tag": "Cheerful Energy", "text": "Visible enjoyment and cheerful energy are hallmarks of how {name} takes part in class activities. This enthusiasm is contagious and often helps lift the mood of the whole group."}, {"tag": "Thoughtfulness", "text": "{name} is a thoughtful student who takes time to consider {possessive} answers carefully before sharing them. This care shows in the quality and clarity of {possessive} responses, even when {subject} is quiet about offering them."}, {"tag": "Cooperation", "text": "Cooperating, sharing, and lending a hand when needed comes naturally to {name}, who works well with others. Classmates enjoy partnering with {object} because {subject} brings out the best in group work."}, {"tag": "Steady Progress", "text": "Clear signs of progress this semester have been encouraging to see from {name}. Each week has brought a small but noticeable step forward."}, {"tag": "Quiet Capability", "text": "{name} tends to be reserved in class, but {subject} has shown real capability whenever given the chance to shine. With encouragement, {possessive} strengths come through clearly."}, {"tag": "Potential", "text": "Plenty of potential has already been on display from {name} this semester, with some encouraging glimpses of what {subject} can achieve. With continued support, I expect {object} to build on these early signs of growth."}, {"tag": "Ready & Willing", "text": "Genuine enthusiasm for learning is evident every day from {name}. {subject_cap} arrives ready to take part and rarely needs convincing to get started."}, {"tag": "Quick Learner", "text": "{name} continues to impress with {possessive} strong grasp of new material and {possessive} eagerness to apply it. {subject_cap} moves confidently from understanding a concept to using it in {possessive} own work."}, {"tag": "Can-Do Attitude", "text": "Settling into our classroom routines has come easily to {name}, who approaches each day with a can-do attitude. {subject_cap} knows what is expected and meets it with steady reliability."}, {"tag": "Attention to Detail", "text": "Noticing small details that others might miss is something that stands out about {name}. This attentiveness shows both in {possessive} classwork and in how {subject} treats {possessive} classmates."}], "closings": [{"tag": "Enjoyed Teaching", "text": "{name} should feel proud of the effort put in this semester, and I have thoroughly enjoyed teaching {object}. {possessive_cap} progress is a strong sign of good things to come."}, {"tag": "Continued Growth", "text": "I look forward to seeing this continued growth, as {subject} builds on a foundation that is already looking solid."}, {"tag": "Confident Continuation", "text": "It has been a pleasure watching {name} develop this semester, and I am confident the progress will continue at the same encouraging pace."}, {"tag": "Pride", "text": "{name} should feel proud of the effort put in this semester, and I look forward to what comes next."}, {"tag": "Building Strengths", "text": "I am excited to see how these strengths continue to build, and I have every confidence {subject} will rise to the challenge."}, {"tag": "Positive Outlook", "text": "{name}'s positive attitude gives me no doubt that {subject} will continue to thrive in the coming semester and take on new challenges with the same enthusiasm."}, {"tag": "Strong Foundation", "text": "A strong foundation has been laid this semester by {name}, and I look forward to supporting {possessive} continued progress."}, {"tag": "Celebrating Achievements", "text": "I truly enjoy having {object} in class, and I look forward to celebrating {possessive} continued achievements as the year goes on."}, {"tag": "Momentum", "text": "Carrying this momentum into the next semester is something I am confident {name} will do, building on the habits already begun."}, {"tag": "Rewarding Growth", "text": "{name}'s growth this semester has been genuinely rewarding to watch, and I look forward to what lies ahead."}, {"tag": "Proud Moment", "text": "So much to be proud of this semester belongs to {name}, and I look forward to seeing {possessive} continued development."}, {"tag": "Appreciation", "text": "I appreciate the effort and attitude shown this semester, and I look forward to another great semester together building on what has already been achieved."}, {"tag": "Teaching Highlight", "text": "One of the highlights of my teaching this term has been watching the confidence grow in {name}, and I expect that growth to continue."}, {"tag": "Confidence Ahead", "text": "{name} has every reason for confidence heading into the semester ahead, and I look forward to it with real optimism for {possessive} progress."}, {"tag": "Proud & Successful", "text": "{name} has given me plenty to feel proud of this semester, and I look forward to seeing {possessive} continued success."}, {"tag": "Skill Building", "text": "I look forward to seeing these skills and this confidence continue to build next semester, and I am glad to be part of that journey."}, {"tag": "Guided Growth", "text": "Guiding this learning journey has been a joy, and I look forward to what comes next for {name}."}, {"tag": "Gratitude", "text": "{name}'s presence in our classroom is genuinely appreciated, and I look forward to {possessive} continued journey with us in the semester ahead."}, {"tag": "Wonderful Growth", "text": "Wonderful growth has been shown this semester by {name}, and I look forward to seeing this continue as new challenges arise."}, {"tag": "Ongoing Support", "text": "I look forward to supporting continued skill development next semester, building steadily on the progress already made."}], "middles": {"Listening & Attention": [{"type": "strength", "text": "{subject_cap} listens attentively during lessons and follows instructions well, which supports {possessive} progress in every lesson. {subject_cap} rarely needs directions repeated and settles into tasks quickly."}, {"type": "developing", "text": "A gentle reminder to stay focused is sometimes all {name} needs, and {subject} responds well to encouragement. With a little support, {subject} is able to bring {possessive} attention back to the task at hand."}, {"type": "developing", "text": "{subject_cap} is continuing to develop the concentration needed for longer activities, and has shown real improvement throughout the term. {subject_cap} is better able to see a task through to the end than at the start of the semester."}, {"type": "strength", "text": "{subject_cap} already shows strong concentration when a task holds {possessive} interest, and this steady focus is becoming more consistent across lessons."}, {"type": "developing", "text": "{subject_cap} is learning to manage distractions more effectively and has shown encouraging improvement in this area. {possessive_cap} ability to refocus after a distraction has grown steadily this term."}], "Speaking & Participation": [{"type": "developing", "text": "{subject_cap} is gradually becoming more comfortable contributing during class discussions. Each week {subject} seems a little more willing to raise a hand and share {possessive} thinking."}, {"type": "developing", "text": "Although naturally quiet, {name} is beginning to share ideas with growing confidence. When {subject} does speak up, {possessive} contributions are thoughtful and well considered."}, {"type": "developing", "text": "I look forward to hearing {possessive} voice more often as {possessive} confidence continues to develop. {subject_cap} clearly has valuable ideas to offer once {subject} feels ready to share them."}, {"type": "strength", "text": "Sharing {possessive} ideas enthusiastically during class discussions comes naturally to {name}. {subject_cap} listens carefully to classmates too, often building on what others have said."}, {"type": "strength", "text": "{subject_cap} speaks up more readily than before, and {possessive} contributions add real value to our class discussions. {subject_cap} has become one of the more confident voices in group conversations."}], "Homework & Responsibility": [{"type": "developing", "text": "{subject_cap} would benefit from completing homework more consistently, as regular practice will strengthen {possessive} English skills. When homework is completed, the quality of {possessive} work is genuinely strong."}, {"type": "developing", "text": "A little more consistency at home would go a long way for {name}, helping to reinforce the excellent work already begun in class."}, {"type": "developing", "text": "With a little more consistency outside the classroom, {subject} has every opportunity to make steady progress. {possessive_cap} classroom effort shows {subject} is capable of strong results with regular practice."}, {"type": "strength", "text": "{name} completes homework reliably and takes {possessive} responsibilities seriously. This consistency has become one of {possessive} clear strengths this semester."}, {"type": "strength", "text": "{subject_cap} has developed a strong sense of responsibility, and {possessive} homework habits have improved noticeably this semester."}], "Confidence & Communication": [{"type": "developing", "text": "{subject_cap} is building confidence in expressing {possessive} ideas, and this is coming through more clearly each week. {subject_cap} is more willing than before to put {possessive} thinking into words."}, {"type": "strength", "text": "Asking questions when help is needed comes naturally to {name}, who communicates {possessive} thoughts clearly. This openness has made it easier to support {object} exactly where {subject} needs it."}, {"type": "developing", "text": "As {possessive} confidence grows, I expect {object} to communicate even more freely with peers and teachers alike. {subject_cap} is already taking small steps in that direction."}, {"type": "developing", "text": "{subject_cap} sometimes hesitates to share {possessive} thoughts, but shows real understanding when given the chance to explain. With a bit more encouragement, {subject} expresses {possessive} ideas clearly and confidently."}, {"type": "strength", "text": "Growing poise during presentations and discussions is something increasingly visible in {name}. {subject_cap} carries {object}self with more assurance than before, which is lovely to see."}], "Teamwork & Behaviour": [{"type": "strength", "text": "{subject_cap} works well within a group and is respectful of {possessive} classmates' ideas and contributions. {subject_cap} listens as readily as {subject} shares, which makes {object} an easy partner to work with."}, {"type": "strength", "text": "Classmates often turn to {name} for a patient hand, since {subject} is always willing to help others when needed."}, {"type": "developing", "text": "{subject_cap} is learning to share and take turns more consistently during group activities. {possessive_cap} cooperation has improved steadily as the semester has gone on."}, {"type": "strength", "text": "{possessive_cap} cooperative attitude makes {object} a pleasure to have in group work. {subject_cap} contributes fairly and makes sure others get a chance to be heard too."}, {"type": "developing", "text": "{name} is developing stronger teamwork skills, and shows real care for {possessive} classmates. This care comes through in the patient, encouraging way {subject} works alongside others."}], "Progress & Perseverance": [{"type": "strength", "text": "{subject_cap} has made pleasing progress this semester and continues to build on {possessive} strengths. Each new unit seems to come a little more easily than the last."}, {"type": "strength", "text": "Overcoming new challenges is something {name} does not shy away from, thanks to real perseverance. {subject_cap} approaches setbacks as something to work through rather than something to avoid."}, {"type": "developing", "text": "When faced with a difficult task, {subject} is still building the persistence to see it through, though real improvement is showing with practice."}, {"type": "strength", "text": "{possessive_cap} steady effort throughout the semester has led to noticeable and encouraging improvement. The consistency of {possessive} work ethic has been one of the highlights of the term."}, {"type": "developing", "text": "Progress is coming gradually for {name}, and continued practice should help build on the small steps already made this term."}], "Creativity & Imagination": [{"type": "strength", "text": "{subject_cap} approaches tasks with real imagination, often coming up with original ideas that surprise and delight. {subject_cap} is not afraid to try an unusual approach when a familiar one would do."}, {"type": "strength", "text": "A distinctive style comes through in the work of {name}, whose creativity shines in both written and artistic assignments."}, {"type": "developing", "text": "{subject_cap} is beginning to explore new ways of solving problems, and this imaginative thinking is starting to take shape."}, {"type": "developing", "text": "{subject_cap} is encouraged to bring more of this creative thinking into everyday classwork, and I look forward to seeing it develop. The imagination {subject} shows in free-choice tasks is a real strength worth building on."}, {"type": "strength", "text": "{name} shows a lovely sense of imagination, particularly during open-ended and creative activities. Given room to explore, {subject} produces work that is genuinely {possessive} own."}], "Punctuality & Organization": [{"type": "strength", "text": "{subject_cap} arrives to class on time and is well prepared for the day's activities. This reliability makes it easy for {object} to settle in and get straight to work."}, {"type": "developing", "text": "Real strides in keeping track of materials and deadlines have been made by {name} this semester, which supports {possessive} learning well."}, {"type": "developing", "text": "With a little more attention to organization, {subject} will find classwork even more manageable. Small routines around tidying and planning would help {object} even further."}, {"type": "strength", "text": "{possessive_cap} materials stay tidy and ready, which reflects well on {possessive} sense of responsibility. This preparedness helps {object} make the most of every lesson."}, {"type": "developing", "text": "Building consistent routines around punctuality and preparation is an area of continued growth for {name}. {subject_cap} has already shown {subject} can manage this well when {subject} puts {possessive} mind to it."}]}};

const PRONOUNS = {
  "he/him": { subject: "he", object: "him", possessive: "his" },
  "she/her": { subject: "she", object: "her", possessive: "her" },
};

const CATEGORY_LIST = Object.keys(BANK.middles);

const CATEGORY_ICONS = {
  "Listening & Attention": Ear,
  "Speaking & Participation": MessageCircle,
  "Homework & Responsibility": BookOpen,
  "Confidence & Communication": Sparkles,
  "Teamwork & Behaviour": Users,
  "Progress & Perseverance": TrendingUp,
  "Creativity & Imagination": Palette,
  "Punctuality & Organization": Clock,
};

const CATEGORY_SHORT_LABEL = {
  "Listening & Attention": "Listening",
  "Speaking & Participation": "Speaking",
  "Homework & Responsibility": "Homework",
  "Confidence & Communication": "Confidence",
  "Teamwork & Behaviour": "Teamwork",
  "Progress & Perseverance": "Progress",
  "Creativity & Imagination": "Creativity",
  "Punctuality & Organization": "Organization",
};

// one muted accent per category — mostly blue/grey, with Creativity as the
// deliberate spot of warm color
const CATEGORY_ACCENT = {
  "Listening & Attention": "#5B8DEF",
  "Speaking & Participation": "#7C93B8",
  "Homework & Responsibility": "#8B93A6",
  "Confidence & Communication": "#4FA3D1",
  "Teamwork & Behaviour": "#6E8CAE",
  "Progress & Perseverance": "#5DA3A3",
  "Creativity & Imagination": "#E0793C",
  "Punctuality & Organization": "#6B7280",
};
const NEUTRAL_ACCENT = "#8A93A3"; // openings/closings use this instead of a color-per-item

const TYPE_LABEL = { strength: "Strength", developing: "Growth" };
const TYPE_COLORS = {
  strength: { text: "#8FB4FF", bg: "rgba(92, 141, 239, 0.14)" },
  developing: { text: "#F0A873", bg: "rgba(224, 121, 63, 0.14)" },
};

// ---- theme: dark, minimal, blue/grey/black/white with red/orange accents ----
const THEME = {
  pageBg: "#101318",
  cardBg: "#1B1F26",
  cardBgAlt: "#20252E",
  cardBgSubtle: "#181B21",
  border: "#262B33",
  borderStrong: "#3A424F",
  textPrimary: "#E8EAED",
  textSecondary: "#9AA2AE",
  textMuted: "#6E7682",
  inputBg: "#15181D",
  accent: "#5C8AE6",
  accentSoft: "rgba(92, 138, 230, 0.14)",
  accentText: "#F2F5FA",
  warn: "#E0A83C",
  danger: "#D9695A",
  overlay: "rgba(6, 8, 11, 0.72)",
};

function cap(s) {
  return s.charAt(0).toUpperCase() + s.slice(1);
}

function fill(text, name, p) {
  if (!text) return "";
  const displayName = name || "This student";
  let out = text.replaceAll("{name}", displayName);
  out = out.replaceAll("{subject_cap}", cap(p.subject));
  out = out.replaceAll("{possessive_cap}", cap(p.possessive));
  out = out.replaceAll("{object}self", p.object + "self");
  out = out.replaceAll("{subject}", p.subject);
  out = out.replaceAll("{object}", p.object);
  out = out.replaceAll("{possessive}", p.possessive);
  return cap(out);
}

function wordCount(text) {
  return text.trim().split(/\s+/).filter(Boolean).length;
}

function randInt(n) {
  return Math.floor(Math.random() * n);
}

function pickUnusedIdx(length, usedSet) {
  const unused = [...Array(length).keys()].filter((i) => !usedSet.has(i));
  const pool = unused.length > 0 ? unused : [...Array(length).keys()];
  return pool[randInt(pool.length)];
}

function neutralize(text) {
  return text
    .replace(/\{name\}/g, "the student")
    .replace(/\{subject_cap\}/g, "They")
    .replace(/\{subject\}/g, "they")
    .replace(/\{possessive_cap\}/g, "Their")
    .replace(/\{possessive\}/g, "their")
    .replace(/\{object\}self/g, "themself")
    .replace(/\{object\}/g, "them");
}

function truncate(text, n) {
  const clean = cap(neutralize(text));
  return clean.length > n ? clean.slice(0, n).trim() + "\u2026" : clean;
}

function previewText(filledText, n) {
  return filledText.length > n ? filledText.slice(0, n).trim() + "\u2026" : filledText;
}

function pluralize(n, singular, plural) {
  return `${n} ${n === 1 ? singular : plural}`;
}

// ---- duplicate-word detection ----
// A curated list of the descriptive words actually prone to repeating across
// this bank's openings/middles/closings (found by analyzing real overlap
// across every possible pairing), each with a couple of tone-appropriate
// synonyms. Generic connective words (semester, look, forward, work, etc.)
// are deliberately excluded — repeating those is normal, not disingenuous.
const RISK_WORDS = {
  progress: ["growth", "development", "advancement"],
  continued: ["ongoing", "sustained", "steady"],
  confidence: ["self-assurance", "poise", "assuredness"],
  confident: ["self-assured", "poised"],
  strong: ["solid", "robust", "considerable"],
  ideas: ["thoughts", "input", "contributions"],
  building: ["growing", "developing", "strengthening"],
  steady: ["consistent", "reliable", "even"],
  effort: ["work", "dedication", "commitment"],
  encouraging: ["promising", "positive", "heartening"],
  genuine: ["real", "authentic", "sincere"],
  consistency: ["reliability", "steadiness"],
  thoughtful: ["considerate", "reflective"],
  creative: ["imaginative", "inventive"],
  curiosity: ["inquisitiveness", "interest"],
  imagination: ["creativity", "inventiveness"],
  imaginative: ["creative", "inventive"],
  determination: ["resolve", "persistence"],
  persistence: ["perseverance", "resolve"],
  perseverance: ["persistence", "resolve"],
  responsibility: ["accountability", "reliability"],
  enthusiasm: ["energy", "eagerness", "excitement"],
  poise: ["composure", "self-possession", "assurance"],
  growth: ["development", "progress", "advancement"],
  development: ["growth", "progress", "advancement"],
  thoughts: ["ideas", "input", "reflections"],
  contributions: ["input", "participation"],
  creativity: ["imagination", "inventiveness"],
};

function countWholeWord(text, word) {
  const re = new RegExp(`\\b${word}\\b`, "gi");
  const matches = text.match(re);
  return matches ? matches.length : 0;
}

function detectDuplicateRiskWords(fullText) {
  const found = [];
  Object.keys(RISK_WORDS).forEach((word) => {
    const count = countWholeWord(fullText, word);
    if (count >= 2) found.push({ word, count });
  });
  return found;
}

// Replace every occurrence of `word` in `text` with `synonym`, matching the
// capitalization of each individual occurrence.
function replaceAllWholeWord(text, word, synonym) {
  const re = new RegExp(`\\b${word}\\b`, "gi");
  return text.replace(re, (match) => (
    match[0] === match[0].toUpperCase() ? cap(synonym) : synonym
  ));
}

// Apply a synonym fix ONE occurrence at a time: keep the first paragraph
// containing the word unchanged, and swap the word in exactly the next
// paragraph that also contains it — no further ones. If the word appears
// 3+ times, this leaves it still flagged so the person can click again
// (and even pick a different synonym each time) rather than blasting every
// remaining occurrence to the same word in one click.
function computeSynonymOverride(paragraphs, existingOverrides, word, synonym) {
  const resolved = paragraphs.map((text, i) => applyParagraphOverrides(text, existingOverrides[i]));
  const next = { ...existingOverrides };
  let seenFirst = false;
  let fixedOne = false;
  for (let i = 0; i < resolved.length; i++) {
    if (fixedOne) break;
    if (countWholeWord(resolved[i], word) === 0) continue;
    if (!seenFirst) { seenFirst = true; continue; } // always leave the first mention as-is
    next[i] = { ...(next[i] || {}), [word]: synonym };
    fixedOne = true;
  }
  return next;
}

function applyParagraphOverrides(text, paragraphOverride) {
  if (!paragraphOverride) return text;
  let out = text;
  Object.entries(paragraphOverride).forEach(([word, synonym]) => {
    out = replaceAllWholeWord(out, word, synonym);
  });
  return out;
}

// Used only in manual-edit mode, where there's just one free-text blob instead
// of separate paragraphs — keeps the first occurrence, fixes exactly the next one.
function applySingleOccurrenceReplaceInText(text, word, synonym) {
  const re = new RegExp(`\\b${word}\\b`, "gi");
  let seenFirst = false;
  let done = false;
  return text.replace(re, (match) => {
    if (done) return match;
    if (!seenFirst) { seenFirst = true; return match; }
    done = true;
    return match[0] === match[0].toUpperCase() ? cap(synonym) : synonym;
  });
}

// ---- persistence ----
const LS_KEY = "reportCommentBuilder_v1";

function loadState() {
  try {
    const raw = window.localStorage.getItem(LS_KEY);
    if (!raw) return null;
    const parsed = JSON.parse(raw);
    return {
      ...parsed,
      usedOpenings: new Set(parsed.usedOpenings || []),
      usedClosings: new Set(parsed.usedClosings || []),
      usedMiddles: Object.fromEntries(
        Object.entries(parsed.usedMiddles || {}).map(([k, v]) => [k, new Set(v)])
      ),
      saved: parsed.saved || [],
    };
  } catch (e) {
    return null;
  }
}

function saveState(state) {
  try {
    const serializable = {
      ...state,
      usedOpenings: [...state.usedOpenings],
      usedClosings: [...state.usedClosings],
      usedMiddles: Object.fromEntries(
        Object.entries(state.usedMiddles).map(([k, v]) => [k, [...v]])
      ),
    };
    window.localStorage.setItem(LS_KEY, JSON.stringify(serializable));
  } catch (e) {
    // storage unavailable (private browsing, quota, etc.) — fail silently
  }
}

function generateId() {
  return "s_" + Date.now().toString(36) + "_" + Math.random().toString(36).slice(2, 8);
}

function MiniCard({ tag, typeLabel, preview, accent, selected, used, onSelect, onToggleUsed }) {
  return (
    <div
      onClick={onSelect}
      role="button"
      tabIndex={0}
      onKeyDown={(e) => { if (e.key === "Enter" || e.key === " ") onSelect(); }}
      style={{
        position: "relative",
        cursor: "pointer",
        border: selected ? `1.5px solid ${accent}` : "1.5px solid transparent",
        background: selected ? THEME.accentSoft : THEME.cardBgSubtle,
        borderRadius: "9px",
        padding: "9px 10px 8px",
        opacity: used ? 0.5 : 1,
      }}
    >
      <button
        onClick={(e) => { e.stopPropagation(); onToggleUsed(); }}
        aria-label={used ? "Mark as not used" : "Mark as used"}
        title={used ? "Mark as not used" : "Mark as used"}
        style={{
          position: "absolute", top: "7px", right: "7px",
          width: "17px", height: "17px", borderRadius: "50%",
          border: `1.3px solid ${used ? accent : THEME.borderStrong}`,
          background: used ? accent : "transparent",
          display: "flex", alignItems: "center", justifyContent: "center",
          cursor: "pointer", padding: 0, flexShrink: 0,
        }}
      >
        {used && <Check size={10} color="#fff" strokeWidth={3} />}
      </button>
      <div style={{ display: "flex", gap: "6px", alignItems: "center", marginBottom: "3px", paddingRight: "18px" }}>
        {tag && <span style={{ fontSize: "11px", fontWeight: 700, color: THEME.textPrimary }}>{tag}</span>}
        {typeLabel && (
          <span style={{
            fontSize: "9.5px", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.03em",
            color: TYPE_COLORS[typeLabel].text, background: TYPE_COLORS[typeLabel].bg,
            borderRadius: "4px", padding: "1px 5px",
          }}>
            {TYPE_LABEL[typeLabel]}
          </span>
        )}
      </div>
      <div style={{ fontSize: "12.5px", color: THEME.textSecondary, lineHeight: 1.45 }}>
        {preview}
      </div>
    </div>
  );
}

// Compact, always-visible row for a chosen opening / middle / closing.
// No expansion happens inline — clicking "Change" opens the modal instead.
function CommentRow({ index, icon: Icon, label, accent, tag, typeLabel, preview, onChangeClick, onRemove }) {
  return (
    <div
      onClick={onChangeClick}
      role="button"
      tabIndex={0}
      onKeyDown={(e) => { if (e.key === "Enter" || e.key === " ") onChangeClick(); }}
      style={{
        display: "flex", alignItems: "flex-start", gap: "10px",
        padding: "10px 8px", margin: "0 -8px", borderRadius: "8px",
        borderBottom: `1px solid ${THEME.border}`,
        cursor: "pointer",
      }}
    >
      {index && (
        <span style={{ fontSize: "11px", color: THEME.textMuted, fontWeight: 600, paddingTop: "2px", flexShrink: 0, width: "16px" }}>
          {index}
        </span>
      )}
      {Icon && <Icon size={15} color={accent} style={{ flexShrink: 0, marginTop: "2px" }} />}
      <div style={{ minWidth: 0, flex: 1 }}>
        <div style={{ display: "flex", gap: "6px", alignItems: "center", flexWrap: "wrap", marginBottom: "2px" }}>
          {label && (
            <span style={{ fontSize: "10.5px", fontWeight: 700, color: THEME.textMuted, textTransform: "uppercase", letterSpacing: "0.02em" }}>
              {label}
            </span>
          )}
          {tag && <span style={{ fontSize: "12.5px", fontWeight: 700, color: THEME.textPrimary }}>{tag}</span>}
          {typeLabel && (
            <span style={{
              fontSize: "9.5px", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.03em",
              color: TYPE_COLORS[typeLabel].text, background: TYPE_COLORS[typeLabel].bg,
              borderRadius: "4px", padding: "1px 5px",
            }}>
              {TYPE_LABEL[typeLabel]}
            </span>
          )}
        </div>
        <div style={{
          fontSize: "12.5px", color: THEME.textSecondary,
          whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis",
        }}>
          {preview}
        </div>
      </div>
      <div style={{ display: "flex", gap: "10px", flexShrink: 0, alignItems: "center", paddingTop: "1px" }}>
        <span
          style={{
            fontSize: "12.5px", fontWeight: 600, color: THEME.accent, whiteSpace: "nowrap",
          }}
        >
          Change
        </span>
        {onRemove && (
          <button
            onClick={(e) => { e.stopPropagation(); onRemove(); }}
            aria-label="Remove this paragraph"
            title="Remove this paragraph"
            style={{
              display: "flex", alignItems: "center", justifyContent: "center",
              background: "none", border: "none", color: THEME.textMuted, cursor: "pointer", padding: 0,
            }}
          >
            <X size={14} />
          </button>
        )}
      </div>
    </div>
  );
}

function CategoryDropdown({ value, onChange }) {
  const [open, setOpen] = useState(false);
  const Icon = CATEGORY_ICONS[value];
  const accent = CATEGORY_ACCENT[value];
  return (
    <div style={{ position: "relative", marginBottom: "12px" }}>
      <button
        onClick={() => setOpen((o) => !o)}
        style={{
          width: "100%", display: "flex", alignItems: "center", gap: "8px",
          padding: "9px 10px", borderRadius: "8px",
          background: THEME.cardBgSubtle, border: `1px solid ${THEME.borderStrong}`,
          color: THEME.textPrimary, fontSize: "13px", fontWeight: 600, cursor: "pointer",
        }}
      >
        <Icon size={15} color={accent} />
        <span style={{ flex: 1, textAlign: "left" }}>{value}</span>
        <ChevronDown size={14} color={THEME.textMuted} style={{ transform: open ? "rotate(180deg)" : "none" }} />
      </button>
      {open && (
        <div style={{
          position: "absolute", top: "calc(100% + 4px)", left: 0, right: 0, zIndex: 20,
          background: THEME.cardBgAlt, border: `1px solid ${THEME.borderStrong}`, borderRadius: "9px",
          padding: "4px", boxShadow: "0 8px 24px rgba(0,0,0,0.4)",
        }}>
          {CATEGORY_LIST.map((cat) => {
            const CatIcon = CATEGORY_ICONS[cat];
            const active = cat === value;
            return (
              <button
                key={cat}
                onClick={() => { onChange(cat); setOpen(false); }}
                style={{
                  width: "100%", display: "flex", alignItems: "center", gap: "8px",
                  padding: "8px 9px", borderRadius: "6px",
                  background: active ? THEME.accentSoft : "transparent",
                  border: "none", color: THEME.textPrimary, fontSize: "13px", fontWeight: active ? 700 : 500,
                  cursor: "pointer", textAlign: "left",
                }}
              >
                <CatIcon size={14} color={CATEGORY_ACCENT[cat]} />
                {cat}
              </button>
            );
          })}
        </div>
      )}
    </div>
  );
}

// Full-text single-column row, used for the Middle-comment modal since there
// are only ever 5 options per category — no need to truncate.
function FullOptionRow({ tag, typeLabel, text, accent, selected, used, onSelect, onToggleUsed }) {
  return (
    <div
      onClick={onSelect}
      role="button"
      tabIndex={0}
      onKeyDown={(e) => { if (e.key === "Enter" || e.key === " ") onSelect(); }}
      style={{
        cursor: "pointer",
        border: selected ? `1.5px solid ${accent}` : "1.5px solid transparent",
        background: selected ? THEME.accentSoft : THEME.cardBgSubtle,
        borderRadius: "10px",
        padding: "11px 12px",
        marginBottom: "8px",
      }}
    >
      <div style={{ display: "flex", alignItems: "center", gap: "8px", marginBottom: "6px" }}>
        {tag && (
          <span style={{ fontSize: "12.5px", fontWeight: 700, color: accent }}>{tag}</span>
        )}
        {typeLabel && (
          <span style={{
            fontSize: "9.5px", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.03em",
            color: TYPE_COLORS[typeLabel].text, background: TYPE_COLORS[typeLabel].bg,
            borderRadius: "4px", padding: "1px 5px",
          }}>
            {TYPE_LABEL[typeLabel]}
          </span>
        )}
        <button
          onClick={(e) => { e.stopPropagation(); onToggleUsed(); }}
          aria-label={used ? "Mark as not used" : "Mark as used"}
          title={used ? "Mark as not used" : "Mark as used"}
          style={{
            marginLeft: "auto",
            width: "18px", height: "18px", borderRadius: "50%", flexShrink: 0,
            border: `1.3px solid ${used ? accent : THEME.borderStrong}`,
            background: used ? accent : "transparent",
            display: "flex", alignItems: "center", justifyContent: "center",
            cursor: "pointer", padding: 0,
          }}
        >
          {used && <Check size={11} color="#fff" strokeWidth={3} />}
        </button>
      </div>
      <div style={{
        fontSize: "13.5px", lineHeight: 1.55, color: used ? THEME.textMuted : THEME.textPrimary,
      }}>
        {text}
      </div>
    </div>
  );
}

function ChangeModal({
  title, onClose, showCategoryPicker, category, onCategoryChange,
  showFilter, filter, onFilterChange, onSurprise, usedCount, totalCount, options, fullText,
}) {
  return (
    <div
      onClick={onClose}
      style={{
        position: "fixed", inset: 0, background: THEME.overlay, zIndex: 50,
        display: "flex", alignItems: "center", justifyContent: "center", padding: "20px",
      }}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        style={{
          background: THEME.cardBg, borderRadius: "16px", width: "100%", maxWidth: "660px",
          maxHeight: "80vh", display: "flex", flexDirection: "column",
          boxShadow: "0 20px 60px rgba(0,0,0,0.5)",
        }}
      >
        <div style={{
          display: "flex", alignItems: "center", justifyContent: "space-between",
          padding: "16px 18px", borderBottom: `1px solid ${THEME.border}`, flexShrink: 0,
        }}>
          <span style={{ fontSize: "15px", fontWeight: 700, color: THEME.textPrimary }}>{title}</span>
          <button
            onClick={onClose}
            aria-label="Close"
            style={{
              display: "flex", alignItems: "center", justifyContent: "center",
              background: "none", border: "none", color: THEME.textMuted, cursor: "pointer", padding: "4px",
            }}
          >
            <X size={18} />
          </button>
        </div>

        <div style={{ padding: "16px 18px", overflowY: "auto" }}>
          {showCategoryPicker && (
            <CategoryDropdown value={category} onChange={onCategoryChange} />
          )}

          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "12px", flexWrap: "wrap", gap: "8px" }}>
            <div style={{ display: "flex", alignItems: "center", gap: "14px" }}>
              {showFilter ? (
                ["all", "strength", "developing"].map((f) => (
                  <button
                    key={f}
                    onClick={() => onFilterChange(f)}
                    style={{
                      fontSize: "12.5px", fontWeight: filter === f ? 700 : 500,
                      color: filter === f ? THEME.textPrimary : THEME.textMuted,
                      background: "none", border: "none", cursor: "pointer", padding: "0 0 4px",
                      borderBottom: filter === f ? `2px solid ${THEME.accent}` : "2px solid transparent",
                    }}
                  >
                    {f === "all" ? "All" : f === "strength" ? "Strengths" : "Growth"}
                  </button>
                ))
              ) : <span />}
              <button
                onClick={onSurprise}
                style={{
                  display: "flex", alignItems: "center", gap: "5px",
                  fontSize: "12.5px", fontWeight: 600, color: THEME.accent,
                  background: "none", border: "none", cursor: "pointer", padding: 0,
                }}
              >
                <Shuffle size={12} /> Surprise me
              </button>
            </div>
            {totalCount != null && (
              <span style={{ fontSize: "11.5px", color: THEME.textMuted }}>{usedCount}/{totalCount} used</span>
            )}
          </div>

          {fullText ? (
            <div>
              {options.map((opt) => (
                <FullOptionRow
                  key={opt.key}
                  tag={opt.tag}
                  typeLabel={opt.typeLabel}
                  text={opt.preview}
                  accent={opt.accent}
                  selected={opt.selected}
                  used={opt.used}
                  onSelect={opt.onSelect}
                  onToggleUsed={opt.onToggleUsed}
                />
              ))}
            </div>
          ) : (
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(220px, 1fr))", gap: "8px" }}>
              {options.map((opt) => (
                <MiniCard
                  key={opt.key}
                  tag={opt.tag}
                  typeLabel={opt.typeLabel}
                  preview={opt.preview}
                  accent={opt.accent}
                  selected={opt.selected}
                  used={opt.used}
                  onSelect={opt.onSelect}
                  onToggleUsed={opt.onToggleUsed}
                />
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

function DuplicateWordsModal({ duplicates, onApplySynonym, onContinue, onGoBack, continueLabel }) {
  const clear = duplicates.length === 0;
  return (
    <div
      onClick={onGoBack}
      style={{
        position: "fixed", inset: 0, background: THEME.overlay, zIndex: 60,
        display: "flex", alignItems: "center", justifyContent: "center", padding: "20px",
      }}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        style={{
          background: THEME.cardBg, borderRadius: "16px", width: "100%", maxWidth: "480px",
          boxShadow: "0 20px 60px rgba(0,0,0,0.5)",
        }}
      >
        <div style={{ padding: "18px 20px", borderBottom: `1px solid ${THEME.border}` }}>
          <span style={{ fontSize: "15px", fontWeight: 700, color: THEME.textPrimary }}>
            {clear ? "Looks good" : "A few words repeat"}
          </span>
          <p style={{ margin: "4px 0 0", fontSize: "12.5px", color: THEME.textSecondary }}>
            {clear
              ? "No repeated descriptive words left in this report."
              : "These words show up more than once. Pick a synonym to vary the wording, or continue as-is."}
          </p>
        </div>

        <div style={{ padding: "14px 20px", maxHeight: "50vh", overflowY: "auto" }}>
          {duplicates.map(({ word, count }) => (
            <div key={word} style={{ marginBottom: "14px" }}>
              <div style={{ fontSize: "13px", fontWeight: 700, color: THEME.textPrimary, marginBottom: "6px" }}>
                "{word}" <span style={{ fontWeight: 500, color: THEME.textMuted }}>appears {count} times</span>
              </div>
              <div style={{ display: "flex", flexWrap: "wrap", gap: "6px" }}>
                {RISK_WORDS[word].map((syn) => (
                  <button
                    key={syn}
                    onClick={() => onApplySynonym(word, syn)}
                    style={{
                      fontSize: "12px", fontWeight: 600, color: THEME.accent,
                      background: THEME.accentSoft, border: `1px solid ${THEME.accent}55`,
                      borderRadius: "16px", padding: "5px 11px", cursor: "pointer",
                    }}
                  >
                    → {syn}
                  </button>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div style={{ display: "flex", gap: "8px", padding: "14px 20px", borderTop: `1px solid ${THEME.border}` }}>
          <button
            onClick={onGoBack}
            style={{
              flex: 1, padding: "10px", borderRadius: "9px", fontSize: "13px", fontWeight: 600,
              color: THEME.textSecondary, background: THEME.cardBgSubtle, border: `1px solid ${THEME.border}`,
              cursor: "pointer",
            }}
          >
            Go Back
          </button>
          <button
            onClick={onContinue}
            style={{
              flex: 1, padding: "10px", borderRadius: "9px", fontSize: "13px", fontWeight: 700,
              color: THEME.accentText, background: THEME.accent, border: "none", cursor: "pointer",
            }}
          >
            {continueLabel}
          </button>
        </div>
      </div>
    </div>
  );
}

export default function ReportGenerator() {
  const initialRef = useRef(null);
  if (initialRef.current === null) {
    initialRef.current = loadState() || {
      name: "",
      pronounKey: "she/her",
      openingIdx: 0,
      closingIdx: 0,
      selectedMiddles: [
        { category: CATEGORY_LIST[0], idx: 0, filter: "all" },
        { category: CATEGORY_LIST[1], idx: 0, filter: "all" },
        { category: CATEGORY_LIST[2], idx: 0, filter: "all" },
      ],
      usedOpenings: new Set(),
      usedClosings: new Set(),
      usedMiddles: {},
      saved: [],
      editingSavedId: null,
      middleCount: 3,
    };
  }
  const initial = initialRef.current;

  const [name, setName] = useState(initial.name);
  const [pronounKey, setPronounKey] = useState(initial.pronounKey);
  const [openingIdx, setOpeningIdx] = useState(initial.openingIdx);
  const [closingIdx, setClosingIdx] = useState(initial.closingIdx);
  const [selectedMiddles, setSelectedMiddles] = useState(initial.selectedMiddles);
  const [middleCount, setMiddleCount] = useState(initial.middleCount || 3);
  const [copied, setCopied] = useState(false);
  const [activeModal, setActiveModal] = useState(null); // null | {kind:'opening'|'closing'} | {kind:'middle', slotIndex}
  const [overrides, setOverrides] = useState(initial.overrides || {}); // { paragraphIndex: { word: synonym } }
  const [manualEditText, setManualEditText] = useState(initial.manualEditText ?? null); // persisted content once hand-edited
  const [manualEditMode, setManualEditMode] = useState(false); // whether the textarea UI is currently open
  const [pendingAction, setPendingAction] = useState(null); // null | 'save' | 'copy'

  const [usedOpenings, setUsedOpenings] = useState(initial.usedOpenings);
  const [usedClosings, setUsedClosings] = useState(initial.usedClosings);
  const [usedMiddles, setUsedMiddles] = useState(initial.usedMiddles);

  const [saved, setSaved] = useState(initial.saved);
  const [editingSavedId, setEditingSavedId] = useState(initial.editingSavedId);

  const nameInputRef = useRef(null);

  const p = PRONOUNS[pronounKey];
  const hasName = name.trim().length > 0;

  const paragraphs = useMemo(() => {
    const opening = fill(BANK.openings[openingIdx].text, name, p);
    const middles = selectedMiddles
      .filter((m) => m.category)
      .map((m) => fill(BANK.middles[m.category][m.idx].text, name, p));
    const closing = fill(BANK.closings[closingIdx].text, name, p);
    return [opening, ...middles, closing];
  }, [name, pronounKey, openingIdx, closingIdx, selectedMiddles]);

  const finalParagraphs = useMemo(
    () => paragraphs.map((text, i) => applyParagraphOverrides(text, overrides[i])),
    [paragraphs, overrides]
  );
  const finalFullText = finalParagraphs.join("\n\n");
  const hasManualText = manualEditText !== null;
  const displayText = hasManualText ? manualEditText : finalFullText;
  const previewParagraphs = hasManualText
    ? manualEditText.split(/\n\s*\n/).filter(Boolean)
    : finalParagraphs;
  const fullText = displayText; // preview, word count, save & copy all use this

  const closingParagraphIdx = selectedMiddles.length + 1;

  useEffect(() => {
    saveState({
      name, pronounKey, openingIdx, closingIdx, selectedMiddles, middleCount, overrides, manualEditText,
      usedOpenings, usedClosings, usedMiddles, saved, editingSavedId,
    });
  }, [name, pronounKey, openingIdx, closingIdx, selectedMiddles, middleCount, overrides, manualEditText, usedOpenings, usedClosings, usedMiddles, saved, editingSavedId]);

  useEffect(() => {
    if (!activeModal) return;
    function onKey(e) { if (e.key === "Escape") setActiveModal(null); }
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [activeModal]);

  function toggleSet(setter, idx) {
    setter((prev) => {
      const next = new Set(prev);
      if (next.has(idx)) next.delete(idx);
      else next.add(idx);
      return next;
    });
  }

  function toggleUsedMiddle(category, idx) {
    setUsedMiddles((prev) => {
      const currentSet = new Set(prev[category] || []);
      if (currentSet.has(idx)) currentSet.delete(idx);
      else currentSet.add(idx);
      return { ...prev, [category]: currentSet };
    });
  }

  function isMiddleUsed(category, idx) {
    return (usedMiddles[category] || new Set()).has(idx);
  }

  function resetUsed() {
    setUsedOpenings(new Set());
    setUsedClosings(new Set());
    setUsedMiddles({});
  }

  function markCurrentSelectionUsed() {
    setUsedOpenings((prev) => new Set(prev).add(openingIdx));
    setUsedClosings((prev) => new Set(prev).add(closingIdx));
    setUsedMiddles((prev) => {
      const next = { ...prev };
      selectedMiddles.forEach((m) => {
        const s = new Set(next[m.category] || []);
        s.add(m.idx);
        next[m.category] = s;
      });
      return next;
    });
  }

  function buildFullTextFor(entry) {
    if (entry.manualEditText != null) return entry.manualEditText;
    const ep = PRONOUNS[entry.pronounKey];
    const opening = fill(BANK.openings[entry.openingIdx].text, entry.name, ep);
    const middles = entry.selectedMiddles.map((m) => fill(BANK.middles[m.category][m.idx].text, entry.name, ep));
    const closing = fill(BANK.closings[entry.closingIdx].text, entry.name, ep);
    const base = [opening, ...middles, closing];
    const ov = entry.overrides || {};
    return base.map((text, i) => applyParagraphOverrides(text, ov[i])).join("\n\n");
  }

  function performSave() {
    const wasUpdatingExisting = !!editingSavedId;
    const entry = {
      id: editingSavedId || generateId(),
      name: name.trim(),
      pronounKey,
      openingIdx,
      closingIdx,
      selectedMiddles: selectedMiddles.map((m) => ({ ...m })),
      overrides: JSON.parse(JSON.stringify(overrides)),
      manualEditText,
      copied: false,
      savedAt: Date.now(),
    };
    setSaved((prev) => {
      if (editingSavedId) return prev.map((s) => (s.id === editingSavedId ? entry : s));
      return [...prev, entry];
    });
    markCurrentSelectionUsed();
    setEditingSavedId(null);
    if (wasUpdatingExisting) {
      // Just finished editing an existing student — close the textarea (if
      // open) but keep whatever text was saved, and show the full view of it.
      setManualEditMode(false);
      return;
    }
    // A brand-new save — clear the slate and move on to the next student.
    setName("");
    generateWholeReport();
    setTimeout(() => nameInputRef.current && nameInputRef.current.focus(), 50);
  }

  function performCopy() {
    markCurrentSelectionUsed();
    navigator.clipboard.writeText(displayText).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 1500);
    });
  }

  function saveAndNext() {
    if (!hasName) return;
    const dupes = detectDuplicateRiskWords(displayText);
    if (dupes.length > 0) { setPendingAction("save"); return; }
    performSave();
  }

  function copyText() {
    if (!hasName) return;
    const dupes = detectDuplicateRiskWords(displayText);
    if (dupes.length > 0) { setPendingAction("copy"); return; }
    performCopy();
  }

  function applySynonymFix(word, synonym) {
    if (hasManualText) {
      setManualEditText((prev) => applySingleOccurrenceReplaceInText(prev, word, synonym));
    } else {
      setOverrides((prev) => computeSynonymOverride(paragraphs, prev, word, synonym));
    }
  }

  function startManualEdit() {
    if (manualEditText === null) setManualEditText(finalFullText);
    setManualEditMode(true);
  }

  function finishManualEdit() {
    setManualEditMode(false);
  }

  function revertManualEdit() {
    setManualEditText(null);
    setManualEditMode(false);
  }

  function openSaved(id) {
    const entry = saved.find((s) => s.id === id);
    if (!entry) return;
    navigator.clipboard.writeText(buildFullTextFor(entry)).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 1500);
    });
    setName(entry.name);
    setPronounKey(entry.pronounKey);
    setOpeningIdx(entry.openingIdx);
    setClosingIdx(entry.closingIdx);
    setSelectedMiddles(entry.selectedMiddles.map((m) => ({ ...m })));
    setOverrides(entry.overrides ? JSON.parse(JSON.stringify(entry.overrides)) : {});
    setManualEditText(entry.manualEditText ?? null);
    setManualEditMode(false);
    setEditingSavedId(id);
    setSaved((prev) => prev.map((s) => (s.id === id ? { ...s, copied: true } : s)));
  }

  function toggleSavedCopied(id) {
    setSaved((prev) => prev.map((s) => (s.id === id ? { ...s, copied: !s.copied } : s)));
  }

  function removeSaved(id) {
    setSaved((prev) => prev.filter((s) => s.id !== id));
    if (editingSavedId === id) setEditingSavedId(null);
  }

  function cancelEditingSaved() {
    const entry = saved.find((s) => s.id === editingSavedId);
    if (entry) {
      setName(entry.name);
      setPronounKey(entry.pronounKey);
      setOpeningIdx(entry.openingIdx);
      setClosingIdx(entry.closingIdx);
      setSelectedMiddles(entry.selectedMiddles.map((m) => ({ ...m })));
      setOverrides(entry.overrides ? JSON.parse(JSON.stringify(entry.overrides)) : {});
      setManualEditText(entry.manualEditText ?? null);
      setManualEditMode(false);
    }
    setEditingSavedId(null);
  }


  function eraseAllSaved() {
    const ok = window.confirm("Are you sure you want to erase all saved reports? This cannot be undone.");
    if (ok) {
      setSaved([]);
      setEditingSavedId(null);
    }
  }

  function regenerateOpening() {
    setOpeningIdx(pickUnusedIdx(BANK.openings.length, usedOpenings));
    setOverrides((prev) => { const n = { ...prev }; delete n[0]; return n; });
    setManualEditText(null);
    setManualEditMode(false);
  }
  function regenerateClosing() {
    setClosingIdx(pickUnusedIdx(BANK.closings.length, usedClosings));
    setOverrides((prev) => { const n = { ...prev }; delete n[closingParagraphIdx]; return n; });
    setManualEditText(null);
    setManualEditMode(false);
  }
  function regenerateMiddle(i) {
    const cat = selectedMiddles[i].category;
    const usedSet = usedMiddles[cat] || new Set();
    updateMiddleIdx(i, pickUnusedIdx(BANK.middles[cat].length, usedSet));
  }

  function generateWholeReport() {
    setOpeningIdx(pickUnusedIdx(BANK.openings.length, usedOpenings));
    setClosingIdx(pickUnusedIdx(BANK.closings.length, usedClosings));
    const shuffledCats = [...CATEGORY_LIST].sort(() => Math.random() - 0.5).slice(0, middleCount);
    setSelectedMiddles(
      shuffledCats.map((cat) => ({
        category: cat,
        idx: pickUnusedIdx(BANK.middles[cat].length, usedMiddles[cat] || new Set()),
        filter: "all",
      }))
    );
    setOverrides({});
    setManualEditText(null);
    setManualEditMode(false);
  }

  function updateMiddleCategory(i, value) {
    setSelectedMiddles((prev) => {
      const next = [...prev];
      next[i] = { category: value, idx: 0, filter: "all" };
      return next;
    });
    setOverrides((prev) => { const n = { ...prev }; delete n[i + 1]; return n; });
    setManualEditText(null);
    setManualEditMode(false);
  }

  function updateMiddleIdx(i, idx) {
    setSelectedMiddles((prev) => {
      const next = [...prev];
      next[i] = { ...next[i], idx };
      return next;
    });
    setOverrides((prev) => { const n = { ...prev }; delete n[i + 1]; return n; });
    setManualEditText(null);
    setManualEditMode(false);
  }

  function updateMiddleFilter(i, filter) {
    setSelectedMiddles((prev) => {
      const next = [...prev];
      next[i] = { ...next[i], filter };
      return next;
    });
  }

  function addMiddle() {
    if (selectedMiddles.length >= 5) return;
    const usedCats = new Set(selectedMiddles.map((m) => m.category));
    const nextCat = CATEGORY_LIST.find((c) => !usedCats.has(c)) || CATEGORY_LIST[0];
    setSelectedMiddles((prev) => [...prev, { category: nextCat, idx: 0, filter: "all" }]);
    setOverrides({}); // paragraph indices shift once a slot is added; simplest to reset
    setManualEditText(null);
    setManualEditMode(false);
  }

  function removeMiddle(i) {
    setSelectedMiddles((prev) => prev.filter((_, idx) => idx !== i));
    setOverrides({}); // paragraph indices shift once a slot is removed; simplest to reset
    setManualEditText(null);
    setManualEditMode(false);
  }

  const labelStyle = { fontSize: "12px", fontWeight: 700, color: THEME.textSecondary, letterSpacing: "0.01em", textTransform: "uppercase" };
  const inputStyle = {
    width: "100%", padding: "9px 10px", borderRadius: "8px",
    border: `1.5px solid ${THEME.border}`, background: THEME.inputBg,
    fontSize: "14px", color: THEME.textPrimary, fontFamily: "inherit", boxSizing: "border-box",
  };
  const sectionCardStyle = {
    background: THEME.cardBg, border: `1px solid ${THEME.border}`, borderRadius: "14px",
    padding: "14px 16px", marginBottom: "14px",
  };

  // ---- resolve modal content based on what's currently open ----
  let modalProps = null;
  if (activeModal?.kind === "opening") {
    modalProps = {
      title: "Change Opening",
      showCategoryPicker: false,
      showFilter: false,
      onSurprise: regenerateOpening,
      usedCount: usedOpenings.size,
      totalCount: BANK.openings.length,
      fullText: true,
      options: BANK.openings.map((o, i) => ({
        key: i,
        tag: o.tag,
        preview: fill(o.text, name, p),
        accent: NEUTRAL_ACCENT,
        selected: openingIdx === i,
        used: usedOpenings.has(i),
        onSelect: () => { setOpeningIdx(i); setOverrides((prev) => { const n = { ...prev }; delete n[0]; return n; }); setActiveModal(null); },
        onToggleUsed: () => toggleSet(setUsedOpenings, i),
      })),
    };
  } else if (activeModal?.kind === "closing") {
    modalProps = {
      title: "Change Closing",
      showCategoryPicker: false,
      showFilter: false,
      onSurprise: regenerateClosing,
      usedCount: usedClosings.size,
      totalCount: BANK.closings.length,
      fullText: true,
      options: BANK.closings.map((c, i) => ({
        key: i,
        tag: c.tag,
        preview: fill(c.text, name, p),
        accent: NEUTRAL_ACCENT,
        selected: closingIdx === i,
        used: usedClosings.has(i),
        onSelect: () => { setClosingIdx(i); setOverrides((prev) => { const n = { ...prev }; delete n[closingParagraphIdx]; return n; }); setActiveModal(null); },
        onToggleUsed: () => toggleSet(setUsedClosings, i),
      })),
    };
  } else if (activeModal?.kind === "middle") {
    const slotIndex = activeModal.slotIndex;
    const m = selectedMiddles[slotIndex];
    const category = m.category;
    const accent = CATEGORY_ACCENT[category];
    const filteredOptions = BANK.middles[category]
      .map((opt, idx) => ({ ...opt, idx }))
      .filter((opt) => m.filter === "all" || opt.type === m.filter);
    modalProps = {
      title: `Change ${CATEGORY_SHORT_LABEL[category]} Comment`,
      showCategoryPicker: true,
      category,
      onCategoryChange: (cat) => updateMiddleCategory(slotIndex, cat),
      showFilter: true,
      filter: m.filter,
      onFilterChange: (f) => updateMiddleFilter(slotIndex, f),
      onSurprise: () => regenerateMiddle(slotIndex),
      usedCount: (usedMiddles[category] || new Set()).size,
      totalCount: BANK.middles[category].length,
      fullText: true,
      options: filteredOptions.map((opt) => ({
        key: opt.idx,
        typeLabel: opt.type,
        preview: fill(opt.text, name, p),
        accent,
        selected: m.idx === opt.idx,
        used: isMiddleUsed(category, opt.idx),
        onSelect: () => { updateMiddleIdx(slotIndex, opt.idx); setActiveModal(null); },
        onToggleUsed: () => toggleUsedMiddle(category, opt.idx),
      })),
    };
  }

  return (
    <div style={{
      fontFamily: "system-ui, -apple-system, sans-serif",
      background: THEME.pageBg,
      position: "fixed",
      inset: 0,
      overflowY: "auto",
      color: THEME.textPrimary,
      boxSizing: "border-box",
      display: "flex",
      justifyContent: "center",
    }}>
      <div style={{ width: "100%", maxWidth: "1200px", padding: "22px", boxSizing: "border-box" }}>

        <div style={{ position: "relative", textAlign: "center", marginBottom: "16px" }}>
          <h1 style={{
            fontFamily: "'Source Serif 4', Georgia, serif",
            fontSize: "24px", fontWeight: 700, margin: 0, color: THEME.textPrimary,
          }}>
            Report Comment Builder
          </h1>
          <p style={{ margin: "3px 0 0", fontSize: "13px", color: THEME.textSecondary }}>
            Build, refine, and save student reports.
          </p>
          <button
            onClick={resetUsed}
            style={{
              position: "absolute", top: 0, right: 0,
              display: "flex", alignItems: "center", gap: "6px",
              fontSize: "12px", fontWeight: 600, color: THEME.textSecondary,
              background: THEME.cardBg, border: `1px solid ${THEME.border}`, borderRadius: "8px",
              padding: "7px 11px", cursor: "pointer", whiteSpace: "nowrap",
            }}
          >
            <RotateCcw size={12} /> Reset Usage
          </button>
        </div>

        {saved.length > 0 && (
          <div style={{
            position: "sticky", top: 0, zIndex: 10,
            background: THEME.cardBg, border: `1px solid ${THEME.border}`, borderRadius: "10px",
            padding: "10px 12px", marginBottom: "16px",
            display: "flex", alignItems: "center", gap: "8px", flexWrap: "wrap",
          }}>
            <span style={{ fontSize: "11px", fontWeight: 700, color: THEME.textSecondary, textTransform: "uppercase", letterSpacing: "0.02em", flexShrink: 0 }}>
              Saved ({saved.length})
            </span>
            {saved.map((s) => (
              <div
                key={s.id}
                onClick={() => openSaved(s.id)}
                role="button"
                tabIndex={0}
                onKeyDown={(e) => { if (e.key === "Enter" || e.key === " ") openSaved(s.id); }}
                style={{
                  display: "flex", alignItems: "center", gap: "6px",
                  border: `1.5px solid ${editingSavedId === s.id ? THEME.accent : THEME.border}`,
                  background: editingSavedId === s.id ? THEME.accentSoft : THEME.cardBgSubtle,
                  borderRadius: "7px", padding: "5px 6px 5px 10px", cursor: "pointer",
                }}
              >
                <span style={{
                  fontSize: "13px", fontWeight: 600,
                  color: s.copied ? THEME.textMuted : THEME.textPrimary,
                  textDecoration: s.copied ? "line-through" : "none",
                  whiteSpace: "nowrap",
                }}>
                  {s.name}
                </span>
                <button
                  onClick={(e) => { e.stopPropagation(); toggleSavedCopied(s.id); }}
                  title={s.copied ? "Mark as not copied" : "Mark as copied"}
                  style={{
                    width: "16px", height: "16px", borderRadius: "50%", flexShrink: 0,
                    border: `1.2px solid ${s.copied ? THEME.accent : THEME.borderStrong}`,
                    background: s.copied ? THEME.accent : "transparent",
                    display: "flex", alignItems: "center", justifyContent: "center", cursor: "pointer", padding: 0,
                  }}
                >
                  {s.copied && <Check size={9} color="#fff" strokeWidth={3} />}
                </button>
                <button
                  onClick={(e) => { e.stopPropagation(); removeSaved(s.id); }}
                  aria-label={`Remove ${s.name}`}
                  title="Remove"
                  style={{
                    display: "flex", alignItems: "center", justifyContent: "center",
                    width: "19px", height: "19px", borderRadius: "50%", flexShrink: 0,
                    border: "none", background: "transparent", color: THEME.textSecondary, cursor: "pointer",
                  }}
                >
                  <X size={14} strokeWidth={2.5} />
                </button>
              </div>
            ))}
            <button
              onClick={eraseAllSaved}
              style={{
                display: "flex", alignItems: "center", gap: "5px", marginLeft: "auto",
                fontSize: "11.5px", fontWeight: 600, color: THEME.danger,
                background: "none", border: "none", cursor: "pointer", padding: "4px", flexShrink: 0,
              }}
            >
              <Trash2 size={12} /> Erase All
            </button>
          </div>
        )}

        <div style={{ display: "grid", gridTemplateColumns: "minmax(340px, 1.2fr) minmax(280px, 0.8fr)", gap: "18px", alignItems: "start" }}>

          {/* LEFT: builder */}
          <div>
            {/* Name + pronoun */}
            <div style={{ ...sectionCardStyle, display: "flex", gap: "12px" }}>
              <div style={{ flex: 2 }}>
                <label style={labelStyle}>Student name</label>
                <input
                  ref={nameInputRef}
                  style={{ ...inputStyle, marginTop: "6px" }}
                  placeholder="e.g. Hayden"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
              </div>
              <div style={{ flex: 1 }}>
                <label style={labelStyle}>Pronoun</label>
                <div style={{ display: "flex", gap: "6px", marginTop: "6px" }}>
                  {Object.keys(PRONOUNS).map((k) => (
                    <button
                      key={k}
                      onClick={() => setPronounKey(k)}
                      style={{
                        flex: 1, padding: "9px 6px", borderRadius: "8px", fontSize: "13px", fontWeight: 600,
                        border: `1.5px solid ${pronounKey === k ? THEME.accent : THEME.border}`,
                        background: pronounKey === k ? THEME.accent : THEME.inputBg,
                        color: pronounKey === k ? THEME.accentText : THEME.textSecondary,
                        cursor: "pointer",
                      }}
                    >
                      {k}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* Generate + middle count */}
            <div style={{ ...sectionCardStyle, display: "flex", alignItems: "center", justifyContent: "space-between", flexWrap: "wrap", gap: "10px" }}>
              <button
                onClick={generateWholeReport}
                style={{
                  display: "flex", alignItems: "center", gap: "7px",
                  fontSize: "13.5px", fontWeight: 700, color: THEME.accent,
                  background: THEME.accentSoft, border: `1px solid ${THEME.accent}55`, borderRadius: "9px",
                  padding: "9px 14px", cursor: "pointer",
                }}
              >
                <Sparkles size={14} /> Generate Whole Report
              </button>
              <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                <span style={labelStyle}>Middle comments</span>
                <div style={{ display: "flex", gap: "4px" }}>
                  {[2, 3, 4].map((n) => (
                    <button
                      key={n}
                      onClick={() => setMiddleCount(n)}
                      style={{
                        width: "28px", height: "28px", borderRadius: "7px", fontSize: "13px", fontWeight: 700,
                        border: `1.5px solid ${middleCount === n ? THEME.accent : THEME.border}`,
                        background: middleCount === n ? THEME.accent : THEME.cardBgSubtle,
                        color: middleCount === n ? THEME.accentText : THEME.textSecondary,
                        cursor: "pointer",
                      }}
                    >
                      {n}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* Opening */}
            <div style={sectionCardStyle}>
              <CommentRow
                label="Opening"
                tag={BANK.openings[openingIdx].tag}
                preview={previewText(fill(BANK.openings[openingIdx].text, name, p), 90)}
                onChangeClick={() => setActiveModal({ kind: "opening" })}
              />
            </div>

            {/* Middles */}
            <div style={sectionCardStyle}>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", marginBottom: "4px" }}>
                <label style={labelStyle}>Middle paragraphs</label>
                {selectedMiddles.length < 5 && (
                  <button
                    onClick={addMiddle}
                    style={{
                      display: "flex", alignItems: "center", gap: "4px",
                      fontSize: "12px", color: THEME.accent, background: "none", border: "none",
                      cursor: "pointer", fontWeight: 700, padding: 0,
                    }}
                  >
                    <Plus size={13} /> Add another
                  </button>
                )}
              </div>
              {selectedMiddles.map((m, i) => {
                const item = BANK.middles[m.category][m.idx];
                return (
                  <CommentRow
                    key={i}
                    index={String(i + 1).padStart(2, "0")}
                    icon={CATEGORY_ICONS[m.category]}
                    accent={CATEGORY_ACCENT[m.category]}
                    label={CATEGORY_SHORT_LABEL[m.category]}
                    typeLabel={item.type}
                    preview={previewText(fill(item.text, name, p), 90)}
                    onChangeClick={() => setActiveModal({ kind: "middle", slotIndex: i })}
                    onRemove={selectedMiddles.length > 1 ? () => removeMiddle(i) : null}
                  />
                );
              })}
            </div>

            {/* Closing */}
            <div style={sectionCardStyle}>
              <CommentRow
                label="Closing"
                tag={BANK.closings[closingIdx].tag}
                preview={previewText(fill(BANK.closings[closingIdx].text, name, p), 90)}
                onChangeClick={() => setActiveModal({ kind: "closing" })}
              />
            </div>
          </div>

          {/* RIGHT: preview + saved list */}
          <div>
            <div style={{
              position: "sticky", top: "16px",
              background: THEME.cardBg, border: `1px solid ${THEME.border}`, borderRadius: "14px",
              padding: "22px 24px", marginBottom: "16px",
            }}>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "12px", flexWrap: "wrap", gap: "6px" }}>
                <span style={{ fontSize: "12px", color: THEME.textMuted, fontWeight: 600 }}>
                  {wordCount(displayText)} words
                  {!hasManualText && ` · ${paragraphs.length} paragraphs`}
                </span>
                {!hasManualText && (
                  <span style={{ fontSize: "11px", fontWeight: 700, display: "flex", gap: "8px" }}>
                    <span style={{ color: TYPE_COLORS.strength.text }}>
                      {pluralize(selectedMiddles.filter((m) => BANK.middles[m.category][m.idx].type === "strength").length, "strength", "strengths")}
                    </span>
                    <span style={{ color: TYPE_COLORS.developing.text }}>
                      {pluralize(selectedMiddles.filter((m) => BANK.middles[m.category][m.idx].type === "developing").length, "growth area", "growth areas")}
                    </span>
                  </span>
                )}
              </div>

              {editingSavedId && (
                <div style={{
                  display: "flex", justifyContent: "space-between", alignItems: "center",
                  background: THEME.accentSoft, border: `1px solid ${THEME.accent}55`, borderRadius: "9px",
                  padding: "8px 12px", marginBottom: "12px", fontSize: "12.5px", color: THEME.textPrimary, fontWeight: 600,
                }}>
                  <span>Editing saved report — changes update this student when you save.</span>
                  <button
                    onClick={cancelEditingSaved}
                    style={{ background: "none", border: "none", color: THEME.accent, fontWeight: 700, cursor: "pointer", textDecoration: "underline", flexShrink: 0, marginLeft: "8px" }}
                  >
                    Cancel
                  </button>
                </div>
              )}

              {!hasName && (
                <div style={{
                  background: "rgba(224, 168, 60, 0.12)", border: `1px solid ${THEME.warn}66`, borderRadius: "9px",
                  padding: "9px 12px", marginBottom: "14px", fontSize: "12.5px", color: THEME.warn, fontWeight: 600,
                }}>
                  Enter a student's name to enable saving and copying.
                </div>
              )}

              {manualEditMode ? (
                <div style={{ marginBottom: "10px" }}>
                  <div style={{
                    display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "6px", gap: "8px",
                  }}>
                    <span style={{ fontSize: "11.5px", color: THEME.textMuted }}>
                      Editing by hand — changing any comment below will discard this and return to the generated text.
                    </span>
                    <div style={{ display: "flex", gap: "10px", flexShrink: 0 }}>
                      <button
                        onClick={revertManualEdit}
                        style={{
                          fontSize: "12px", fontWeight: 700, color: THEME.danger,
                          background: "none", border: "none", cursor: "pointer", padding: 0, whiteSpace: "nowrap",
                        }}
                      >
                        Revert to generated
                      </button>
                      <button
                        onClick={finishManualEdit}
                        style={{
                          fontSize: "12px", fontWeight: 700, color: THEME.accent,
                          background: "none", border: "none", cursor: "pointer", padding: 0, whiteSpace: "nowrap",
                        }}
                      >
                        Done editing
                      </button>
                    </div>
                  </div>
                  <textarea
                    value={manualEditText}
                    onChange={(e) => setManualEditText(e.target.value)}
                    style={{
                      width: "100%", minHeight: "220px", resize: "vertical",
                      fontFamily: "'Source Serif 4', Georgia, serif", fontSize: "15.5px", lineHeight: 1.7,
                      color: THEME.textPrimary, background: THEME.inputBg,
                      border: `1.5px solid ${THEME.accent}`, borderRadius: "9px", padding: "12px",
                      boxSizing: "border-box",
                    }}
                  />
                </div>
              ) : (
                <div style={{
                  fontFamily: "'Source Serif 4', Georgia, serif",
                  fontSize: "15.5px", lineHeight: 1.7, color: THEME.textPrimary,
                  marginBottom: "10px",
                }}>
                  {previewParagraphs.map((para, i) => (
                    <p key={i} style={{ margin: "0 0 13px" }}>{para}</p>
                  ))}
                </div>
              )}

              {!manualEditMode && (
                <button
                  onClick={startManualEdit}
                  style={{
                    fontSize: "12px", fontWeight: 600, color: THEME.textSecondary,
                    background: "none", border: "none", cursor: "pointer", padding: 0,
                    marginBottom: "14px", textDecoration: "underline",
                  }}
                >
                  {hasManualText ? "Continue editing by hand" : "Edit this text by hand"}
                </button>
              )}

              <button
                onClick={saveAndNext}
                disabled={!hasName}
                style={{
                  width: "100%", display: "flex", alignItems: "center", justifyContent: "center", gap: "7px",
                  fontSize: "14px", fontWeight: 700,
                  color: THEME.accentText,
                  background: !hasName ? THEME.border : THEME.accent,
                  border: "none", borderRadius: "10px",
                  padding: "11px", cursor: hasName ? "pointer" : "not-allowed",
                  marginBottom: "8px",
                }}
              >
                <Save size={15} />
                {editingSavedId ? "Update Saved Report" : "Save & Next Student →"}
              </button>
              <button
                onClick={copyText}
                disabled={!hasName}
                style={{
                  width: "100%", display: "flex", alignItems: "center", justifyContent: "center", gap: "7px",
                  fontSize: "13px", fontWeight: 600,
                  color: !hasName ? THEME.textMuted : THEME.textSecondary,
                  background: THEME.cardBgSubtle,
                  border: `1px solid ${!hasName ? THEME.border : THEME.borderStrong}`, borderRadius: "10px",
                  padding: "9px", cursor: hasName ? "pointer" : "not-allowed",
                }}
              >
                {copied ? <Check size={13} /> : <Copy size={13} />}
                {copied ? "Copied" : "Just Copy (Don't Save)"}
              </button>
            </div>
          </div>
        </div>
      </div>

      {activeModal && modalProps && (
        <ChangeModal {...modalProps} onClose={() => setActiveModal(null)} />
      )}

      {pendingAction && (
        <DuplicateWordsModal
          duplicates={detectDuplicateRiskWords(displayText)}
          onApplySynonym={applySynonymFix}
          onGoBack={() => setPendingAction(null)}
          continueLabel={pendingAction === "save" ? "Save & Next Student →" : "Copy Report"}
          onContinue={() => {
            if (pendingAction === "save") performSave();
            else performCopy();
            setPendingAction(null);
          }}
        />
      )}
    </div>
  );
}
