interface HOOK_TYPE {
  setLocalStorage: (value: string) => void
  getLocalStorage: () => null | string
  clearLocalStorage: () => void
}

const useLocalStorage = (fieldName: string): HOOK_TYPE => {
  const setLocalStorage = (value: string): void => {
    localStorage.setItem(fieldName, value)
  }

  const getLocalStorage = (): string | null => {
    return localStorage.getItem(fieldName)
  }

  const clearLocalStorage = (): void => {
    localStorage.clear()
  }

  return {
    setLocalStorage,
    getLocalStorage,
    clearLocalStorage,
  }
}

export default useLocalStorage
