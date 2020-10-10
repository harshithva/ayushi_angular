import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private httpclient: HttpClient) { }

  getcomments(): Observable<any> {
    return this.httpclient.get('https://brl-apis.herokuapp.com/getmemcred/?all=1')
  }


  public Alumni = [ 
    {
      "Behance": "https://www.behance.net/shaktijais7007", 
      "Facebook": "https://www.facebook.com/shakti.jaiswal.501/", 
      "Github": "https://github.com/shakti-jaiswal", 
      "Image": "https://raw.githubusercontent.com/Blockchain-Research-Lab/brl-website-assets/master/ShaktiJaiswal.jpg", 
      "Insta": "https://www.instagram.com/shakt.i.i.i/", 
      "Linkedin": "https://www.linkedin.com/in/shaktijaiswal/", 
      "Name": "Shakti Jaiswal", 
      "Tech": "UI/UX Designer", 
      "Year": "Alumni"
    },
    {
      "Behance": "", 
      "Facebook": "", 
      "Github": "https://github.com/prakhar111097", 
      "Image": "https://raw.githubusercontent.com/Blockchain-Research-Lab/brl-website-assets/master/PrakharAgarwal.jpg", 
      "Insta": "https://www.instagram.com/great.extrovert/", 
      "Linkedin": "https://www.linkedin.com/in/prakhar-agarwal-7bb9a9157/", 
      "Name": "Prakhar Agarwal", 
      "Tech": "Application Developer", 
      "Year": "Alumni"
    }, 
   
    {
      "Behance": "", 
      "Facebook": "https://www.facebook.com/singhalshubh4", 
      "Github": "https://github.com/singhalshubh4", 
      "Image": "https://raw.githubusercontent.com/Blockchain-Research-Lab/brl-website-assets/master/ShubhSinghal.jpeg", 
      "Insta": "https://www.instagram.com/singhalshubh4/", 
      "Linkedin": "https://www.linkedin.com/in/shubh-singhal-445bb6106/", 
      "Name": "Shubh Singhal", 
      "Tech": "Web Developer", 
      "Year": "Alumni"
    }, 
  ]
}
