// Get contributor names of the repository

'use strict';

var REPO_NAME = 'WaterEmblem';

document.getElementById('output').innerHTML = getContributors(REPO_NAME, CLIENT.ID, CLIENT.SECRET);
