import { gql } from '@apollo/client';
import MENU from '../home/GET_MENU';
import { CONTACT_INFO } from '../util/CONTACT_INFO';
import { MAIN_SOCIAL_MEDIA } from '../util/MAIN_SOCIAL_MEDIA';

export const GET_HOMEPAGE = gql`
    query HomePage {
        ${MAIN_SOCIAL_MEDIA}
        ${CONTACT_INFO}
        ${MENU}
    }
`;
