export async function loadTranslations(locale) {
  const messages = {
    en: (await import("../../../messages/en.json")).default,
    zh: (await import("../../../messages/zh.json")).default,
  };

  return messages[locale];
}
