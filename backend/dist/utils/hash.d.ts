export declare const generateSaltFromString: (value: string, stringNum: number) => Promise<string>;
export declare const generatePasswordSalt: (value: string) => Promise<string>;
export declare const generateBcryptHash: (value: string, salt: string) => string;
export declare const compareBcryptHash: (value: string, hash: string) => boolean;
export declare const randomUUID: () => string;
