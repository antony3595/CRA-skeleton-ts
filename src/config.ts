export enum BuildType {
	PRODUCTION = "production",
	DEVELOPMENT = "development",
	MOCK = "mock",
}

interface OverridableConfig {
	BUILD_TYPE: BuildType;
	isProduction?: () => boolean;
	API_BASE_URL?: string;
}

interface Config extends OverridableConfig {
	isProduction: () => boolean;
	API_BASE_URL: string;
}

type BuildTypesScheme = {
	[key in BuildType]?: OverridableConfig;
};

const defaultConfig: Config = {
	BUILD_TYPE: BuildType.PRODUCTION,
	isProduction: () => process.env.REACT_APP_BUILD_TYPE === BuildType.PRODUCTION,
	API_BASE_URL: "https://jsonplaceholder.typicode.com/",
};

const buildTypeConfigs: BuildTypesScheme = {
	development: {
		BUILD_TYPE: BuildType.DEVELOPMENT,
	},
	mock: {
		BUILD_TYPE: BuildType.MOCK,
	},
};

const buildType: BuildType = process.env["REACT_APP_BUILD_TYPE"] as BuildType;
const config: Config = { ...defaultConfig, ...buildTypeConfigs[buildType] };

export default config;
