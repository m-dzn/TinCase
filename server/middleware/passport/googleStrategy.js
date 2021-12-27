const { Strategy: GoogleStrategy } = require("passport-google-oauth20");
const { OAUTH } = require("../../config");
const {
    checkProfileAvailability,
    verifySNS,
} = require("../../utils/passportUtils");

module.exports = new GoogleStrategy(
    {
        clientID: OAUTH.GOOGLE.CLIENT_ID,
        clientSecret: OAUTH.GOOGLE.CLIENT_SECRET,
        callbackURL: OAUTH.GOOGLE.CALLBACK_URL,
    },
    (accessToken, refreshToken, profile, done) => {
        console.log("[googleStrategy]");
        checkProfileAvailability(profile, done);

        const newUserForm = {
            email: profile._json.email,
            nickname: profile.displayName,
            avatar: profile._json.picture,
            snsId: profile.id,
            provider: profile.provider,
        };

        verifySNS(newUserForm, done);
    }
);
