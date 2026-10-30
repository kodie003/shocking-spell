# Padi — Product Requirements Document

**Version:** 1.0
**Date:** June 2026
**Author:** Andrew Quarcoo
**Status:** Draft

---

## 1. Executive Summary

**Padi** is a mobile learning application built for Ghanaian Basic School students preparing for the Basic Education Certificate Examination (BECE). The name "padi" is a Ghanaian slang word for "friend" or "companion" — reflecting the app's goal to be a trusted study partner for students across Ghana.

The app leverages AI (Google Gemini), gamification, and structured past-question practice to help JHS 1–3 students learn effectively, independently, and engagingly.

---

## 2. Problem Statement

Ghanaian BECE students face a number of challenges in preparation:

- Lack of access to quality explanations for curriculum topics
- Limited availability of past examination questions in one place
- Distractions from smartphones during study time
- No consistent, structured study routine
- Poor retention due to passive reading without active practice

Padi directly addresses each of these with its core feature set.

---

## 3. Target Users

| User Segment | Description |
|---|---|
| Primary | JHS 1, 2, and 3 students in Ghana (ages 12–17) |
| Secondary | Teachers and parents monitoring student progress |

**Key user characteristics:**
- Smartphone-first (Android dominant, iOS secondary)
- Variable internet connectivity (offline-capable design preferred)
- Limited data budgets → aggressive content caching strategy
- Familiar with Ghanaian cultural references

---

## 4. Goals & Success Metrics

| Goal | Metric | Target |
|---|---|---|
| Engagement | DAU / MAU ratio | > 40% |
| Learning | Avg. session duration | > 20 minutes |
| Retention | 7-day retention rate | > 45% |
| Study focus | % sessions completed without early exit | > 70% |
| Content quality | Gemini content rating (thumbs up/down) | > 85% positive |

---

## 5. Feature Requirements

### 5.1 Splash Screen
- Animated Padi logo with brand colours
- Auto-navigates to Onboarding (first launch) or Dashboard (returning users)
- Reads `onboarding_done` and `user_uid` from SharedPreferences to determine destination

### 5.2 Onboarding
- 3-page illustrated carousel using `smooth_page_indicator`
- Pages cover: Learn, Practice, Challenges
- Skip button on all pages
- Stores `onboarding_done = true` in SharedPreferences on completion
- Proceeds to Registration

### 5.3 Registration & Authentication
- Fields: Full Name, Email, Phone Number, Password
- Firebase Authentication (email/password)
- User profile saved to Firestore (`users/{uid}`)
- Sign-in sheet for returning users (modal bottom sheet)
- Post-registration → School Selection

### 5.4 School Selection
- Search box with real-time filtering
- Curated list of popular Ghanaian schools (seeded from Firestore)
- Class selection: JHS 1 / JHS 2 / JHS 3
- Profile updated in Firestore with `school` and `classLevel`
- Stores `user_uid` in SharedPreferences → proceeds to Dashboard

### 5.5 Dashboard (Home)
- Personalised greeting (morning/afternoon/evening)
- Daily Challenge banner (prominent CTA)
- Quick-action cards: Learn, Past Questions
- Subject grid (all BECE subjects, colour-coded)
- Notification bell icon
- Bottom navigation: Home | Learn | Past Q's | Profile

### 5.6 Daily Challenge
- 10 trivia questions per day from OpenTrivia DB API (`https://opentdb.com/api.php`)
- Multiple choice format
- Category + difficulty badge per question
- Immediate answer feedback with colour coding (green = correct, red = wrong)
- Score + motivational message on completion
- "Play Again" option loads a fresh set

**API endpoint:**
```
GET https://opentdb.com/api.php?amount=10&type=multiple&difficulty=medium
```

### 5.7 Learn
**Flow:** Subject selection → Topic → Subtopic → Duration picker → Study Session

**Class selector** at the top filters content for JHS 1, 2, or 3.

**Content generation:**
1. User selects a subtopic
2. Selects study duration (15 / 20 / 30 / 45 / 60 / 90 min)
3. App checks Firestore for cached content using key:
   `{classLevel}_{subject}_{topic}_{subtopic}` (lowercased, spaces → underscores)
4. If cache hit → display immediately
5. If cache miss → send curriculum data to Gemini (`gemini-2.0-flash`), store result in Firestore, then display
6. Content rendered in a scrollable screen with:
   - Explanation (3–5 paragraphs, Ghanaian examples)
   - Key points list
   - 3 practice MCQ questions with explanation

**Focus mode (Learn):**
- WakeLock enabled for the session duration
- Inactivity detection — if no touch/scroll for 90 seconds, show in-app dialog and local notification
- Countdown timer displayed in AppBar
- Timer goes red when < 5 minutes remain

