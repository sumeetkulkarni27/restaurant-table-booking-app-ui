import { LogLevel, Configuration, BrowserCacheLocation } from '@azure/msal-browser';
import { environment } from 'src/environments/environment';

const CIAM_AUTHORITY = 'https://skworld27.ciamlogin.com/6e6d0a0a-c380-45ea-b49e-e33c3f8123ae';
const CIAM_DOMAIN = 'skworld27.ciamlogin.com';

export const msalConfig: Configuration = {
    auth: {
        clientId: environment.adb2cConfig.clientId, // This is the ONLY mandatory field that you need to supply.
        authority: CIAM_AUTHORITY, // Defaults to "https://login.microsoftonline.com/common"
        knownAuthorities: [CIAM_DOMAIN], // Mark your B2C tenant's domain as trusted.
        redirectUri: '/', // Points to window.location.origin by default. You must register this URI on Azure portal/App Registration.
        postLogoutRedirectUri: '/', // Points to window.location.origin by default.
    },
    cache: {
        cacheLocation: BrowserCacheLocation.LocalStorage, // Configures cache location. "sessionStorage" is more secure, but "localStorage" gives you SSO between tabs.
    },
    system: {
        loggerOptions: {
            loggerCallback(logLevel: LogLevel, message: string) {
                console.log(message);
            },
            logLevel: LogLevel.Verbose,
            piiLoggingEnabled: false
        }
    }
}

export const protectedResources = {
    api: {
        endpoint: environment.adb2cConfig.apiEndpointUrl,
        scopes: {
            read: [environment.adb2cConfig.readScopeUrl],
            write: [environment.adb2cConfig.writeScopeUrl]
        }
    }
}

export const loginRequest = {
    scopes: [
        environment.adb2cConfig.readScopeUrl,
        environment.adb2cConfig.writeScopeUrl

    ]
};

