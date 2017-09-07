class APIManager {
  constructor(store, url) {

    /**need check */
    
    /**subscribe */
    this.getsearchfunc = function(){
      console.log("listening")
      if (store.getState().search===true){

        /**put searchfunction here !! */
        console.log("searchfunction start");
        url = url+'search?APIKEY=AIzaSyCHczxUWw4cq6mnEYqWKvpUkfMF8A6vNMI&KEYWORD='+store.getState().httpRequest[0]+'&LAT='+store.getState().httpRequest[1]+'&LNG='+store.getState().httpRequest[2];
        fetch(url,{
         method:"get",
       })
         .then( (response) => {
           response.json().then( (json)=>{
             this.store.dispatch({type:'INPUTDATA', data: json})
             console.log("response OK");
           })     
         })
         .catch( (error) => {
           console.log(error);
         }); 

        
         store.dispatch({type:"clearRequest"})
      }else{
        console.log("getapifunc false !!",store.getState().search)
      }
 }

 this.unsubscribe = store.subscribe(this.getsearchfunc)



/**searchfunction */

 }

}

export default APIManager;