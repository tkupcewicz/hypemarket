import RegisterTitle from "./RegisterTitle";
import RegisterLogo from "./RegisterLogo";

const RegisterHeader = props => (
  <div className="register-header">
    <RegisterLogo />
    <RegisterTitle title={props.title} />
  </div>
);

export default RegisterHeader;