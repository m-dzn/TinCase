const { Strategy: NaverStrategy } = require("passport-naver");
const { OAUTH } = require("../../../config");
const {
    checkProfileAvailability,
    verifySNS,
} = require("../../utils/passportUtils");

module.exports = new NaverStrategy(
    {
        clientID: OAUTH.NAVER.CLIENT_ID,
        clientSecret: OAUTH.NAVER.CLIENT_SECRET,
        callbackURL: OAUTH.NAVER.CALLBACK_URL,
    },
    (accessToken, refreshToken, profile, done) => {
        console.log("[NaverStrategy]");
        checkProfileAvailability(profile, done);

        const newUserForm = {
            email: profile._json.email,
            nickname: profile.displayName,
            avatar: profile._json.profile_image,
            snsId: profile.id,
            provider: profile.provider,
        };

        verifySNS(newUserForm, done);
    }
);
