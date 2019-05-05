export class USER {
    address = null;
    email = null;
    firstname = null;
    fullname = null;
    id = null;
    lastname = null;
    nic = null;
    sex = null;
    startdate = null;
    telephone = null;
    usertype = null;
    addingby = null;
    lasteditby = null;
    temporydisable = null;
    permenetdisable = null;
    photo = null;
    constructor(address, email, firstname, nic, fullname, id, lastname, sex, startdate, telephone, usertype,
        addingby, lasteditby, temporydisable, permenetdisable, photo) {
        this.address = address;
        this.email = email;
        this.firstname = firstname;
        this.fullname = fullname;
        this.id = id;
        this.lastname = lastname;
        this.nic = nic;
        this.sex = sex;
        this.startdate = startdate;
        this.telephone = telephone;
        this.usertype = usertype;
        this.addingby = addingby;
        this.lasteditby = lasteditby;
        this.temporydisable = temporydisable;
        this.permenetdisable = permenetdisable;
        this.photo = photo;
    }
}
