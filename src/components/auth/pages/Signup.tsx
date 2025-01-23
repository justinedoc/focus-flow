import AuthWrapper from "../_components/AuthWrapper";
import SignupForm from "../_components/SignupForm";
function Signup() {
  return (
    <AuthWrapper
      message="
      Track your progress, motivate your efforts, and celebrate your
      successes with FocusFlow."
    >
      <SignupForm />
    </AuthWrapper>
  );
}

export default Signup;
