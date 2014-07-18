// Get contributor names of the repository

'use strict';

// The target repository
var REPO_NAME = 'WaterEmblem';

// Output all repository contributors
document.getElementById('output').innerHTML = getContributors(REPO_NAME, CLIENT.ID, CLIENT.SECRET);
