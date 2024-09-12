import log from "loglevel";

const defaults = {
    // Disables API endpoints that create cooperative signatures for claim
    // and refund transactions
    // **Should only be enabled for testing purposes**
    cooperativeDisabled: false,

    loglevel: "info" as log.LogLevelDesc,
    defaultLanguage: "en",
    supportUrl: "https://t.me/SynthLock",
    discordUrl: "https://t.me/SynthLock",
    twitterUrl: "https://twitter.com/ProofOfCash",
    githubUrl: "https://github.com/djkazic",
    repoUrl: "https://github.com/djkazic/boltz-web-app",
    docsUrl: "https://github.com/djkazic/boltz-web-app",
    blogUrl: "",
    nostrUrl:
        "",
    statusUrl: "",
    youtubeUrl: "",
    brandingUrl: "",
    testnetUrl: "",
    telegramUrl: "https://t.me/SynthLock",
    email: "",
    dnsOverHttps: "https://1.1.1.1/dns-query",
    chatwootUrl: "https://t.me/SynthLock",
    preimageValidation: "https://validate-payment.com",
};

type Asset = {
    blockExplorerUrl?: Url;

    rifRelay?: string;
    contracts?: {
        deployHeight: number;
        smartWalletFactory?: string;
        deployVerifier?: string;
    };
    network?: {
        chainName: string;
        chainId: number;
        rpcUrls: string[];
        nativeCurrency: {
            name: string;
            symbol: string;
            decimals: number;
        };
    };
};

type Url = {
    normal: string;
    tor?: string;
};

export type Config = {
    apiUrl?: Url;
    network?: "mainnet" | "testnet" | "regtest";
    isBoltzClient?: boolean;
    boltzClientApiUrl?: string;
    isBeta?: boolean;
    isPro?: boolean;
    assets?: Record<string, Asset>;
    torUrl?: string;
} & typeof defaults;

let config: Config = defaults;

const isTor = () => window?.location.hostname.endsWith(".onion");

export const chooseUrl = (url?: Url) =>
    url ? (isTor() && url.tor ? url.tor : url.normal) : undefined;

export const setConfig = (data: Config) => {
    config = { ...defaults, ...data };
    log.setLevel(config.loglevel);
};

export { config };
