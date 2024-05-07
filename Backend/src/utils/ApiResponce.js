class ApiResponce{
    constructor(
        StatusCode,
        data,
        messege = "Success"
    ){
        this.StatusCode = StatusCode;
        this.data = data;
        this.messege = messege;
        this.success = StatusCode < 400;

    }
}

export {ApiResponce}