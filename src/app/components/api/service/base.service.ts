import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Injectable } from '@angular/core';

export interface Options {
  headers?: HttpHeaders;
  params?: HttpParams | { [params: string]: any };
}
@Injectable()
export class BaseService {

    constructor(protected http: HttpClient) { }

    public createDefaultOptions(): Options {
        return {
            headers: new HttpHeaders({ 'Content-Type': 'application/json' })
        };
    }

    public optsName(name: string): Options {
        const newopts = this.createDefaultOptions();

        newopts.headers['xhr-name'] = name;

        return newopts;
    }

    public optsNameCache(name: string): Options {
        const newopts = this.optsName(name);
        newopts.headers = new HttpHeaders({ 'use-cache': 'true' });
        return newopts;
    }

    private createOptions(opts: Options): Options {
        const defaultOpts: Options = this.createDefaultOptions();

        if (opts) {
            opts = {
                params: opts.params || defaultOpts.params,
                headers: opts.headers || defaultOpts.headers
            };

            if (!opts.headers['Content-Type']) {
                opts.headers['Content-Type'] = defaultOpts.headers['Content-Type'];
            }
        }

        return opts || defaultOpts;
    }


    public doGet<T>(serviceUrl: string, opts?: Options): Observable<T> {
        const ropts = this.createOptions(opts);

        return this.http.get(serviceUrl, ropts).pipe(
            map(response => response as T)
        );
    }

    public doPost<T, R>(serviceUrl: string, body: T, opts?: Options): Observable<R> {
        const ropts = this.createOptions(opts);

        return this.http.post(serviceUrl, body, ropts).pipe(
            map(response => response as R)
        );
    }

    public doPut<T, R>(serviceUrl: string, body: T, opts?: Options): Observable<R> {
        const ropts = this.createOptions(opts);

        return this.http.put(serviceUrl, body, ropts).pipe(
            map(response => response as R)
        );
    }

    public doGetParameters<T>(serviceUrl: string, opts?: Options): Observable<T> {
        const ropts = this.createOptions(opts);

        return this.http.get(serviceUrl, ropts).pipe(
            map(response => response as T)
        );
    }

    public doDelete<T>(serviceUrl: string, opts?: Options): Observable<T> {
        const ropts = this.createOptions(opts);

        return this.http.delete(serviceUrl, ropts).pipe(
            map(response => response as T)
        );
    }
}
