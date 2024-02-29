const dados = {
   image: "",
   name: "",
   status: "",
   origin: "",
   location: "",
   setInfo(inforApi){
      this.image = inforApi.image;
      this.name = inforApi.name;
      this.status = inforApi.status;
      this.origin = inforApi.origin.name;
      this.loocation = inforApi.loocation.name;
   }
}

export { dados }