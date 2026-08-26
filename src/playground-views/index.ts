import React from 'react';
import * as Visibility from './visibility';
import * as Timers from './timers';
import * as Forms from './forms';
import * as DataProcessing from './data-processing';
import * as ScrollDom from './scroll-dom';
import * as AsyncFeedback from './async-feedback';
import * as Storage from './storage';
import * as Advanced from './advanced';

export const PLAYGROUND_REGISTRY: Record<string, React.ComponentType> = {
  // Visibility
  'modal-dialog': Visibility.ModalView,
  'tab-switch': Visibility.TabSwitchView,
  'accordion-mechanics': Visibility.AccordionView,
  'dropdown-popover': Visibility.DropdownView,
  'sidebar-drawer': Visibility.SidebarDrawerView,
  'tooltip-positioning': Visibility.TooltipView,
  'keyboard-nav-esc': Visibility.KeyboardNavEscView,

  // Timers
  'otp-resend-timer': Timers.OtpTimerView,
  'countdown-clock': Timers.CountdownClockView,
  'auto-play-carousel': Timers.AutoCarouselView,
  'inactivity-warning': Timers.InactivityWarningView,
  'stopwatch-laps': Timers.StopwatchView,

  // Forms
  'reactive-form-validation': Forms.ReactiveValidationView,
  'multi-step-form': Forms.MultiStepFormView,
  'dynamic-array-fields': Forms.DynamicFieldsView,
  'password-strength-meter': Forms.PasswordStrengthView,
  'unsaved-changes-warning': Forms.UnsavedChangesView,

  // Data Processing
  'live-search-filter': DataProcessing.LiveSearchFilterView,
  'multi-column-sorting': DataProcessing.MultiColumnSortingView,
  'table-pagination': DataProcessing.PaginationView,
  'bulk-selection': DataProcessing.BulkSelectionView,
  'keyword-highlighting': DataProcessing.KeywordHighlightView,

  // Scroll & DOM
  'reading-progress-bar': ScrollDom.ScrollProgressView,
  'scroll-to-top-button': ScrollDom.ScrollToTopStickyView,
  'scroll-spy-navigation': ScrollDom.ScrollSpyView,
  'infinite-scroll-feed': ScrollDom.InfiniteScrollView,

  // Async & UI Feedback
  'api-state-management': AsyncFeedback.ApiStateManagementView,
  'debounced-search-input': AsyncFeedback.DebouncedSearchView,
  'optimistic-ui-updates': AsyncFeedback.OptimisticUIView,
  'copy-to-clipboard': AsyncFeedback.CopyClipboardView,
  'polling-engine': AsyncFeedback.PollingEngineView,

  // Storage & State Persistence
  'shopping-cart-persistence': Storage.ShoppingCartView,
  'theme-switcher': Storage.ThemeSwitcherView,
  'cross-tab-sync': Storage.CrossTabSyncView,
  'recent-search-history': Storage.RecentSearchesView,

  // Advanced Interactivity
  'drag-drop-reorder': Advanced.DragDropReorderView,
  'image-magnifier': Advanced.ImageMagnifierView,
  'double-range-slider': Advanced.DoubleRangeSliderView,
  'custom-audio-video': Advanced.CustomAudioVideoView,
};
