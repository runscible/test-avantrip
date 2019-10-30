import {useQuery} from 'react-apollo';
import {gql} from 'apollo-boost';

const queryStayData = gql`{
        allStayDatas {
            bestPrice
            label
            id
            }
        }`;

const queryTravelData = gql`{
                          allCards{
                            id
                            imgUrl
                            link
                            price
                            scale
                            stayId
                            description
                          }
                        }`;

export function getDataStay() {
    const {loading, error , data} = useQuery(queryStayData)
    if (loading) return loading;
    if (error) return error;
    return data.allStayDatas;
}
export function getAllTravelData(){
    const {loading , error, data } = useQuery(queryTravelData);
    if (loading) return loading;
    if (error) return error;
    return data.allCards;
}




