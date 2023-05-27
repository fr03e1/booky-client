import {$host} from "./axios";

export const getFilters = () => {
    return $host.get('/filters').then(res => res);
}