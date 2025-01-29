import AuthWrapper from "../_components/AuthWrapper";
import LoginForm from "../_components/LoginForm";

function Login() {
  return (
    <AuthWrapper
      message="
      Track your progress, motivate your efforts, and celebrate your
      successes with FocusFlow."
    >
      <LoginForm />
    </AuthWrapper>
  );
}

export default Login;
