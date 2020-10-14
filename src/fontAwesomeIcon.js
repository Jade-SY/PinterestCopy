import Vue from "vue";

import {
    library
} from "@fortawesome/fontawesome-svg-core";
import {
    FontAwesomeIcon
} from "@fortawesome/vue-fontawesome";

import {
    faAddressCard,
    faLink,
    faRedo,
    faUndo
} from "@fortawesome/free-solid-svg-icons";
import {
    faTrashAlt
} from "@fortawesome/free-regular-svg-icons";
import {
    faPinterest
} from "@fortawesome/free-brands-svg-icons";

library.add(faTrashAlt);
library.add(faPinterest);
library.add(faAddressCard, faLink, faRedo, faUndo);

Vue.component("font-awesome-icon", FontAwesomeIcon);