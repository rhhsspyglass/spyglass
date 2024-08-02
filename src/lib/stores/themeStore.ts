import { writable } from 'svelte/store';
import { browser } from '$app/environment';

function getFromLocalStorage<T>(key: string, fallbackValue: T) {
    if (!browser) return fallbackValue;

    const item = localStorage.getItem(key);

    return item ?? fallbackValue;
}

function setToLocalStorage(key: string, value: string) {
    localStorage.setItem(key, value);
}

function createThemeStore() {
    const { subscribe, set, update } = writable<boolean>(getFromLocalStorage('theme', false) === 'true');

    return {
        subscribe,
        toggle: () => {
            update((value) => {
                set(!value);
                setToLocalStorage("theme", String(!value));
                return !value;
            });
        },
        set: (value: boolean) => {
            set(value);
            setToLocalStorage('theme', String(value));
        }
    }
}

export const isDarkMode = createThemeStore();

isDarkMode.subscribe(console.log)