### 5.8 Past Questions
**Flow:** Subject → Year → Type (MCQ/Essay) → Start Practice

**Question types:**

| Type | Duration | Timer Behaviour |
|---|---|---|
| MCQ (Objective) | 60 minutes | Countdown from 60:00, auto-submits at 0 |
| Essay (Subjective) | 120 minutes | Countdown from 2:00:00, auto-submits at 0 |

**Session features:**
- Full-screen focus mode (immersive sticky UI, wakelock)
- MCQ: one question at a time with Previous/Next navigation
- Essay: all questions on one scrollable page with text inputs
- Progress bar across the top
- Submit button in AppBar
- Inactivity dialog + notification at 90s idle
- App-background → local notification fires immediately
- Result screen: score, percentage, motivational message (MCQ); model answer hints (Essay)

**Data model:** Past questions stored in Firestore `past_questions` collection. Each document is a `PastQuestionPaper`.

### 5.9 Study Session (Focus Mode)
- Engaged whenever a timed session starts (Learn or Past Questions)
- `SystemChrome.setEnabledSystemUIMode(SystemUiMode.immersiveSticky)` — hides status and navigation bars
- `WakelockPlus.enable()` — prevents screen sleep
- Focus banner at top of every session screen with timer and close (exit) button
- Exit requires confirmation dialog (prevents accidental exits)
- `WidgetsBindingObserver` detects app backgrounding and fires inactivity notification

### 5.10 Activity Tracking
- `ActivityTracker` widget wraps all content screens
- Listens to `PointerDown`, `PointerMove`, `PointerUp` events
- Resets inactivity timer on any interaction
- `InteractionLogger` buffers events (taps, scrolls, screen views) in memory
- Flushes to Firestore `users/{uid}/activity_logs` every 30 seconds (batched)

### 5.11 Profile
- Sign out button
- Future: display stats, streak, points, school, class

---

## 6. Content Strategy

### Curriculum Data (Learn)
The in-app curriculum JSON (to be provided by the product owner) is organised as:

```json
{
  "classLevel": "JHS 2",
  "subject": "Mathematics",
  "topics": [
    {
      "name": "Numbers & Numeration",
      "subtopics": [
        "Place Value",
        "Rounding Numbers",
        "Number Sequences"
      ]
    }
  ]
}
```

This data is loaded as a local asset (`assets/data/curriculum.json`) and used as context when prompting Gemini.

### Past Questions
Past questions are seeded into Firestore by the admin. Each `PastQuestionPaper` document contains:
- `subject`, `year`, `type` (mcq/essay), `durationMinutes`
- `questions[]` array — each with `number`, `question`, `options[]`, `correctOptionIndex`, `modelAnswer`

---

## 7. Technical Architecture

See `ARCHITECTURE.md` for full details.

**Stack summary:**
- Framework: Flutter 3.41 (Dart 3.11)
- Backend: Firebase (Auth, Firestore, Storage)
- AI: Firebase AI SDK (`firebase_ai`) → Gemini 2.0 Flash
- Navigation: go_router 17
- State: Riverpod 3
- Trivia API: OpenTrivia DB (no key required)
- Notifications: flutter_local_notifications 22

---

## 8. Non-Functional Requirements

| Category | Requirement |
|---|---|
| Performance | First content render < 3s on average Ghanaian 3G |
| Caching | Gemini-generated content never re-fetched for the same topic |
| Offline | Cached learn content available offline via Firestore's offline persistence |
| Security | Firebase security rules restrict user data to authenticated owners |
| Accessibility | Minimum 4.5:1 contrast ratio; minimum 44×44px touch targets |
| Screen lock | No physical screen lock during active study sessions |

---

## 9. Out of Scope (v1.0)

- Teacher / parent portal
- Push notifications via FCM (only local notifications in v1)
- In-app purchases or subscription gating
- Social features (leaderboards, peer challenges)
- Video content
- Offline-first curriculum browsing (Gemini requires network)

---

## 10. Open Questions

1. Will the school list be user-submitted or admin-curated?
2. Should past questions be uploaded via an admin CMS or directly in Firestore?
3. Is content in English only, or should Ghanaian Languages be supported natively?
4. What is the monetisation model — freemium, ads, or fully free?
5. Should the Gemini API key be protected via a Cloud Function proxy?

---

## 11. Appendix — Screen Map

```
SplashScreen
└── OnboardingScreen (3 pages)
    └── RegistrationScreen
        └── SchoolSelectionScreen
            └── DashboardScreen
                ├── HomeTab
                │   ├── DailyChallengeScreen
                │   ├── LearnScreen → TopicScreen → SubtopicScreen → LearnContentScreen
                │   └── PastQuestionsScreen → QuestionSessionScreen
                ├── LearnScreen
                ├── PastQuestionsScreen
                └── ProfileTab
```
