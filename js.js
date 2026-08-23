(function () {
    var storageKey = 'warteamx-theme';

    function getPreferredTheme() {
        var stored = localStorage.getItem(storageKey);
        if (stored === 'light' || stored === 'dark') {
            return stored;
        }
        return window.matchMedia('(prefers-color-scheme: light)').matches ? 'light' : 'dark';
    }

    function initThemeToggle() {
        var root = document.documentElement;
        var toggle = document.getElementById('theme-toggle');

        function applyTheme(theme) {
            root.setAttribute('data-theme', theme);
            if (toggle) {
                toggle.textContent = theme === 'light' ? '🌙 Dark Mode' : '☀️ Light Mode';
                toggle.setAttribute('aria-label', 'Switch to ' + (theme === 'light' ? 'dark' : 'light') + ' mode');
            }
        }

        function toggleTheme() {
            var current = root.getAttribute('data-theme') || 'dark';
            var next = current === 'dark' ? 'light' : 'dark';
            localStorage.setItem(storageKey, next);
            applyTheme(next);
        }

        applyTheme(getPreferredTheme());

        if (toggle) {
            toggle.addEventListener('click', toggleTheme);
        }
    }

    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', initThemeToggle);
    } else {
        initThemeToggle();
    }
})();
