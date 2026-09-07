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
  'otp-timer': Timers.OtpTimerView,
  'otp-resend-timer': Timers.OtpTimerView,
  'countdown-clock': Timers.CountdownClockView,
  'auto-carousel': Timers.AutoCarouselView,
  'auto-play-carousel': Timers.AutoCarouselView,
  'inactivity-warning': Timers.InactivityWarningView,
  'stopwatch-engine': Timers.StopwatchView,
  'stopwatch-laps': Timers.StopwatchView,

  // Forms
  'reactive-validation': Forms.ReactiveValidationView,
  'reactive-form-validation': Forms.ReactiveValidationView,
  'multistep-form': Forms.MultiStepFormView,
  'multi-step-form': Forms.MultiStepFormView,
  'dynamic-fields': Forms.DynamicFieldsView,
  'dynamic-array-fields': Forms.DynamicFieldsView,
  'password-strength': Forms.PasswordStrengthView,
  'password-strength-meter': Forms.PasswordStrengthView,
  'unsaved-changes': Forms.UnsavedChangesView,
  'unsaved-changes-warning': Forms.UnsavedChangesView,

  // Data Processing
  'live-search-filter': DataProcessing.LiveSearchFilterView,
  'multicolumn-sorting': DataProcessing.MultiColumnSortingView,
  'multi-column-sorting': DataProcessing.MultiColumnSortingView,
  'pagination-logic': DataProcessing.PaginationView,
  'table-pagination': DataProcessing.PaginationView,
  'bulk-selection': DataProcessing.BulkSelectionView,
  'keyword-highlighting': DataProcessing.KeywordHighlightView,

  // Scroll & DOM
  'scroll-progress': ScrollDom.ScrollProgressView,
  'reading-progress-bar': ScrollDom.ScrollProgressView,
  'scroll-to-top-sticky': ScrollDom.ScrollToTopStickyView,
  'scroll-to-top-button': ScrollDom.ScrollToTopStickyView,
  'scroll-spy': ScrollDom.ScrollSpyView,
  'scroll-spy-navigation': ScrollDom.ScrollSpyView,
  'infinite-scroll': ScrollDom.InfiniteScrollView,
  'infinite-scroll-feed': ScrollDom.InfiniteScrollView,

  // Async & UI Feedback
  'api-state-management': AsyncFeedback.ApiStateManagementView,
  'debounced-search': AsyncFeedback.DebouncedSearchView,
  'debounced-search-input': AsyncFeedback.DebouncedSearchView,
  'optimistic-ui': AsyncFeedback.OptimisticUIView,
  'optimistic-ui-updates': AsyncFeedback.OptimisticUIView,
  'copy-clipboard': AsyncFeedback.CopyClipboardView,
  'copy-to-clipboard': AsyncFeedback.CopyClipboardView,
  'polling-engine': AsyncFeedback.PollingEngineView,

  // Storage & State Persistence
  'shopping-cart': Storage.ShoppingCartView,
  'shopping-cart-persistence': Storage.ShoppingCartView,
  'theme-switcher': Storage.ThemeSwitcherView,
  'crosstab-sync': Storage.CrossTabSyncView,
  'cross-tab-sync': Storage.CrossTabSyncView,
  'recent-searches': Storage.RecentSearchesView,
  'recent-search-history': Storage.RecentSearchesView,

  // Advanced Interactivity
  'drag-drop-reorder': Advanced.DragDropReorderView,
  'image-magnifier': Advanced.ImageMagnifierView,
  'double-range-slider': Advanced.DoubleRangeSliderView,
  'custom-media-player': Advanced.CustomAudioVideoView,
  'custom-audio-video': Advanced.CustomAudioVideoView,
};
