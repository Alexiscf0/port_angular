import { Injectable, signal, computed, PLATFORM_ID, inject } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

import ES from '../i18n/es.json';
import EN from '../i18n/en.json';

export type Lang = 'es' | 'en';

const TRANSLATIONS: Record<Lang, Record<string, string>> = {
  es: ES,
  en: EN,
};

@Injectable({ providedIn: 'root' })
export class TranslationService {
  private platformId = inject(PLATFORM_ID);
  private isBrowser = isPlatformBrowser(this.platformId);

  lang = signal<Lang>(this.getInitialLang());

  private translations = computed(() => TRANSLATIONS[this.lang()]);

  t(key: string): string {
    return this.translations()[key] ?? key;
  }

  toggleLang(): void {
    const next: Lang = this.lang() === 'es' ? 'en' : 'es';
    this.lang.set(next);
    if (this.isBrowser) {
      localStorage.setItem('lang', next);
      document.documentElement.setAttribute('lang', next);
    }
  }

  private getInitialLang(): Lang {
    if (!this.isBrowser) return 'es';
    const saved = localStorage.getItem('lang') as Lang | null;
    return saved ?? 'es';
  }
}
