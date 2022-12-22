import { gql } from '@apollo/client';
import { ABOUT_Z1NEWS } from '../general_data/ABOUT_Z1NEWS';
import { CONTACT_INFO } from '../general_data/CONTACT_INFO';
import { FLAG } from '../general_data/FLAG';
import MENU from '../general_data/GET_MENU';
import LOGO from '../general_data/LOGO';
import { MAIN_SOCIAL_MEDIA } from '../general_data/MAIN_SOCIAL_MEDIA';
import { POLICY_PRIVACY } from '../general_data/POLICY_PRIVACY';
import { TERMS_AND_CONDITIONS } from '../general_data/TERMS_AND_CONDITIONS';
import { BOTTOM_BANNER } from '../home/BOTTOM_BANNER';
import { LAST_POST } from '../home/LAST_POST';
import { TOP_BANNER } from '../home/TopBanner';
import { SIDEBAR_ADS } from '../sidebar/SIDEBAR_ADS';
import { SIDEBAR_VIDEO } from '../sidebar/SIDEBAR_VIDEO';
import { SPONSOR } from '../sidebar/SPONSOR';

export const GET_LAYOUT = gql`
        query Layout {
                ${FLAG}
                ${MAIN_SOCIAL_MEDIA}
                ${CONTACT_INFO}
                ${LOGO}
                ${TOP_BANNER}
                ${MENU}
                ${LAST_POST}
                ${BOTTOM_BANNER}
                ${SIDEBAR_VIDEO}
                ${SPONSOR}
                ${SIDEBAR_ADS}
                ${ABOUT_Z1NEWS}
                ${TERMS_AND_CONDITIONS}
                ${POLICY_PRIVACY}
        }
`;
