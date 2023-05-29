import {$host} from "./index";

export const getFilters = async () => {
    try {
        const {data} = await $host.get('/filters');
        return data;
    }catch (e:any) {
        console.log(e);
    }
}
