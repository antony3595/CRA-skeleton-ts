interface BuildTypesInterface {
	PRODUCTION: BuildType;
	DEVELOPMENT: BuildType;
	MOCK: BuildType;
}

type BuildType = "production" | "development" | "mock";

interface Config {
	BUILD_TYPE: string;
	isProduction: () => boolean;
	API_BASE_URL: string;
}

interface ConfigsSet {
	production?: Config;
	development?: Config;
	mock?: Config;
}

export const BUILD_TYPES: BuildTypesInterface = {
	PRODUCTION: "production",
	DEVELOPMENT: "development",
	MOCK: "mock",
};

const defaultConfig: Config = {
	BUILD_TYPE: BUILD_TYPES.PRODUCTION,
	isProduction: () => process.env.REACT_APP_BUILD_TYPE === BUILD_TYPES.PRODUCTION,
	API_BASE_URL: "http://127.0.0.1:8000/api/",
};

const buildTypeConfigs: ConfigsSet = {
	development: {
		...defaultConfig,
		BUILD_TYPE: BUILD_TYPES.DEVELOPMENT,
	},
	mock: {
		...defaultConfig,
		BUILD_TYPE: BUILD_TYPES.MOCK,
	},
};

const buildType: BuildType = process.env["REACT_APP_BUILD_TYPE"] as BuildType;
const config: Config = { ...defaultConfig, ...buildTypeConfigs[buildType] };

export default config;
