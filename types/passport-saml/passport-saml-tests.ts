import express = require("express");
import passport = require("passport");
import SamlStrategy = require("passport-saml");
import MultiSamlStrategy = require("passport-saml/multiSamlStrategy");
import fs = require("fs");

const samlStrategy = new SamlStrategy.Strategy(
    {
        name: "samlCustomName",
        path: "/login/callback",
        entryPoint:
            "https://openidp.feide.no/simplesaml/saml2/idp/SSOService.php",
        issuer: "passport-saml",
        cacheProvider: {
            save(key: string, value: {}) {
                // save the key with the optional value, invokes the callback with the value saves
            },
            get(key: string) {
                // invokes 'callback' and passes the value if found, null otherwise
            },
            remove(key: string) {
                // removes the key from the cache, invokes `callback` with the
                // key removed, null if no key is removed
            }
        },
        cert: fs.readFileSync("/path/to/cert.crt", "UTF8")
    },
    (profile: {}, done: (err: Error | null, user: {}, info?: {}) => void) => {
        const user = {};
        done(null, user);
    }
);

passport.use(samlStrategy);
passport.authenticate("samlCustomName", {
    failureRedirect: "/",
    failureFlash: true
});

const metadata = samlStrategy.generateServiceProviderMetadata("decryptionCert");

const multiSamlStrategy = new MultiSamlStrategy.MultiSamlStrategy(
    {
        name: "samlCustomName",
        path: "/login/callback",
        entryPoint:
            "https://openidp.feide.no/simplesaml/saml2/idp/SSOService.php",
        issuer: "passport-saml",
        getSamlOptions(
            req: express.Request,
            callback: (
                err: Error | null,
                samlOptions: SamlStrategy.SamlConfig
            ) => void
        ) {
            callback(null, {
                name: "samlCustomName",
                path: "/login/callback2",
                entryPoint:
                    "https://openidp.feide.no/simplesaml/saml2/idp/SSOService.php",
                issuer: "passport-saml"
            });
        }
    },
    (profile: {}, done: (err: Error | null, user: {}, info?: {}) => void) => {
        const user = {};
        done(null, user);
    }
);

passport.use(multiSamlStrategy);
passport.authenticate("samlCustomName", {
    failureRedirect: "/",
    failureFlash: true
});
