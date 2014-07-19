// Get contributor names of the repository

'use strict';

// Output all repository contributors
document.getElementById('output').innerHTML = getContributors(REPO_NAME, CLIENT.ID, CLIENT.SECRET);
