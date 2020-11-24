import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {map} from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class GraphqlService {

  BASE_URL = 'https://api-euwest.graphcms.com/v1/ck503mo0024wl01hfb0r15lxd/master';

  constructor(private client: HttpClient) { }

  getHotels() {
    return this.client.post(this.BASE_URL, {
      query: `
        query {
          hotels {
            name
          }
        }
      `
    }).pipe(map((r: any) => r.data));
  }
}
