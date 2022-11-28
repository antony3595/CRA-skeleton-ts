export enum BuildType {
	PRODUCTION = "production",
	DEVELOPMENT = "development",
	MOCK = "mock",
}

export interface Config {
	BUILD_TYPE: BuildType;
	stateVersion: number;
	isProduction: () => boolean;
	API_URL: string;
	localStorageKey: string;
}

interface OverridableConfig extends Partial<Config> {
	BUILD_TYPE: BuildType;
}

export type BuildTypesScheme = {
	[key in BuildType]?: OverridableConfig;
};
