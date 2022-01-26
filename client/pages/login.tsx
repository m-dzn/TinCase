import { ReactElement } from 'react';
import { strings } from '@/constants';
import { AuthLayout, LoginForm, Seo } from '@/components';

const Login = () => {
    return (
        <>
            <Seo title={strings.seo.login.title} />
            <LoginForm />
        </>
    );
};

Login.getLayout = function getLayout(page: ReactElement) {
    return <AuthLayout>{page}</AuthLayout>;
};

export default Login;
