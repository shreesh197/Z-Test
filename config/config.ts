import * as packageJson from '../package.json';
import * as manifest from '../public/manifest.json';

const serverPort = process.env.PORT || 3002;

const completeConfig = {
    default: {
        serverPort,
        appSlug: packageJson.name,
        appVersion: packageJson.version,
        appUrl: process.env.NEXT_PUBLIC_APP_URL,
        appName: manifest.name,
        appTagline: manifest.description,
        appDescription: `${manifest.name} – ${manifest.description}`,
        locale: 'en_US',
        googleAnalyticsId: 'UA-..', // - Google Analytics ID
        googleSiteVerification: false,
    },

    development: {
        appUrl: `http://localhost:${serverPort}/`,
        googleAnalyticsId: null
    },

    production: {}
};

const config = {
    ...completeConfig.default,
};

export default config;
