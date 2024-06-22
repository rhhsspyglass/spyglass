import { writable } from "svelte/store";
import { browser } from "$app/environment";

function getFromLocalStorage(key, initialValue) {
    if (!browser) return initialValue;

    const item = localStorage.getItem(key);
    if (item) {
        return JSON.parse(item);
    }
    return initialValue;
}

function setToLocalStorage(key, value) {
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