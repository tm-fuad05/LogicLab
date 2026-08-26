export default function Footer() {
  return (
    <footer className="border-t border-line bg-main py-5 px-4 sm:px-8 mt-auto transition-colors font-poppins">
      <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-txt-secondary">
        <div>
          <span>Developed by </span>
          <a
            href="https://tanvirmahmud.online"
            target="_blank"
            rel="noreferrer"
            className="font-medium text-txt-main hover:text-cyan transition-colors"
          >
            Tanvir Mahmud Fuad
          </a>
        </div>

        <div className="flex items-center gap-2 sm:gap-3">
          {/* GitHub Button */}
          <a
            href="https://github.com/tm-fuad05"
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-2 p-1.5 border border-line text-txt-main bg-card hover:border-dark-line dark:hover:border-cyan transition-colors cursor-pointer"
            title="GitHub Profile"
            aria-label="GitHub Profile"
          >
            <svg
              className="w-4 h-4 text-txt-main"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
              />
            </svg>
          </a>

          {/* Portfolio Button */}
          <a
            href="https://tanvirmahmud.online"
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-2 p-1.5 border border-line text-txt-main bg-card hover:border-dark-line dark:hover:border-cyan transition-colors cursor-pointer"
            title="Portfolio Website"
            aria-label="Portfolio Website"
          >
            <svg
              className="w-4 h-4 text-txt-main"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9"
              />
            </svg>
          </a>
        </div>
      </div>
    </footer>
  );
}
