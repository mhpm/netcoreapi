import { useTranslation } from "react-i18next";

export const LanguageSelector = () => {
  const { i18n } = useTranslation();

  const toggleLanguage = () => {
    const newLang = i18n.language.startsWith("es") ? "en" : "es";
    i18n.changeLanguage(newLang);
  };

  const isEs = i18n.language.startsWith("es");

  return (
    <button
      onClick={toggleLanguage}
      className="flex items-center gap-2.5 px-3 py-1.5 rounded-full bg-white/5 border border-white/10 hover:bg-white/10 hover:border-white/20 transition-all group"
      title={isEs ? "Switch to English" : "Cambiar a Español"}
    >
      <div className="w-4 h-3 overflow-hidden rounded-sm flex-shrink-0 shadow-sm">
        {isEs ? (
          <svg viewBox="0 0 750 500" className="w-full h-full object-cover">
            <rect width="750" height="500" fill="#c60b1e" />
            <rect width="750" height="250" y="125" fill="#ffc400" />
          </svg>
        ) : (
          <svg viewBox="0 0 741 390" className="w-full h-full object-cover">
            <rect width="741" height="390" fill="#3c3b6e" />
            <g stroke="#fff" strokeWidth="30">
              <path d="M0,30h741M0,90h741M0,150h741M0,210h741M0,270h741M0,330h741" />
            </g>
            <rect width="296.4" height="210" fill="#3c3b6e" />
            <circle cx="50" cy="50" r="10" fill="#fff" />
            <circle cx="120" cy="50" r="10" fill="#fff" />
            <circle cx="190" cy="50" r="10" fill="#fff" />
            <circle cx="85" cy="105" r="10" fill="#fff" />
            <circle cx="155" cy="105" r="10" fill="#fff" />
            <circle cx="50" cy="160" r="10" fill="#fff" />
            <circle cx="120" cy="160" r="10" fill="#fff" />
            <circle cx="190" cy="160" r="10" fill="#fff" />
          </svg>
        )}
      </div>
      <span className="text-[11px] font-bold text-white/90 uppercase tracking-wider">
        {isEs ? "ES" : "EN"}
      </span>
    </button>
  );
};
