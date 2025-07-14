import React, { useState } from 'react';

const languages = [
  { code: 'en', label: 'English' },
  { code: 'sw', label: 'Swahili' },
  { code: 'fr', label: 'French' },
];

export default function LanguageSwitcher() {
  const [lang, setLang] = useState('en');
  return (
    <div className="flex items-center space-x-2">
      <label htmlFor="lang-select" className="text-primary-brown font-semibold">Language:</label>
      <select
        id="lang-select"
        value={lang}
        onChange={e => setLang(e.target.value)}
        className="px-2 py-1 rounded border border-primary-ochre"
      >
        {languages.map(l => (
          <option key={l.code} value={l.code}>{l.label}</option>
        ))}
      </select>
    </div>
  );
} 