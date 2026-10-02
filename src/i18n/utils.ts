import { defaultLang, ui, type Lang } from "./ui";

export type TranslateFn = (key: string) => string;

function getNestedValue(obj: unknown, path: string): unknown {
	return path.split(".").reduce<unknown>((acc, part) => {
		if (typeof acc === "object" && acc !== null && part in acc) {
			return (acc as Record<string, unknown>)[part];
		}
		return undefined;
	}, obj);
}

export function useTranslations(lang: Lang): TranslateFn {
	const dict = ui[lang] ?? ui[defaultLang];

	return function t(key: string): string {
		const value = getNestedValue(dict, key);
		if (typeof value === "string") return value;
		return key;
	};
}
