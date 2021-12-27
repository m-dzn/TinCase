const { Strategy: KakaoStrategy } = require("passport-kakao");
const { OAUTH } = require("../../config");
const {
    checkProfileAvailability,
    verifySNS,
} = require("../../utils/passportUtils");

module.exports = new KakaoStrategy(
    {
        clientID: OAUTH.KAKAO.CLIENT_ID,
        clientSecret: OAUTH.KAKAO.CLIENT_SECRET,
        callbackURL: OAUTH.KAKAO.CALLBACK_URL,
        session: false,
    },
    (accessToken, refreshToken, profile, done) => {
        console.log("[KakaoStrategy]");
        checkProfileAvailability(profile, done);

        const newUserForm = {
            email: profile._json.kakao_account.email,
            nickname: profile.displayName,
            avatar: profile._json.properties.profile_image,
            snsId: profile.id,
            provider: profile.provider,
        };

        verifySNS(newUserForm, done);
    }
);
