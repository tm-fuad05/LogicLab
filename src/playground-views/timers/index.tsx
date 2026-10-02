/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable react-hooks/set-state-in-effect */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { useEffect, useState } from "react";

// Category 2: Timers
export function OtpTimerView() {
  // State to track remaining countdown seconds before resend is allowed
  const [timer, setTimer] = useState(0);
  // State to manage resend button availability and lock status
  const [canResend, setCanResend] = useState(true);
  // State to apply tiered delay (15s on first try, 30s for subsequent tries)
  const [isFirstAttempt, setIsFirstAttempt] = useState(true);

  useEffect(() => {
    let timerCount: any;

    // While timer is active, decrement by 1 each interval
    if (timer > 0) {
      timerCount = setInterval(() => {
        setTimer((prev) => prev - 1);
      }, 300);
    }

    // When timer expires, re-enable resending
    if (timer === 0) {
      clearInterval(timerCount);
      setCanResend(true);
    }

    // Cleanup function
    return () => clearInterval(timerCount);
  }, [timer]);

  // Handle OTP resend click logic (15s first attempt, 30s subsequent)
  const handleResend = () => {
    setCanResend(false);
    if (isFirstAttempt) {
      setTimer(15); // Shorter cooldown for the first attempt
      setIsFirstAttempt(false);
    } else {
      setTimer(30); // Longer cooldown for repeated attempts
    }
  };

  return (
    <div className="w-full max-w-md mx-auto space-y-6 text-center font-poppins py-4">
      <div className="flex justify-center gap-2.5">
        {[1, 2, 3, 4, 5, 6].map((i) => (
          <input
            key={i}
            type="text"
            maxLength={1}
            readOnly
            value={i === 1 ? "5" : i === 2 ? "2" : ""}
            className="w-10 h-12 text-center text-sm font-semibold border border-line bg-card text-txt-main focus:outline-none focus:border-dark-line dark:focus:border-cyan transition-colors"
          />
        ))}
      </div>
      <div className="space-y-3">
        {!canResend && (
          <div className="text-xs text-txt-secondary">
            <p>
              Resend code in{" "}
              <span className="font-semibold font-mono text-cyan-600 dark:text-cyan">
                00:{timer >= 10 ? timer : `0${timer}`}
              </span>
            </p>
          </div>
        )}
        <button
          onClick={handleResend}
          disabled={!canResend}
          className="px-5 py-2.5 border border-line text-xs font-medium bg-dark-line text-white dark:bg-cyan dark:text-main cursor-pointer hover:opacity-90 transition-opacity duration-200 disabled:text-txt-muted disabled:cursor-not-allowed disabled:opacity-75 disabled:bg-sidebar disabled:border-line"
        >
          Resend Code
        </button>
        <div className="flex flex-col items-center justify-center gap-1.5 text-[11px] text-txt-muted space-y-1">
          <p className="font-medium text-txt-main dark:text-txt-secondary border border-line px-2 py-0.5 rounded bg-sidebar shadow-xs">
            {isFirstAttempt ? "1st attempt (15s)" : "Subsequent (30s)"}
          </p>
          <p className="text-[11px] text-txt-muted tracking-wide">
            [ ⚡ Demo note: Timer is accelerated for quick preview. ]
          </p>
        </div>
      </div>
    </div>
  );
}

