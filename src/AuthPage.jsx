import axios from 'axios'

const AuthPage = (props) => {
    const onSubmit = (e) => {
        e.preventDefault();
        const { value } = e.target[0];
        const password = e.target[1].value
        console.log(password)

        axios.post(
            'http://localhost:3001/authenticate',
            {
                username: value,
                password: password
            }
        ).then((res) => {
            props.onAuth({ ...res.data, secret: password })
        }).catch((err) => {
            console.log(err)
        })

        props.onAuth({ username: value, secret: password });
    };

    return (
        <div className="background">
            <form onSubmit={onSubmit} className="form-card">
                <div className="form-title">Welcome 👋</div>

                <div className="form-subtitle">Set a username to get started</div>

                <div className="auth">
                    {/* <div className="auth-label">Username</div> */}
                    <input className="auth-input" name="username" placeholder="username" />
                    <input className="auth-input" name="password" placeholder="password" type="password" />
                    <button className="auth-button" type="submit">
                        Enter
                    </button>
                </div>
            </form>
        </div>
    );
};

export default AuthPage;