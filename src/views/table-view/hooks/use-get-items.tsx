import { ItemsApi } from 'api/items.api';
import { Grado } from 'models/grado';
import { useQuery } from 'react-query';


const useGetItem = (index: string, enabled = true) => {
    return useQuery<Grado | undefined>(
        ["itemRegister", index],
        ItemsApi.getByIndex,
        {
            refetchOnWindowFocus: false,
            enabled
        }
    );
}

export default useGetItem;