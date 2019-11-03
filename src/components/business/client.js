import { GraphQLClient } from 'graphql-request';

export const client = new GraphQLClient('https://api.graph.cool/simple/v1/cjtk3okib547g0182680rna24'); 

export const queryStayData = `{
        allStayDatas {
            bestPrice
            label
            id
            customId
            }
        }`;

export const queryTravelData = `{
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

export const queryFilteredTravelData = `query FilterCards($stayId: String!) {
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
