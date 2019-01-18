export function PostData(type, userData){

    let BaseUrl = 'http://localhost:3000/users/api/';

    return new Promise((resolve, reject) => {

        fetch(BaseUrl+type,{
            headers : { 
                'Content-Type': 'application/json',
                'Accept': 'application/json'
               },
            method:'POST',
            body:JSON.stringify(userData)
        })
        .then ((response) => response.json())
        .then ((responseJson) => {
            resolve(responseJson);
     })
       .catch((error) => {
           reject(error);
       });
    });
}