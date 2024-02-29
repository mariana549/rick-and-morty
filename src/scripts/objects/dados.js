const dados = {
   image: "",
   nome: "",
   status: "",
   origin: "",
   location: "",
   setInfo(inforApi){
      this.image = inforApi.image;
      this.nome = inforApi.name;
      this.status = inforApi.status;
      this.origin = inforApi.origin.name;
      this.loocation = inforApi.loocation.name;
      console.log(this.nome)
   }
}

export { dados }