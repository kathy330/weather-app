import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
	faCloud,
	faSun,
    faCloudRain,
    faSnowflake,
    faPooStorm
} from '@fortawesome/free-solid-svg-icons';

export const Sun = <FontAwesomeIcon icon={faSun} color="#dfce50"/>;
export const Rain = <FontAwesomeIcon icon={faCloudRain} color="#4d719e"/>;
export const Cloud = <FontAwesomeIcon icon={faCloud} color="#87ceeb"/>;
export const Snow = <FontAwesomeIcon icon={faSnowflake} color="#d1dad9"/>;
export const Storm = <FontAwesomeIcon icon={faPooStorm} color="#666"/>;