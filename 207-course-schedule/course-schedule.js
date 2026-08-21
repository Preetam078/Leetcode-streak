/**
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {boolean}
 */
var canFinish = function(numCourses, prerequisites) {
    const adj = Array.from({length: numCourses}, () => []);
    for(const [pre, next] of prerequisites) {
        adj[next].push(pre);
    }

    const vis = Array.from({length: numCourses}, () => false);
    const pathVis = Array.from({length: numCourses}, () => false);

    const hasCycle = function(node) {
        vis[node] = true;
        pathVis[node] = true;
        for(const curr of adj[node]) {
            if(vis[curr] === false) {
                if(hasCycle(curr)) return true;
            } else if(pathVis[curr] === true) return true;
        }
        pathVis[node] = false;
        return false;
    }

    for(let i = 0; i < numCourses; i++) {
        if(vis[i] === false) {
            if(hasCycle(i)) return false;
        }
    }
    return true;
};