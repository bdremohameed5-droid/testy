import test from 'node:test';
import assert from 'node:assert/strict';
import {
  TOUR_CHAPTERS,
  HIDDEN_COINS,
  TOTAL_COINS,
  createInitialTourState,
  getGreetingByHour,
  startGuidedTour,
  dismissTourToExplore,
  advanceTourStep,
  goToChapter,
  prevTourChapter,
  collectCoin,
  getNextUncollectedCoin,
  formatChapterCounter,
  setCharacterAppearance
} from './tourLogic';

test('tour defines 12 chapters and 8 hidden coins', () => {
  assert.equal(TOUR_CHAPTERS.length, 12);
  assert.equal(HIDDEN_COINS.length, 8);
  assert.equal(TOTAL_COINS, 8);
});

test('initial state boots into welcome or touring when autostart=true', () => {
  const welcomeState = createInitialTourState('ar', false);
  assert.equal(welcomeState.mode, 'welcome');
  assert.equal(welcomeState.chapterIndex, 0);

  const autoState = createInitialTourState('en', true);
  assert.equal(autoState.mode, 'touring');
  assert.deepEqual(autoState.visitedChapters, [0]);
});

test('time-of-day greeting returns localized greeting', () => {
  assert.equal(getGreetingByHour(9, 'en'), 'Good morning!');
  assert.equal(getGreetingByHour(14, 'en'), 'Good afternoon!');
  assert.equal(getGreetingByHour(20, 'en'), 'Good evening!');
  assert.equal(getGreetingByHour(9, 'ar'), 'صباح الخير!');
  assert.equal(getGreetingByHour(21, 'ar'), 'مساء الخير!');
});

test('tour step progression advances through lines and chapters up to completion', () => {
  let state = startGuidedTour(createInitialTourState('en', false));
  assert.equal(state.mode, 'touring');
  assert.equal(state.chapterIndex, 0);
  assert.equal(state.lineIndex, 0);

  state = advanceTourStep(state);
  assert.equal(state.chapterIndex, 0);
  assert.equal(state.lineIndex, 1);

  state = advanceTourStep(state);
  assert.equal(state.chapterIndex, 1);
  assert.equal(state.lineIndex, 0);
  assert.equal(formatChapterCounter(state.chapterIndex), '02/12');

  state = prevTourChapter(state);
  assert.equal(state.chapterIndex, 0);
  assert.equal(state.lineIndex, 0);

  state = goToChapter(state, 11);
  assert.equal(state.chapterIndex, 11);
  assert.equal(formatChapterCounter(state.chapterIndex), '12/12');

  state = goToChapter(state, 12);
  assert.equal(state.mode, 'completed');
});

test('dismissTourToExplore transitions to minimized companion mode', () => {
  const state = dismissTourToExplore(createInitialTourState('ar', false));
  assert.equal(state.mode, 'minimized');
});

test('coin collection tracks unique coins up to 8/8 side quest completion', () => {
  let state = createInitialTourState('en', false);

  const first = collectCoin(state, 'coin-1');
  assert.equal(first.newlyCollected, true);
  assert.equal(first.allCollected, false);
  assert.equal(first.state.collectedCoins.length, 1);
  state = first.state;

  const dup = collectCoin(state, 'coin-1');
  assert.equal(dup.newlyCollected, false);
  assert.equal(dup.state.collectedCoins.length, 1);

  for (let i = 2; i <= 8; i++) {
    const res = collectCoin(state, `coin-${i}`);
    state = res.state;
    if (i === 8) {
      assert.equal(res.allCollected, true);
    }
  }
  assert.equal(state.collectedCoins.length, 8);
  assert.equal(getNextUncollectedCoin(state), null);
});

test('character customization updates preset and custom sprite URL', () => {
  let state = createInitialTourState('ar', false);
  state = setCharacterAppearance(state, 'blender-hoodie', 'https://example.com/my-pixel-badr.png');
  assert.equal(state.characterPreset, 'blender-hoodie');
  assert.equal(state.customCharacterUrl, 'https://example.com/my-pixel-badr.png');
});
