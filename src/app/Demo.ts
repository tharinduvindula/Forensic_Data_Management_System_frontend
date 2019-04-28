import { ThrowStmt } from "@angular/compiler";

export class Demo
{
  fullname: string;
  firstname: string;
  nic: string;
  address: string;
  contactNumber: string;
  email: string;
  password: string;
  usertype: string;
  startdate: Date;
  enddate: Date;
  photo: boolean;

  constructor(
    fullname,
    firstname,
    nic,
    address,
    contactNumber,
    email,
    password,
    usertype,
    startdate,
    enddate,
    photo
    ) {
    this.fullname = fullname;
    this.firstname = firstname;
    this.nic = nic;
    this.address = address;
    this.contactNumber = contactNumber;
    this.email = email;
    this.password = password;
    this.usertype = usertype;
    this.startdate = startdate;
    this.enddate = enddate;
    this.photo = photo;
  }
}