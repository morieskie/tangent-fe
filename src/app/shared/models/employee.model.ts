export class EmployeeModel {
  constructor(
    public first_name: string,
    public last_name: string,
    public date_of_birth: string,
    public street: string,
    public city: string,
    public country: string,
    public postal_code: string,
    public contact_number?: string,
    public id?: string
  ) {}
}
