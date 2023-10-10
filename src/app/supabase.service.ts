import { Injectable } from '@angular/core'
import {
    AuthChangeEvent,
    AuthSession,
    createClient,
    Session,
    SupabaseClient,
    User,
} from '@supabase/supabase-js'
import { Observable } from 'rxjs'
import { HttpClient, HttpHeaders } from '@angular/common/http';

/** rxjs Imports */
import { throwError } from 'rxjs';
import { catchError, switchMap } from 'rxjs/operators';

/** EmbedDashboard SDK import */
import { embedDashboard } from '@superset-ui/embedded-sdk';
import { environment } from 'src/environments/environments'

export interface Profile {
    id?: string
    username: string
    website: string
    avatar_url: string
}

@Injectable({
    providedIn: 'root',
})
export class SupabaseService {
    private supabase: SupabaseClient
    _session: AuthSession | null = null
    private apiUrl = 'http://139.59.80.186:8088/api/v1/security';
    constructor(private http: HttpClient) {
        debugger;
        this.supabase = createClient(environment.supabaseUrl, environment.supabaseKey)
    }

    get session() {
        this.supabase.auth.getSession().then(({ data }) => {
            this._session = data.session
        })
        return this._session
    }
    private fetchAccessToken(): Observable<any> {
        debugger;
        const body = {
          "username": "admin",
          "password": "admin",
          "provider": "db",
          "refresh": true
        };
    
        const headers = new HttpHeaders({ "Content-Type": "application/json"});
    
        return this.http.post<any>(`${this.apiUrl}/login`, body, { headers });
      }
      private fetchGuestToken(accessToken: any): Observable<any> {
        debugger;
        console.log("accessToken");
        console.log(accessToken);
        const body = {
          "resources": [
            {
              "type": "dashboard",
              "id": "01641fd5-cf16-4938-b6d6-d221101e7495",
            }
          ],
          /**
           * rls: Row Level Security, this differs for client to client ,like what to show each client
           */
          "rls": [],
          "user": {
            "username": "admin",
            "first_name": "Superset",
            "last_name": "Admin",
          }
        };
    debugger;
        const acc = accessToken["access_token"];
        console.log("acc");
        console.log(acc);
        //accessToken is an object in which there are two tokens access_token and refresh_token ,out of which we just need to send access_token to get guest_token
        const headers = new HttpHeaders({
          "Content-Type": "application/json",
          "Authorization": `Bearer ${acc}`
        });
        
        
        //guest_token URL should end with forward_slash(/)
        return this.http.post<any>(`${this.apiUrl}/guest_token/`, body, { headers });
      }
      /**
       * 
       * @returns { guest Token }
       */
      getGuestToken(): Observable<any> {
        return this.fetchAccessToken().pipe(
          catchError((error) => {
            console.error(error);
            return throwError(error);
          }),
          switchMap((accessToken: any) => this.fetchGuestToken(accessToken))
        );
      }
      /**
       * 
       * @returns { dashboard }
       */
      embedDashboard(): Observable<void> {
        return new Observable((observer) => {
          this.getGuestToken().subscribe(
            (token) => {
                debugger;
              embedDashboard({
                id: '01641fd5-cf16-4938-b6d6-d221101e7495', // Replace with your dashboard ID
                supersetDomain: 'http://139.59.80.186:8088',
                mountPoint: document.getElementById('dashboard')??new HTMLElement,
                fetchGuestToken: () => token["token"],
                dashboardUiConfig: {
                  hideTitle: true,
                  hideChartControls: true,
                  hideTab: true,
                },
              });
              observer.next();
              observer.complete();
            },
            (error) => {
              observer.error(error);
            }
          );
        });
      }
    getData() {
        // return this.supabase
        //   .from('profiles')
        //   .select(`username`);

        return this.supabase
            .from('OPEN_ORDERS_Numeric')
            .select(`id,Customer,Document_number,Date,Client_ETA`);
    }
    profile(user: User) {
        return this.supabase
            .from('profiles')
            .select(`username, website, avatar_url`)
            .eq('id', user.id)
            .single()
    }

    authChanges(callback: (event: AuthChangeEvent, session: Session | null) => void) {
        return this.supabase.auth.onAuthStateChange(callback)
    }

    signIn(email: string) {
        return this.supabase.auth.signInWithOtp({ email })
    }

    signOut() {
        return this.supabase.auth.signOut()
    }

    updateProfile(profile: Profile) {
        const update = {
            ...profile,
            updated_at: new Date(),
        }

        return this.supabase.from('profiles').upsert(update)
    }

    downLoadImage(path: string) {
        return this.supabase.storage.from('avatars').download(path)
    }

    uploadAvatar(filePath: string, file: File) {
        return this.supabase.storage.from('avatars').upload(filePath, file)
    }
}