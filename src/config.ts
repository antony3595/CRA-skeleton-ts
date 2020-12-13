interface BuildTypesInterface {
	PRODUCTION: string;
	DEBUG: string;
	MOCK: string;
}

type BuildType = "production" | "debug" | "mock";

interface Config {
	[key: string]: any;
}

export const BUILD_TYPES: BuildTypesInterface = {
	PRODUCTION: "production",
	DEBUG: "debug",
	MOCK: "mock",
};

const defaultConfig: Config = {
	BUILD_TYPE: BUILD_TYPES.PRODUCTION,
	isProduction: () => process.env.REACT_APP_BUILD_TYPE === BUILD_TYPES.PRODUCTION,
};

const buildTypeConfig: any = {
	debug: {
		BUILD_TYPE: BUILD_TYPES.DEBUG,
	},
	mock: {
		BUILD_TYPE: BUILD_TYPES.MOCK,
	},
};

const buildType: BuildType = process.env["REACT_APP_BUILD_TYPE"] as BuildType;
const config: Config = { ...defaultConfig, ...buildTypeConfig[buildType] };

export default config;
