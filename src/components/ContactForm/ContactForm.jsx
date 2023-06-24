import React, { Component } from 'react';

class ContactForm extends Component {
  state = { name: '', number: '' };

  handleSubmit = evt => {
    evt.preventDefault();

    this.props.addContact(this.state);
    this.reset();
  };
  reset = () => {
    this.setState({ name: '', number: '' });
  };

  handleChange = evt => {
    const { name, value } = evt.currentTarget;
    this.setState({ [name]: value });
  };

  render() {
    return (
      <form
        className="border border-success-subtle p-5 rounded-1 border-2"
        onSubmit={this.handleSubmit}
      >
        <div className="mb-3">
          <label className="d-block">
            Name
            <div className="input-group input-group-lg">
              <input
                type="text"
                name="name"
                pattern="^[a-zA-Zа-яА-Я]+(([' \-][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                className="form-control"
                title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                required
                value={this.state.name}
                onChange={this.handleChange}
              />
            </div>
          </label>
        </div>
        <div className="mb-3">
          <label className="d-block ">
            Number
            <div className="input-group input-group-lg">
              <input
                name="number"
                type="tel"
                className="form-control"
                pattern="\+?\d{1,4}?[ .\-\s]?\(?\d{1,3}?\)?[ .\-\s]?\d{1,4}[ .\-\s]?\d{1,4}[ .\-\s]?\d{1,9}"
                value={this.state.number}
                onChange={this.handleChange}
              />
            </div>
          </label>
        </div>
        <button type="submit" className="btn btn-primary">
          Add contact
        </button>
      </form>
    );
  }
}

export default ContactForm;
