/**
 * @param {number} mass
 * @param {number[]} asteroids
 * @return {boolean}
 */
var asteroidsDestroyed = function(mass, asteroids) {
    const sortedArray = asteroids.sort((a, b) => a - b);
    let currMass = mass;
    for(const currEle of sortedArray) {
        if(currMass < currEle) {
            return false;
        }
        currMass += currEle;
    }
    return true;
};