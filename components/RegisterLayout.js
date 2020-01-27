import BackgroundVideo from "./BackgroundVideo";
import RegisterHeader from "./RegisterHeader";
import RegisterContent from "./RegisterContent"

const RegisterLayout = props => (
  <div className="RegisterLayout">
    <BackgroundVideo />
    <RegisterHeader title={props.title} />
    <RegisterContent>
      {props.children}
    </RegisterContent>
  </div> 
);

export default RegisterLayout;