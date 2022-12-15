import { gql } from '@apollo/client';
import MENU from '../general_data/GET_MENU';
import { CONTACT_INFO } from '../general_data/CONTACT_INFO';
import { MAIN_SOCIAL_MEDIA } from '../general_data/MAIN_SOCIAL_MEDIA';
import { FLAG } from '../general_data/FLAG';

export const GET_HOMEPAGE = gql`
    query HomePage {
       ${MAIN_SOCIAL_MEDIA}
    }
`;
