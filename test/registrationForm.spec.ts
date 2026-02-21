import { expect } from 'chai';
import { RegistrationForm } from '../src/registrationForm';

describe('RegistrationForm – Positive cases', () => {
  const form = new RegistrationForm();

  it('valid username', () => {
    expect(form.validateUsername('User123')).to.be.true;
  });

  it('valid email', () => {
    expect(form.validateEmail('test@mail.com')).to.be.true;
  });

  it('valid password', () => {
    expect(form.validatePassword('Password1')).to.be.true;
  });

  it('matching passwords', () => {
    expect(form.validateConfirmPassword('Password1', 'Password1')).to.be.true;
  });

  it('valid age 18', () => {
    expect(form.validateAge(18)).to.be.true;
  });

  it('valid age 30', () => {
    expect(form.validateAge(30)).to.be.true;
  });

  it('valid age 99', () => {
    expect(form.validateAge(99)).to.be.true;
  });

  it('username with max length', () => {
    expect(form.validateUsername('User12345678901')).to.be.true;
  });

  it('email with subdomain', () => {
    expect(form.validateEmail('test@mail.co.uk')).to.be.true;
  });

  it('password with multiple digits', () => {
    expect(form.validatePassword('Pass1234')).to.be.true;
  });

  it('password with long length', () => {
    expect(form.validatePassword('LongPassword1')).to.be.true;
  });

  it('username letters only', () => {
    expect(form.validateUsername('Username')).to.be.true;
  });

  it('username numbers only', () => {
    expect(form.validateUsername('12345')).to.be.true;
  });

  it('email with dots', () => {
    expect(form.validateEmail('first.last@mail.com')).to.be.true;
  });

  it('age middle value', () => {
    expect(form.validateAge(45)).to.be.true;
  });
});

describe('RegistrationForm – Negative cases', () => {
  const form = new RegistrationForm();

  it('too short username', () => {
    expect(form.validateUsername('ab')).to.be.false;
  });

  it('username with symbols', () => {
    expect(form.validateUsername('user@123')).to.be.false;
  });

  it('email without @', () => {
    expect(form.validateEmail('testmail.com')).to.be.false;
  });

  it('email without domain', () => {
    expect(form.validateEmail('test@mail')).to.be.false;
  });

  it('password without uppercase', () => {
    expect(form.validatePassword('password1')).to.be.false;
  });

  it('password without digit', () => {
    expect(form.validatePassword('Password')).to.be.false;
  });

  it('password too short', () => {
    expect(form.validatePassword('Pass1')).to.be.false;
  });

  it('passwords not matching', () => {
    expect(form.validateConfirmPassword('Password1', 'Password2')).to.be.false;
  });

  it('age below 18', () => {
    expect(form.validateAge(17)).to.be.false;
  });

  it('age above 99', () => {
    expect(form.validateAge(100)).to.be.false;
  });

  it('negative age', () => {
    expect(form.validateAge(-1)).to.be.false;
  });

  it('username with spaces', () => {
    expect(form.validateUsername('User Name')).to.be.false;
  });

  it('empty username', () => {
    expect(form.validateUsername('')).to.be.false;
  });

  it('empty email', () => {
    expect(form.validateEmail('')).to.be.false;
  });

  it('empty password', () => {
    expect(form.validatePassword('')).to.be.false;
  });
});