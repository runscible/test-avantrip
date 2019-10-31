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

const queryFilteredTravelData = gql`query FilterCards($stayId: String!) {
                                      allCards(filter: { stayId: $stayId }) {
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
        if (loading) return 'LOADING';
        if (error) return 'ERROR';
        return data.allStayDatas;
    }
    export function getAllTravelData() {
        const {loading, error, data} = useQuery(queryTravelData);
        if (loading) return 'LOADING';
        if (error) return 'ERROR';
        return data.allCards;
    }
    export function getFilteredTravel (filter){
        const {loading , error, data } = useQuery(queryFilteredTravelData, {
            variables: {
                stayId: filter
            }
        });
        if (loading) return 'LOADING';
        if (error) return 'ERROR';
        return data.allCards;
    }





