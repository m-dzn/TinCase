import React from "react";
import { AuthPageTemplate } from "components";
import { LoginContainer } from "containers";

function LoginPage() {
    return (
        <AuthPageTemplate>
            <LoginContainer />
        </AuthPageTemplate>
    );
}

export default LoginPage;
