export class Register {
  constructor(
    public title: string = null,
    public firstName: string = null,
    public lastName: string = null,
    public email: string = null,
    public password: string = null,
    public role: number = null,
    public acceptTerms: boolean = true,
  ) { }
}