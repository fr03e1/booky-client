import {$host} from "./axios";

export function getFilters() {
    return $host.get('/filters').then(res => res);
}