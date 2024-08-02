import { writable } from 'svelte/store';
import { browser } from '$app/environment';

function getFromLocalStorage<T>(key: string, fallbackValue: T) {
    if (!browser) return fallbackValue;

    const item = localStorage.getItem(key);

    return (item || fallbackValue) as T;
}

function setToLocalStorage(key: string, value: unknown) {
    localStorage.setItem(key, JSON.stringify(value));
}

function createThemeStore() {
    const { subscribe, set, update } = writable<boolean>(getFromLocalStorage('theme', false));

    return {
        subscribe,
        toggle: () => {
            update((value) => {
                set(!value);
                setToLocalStorage("theme", !value);
                return !value;
            });
        },
        set: (value: boolean) => {
            set(value);
            setToLocalStorage('theme', value);
        }
    }
}

export const isDarkMode = createThemeStore();