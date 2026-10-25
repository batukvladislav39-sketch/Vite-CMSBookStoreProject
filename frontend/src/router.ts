export const currentPath = (): string => {
  const raw = window.location.hash.replace(/^#/, '');
  const path = raw.startsWith('/') ? raw : '/';
  return path.replace(/\/+$/, '') || '/';
};

export const slugFromPath = (path: string): string | null => {
  if (path === '/') return 'home';
  const slug = path.slice(1);
  return /^[a-z0-9-]+$/i.test(slug) ? slug.toLowerCase() : null;
};

export const setActiveNav = (path: string): void => {
  document.querySelectorAll<HTMLAnchorElement>('.nav a[href^="#/"]').forEach((link) => {
    const target = link.getAttribute('href')?.slice(1) ?? '';
    if (target === path) link.setAttribute('aria-current', 'page');
    else link.removeAttribute('aria-current');
  });
};