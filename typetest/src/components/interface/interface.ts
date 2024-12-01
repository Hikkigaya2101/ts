export interface Units{
    id:Number,
    type:String,
    name:String,
    children:Units[]
    }

export interface Unit{
        id:Number,
        type:String,
        name:String,
        children:Unit[]
        }
        export interface AxiosResponse<T = never>  {
            data: T;
            status: number;
            statusText: string;
            headers: Record<string, string>;
            config: AxiosRequestConfig<T>;
            request?: any;
        }   
        export interface AxiosRequestConfig<T = any> {
            url?: string;
            baseURL?: string;
            data?: T;
            headers?: Record<string, string>;
            params?: any;
        }
