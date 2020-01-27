import RegisterLayout from "../components/RegisterLayout";

function Marki() {
  return (
    <RegisterLayout title="Marki">
      <form className="registration-form form-font">
        <label>
          nazwa:
          <input type="text" name="name" />
        </label>
        <label>
          email:
          <input type="text" name="name" />
        </label>
        <label>
          instagram:
          <input type="text" name="name" />
        </label>
        <label>
          opis:
          <textarea />
        </label>
        <label id="download-offer">pobierz ofertę</label>
        <input className="form-submit form-font" type="submit" value="wyślij formularz" />
      </form>
    </RegisterLayout>
  )
}

export default Marki ;