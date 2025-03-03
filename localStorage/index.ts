import { MMKV } from "react-native-mmkv";

export const storage = new MMKV();

const isJson = (str: string) => {
  try {
    JSON.parse(str);
  } catch (e) {
    return false;
  }
  return true;
};

global["localStorage"] = {
  getItem: (key: string) => {
    const res = storage.getString(key);
    return !res || !isJson(res) ? JSON.stringify(null) : res;
  },
  setItem: (key: string, value: string) => {
    return storage.set(key, value);
  },
  removeItem: (key: string) => {
    return storage.delete(key);
  },
  multiRemove: (keys: string[]) => {
    const keysToRemove = storage.getAllKeys().filter((k) => keys.includes(k));
    for (const key of keysToRemove) {
      storage.delete(key);
    }
  },
  clear: () => {
    storage.clearAll();
  },
  key: (index: number) => {
    const key = storage.getAllKeys()[index];
    const res = storage.getString(key);
    return !res || !isJson(res) ? JSON.stringify(null) : res;
  },
  length: storage.getAllKeys().length,
} as Storage;
