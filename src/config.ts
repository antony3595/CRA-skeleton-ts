import { BuildType, BuildTypesScheme, Config } from "./types/config";

const defaultConfig: Config = {
	stateVersion: 0.0,
	BUILD_TYPE: BuildType.PRODUCTION,
	isProduction: () => process.env.REACT_APP_BUILD_TYPE === BuildType.PRODUCTION,
	API_URL: "http://fakeapi.mock/",
};

const buildTypeConfigs: BuildTypesScheme = {
	[BuildType.DEVELOPMENT]: {
		BUILD_TYPE: BuildType.DEVELOPMENT,
	},
	[BuildType.MOCK]: {
		BUILD_TYPE: BuildType.MOCK,
	},
};

const buildType: BuildType = process.env["REACT_APP_BUILD_TYPE"] as BuildType;
const config: Config = { ...defaultConfig, ...buildTypeConfigs[buildType] };
export default config;
