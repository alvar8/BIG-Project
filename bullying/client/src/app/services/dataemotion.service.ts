import { Injectable } from '@angular/core';
import {Http, Headers, RequestOptions} from '@angular/http';
import 'rxjs';

@Injectable()
export class DataemotionService {
  private url: string = "https://westus.api.cognitive.microsoft.com/emotion/v1.0/recognize"
  constructor(private http:Http) { }

  getPersonEmotion(imageUrl : String){
    const headers = new Headers({
      "Content-Type":"application/json",
      "Ocp-Apim-Subscription-Key":"4b8e96c60cf44ca09ff34bf648d79f97"
    })
    const options= new RequestOptions({ headers })

    return this.http.post(this.url, {url: imageUrl}, options)
    .map(data => data.json())
    .do(result => console.log(result))
  }

}
