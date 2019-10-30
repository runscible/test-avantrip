import {useQuery} from 'react-apollo';
import {gql} from 'apollo-boost';

const queryStayData = gql`{
        allStayDatas {
            bestPrice
            label
            id
            customId
            }
        }`;



export function getDataStay() {
    const {loading, error , data} = useQuery(queryStayData)
    if (loading) return 'LOADING';
    if (error) return 'ERROR';
    return data.allStayDatas;
}
export function getAllTravelData(filter){
    const queryTravelData = gql`{
                          allCards(filter: {
                            stayId_starts_with: "${filter}"
                          }){
                            id
                            imgUrl
                            link
                            price
                            scale
                            stayId
                            description
                          }
                        }`;
    const {loading , error, data } = useQuery(queryTravelData);
    if (loading) return 'LOADING';
    if (error) return 'ERROR';
    return data.allCards;
}




