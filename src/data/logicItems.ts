export interface LogicItem {
  id: string;
  title: string;
  category: string;
  categorySlug: string;
  description: string;
  codeSnippet: string;
}

export interface Category {
  slug: string;
  title: string;
  description: string;
  itemCount: number;
}

export const CATEGORIES: Category[] = [
  {
    slug: 'visibility',
    title: 'UI Visibility, Navigation & Dialog Mechanics',
    description: 'Modals, tabs, accordions, popovers, off-canvas drawers & positioning logic.',
    itemCount: 6,
  },
  {
    slug: 'timers',
    title: 'Timers, Async & Scheduling Logic',
    description: 'Countdown clocks, OTP resend cooldowns, carousels, inactivity triggers & stopwatches.',
    itemCount: 5,
  },
  {
    slug: 'forms',
    title: 'Forms, Dynamic Inputs & Validation',
    description: 'Reactive form validation, multi-step wizards, dynamic array fields & strength meters.',
    itemCount: 5,
  },
  {
    slug: 'data-processing',
    title: 'Data Processing, Sorting & Filter Logic',
    description: 'Live client-side search, multi-column table sorting, pagination & bulk selections.',
    itemCount: 5,
  },
  {
    slug: 'scroll-dom',
    title: 'Scroll Mechanics & DOM Observation',
    description: 'Reading progress indicators, scroll-to-top sticky headers & scroll-spy navigation.',
    itemCount: 4,
  },
  {
    slug: 'async-feedback',
    title: 'Async Operations & UI Feedbacks',
    description: 'API state engines, debounced search triggers, optimistic updates & polling feeds.',
    itemCount: 5,
  },
  {
    slug: 'storage',
    title: 'Local Storage & Inter-Tab State Persistence',
    description: 'Shopping cart persistence, theme toggling & cross-tab sync state visualizers.',
    itemCount: 4,
  },
  {
    slug: 'advanced',
    title: 'Advanced Interactivity & Drag Mechanics',
    description: 'Reorderable drag-and-drop lists, image magnifiers, dual range sliders & custom media players.',
    itemCount: 4,
  },
];

