export const DEFAULT_LANGUAGE: string = 'ko';

export const DEFAULT_COUNTRY: string = 'KR';

export const DEFAULT_TIMEZONE: string = 'Asia/Seoul';

export const DEFAULT_UTC_OFFSET: number = 540;

export const DEFAULT_LOCALE: string = 'ko';

export const DEFAULT_REGULATION: string = 'KOREA';

export const DEFAULT_COVERAGES: Array<string> = ['en', 'ko', 'pt'];

export const DEFAULT_COVERAGES_SET = DEFAULT_COVERAGES.map(code => ({
    code,
    iso: code,
    file: `${code}.ts`
}));
