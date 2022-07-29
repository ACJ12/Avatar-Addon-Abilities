import { World } from
'mojang-minecraft'
import commands from '../
import.js';
import { get.Score } from "./../../
util.js";

const command = {
    name: 'Water Manipulation',
    description: 'Manipulate the water and shoot
it at your enemy.',
    style: 'water',
    unlockable: 0,
    execute(player) {
        player.runCommand("run
commands here!");
    }
}

export default command
