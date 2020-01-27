import RegisterTitle from "./RegisterTitle";
import RegisterLogo from "./RegisterLogo";

const RegisterHeader = props => (
  <div class="register-header">
    <RegisterLogo />
    <RegisterTitle title={props.title} />
  </div>
);

export default RegisterHeader;