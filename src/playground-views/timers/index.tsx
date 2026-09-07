import { useEffect, useState } from "react";

// Category 2: Timers
export function OtpTimerView() {
  const [timer, setTimer] = useState(0);
  const [canResend, setCanResend] = useState(true);
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
              <span className="font-semibold font-mono text-txt-main dark:text-cyan">
                00:{timer >= 10 ? timer : `0${timer}`}
              </span>
            </p>
          </div>
        )}
        <button
          onClick={handleResend}
          disabled={!canResend}
          className="px-5 py-2.5 border border-line text-xs font-medium bg-cyan text-main cursor-pointer hover:bg-cyan/80 duration-200 disabled:text-txt-muted disabled:cursor-not-allowed disabled:opacity-75
          disabled:bg-sidebar"
        >
          Resend Code
        </button>
        <div className="flex flex-col items-center justify-center gap-1.5 text-[11px] text-txt-muted space-y-2">
          <p className="font-medium text-txt-secondary border border-line px-1.5 py-0.5 rounded bg-card/60">
            {isFirstAttempt ? "1st attempt (15s)" : "Subsequent (30s)"}
          </p>
          <p className="text-[11px] text-txt-muted/70 tracking-wide">
            [ ⚡ Demo note: Timer is accelerated for quick preview. ]
          </p>
        </div>
      </div>
    </div>
  );
}

export function CountdownClockView() {
  return (
    <div className="w-full grid grid-cols-4 gap-4 max-w-xl mx-auto text-center">
      {[
        { label: "Days", val: "00" },
        { label: "Hours", val: "00" },
        { label: "Mins", val: "00" },
        { label: "Secs", val: "00" },
      ].map((item) => (
        <div
          key={item.label}
          className="p-4 border border-[#e5e7eb] bg-[#fafafa]"
        >
          <div className="text-2xl  font-semibold text-[#121212]">
            {item.val}
          </div>
          <div className="text-[10px]  text-[#666666] uppercase mt-1">
            {item.label}
          </div>
        </div>
      ))}
    </div>
  );
}

export function AutoCarouselView() {
  return (
    <div className="w-full border border-[#e5e7eb] bg-white p-6 relative">
      <div className="h-48 bg-[#fafafa] border border-[#e5e7eb] flex items-center justify-center relative">
        <span className="text-xs  text-[#666666]">
          Slide Banner Frame 1 / 3
        </span>
        <button className="absolute left-3 p-2 bg-white border border-[#e5e7eb] text-xs ">
          ←
        </button>
        <button className="absolute right-3 p-2 bg-white border border-[#e5e7eb] text-xs ">
          →
        </button>
      </div>
      <div className="flex justify-center gap-2 mt-4">
        <span className="w-2.5 h-2.5 bg-[#222222]"></span>
        <span className="w-2.5 h-2.5 bg-[#e5e7eb]"></span>
        <span className="w-2.5 h-2.5 bg-[#e5e7eb]"></span>
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
