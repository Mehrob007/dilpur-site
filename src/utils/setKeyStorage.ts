export function setKeyStorage<T>(key: string, value: T) {
  if (key && value) {
    localStorage.setItem(key, JSON.stringify(value));
  }
}