export function CountdownClockView() {
  interface Time {
    label: string;
    val: string;
  }

  // State to hold remaining countdown time in seconds
  const [timeLeft, setTimeLeft] = useState(0);
  // State to control pause/resume state of the countdown
  const [isPaused, setIsPaused] = useState(false);

  // Interval timer effect: runs every second to decrement time left
  useEffect(() => {
    // Stop countdown if paused or if time has reached 0
    if (isPaused || timeLeft <= 0) return;

    // Start 1-second interval to tick down
    const interval = setInterval(() => {
      setTimeLeft((prev) => (prev > 0 ? prev - 1 : 0));
    }, 1000);

    // Cleanup active interval on re-render, pause, or component unmount
    return () => clearInterval(interval);
  }, [timeLeft, isPaused]);

  // Helper function to format numbers into two-digit strings (e.g. 5 -> "05")
  const format = (time: number) => String(time).padStart(2, "0");

  // Math breakdown: convert total seconds into days, hours, minutes, and seconds
  const days = format(Math.floor(timeLeft / (24 * 3600)));
  const hours = format(Math.floor((timeLeft / 3600) % 24));
  const min = format(Math.floor((timeLeft / 60) % 60));
  const sec = format(Math.floor(timeLeft % 60));

  // Structured metrics list for dynamic card rendering
  const countDownTimer: Time[] = [
    { label: "Days", val: days },
    { label: "Hours", val: hours },
    { label: "Mins", val: min },
    { label: "Secs", val: sec },
  ];

  // Increment countdown time by a specified duration in seconds (+1h, +1d)
  const handleAddTime = (time: number) => {
    setTimeLeft((prev) => prev + time);
  };

  // Reset timer to 0 and unpause
  const handleReset = () => {
    setTimeLeft(0);
    setIsPaused(false);
  };

  return (
    <div className="w-full max-w-xl mx-auto space-y-6 text-center font-poppins py-4">
      {/* 4 Metric Cards */}
      <div className="grid grid-cols-4 gap-3 md:gap-4">
        {countDownTimer.map((item) => (
          <div
            key={item.label}
            className="p-4 border border-line bg-card shadow-xs transition-colors"
          >
            <div className="text-2xl md:text-3xl font-mono font-semibold text-txt-main">
              {item.val}
            </div>
            <div className="text-[10px] md:text-xs text-txt-muted uppercase font-medium tracking-wider mt-1">
              {item.label}
            </div>
          </div>
        ))}
      </div>

      {/* Control Buttons */}
      <div className="flex flex-wrap items-center justify-center gap-2.5">
        <button
          onClick={() => setIsPaused((prev) => !prev)}
          className="px-4 py-2 border border-line text-xs font-medium bg-dark-line text-white dark:bg-cyan dark:text-main cursor-pointer hover:opacity-90 transition-opacity"
        >
          {isPaused ? "Resume" : "Pause"}
        </button>

        <button
          onClick={handleReset}
          className="px-4 py-2 border border-line text-xs font-medium bg-card text-txt-main hover:bg-sidebar transition-colors cursor-pointer"
        >
          Reset
        </button>

        <button
          onClick={() => handleAddTime(60 * 60)}
          className="px-3 py-2 border border-line text-xs text-txt-secondary hover:text-txt-main hover:bg-sidebar transition-colors cursor-pointer"
        >
          +1 Hour
        </button>

        <button
          onClick={() => handleAddTime(24 * 60 * 60)}
          className="px-3 py-2 border border-line text-xs text-txt-secondary hover:text-txt-main hover:bg-sidebar transition-colors cursor-pointer"
        >
          +1 Day
        </button>
      </div>

      {/* Zero State / Event End Message */}
      {timeLeft === 0 && (
        <p className="text-xs font-medium text-amber-600 dark:text-amber-400">
          🎉 Time is up! Event has ended.
        </p>
      )}
    </div>
  );
}

