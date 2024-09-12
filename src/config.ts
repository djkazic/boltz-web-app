import log from "loglevel";

const defaults = {
    // Disables API endpoints that create cooperative signatures for claim
    // and refund transactions
    // **Should only be enabled for testing purposes**
    cooperativeDisabled: false,

    loglevel: "info" as log.LogLevelDesc,
    defaultLanguage: "en",
    discordUrl: "https://t.me/SynthLock",
    twitterUrl: "https://twitter.com/ProofOfCash",
    githubUrl: "https://github.com/djkazic",
    repoUrl: "https://github.com/djkazic/boltz-web-app",
    docsUrl: "https://github.com/djkazic/boltz-web-app",
    blogUrl: "",
    nostrUrl:
        "",
    statusUrl: "",
    youtubeUrl:
        "",
    brandingUrl: "",
    testnetUrl: "",
    telegramUrl: "https://t.me/SynthLock",
    email: "",
};

type Asset = {
    network?: any;
    blockExplorerUrl?: Url;

    rifRelay?: string;
    contracts?: {
        deployHeight: number;
        smartWalletFactory?: string;
        deployVerifier?: string;
    };
};

type Url = {
    normal: string;
    tor?: string;
};

export type Config = {
    // The wsFallback is used on regtest when the backend is being run without
    // nginx and the WebSocket is on a different port than the rest of the API
    apiUrl?: Url & { wsFallback?: string };
    network?: "mainnet" | "testnet" | "regtest";
    isBoltzClient?: boolean;
    boltzClientApiUrl?: string;
    isBeta?: boolean;
    assets?: Record<string, Asset>;
    torUrl?: string;
} & typeof defaults;

let config: Config = defaults;

const isTor = () => window?.location.hostname.endsWith(".onion");

export const chooseUrl = (url?: Url) =>
    url ? (isTor() && url.tor ? url.tor : url.normal) : undefined;

export const setConfig = (data: any) => {
    config = { ...defaults, ...data };
    log.setLevel(config.loglevel!);
};

export { config };
