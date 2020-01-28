
class MarkiForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      email: '',
      instagram: '',
      description: ''
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }

  handleSubmit(event) {
    alert('A name was submitted: ' + this.state.value);
    event.preventDefault();
  }

  render() {
    return (
      <form id="marki-form" className="registration-form form-font" onSubmit={e => {
        e.preventDefault()
        console.log('submitting form')
        submitForm()
      }}>
        <label>
          nazwa:
          <input type="text" name="your-name" />
        </label>
        <label>
          email:
          <input type="text" name="your-email" />
        </label>
        <label>
          instagram:
          <input type="text" name="your-subject" />
        </label>
        <label>
          opis:
          <textarea name="your-message" />
        </label>
        <label id="download-offer">pobierz ofertę</label>
        <input className="form-submit form-font" type="submit" value="wyślij formularz" />
      </form>
    );
  }
}

export default MarkiForm;