
export class Demo {
  fullname: string;
  firstname: string;
  lastname: string;
  nic: string;
  address: string;
  telephone: string;
  email: string;
  startdate: Date;
  addingby: string;

  constructor(
    fullname,
    firstname,
    lastname,
    nic,
    address,
    telephone,
    email,
    startdate,
    addingby
    ) {
    this.fullname = fullname;
    this.firstname = firstname;
    this.lastname = lastname;
    this.nic = nic;
    this.address = address;
    this.telephone = telephone;
    this.email = email;
    this.startdate = startdate;
    this.addingby = addingby
  }
}