export function AutoCarouselView() {
  const slides = ["Slide 1", "Slide 2", "Slide 3", "Slide 4"];

  // State to track the currently active slide index (0-based)
  const [currentSlide, setCurrentSlide] = useState(0);
  // State to track if mouse is hovering over the carousel to pause auto-play
  const [isHovered, setIsHovered] = useState(false);

  // Auto-play interval effect: advances to next slide every 3s when not hovered
  useEffect(() => {
    if (isHovered) return;

    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
    }, 3000);
    return () => clearInterval(interval);
  }, [isHovered, slides.length]);

  // Navigate to next slide, loops back to first slide when reaching the end
  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  };

  // Navigate to previous slide, loops to last slide when at the beginning
  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  return (
    <div className="w-full max-w-xl mx-auto space-y-4 font-poppins py-2">
      {/* Carousel Viewport Container */}
      <div
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        className="relative w-full overflow-hidden border border-line bg-card shadow-xs group"
      >
        {/* Slide Track */}
        <div
          className="flex transition-transform duration-500 ease-out"
          // Translate horizontally based on active slide index (0%, -100%, -200%, etc.)
          style={{ transform: `translateX(-${currentSlide * 100}%)` }}
        >
          {slides.map((slide, idx) => (
            <div
              key={idx}
              className="w-full flex-shrink-0 h-48 md:h-56 flex flex-col items-center justify-center bg-card select-none"
            >
              <span className="text-lg md:text-xl font-medium tracking-wide text-txt-main">
                {slide}
              </span>
            </div>
          ))}
        </div>

        {/* Previous Navigation Button */}
        <button
          onClick={prevSlide}
          aria-label="Previous Slide"
          className="absolute left-3 top-1/2 -translate-y-1/2 w-8 h-8 flex items-center justify-center border border-line bg-card/90 hover:bg-card text-txt-main text-xs cursor-pointer shadow-xs transition-colors"
        >
          {"<"}
        </button>

        {/* Next Navigation Button */}
        <button
          onClick={nextSlide}
          aria-label="Next Slide"
          className="absolute right-3 top-1/2 -translate-y-1/2 w-8 h-8 flex items-center justify-center border border-line bg-card/90 hover:bg-card text-txt-main text-xs cursor-pointer shadow-xs transition-colors"
        >
          {">"}
        </button>
      </div>

      {/* Controls & Pagination Dots */}
      <div className="flex flex-col items-center justify-center gap-2 pt-1">
        <div className="flex items-center justify-center gap-2">
          {slides.map((_, index) => {
            const isActive = currentSlide === index;
            return (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                aria-label={`Go to slide ${index + 1}`}
                className={`transition-all duration-300 rounded-full cursor-pointer ${
                  isActive
                    ? "w-6 h-2 bg-dark-line dark:bg-cyan"
                    : "w-2 h-2 bg-line hover:bg-txt-muted"
                }`}
              />
            );
          })}
        </div>

        {/* Hover Hint Info */}
        <span className="text-[11px] text-txt-muted">
          Hover over carousel to pause
        </span>
      </div>
    </div>
  );
}

export function InactivityWarningView() {
  return (
    <div className="w-full max-w-md mx-auto border border-[#e5e7eb] bg-white p-6 space-y-4">
      <div className="flex items-center justify-between border-b border-[#e5e7eb] pb-3">
        <span className="text-xs  font-semibold text-amber-600 uppercase">
          Session Alert
        </span>
        <span className="text-xs  text-[#666666]">02:00 Remaining</span>
      </div>
      <p className="text-xs text-[#666666]">
        You have been inactive. For security purposes, your session will expire
        shortly.
      </p>
      <div className="flex justify-end gap-2 pt-2">
        <button className="px-3 py-1.5 border border-[#e5e7eb] text-xs  text-[#666666]">
          Logout
        </button>
        <button className="px-3 py-1.5 bg-[#222222] text-white text-xs ">
          Extend Session
        </button>
      </div>
    </div>
  );
}

export function StopwatchView() {
  return (
    <div className="w-full text-center space-y-6 py-4">
      <div className="text-4xl  font-semibold text-[#121212]">
        00:00:00.<span className="text-xl text-[#666666]">00</span>
      </div>
      <div className="flex justify-center gap-3">
        <button className="px-5 py-2 bg-[#222222] text-white text-xs ">
          Start
        </button>
        <button className="px-5 py-2 border border-[#e5e7eb] bg-white text-xs  text-[#666666]">
          Pause
        </button>
        <button className="px-5 py-2 border border-[#e5e7eb] bg-white text-xs  text-[#666666]">
          Reset
        </button>
      </div>
    </div>
  );
}
