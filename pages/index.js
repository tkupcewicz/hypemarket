import RegisterLayout from "../components/RegisterLayout";

// const Index = () => <RegisterLayout/>;

function Index() {
  return (
    <RegisterLayout>
      <div className="menu-tile">
        <span>Marki</span>
      </div>
      <div className="menu-tile">
        <span>Prywatni<br />wystawcy</span>
      </div>
    </RegisterLayout>
  )
}

export default Index;