export const LOGIC_ITEMS: LogicItem[] = [
  // Category 1: Visibility
  {
    id: 'modal-dialog',
    title: 'Modal / Dialog Engine',
    category: 'UI Visibility, Navigation & Dialog Mechanics',
    categorySlug: 'visibility',
    description: 'Trigger button, Backdrop overlay (bg-black/50), Dialog container with header, body, and close "✕" icon.',
    codeSnippet: `// Modal / Dialog Engine Implementation
import { useState, useEffect } from 'react';

export function useModal(initialState = false) {
  const [isOpen, setIsOpen] = useState(initialState);
  
  const openModal = () => setIsOpen(true);
  const closeModal = () => setIsOpen(false);
  const toggleModal = () => setIsOpen((prev) => !prev);

  // Close on Escape keypress
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') closeModal();
    };
    if (isOpen) {
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen]);

  return { isOpen, openModal, closeModal, toggleModal };
}`
  },
  {
    id: 'tab-switch',
    title: 'Tab Switching System',
    category: 'UI Visibility, Navigation & Dialog Mechanics',
    categorySlug: 'visibility',
    description: 'Horizontal tab bar (Tab 1, Tab 2, Tab 3) with active underline/border and sample tab content panels.',
    codeSnippet: `// Tab Switching System
import { useState } from 'react';

export function useTabs(defaultTabId) {
  const [activeTab, setActiveTab] = useState(defaultTabId);

  const getTabProps = (tabId) => ({
    onClick: () => setActiveTab(tabId),
    'aria-selected': activeTab === tabId,
    role: 'tab',
  });

  return { activeTab, setActiveTab, getTabProps };
}`
  },
  {
    id: 'accordion-mechanics',
    title: 'Accordion Mechanics (Single & Multi-Open)',
    category: 'UI Visibility, Navigation & Dialog Mechanics',
    categorySlug: 'visibility',
    description: '3 vertically stacked accordion items with title headers, chevron indicators, and content containers.',
    codeSnippet: `// Accordion State Handler
import { useState } from 'react';

export function useAccordion(allowMultiple = false) {
  const [openSections, setOpenSections] = useState([]);

  const toggleSection = (id) => {
    setOpenSections((prev) => {
      if (allowMultiple) {
        return prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id];
      }
      return prev.includes(id) ? [] : [id];
    });
  };

  const isExpanded = (id) => openSections.includes(id);

  return { openSections, toggleSection, isExpanded };
}`
  },
  {
    id: 'dropdown-popover',
    title: 'Dropdown & Popover Auto-Close',
    category: 'UI Visibility, Navigation & Dialog Mechanics',
    categorySlug: 'visibility',
    description: 'Menu trigger button with a floating absolute-positioned list menu with sample menu links.',
    codeSnippet: `// Dropdown Click-Outside Handler Hook
import { useState, useEffect, useRef } from 'react';

export function useClickOutside(initialState = false) {
  const [isOpen, setIsOpen] = useState(initialState);
  const ref = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (ref.current && !ref.current.contains(event.target)) {
        setIsOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return { isOpen, setIsOpen, ref };
}`
  },
  {
    id: 'sidebar-drawer',
    title: 'Sidebar / Drawer Mechanics',
    category: 'UI Visibility, Navigation & Dialog Mechanics',
    categorySlug: 'visibility',
    description: 'Sliding off-canvas side drawer panel with a close button and backdrop layer.',
    codeSnippet: `// Sidebar Off-Canvas Drawer Lock Body Hook
import { useEffect } from 'react';

export function useDrawerLock(isOpen) {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);
}`
  },
  {
    id: 'tooltip-positioning',
    title: 'Tooltip Positioning',
    category: 'UI Visibility, Navigation & Dialog Mechanics',
    categorySlug: 'visibility',
    description: 'Centered trigger badge/button with floating directional tooltip cards (Top, Bottom, Left, Right).',
    codeSnippet: `// Tooltip Hover & Delay State Hook
import { useState } from 'react';

export function useTooltip(delay = 200) {
  const [visible, setVisible] = useState(false);
  const [timer, setTimer] = useState(null);

  const show = () => {
    const timeout = setTimeout(() => setVisible(true), delay);
    setTimer(timeout);
  };

  const hide = () => {
    if (timer) clearTimeout(timer);
    setVisible(false);
  };

  return { visible, show, hide };
}`
  },

  // Category 2: Timers
  {
    id: 'otp-timer',
    title: 'OTP / Resend Code Timer',
    category: 'Timers, Async & Scheduling Logic',
    categorySlug: 'timers',
    description: '6-digit sharp input boxes, "Resend Code" disabled-state button, countdown label (00:59).',
    codeSnippet: `// OTP Countdown Timer & Resend Cooldown Hook
import { useState, useEffect } from 'react';

export function useOtpTimer(initialSeconds = 60) {
  const [seconds, setSeconds] = useState(initialSeconds);
  const [canResend, setCanResend] = useState(false);

  useEffect(() => {
    if (seconds > 0) {
      const timer = setInterval(() => setSeconds((prev) => prev - 1), 1000);
      return () => clearInterval(timer);
    } else {
      setCanResend(true);
    }
  }, [seconds]);

  const restartTimer = () => {
    setSeconds(initialSeconds);
    setCanResend(false);
  };

  return { seconds, canResend, restartTimer };
}`
  },
  {
    id: 'countdown-clock',
    title: 'Countdown Clock (Sales/Offers)',
    category: 'Timers, Async & Scheduling Logic',
    categorySlug: 'timers',
    description: '4 sharp metric cards displaying DAYS, HOURS, MINUTES, SECONDS.',
    codeSnippet: `// Countdown Clock Calculator Hook
import { useState, useEffect } from 'react';

export function useCountdown(targetDate) {
  const calculateTimeLeft = () => {
    const difference = +new Date(targetDate) - +new Date();
    if (difference <= 0) return { days: 0, hours: 0, minutes: 0, seconds: 0 };
    return {
      days: Math.floor(difference / (1000 * 60 * 60 * 24)),
      hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
      minutes: Math.floor((difference / 1000 / 60) % 60),
      seconds: Math.floor((difference / 1000) % 60),
    };
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => setTimeLeft(calculateTimeLeft()), 1000);
    return () => clearInterval(timer);
  }, [targetDate]);

  return timeLeft;
}`
  },
  {
    id: 'auto-carousel',
    title: 'Auto Carousel / Slider Engine',
    category: 'Timers, Async & Scheduling Logic',
    categorySlug: 'timers',
    description: 'Slide viewport frame with previous/next indicator arrows and numbered dot indicators.',
    codeSnippet: `// Auto Carousel Interval Hook with Pause on Hover
import { useState, useEffect } from 'react';

export function useAutoCarousel(totalSlides, interval = 3000) {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    if (isPaused) return;
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % totalSlides);
    }, interval);
    return () => clearInterval(timer);
  }, [totalSlides, interval, isPaused]);

  return { currentSlide, setCurrentSlide, setIsPaused };
}`
  },
  {
    id: 'inactivity-warning',
    title: 'Inactivity Logout Warning',
    category: 'Timers, Async & Scheduling Logic',
    categorySlug: 'timers',
    description: 'Inactive session alert banner and countdown modal dialog with "Stay Logged In" and "Logout Now" buttons.',
    codeSnippet: `// Inactivity Listener Hook
import { useState, useEffect } from 'react';

export function useInactivityTimer(timeoutMs = 15000) {
  const [isInactive, setIsInactive] = useState(false);

  useEffect(() => {
    let timer;
    const resetTimer = () => {
      setIsInactive(false);
      clearTimeout(timer);
      timer = setTimeout(() => setIsInactive(true), timeoutMs);
    };

    const events = ['mousemove', 'keydown', 'scroll', 'click'];
    events.forEach((event) => window.addEventListener(event, resetTimer));
    resetTimer();

    return () => {
      events.forEach((event) => window.removeEventListener(event, resetTimer));
      clearTimeout(timer);
    };
  }, [timeoutMs]);

  return { isInactive, setIsInactive };
}`
  },
  {
    id: 'stopwatch-engine',
    title: 'Stopwatch Engine',
    category: 'Timers, Async & Scheduling Logic',
    categorySlug: 'timers',
    description: 'Large digital clock display (00:00:00.00) and Start, Pause, Reset action controls.',
    codeSnippet: `// High-Precision Millisecond Stopwatch Hook
import { useState, useRef } from 'react';

export function useStopwatch() {
  const [time, setTime] = useState(0);
  const [isRunning, setIsRunning] = useState(false);
  const timerRef = useRef(null);

  const start = () => {
    if (!isRunning) {
      setIsRunning(true);
      const startTime = Date.now() - time;
      timerRef.current = setInterval(() => {
        setTime(Date.now() - startTime);
      }, 10);
    }
  };

  const pause = () => {
    setIsRunning(false);
    clearInterval(timerRef.current);
  };

  const reset = () => {
    setIsRunning(false);
    clearInterval(timerRef.current);
    setTime(0);
  };

  return { time, isRunning, start, pause, reset };
}`
  },

  // Category 3: Forms
  {
    id: 'reactive-validation',
    title: 'Real-time Reactive Validation',
    category: 'Forms, Dynamic Inputs & Validation',
    categorySlug: 'forms',
    description: 'Form with Name, Email, Password inputs, inline validation error text blocks, and disabled submit button.',
    codeSnippet: `// Real-Time Reactive Form Validation Hook
import { useState } from 'react';

export function useFormValidation(initialValues, validate) {
  const [values, setValues] = useState(initialValues);
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    const newValues = { ...values, [name]: value };
    setValues(newValues);
    setErrors(validate(newValues));
  };

  const isValid = Object.keys(errors).length === 0;

  return { values, errors, handleChange, isValid };
}`
  },
  {
    id: 'multistep-form',
    title: 'Multi-Step Form / Wizard',
    category: 'Forms, Dynamic Inputs & Validation',
    categorySlug: 'forms',
    description: 'Step 1-2-3 progress step indicator bar with Next, Previous, and Submit action triggers.',
    codeSnippet: `// Multi-Step Wizard Controller Hook
import { useState } from 'react';

export function useStepWizard(totalSteps) {
  const [currentStep, setCurrentStep] = useState(1);

  const nextStep = () => setCurrentStep((prev) => Math.min(prev + 1, totalSteps));
  const prevStep = () => setCurrentStep((prev) => Math.max(prev - 1, 1));
  const goToStep = (step) => setCurrentStep(Math.max(1, Math.min(step, totalSteps)));

  return { currentStep, nextStep, prevStep, goToStep, isFirst: currentStep === 1, isLast: currentStep === totalSteps };
}`
  },
  {
    id: 'dynamic-fields',
    title: 'Dynamic Form Fields (Add/Remove)',
    category: 'Forms, Dynamic Inputs & Validation',
    categorySlug: 'forms',
    description: 'List of dynamic input rows with "+ Add Row" and "- Remove" sharp icons.',
    codeSnippet: `// Dynamic Form Array State Hook
import { useState } from 'react';

export function useDynamicFields(initialItems = ['']) {
  const [fields, setFields] = useState(initialItems);

  const addField = () => setFields([...fields, '']);
  const removeField = (index) => setFields(fields.filter((_, i) => i !== index));
  const updateField = (index, value) => {
    const updated = [...fields];
    updated[index] = value;
    setFields(updated);
  };

  return { fields, addField, removeField, updateField };
}`
  },
  {
    id: 'password-strength',
    title: 'Password Visibility & Strength Meter',
    category: 'Forms, Dynamic Inputs & Validation',
    categorySlug: 'forms',
    description: 'Password input with Show/Hide eye toggle, 4-tier segmented strength bar, and checklist criteria.',
    codeSnippet: `// Password Strength Scoring Logic
export function getPasswordStrength(password) {
  let score = 0;
  if (password.length >= 8) score++;
  if (/[A-Z]/.test(password)) score++;
  if (/[0-9]/.test(password)) score++;
  if (/[^A-Za-z0-9]/.test(password)) score++;
  return score; // 0 (Weak) to 4 (Very Strong)
}`
  },
  {
    id: 'unsaved-changes',
    title: 'Unsaved Changes Guard',
    category: 'Forms, Dynamic Inputs & Validation',
    categorySlug: 'forms',
    description: 'Dirty state banner, input text area, and browser exit simulation toggle.',
    codeSnippet: `// Browser Exit / Unsaved Changes Alert Hook
import { useEffect } from 'react';

export function useUnsavedWarning(isDirty) {
  useEffect(() => {
    const handleBeforeUnload = (e) => {
      if (isDirty) {
        e.preventDefault();
        e.returnValue = '';
      }
    };
    window.addEventListener('beforeunload', handleBeforeUnload);
    return () => window.removeEventListener('beforeunload', handleBeforeUnload);
  }, [isDirty]);
}`
  },

  // Category 4: Data Processing
  {
    id: 'live-search-filter',
    title: 'Client-side Live Search & Multi-Filter',
    category: 'Data Processing, Sorting & Filter Logic',
    categorySlug: 'data-processing',
    description: 'Search input, Category dropdown, Price range slider, and a grid/list of dummy product cards.',
    codeSnippet: `// Client-side Filtering Hook
import { useMemo } from 'react';

export function useFilteredItems(items, searchTerm, selectedCategory, maxPrice) {
  return useMemo(() => {
    return items.filter((item) => {
      const matchesSearch = item.name.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesCategory = selectedCategory === 'All' || item.category === selectedCategory;
      const matchesPrice = item.price <= maxPrice;
      return matchesSearch && matchesCategory && matchesPrice;
    });
  }, [items, searchTerm, selectedCategory, maxPrice]);
}`
  },
  {
    id: 'multicolumn-sorting',
    title: 'Multi-Column Sorting Mechanics',
    category: 'Data Processing, Sorting & Filter Logic',
    categorySlug: 'data-processing',
    description: 'Data table with sortable column headers (Title, Price, Date, Rating) with directional sort indicators (▲▼).',
    codeSnippet: `// Multi-Column Sort Controller Hook
import { useState, useMemo } from 'react';

export function useSortableData(items) {
  const [sortConfig, setSortConfig] = useState({ key: 'title', direction: 'asc' });

  const sortedItems = useMemo(() => {
    const sortable = [...items];
    sortable.sort((a, b) => {
      if (a[sortConfig.key] < b[sortConfig.key]) return sortConfig.direction === 'asc' ? -1 : 1;
      if (a[sortConfig.key] > b[sortConfig.key]) return sortConfig.direction === 'asc' ? 1 : -1;
      return 0;
    });
    return sortable;
  }, [items, sortConfig]);

  const requestSort = (key) => {
    let direction = 'asc';
    if (sortConfig.key === key && sortConfig.direction === 'asc') direction = 'desc';
    setSortConfig({ key, direction });
  };

  return { items: sortedItems, requestSort, sortConfig };
}`
  },
  {
    id: 'pagination-logic',
    title: 'Pagination Logic',
    category: 'Data Processing, Sorting & Filter Logic',
    categorySlug: 'data-processing',
    description: 'Paginated table layout with Previous, Page numbers (1, 2, 3... 10), Next, and "Items per page" selector.',
    codeSnippet: `// Pagination Computation Hook
import { useState, useMemo } from 'react';

export function usePagination(totalItems, initialItemsPerPage = 5) {
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(initialItemsPerPage);

  const totalPages = Math.ceil(totalItems / itemsPerPage);

  const paginatedIndices = useMemo(() => {
    const start = (currentPage - 1) * itemsPerPage;
    const end = start + itemsPerPage;
    return { start, end };
  }, [currentPage, itemsPerPage]);

  return { currentPage, setCurrentPage, totalPages, itemsPerPage, setItemsPerPage, ...paginatedIndices };
}`
  },
  {
    id: 'bulk-selection',
    title: 'Bulk Selection (Select All Checkbox)',
    category: 'Data Processing, Sorting & Filter Logic',
    categorySlug: 'data-processing',
    description: 'Table with master "Select All" checkbox in <th>, row-level checkboxes, and batch action toolbar.',
    codeSnippet: `// Checkbox Bulk Selection Hook
import { useState } from 'react';

export function useBulkSelection(allIds = []) {
  const [selectedIds, setSelectedIds] = useState([]);

  const toggleSelectAll = () => {
    if (selectedIds.length === allIds.length) {
      setSelectedIds([]);
    } else {
      setSelectedIds([...allIds]);
    }
  };

  const toggleSelectOne = (id) => {
    setSelectedIds((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  const isAllSelected = allIds.length > 0 && selectedIds.length === allIds.length;

  return { selectedIds, toggleSelectAll, toggleSelectOne, isAllSelected };
}`
  },
  {
    id: 'keyword-highlighting',
    title: 'Search Keyword Highlighting',
    category: 'Data Processing, Sorting & Filter Logic',
    categorySlug: 'data-processing',
    description: 'Search input and article text blocks containing styled highlighted text marks (<mark class="bg-[#222] text-white">).',
    codeSnippet: `// Regex Search Keyword Highlighter
export function highlightText(text, query) {
  if (!query.trim()) return text;
  const parts = text.split(new RegExp(\`(\${query})\`, 'gi'));
  return parts.map((part, index) =>
    part.toLowerCase() === query.toLowerCase() ? (
      <mark key={index} className="bg-[#222222] text-white px-1">
        {part}
      </mark>
    ) : (
      part
    )
  );
}`
  },

  // Category 5: Scroll & DOM
  {
    id: 'scroll-progress',
    title: 'Scroll Progress Indicator',
    category: 'Scroll Mechanics & DOM Observation',
    categorySlug: 'scroll-dom',
    description: 'Fixed top reading progress bar and a long sample article layout.',
    codeSnippet: `// Window Scroll Percentage Hook
import { useState, useEffect } from 'react';

export function useScrollProgress() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      const scrolled = (window.scrollY / totalHeight) * 100;
      setProgress(scrolled);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return progress;
}`
  },
  {
    id: 'scroll-to-top-sticky',
    title: 'Scroll-to-Top / Sticky Header',
    category: 'Scroll Mechanics & DOM Observation',
    categorySlug: 'scroll-dom',
    description: 'Floating sharp "↑ Top" bottom-right button and a sticky navigation bar with active scroll state.',
    codeSnippet: `// Sticky Bar & Back-to-Top Visibility Hook
import { useState, useEffect } from 'react';

export function useScrollVisibility(threshold = 200) {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      setIsVisible(window.scrollY > threshold);
    };
    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, [threshold]);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return { isVisible, scrollToTop };
}`
  },
  {
    id: 'scroll-spy',
    title: 'Scroll-Spy Navigation',
    category: 'Scroll Mechanics & DOM Observation',
    categorySlug: 'scroll-dom',
    description: 'Fixed sidebar link list that highlights corresponding sections in a multi-section document.',
    codeSnippet: `// Intersection Observer Scroll-Spy Hook
import { useState, useEffect } from 'react';

export function useScrollSpy(sectionIds) {
  const [activeId, setActiveId] = useState('');

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActiveId(entry.target.id);
        });
      },
      { rootMargin: '-20% 0px -70% 0px' }
    );

    sectionIds.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, [sectionIds]);

  return activeId;
}`
  },
  {
    id: 'infinite-scroll',
    title: 'Infinite Scroll Engine',
    category: 'Scroll Mechanics & DOM Observation',
    categorySlug: 'scroll-dom',
    description: 'Continuous card feed container with a bottom loading skeleton / spinner UI placeholder.',
    codeSnippet: `// Intersection Observer Infinite Trigger
import { useEffect, useRef } from 'react';

export function useInfiniteScroll(onLoadMore) {
  const sentinelRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) onLoadMore();
    });

    if (sentinelRef.current) observer.observe(sentinelRef.current);
    return () => observer.disconnect();
  }, [onLoadMore]);

  return sentinelRef;
}`
  },

  // Category 6: Async & UI Feedback
  {
    id: 'api-state-management',
    title: 'API State Management',
    category: 'Async Operations & UI Feedbacks',
    categorySlug: 'async-feedback',
    description: 'View switcher displaying 3 distinct UI states: Skeleton Loader, Error State with Retry, and Loaded Data State.',
    codeSnippet: `// Data Fetching Async State Machine
import { useState, useEffect } from 'react';

export function useApiState(fetcher) {
  const [state, setState] = useState({ data: null, loading: true, error: null });

  const execute = async () => {
    setState({ data: null, loading: true, error: null });
    try {
      const data = await fetcher();
      setState({ data, loading: false, error: null });
    } catch (err) {
      setState({ data: null, loading: false, error: err.message });
    }
  };

  useEffect(() => { execute(); }, []);

  return { ...state, retry: execute };
}`
  },
  {
    id: 'debounced-search',
    title: 'Debounced Search Input',
    category: 'Async Operations & UI Feedbacks',
    categorySlug: 'async-feedback',
    description: 'Search box with live search indicator ("Typing...", "Waiting 300ms...", "API Triggered") and result list.',
    codeSnippet: `// Value Debounce Custom Hook
import { useState, useEffect } from 'react';

export function useDebounce(value, delay = 300) {
  const [debouncedValue, setDebouncedValue] = useState(value);

  useEffect(() => {
    const timer = setTimeout(() => setDebouncedValue(value), delay);
    return () => clearTimeout(timer);
  }, [value, delay]);

  return debouncedValue;
}`
  },
  {
    id: 'optimistic-ui',
    title: 'Optimistic UI Updates',
    category: 'Async Operations & UI Feedbacks',
    categorySlug: 'async-feedback',
    description: 'Like/Bookmark button and Upvote counters with immediate active states.',
    codeSnippet: `// Optimistic Mutation Pattern
import { useState } from 'react';

export function useOptimisticLike(initialCount = 42) {
  const [likes, setLikes] = useState(initialCount);
  const [isLiked, setIsLiked] = useState(false);

  const toggleLike = async () => {
    // Optimistic local state flip
    const nextIsLiked = !isLiked;
    setIsLiked(nextIsLiked);
    setLikes((prev) => (nextIsLiked ? prev + 1 : prev - 1));

    try {
      // Simulate API request call
      await new Promise((res) => setTimeout(res, 800));
    } catch {
      // Rollback on error
      setIsLiked(isLiked);
      setLikes(initialCount);
    }
  };

  return { likes, isLiked, toggleLike };
}`
  },
  {
    id: 'copy-clipboard',
    title: 'Copy to Clipboard Feedback',
    category: 'Async Operations & UI Feedbacks',
    categorySlug: 'async-feedback',
    description: 'Code/Coupon field with a copy trigger button showing transition to "Copied!" feedback text.',
    codeSnippet: `// Copy to Clipboard Feedback State Hook
import { useState } from 'react';

export function useClipboard(timeout = 2000) {
  const [copied, setCopied] = useState(false);

  const copy = async (text) => {
    if (navigator?.clipboard) {
      await navigator.clipboard.writeText(text);
      setCopied(true);
      setTimeout(() => setCopied(false), timeout);
    }
  };

  return { copied, copy };
}`
  },
  {
    id: 'polling-engine',
    title: 'Polling Engine',
    category: 'Async Operations & UI Feedbacks',
    categorySlug: 'async-feedback',
    description: 'Live feed ticker with "Last updated: 2s ago" indicator and manual refresh icon.',
    codeSnippet: `// Recurring Interval Polling Hook
import { useEffect, useRef } from 'react';

export function usePolling(callback, intervalMs = 5000) {
  const savedCallback = useRef(callback);

  useEffect(() => {
    savedCallback.current = callback;
  }, [callback]);

  useEffect(() => {
    const tick = () => savedCallback.current();
    const id = setInterval(tick, intervalMs);
    return () => clearInterval(id);
  }, [intervalMs]);
}`
  },

  // Category 7: Storage & State
  {
    id: 'shopping-cart',
    title: 'Shopping Cart Engine',
    category: 'Local Storage & Inter-Tab State Persistence',
    categorySlug: 'storage',
    description: 'Product item cards with Add to Cart, quantity (+ / -) controls, item list drawer, and Subtotal summary box.',
    codeSnippet: `// LocalStorage Cart Persistence Hook
import { useState, useEffect } from 'react';

export function useCart() {
  const [cart, setCart] = useState(() => {
    const saved = localStorage.getItem('brutalist_cart');
    return saved ? JSON.parse(saved) : [];
  });

  useEffect(() => {
    localStorage.setItem('brutalist_cart', JSON.stringify(cart));
  }, [cart]);

  const addItem = (item) => {
    setCart((prev) => {
      const existing = prev.find((i) => i.id === item.id);
      if (existing) {
        return prev.map((i) => (i.id === item.id ? { ...i, qty: i.qty + 1 } : i));
      }
      return [...prev, { ...item, qty: 1 }];
    });
  };

  return { cart, addItem, setCart };
}`
  },
  {
    id: 'theme-switcher',
    title: 'Theme Switcher (Dark/Light)',
    category: 'Local Storage & Inter-Tab State Persistence',
    categorySlug: 'storage',
    description: 'Sharp toggle switch / radio selector between Light (#ffffff / #222222) and Inverted Dark mode.',
    codeSnippet: `// Persistent Inverted Theme Switcher Hook
import { useState, useEffect } from 'react';

export function useTheme() {
  const [theme, setTheme] = useState(() => localStorage.getItem('theme') || 'light');

  useEffect(() => {
    localStorage.setItem('theme', theme);
    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [theme]);

  const toggleTheme = () => setTheme((t) => (t === 'light' ? 'dark' : 'light'));

  return { theme, toggleTheme };
}`
  },
  {
    id: 'crosstab-sync',
    title: 'Cross-Tab Synchronization',
    category: 'Local Storage & Inter-Tab State Persistence',
    categorySlug: 'storage',
    description: 'Multi-window state visualizer illustrating shared broadcast state across browser tabs.',
    codeSnippet: `// BroadcastChannel / LocalStorage Storage Event Sync
import { useState, useEffect } from 'react';

export function useCrossTabSync(key, defaultValue) {
  const [value, setValue] = useState(defaultValue);

  useEffect(() => {
    const handleStorage = (e) => {
      if (e.key === key && e.newValue) {
        setValue(JSON.parse(e.newValue));
      }
    };
    window.addEventListener('storage', handleStorage);
    return () => window.removeEventListener('storage', handleStorage);
  }, [key]);

  const updateValue = (newValue) => {
    setValue(newValue);
    localStorage.setItem(key, JSON.stringify(newValue));
  };

  return [value, updateValue];
}`
  },
  {
    id: 'recent-searches',
    title: 'Recent Searches History',
    category: 'Local Storage & Inter-Tab State Persistence',
    categorySlug: 'storage',
    description: 'Search bar with recent search badge tags, "Clear All" link, and individual remove "✕" icons.',
    codeSnippet: `// Recent Search History Hook
import { useState, useEffect } from 'react';

export function useRecentSearches(maxItems = 5) {
  const [history, setHistory] = useState(() => {
    return JSON.parse(localStorage.getItem('searches') || '[]');
  });

  useEffect(() => {
    localStorage.setItem('searches', JSON.stringify(history));
  }, [history]);

  const addSearch = (term) => {
    if (!term.trim()) return;
    setHistory((prev) => [term, ...prev.filter((i) => i !== term)].slice(0, maxItems));
  };

  const removeSearch = (term) => {
    setHistory((prev) => prev.filter((i) => i !== term));
  };

  return { history, addSearch, removeSearch, clearAll: () => setHistory([]) };
}`
  },

  // Category 8: Advanced Interactivity
  {
    id: 'drag-drop-reorder',
    title: 'Drag and Drop Reordering',
    category: 'Advanced Interactivity & Drag Mechanics',
    categorySlug: 'advanced',
    description: 'Reorderable list cards with drag grip icons (:::) and drop target placeholders.',
    codeSnippet: `// HTML5 Drag & Drop List Handler
import { useState } from 'react';

export function useDragList(initialList) {
  const [items, setItems] = useState(initialList);
  const [draggedIndex, setDraggedIndex] = useState(null);

  const handleDragStart = (index) => setDraggedIndex(index);
  const handleDragOver = (e, index) => {
    e.preventDefault();
    if (draggedIndex === null || draggedIndex === index) return;
    const newList = [...items];
    const item = newList.splice(draggedIndex, 1)[0];
    newList.splice(index, 0, item);
    setDraggedIndex(index);
    setItems(newList);
  };

  return { items, handleDragStart, handleDragOver };
}`
  },
  {
    id: 'image-magnifier',
    title: 'Image Magnifier / Zoom',
    category: 'Advanced Interactivity & Drag Mechanics',
    categorySlug: 'advanced',
    description: 'Dual view with image container, square zoom lens overlay, and side zoomed-in preview box.',
    codeSnippet: `// Mouse Coordinates Image Zoom Lens Hook
import { useState } from 'react';

export function useImageZoom() {
  const [pos, setPos] = useState({ x: 0, y: 0, show: false });

  const handleMouseMove = (e) => {
    const { left, top, width, height } = e.currentTarget.getBoundingClientRect();
    const x = ((e.clientX - left) / width) * 100;
    const y = ((e.clientY - top) / height) * 100;
    setPos({ x, y, show: true });
  };

  const handleMouseLeave = () => setPos((p) => ({ ...p, show: false }));

  return { ...pos, handleMouseMove, handleMouseLeave };
}`
  },
  {
    id: 'double-range-slider',
    title: 'Custom Double-Handle Range Slider',
    category: 'Advanced Interactivity & Drag Mechanics',
    categorySlug: 'advanced',
    description: 'Dual-thumb range track with Min / Max value badges ($10 - $500).',
    codeSnippet: `// Dual Thumb Range Slider State Hook
import { useState } from 'react';

export function useRangeSlider(min = 0, max = 1000) {
  const [range, setRange] = useState({ minVal: min, maxVal: max });

  const setMinVal = (val) => setRange((r) => ({ ...r, minVal: Math.min(val, r.maxVal - 10) }));
  const setMaxVal = (val) => setRange((r) => ({ ...r, maxVal: Math.max(val, r.minVal + 10) }));

  return { ...range, setMinVal, setMaxVal };
}`
  },
  {
    id: 'custom-media-player',
    title: 'Audio / Video Custom Player Controls',
    category: 'Advanced Interactivity & Drag Mechanics',
    categorySlug: 'advanced',
    description: 'Custom video/audio frame with sharp Play/Pause button, timeline scrubber bar, timestamp (01:23 / 04:56), and volume slider.',
    codeSnippet: `// Custom HTML5 Video Player Media Controller
import { useState, useRef } from 'react';

export function useMediaPlayer() {
  const mediaRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [progress, setProgress] = useState(0);

  const togglePlay = () => {
    if (mediaRef.current.paused) {
      mediaRef.current.play();
      setIsPlaying(true);
    } else {
      mediaRef.current.pause();
      setIsPlaying(false);
    }
  };

  const handleTimeUpdate = () => {
    const current = mediaRef.current.currentTime;
    const duration = mediaRef.current.duration || 1;
    setProgress((current / duration) * 100);
  };

  return { mediaRef, isPlaying, progress, togglePlay, handleTimeUpdate };
}`
  },
];
