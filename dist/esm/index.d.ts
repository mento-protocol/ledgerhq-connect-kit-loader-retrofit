export declare enum SupportedProviderImplementations {
    LedgerConnect = "LedgerConnect",
    WalletConnect = "WalletConnect"
}
export type EnableDebugLogsFunction = () => void;
export type CheckSupportOptions = {
    walletConnectVersion?: number;
    providerType: SupportedProviders;
    projectId?: string;
    chains?: number[];
    optionalChains?: number[];
    methods?: string[];
    optionalMethods?: string[];
    events?: string[];
    optionalEvents?: string[];
    rpcMap?: {
        [chainId: string]: string;
    };
    chainId?: number;
    bridge?: string;
    infuraId?: string;
    rpc?: {
        [chainId: number]: string;
    };
};
export type CheckSupportResult = {
    isLedgerConnectSupported?: boolean;
    isLedgerConnectEnabled?: boolean;
    isChainIdSupported?: boolean;
    providerImplementation: SupportedProviderImplementations;
};
export type CheckSupportFunction = (options: CheckSupportOptions) => CheckSupportResult;
export type EthereumRequestPayload = {
    method: string;
    params?: unknown[] | object;
};
export interface EthereumProvider {
    providers?: EthereumProvider[];
    connector?: unknown;
    session?: unknown;
    chainId: string | number;
    request<T = unknown>(args: EthereumRequestPayload): Promise<T>;
    disconnect?: {
        (): Promise<void>;
    };
    on(event: any, listener: any): void;
    removeListener(event: string, listener: any): void;
}
export declare enum SupportedProviders {
    Ethereum = "Ethereum"
}
export type ProviderResult = EthereumProvider;
export type GetProviderFunction = () => Promise<ProviderResult>;
export interface LedgerConnectKit {
    enableDebugLogs: EnableDebugLogsFunction;
    checkSupport: CheckSupportFunction;
    getProvider: GetProviderFunction;
}
export declare function loadConnectKit(): Promise<LedgerConnectKit>;
