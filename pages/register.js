import RegisterLayout from "../components/RegisterLayout";
import Link from 'next/link';

function Register() {
  return (
    <RegisterLayout title="Rejestracja">
      <Link href="/marki">
        <div className="menu-tile">
          <span>Marki</span>
        </div>
      </Link>
      <div className="menu-tile">
        <span>Prywatni<br />wystawcy</span>
      </div>
    </RegisterLayout>
  )
}

export default Register ;