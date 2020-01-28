import RegisterLayout from "../components/RegisterLayout";
import 'isomorphic-fetch'
import { useForm } from "react-hook-form";
import json2formdata from "json2formdata";


function Marki() {
  const onSubmit = (data) => {
    // var formData = new FormData();
    // formData.append('email', 'XD@ex.com')
    // formData.append('nazwa', 'XD@example.com')
    // console.log(formData)
    // fetch('http://18.194.249.82/wp-json/contact-form-7/v1/contact-forms/49/feedback', {
    //   method: 'POST',
    //   headers: {
    //     'Content-Type': 'application/x-www-form-urlencoded'
    //   },
    //   body: formData
    // }).then((response) => {
    // })
    var myHeaders = new Headers();
myHeaders.append("Content-Type", "multipart/form-data; boundary=--------------------------759358661650589643585561");

var formdata = new FormData();
formdata.append("nazwa", "Test");
formdata.append("email", "example@ex.com");
formdata.append("instagram", "email subject");
formdata.append("opis", "email body");

var requestOptions = {
  method: 'POST',
  headers: myHeaders,
  body: formdata,
  redirect: 'follow'
};

fetch("http://18.194.249.82/wp-json/contact-form-7/v1/contact-forms/49/feedback", requestOptions)
  .then(response => response.text())
  .then(result => console.log(result))
  .catch(error => console.log('error', error));
  }

  const { register, handleSubmit, errors } = useForm();

  return (
    <RegisterLayout title="Marki">
      <form id="marki-form" className="registration-form form-font" onSubmit={handleSubmit(onSubmit)}>
        <label>
          nazwa:
          <input className={errors.yourname ? "input-required" : null} type="text" name="nazwa" ref={register({required: false})}/>
        </label>
        <label>
          email:
          <input type="text" name="email" ref={register({required: false})}/>
        </label>
        <label>
          instagram:
          <input type="text" name="instagram" ref={register({required: false})}/>
        </label>
        <label>
          opis:
          <textarea name="opis" ref={register({required: false})}/>
        </label>
        <label id="download-offer">pobierz ofertę</label>
        <input className="form-submit form-font" type="submit" value="wyślij formularz" />
      </form>
    </RegisterLayout>
  )
}

export default Marki;